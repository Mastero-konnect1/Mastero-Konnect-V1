'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  {
    question: "How does the AI mentor matching work?",
    answer: "Our AI analyzes your career goals, current skills, industry, experience level, and learning preferences to match you with mentors who have complementary expertise and proven success in your areas of interest. The algorithm considers personality compatibility, communication styles, and availability to ensure the best possible match."
  },
  {
    question: "What qualifications do mentors have?",
    answer: "All mentors undergo a rigorous vetting process including background verification, portfolio review, and reference checks. Our mentors are industry leaders, executives, entrepreneurs, and specialists with at least 5+ years of experience in their fields. They must demonstrate proven success and strong communication skills."
  },
  {
    question: "Can I change mentors if it's not a good fit?",
    answer: "Absolutely! We understand that mentorship is a personal relationship. If you feel your current mentor isn't the right fit, you can request a new match at any time. Our AI will learn from your feedback to make better future recommendations."
  },
  {
    question: "How flexible is the scheduling?",
    answer: "Very flexible! You can book sessions based on your mentor's availability across different time zones. Most mentors offer multiple scheduling options including weekdays, evenings, and weekends. You can reschedule or cancel sessions up to 24 hours in advance."
  },
  {
    question: "What formats do mentorship sessions take?",
    answer: "Sessions can be conducted via video calls, phone calls, or in-person meetings (depending on location). You can also exchange messages between sessions for quick questions or follow-ups. The format is agreed upon between you and your mentor."
  },
  {
    question: "Is there a free trial available?",
    answer: "Yes! We offer a 14-day free trial for all new users. This includes one mentor session and full access to our platform features. No credit card required to start your trial."
  },
  {
    question: "How do you track progress and success?",
    answer: "Our platform includes built-in progress tracking tools, goal-setting features, and regular check-ins. You'll receive detailed analytics on your development, milestone achievements, and recommendations for continued growth."
  },
  {
    question: "Can I become a mentor on the platform?",
    answer: "Yes! We're always looking for qualified professionals to join our mentor network. You'll need to complete an application, provide professional references, and pass our screening process. Mentors earn competitive rates and can set their own schedules."
  }
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 bg-white" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-mastero-dark mb-6">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-xl text-mastero-text-medium">
            Everything you need to know about Mastero Konnect mentorship platform
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border border-border rounded-xl bg-white shadow-sm hover:shadow-md transition-all duration-200"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-6 text-left flex justify-between items-center hover:bg-mastero-bg-subtle/30 rounded-xl transition-colors"
              >
                <h3 className="text-lg font-semibold text-mastero-dark pr-8">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-mastero-blue-start" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-mastero-text-medium" />
                  )}
                </div>
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-mastero-text-body leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 p-8 bg-mastero-bg-subtle rounded-2xl">
          <h3 className="text-xl font-semibold text-mastero-dark mb-2">
            Still have questions?
          </h3>
          <p className="text-mastero-text-medium mb-4">
            Our support team is here to help you get started
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:support@masterokonnect.com" 
              className="text-mastero-blue-start hover:text-mastero-blue-end font-medium"
            >
              Email Support
            </a>
            <span className="hidden sm:block text-mastero-text-medium">•</span>
            <a 
              href="#" 
              className="text-mastero-blue-start hover:text-mastero-blue-end font-medium"
            >
              Live Chat
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}