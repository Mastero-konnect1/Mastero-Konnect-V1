'use client';

import { useEffect, useState } from 'react';
import { SignUp, useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export default function SignUpPage() {
  const { isSignedIn, isLoaded } = useUser();
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => setIsClient(true), []);
  useEffect(() => {
    if (isLoaded && isSignedIn) router.push('/profile-building');
  }, [isLoaded, isSignedIn, router]);

  if (!isLoaded || !isClient) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50">
        <div className="flex items-center gap-4 p-4">
          <Sparkles className="w-8 h-8 animate-spin text-blue-600" />
          <span className="text-xl font-semibold text-gray-900">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <Card className="bg-white border border-gray-200 shadow-xl rounded-2xl overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-purple-600 to-blue-700 text-white p-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                <Sparkles className="w-6 h-6 animate-pulse" />
              </div>
              <div>
                <CardTitle className="text-2xl font-bold">Sign Up</CardTitle>
                <CardDescription className="text-purple-100">Join us today</CardDescription>
              </div>
            </div>
          </CardHeader>

          <CardContent className="p-8">
            <SignUp
              routing="path"
              path="/auth/sign-up"
              redirectUrl="/profile-building"
              afterSignUpUrl="/profile-building"
              afterSignInUrl="/profile-building"
              appearance={{
                elements: {
                  // BUTTON - Clean purple
                  formButtonPrimary: `
                    w-full !bg-purple-600 !hover:bg-purple-700 !text-white 
                    !font-bold !py-4 !px-6 !rounded-xl !text-base 
                    !shadow-lg !hover:shadow-xl !transition-all !duration-300 
                    !border-none !mt-2
                  `,
                  
                  card: `!shadow-none !bg-transparent !border-0 !p-0 !m-0 !w-full`,
                  headerTitle: '!hidden',
                  headerSubtitle: '!hidden',
                  footer: '!hidden',
                  
                  // SOCIAL BUTTONS - Clean white
                  socialButtonsBlockButton: `
                    !w-full !border-2 !border-gray-200 !hover:border-purple-500 
                    !bg-white !hover:bg-purple-50 !text-gray-900 !font-semibold 
                    !py-3.5 !px-6 !rounded-xl !transition-all !duration-300 
                    !shadow-sm !hover:shadow-md !mb-5 !text-sm
                  `,
                  
                  // ✅ INPUTS - NO OVERLAP COLORS!
                  formFieldInput: `
                    !w-full !border-2 !border-gray-200 !bg-white 
                    !text-gray-900 !placeholder-gray-400 
                    !focus:border-purple-500 !focus:ring-2 !focus:ring-purple-100 
                    !rounded-xl !py-5 !px-14 !text-base !font-medium 
                    !transition-all !duration-300 !mb-1
                    !shadow-sm !hover:shadow-md
                  `,
                  
                  // ✅ LABELS - SIMPLE PURPLE (NO GRADIENT)
                  formFieldLabel: `
                    !text-purple-600 !font-semibold !text-sm !mb-3 
                    !block !tracking-wide
                  `,
                  
                  // DIVIDER - Clean line
                  divider: `
                    !my-6 !relative !before:absolute !before:left-0 
                    !before:top-1/2 !before:w-full !before:h-px 
                    !before:bg-gray-200 !before:-translate-y-1/2
                    [&>p]:!text-gray-500 [&>p]:!text-sm [&>p]:!font-medium
                  `,
                  
                  form: '!space-y-6',
                  formFieldInputGroup: '!relative',
                  
                  formFieldInputShowPasswordButton: `
                    !absolute !right-4 !top-1/2 !-translate-y-1/2 
                    !p-0 !w-9 !h-9 !rounded-full !bg-white !shadow-md
                    !transition-all !duration-300 !hover:bg-gray-50
                  `
                }
              }}
            />

            <div className="pt-6 border-t border-gray-200 text-center">
              <p className="text-sm text-gray-600 mb-4">Already have an account?</p>
              <Button asChild className="w-full h-12 rounded-xl border-2 border-gray-200">
                <a href="/auth/sign-in" className="font-semibold text-base">Sign In</a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}