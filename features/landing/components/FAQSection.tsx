'use client'

import { useState, useMemo, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus, Mail, MessageCircle } from 'lucide-react'

type FAQItem = {
  question: string
  answer: string
  category: string
  relatedFaqs?: string[]
}

const faqCategories = [
  { id: 'getting-started', label: 'Getting Started' },
  { id: 'mentors', label: 'Mentors' },
  { id: 'scheduling', label: 'Scheduling & Sessions' },
  { id: 'pricing', label: 'Pricing' },
]

const faqs: FAQItem[] = [
  {
    question: "How does the AI mentor matching work?",
    answer: "Our AI analyzes your career goals, current skills, industry, experience level, and learning preferences to match you with mentors who have complementary expertise and proven success in your areas of interest. The algorithm considers personality compatibility, communication styles, and availability to ensure the best possible match.",
    category: "getting-started",
    relatedFaqs: ["What qualifications do mentors have?", "Can I change mentors if it's not a good fit?"]
  },
  {
    question: "What qualifications do mentors have?",
    answer: "All mentors undergo a rigorous vetting process including background verification, portfolio review, and reference checks. Our mentors are industry leaders, executives, entrepreneurs, and specialists with at least 5+ years of experience in their fields. They must demonstrate proven success and strong communication skills.",
    category: "mentors",
    relatedFaqs: ["Can I become a mentor on the platform?", "How does the AI mentor matching work?"]
  },
  {
    question: "Can I change mentors if it's not a good fit?",
    answer: "Absolutely! We understand that mentorship is a personal relationship. If you feel your current mentor isn't the right fit, you can request a new match at any time. Our AI will learn from your feedback to make better future recommendations.",
    category: "mentors",
    relatedFaqs: ["How does the AI mentor matching work?", "How flexible is the scheduling?"]
  },
  {
    question: "How flexible is the scheduling?",
    answer: "Very flexible! You can book sessions based on your mentor's availability across different time zones. Most mentors offer multiple scheduling options including weekdays, evenings, and weekends. You can reschedule or cancel sessions up to 24 hours in advance.",
    category: "scheduling",
    relatedFaqs: ["What formats do mentorship sessions take?", "Can I change mentors if it's not a good fit?"]
  },
  {
    question: "What formats do mentorship sessions take?",
    answer: "Sessions can be conducted via video calls, phone calls, or in-person meetings (depending on location). You can also exchange messages between sessions for quick questions or follow-ups. The format is agreed upon between you and your mentor.",
    category: "scheduling",
    relatedFaqs: ["How flexible is the scheduling?", "How do you track progress and success?"]
  },
  {
    question: "Is there a free trial available?",
    answer: "Yes! We offer a 14-day free trial for all new users. This includes one mentor session and full access to our platform features. No credit card required to start your trial.",
    category: "pricing",
    relatedFaqs: ["Can I become a mentor on the platform?", "How do you track progress and success?"]
  },
  {
    question: "How do you track progress and success?",
    answer: "Our platform includes built-in progress tracking tools, goal-setting features, and regular check-ins. You'll receive detailed analytics on your development, milestone achievements, and recommendations for continued growth.",
    category: "getting-started",
    relatedFaqs: ["What formats do mentorship sessions take?", "Is there a free trial available?"]
  },
  {
    question: "Can I become a mentor on the platform?",
    answer: "Yes! We're always looking for qualified professionals to join our mentor network. You'll need to complete an application, provide professional references, and pass our screening process. Mentors earn competitive rates and can set their own schedules.",
    category: "mentors",
    relatedFaqs: ["What qualifications do mentors have?", "Is there a free trial available?"]
  }
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [allExpanded, setAllExpanded] = useState(false)

  // Filter FAQs based on search and category
  const filteredFaqs = useMemo(() => {
    return faqs.filter(faq => {
      const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory
      return matchesSearch && matchesCategory
    })
  }, [searchQuery, selectedCategory])

  // Handle expand/collapse all
  useEffect(() => {
    if (allExpanded) {
      setOpenIndex(null) // Clear single open state
    }
  }, [allExpanded])

  const toggleFAQ = (index: number) => {
    if (allExpanded) {
      setAllExpanded(false)
    }
    setOpenIndex(openIndex === index ? null : index)
  }

  const toggleAll = () => {
    setAllExpanded(!allExpanded)
    setOpenIndex(null)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  const answerVariants = {
    closed: { height: 0, opacity: 0 },
    open: { height: "auto", opacity: 1 }
  }

  return (
    <>
    {/* Main FAQ Section - Commented Out */}
    {/* <section className="relative py-20" id="faq">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50"></div>
      <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-r from-mastero-blue-start/10 to-mastero-blue-end/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-r from-purple-200/20 to-pink-200/20 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-mastero-blue-start/5 to-mastero-blue-end/5 rounded-full blur-2xl"></div>

      <div className="faq-bg-animation">
        <div className="faq-star" style={{ top: '10%', left: '15%', width: '6px', height: '6px', animationDelay: '0s' }}></div>
        <div className="faq-star" style={{ top: '20%', left: '80%', width: '8px', height: '8px', animationDelay: '1s' }}></div>
        <div className="faq-star" style={{ top: '60%', left: '10%', width: '4px', height: '4px', animationDelay: '2s' }}></div>
        <div className="faq-star" style={{ top: '80%', left: '70%', width: '7px', height: '7px', animationDelay: '0.5s' }}></div>
        <div className="faq-star" style={{ top: '30%', left: '50%', width: '5px', height: '5px', animationDelay: '1.5s' }}></div>
        <div className="faq-star" style={{ top: '70%', left: '30%', width: '6px', height: '6px', animationDelay: '2.5s' }}></div>

        <div className="faq-particle" style={{ left: '20%', width: '3px', height: '3px', animationDelay: '0s' }}></div>
        <div className="faq-particle" style={{ left: '40%', width: '4px', height: '4px', animationDelay: '2s' }}></div>
        <div className="faq-particle" style={{ left: '60%', width: '2px', height: '2px', animationDelay: '4s' }}></div>
        <div className="faq-particle" style={{ left: '80%', width: '3px', height: '3px', animationDelay: '6s' }}></div>

        <div className="faq-shape triangle" style={{ top: '15%', left: '25%', animationDelay: '0s' }}></div>
        <div className="faq-shape square" style={{ top: '45%', left: '75%', animationDelay: '3s' }}></div>
        <div className="faq-shape circle" style={{ top: '75%', left: '20%', animationDelay: '6s' }}></div>
        <div className="faq-shape triangle" style={{ top: '35%', left: '85%', animationDelay: '9s' }}></div>

        <div className="faq-orb" style={{ top: '25%', left: '60%', width: '40px', height: '40px', animationDelay: '0s' }}></div>
        <div className="faq-orb" style={{ top: '65%', left: '40%', width: '30px', height: '30px', animationDelay: '4s' }}></div>
        <div className="faq-orb" style={{ top: '45%', left: '15%', width: '35px', height: '35px', animationDelay: '8s' }}></div>

        <div className="faq-connection" style={{ top: '30%', left: '20%', width: '100px', animationDelay: '0s' }}></div>
        <div className="faq-connection" style={{ top: '60%', left: '60%', width: '80px', animationDelay: '2s' }}></div>
        <div className="faq-connection" style={{ top: '80%', left: '30%', width: '120px', animationDelay: '4s' }}></div>

        <div className="faq-sparkle" style={{ top: '12%', left: '35%', animationDelay: '0s' }}></div>
        <div className="faq-sparkle" style={{ top: '55%', left: '65%', animationDelay: '1s' }}></div>
        <div className="faq-sparkle" style={{ top: '85%', left: '45%', animationDelay: '2s' }}></div>
        <div className="faq-sparkle" style={{ top: '40%', left: '25%', animationDelay: '3s' }}></div>

        <div className="faq-star-particle" style={{ top: '5%', left: '5%', width: '3px', height: '3px', animationDelay: '0s' }}></div>
        <div className="faq-star-particle" style={{ top: '15%', left: '90%', width: '4px', height: '4px', animationDelay: '1s' }}></div>
        <div className="faq-star-particle" style={{ top: '25%', left: '5%', width: '2px', height: '2px', animationDelay: '2s' }}></div>
        <div className="faq-star-particle" style={{ top: '35%', left: '95%', width: '3px', height: '3px', animationDelay: '3s' }}></div>
        <div className="faq-star-particle" style={{ top: '45%', left: '2%', width: '4px', height: '4px', animationDelay: '4s' }}></div>
        <div className="faq-star-particle" style={{ top: '55%', left: '98%', width: '2px', height: '2px', animationDelay: '5s' }}></div>
        <div className="faq-star-particle" style={{ top: '65%', left: '1%', width: '3px', height: '3px', animationDelay: '0.5s' }}></div>
        <div className="faq-star-particle" style={{ top: '75%', left: '99%', width: '4px', height: '4px', animationDelay: '1.5s' }}></div>
        <div className="faq-star-particle" style={{ top: '85%', left: '3%', width: '2px', height: '2px', animationDelay: '2.5s' }}></div>
        <div className="faq-star-particle" style={{ top: '95%', left: '97%', width: '3px', height: '3px', animationDelay: '3.5s' }}></div>

        <div className="faq-shooting-star" style={{ top: '10%', left: '0%', animationDelay: '0s' }}></div>
        <div className="faq-shooting-star" style={{ top: '30%', left: '0%', animationDelay: '1.5s' }}></div>
        <div className="faq-shooting-star" style={{ top: '50%', left: '0%', animationDelay: '3s' }}></div>
        <div className="faq-shooting-star" style={{ top: '70%', left: '0%', animationDelay: '4.5s' }}></div>
        <div className="faq-shooting-star" style={{ top: '90%', left: '0%', animationDelay: '6s' }}></div>

        <div className="faq-constellation-star" style={{ top: '8%', left: '12%', width: '2px', height: '2px', animationDelay: '0s' }}></div>
        <div className="faq-constellation-star" style={{ top: '18%', left: '22%', width: '3px', height: '3px', animationDelay: '0.5s' }}></div>
        <div className="faq-constellation-star" style={{ top: '28%', left: '32%', width: '2px', height: '2px', animationDelay: '1s' }}></div>
        <div className="faq-constellation-star" style={{ top: '38%', left: '42%', width: '4px', height: '4px', animationDelay: '1.5s' }}></div>
        <div className="faq-constellation-star" style={{ top: '48%', left: '52%', width: '2px', height: '2px', animationDelay: '2s' }}></div>
        <div className="faq-constellation-star" style={{ top: '58%', left: '62%', width: '3px', height: '3px', animationDelay: '2.5s' }}></div>
        <div className="faq-constellation-star" style={{ top: '68%', left: '72%', width: '2px', height: '2px', animationDelay: '3s' }}></div>
        <div className="faq-constellation-star" style={{ top: '78%', left: '82%', width: '4px', height: '4px', animationDelay: '3.5s' }}></div>
        <div className="faq-constellation-star" style={{ top: '88%', left: '92%', width: '2px', height: '2px', animationDelay: '4s' }}></div>
        <div className="faq-constellation-star" style={{ top: '98%', left: '2%', width: '3px', height: '3px', animationDelay: '4.5s' }}></div>
      </div>

      <div className="relative faq-container mx-auto">
        <motion.div 
          className="text-center mb-8 faq-header mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-mastero-dark mb-6">
            Frequently Asked <span style={{color: '#336699'}}>Questions</span>
          </h2>
          <p className="text-xl text-mastero-text-medium max-w-4xl mx-auto whitespace-nowrap">
            Everything you need to know about Mastero Konnect mentorship platform
          </p>
        </motion.div>

        <motion.div 
          className="mb-12 faq-search-controls mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative mb-6">
            <input
              type="text"
              placeholder="Search questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-4 text-lg border border-border rounded-2xl bg-white/80 backdrop-blur-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-mastero-blue-start/20 focus:border-mastero-blue-start transition-all"
            />
          </div>

          <div className="flex flex-wrap gap-3 mb-6 justify-center">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                selectedCategory === 'all'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
              }`}
            >
              All Questions
            </button>
            {faqCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-3 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          <div className="flex justify-center">
            <button
              onClick={toggleAll}
              className="px-6 py-3 bg-white border border-border rounded-full font-medium text-mastero-text-medium hover:bg-mastero-bg-subtle transition-all shadow-sm"
            >
              {allExpanded ? 'Collapse All' : 'Expand All'}
            </button>
          </div>
        </motion.div>

        <motion.div 
          className="space-y-3 faq-items-container mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <AnimatePresence>
            {filteredFaqs.map((faq, index) => {
              const isOpen = allExpanded || openIndex === index
              const category = faqCategories.find(cat => cat.id === faq.category)
              
              return (
                <motion.div
                  key={`${faq.question}-${index}`}
                  variants={itemVariants}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="group"
                >
                  <div className="faq-card relative border border-border rounded-2xl bg-white/80 backdrop-blur-sm shadow-sm overflow-hidden">
                    <div className="faq-card-gradient-border"></div>
                    
                    {isOpen && (
                      <div className="absolute inset-0 bg-gradient-to-r from-mastero-blue-start/20 to-mastero-blue-end/20 rounded-2xl p-[1px]">
                        <div className="h-full w-full bg-white rounded-2xl"></div>
                      </div>
                    )}
                    
                    {isOpen && (
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: 4 }}
                        className="absolute left-0 top-0 bottom-0 bg-gradient-to-b from-mastero-blue-start to-mastero-blue-end"
                      />
                    )}

                    <div className="faq-card-content relative">
                      <button
                        onClick={() => toggleFAQ(index)}
                        className="faq-card-button w-full px-5 py-3 text-left flex justify-between items-center rounded-2xl group"
                        aria-expanded={isOpen}
                        aria-controls={`faq-answer-${index}`}
                      >
                        <div className="faq-card-layout w-full pr-4">
                          <div className="faq-category-section faq-category-container">
                            <span className="faq-card-category text-xs font-medium text-mastero-blue-start bg-mastero-blue-start/10 px-2 py-1 rounded-full">
                              {category?.label}
                            </span>
                          </div>
                          <div className="faq-question-section">
                            <h3 className="faq-card-title text-lg md:text-xl font-bold text-mastero-dark">
                              {faq.question}
                            </h3>
                          </div>
                          <div className="faq-expand-section">
                            <motion.div 
                              className="faq-card-expand-icon"
                              animate={{ rotate: isOpen ? 180 : 0 }}
                              transition={{ duration: 0.3 }}
                            >
                          {isOpen ? (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="p-2 bg-gradient-to-r from-mastero-blue-start to-mastero-blue-end rounded-full"
                            >
                              <Minus className="h-6 w-6 text-white" />
                            </motion.div>
                          ) : (
                            <motion.div
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              className="faq-card-plus p-2 bg-mastero-bg-subtle rounded-full"
                            >
                              <Plus className="h-6 w-6 text-mastero-text-medium" />
                            </motion.div>
                          )}
                            </motion.div>
                          </div>
                        </div>
                      </button>
                      
                      <motion.div
                        id={`faq-answer-${index}`}
                        variants={answerVariants}
                        initial="closed"
                        animate={isOpen ? "open" : "closed"}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-4">
                          <p className="text-sm text-gray-700 leading-relaxed mb-4 ml-2">
                            {faq.answer}
                          </p>
                          
                          {faq.relatedFaqs && faq.relatedFaqs.length > 0 && (
                            <motion.div 
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.2 }}
                              className="border-t border-gray-200 pt-4 ml-2"
                            >
                              <h4 className="text-xs font-semibold text-gray-500 mb-3 uppercase tracking-wide">
                                Other users also asked:
                              </h4>
                              <div className="space-y-2">
                                {faq.relatedFaqs.map((relatedQ, idx) => (
                                  <button
                                    key={idx}
                                    onClick={() => {
                                      const relatedIndex = faqs.findIndex(f => f.question === relatedQ)
                                      if (relatedIndex !== -1) {
                                        setOpenIndex(relatedIndex)
                                        setAllExpanded(false)
                                        setTimeout(() => {
                                          const element = document.querySelector(`[data-faq-index="${relatedIndex}"]`)
                                          element?.scrollIntoView({ behavior: 'smooth', block: 'center' })
                                        }, 300)
                                      }
                                    }}
                                    className="block w-full text-left text-sm text-blue-600 hover:text-blue-700 hover:underline transition-colors py-1"
                                  >
                                    {relatedQ}
                                  </button>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </motion.div>
      </div>

    </section> */}
    
    {/* Enhanced CTA Section */}
    <section className="py-20 faq-cta-section mt-12">
      <div className="faq-container mx-auto">
        <div className="p-8 md:p-16 rounded-3xl text-center faq-cta-container relative">
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 faq-cta-title">
            Still have questions?
          </h3>
          <p className="text-xl md:text-2xl mb-12 faq-cta-subtitle max-w-3xl mx-auto leading-relaxed">
            Our support team is here to help you get started with your mentorship journey. 
            We're committed to providing you with the best possible experience.
          </p>
          
          
          {/* Additional info */}
          <div className="mt-8 text-sm text-gray-500">
            <p>💬 Response time: Usually within 2 hours</p>
            <p>🕒 Support hours: Monday - Friday, 9 AM - 6 PM EST</p>
          </div>
        </div>
      </div>
    </section>
    
  </>
  )
}