'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Eye, EyeOff } from 'lucide-react'

export default function AuthPage() {
  const [isSignUp, setIsSignUp] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)
  const [acceptTerms, setAcceptTerms] = useState(false)

  return (
    <div className="min-h-screen w-full flex items-center justify-center px-4" style={{ backgroundColor: '#0d47ff' }}>
      <div 
        className="relative w-full max-w-[880px] h-auto md:h-[520px] rounded-xl overflow-hidden"
        style={{ 
          boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
          transition: 'all 0.6s cubic-bezier(0.68, -0.55, 0.27, 1.55)'
        }}
      >
        {/* Left Panel - White (Login) or Blue (When Sign Up) */}
        <div 
          className="absolute top-0 bottom-0 w-full md:w-1/2 bg-white flex items-center justify-center"
          style={{
            left: isSignUp ? '50%' : '0',
            clipPath: isSignUp ? 'polygon(15% 0, 100% 0, 100% 100%, 0% 100%)' : 'polygon(0 0, 100% 0, 85% 100%, 0% 100%)',
            transition: 'all 0.6s cubic-bezier(0.68, -0.55, 0.27, 1.55)',
            zIndex: isSignUp ? 1 : 2,
            backgroundColor: isSignUp ? '#0d47ff' : '#ffffff'
          }}
        >
          {!isSignUp ? (
            // Login Form
            <div className="px-12 md:px-20 py-12 md:py-16 w-full max-w-md opacity-100 transition-opacity duration-500">
              <div className="mb-8">
                <h1 className="text-[22px] font-bold" style={{ color: '#0d47ff' }}>BoardMe</h1>
              </div>
              
              <h2 className="text-[22px] font-semibold mb-2" style={{ color: '#111827' }}>
                Log in to Your Account
              </h2>
              <p className="text-sm mb-6" style={{ color: '#6b7280' }}>
                Log in to your account so you can continue building and editing your onboarding flows.
              </p>

              <div className="space-y-[18px]">
                <div>
                  <Label className="text-sm font-medium mb-1 block" style={{ color: '#374151' }}>Email</Label>
                  <Input 
                    type="email" 
                    placeholder="Enter your email address"
                    className="h-[44px] border rounded-md px-3"
                    style={{ borderColor: '#d1d5db' }}
                  />
                </div>

                <div>
                  <Label className="text-sm font-medium mb-1 block" style={{ color: '#374151' }}>Password</Label>
                  <div className="relative">
                    <Input 
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      className="h-[44px] border rounded-md px-3 pr-10"
                      style={{ borderColor: '#d1d5db' }}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2"
                      style={{ color: '#9ca3af' }}
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between mt-4 mb-3">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="w-4 h-4 rounded"
                  />
                  <span className="text-sm" style={{ color: '#374151' }}>Remember Me</span>
                </label>
                <a href="#" className="text-[13px]" style={{ color: '#0d47ff' }}>Forgot password?</a>
              </div>

              <button 
                className="w-full h-12 rounded-lg font-medium text-[15px] mt-3 transition-all hover:opacity-90"
                style={{ backgroundColor: '#0d47ff', color: '#ffffff', border: 'none', cursor: 'pointer' }}
              >
                LOG IN
              </button>

              <div className="my-6 text-center">
                <span className="text-[13px]" style={{ color: '#6b7280' }}>Or log in using</span>
              </div>

              <div className="flex justify-center gap-4">
                <button className="w-10 h-10 rounded-lg flex items-center justify-center transition-all hover:bg-gray-50" style={{ borderColor: '#d1d5db', border: '1px solid #d1d5db', background: 'transparent', cursor: 'pointer' }}>
                  <svg width="18" height="18" viewBox="0 0 18 18">
                    <path fill="#4285F4" d="M16.51 8H8.98v3h4.3c-.18 1-.74 1.48-1.6 2.04v2.01h2.6a7.8 7.8 0 0 0 2.38-5.88c0-.57-.05-.66-.15-1.18Z"/>
                    <path fill="#34A853" d="M8.98 17c2.16 0 3.97-.72 5.3-1.94l-2.6-2a4.8 4.8 0 0 1-7.18-2.54H1.83v2.07A8 8 0 0 0 8.98 17Z"/>
                    <path fill="#FBBC05" d="M4.5 10.52a4.8 4.8 0 0 1 0-3.04V5.41H1.83a8 8 0 0 0 0 7.18L4.5 10.52Z"/>
                    <path fill="#EA4335" d="M8.98 4.18c1.17 0 2.23.4 3.06 1.2l2.3-2.3A8 8 0 0 0 1.83 5.4L4.5 7.49a4.77 4.77 0 0 1 4.48-3.3Z"/>
                  </svg>
                </button>
                <button className="w-10 h-10 rounded-lg flex items-center justify-center transition-all hover:bg-gray-50" style={{ borderColor: '#d1d5db', border: '1px solid #d1d5db', background: 'transparent', cursor: 'pointer' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="#1877F2">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </button>
                <button className="w-10 h-10 rounded-lg flex items-center justify-center transition-all hover:bg-gray-50" style={{ borderColor: '#d1d5db', border: '1px solid #d1d5db', background: 'transparent', cursor: 'pointer' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="#1DA1F2">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </button>
              </div>
            </div>
          ) : (
            // Blue Panel (Already Signed Up)
            <div className="px-12 md:px-16 py-12 md:py-16 text-center opacity-100 transition-opacity duration-500">
              <div className="absolute top-16 left-16">
                <h1 className="text-[22px] font-bold text-white">BoardMe</h1>
              </div>
              <div className="flex flex-col items-center justify-center h-full">
                <h2 className="text-[20px] font-semibold text-white mb-2">
                  Already Signed up?
                </h2>
                <p className="text-sm max-w-[260px] mx-auto mb-8" style={{ color: '#e0e7ff', lineHeight: '1.4' }}>
                  Log in to your account so you can continue building and editing your onboarding flows.
                </p>
                <button
                  onClick={() => setIsSignUp(false)}
                  className="w-[120px] h-[42px] rounded-lg font-medium text-[15px] transition-all"
                  style={{ 
                    backgroundColor: 'transparent',
                    color: '#ffffff',
                    border: '2px solid #ffffff',
                    cursor: 'pointer'
                  }}
                >
                  LOG IN
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Right Panel - Blue (No Account) or White (Sign Up Form) */}
        <div 
          className="absolute top-0 bottom-0 w-full md:w-1/2 flex items-center justify-center"
          style={{
            right: isSignUp ? '50%' : '0',
            backgroundColor: isSignUp ? '#ffffff' : '#0d47ff',
            clipPath: isSignUp ? 'polygon(0 0, 85% 0, 100% 100%, 15% 100%)' : 'polygon(0 0, 100% 0, 100% 100%, 15% 100%)',
            transition: 'all 0.6s cubic-bezier(0.68, -0.55, 0.27, 1.55)',
            zIndex: isSignUp ? 2 : 1
          }}
        >
          {!isSignUp ? (
            // Blue Panel (Don't Have Account)
            <div className="px-12 md:px-16 py-12 md:py-16 text-center opacity-100 transition-opacity duration-500">
              <h2 className="text-[20px] font-semibold text-white mb-2">
                Don't Have an Account Yet?
              </h2>
              <p className="text-sm max-w-[260px] mx-auto mb-8" style={{ color: '#e0e7ff', lineHeight: '1.4' }}>
                Let's get you all set up so you can start creating your first onboarding experience.
              </p>
              <button
                onClick={() => setIsSignUp(true)}
                className="w-[120px] h-[42px] rounded-lg font-medium text-[15px] transition-all"
                style={{ 
                  backgroundColor: 'transparent',
                  color: '#ffffff',
                  border: '2px solid #ffffff',
                  cursor: 'pointer'
                }}
              >
                SIGN UP
              </button>
            </div>
          ) : (
            // Sign Up Form
            <div className="px-12 md:px-20 py-12 md:py-16 w-full max-w-md opacity-100 transition-opacity duration-500">
              <h2 className="text-[22px] font-semibold mb-2" style={{ color: '#111827' }}>
                Sign Up for an Account
              </h2>
              <p className="text-sm mb-6" style={{ color: '#6b7280' }}>
                Let's get you all set up so you can start creating your first onboarding experience.
              </p>

              <div className="space-y-[18px]">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label className="text-sm font-medium mb-1 block" style={{ color: '#374151' }}>First Name</Label>
                    <Input 
                      type="text" 
                      placeholder="Your first name"
                      className="h-[44px] border rounded-md px-3"
                      style={{ borderColor: '#d1d5db' }}
                    />
                  </div>
                  <div>
                    <Label className="text-sm font-medium mb-1 block" style={{ color: '#374151' }}>Last Name</Label>
                    <Input 
                      type="text" 
                      placeholder="Your last name"
                      className="h-[44px] border rounded-md px-3"
                      style={{ borderColor: '#d1d5db' }}
                    />
                  </div>
                </div>

                <div>
                  <Label className="text-sm font-medium mb-1 block" style={{ color: '#374151' }}>Email</Label>
                  <Input 
                    type="email" 
                    placeholder="Enter your email address"
                    className="h-[44px] border rounded-md px-3"
                    style={{ borderColor: '#d1d5db' }}
                  />
                </div>

                <div>
                  <Label className="text-sm font-medium mb-1 block" style={{ color: '#374151' }}>Password</Label>
                  <div className="relative">
                    <Input 
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter a strong password"
                      className="h-[44px] border rounded-md px-3 pr-10"
                      style={{ borderColor: '#d1d5db' }}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2"
                      style={{ color: '#9ca3af' }}
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-4 mb-3">
                <label className="flex items-start gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={acceptTerms}
                    onChange={(e) => setAcceptTerms(e.target.checked)}
                    className="w-4 h-4 rounded mt-0.5"
                  />
                  <span className="text-[13px]" style={{ color: '#6b7280' }}>
                    I accept BoardMe's{' '}
                    <a href="#" style={{ color: '#0d47ff' }}>Terms & Conditions</a>
                  </span>
                </label>
              </div>

              <button 
                className="w-full h-12 rounded-lg font-medium text-[15px] mt-3 transition-all hover:opacity-90"
                style={{ backgroundColor: '#0d47ff', color: '#ffffff', border: 'none', cursor: 'pointer' }}
              >
                SIGN UP
              </button>

              <div className="my-6 text-center">
                <span className="text-[13px]" style={{ color: '#6b7280' }}>Or sign up using</span>
              </div>

              <div className="flex justify-center gap-4">
                <button className="w-10 h-10 rounded-lg flex items-center justify-center transition-all hover:bg-gray-50" style={{ borderColor: '#d1d5db', border: '1px solid #d1d5db', background: 'transparent', cursor: 'pointer' }}>
                  <svg width="18" height="18" viewBox="0 0 18 18">
                    <path fill="#4285F4" d="M16.51 8H8.98v3h4.3c-.18 1-.74 1.48-1.6 2.04v2.01h2.6a7.8 7.8 0 0 0 2.38-5.88c0-.57-.05-.66-.15-1.18Z"/>
                    <path fill="#34A853" d="M8.98 17c2.16 0 3.97-.72 5.3-1.94l-2.6-2a4.8 4.8 0 0 1-7.18-2.54H1.83v2.07A8 8 0 0 0 8.98 17Z"/>
                    <path fill="#FBBC05" d="M4.5 10.52a4.8 4.8 0 0 1 0-3.04V5.41H1.83a8 8 0 0 0 0 7.18L4.5 10.52Z"/>
                    <path fill="#EA4335" d="M8.98 4.18c1.17 0 2.23.4 3.06 1.2l2.3-2.3A8 8 0 0 0 1.83 5.4L4.5 7.49a4.77 4.77 0 0 1 4.48-3.3Z"/>
                  </svg>
                </button>
                <button className="w-10 h-10 rounded-lg flex items-center justify-center transition-all hover:bg-gray-50" style={{ borderColor: '#d1d5db', border: '1px solid #d1d5db', background: 'transparent', cursor: 'pointer' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="#1877F2">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </button>
                <button className="w-10 h-10 rounded-lg flex items-center justify-center transition-all hover:bg-gray-50" style={{ borderColor: '#d1d5db', border: '1px solid #d1d5db', background: 'transparent', cursor: 'pointer' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="#1DA1F2">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
