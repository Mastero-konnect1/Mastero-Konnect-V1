import Link from 'next/link'
import { Twitter, Linkedin,Youtube, Facebook, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-sky-600 to-indigo-700 text-white">
          <div className="max-w-7xl mx-auto px-6 py-16">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-2xl font-semibold">InnovKaro</h3>
                <p className="mt-4 text-sm opacity-90">Connecting mentors and mentees for meaningful professional growth and career development.</p>
                <div className="flex gap-4 mt-4">
                  <a href="https://x.com/KonnectMas86897" target='_blank' className="hover:text-sky-200 hover:scale-105 transition-transform"><Twitter/></a>
                  <a href="https://www.linkedin.com/company/innov-karo/" target='_blank' className="hover:text-sky-200 hover:scale-105 transition-transform"><Linkedin /></a>
                  <a href="https://www.youtube.com/@Innovkaro" target='_blank' className="hover:text-sky-200 hover:scale-105 transition-transform"><Youtube/></a>
                  <a href=" https://www.facebook.com/profile.php?id=61581066593207" target='_blank' className="hover:text-sky-200 hover:scale-105 transition-transform"><Facebook/></a>
                  <a href="https://www.instagram.com/innovkaro/" target='_blank' className="hover:text-sky-200 hover:scale-105 transition-transform"><Instagram/></a>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-3">Quick Links</h4>
                <ul className="text-sm space-y-2">
                  <li><Link href="/find-mentor" className="hover:underline hover:text-sky-400 transition">Find Mentors</Link></li>
                  <li><Link href="/ai-assessment" className="hover:underline hover:text-sky-400 transition">AI Assessment</Link></li>
                  <li><Link href="/profile-building" className="hover:underline hover:text-sky-400 transition">Build Profile</Link></li>
                  <li><Link href="/auth/sign-up" className="hover:underline hover:text-sky-400 transition">Become a Mentor</Link></li>
                </ul>
              </div>

             <div>
                <h4 className="font-semibold mb-3">About Us</h4>
                <ul className="text-sm space-y-2">
                  <li><a href="#mission" className="hover:underline hover:text-sky-400 transition">Our Mission</a></li>
                  <li><a href="#how-it-works" className="hover:underline hover:text-sky-400 transition">How It Works</a></li>
                  <li><a href="#success" className="hover:underline hover:text-sky-400 transition">Success Stories</a></li>
                  <li><a href="#blog" className="hover:underline hover:text-sky-400 transition">Blog</a></li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-3">Contact</h4>
                <p className="text-sm hover:underline hover:text-sky-400 transition">Email: connect@innovkaro.com</p>
                <p className="text-sm mt-2 hover:underline hover:text-sky-400 transition">Phone: +91  7382987332</p>
                <ul className="text-sm space-y-2 mt-4">
                  <li><a href="#support" className="hover:underline hover:text-sky-400 transition">Support Center</a></li>
                  <li><a href="#privacy" className="hover:underline hover:text-sky-400 transition">Privacy Policy</a></li>
                </ul>
              </div>
            </div>

            <hr className="my-8 border-white/20" />
            <div className="text-center text-sm opacity-80">© 2024 InnovKaro. All rights reserved. Built with ❤️ for professional growth.</div>
          </div>
        </footer>
  )
}