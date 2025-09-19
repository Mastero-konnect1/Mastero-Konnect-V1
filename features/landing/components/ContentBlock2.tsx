import Link from 'next/link'
import { Star, Clock, Users, Trophy } from 'lucide-react'
import { Button } from '@/components/ui/button'

const stats = [
  {
    icon: Star,
    value: "4.9/5",
    label: "Average Rating",
    description: "Based on 10,000+ reviews"
  },
  {
    icon: Clock,
    value: "3.2x",
    label: "Faster Progress",
    description: "Compared to self-learning"
  },
  {
    icon: Users,
    value: "89%",
    label: "Career Advancement",
    description: "Within 6 months"
  },
  {
    icon: Trophy,
    value: "95%",
    label: "Goal Achievement",
    description: "Success rate"
  }
]

export default function ContentBlock2() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image/Visual Section */}
          <div className="order-1">
            <div className="relative">
              <div className="aspect-[4/3] bg-gradient-to-br from-mastero-blue-start to-mastero-blue-end rounded-2xl shadow-2xl flex items-center justify-center text-white p-8">
                <div className="text-center">
                  <div className="text-6xl mb-6">🚀</div>
                  <h3 className="text-2xl font-bold mb-2">Launch Your Future</h3>
                  <p className="text-white/90">With expert mentorship</p>
                </div>
              </div>
              
              {/* Stats Cards */}
              <div className="absolute -right-8 top-8 bg-white rounded-xl shadow-lg p-4 border max-w-[140px]">
                <div className="text-center">
                  <div className="text-2xl font-bold text-mastero-dark mb-1">50K+</div>
                  <div className="text-xs text-mastero-text-medium">Success Stories</div>
                </div>
              </div>
              
              <div className="absolute -left-8 bottom-8 bg-white rounded-xl shadow-lg p-4 border max-w-[140px]">
                <div className="text-center">
                  <div className="text-2xl font-bold text-mastero-dark mb-1">24/7</div>
                  <div className="text-xs text-mastero-text-medium">Platform Access</div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-2">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-mastero-dark mb-6">
              Proven Results from 
              <span className="text-gradient block">Real People</span>
            </h2>
            
            <p className="text-xl text-mastero-text-medium mb-8 leading-relaxed">
              Our platform has helped thousands of professionals achieve their career goals faster 
              and more effectively than traditional learning methods.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 bg-mastero-bg-subtle rounded-xl">
                  <div className="flex justify-center mb-2">
                    <stat.icon className="h-8 w-8 text-mastero-blue-start" />
                  </div>
                  <div className="text-2xl font-bold text-mastero-dark mb-1">{stat.value}</div>
                  <div className="text-sm font-medium text-mastero-text-dark mb-1">{stat.label}</div>
                  <div className="text-xs text-mastero-text-medium">{stat.description}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild className="bg-gradient-mastero hover:opacity-90">
                <Link href="/ai-assessment">Get Started Today</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/auth/sign-up">Become a Mentor</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}