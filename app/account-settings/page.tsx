'use client'

import { useState, useRef, useEffect, useCallback, memo } from "react";
import { ArrowRight, Camera, Check, Key, User, CreditCard, History, Database, Lock, Plus, X, Home as HomeIcon, Search, Bot, Menu, Sparkles, Shield, Eye, EyeOff, Mail, Phone, MapPin, GraduationCap, Briefcase } from "lucide-react";

// Define FormData interface
interface FormData {
  name: string;
  email: string;
  phone: string;
  address: string;
  education: string;
  interests: string;
  skills: string[];
  profilePicture: File | null;
  twoFactorEnabled: boolean;
  password: string;
  confirmPassword: string;
  currentPassword: string;
  dataPreferences: { shareData: boolean; receiveEmails: boolean };
  paymentMethod: string;
}

type Section = "personal" | "security" | "data" | "payments" | "history";

const InputField = memo(({ label, field, type = "text", value, onChange, placeholder, error, showPassword, onTogglePassword }: {
  label: string;
  field: keyof FormData;
  type?: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  error?: string;
  showPassword?: boolean;
  onTogglePassword?: () => void;
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  // Restore focus after state update
  useEffect(() => {
    if (inputRef.current && document.activeElement === inputRef.current) {
      inputRef.current.focus();
    }
  }, [value]);

  // Map field to icon
  const getIconForField = (field: keyof FormData) => {
    switch (field) {
      case "name": return User;
      case "email": return Mail;
      case "phone": return Phone;
      case "address": return MapPin;
      case "education": return GraduationCap;
      case "interests": return Briefcase;
      case "paymentMethod": return CreditCard;
      case "currentPassword":
      case "password":
      case "confirmPassword": return Lock;
      default: return null;
    }
  };

  const Icon = getIconForField(field);

  return (
    <div className="space-y-2">
      <label htmlFor={field} className="text-sm font-semibold text-gray-800 flex items-center gap-2">
        {Icon && <Icon className="w-4 h-4 text-cyan-600" />}
        {label}
      </label>
      <div className="relative">
        <input
          ref={inputRef}
          id={field}
          type={showPassword !== undefined ? (showPassword ? "text" : "password") : type}
          value={value || ""}
          onChange={(e) => {
            e.stopPropagation();
            console.log(`InputField ${field} onChange:`, e.target.value);
            onChange(e.target.value);
          }}
          onFocus={() => console.log(`InputField ${field} focused`)}
          onBlur={() => console.log(`InputField ${field} blurred`)}
          onKeyDown={(e) => {
            e.stopPropagation();
            if (e.key === "Enter") {
              e.preventDefault();
            }
          }}
          placeholder={placeholder}
          autoComplete="off"
          className={`w-full px-4 py-3 bg-white border-2 ${
            error ? "border-red-400 focus:ring-red-200" : "border-gray-400 hover:border-cyan-500 focus:border-cyan-600 focus:ring-4 focus:ring-cyan-200"
          } rounded-xl focus:outline-none text-gray-900 placeholder:text-gray-400 transition-all duration-300`}
        />
        {onTogglePassword && (
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onTogglePassword();
            }}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-cyan-600 transition-colors duration-200 z-20"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
          </button>
        )}
      </div>
      {error && (
        <p className="text-red-600 text-sm flex items-center gap-1">
          <X className="w-3 h-3" />
          {error}
        </p>
      )}
    </div>
  );
});

export default function AccountSettings() {
  const renderCount = useRef(0);
  renderCount.current += 1;
  console.log(`AccountSettings render count: ${renderCount.current}`);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const [formData, setFormData] = useState<FormData>({
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "",
    address: "",
    education: "",
    interests: "",
    skills: ["JavaScript", "React", "Node.js"],
    profilePicture: null,
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
    profilePicture: "",
  });
  const [showPasswordFields, setShowPasswordFields] = useState(false);
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [notification, setNotification] = useState({ message: "", type: null as "success" | "error" | null });
  const [isSaving, setIsSaving] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<Section>("personal");

  // Handle profile picture preview and cleanup
  useEffect(() => {
    if (formData.profilePicture) {
      const url = URL.createObjectURL(formData.profilePicture);
      setPreviewUrl(url);
      return () => {
        URL.revokeObjectURL(url);
      };
    } else {
      setPreviewUrl(null);
    }
  }, [formData.profilePicture]);

  // Generic handler for text inputs
  const handleInputChange = useCallback((field: keyof FormData, value: string) => {
    console.log(`handleInputChange: ${field} = ${value}`);
    setFormData((prev) => ({ ...prev, [field]: value }));
  }, []);

  const validateSection = (section: Section) => {
    let isValid = true;
    const newErrors = { ...errors };

    if (section === "personal") {
      const trimmedName = formData.name.trim();
      if (!trimmedName) {
        newErrors.name = "Full name is required.";
        isValid = false;
      } else if (!/^[a-zA-Z\s]+$/.test(trimmedName) || trimmedName.length < 2) {
        newErrors.name = "Name must contain only letters and be at least 2 characters long.";
        isValid = false;
      } else {
        newErrors.name = "";
      }

      const trimmedEmail = formData.email.trim();
      if (!trimmedEmail) {
        newErrors.email = "Email is required.";
        isValid = false;
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
        newErrors.email = "Please enter a valid email address.";
        isValid = false;
      } else {
        newErrors.email = "";
      }

      const trimmedPhone = formData.phone.trim();
      if (trimmedPhone && !/^\d{10}$/.test(trimmedPhone)) {
        newErrors.phone = "Phone number must be a 10-digit number.";
        isValid = false;
      } else {
        newErrors.phone = "";
      }

      const trimmedAddress = formData.address.trim();
      if (!trimmedAddress) {
        newErrors.address = "Address is required.";
        isValid = false;
      } else if (trimmedAddress.length < 5) {
        newErrors.address = "Address must be at least 5 characters long.";
        isValid = false;
      } else {
        newErrors.address = "";
      }

      const trimmedEducation = formData.education.trim();
      if (!trimmedEducation) {
        newErrors.education = "Education is required.";
        isValid = false;
      } else if (trimmedEducation.length < 3) {
        newErrors.education = "Education must be at least 3 characters long.";
        isValid = false;
      } else {
        newErrors.education = "";
      }

      const trimmedInterests = formData.interests.trim();
      if (!trimmedInterests) {
        newErrors.interests = "Career interests are required.";
        isValid = false;
      } else if (trimmedInterests.length < 3) {
        newErrors.interests = "Interests must be at least 3 characters long.";
        isValid = false;
      } else {
        newErrors.interests = "";
      }

      if (formData.skills.length < 3) {
        newErrors.skills = "At least three skills are required.";
        isValid = false;
      } else {
        newErrors.skills = "";
      }

      if (!formData.profilePicture) {
        newErrors.profilePicture = "Profile picture is required.";
        isValid = false;
      } else if (!["image/jpeg", "image/png", "image/gif"].includes(formData.profilePicture.type)) {
        newErrors.profilePicture = "Only JPEG, PNG, or GIF images are allowed.";
        isValid = false;
      } else if (formData.profilePicture.size > 2 * 1024 * 1024) {
        newErrors.profilePicture = "Image size must not exceed 2MB.";
        isValid = false;
      } else {
        newErrors.profilePicture = "";
      }
    }

    if (section === "security" && showPasswordFields) {
      if (!formData.currentPassword.trim()) {
        newErrors.password = "Current password is required.";
        isValid = false;
      } else if (!formData.password.trim()) {
        newErrors.password = "New password is required.";
        isValid = false;
      } else if (formData.password.trim().length < 8) {
        newErrors.password = "New password must be at least 8 characters long.";
        isValid = false;
      } else if (formData.password.trim() !== formData.confirmPassword.trim()) {
        newErrors.password = "New passwords do not match.";
        isValid = false;
      } else {
        newErrors.password = "";
      }
    }

    if (section === "payments") {
      const trimmedPaymentMethod = formData.paymentMethod.trim();
      if (trimmedPaymentMethod) {
        if (!/^\w+\s+ending\s+in\s+\d{4}$/.test(trimmedPaymentMethod)) {
          newErrors.paymentMethod = "Enter a valid payment method (e.g., Visa ending in 1234).";
          isValid = false;
        } else {
          newErrors.paymentMethod = "";
        }
      } else {
        newErrors.paymentMethod = "";
      }
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSave = async (section: Section) => {
    setIsSaving(true);
    setNotification({ message: "", type: null });

    if (validateSection(section)) {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setNotification({
          message: `${section.charAt(0).toUpperCase() + section.slice(1)} settings saved successfully!`,
          type: "success",
        });
        setTimeout(() => setNotification({ message: "", type: null }), 4000);
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
    if (!trimmed) {
      setErrors((prev) => ({ ...prev, skills: "Skill cannot be empty." }));
      return;
    }
    if (formData.skills.includes(trimmed)) {
      setErrors((prev) => ({ ...prev, skills: "This skill is already added." }));
      return;
    }
    setFormData((prev) => ({ ...prev, skills: [...prev.skills, trimmed] }));
    setSkillInput("");
  };

  const handleSkillRemove = (skill: string) => {
    const updatedSkills = formData.skills.filter((s) => s !== skill);
    setFormData((prev) => ({ ...prev, skills: updatedSkills }));
  };

  const handleProfileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    if (file) {
      if (!["image/jpeg", "image/png", "image/gif"].includes(file.type)) {
        setErrors((prev) => ({ ...prev, profilePicture: "Only JPEG, PNG, or GIF images are allowed." }));
        if (fileInputRef.current) fileInputRef.current.value = "";
        return;
      }
      if (file.size > 2 * 1024 * 1024) {
        setErrors((prev) => ({ ...prev, profilePicture: "Image size must not exceed 2MB." }));
        if (fileInputRef.current) fileInputRef.current.value = "";
        return;
      }
      setFormData({ ...formData, profilePicture: file });
      setNotification({
        message: `Image uploaded: ${file.name}`,
        type: "success",
      });
    } else {
      setFormData({ ...formData, profilePicture: null });
      setNotification({ message: "No file selected.", type: "error" });
    }
    if (fileInputRef.current) fileInputRef.current.value = "";
    setTimeout(() => setNotification({ message: "", type: null }), 3000);
  };

  const TabButton = ({ value, icon: Icon, label, isActive }: { value: Section; icon: React.ElementType; label: string; isActive: boolean }) => (
    <button
      onClick={() => setActiveTab(value)}
      className={`relative flex items-center gap-2 px-4 py-3 rounded-xl font-semibold transition-all duration-300 group ${
        isActive 
          ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg scale-105' 
          : 'bg-white/80 text-gray-600 hover:bg-gradient-to-r hover:from-cyan-50 hover:to-blue-50 hover:text-cyan-600 hover:scale-102'
      }`}
      aria-current={isActive ? "page" : undefined}
    >
      <Icon className={`w-5 h-5 transition-transform duration-300 ${isActive ? 'scale-110' : 'group-hover:scale-110'}`} />
      <span className="hidden sm:block">{label}</span>
      {isActive && (
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 opacity-20 animate-pulse" />
      )}
    </button>
  );

  const SaveButton = ({ onClick, loading, children }: { onClick: () => void; loading: boolean; children: React.ReactNode }) => (
    <button
      onClick={onClick}
      disabled={loading}
      className="relative bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden group"
      aria-label={loading ? "Saving..." : "Save changes"}
    >
      {loading && (
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-700 flex items-center justify-center">
          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
        </div>
      )}
      <span className={`flex items-center gap-2 ${loading ? 'opacity-0' : 'opacity-100'}`}>
        {children}
        <Check className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
      </span>
    </button>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-cyan-50 to-blue-100 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-300/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-300/10 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23059669' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="md:hidden fixed top-6 left-6 z-50 bg-white/90 backdrop-blur-md rounded-full p-3 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110"
        aria-label="Toggle mobile menu"
        aria-expanded={isMobileMenuOpen}
      >
        <Menu className="w-6 h-6 text-cyan-600" />
      </button>

      {/* Mobile Sidebar */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40">
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-hidden="true"
          />
          <div className="absolute left-0 top-0 w-72 h-full bg-white/95 backdrop-blur-md shadow-2xl p-6 transform transition-transform duration-300">
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
              aria-label="Close mobile menu"
            >
              <X className="w-6 h-6 text-gray-600" />
            </button>
            <div className="mt-12 space-y-4">
              {[
                { href: "/", icon: HomeIcon, label: "Home" },
                { href: "/find-mentor", icon: Search, label: "Find Mentors" },
                { href: "/ai-assessment", icon: Bot, label: "AI Assessment" },
                { href: "/profile-building", icon: User, label: "Profile" },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-3 p-3 rounded-xl text-gray-700 hover:bg-cyan-50 hover:text-cyan-600 transition-all duration-200"
                >
                  <item.icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Desktop Sidebar */}
      <aside className="hidden md:block fixed left-0 top-0 w-64 h-screen bg-white/90 backdrop-blur-md shadow-xl p-6 z-30">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg">
            <Sparkles className="w-8 h-8 text-white animate-pulse" />
          </div>
          <h2 className="text-xl font-extrabold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
            Innvo Karo
          </h2>
        </div>
        <nav className="space-y-2">
          {[
            { href: "/", icon: HomeIcon, label: "Home" },
            { href: "/find-mentor", icon: Search, label: "Find Mentors" },
            { href: "/ai-assessment", icon: Bot, label: "AI Assessment" },
            { href: "/profile-building", icon: User, label: "Profile" },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 p-3 rounded-xl text-gray-700 hover:bg-gradient-to-r hover:from-cyan-50 hover:to-blue-50 hover:text-cyan-600 transition-all duration-300 hover:scale-105 hover:shadow-md group"
            >
              <item.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
              <span className="font-medium">{item.label}</span>
            </a>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="md:ml-64 min-h-screen p-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-5xl font-extrabold bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Account Settings
            </h1>
            <p className="text-gray-600 text-lg">Manage your profile and preferences</p>
          </div>

          {/* Notification */}
          {notification.message && (
            <div className={`mb-6 p-4 rounded-xl border-l-4 ${
              notification.type === "success"
                ? "bg-green-50/80 text-green-700 border-green-500 backdrop-blur-sm"
                : "bg-red-50/80 text-red-700 border-red-500 backdrop-blur-sm"
            } animate-slide-down shadow-lg`}>
              <div className="flex items-center gap-2">
                {notification.type === "success" ? 
                  <Check className="w-5 h-5 animate-bounce" /> : 
                  <X className="w-5 h-5 animate-pulse" />
                }
                {notification.message}
              </div>
            </div>
          )}

          {/* Tabs */}
          <div className="flex flex-wrap gap-2 mb-8 p-2 bg-white/60 backdrop-blur-md rounded-2xl shadow-lg">
            {[
              { value: "personal", icon: User, label: "Personal" },
              { value: "security", icon: Shield, label: "Security" },
              { value: "data", icon: Database, label: "Data" },
              { value: "payments", icon: CreditCard, label: "Payments" },
              { value: "history", icon: History, label: "History" },
            ].map((tab) => (
              <TabButton
                key={tab.value}
                value={tab.value as Section}
                icon={tab.icon}
                label={tab.label}
                isActive={activeTab === tab.value}
              />
            ))}
          </div>

          {/* Tab Content */}
          <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-2xl border border-white/50 overflow-hidden">
            {/* Personal Tab */}
            {activeTab === "personal" && (
              <div className="p-8 space-y-6">
                <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-2 mb-6">
                  <User className="w-6 h-6 text-cyan-600" />
                  Personal Information
                </h3>
                
                {/* Profile Picture Upload */}
                <div className="flex flex-col items-center mb-8">
                  <div className="relative group">
                    <div className="w-32 h-32 rounded-full overflow-hidden bg-gradient-to-br from-cyan-400 to-blue-600 p-1 shadow-xl">
                      {previewUrl ? (
                        <img
                          src={previewUrl}
                          alt="Profile picture"
                          className="w-full h-full rounded-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                          <Camera className="w-8 h-8 text-gray-400" />
                        </div>
                      )}
                    </div>
                    <label
                      htmlFor="profile-upload"
                      className="absolute inset-0 rounded-full bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
                    >
                      <Camera className="w-6 h-6 text-white" />
                    </label>
                    <input
                      ref={fileInputRef}
                      id="profile-upload"
                      type="file"
                      accept="image/*"
                      onChange={handleProfileUpload}
                      className="hidden"
                    />
                  </div>
                  <p className="mt-3 text-sm text-gray-600">Click to upload profile picture</p>
                  {errors.profilePicture && (
                    <p className="text-red-600 text-sm flex items-center gap-1 mt-2">
                      <X className="w-3 h-3" />
                      {errors.profilePicture}
                    </p>
                  )}
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <InputField
                    key="name"
                    label="Full Name"
                    field="name"
                    value={formData.name}
                    onChange={(value) => handleInputChange("name", value)}
                    placeholder="Enter your full name"
                    error={errors.name}
                  />
                  <InputField
                    key="email"
                    label="Email Address"
                    field="email"
                    type="email"
                    value={formData.email}
                    onChange={(value) => handleInputChange("email", value)}
                    placeholder="your.email@example.com"
                    error={errors.email}
                  />
                  <InputField
                    key="phone"
                    label="Phone Number"
                    field="phone"
                    value={formData.phone}
                    onChange={(value) => handleInputChange("phone", value)}
                    placeholder="1234567890"
                    error={errors.phone}
                  />
                  <InputField
                    key="address"
                    label="Address"
                    field="address"
                    value={formData.address}
                    onChange={(value) => handleInputChange("address", value)}
                    placeholder="Your address"
                    error={errors.address}
                  />
                  <InputField
                    key="education"
                    label="Education"
                    field="education"
                    value={formData.education}
                    onChange={(value) => handleInputChange("education", value)}
                    placeholder="Bachelor's in Computer Science"
                    error={errors.education}
                  />
                  <InputField
                    key="interests"
                    label="Career Interests"
                    field="interests"
                    value={formData.interests}
                    onChange={(value) => handleInputChange("interests", value)}
                    placeholder="Product Management, Tech Leadership"
                    error={errors.interests}
                  />
                </div>

                {/* Skills Section */}
                <div className="space-y-4">
                  <label className="block text-sm font-semibold text-gray-700">Your Skills</label>
                  <div className="flex flex-wrap gap-2 min-h-[60px] p-4 bg-gray-50 rounded-xl">
                    {formData.skills.map((skill) => (
                      <div
                        key={skill}
                        className="flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-cyan-100 to-blue-100 text-cyan-700 rounded-full text-sm border border-cyan-200 hover:shadow-md transition-all duration-200 group"
                      >
                        {skill}
                        <button
                          onClick={() => handleSkillRemove(skill)}
                          className="text-cyan-600 hover:text-red-500 transition-colors duration-200 group-hover:scale-110"
                          aria-label={`Remove ${skill} skill`}
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <input
                      placeholder="Add a skill and press Enter"
                      value={skillInput}
                      onChange={(e) => {
                        setSkillInput(e.target.value);
                      }}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          e.preventDefault();
                          handleSkillAdd(skillInput);
                        }
                      }}
                      className="flex-1 px-4 py-3 bg-white border-2 border-gray-400 rounded-xl focus:outline-none focus:border-cyan-600 focus:ring-4 focus:ring-cyan-200 transition-all duration-300 text-gray-900 placeholder:text-gray-400"
                    />
                    <button
                      onClick={() => handleSkillAdd(skillInput)}
                      className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105"
                      aria-label="Add skill"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                  {errors.skills && (
                    <p className="text-red-600 text-sm flex items-center gap-1">
                      <X className="w-3 h-3" />
                      {errors.skills}
                    </p>
                  )}
                </div>

                <div className="flex justify-end pt-6">
                  <SaveButton onClick={() => handleSave("personal")} loading={isSaving}>
                    Save Changes
                  </SaveButton>
                </div>
              </div>
            )}

            {/* Security Tab */}
            {activeTab === "security" && (
              <div className="p-8 space-y-6">
                <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-2 mb-6">
                  <Shield className="w-6 h-6 text-cyan-600" />
                  Security Settings
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-green-100 rounded-lg">
                        <Lock className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">Two-Factor Authentication</p>
                        <p className="text-sm text-gray-600">Add an extra layer of security</p>
                      </div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.twoFactorEnabled}
                        onChange={(e) => {
                          setFormData({ ...formData, twoFactorEnabled: e.target.checked });
                        }}
                        className="sr-only peer"
                        aria-label="Toggle two-factor authentication"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-cyan-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-cyan-500 peer-checked:to-blue-600"></div>
                    </label>
                  </div>

                  <div className="space-y-4">
                    <button
                      onClick={() => setShowPasswordFields(!showPasswordFields)}
                      className="flex items-center gap-2 px-6 py-3 bg-white border-2 border-gray-200 rounded-xl hover:border-cyan-500 hover:shadow-md transition-all duration-300"
                      aria-label={showPasswordFields ? "Cancel password change" : "Change password"}
                    >
                      <Key className="w-5 h-5 text-cyan-600" />
                      {showPasswordFields ? "Cancel Password Change" : "Change Password"}
                    </button>

                    {showPasswordFields && (
                      <div className="space-y-4 p-6 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl border border-blue-200">
                        <InputField
                          key="currentPassword"
                          label="Current Password"
                          field="currentPassword"
                          value={formData.currentPassword}
                          onChange={(value) => handleInputChange("currentPassword", value)}
                          placeholder="Enter current password"
                          showPassword={showCurrentPassword}
                          onTogglePassword={() => setShowCurrentPassword(!showCurrentPassword)}
                        />
                        <InputField
                          key="password"
                          label="New Password"
                          field="password"
                          value={formData.password}
                          onChange={(value) => handleInputChange("password", value)}
                          placeholder="Enter new password"
                          showPassword={showNewPassword}
                          onTogglePassword={() => setShowNewPassword(!showNewPassword)}
                        />
                        <InputField
                          key="confirmPassword"
                          label="Confirm New Password"
                          field="confirmPassword"
                          value={formData.confirmPassword}
                          onChange={(value) => handleInputChange("confirmPassword", value)}
                          placeholder="Confirm new password"
                          error={errors.password}
                          showPassword={showConfirmPassword}
                          onTogglePassword={() => setShowConfirmPassword(!showConfirmPassword)}
                        />
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex justify-end pt-6">
                  <SaveButton onClick={() => handleSave("security")} loading={isSaving}>
                    Save Security Settings
                  </SaveButton>
                </div>
              </div>
            )}

            {/* Data Tab */}
            {activeTab === "data" && (
              <div className="p-8 space-y-6">
                <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-2 mb-6">
                  <Database className="w-6 h-6 text-cyan-600" />
                  Data Preferences
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl border border-purple-200">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-purple-100 rounded-lg">
                        <Database className="w-5 h-5 text-purple-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">Share data with mentors</p>
                        <p className="text-sm text-gray-600">Help mentors provide better recommendations</p>
                      </div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.dataPreferences.shareData}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            dataPreferences: { ...formData.dataPreferences, shareData: e.target.checked },
                          })
                        }
                        className="sr-only peer"
                        aria-label="Toggle data sharing with mentors"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-cyan-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-cyan-500 peer-checked:to-blue-600"></div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-green-50 to-teal-50 rounded-xl border border-green-200">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-green-100 rounded-lg">
                        <Lock className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">Email notifications</p>
                        <p className="text-sm text-gray-600">Receive updates about your account and mentorship opportunities</p>
                      </div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.dataPreferences.receiveEmails}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            dataPreferences: { ...formData.dataPreferences, receiveEmails: e.target.checked },
                          })
                        }
                        className="sr-only peer"
                        aria-label="Toggle email notifications"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-cyan-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-cyan-500 peer-checked:to-blue-600"></div>
                    </label>
                  </div>

                  <div className="p-6 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl border border-yellow-200">
                    <h4 className="font-semibold text-gray-800 mb-2">Data Management</h4>
                    <div className="space-y-2 text-sm text-gray-600">
                      <p>Control how your data is used and shared within Mastero Konnect.</p>
                      <button className="flex items-center gap-2 text-cyan-600 hover:text-blue-600 font-semibold transition-colors duration-200 group">
                        Request Data Export
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                      </button>
                      <button className="flex items-center gap-2 text-red-600 hover:text-red-700 font-semibold transition-colors duration-200 group">
                        Delete Account
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end pt-6">
                  <SaveButton onClick={() => handleSave("data")} loading={isSaving}>
                    Save Data Preferences
                  </SaveButton>
                </div>
              </div>
            )}

            {/* Payments Tab */}
            {activeTab === "payments" && (
              <div className="p-8 space-y-6">
                <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-2 mb-6">
                  <CreditCard className="w-6 h-6 text-cyan-600" />
                  Payment & Billing
                </h3>
                
                <div className="space-y-6">
                  <InputField
                    key="paymentMethod"
                    label="Payment Method"
                    field="paymentMethod"
                    value={formData.paymentMethod}
                    onChange={(value) => handleInputChange("paymentMethod", value)}
                    placeholder="e.g., Visa ending in 1234"
                    error={errors.paymentMethod}
                  />
                  <div className="p-6 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl border border-indigo-200">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <p className="font-semibold text-gray-800">Current Plan</p>
                        <p className="text-sm text-gray-600">Free Plan - Basic features included</p>
                      </div>
                      <div className="px-4 py-2 bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 rounded-full text-sm font-semibold">
                        Active
                      </div>
                    </div>
                    <button className="flex items-center gap-2 text-cyan-600 hover:text-blue-600 font-semibold transition-colors duration-200 group">
                      Upgrade to Premium
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </button>
                  </div>
                  <div className="p-6 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl border border-yellow-200">
                    <h4 className="font-semibold text-gray-800 mb-2">Billing History</h4>
                    <div className="space-y-2 text-sm text-gray-600">
                      <p>• No billing history available</p>
                      <p>• You're currently on the free plan</p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end pt-6">
                  <SaveButton onClick={() => handleSave("payments")} loading={isSaving}>
                    Save Payment Info
                  </SaveButton>
                </div>
              </div>
            )}

            {/* History Tab */}
            {activeTab === "history" && (
              <div className="p-8 space-y-6">
                <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-2 mb-6">
                  <History className="w-6 h-6 text-cyan-600" />
                  Activity History
                </h3>
                
                <div className="space-y-4">
                  <div className="p-6 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl border border-blue-200">
                    <h4 className="font-semibold text-gray-800 mb-4">Recent Mentor Sessions</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-white/80 rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold">
                            JD
                          </div>
                          <div>
                            <p className="font-medium text-gray-800">John Doe</p>
                            <p className="text-sm text-gray-600">Product Management Session</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium text-gray-800">Aug 15, 2024</p>
                          <p className="text-xs text-gray-500">2 hours</p>
                        </div>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-white/80 rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">
                            JS
                          </div>
                          <div>
                            <p className="font-medium text-gray-800">Jane Smith</p>
                            <p className="text-sm text-gray-600">Career Transition Workshop</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium text-gray-800">Jul 20, 2024</p>
                          <p className="text-xs text-gray-500">1.5 hours</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl border border-emerald-200">
                    <h4 className="font-semibold text-gray-800 mb-4">AI Assessment History</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-white/80 rounded-lg">
                        <div>
                          <p className="font-medium text-gray-800">Career Path Assessment</p>
                          <p className="text-sm text-gray-600">Completed with 85% match score</p>
                        </div>
                        <p className="text-sm font-medium text-gray-800">Sep 10, 2024</p>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-white/80 rounded-lg">
                        <div>
                          <p className="font-medium text-gray-800">Skills Assessment</p>
                          <p className="text-sm text-gray-600">Technical skills evaluation</p>
                        </div>
                        <p className="text-sm font-medium text-gray-800">Aug 28, 2024</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end pt-6">
                  <SaveButton
                    onClick={() => {
                      setNotification({ message: "Exporting history is not yet implemented.", type: "error" });
                    }}
                    loading={isSaving}
                  >
                    Export History
                  </SaveButton>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      <style jsx>{`
        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-slide-down {
          animation: slide-down 0.3s ease-out;
        }
        
        .hover\\:scale-102:hover {
          transform: scale(1.02);
        }
      `}</style>
    </div>
  );
}
