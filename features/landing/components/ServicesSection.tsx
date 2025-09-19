import { Brain, Users, Target, Zap } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const services = [
  {
    icon: Brain,
    title: "AI-Powered Matching",
    description: "Our advanced AI analyzes your goals, skills, and preferences to find the perfect mentor match.",
    features: ["Smart compatibility scoring", "Continuous learning", "Instant recommendations"]
  },
  {
    icon: Users,
    title: "Expert Mentors",
    description: "Connect with industry leaders, executives, and specialists across 50+ fields and industries.",
    features: ["Verified professionals", "Industry expertise", "Proven track records"]
  },
  {
    icon: Target,
    title: "Goal-Oriented Sessions",
    description: "Structured mentorship programs designed to help you achieve specific career and personal goals.",
    features: ["Custom roadmaps", "Progress tracking", "Milestone celebrations"]
  },
  {
    icon: Zap,
    title: "Flexible Scheduling",
    description: "Book sessions that fit your schedule with easy rescheduling and multiple communication options.",
    features: ["24/7 availability", "Multiple time zones", "Various session formats"]
  }
]

export default function ServicesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-mastero-dark mb-6">
            How <span className="text-gradient">Mastero Konnect</span> Works
          </h2>
          <p className="text-xl text-mastero-text-medium max-w-3xl mx-auto">
            Our comprehensive platform combines cutting-edge technology with human expertise 
            to deliver personalized mentorship experiences.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md hover-scale">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-gradient-mastero text-white">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-mastero-dark">
                    {service.title}
                  </CardTitle>
                </div>
                <CardDescription className="text-mastero-text-medium text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm text-mastero-text-medium">
                      <div className="h-1.5 w-1.5 rounded-full bg-gradient-mastero"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}