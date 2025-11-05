import Link from 'next/link'
import { CheckCircle, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const benefits = [
  "Personalized mentor matching based on your goals",
  "Access to industry leaders and executives",
  "Flexible scheduling that works with your timeline",
  "Progress tracking and milestone achievement",
  "Community of like-minded professionals",
  "Ongoing support and career guidance"
]

export default function ContentBlock1() {
  return (
    <section className="py-12 md:py-16 lg:py-20 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-mastero-dark mb-4 md:mb-6 leading-tight">
              Accelerate Your Career with 
              <span className="text-gradient block">Expert Guidance</span>
            </h2>
            
            <p className="text-base sm:text-lg md:text-xl text-mastero-text-medium mb-6 md:mb-8 leading-relaxed">
              Whether you're looking to advance in your current field, transition to a new career, 
              or develop specific skills, our mentors provide the insights and support you need to succeed.
            </p>

            {/* Benefits List */}
            <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 md:h-6 md:w-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-mastero-text-body">{benefit}</span>
                </div>
              ))}
            </div>

            <Button 
              size="lg" 
              asChild 
              className="bg-gradient-mastero hover:opacity-90 w-full sm:w-auto"
            >
              <Link href="/find-mentor" className="flex items-center justify-center gap-2">
                Find Your Mentor
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>

          {/* Image Placeholder */}
          <div className="order-1 lg:order-2">
            <div className="relative w-full max-w-md mx-auto lg:max-w-none">
              {/* Main Card */}
              <div className="relative">
                <div className="aspect-square bg-gradient-mastero rounded-2xl shadow-2xl flex items-center justify-center overflow-hidden">
                  <div className="text-white text-center px-4">
                    <div className="text-4xl sm:text-5xl md:text-6xl mb-2 sm:mb-4">🎯</div>
                    <div className="text-lg sm:text-xl font-semibold">Your Success</div>
                    <div className="text-sm sm:text-base text-white/80">Starts Here</div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements - Hidden on Mobile, Visible on Tablet+ */}
              <div className="hidden sm:block absolute -top-4 -right-4 md:-top-6 md:-right-6 bg-white rounded-xl shadow-lg p-3 md:p-4 border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="text-2xl md:text-3xl mb-1">📈</div>
                <div className="text-xs md:text-sm font-medium text-mastero-dark whitespace-nowrap">Career Growth</div>
              </div>
              
              <div className="hidden sm:block absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 bg-white rounded-xl shadow-lg p-3 md:p-4 border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="text-2xl md:text-3xl mb-1">🤝</div>
                <div className="text-xs md:text-sm font-medium text-mastero-dark whitespace-nowrap">Expert Guidance</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
