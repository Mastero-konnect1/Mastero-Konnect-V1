import Link from 'next/link'
import { Check, Sparkles, Crown, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const plans = [
  {
    name: "Starter",
    icon: Zap,
    price: "$29",
    period: "/month",
    description: "Perfect for getting started with mentorship",
    features: [
      "AI mentor matching",
      "1 mentor session per month",
      "Basic progress tracking",
      "Community access",
      "Email support"
    ],
    cta: "Start Free Trial",
    href: "/auth/sign-up?plan=starter",
    popular: false
  },
  {
    name: "Professional",
    icon: Sparkles,
    price: "$79",
    period: "/month",
    description: "For serious career advancement",
    features: [
      "Everything in Starter",
      "4 mentor sessions per month",
      "Advanced progress analytics",
      "Goal-setting workshops",
      "Priority mentor access",
      "Video & chat sessions",
      "Career roadmap planning"
    ],
    cta: "Get Started",
    href: "/auth/sign-up?plan=professional",
    popular: true
  },
  {
    name: "Executive",
    icon: Crown,
    price: "$199",
    period: "/month",
    description: "Unlimited access for executives",
    features: [
      "Everything in Professional",
      "Unlimited mentor sessions",
      "Executive coach matching",
      "Leadership assessments",
      "1-on-1 strategy sessions",
      "Custom learning paths",
      "Direct mentor messaging",
      "Quarterly business reviews"
    ],
    cta: "Contact Sales",
    href: "/auth/sign-up?plan=executive",
    popular: false
  }
]

export default function PricingSection() {
  return (
    <section className="py-20 bg-mastero-bg-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-mastero-dark mb-6">
            Choose Your <span className="text-gradient">Growth Plan</span>
          </h2>
          <p className="text-xl text-mastero-text-medium max-w-3xl mx-auto">
            Flexible pricing options designed to scale with your career goals. 
            Start your mentorship journey today.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative hover:shadow-xl transition-all duration-300 hover-scale ${
                plan.popular ? 'border-2 border-mastero-blue-start shadow-lg' : 'border shadow-md'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gradient-mastero text-white px-4 py-1">
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-8">
                <div className="flex justify-center mb-4">
                  <div className={`p-3 rounded-xl ${plan.popular ? 'bg-gradient-mastero text-white' : 'bg-mastero-bg-subtle text-mastero-blue-start'}`}>
                    <plan.icon className="h-8 w-8" />
                  </div>
                </div>
                
                <CardTitle className="text-2xl font-bold text-mastero-dark mb-2">
                  {plan.name}
                </CardTitle>
                
                <CardDescription className="text-mastero-text-medium mb-4">
                  {plan.description}
                </CardDescription>
                
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold text-mastero-dark">{plan.price}</span>
                  <span className="text-mastero-text-medium">{plan.period}</span>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-mastero-text-body">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-6">
                  <Button 
                    asChild 
                    className={`w-full ${
                      plan.popular 
                        ? 'bg-gradient-mastero hover:opacity-90' 
                        : 'bg-white border-2 border-mastero-blue-start text-mastero-blue-start hover:bg-mastero-bg-subtle'
                    }`}
                    size="lg"
                  >
                    <Link href={plan.href}>{plan.cta}</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-mastero-text-medium mb-4">
            All plans include a 14-day free trial. No credit card required.
          </p>
          <Button variant="outline" asChild>
            <Link href="#faq">View Detailed Comparison</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}