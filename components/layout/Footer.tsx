import Link from 'next/link'
import { Github, Twitter, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-mastero-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Tagline */}
          <div className="col-span-1 md:col-span-1">
            <div className="text-2xl font-bold text-gradient mb-4">
              Mastero Konnect
            </div>
            <p className="text-mastero-text-light mb-6">
              Connecting mentors and mentees for meaningful professional growth and career development.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-mastero-text-light hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-mastero-text-light hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-mastero-text-light hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-mastero-text-light hover:text-white transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/find-mentor" className="text-mastero-text-light hover:text-white transition-colors">
                  Find Mentors
                </Link>
              </li>
              <li>
                <Link href="/ai-assessment" className="text-mastero-text-light hover:text-white transition-colors">
                  AI Assessment
                </Link>
              </li>
              <li>
                <Link href="/profile-building" className="text-mastero-text-light hover:text-white transition-colors">
                  Build Profile
                </Link>
              </li>
              <li>
                <Link href="/auth/sign-up" className="text-mastero-text-light hover:text-white transition-colors">
                  Become a Mentor
                </Link>
              </li>
            </ul>
          </div>

          {/* About Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-mastero-text-light hover:text-white transition-colors">
                  Our Mission
                </Link>
              </li>
              <li>
                <Link href="#" className="text-mastero-text-light hover:text-white transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="#" className="text-mastero-text-light hover:text-white transition-colors">
                  Success Stories
                </Link>
              </li>
              <li>
                <Link href="#" className="text-mastero-text-light hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-mastero-text-light">
                Email: hello@masterokonnect.com
              </li>
              <li className="text-mastero-text-light">
                Phone: +1 (555) 123-4567
              </li>
              <li>
                <Link href="#" className="text-mastero-text-light hover:text-white transition-colors">
                  Support Center
                </Link>
              </li>
              <li>
                <Link href="#" className="text-mastero-text-light hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-mastero-text-medium mt-8 pt-8 text-center">
          <p className="text-mastero-text-light">
            © 2024 Mastero Konnect. All rights reserved. Built with ❤️ for professional growth.
          </p>
        </div>
      </div>
    </footer>
  )
}