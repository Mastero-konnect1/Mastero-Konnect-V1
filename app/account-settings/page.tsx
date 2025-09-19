'use client'

import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import { ArrowRight, Camera, Check, Key, User, CreditCard, History, Database, Lock, Plus, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { useRouter } from "next/navigation";

export default function AccountSettings() {
  const { isLoaded, user } = useUser();
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    education: "",
    interests: "",
    skills: [] as string[],
    profilePicture: null as File | null,
    twoFactorEnabled: false,
    password: "",
    confirmPassword: "",
    currentPassword: "",
    dataPreferences: { shareData: false, receiveEmails: true },
    paymentMethod: "",
  });
  const [skillInput, setSkillInput] = useState("");
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    education: "",
    interests: "",
    skills: "",
    password: "",
    paymentMethod: "",
  });
  const [showPasswordFields, setShowPasswordFields] = useState(false);
  const [notification, setNotification] = useState<{ message: string; type: "success" | "error" | null }>({ message: "", type: null });
  const [isSaving, setIsSaving] = useState(false);

  // Simulate fetching ProfileBuilding data from Clerk's unsafeMetadata
  useEffect(() => {
    if (isLoaded && user) {
      // In a real app, fetch from Clerk metadata or backend API
      // Example: user.getUnsafeMetadata() or fetch('/api/user-profile')
      const fetchedData = {
        name: user.fullName || "",
        email: user.primaryEmailAddress?.emailAddress || "",
        education: (user.unsafeMetadata?.education as string) || "",
        interests: (user.unsafeMetadata?.interests as string) || "",
        skills: (user.unsafeMetadata?.skills as string[]) || [],
        profilePicture: null, // File would typically be a URL from storage
      };
      setFormData((prev) => ({ ...prev, ...fetchedData }));
    }
  }, [isLoaded, user]);

  if (!isLoaded) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  if (!user) {
    router.push("/sign-in");
    return null;
  }

  const validateSection = (section: string) => {
    let isValid = true;
    const newErrors = { ...errors };

    if (section === "personal") {
      if (!formData.name.trim()) {
        newErrors.name = "Full name is required.";
        isValid = false;
      } else if (!/^[a-zA-Z\s]+$/.test(formData.name.trim()) || formData.name.trim().length < 2) {
        newErrors.name = "Name must contain only letters and be at least 2 characters long.";
        isValid = false;
      } else {
        newErrors.name = "";
      }

      if (!formData.email.trim()) {
        newErrors.email = "Email is required.";
        isValid = false;
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
        newErrors.email = "Please enter a valid email address.";
        isValid = false;
      } else {
        newErrors.email = "";
      }

      if (formData.phone && !/^\d{10}$/.test(formData.phone.trim())) {
        newErrors.phone = "Phone number must be a 10-digit number.";
        isValid = false;
      } else {
        newErrors.phone = "";
      }

      if (!formData.address.trim()) {
        newErrors.address = "Address is required.";
        isValid = false;
      } else if (formData.address.trim().length < 5) {
        newErrors.address = "Address must be at least 5 characters long.";
        isValid = false;
      } else {
        newErrors.address = "";
      }

      if (!formData.education.trim()) {
        newErrors.education = "Education is required.";
        isValid = false;
      } else if (formData.education.trim().length < 3) {
        newErrors.education = "Education must be at least 3 characters long.";
        isValid = false;
      } else {
        newErrors.education = "";
      }

      if (!formData.interests.trim()) {
        newErrors.interests = "Career interests are required.";
        isValid = false;
      } else if (formData.interests.trim().length < 3) {
        newErrors.interests = "Interests must be at least 3 characters long.";
        isValid = false;
      } else {
        newErrors.interests = "";
      }

      if (formData.skills.length === 0) {
        newErrors.skills = "At least one skill is required.";
        isValid = false;
      } else {
        newErrors.skills = "";
      }
    }

    if (section === "security" && showPasswordFields) {
      if (!formData.currentPassword) {
        newErrors.password = "Current password is required.";
        isValid = false;
      } else if (!formData.password) {
        newErrors.password = "New password is required.";
        isValid = false;
      } else if (formData.password.length < 8) {
        newErrors.password = "New password must be at least 8 characters long.";
        isValid = false;
      } else if (formData.password !== formData.confirmPassword) {
        newErrors.password = "New passwords do not match.";
        isValid = false;
      } else {
        newErrors.password = "";
      }
    }

    if (section === "payments") {
      if (formData.paymentMethod && !/^\w+\s+ending\s+in\s+\d{4}$/.test(formData.paymentMethod)) {
        newErrors.paymentMethod = "Enter a valid payment method (e.g., Visa ending in 1234).";
        isValid = false;
      } else {
        newErrors.paymentMethod = "";
      }
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSave = async (section: string) => {
    setIsSaving(true);
    setNotification({ message: "", type: null });

    if (validateSection(section)) {
      try {
        // Simulate async save to Clerk or backend
        await new Promise((resolve) => setTimeout(resolve, 1000)); // Mock API delay
        // In a real app, update Clerk metadata or call backend API
        // Example: await user.update({ unsafeMetadata: { education: formData.education, skills: formData.skills, interests: formData.interests } });
        setNotification({
          message: `${section.charAt(0).toUpperCase() + section.slice(1)} settings saved successfully.`,
          type: "success",
        });
      } catch (error) {
        setNotification({
          message: "Failed to save settings. Please try again.",
          type: "error",
        });
      }
    } else {
      setNotification({
        message: "Please fix the errors in the form before saving.",
        type: "error",
      });
    }
    setIsSaving(false);
  };

  const handleSkillAdd = (skill: string) => {
    const trimmed = skill.trim();
    if (!trimmed || formData.skills.includes(trimmed)) return;
    setFormData((prev) => ({ ...prev, skills: [...prev.skills, trimmed] }));
    setSkillInput("");
    if (formData.skills.length === 0) {
      setErrors((prev) => ({ ...prev, skills: "" }));
    }
  };

  const handleSkillRemove = (skill: string) => {
    setFormData((prev) => ({ ...prev, skills: prev.skills.filter((s) => s !== skill) }));
  };

  return (
    <div
      className="min-h-screen"
      style={{
        backgroundImage: 'linear-gradient(180deg, rgba(47,107,174,0.18), rgba(255,255,255,1), rgba(90,141,200,0.18))',
      }}
    >
      <div className="container mx-auto px-4 py-10 flex flex-col items-center">
        <div className="w-full max-w-3xl">
          <h1 className="text-3xl font-bold text-center text-mastero-dark mb-8">Account Settings</h1>

          {/* Notification Area */}
          {notification.message && (
            <div
              className={`mb-6 p-4 rounded-md ${
                notification.type === "success" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
              }`}
            >
              {notification.message}
            </div>
          )}

          <Tabs defaultValue="personal" className="w-full">
            <TabsList className="grid grid-cols-5 mb-6">
              <TabsTrigger value="personal" className="flex items-center gap-2">
                <User className="w-5 h-5" /> Personal
              </TabsTrigger>
              <TabsTrigger value="security" className="flex items-center gap-2">
                <Key className="w-5 h-5" /> Security
              </TabsTrigger>
              <TabsTrigger value="data" className="flex items-center gap-2">
                <Database className="w-5 h-5" /> Data
              </TabsTrigger>
              <TabsTrigger value="payments" className="flex items-center gap-2">
                <CreditCard className="w-5 h-5" /> Payments
              </TabsTrigger>
              <TabsTrigger value="history" className="flex items-center gap-2">
                <History className="w-5 h-5" /> History
              </TabsTrigger>
            </TabsList>

            {/* Personal Info */}
            <TabsContent value="personal">
              <Card>
                <CardContent className="space-y-6 p-6">
                  <div>
                    <Label>Full Name</Label>
                    <Input
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        setErrors({ ...errors, name: "" });
                      }}
                      placeholder="Enter your full name"
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <Label>Email</Label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        setErrors({ ...errors, email: "" });
                      }}
                      placeholder="Enter your email"
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>
                  <div>
                    <Label>Phone</Label>
                    <Input
                      value={formData.phone}
                      onChange={(e) => {
                        setFormData({ ...formData, phone: e.target.value });
                        setErrors({ ...errors, phone: "" });
                      }}
                      placeholder="Enter your phone number"
                    />
                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                  </div>
                  <div>
                    <Label>Address</Label>
                    <Input
                      value={formData.address}
                      onChange={(e) => {
                        setFormData({ ...formData, address: e.target.value });
                        setErrors({ ...errors, address: "" });
                      }}
                      placeholder="Enter your address"
                    />
                    {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
                  </div>
                  <div>
                    <Label>Education</Label>
                    <Input
                      value={formData.education}
                      onChange={(e) => {
                        setFormData({ ...formData, education: e.target.value });
                        setErrors({ ...errors, education: "" });
                      }}
                      placeholder="e.g., Bachelor's in Computer Science"
                    />
                    {errors.education && <p className="text-red-500 text-sm mt-1">{errors.education}</p>}
                  </div>
                  <div>
                    <Label>Your Skills</Label>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {formData.skills.map((skill, i) => (
                        <div
                          key={`${skill}-${i}`}
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
                  <div>
                    <Label>Career Interests</Label>
                    <Input
                      value={formData.interests}
                      onChange={(e) => {
                        setFormData({ ...formData, interests: e.target.value });
                        setErrors({ ...errors, interests: "" });
                      }}
                      placeholder="e.g., Transition to Product Management"
                    />
                    {errors.interests && <p className="text-red-500 text-sm mt-1">{errors.interests}</p>}
                  </div>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <Camera className="w-10 h-10 text-gray-400 mx-auto mb-2" />
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) =>
                        setFormData({ ...formData, profilePicture: e.target.files?.[0] || null })
                      }
                    />
                    {formData.profilePicture && (
                      <p className="text-sm text-gray-600 mt-2">Image uploaded: {formData.profilePicture.name}</p>
                    )}
                  </div>
                  <div className="flex justify-end">
                    <Button
                      onClick={() => handleSave("personal")}
                      className="bg-gradient-to-r from-mastero-blue to-mastero-blue-end text-white"
                      disabled={isSaving}
                    >
                      {isSaving ? "Saving..." : "Save"} <Check className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Security */}
            <TabsContent value="security">
              <Card>
                <CardContent className="space-y-6 p-6">
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="twoFactor"
                      checked={formData.twoFactorEnabled}
                      onChange={(e) =>
                        setFormData({ ...formData, twoFactorEnabled: e.target.checked })
                      }
                    />
                    <Label htmlFor="twoFactor">Enable Two-Factor Authentication</Label>
                  </div>
                  <div>
                    <Button
                      variant="outline"
                      onClick={() => setShowPasswordFields(!showPasswordFields)}
                      className="text-mastero-blue"
                    >
                      <Lock className="w-4 h-4 mr-2" /> {showPasswordFields ? "Cancel" : "Change Password"}
                    </Button>
                  </div>
                  {showPasswordFields && (
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="currentPassword">Current Password</Label>
                        <Input
                          id="currentPassword"
                          type="password"
                          value={formData.currentPassword}
                          onChange={(e) =>
                            setFormData({ ...formData, currentPassword: e.target.value })
                          }
                          placeholder="Enter current password"
                        />
                      </div>
                      <div>
                        <Label htmlFor="password">New Password</Label>
                        <Input
                          id="password"
                          type="password"
                          value={formData.password}
                          onChange={(e) =>
                            setFormData({ ...formData, password: e.target.value })
                          }
                          placeholder="Enter new password"
                        />
                      </div>
                      <div>
                        <Label htmlFor="confirmPassword">Confirm New Password</Label>
                        <Input
                          id="confirmPassword"
                          type="password"
                          value={formData.confirmPassword}
                          onChange={(e) =>
                            setFormData({ ...formData, confirmPassword: e.target.value })
                          }
                          placeholder="Confirm new password"
                        />
                      </div>
                      {errors.password && (
                        <p className="text-red-500 text-sm mt-1">{errors.password}</p>
                      )}
                    </div>
                  )}
                  <div className="flex justify-end">
                    <Button
                      onClick={() => handleSave("security")}
                      className="bg-gradient-to-r from-mastero-blue to-mastero-blue-end text-white"
                      disabled={isSaving}
                    >
                      {isSaving ? "Saving..." : "Save"} <Check className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Data */}
            <TabsContent value="data">
              <Card>
                <CardContent className="space-y-6 p-6">
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="shareData"
                      checked={formData.dataPreferences.shareData}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          dataPreferences: { ...formData.dataPreferences, shareData: e.target.checked },
                        })
                      }
                    />
                    <Label htmlFor="shareData">Share data with mentors for better recommendations</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="receiveEmails"
                      checked={formData.dataPreferences.receiveEmails}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          dataPreferences: { ...formData.dataPreferences, receiveEmails: e.target.checked },
                        })
                      }
                    />
                    <Label htmlFor="receiveEmails">Receive email notifications</Label>
                  </div>
                  <div className="flex justify-end">
                    <Button
                      onClick={() => handleSave("data")}
                      className="bg-gradient-to-r from-mastero-blue to-mastero-blue-end text-white"
                      disabled={isSaving}
                    >
                      {isSaving ? "Saving..." : "Save"} <Check className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Payments */}
            <TabsContent value="payments">
              <Card>
                <CardContent className="space-y-6 p-6">
                  <div>
                    <Label htmlFor="paymentMethod">Payment Method</Label>
                    <Input
                      id="paymentMethod"
                      value={formData.paymentMethod}
                      onChange={(e) => {
                        setFormData({ ...formData, paymentMethod: e.target.value });
                        setErrors({ ...errors, paymentMethod: "" });
                      }}
                      placeholder="e.g., Visa ending in 1234"
                    />
                    {errors.paymentMethod && (
                      <p className="text-red-500 text-sm mt-1">{errors.paymentMethod}</p>
                    )}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-mastero-dark">Current Subscription</p>
                    <p className="text-sm text-gray-600">Free Plan</p>
                    <Button
                      variant="link"
                      onClick={() => router.push("/upgrade-plan")}
                      className="text-mastero-blue"
                    >
                      Upgrade Plan
                    </Button>
                  </div>
                  <div className="flex justify-end">
                    <Button
                      onClick={() => handleSave("payments")}
                      className="bg-gradient-to-r from-mastero-blue to-mastero-blue-end text-white"
                      disabled={isSaving}
                    >
                      {isSaving ? "Saving..." : "Save"} <Check className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* History */}
            <TabsContent value="history">
              <Card>
                <CardContent className="space-y-6 p-6">
                  <div>
                    <p className="text-sm font-medium text-mastero-dark">Past Mentor Interactions</p>
                    <ul className="list-disc pl-5 mt-2 text-gray-600">
                      <li>John Doe - Session on Product Management (2025-08-15)</li>
                      <li>Jane Smith - Career Transition Workshop (2025-07-20)</li>
                    </ul>
                  </div>
                  <div className="flex justify-end">
                    <Button
                      onClick={() => handleSave("history")}
                      className="bg-gradient-to-r from-mastero-blue to-mastero-blue-end text-white"
                      disabled={isSaving}
                    >
                      {isSaving ? "Saving..." : "Save"} <Check className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}