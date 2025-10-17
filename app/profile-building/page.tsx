"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, CheckCircle, Camera, Plus, Trash2, Share2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";

type Step = "Personal & Contact" | "Skills" | "Experience" | "Education" | "Social";

interface PersonalInfo {
  firstName: string;
  lastName: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  profileImageDataUrl: string | null;
}

interface Experience {
  id: string;
  role: string;
  company: string;
  start: string;
  end: string;
  description: string;
}

interface Education {
  id: string;
  school: string;
  degree: string;
  start: string;
  end: string;
  notes: string;
}

interface Social {
  website: string;
  linkedin: string;
  github: string;
  twitter: string;
}

interface FormData {
  personal: PersonalInfo;
  skills: string[];
  experiences: Experience[];
  educations: Education[];
  social: Social;
}

const getDefaultFormData = (): FormData => ({
  personal: {
    firstName: "",
    lastName: "",
    title: "",
    email: "",
    phone: "",
    location: "",
    profileImageDataUrl: null,
  },
  skills: [],
  experiences: [],
  educations: [],
  social: { website: "", linkedin: "", github: "", twitter: "" },
});

// Type guard for metadata validation
const hasProfileMetadata = (metadata: any): metadata is {
  firstName?: string;
  lastName?: string;
  title?: string;
  email?: string;
  phone?: string;
  location?: string;
  skills?: string[];
  experiences?: any[];
  educations?: any[];
  social?: Partial<Social>;
} => {
  return metadata && typeof metadata === 'object' && 
         ('firstName' in metadata || 'lastName' in metadata || 'skills' in metadata);
};

export default function ProfileBuilder() {
  const steps: Step[] = ["Personal & Contact", "Skills", "Experience", "Education", "Social"];
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [formData, setFormData] = useState<FormData>(getDefaultFormData);
  const [isSaving, setIsSaving] = useState(false);
  const [skillInput, setSkillInput] = useState("");
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const router = useRouter();
  const { user, isLoaded } = useUser();

  const storageKey = "profileBuilder:v1";

  // Mapping between step names and completedSections keys
  const stepToSectionMap: Record<Step, keyof typeof completedSections> = {
    "Personal & Contact": "PersonalAndContact",
    Skills: "Skills",
    Experience: "Experience",
    Education: "Education",
    Social: "Social",
  };

  // Load saved data from user.unsafeMetadata or localStorage
  useEffect(() => {
    if (!isLoaded || !user) return;

    // Try to load from user.unsafeMetadata first
    const metadata = user.unsafeMetadata;
    if (hasProfileMetadata(metadata)) {
      const loadedData: FormData = {
        personal: {
          firstName: metadata.firstName || "",
          lastName: metadata.lastName || "",
          title: metadata.title || "",
          email: metadata.email || "",
          phone: metadata.phone || "",
          location: metadata.location || "",
          profileImageDataUrl: null,
        },
        skills: Array.isArray(metadata.skills) ? metadata.skills : [],
        experiences: Array.isArray(metadata.experiences)
          ? metadata.experiences.map((exp: any) => ({
              id: exp.id || `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`,
              role: exp.role || "",
              company: exp.company || "",
              start: exp.start || "",
              end: exp.end || "",
              description: exp.description || "",
            }))
          : [],
        educations: Array.isArray(metadata.educations)
          ? metadata.educations.map((edu: any) => ({
              id: edu.id || `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`,
              school: edu.school || "",
              degree: edu.degree || "",
              start: edu.start || "",
              end: edu.end || "",
              notes: edu.notes || "",
            }))
          : [],
        social: {
          website: metadata.social?.website || "",
          linkedin: metadata.social?.linkedin || "",
          github: metadata.social?.github || "",
          twitter: metadata.social?.twitter || "",
        },
      };
      setFormData(loadedData);

      // Update completedSteps based on loaded data
      const newCompletedSteps: number[] = [];
      if (loadedData.personal.firstName && loadedData.personal.lastName) newCompletedSteps.push(1);
      if (loadedData.skills.length > 0) newCompletedSteps.push(2);
      if (loadedData.experiences.length > 0 && loadedData.experiences.every((exp) => exp.role && exp.company))
        newCompletedSteps.push(3);
      if (loadedData.educations.length > 0 && loadedData.educations.every((edu) => edu.school && edu.degree))
        newCompletedSteps.push(4);
      if (loadedData.social.website || loadedData.social.linkedin || loadedData.social.github || loadedData.social.twitter)
        newCompletedSteps.push(5);
      setCompletedSteps(newCompletedSteps);

      return;
    }

    // Fallback to localStorage if no metadata
    try {
      const saved = localStorage.getItem(storageKey);
      if (saved) {
        const parsed = JSON.parse(saved) as Partial<FormData>;
        setFormData((prev) => ({
          ...prev,
          ...parsed,
          personal: { ...prev.personal, ...(parsed.personal || {}) },
          social: { ...prev.social, ...(parsed.social || {}) },
        }));

        // Update completedSteps based on localStorage data
        const newCompletedSteps: number[] = [];
        if (parsed.personal?.firstName && parsed.personal?.lastName) newCompletedSteps.push(1);
        if (parsed.skills?.length) newCompletedSteps.push(2);
        if (parsed.experiences?.length && parsed.experiences.every((exp) => exp.role && exp.company))
          newCompletedSteps.push(3);
        if (parsed.educations?.length && parsed.educations.every((edu) => edu.school && edu.degree))
          newCompletedSteps.push(4);
        if (parsed.social?.website || parsed.social?.linkedin || parsed.social?.github || parsed.social?.twitter)
          newCompletedSteps.push(5);
        setCompletedSteps(newCompletedSteps);
      }
    } catch (err) {
      console.error("Failed to load saved profile:", err);
    }
  }, [isLoaded, user]);

  // Save to localStorage on change
  useEffect(() => {
    try {
      localStorage.setItem(storageKey, JSON.stringify(formData));
    } catch (err) {
      console.error("Failed to save profile:", err);
    }
  }, [formData]);

  // Save profile data to Clerk
  const saveProfileData = useCallback(async () => {
    if (!user) {
      alert("Error: User not authenticated. Please sign in.");
      return;
    }

    setIsSaving(true);
    try {
      const fullName = `${formData.personal.firstName} ${formData.personal.lastName}`.trim();
      await user.update({
        unsafeMetadata: {
          name: fullName,
          firstName: formData.personal.firstName,
          lastName: formData.personal.lastName,
          title: formData.personal.title,
          email: formData.personal.email,
          phone: formData.personal.phone,
          location: formData.personal.location,
          skills: formData.skills,
          experiences: formData.experiences,
          educations: formData.educations,
          social: formData.social,
        },
      });
      alert("Profile saved successfully!");
      router.push("/ai-assessment");
    } catch (error) {
      console.error("Error saving profile:", error);
      alert("Failed to save profile. Please try again.");
    } finally {
      setIsSaving(false);
    }
  }, [user, formData, router]);

  // Progress based on completed steps
  const progress = (completedSteps.length / steps.length) * 100;

  // Helper ID
  const makeId = () => `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;

  // Skills
  const addSkill = (skill: string) => {
    const s = (skill || "").trim();
    if (!s) return;
    if (!formData.skills.includes(s)) {
      setFormData((p) => ({ ...p, skills: [...p.skills, s] }));
      if (!completedSteps.includes(2)) {
        setCompletedSteps([...completedSteps, 2]);
      }
    }
    setSkillInput("");
  };

  const removeSkill = (skill: string) => {
    setFormData((p) => ({ ...p, skills: p.skills.filter((s) => s !== skill) }));
    if (formData.skills.length === 1) {
      setCompletedSteps(completedSteps.filter((step) => step !== 2));
    }
  };

  const clearAllSkills = () => {
    if (!confirm("Clear all skills?")) return;
    setFormData((p) => ({ ...p, skills: [] }));
    setCompletedSteps(completedSteps.filter((step) => step !== 2));
  };

  const handleSkillKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addSkill(skillInput);
    }
  };

  // Experience / Education list functions
  const addListItem = (type: "experiences" | "educations") => {
    if (type === "experiences") {
      setFormData((p) => ({
        ...p,
        experiences: [...p.experiences, { id: makeId(), role: "", company: "", start: "", end: "", description: "" }],
      }));
    } else {
      setFormData((p) => ({
        ...p,
        educations: [...p.educations, { id: makeId(), school: "", degree: "", start: "", end: "", notes: "" }],
      }));
    }
  };

  const removeListItem = (type: "experiences" | "educations", id: string) => {
    setFormData((p) => ({ ...p, [type]: p[type].filter((it) => it.id !== id) }));
    if (type === "experiences" && formData.experiences.length === 1) {
      setCompletedSteps(completedSteps.filter((step) => step !== 3));
    } else if (type === "educations" && formData.educations.length === 1) {
      setCompletedSteps(completedSteps.filter((step) => step !== 4));
    }
  };

  const updateListItem = (type: "experiences" | "educations", id: string, key: string, value: string) => {
    setFormData((p) => ({
      ...p,
      [type]: p[type].map((it) => (it.id === id ? { ...it, [key]: value } : it)),
    }));
    if (type === "experiences" && !completedSteps.includes(3)) {
      const hasValidExperience = formData.experiences.some((exp) => exp.role && exp.company);
      if (hasValidExperience) setCompletedSteps([...completedSteps, 3]);
    } else if (type === "educations" && !completedSteps.includes(4)) {
      const hasValidEducation = formData.educations.some((edu) => edu.school && edu.degree);
      if (hasValidEducation) setCompletedSteps([...completedSteps, 4]);
    }
  };

  // Profile picture
  const handleProfilePictureChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result;
      setFormData((prev) => ({
        ...prev,
        personal: { ...prev.personal, profileImageDataUrl: typeof result === "string" ? result : null },
      }));
    };
    reader.readAsDataURL(file);
  };

  // Personal & Social update helpers
  const updatePersonalField = (key: keyof PersonalInfo, value: string) => {
    setFormData((p) => ({ ...p, personal: { ...p.personal, [key]: value } }));
    if ((key === "firstName" || key === "lastName") && !completedSteps.includes(1)) {
      if (formData.personal.firstName && formData.personal.lastName) {
        setCompletedSteps([...completedSteps, 1]);
      }
    }
  };

  const updateSocialField = (key: keyof Social, value: string) => {
    setFormData((p) => ({ ...p, social: { ...p.social, [key]: value } }));
    if (!completedSteps.includes(5)) {
      const hasValidSocial = formData.social.website || formData.social.linkedin || formData.social.github || formData.social.twitter;
      if (hasValidSocial) setCompletedSteps([...completedSteps, 5]);
    }
  };

  // Export and Clear actions
  const exportJsonToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(JSON.stringify(formData, null, 2));
      alert("Profile JSON copied to clipboard!");
    } catch (err) {
      console.error("Copy failed", err);
      const w = window.open("");
      if (w) w.document.write(`<pre>${JSON.stringify(formData, null, 2)}</pre>`);
    }
  };

  const clearAll = () => {
    if (!confirm("Are you sure you want to clear all data?")) return;
    localStorage.removeItem(storageKey);
    setFormData(getDefaultFormData());
    setSkillInput("");
    setCompletedSteps([]);
    setCurrentStep(0);
  };

  // Completed sections for overall completion
  const completedSections = {
    PersonalAndContact: Boolean(formData.personal.firstName && formData.personal.lastName),
    Skills: formData.skills.length > 0,
    Experience: formData.experiences.length > 0 && formData.experiences.every((exp) => exp.role && exp.company),
    Education: formData.educations.length > 0 && formData.educations.every((edu) => edu.school && edu.degree),
    Social: Boolean(formData.social.linkedin || formData.social.github || formData.social.website || formData.social.twitter),
  };
  const completedCount = Object.values(completedSections).filter(Boolean).length;
  const overallCompletion = Math.round((completedCount / Object.keys(completedSections).length) * 100);

  // Navigation handlers
  const handleNext = () => {
    const currentSection = stepToSectionMap[steps[currentStep]];
    if (!completedSections[currentSection]) return;
    if (currentStep < steps.length - 1) {
      setCurrentStep((s) => s + 1);
      if (!completedSteps.includes(currentStep + 1)) {
        setCompletedSteps([...completedSteps, currentStep + 1]);
      }
    } else {
      saveProfileData();
    }
  };

  const handleBack = () => {
    if (currentStep > 0) setCurrentStep((s) => s - 1);
  };

  return (
    <div className="min-h-screen bg-blue-100 pt-24 pb-5 px-5">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-4xl font-bold text-blue-900 mb-2">Create Your Profile</h1>
          <p className="text-blue-700">Step {currentStep + 1} of {steps.length} • Overall: {overallCompletion}%</p>
        </div>

        {/* Progress (step-based) */}
        <Card className="mb-6 shadow-lg bg-white">
          <CardContent className="p-4 pt-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-black">Progress</span>
              <span className="text-sm font-medium text-blue-700">{Math.round(progress)}%</span>
            </div>
            <div className="w-full h-2 bg-gray-300 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-blue-600 to-blue-800 transition-all duration-500 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
          </CardContent>
        </Card>

        {/* Step card */}
        <Card className="shadow-md bg-white">
          <CardContent className="p-6">
            {/* Personal & Contact */}
            {steps[currentStep] === "Personal & Contact" && (
              <div className="space-y-4">
                <div className="flex flex-col items-center gap-4 pb-4 border-b">
                  <div className="relative">
                    {formData.personal.profileImageDataUrl ? (
                      <img
                        src={formData.personal.profileImageDataUrl}
                        alt="Profile"
                        className="w-24 h-24 rounded-full object-cover border-4 border-blue-600"
                      />
                    ) : (
                      <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center border-4 border-blue-600">
                        <Camera className="w-8 h-8 text-gray-500" />
                      </div>
                    )}
                    <Button
                      size="default"
                      className="absolute -bottom-1 -right-1 rounded-full w-9 h-9 p-0"
                      onClick={() => fileInputRef.current?.click()}
                    >
                      <Camera className="w-4 h-4" />
                    </Button>
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={handleProfilePictureChange}
                    />
                  </div>
                  <p className="text-sm text-gray-600">Upload profile picture</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">First Name</label>
                    <Input
                      value={formData.personal.firstName}
                      onChange={(e) => updatePersonalField("firstName", e.target.value)}
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Last Name</label>
                    <Input
                      value={formData.personal.lastName}
                      onChange={(e) => updatePersonalField("lastName", e.target.value)}
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Professional Title</label>
                  <Input
                    value={formData.personal.title}
                    onChange={(e) => updatePersonalField("title", e.target.value)}
                    placeholder="Senior Software Engineer"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Email</label>
                    <Input
                      type="email"
                      value={formData.personal.email}
                      onChange={(e) => updatePersonalField("email", e.target.value)}
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Phone</label>
                    <Input
                      value={formData.personal.phone}
                      onChange={(e) => updatePersonalField("phone", e.target.value)}
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                <div className="mt-2">
                  <label className="text-sm font-medium mb-2 block">Location</label>
                  <Input
                    value={formData.personal.location}
                    onChange={(e) => updatePersonalField("location", e.target.value)}
                    placeholder="San Francisco, CA"
                  />
                </div>
              </div>
            )}

            {/* Skills */}
            {steps[currentStep] === "Skills" && (
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-md border">
                  <div className="flex justify-between items-center">
                    <h3 className="font-medium text-lg">Skills</h3>
                    <Button size="default" className="!p-2" onClick={clearAllSkills} aria-label="Clear skills">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>

                  <div className="mt-3 grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div className="md:col-span-2">
                      <label className="text-sm font-medium mb-1 block">Add Skill</label>
                      <Input
                        value={skillInput}
                        onChange={(e) => setSkillInput(e.target.value)}
                        onKeyDown={handleSkillKeyDown}
                        placeholder="Add a skill (press Enter)"
                      />
                    </div>
                    <div className="flex items-end">
                      <Button onClick={() => addSkill(skillInput)} className="w-full flex items-center justify-center">
                        <Plus className="w-4 h-4 mr-2" /> Add
                      </Button>
                    </div>
                  </div>

                  <div className="mt-4">
                    <label className="text-sm font-medium mb-2 block">Added Skills</label>
                    <div className="flex flex-wrap gap-2">
                      {formData.skills.map((s) => (
                        <div
                          key={s}
                          className="inline-flex items-center bg-white border px-3 py-1 rounded-full text-sm shadow-sm"
                        >
                          <span className="mr-2 text-sm text-gray-800">{s}</span>
                          <button
                            onClick={() => removeSkill(s)}
                            className="ml-1 text-red-500 hover:text-red-700"
                            aria-label={`Remove ${s}`}
                          >
                            ×
                          </button>
                        </div>
                      ))}
                      {formData.skills.length === 0 && (
                        <p className="text-gray-500 text-sm">No skills added yet</p>
                      )}
                    </div>
                  </div>

                  <div className="mt-4">
                    <Button onClick={() => addSkill(skillInput)} className="w-full bg-blue-600 text-white hover:bg-blue-700">
                      <Plus className="w-4 h-4 mr-2" /> Add Skill
                    </Button>
                  </div>
                </div>
              </div>
            )}

            {/* Experience */}
            {steps[currentStep] === "Experience" && (
              <div className="space-y-4">
                {formData.experiences.map((exp) => (
                  <div key={exp.id} className="p-4 bg-gray-50 rounded-md border">
                    <div className="flex justify-between items-start">
                      <h3 className="font-medium">Experience</h3>
                      <Button size="default" className="!p-2" onClick={() => removeListItem("experiences", exp.id)}>
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
                      <div>
                        <label className="text-sm font-medium mb-1 block">Role</label>
                        <Input
                          value={exp.role}
                          onChange={(e) => updateListItem("experiences", exp.id, "role", e.target.value)}
                          placeholder="Software Engineer"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-1 block">Company</label>
                        <Input
                          value={exp.company}
                          onChange={(e) => updateListItem("experiences", exp.id, "company", e.target.value)}
                          placeholder="Tech Corp"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-1 block">Start</label>
                        <Input
                          value={exp.start}
                          onChange={(e) => updateListItem("experiences", exp.id, "start", e.target.value)}
                          placeholder="Jan 2020"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-1 block">End</label>
                        <Input
                          value={exp.end}
                          onChange={(e) => updateListItem("experiences", exp.id, "end", e.target.value)}
                          placeholder="Present"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label className="text-sm font-medium mb-1 block">Description</label>
                        <textarea
                          value={exp.description}
                          onChange={(e) => updateListItem("experiences", exp.id, "description", e.target.value)}
                          rows={3}
                          className="w-full rounded-md border border-input px-3 py-2 text-sm"
                          placeholder="Describe your responsibilities..."
                        />
                      </div>
                    </div>
                  </div>
                ))}

                <Button onClick={() => addListItem("experiences")} className="w-full">
                  <Plus className="w-4 h-4 mr-2" /> Add Experience
                </Button>

                {formData.experiences.length === 0 && (
                  <p className="text-center text-gray-500 text-sm py-4">No experience added yet</p>
                )}
              </div>
            )}

            {/* Education */}
            {steps[currentStep] === "Education" && (
              <div className="space-y-4">
                {formData.educations.map((edu) => (
                  <div key={edu.id} className="p-4 bg-gray-50 rounded-md border">
                    <div className="flex justify-between items-start">
                      <h3 className="font-medium">Education</h3>
                      <Button size="default" className="!p-2" onClick={() => removeListItem("educations", edu.id)}>
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
                      <div>
                        <label className="text-sm font-medium mb-1 block">School</label>
                        <Input
                          value={edu.school}
                          onChange={(e) => updateListItem("educations", edu.id, "school", e.target.value)}
                          placeholder="University Name"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-1 block">Degree</label>
                        <Input
                          value={edu.degree}
                          onChange={(e) => updateListItem("educations", edu.id, "degree", e.target.value)}
                          placeholder="Bachelor of Science"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-1 block">Start</label>
                        <Input
                          value={edu.start}
                          onChange={(e) => updateListItem("educations", edu.id, "start", e.target.value)}
                          placeholder="2016"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-1 block">End</label>
                        <Input
                          value={edu.end}
                          onChange={(e) => updateListItem("educations", edu.id, "end", e.target.value)}
                          placeholder="2020"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label className="text-sm font-medium mb-1 block">Notes</label>
                        <textarea
                          value={edu.notes}
                          onChange={(e) => updateListItem("educations", edu.id, "notes", e.target.value)}
                          rows={2}
                          className="w-full rounded-md border border-input px-3 py-2 text-sm"
                          placeholder="Additional details..."
                        />
                      </div>
                    </div>
                  </div>
                ))}

                <Button onClick={() => addListItem("educations")} className="w-full">
                  <Plus className="w-4 h-4 mr-2" /> Add Education
                </Button>

                {formData.educations.length === 0 && (
                  <p className="text-center text-gray-500 text-sm py-4">No education added yet</p>
                )}
              </div>
            )}

            {/* Social */}
            {steps[currentStep] === "Social" && (
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Website</label>
                  <Input
                    value={formData.social.website}
                    onChange={(e) => updateSocialField("website", e.target.value)}
                    placeholder="https://yourwebsite.com"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">LinkedIn</label>
                  <Input
                    value={formData.social.linkedin}
                    onChange={(e) => updateSocialField("linkedin", e.target.value)}
                    placeholder="https://linkedin.com/in/yourprofile"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">GitHub</label>
                  <Input
                    value={formData.social.github}
                    onChange={(e) => updateSocialField("github", e.target.value)}
                    placeholder="https://github.com/yourusername"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Twitter</label>
                  <Input
                    value={formData.social.twitter}
                    onChange={(e) => updateSocialField("twitter", e.target.value)}
                    placeholder="https://twitter.com/yourhandle"
                  />
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Navigation & Actions */}
        <div className="flex items-center justify-between gap-4 mt-6">
          <div className="flex gap-2">
            <Button
              onClick={handleBack}
              className="bg-gray-200 text-gray-800 hover:bg-gray-300"
              disabled={currentStep === 0}
            >
              Back
            </Button>
            {currentStep < steps.length - 1 ? (
              <Button
                onClick={handleNext}
                className="bg-blue-600 text-white hover:bg-blue-700"
                disabled={!completedSections[stepToSectionMap[steps[currentStep]]]}
              >
                Next <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            ) : (
              <Button
                onClick={saveProfileData}
                className="bg-green-600 text-white hover:bg-green-700"
                disabled={!completedSections[stepToSectionMap[steps[currentStep]]] || isSaving}
              >
                {isSaving ? "Saving..." : "Complete Profile"} <CheckCircle className="w-5 h-5 mr-2" />
              </Button>
            )}
          </div>

          <div className="flex gap-2">
            <Button
              onClick={exportJsonToClipboard}
              className="border border-gray-300 bg-white hover:bg-gray-50"
            >
              <Share2 className="w-4 h-4 mr-2" /> Export JSON
            </Button>
            <Button
              onClick={clearAll}
              className="border border-red-300 text-red-600 bg-white hover:bg-red-50"
            >
              <Trash2 className="w-4 h-4 mr-2" /> Clear All
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}