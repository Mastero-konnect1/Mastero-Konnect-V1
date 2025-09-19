'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-gradient">
              Mastero Konnect
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-mastero-text-medium hover:text-mastero-dark transition-colors">
              Home
            </Link>
            <Link href="/find-mentor" className="text-mastero-text-medium hover:text-mastero-dark transition-colors">
              Find Mentors
            </Link>
            <Link href="/ai-assessment" className="text-mastero-text-medium hover:text-mastero-dark transition-colors">
              AI Assessment
            </Link>
            <Link href="/profile-building" className="text-mastero-text-medium hover:text-mastero-dark transition-colors">
              Profile
            </Link>
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" asChild>
              <Link href="/auth/sign-up">Become a Mentor</Link>
            </Button>
            <Button asChild className="bg-gradient-mastero hover:opacity-90">
              <Link href="/auth/sign-in">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md text-mastero-text-medium hover:text-mastero-dark hover:bg-mastero-bg-subtle transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border bg-white">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-mastero-text-medium hover:text-mastero-dark transition-colors px-4 py-2"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link
                href="/find-mentor"
                className="text-mastero-text-medium hover:text-mastero-dark transition-colors px-4 py-2"
                onClick={toggleMenu}
              >
                Find Mentors
              </Link>
              <Link
                href="/ai-assessment"
                className="text-mastero-text-medium hover:text-mastero-dark transition-colors px-4 py-2"
                onClick={toggleMenu}
              >
                AI Assessment
              </Link>
              <Link
                href="/profile-building"
                className="text-mastero-text-medium hover:text-mastero-dark transition-colors px-4 py-2"
                onClick={toggleMenu}
              >
                Profile
              </Link>
              <div className="flex flex-col space-y-2 px-4 pt-4 border-t border-border">
                <Button variant="outline" asChild>
                  <Link href="/auth/sign-up" onClick={toggleMenu}>Become a Mentor</Link>
                </Button>
                <Button asChild className="bg-gradient-mastero hover:opacity-90">
                  <Link href="/auth/sign-in" onClick={toggleMenu}>Get Started</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}