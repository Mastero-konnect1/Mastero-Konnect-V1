
'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function PremiumNavigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  // Data for navigation links for easier mapping
  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/find-mentor', label: 'Find Mentors' },
    { href: '/ai-assessment', label: 'AI Assessment' },
    { href: '/profile-building', label: 'Profile' },
  ]

  // Effect to close the menu on route changes
  useEffect(() => {
    if (isMenuOpen) {
      setIsMenuOpen(false)
    }
  }, [pathname])
  
  // Effect to prevent scrolling when the mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);


  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-lg border-b border-gray-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              {/* <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Mastero Konnect
              </span> */}
              <img src={'/logoo.png'} className='h-14'></img>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                    pathname === link.href
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50/70'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Desktop CTA Buttons */}
            <div className="hidden md:flex items-center space-x-4 ">
              <Button variant="ghost" asChild className='border border-black'>
                <Link href="/auth/sign-up">Become a Mentor</Link>
              </Button>
              <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white shadow-sm hover:shadow-md transition-shadow">
                <Link href="/auth/sign-in">Get Started</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-md text-gray-600 hover:text-blue-600 transition-colors z-50"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-white transform transition-transform duration-300 ease-in-out md:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full pt-20">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block w-full text-center py-4 text-2xl font-medium transition-colors ${
                 pathname === link.href ? 'text-blue-600' : 'text-gray-700'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-8 flex flex-col w-full max-w-xs space-y-4 px-4">
             <Button variant="outline" size="lg" asChild>
                <Link href="/auth/sign-up">Become a Mentor</Link>
             </Button>
             <Button size="lg" asChild className="bg-blue-600 hover:bg-blue-700 text-white">
                <Link href="/auth/sign-in">Get Started</Link>
             </Button>
          </div>
        </div>
      </div>
    </>
  )
}