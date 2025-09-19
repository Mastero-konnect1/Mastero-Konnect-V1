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
    <section className="py-20 bg-mastero-bg-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-mastero-dark mb-6">
              Accelerate Your Career with 
              <span className="text-gradient block">Expert Guidance</span>
            </h2>
            
            <p className="text-xl text-mastero-text-medium mb-8 leading-relaxed">
              Whether you're looking to advance in your current field, transition to a new career, 
              or develop specific skills, our mentors provide the insights and support you need to succeed.
            </p>

            {/* Benefits List */}
            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-mastero-text-body">{benefit}</span>
                </div>
              ))}
            </div>

            <Button size="lg" asChild className="bg-gradient-mastero hover:opacity-90">
              <Link href="/find-mentor" className="flex items-center gap-2">
                Find Your Mentor
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>

          {/* Image Placeholder */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="aspect-square bg-gradient-mastero rounded-2xl shadow-2xl flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-6xl mb-4">🎯</div>
                  <div className="text-xl font-semibold">Your Success</div>
                  <div className="text-white/80">Starts Here</div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-4 border">
                <div className="text-2xl mb-1">📈</div>
                <div className="text-sm font-medium text-mastero-dark">Career Growth</div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4 border">
                <div className="text-2xl mb-1">🤝</div>
                <div className="text-sm font-medium text-mastero-dark">Expert Guidance</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}