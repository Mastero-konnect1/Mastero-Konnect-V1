'use client';

import { useEffect, useState } from 'react';
import { SignUp, useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { Sparkles, ArrowRight, User, Mail, Lock, Eye, EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export default function SignUpPage() {
  const { isSignedIn, isLoaded } = useUser();
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(false);

  useEffect(() => setIsClient(true), []);
  useEffect(() => {
    if (isLoaded && isSignedIn) router.push('/profile-building');
  }, [isLoaded, isSignedIn, router]);

  if (!isLoaded || !isClient) {
    return (
      <div className="flex min-h-screen items-center justify-center" style={{
        background: 'linear-gradient(135deg, rgb(64, 142, 216), rgb(220, 218, 231), rgb(90, 56, 136))'
      }}>
        <div className="flex items-center gap-4 p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-white/30 shadow-lg">
          <Sparkles className="w-8 h-8 animate-spin text-blue-600" />
          <span className="text-xl font-semibold text-gray-900">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative overflow-hidden" style={{
      background: 'linear-gradient(135deg, rgb(64, 142, 216), rgb(220, 218, 231), rgb(90, 56, 136))',
      position: 'relative'
    }}>
      {/* Background decorative elements */}
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '5%',
        width: '300px',
        height: '300px',
        borderRadius: '50%',
        background: 'rgba(255, 255, 255, 0.1)',
        filter: 'blur(40px)',
        animation: 'float 8s ease-in-out infinite'
      }} />
      <div style={{
        position: 'absolute',
        bottom: '10%',
        right: '5%',
        width: '400px',
        height: '400px',
        borderRadius: '50%',
        background: 'rgba(255, 255, 255, 0.05)',
        filter: 'blur(50px)',
        animation: 'float 12s ease-in-out infinite'
      }} />
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '10%',
        width: '200px',
        height: '200px',
        borderRadius: '50%',
        background: 'rgba(255, 255, 255, 0.08)',
        filter: 'blur(30px)',
        animation: 'float 10s ease-in-out infinite reverse'
      }} />

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        .service-card {
          transition: all 0.3s ease;
          backdrop-filter: blur(20px);
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        }
        
        .service-card:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
          border-color: rgba(255, 255, 255, 0.3);
        }
        
        .neumorphic-icon {
          background: linear-gradient(145deg, #f0f0f0, #cacaca);
          box-shadow: 
            8px 8px 16px rgba(163, 177, 198, 0.4),
            -8px -8px 16px rgba(255, 255, 255, 0.8);
          transition: all 600ms cubic-bezier(0.22, 0.9, 0.3, 1);
        }
        
        .btn-hover {
          transition: all 500ms cubic-bezier(0.22, 0.9, 0.3, 1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(123, 47, 247, 0.2);
        }
        .btn-hover:hover {
          transform: translateY(-4px) scale(1.05);
          box-shadow: 0 20px 40px rgba(123, 47, 247, 0.2);
        }
      `}</style>
      
      <div className="max-w-md mx-auto relative z-10 py-12 px-4 sm:px-6 lg:px-8">
        {/* Main Sign Up Card */}
        <div
          className="service-card"
          style={{
            borderRadius: '24px',
            padding: '0',
            cursor: 'default',
            display: 'flex',
            flexDirection: 'column',
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            position: 'relative',
            transition: 'all 0.3s ease',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)'
          }}
          onMouseEnter={() => setHoveredCard(true)}
          onMouseLeave={() => setHoveredCard(false)}
        >
          {/* Animated gradient border effect */}
          <div style={{
            position: 'absolute',
            inset: 0,
            borderRadius: '24px',
            padding: '2px',
            background: 'linear-gradient(135deg, rgba(123, 47, 247, 0.3), rgba(58, 134, 255, 0.3))',
            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            WebkitMaskComposite: 'xor',
            maskComposite: 'exclude',
            opacity: hoveredCard ? 1 : 0,
            transition: 'opacity 500ms ease',
            pointerEvents: 'none'
          }} />

          {/* Card Header */}
          <div style={{ 
            position: 'relative', 
            zIndex: 10,
            padding: '2.5rem 2rem 1.5rem 2rem',
            background: 'linear-gradient(135deg, #7B2FF7, #3A86FF)',
            borderTopLeftRadius: '24px',
            borderTopRightRadius: '24px',
            color: 'white'
          }}>
            <div className="flex items-center gap-4 mb-2">
              <div 
                className="neumorphic-icon"
                style={{
                  width: '4rem',
                  height: '4rem',
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'rgba(255, 255, 255, 0.2)',
                  backdropFilter: 'blur(10px)'
                }}
              >
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <h3 style={{
                  fontSize: '1.75rem',
                  fontWeight: 'bold',
                  marginBottom: '0.25rem',
                  fontFamily: 'serif'
                }}>
                  Join InnovKaro
                </h3>
                <p style={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  fontSize: '1rem',
                  margin: 0
                }}>
                  Start your mentorship journey today
                </p>
              </div>
            </div>
          </div>

          {/* Card Content */}
          <div style={{ 
            position: 'relative', 
            zIndex: 10, 
            padding: '2rem'
          }}>
            <SignUp
              routing="path"
              path="/auth/sign-up"
              redirectUrl="/profile-building"
              afterSignUpUrl="/profile-building"
              afterSignInUrl="/profile-building"
              appearance={{
                elements: {
                  // MAIN CONTAINER
                  rootBox: '!w-full !max-w-none',
                  card: '!shadow-none !bg-transparent !border-0 !p-0 !m-0 !w-full',
                  headerTitle: '!hidden',
                  headerSubtitle: '!hidden',
                  footer: '!hidden',
                  
                  // PRIMARY BUTTON - Gradient with hover effects
                  formButtonPrimary: `
                    w-full !bg-gradient-to-r !from-blue-500 !to-purple-500 
                    !text-white !font-semibold !py-4 !px-6 !rounded-xl !text-base 
                    !shadow-lg !hover:shadow-xl !transition-all !duration-300 
                    !border-none !mt-2 !backdrop-blur-sm
                    hover:!from-blue-600 hover:!to-purple-600
                    hover:!shadow-2xl hover:!shadow-purple-500/30
                    transform hover:scale-105
                  `,
                  
                  // SOCIAL BUTTONS - Glassmorphic style
                  socialButtonsBlockButton: `
                    !w-full !border !border-gray-200 !hover:border-blue-300 
                    !bg-white/80 !hover:bg-white/90 !text-gray-900 !font-semibold 
                    !py-3.5 !px-6 !rounded-xl !transition-all !duration-300 
                    !shadow-sm !hover:shadow-md !mb-4 !text-sm !backdrop-blur-sm
                    hover:!border-blue-500/50
                  `,
                  
                  // INPUT FIELDS - Enhanced glassmorphic style
                  formFieldInput: `
                    !w-full !border !border-gray-200 !bg-white/80 
                    !text-gray-900 !placeholder-gray-500 
                    !focus:border-blue-500 !focus:ring-2 !focus:ring-blue-500/20 
                    !rounded-xl !py-4 !px-12 !text-base !font-medium 
                    !transition-all !duration-300 !mb-1
                    !shadow-sm !hover:shadow-md !backdrop-blur-sm
                    hover:!border-blue-300
                  `,
                  
                  // LABELS - Enhanced styling
                  formFieldLabel: `
                    !text-gray-700 !font-semibold !text-sm !mb-3 
                    !block !tracking-wide
                  `,
                  
                  // DIVIDER - Glassmorphic line
                  divider: `
                    !my-8 !relative 
                    [&>p]:!text-gray-500 [&>p]:!text-sm [&>p]:!font-medium
                    [&>p]:!bg-white/80 [&>p]:!px-4 [&>p]:!backdrop-blur-sm
                  `,
                  dividerLine: '!bg-gray-200',
                  
                  form: '!space-y-6',
                  formFieldInputGroup: '!relative',
                  
                  formFieldInputShowPasswordButton: `
                    !absolute !right-4 !top-1/2 !-translate-y-1/2 
                    !p-0 !w-8 !h-8 !rounded-full !bg-white/80 !shadow-md !backdrop-blur-sm
                    !transition-all !duration-300 !hover:bg-white/90
                    !border !border-gray-200
                  `,

                  // FORM FIELD SUCCESS
                  formFieldSuccessText: '!text-green-600 !font-medium',
                  
                  // FORM FIELD ERROR
                  formFieldErrorText: '!text-red-600 !font-medium'
                }
              }}
            />

            {/* Sign In Section */}
            <div className="pt-6 border-t border-gray-200 text-center">
              <p className="text-sm text-gray-600 mb-4 font-medium">Already have an account?</p>
              <button 
                className="btn-hover w-full"
                style={{
                  padding: '1rem 2rem',
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  color: '#7B2FF7',
                  border: '1px solid rgba(123, 47, 247, 0.3)',
                  borderRadius: '16px',
                  fontSize: '1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  backdropFilter: 'blur(10px)',
                  boxShadow: '0 8px 20px rgba(123, 47, 247, 0.1)',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(123, 47, 247, 0.1)';
                  e.currentTarget.style.color = '#7B2FF7';
                  e.currentTarget.style.boxShadow = '0 12px 30px rgba(123, 47, 247, 0.2)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
                  e.currentTarget.style.color = '#7B2FF7';
                  e.currentTarget.style.boxShadow = '0 8px 20px rgba(123, 47, 247, 0.1)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
                onClick={() => router.push('/auth/sign-in')}
              >
                Sign In
              </button>
            </div>

            {/* Additional Features Grid */}
            <div className="mt-8 grid grid-cols-3 gap-3 text-center">
              <div className="p-3 bg-white/50 rounded-xl border border-white/30 backdrop-blur-sm">
                <div className="w-6 h-6 mx-auto mb-2 text-blue-500">
                  <User className="w-full h-full" />
                </div>
                <p className="text-xs font-medium text-gray-600">Secure</p>
              </div>
              <div className="p-3 bg-white/50 rounded-xl border border-white/30 backdrop-blur-sm">
                <div className="w-6 h-6 mx-auto mb-2 text-purple-500">
                  <Mail className="w-full h-full" />
                </div>
                <p className="text-xs font-medium text-gray-600">Fast</p>
              </div>
              <div className="p-3 bg-white/50 rounded-xl border border-white/30 backdrop-blur-sm">
                <div className="w-6 h-6 mx-auto mb-2 text-indigo-500">
                  <Lock className="w-full h-full" />
                </div>
                <p className="text-xs font-medium text-gray-600">Private</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-6">
          <p className="text-sm text-white/80 font-medium">
            By continuing, you agree to our{' '}
            <a href="/terms" className="text-white hover:text-white/80 transition-colors duration-200">
              Terms
            </a>{' '}
            and{' '}
            <a href="/privacy" className="text-white hover:text-white/80 transition-colors duration-200">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}