'use client'

import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import { ArrowRight, Camera, Check, Plus, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { useRouter } from "next/navigation";

export default function ProfileBuilding() {
  const { isLoaded, user } = useUser();
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [skillInput, setSkillInput] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    education: "",
    skills: [] as string[],
    interests: "",
    profilePicture: null as File | null,
  });
  const [errors, setErrors] = useState({
    name: "",
    education: "",
    skills: "",
    interests: "",
    profilePicture: "",
  });
  const [notification, setNotification] = useState<{ message: string; type: "success" | "error" | null }>({ message: "", type: null });
  const [isSaving, setIsSaving] = useState(false);

  const steps = [
    { id: 1, title: "Basic Info", tip: "A clear name helps build trust with mentors!" },
    { id: 2, title: "Education", tip: "Your educational background helps mentors understand your foundation." },
    { id: 3, title: "Skills", tip: "Add skills you have or want to develop - mentors love helping with both!" },
    { id: 4, title: "Career Interests", tip: "The more specific you are, the better we can match you!" },
    { id: 5, title: "Profile Picture", tip: "A clear photo helps mentors put a face to the name!" },
  ];

  // Fetch initial data from Clerk's unsafeMetadata
  useEffect(() => {
    if (isLoaded && user) {
      const fetchedData = {
        name: user.fullName || "",
        education: (user.unsafeMetadata?.education as string) || "",
        skills: (user.unsafeMetadata?.skills as string[]) || [],
        interests: (user.unsafeMetadata?.interests as string) || "",
        profilePicture: null, // File not stored; use URL in real app
      };
      setFormData((prev) => ({ ...prev, ...fetchedData }));
    }
  }, [isLoaded, user]);

  if (!isLoaded) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  if (!user) {
    router.push("/sign-in");
    return null;
  }

  const validateStep = (stepId: number) => {
    let isValid = true;
    const newErrors = { ...errors };

    if (stepId === 1) {
      if (!formData.name.trim()) {
        newErrors.name = "Full name is required.";
        isValid = false;
      } else if (!/^[a-zA-Z\s]+$/.test(formData.name.trim()) || formData.name.trim().length < 2) {
        newErrors.name = "Name must contain only letters and be at least 2 characters long.";
        isValid = false;
      } else {
        newErrors.name = "";
      }
    }

    if (stepId === 2) {
      if (!formData.education.trim()) {
        newErrors.education = "Education is required.";
        isValid = false;
      } else if (formData.education.trim().length < 3) {
        newErrors.education = "Education must be at least 3 characters long.";
        isValid = false;
      } else {
        newErrors.education = "";
      }
    }

    if (stepId === 3) {
      if (formData.skills.length === 0) {
        newErrors.skills = "At least one skill is required.";
        isValid = false;
      } else {
        newErrors.skills = "";
      }
    }

    if (stepId === 4) {
      if (!formData.interests.trim()) {
        newErrors.interests = "Career interests are required.";
        isValid = false;
      } else if (formData.interests.trim().length < 3) {
        newErrors.interests = "Interests must be at least 3 characters long.";
        isValid = false;
      } else {
        newErrors.interests = "";
      }
    }

    if (stepId === 5) {
      if (!formData.profilePicture) {
        newErrors.profilePicture = "A profile picture is required.";
        isValid = false;
      } else {
        newErrors.profilePicture = "";
      }
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleStepComplete = async (stepId: number) => {
    setIsSaving(true);
    setNotification({ message: "", type: null });

    if (validateStep(stepId)) {
      try {
        // Save to Clerk's unsafeMetadata
        await user.update({
          unsafeMetadata: {
            name: formData.name,
            education: formData.education,
            skills: formData.skills,
            interests: formData.interests,
            // Profile picture would be a URL after uploading to storage
          },
        });
        if (!completedSteps.includes(stepId)) {
          setCompletedSteps([...completedSteps, stepId]);
        }
        if (stepId < 5) {
          setCurrentStep(stepId + 1);
        }
        setNotification({
          message: `${steps[stepId - 1].title} saved successfully.`,
          type: "success",
        });
      } catch (error) {
        setNotification({
          message: "Failed to save. Please try again.",
          type: "error",
        });
      }
    } else {
      setNotification({
        message: "Please fix the errors before continuing.",
        type: "error",
      });
    }
    setIsSaving(false);
  };

  const handleSkillAdd = (raw: string) => {
    const trimmed = raw.trim();
    if (!trimmed || formData.skills.includes(trimmed)) return;
    setFormData({ ...formData, skills: [...formData.skills, trimmed] });
    setSkillInput("");
    if (formData.skills.length === 0) {
      setErrors((prev) => ({ ...prev, skills: "" }));
    }
  };

  const handleSkillRemove = (skill: string) => {
    setFormData((prev) => ({ ...prev, skills: prev.skills.filter((s) => s !== skill) }));
  };

  const handleFinish = async () => {
    setIsSaving(true);
    setNotification({ message: "", type: null });

    // Validate all steps before finishing
    for (let i = 1; i <= 5; i++) {
      if (!validateStep(i)) {
        setNotification({
          message: "Please complete all steps with valid data before finishing.",
          type: "error",
        });
        setIsSaving(false);
        return;
      }
    }

    try {
      await user.update({
        unsafeMetadata: {
          name: formData.name,
          education: formData.education,
          skills: formData.skills,
          interests: formData.interests,
          // Profile picture would be a URL after uploading to storage
        },
      });
      router.push("/ai-assessment");
    } catch (error) {
      setNotification({
        message: "Failed to complete profile. Please try again.",
        type: "error",
      });
    }
    setIsSaving(false);
  };

  const progressPercentage = (completedSteps.length / 5) * 100;

  return (
    <div
      className="min-h-screen"
      style={{
        backgroundImage: 'linear-gradient(180deg, rgba(47,107,174,0.18), rgba(255,255,255,1), rgba(90,141,200,0.18))',
      }}
    >
      <div className="container mx-auto px-4 py-10 flex flex-col items-center">
        <div className="w-full max-w-2xl">
          {/* Heading + Inline Progress */}
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold text-mastero-dark mb-2">Build Your Profile</h1>
            <p className="text-mastero-text-medium mb-3">
              Step {currentStep} of 5 - Let's create your mentorship profile
            </p>
            <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
              <div
                className="h-2 bg-gradient-to-r from-mastero-blue to-mastero-blue-end transition-all duration-500"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
            {notification.message && (
              <div
                className={`mt-4 p-4 rounded-md ${
                  notification.type === "success" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                }`}
              >
                {notification.message}
              </div>
            )}
          </div>

          <div className="space-y-6">
            {/* Step 1: Basic Info */}
            <Card className={`transition-all duration-300 ${currentStep === 1 ? 'ring-2 ring-mastero-blue shadow-md' : ''}`}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-mastero-dark">Basic Information</h3>
                  {completedSteps.includes(1) && (
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                  )}
                </div>
                {currentStep === 1 && (
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                          setErrors({ ...errors, name: "" });
                        }}
                        placeholder="Enter your full name"
                      />
                      {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                    </div>
                    <div className="flex justify-center">
                      <Button
                        onClick={() => handleStepComplete(1)}
                        className="bg-gradient-to-r from-mastero-blue to-mastero-blue-end text-white"
                        disabled={isSaving || !formData.name}
                      >
                        {isSaving ? "Saving..." : "Save & Continue"} <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Step 2: Education */}
            <Card className={`transition-all duration-300 ${currentStep === 2 ? 'ring-2 ring-mastero-blue shadow-md' : ''}`}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-mastero-dark">Education</h3>
                  {completedSteps.includes(2) && (
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                  )}
                </div>
                {currentStep === 2 && (
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="education">Highest Education</Label>
                      <Input
                        id="education"
                        value={formData.education}
                        onChange={(e) => {
                          setFormData({ ...formData, education: e.target.value });
                          setErrors({ ...errors, education: "" });
                        }}
                        placeholder="e.g., Bachelor's in Computer Science"
                      />
                      {errors.education && <p className="text-red-500 text-sm mt-1">{errors.education}</p>}
                    </div>
                    <div className="flex justify-center">
                      <Button
                        onClick={() => handleStepComplete(2)}
                        className="bg-gradient-to-r from-mastero-blue to-mastero-blue-end text-white"
                        disabled={isSaving || !formData.education}
                      >
                        {isSaving ? "Saving..." : "Save & Continue"} <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Step 3: Skills */}
            <Card className={`transition-all duration-300 ${currentStep === 3 ? 'ring-2 ring-mastero-blue shadow-md' : ''}`}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-mastero-dark">Skills</h3>
                  {completedSteps.includes(3) && (
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                  )}
                </div>
                {currentStep === 3 && (
                  <div className="space-y-4">
                    <div>
                      <Label>Your Skills</Label>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {formData.skills.map((skill, index) => (
                          <div
                            key={`${skill}-${index}`}
                            className="flex items-center px-3 py-1 bg-mastero-bg-subtle text-mastero-blue rounded-full text-sm"
                          >
                            {skill}
                            <button
                              onClick={() => handleSkillRemove(skill)}
                              className="ml-2 text-mastero-blue hover:text-red-500"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          </div>
                        ))}
                      </div>
                      <div className="flex gap-2">
                        <Input
                          placeholder="Add a skill and press Enter or click Add"
                          value={skillInput}
                          onChange={(e) => setSkillInput(e.target.value)}
                          onKeyDown={(e) => {
                            if (e.key === "Enter") {
                              e.preventDefault();
                              handleSkillAdd(skillInput);
                            }
                          }}
                        />
                        <Button
                          type="button"
                          variant="secondary"
                          onClick={() => handleSkillAdd(skillInput)}
                        >
                          <Plus className="w-4 h-4 mr-1" /> Add
                        </Button>
                      </div>
                      {errors.skills && <p className="text-red-500 text-sm mt-1">{errors.skills}</p>}
                    </div>
                    <div className="flex justify-center">
                      <Button
                        onClick={() => handleStepComplete(3)}
                        className="bg-gradient-to-r from-mastero-blue to-mastero-blue-end text-white"
                        disabled={isSaving || formData.skills.length === 0}
                      >
                        {isSaving ? "Saving..." : "Save & Continue"} <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Step 4: Career Interests */}
            <Card className={`transition-all duration-300 ${currentStep === 4 ? 'ring-2 ring-mastero-blue shadow-md' : ''}`}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-mastero-dark">Career Interests</h3>
                  {completedSteps.includes(4) && (
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                  )}
                </div>
                {currentStep === 4 && (
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="interests">What are your career goals?</Label>
                      <Input
                        id="interests"
                        value={formData.interests}
                        onChange={(e) => {
                          setFormData({ ...formData, interests: e.target.value });
                          setErrors({ ...errors, interests: "" });
                        }}
                        placeholder="e.g., Transition to Product Management"
                      />
                      {errors.interests && <p className="text-red-500 text-sm mt-1">{errors.interests}</p>}
                    </div>
                    <div className="flex justify-center">
                      <Button
                        onClick={() => handleStepComplete(4)}
                        className="bg-gradient-to-r from-mastero-blue to-mastero-blue-end text-white"
                        disabled={isSaving || !formData.interests}
                      >
                        {isSaving ? "Saving..." : "Save & Continue"} <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Step 5: Profile Picture */}
            <Card className={`transition-all duration-300 ${currentStep === 5 ? 'ring-2 ring-mastero-blue shadow-md' : ''}`}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-mastero-dark">Profile Picture</h3>
                  {completedSteps.includes(5) && (
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                  )}
                </div>
                {currentStep === 5 && (
                  <div className="space-y-4">
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                      <Camera className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-600 mb-4">Drag and drop your photo here, or click to browse</p>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => {
                          const file = e.target.files?.[0] || null;
                          setFormData({ ...formData, profilePicture: file });
                          setErrors({ ...errors, profilePicture: "" });
                        }}
                      />
                      {formData.profilePicture && (
                        <p className="text-sm text-gray-600 mt-2">Image uploaded: {formData.profilePicture.name}</p>
                      )}
                    </div>
                    {errors.profilePicture && <p className="text-red-500 text-sm mt-1">{errors.profilePicture}</p>}
                    <div className="flex justify-center">
                      <Button
                        onClick={handleFinish}
                        className="bg-gradient-to-r from-mastero-blue to-mastero-blue-end text-white"
                        disabled={isSaving || !formData.profilePicture}
                      >
                        {isSaving ? "Saving..." : "Complete Profile"} <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}