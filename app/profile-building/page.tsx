'use client'

import { useState } from "react";
import { ArrowRight, Camera, Check, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { useRouter } from "next/navigation";

export default function ProfileBuilding() {
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

  const steps = [
    { id: 1, title: "Basic Info", tip: "A clear name helps build trust with mentors!" },
    { id: 2, title: "Education", tip: "Your educational background helps mentors understand your foundation." },
    { id: 3, title: "Skills", tip: "Add skills you have or want to develop - mentors love helping with both!" },
    { id: 4, title: "Career Interests", tip: "The more specific you are, the better we can match you!" },
    { id: 5, title: "Profile Picture", tip: "A clear photo helps mentors put a face to the name!" }
  ];

  const handleStepComplete = (stepId: number) => {
    if (!completedSteps.includes(stepId)) {
      setCompletedSteps([...completedSteps, stepId]);
    }
    if (stepId < 5) {
      setCurrentStep(stepId + 1);
    }
  };

  const handleSkillAdd = (raw: string) => {
    const trimmed = raw.trim();
    if (!trimmed) return;
    if (!formData.skills.includes(trimmed)) {
      setFormData({ ...formData, skills: [...formData.skills, trimmed] });
    }
    setSkillInput("");
  };

  const handleFinish = () => {
    router.push("/ai-assessment");
  };

  const progressPercentage = (completedSteps.length / 5) * 100;

  return (
    <div
      className="min-h-screen"
      style={{
        backgroundImage: 'linear-gradient(180deg, rgba(47,107,174,0.18), rgba(255,255,255,1), rgba(90,141,200,0.18))'
      }}
    >
      {/* Centered Container */}
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
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div className="flex justify-center">
                      <Button 
                        onClick={() => handleStepComplete(1)}
                        className="bg-gradient-to-r from-mastero-blue to-mastero-blue-end text-white"
                        disabled={!formData.name}
                      >
                        Save & Continue <ArrowRight className="w-4 h-4 ml-2" />
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
                        onChange={(e) => setFormData({ ...formData, education: e.target.value })}
                        placeholder="e.g., Bachelor's in Computer Science"
                      />
                    </div>
                    <div className="flex justify-center">
                      <Button 
                        onClick={() => handleStepComplete(2)}
                        className="bg-gradient-to-r from-mastero-blue to-mastero-blue-end text-white"
                        disabled={!formData.education}
                      >
                        Save & Continue <ArrowRight className="w-4 h-4 ml-2" />
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
                          <span key={`${skill}-${index}`} className="px-3 py-1 text-mastero-blue rounded-full text-sm">
                            {skill}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-2">
                        <Input
                          placeholder="Add a skill and press Enter or click Add"
                          value={skillInput}
                          onChange={(e) => setSkillInput(e.target.value)}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                              e.preventDefault();
                              handleSkillAdd(skillInput);
                            }
                          }}
                        />
                        <Button type="button" variant="secondary" onClick={() => handleSkillAdd(skillInput)}>
                          <Plus className="w-4 h-4 mr-1" /> Add
                        </Button>
                      </div>
                    </div>
                    <div className="flex justify-center">
                      <Button 
                        onClick={() => handleStepComplete(3)}
                        className="bg-gradient-to-r from-mastero-blue to-mastero-blue-end text-white"
                        disabled={formData.skills.length === 0}
                      >
                        Save & Continue <ArrowRight className="w-4 h-4 ml-2" />
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
                        onChange={(e) => setFormData({ ...formData, interests: e.target.value })}
                        placeholder="e.g., Transition to Product Management"
                      />
                    </div>
                    <div className="flex justify-center">
                      <Button 
                        onClick={() => handleStepComplete(4)}
                        className="bg-gradient-to-r from-mastero-blue to-mastero-blue-end text-white"
                        disabled={!formData.interests}
                      >
                        Save & Continue <ArrowRight className="w-4 h-4 ml-2" />
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
                        }}
                      />
                    </div>
                    <div className="flex justify-center">
                      <Button 
                        onClick={handleFinish}
                        className="bg-gradient-to-r from-mastero-blue to-mastero-blue-end text-white"
                        disabled={!formData.profilePicture}
                      >
                        Complete Profile <ArrowRight className="w-4 h-4 ml-2" />
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