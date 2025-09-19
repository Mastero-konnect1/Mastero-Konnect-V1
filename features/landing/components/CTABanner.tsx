import Link from 'next/link'
import { ArrowRight, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function CTABanner() {
  return (
    <section className="py-20 bg-gradient-mastero text-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 opacity-10">
          <Sparkles className="h-24 w-24" />
        </div>
        <div className="absolute bottom-10 right-10 opacity-10">
          <Sparkles className="h-32 w-32" />
        </div>
        <div className="absolute top-1/2 left-1/3 opacity-5">
          <div className="h-40 w-40 rounded-full border-2 border-white"></div>
        </div>
        <div className="absolute top-1/4 right-1/4 opacity-5">
          <div className="h-24 w-24 rounded-full border-2 border-white"></div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-2 mb-6">
          <Sparkles className="h-4 w-4" />
          <span className="text-sm font-medium">Join 50,000+ Success Stories</span>
        </div>

        {/* Main Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
          Ready to Accelerate Your Career?
        </h2>
        
        {/* Subtitle */}
        <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto leading-relaxed">
          Start your personalized mentorship journey today and unlock your full potential with expert guidance.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Button 
            size="lg" 
            asChild 
            className="bg-white text-mastero-blue-start hover:bg-white/90 text-lg px-8 py-6 shadow-xl"
          >
            <Link href="/ai-assessment" className="flex items-center gap-2">
              Start Your AI Assessment
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
          
          <Button 
            size="lg" 
            variant="outline" 
            asChild 
            className="border-white text-white hover:bg-white/10 text-lg px-8 py-6"
          >
            <Link href="/find-mentor">Browse Mentors</Link>
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm opacity-80">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 bg-green-400 rounded-full"></div>
            <span>14-day free trial</span>
          </div>
          <div className="hidden sm:block h-1 w-1 bg-white/50 rounded-full"></div>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 bg-green-400 rounded-full"></div>
            <span>No credit card required</span>
          </div>
          <div className="hidden sm:block h-1 w-1 bg-white/50 rounded-full"></div>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 bg-green-400 rounded-full"></div>
            <span>Cancel anytime</span>
          </div>
        </div>

        {/* Additional Statistics */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-2xl font-bold mb-1">5,000+</div>
            <div className="text-sm opacity-80">Expert Mentors</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold mb-1">3.2x</div>
            <div className="text-sm opacity-80">Faster Career Growth</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold mb-1">95%</div>
            <div className="text-sm opacity-80">Satisfaction Rate</div>
          </div>
        </div>
      </div>
    </section>
  )
}