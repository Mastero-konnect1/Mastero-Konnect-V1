'use client'

import { useEffect, useState } from 'react'
import { SignIn, useUser } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import '../styles/AuthLayout.css'

export default function SignInPage() {
  const { isSignedIn, isLoaded } = useUser()
  const router = useRouter()
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (isLoaded && isSignedIn) {
      router.push('/profile-building')
    }
  }, [isLoaded, isSignedIn, router])

  // Show loading state while Clerk is initializing
  if (!isLoaded || !isClient) {
    return (
      <div className="auth-shell">
        <div className="auth-loading">Loading...</div>
      </div>
    )
  }

  return (
    <div className="auth-shell" style={{ fontFamily: 'Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif' }}>
      <div className="auth-left">
        <div className="auth-illus" aria-hidden>
          <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
            <circle cx="60" cy="80" r="5" fill="#D8E4F2" />
            <circle cx="140" cy="130" r="5" fill="#D8E4F2" />
            <circle cx="240" cy="70" r="5" fill="#D8E4F2" />
            <circle cx="320" cy="160" r="5" fill="#D8E4F2" />
            <line x1="60" y1="80" x2="140" y2="130" stroke="#D8E4F2" strokeWidth="2" />
            <line x1="140" y1="130" x2="240" y2="70" stroke="#D8E4F2" strokeWidth="2" />
            <line x1="240" y1="70" x2="320" y2="160" stroke="#D8E4F2" strokeWidth="2" />
          </svg>
        </div>
        <p className="auth-tag">Transform Your Journey. Connect with a Mastero.</p>
      </div>

      <div className="auth-right">
        <div className="auth-card">
          <div className="auth-logo">
            <span className="auth-brand">Mastero</span>
            <span className="auth-brand-gradient">Konnect</span>
          </div>
          <SignIn routing="path" path="/auth/sign-in" redirectUrl="/profile-building"/>
          <div className="auth-benefits">
            <p>Join 10,000+ mentees who found their perfect mentor.</p>
            <ul>
              <li>✓ AI-powered matching</li>
              <li>✓ 1:1 mentorship</li>
              <li>✓ Career growth</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}