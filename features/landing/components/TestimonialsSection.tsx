import { Star, Quote } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Product Manager",
    company: "Tech Innovations Inc.",
    avatar: "SC",
    rating: 5,
    text: "Mastero Konnect connected me with an incredible mentor who guided my transition from engineering to product management. The AI matching was spot-on, and within 6 months, I landed my dream role at a leading tech company."
  },
  {
    name: "Michael Rodriguez",
    role: "Marketing Director",
    company: "Global Brands Corp",
    avatar: "MR",
    rating: 5,
    text: "The mentorship I received through this platform was game-changing. My mentor's insights into strategic marketing and leadership helped me secure a promotion and increase my team's performance by 40%."
  },
  {
    name: "Emily Johnson",
    role: "Data Scientist",
    company: "AI Solutions Ltd",
    avatar: "EJ",
    rating: 5,
    text: "As someone transitioning into data science, I needed expert guidance. My mentor provided hands-on project reviews, career advice, and helped me build a portfolio that landed me multiple job offers."
  },
  {
    name: "David Kim",
    role: "Startup Founder",
    company: "GreenTech Ventures",
    avatar: "DK",
    rating: 5,
    text: "Starting my own company felt overwhelming until I found my mentor through Mastero Konnect. Their experience in scaling startups and securing funding was invaluable. We raised our Series A within 8 months."
  },
  {
    name: "Lisa Thompson",
    role: "UX Designer",
    company: "Design Studio Pro",
    avatar: "LT",
    rating: 5,
    text: "The flexible scheduling and personalized approach made all the difference. My mentor helped me develop advanced design thinking skills and build confidence to lead design projects at my company."
  },
  {
    name: "James Wilson",
    role: "Sales Executive",
    company: "Enterprise Solutions",
    avatar: "JW",
    rating: 5,
    text: "I've worked with several mentors in the past, but the AI matching here is incredible. My mentor understood my challenges perfectly and provided strategies that increased my sales performance by 60%."
  }
]

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-mastero-bg-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-mastero-dark mb-6">
            Success Stories from Our <span className="text-gradient">Community</span>
          </h2>
          <p className="text-xl text-mastero-text-medium max-w-3xl mx-auto">
            Hear from professionals who transformed their careers with expert mentorship through our platform
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 border-0 shadow-md hover-scale">
              <CardContent className="p-6">
                {/* Quote Icon */}
                <div className="flex justify-between items-start mb-4">
                  <Quote className="h-8 w-8 text-mastero-blue-start opacity-20" />
                  
                  {/* Rating */}
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>

                {/* Testimonial Text */}
                <p className="text-mastero-text-body leading-relaxed mb-6">
                  "{testimonial.text}"
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-4">
                  {/* Avatar */}
                  <div className="h-12 w-12 rounded-full bg-gradient-mastero flex items-center justify-center text-white font-semibold">
                    {testimonial.avatar}
                  </div>
                  
                  {/* Details */}
                  <div>
                    <div className="font-semibold text-mastero-dark">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-mastero-text-medium">
                      {testimonial.role}
                    </div>
                    <div className="text-sm text-mastero-text-light">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-mastero-dark mb-2">4.9★</div>
            <div className="text-mastero-text-medium">Average Rating</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-mastero-dark mb-2">10,000+</div>
            <div className="text-mastero-text-medium">Happy Users</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-mastero-dark mb-2">95%</div>
            <div className="text-mastero-text-medium">Success Rate</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-mastero-dark mb-2">24/7</div>
            <div className="text-mastero-text-medium">Support</div>
          </div>
        </div>
      </div>
    </section>
  )
}