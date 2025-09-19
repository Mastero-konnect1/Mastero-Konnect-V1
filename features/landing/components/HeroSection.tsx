import Link from 'next/link'
import { ArrowRight, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function HeroSection() {
  return (
    <section className="pt-24 pb-12 lg:pt-32 lg:pb-20 bg-gradient-to-b from-mastero-bg-subtle to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-border rounded-full px-4 py-2 mb-6">
            <Sparkles className="h-4 w-4 text-mastero-blue-start" />
            <span className="text-sm font-medium text-mastero-text-medium">
              AI-Powered Mentorship Matching
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-mastero-dark mb-6">
            Connect with 
            <span className="text-gradient block">World-Class Mentors</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-mastero-text-medium mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform your career with personalized guidance from industry experts. 
            Our AI matches you with the perfect mentor for your goals.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" asChild className="bg-gradient-mastero hover:opacity-90 text-lg px-8 py-6">
              <Link href="/ai-assessment" className="flex items-center gap-2">
                Start AI Assessment
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-lg px-8 py-6">
              <Link href="/find-mentor">Browse Mentors</Link>
            </Button>
          </div>

          {/* Hero Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-mastero-dark mb-2">5,000+</div>
              <div className="text-mastero-text-medium">Expert Mentors</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-mastero-dark mb-2">50,000+</div>
              <div className="text-mastero-text-medium">Successful Matches</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-mastero-dark mb-2">95%</div>
              <div className="text-mastero-text-medium">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}