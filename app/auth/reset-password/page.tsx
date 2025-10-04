'use client'

import { useEffect, useState } from 'react'
import '../styles/AuthLayout.css'

export default function ResetPasswordPage() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return null
  }

  return (
    <div className="auth-layout">
      <div className="auth-container">
        <h1>Reset Password</h1>
        <p>This page is under construction. Please use Supabase Auth instead.</p>
      </div>
    </div>
  )
}
