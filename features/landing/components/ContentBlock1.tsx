import Link from 'next/link'
import { CheckCircle, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const benefits = [
  "One-on-one personalized tutoring",
  "Certified expert instructors",
  "Top-tier online learning platform",
  "Flexible schedules tailored to you",
  "Monitor progress with clear milestones",
  "Engage with a vibrant learning community"
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3, delayChildren: 0.2 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.9, ease: "easeOut" } }
}

const benefitVariants = {
  hover: { scale: 1.03, backgroundColor: "rgba(59, 130, 246, 0.1)", transition: { duration: 0.3 } }
}

const buttonVariants = {
  hover: {
    scale: 1.08,
    boxShadow: "0 10px 30px rgba(0, 112, 255, 0.4)",
    transition: { type: "spring", stiffness: 400, damping: 20 }
  },
  tap: { scale: 0.95, transition: { duration: 0.2 } }
}

const rocketVariants = {
  hidden: { opacity: 0, y: 0 },
  visible: {
    opacity: 1,
    y: -250,
    transition: { duration: 1.8, ease: "easeInOut" }
  },
  exit: { opacity: 0, y: -350, transition: { duration: 0.6 } }
}

const trailVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: { opacity: 0.6, scale: 1, transition: { duration: 0.6 } },
  exit: { opacity: 0, scale: 1.8, transition: { duration: 0.4 } }
}

export default function ContentBlock1() {
  const [showRocket, setShowRocket] = useState(false)

  const handleButtonClick = () => {
    setShowRocket(true)
    setTimeout(() => setShowRocket(false), 2200)
  }

  return (
    <section className="py-36 bg-mastero-bg-subtle">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Content - Left Side */}
          <motion.div variants={itemVariants} className="space-y-20">
            <motion.div variants={itemVariants}>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-blue-700 mb-6 relative animate-pulse-slow">
                Why Choose Perfect Tutor?
              </h2>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900 drop-shadow-[0_4px_12px_rgba(0,112,255,0.3)]">
                Empower Your Learning Journey
              </h3>
            </motion.div>
            
            <motion.p
              variants={itemVariants}
              className="text-xl sm:text-2xl text-gray-800 leading-loose max-w-xl"
            >
              Experience exceptional tutoring with Perfect Tutor, designed to help you achieve your goals with confidence.
            </motion.p>

            {/* Benefits List */}
            <motion.div variants={containerVariants} className="space-y-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={benefitVariants}
                  whileHover="hover"
                  className="flex items-center gap-5 p-6 bg-white/10 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer stat-card"
                  onMouseEnter={() => {
                    const tooltip = document.createElement('div')
                    tooltip.className = 'absolute bg-blue-800 text-white text-sm p-3 rounded-lg shadow-xl z-20'
                    tooltip.textContent = benefit
                    tooltip.style.left = '50%'
                    tooltip.style.transform = 'translateX(-50%)'
                    tooltip.style.bottom = '110%'
                    document.querySelectorAll('.stat-card')[index]?.appendChild(tooltip)
                  }}
                  onMouseLeave={() => {
                    document.querySelectorAll('.stat-card .bg-blue-800')?.forEach(el => el.remove())
                  }}
                >
                  <CheckCircle className="h-8 w-8 text-blue-500 animate-float" />
                  <span className="text-gray-900 text-lg sm:text-xl font-medium leading-relaxed">{benefit}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={itemVariants} className="flex justify-center w-full">
              <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap" onClick={handleButtonClick}>
                <Button
                  size="lg"
                  asChild
                  className="relative overflow-hidden bg-gradient-mastero font-bold text-lg px-12 py-7 rounded-full shadow-xl hover:bg-blue-700 transition-all duration-300 focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 flex items-center gap-4 max-w-[280px] w-full justify-center"
                >
                  <Link href="/learn-more">
                    Discover More <ArrowRight className="h-6 w-6" />
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-30 blur-sm [animation:shimmer_2s_linear_infinite] pointer-events-none"></span>
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Rocket Loading Animation */}
          <AnimatePresence>
            {showRocket && (
              <motion.div
                className="fixed inset-0 flex items-center justify-center bg-blue-950/80 z-50"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={rocketVariants}
              >
                <motion.div
                  className="relative"
                  variants={trailVariants}
                >
                  <span className="text-8xl text-blue-400 animate-bounce">🚀</span>
                  <motion.div
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-blue-400 rounded-full"
                    animate={{ scale: [1, 1.6, 1], opacity: [1, 0.5, 0] }}
                    transition={{ duration: 1.1, repeat: Infinity }}
                  />
                  <motion.div
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-7 h-7 bg-blue-500 rounded-full"
                    animate={{ scale: [0.5, 1.3, 0.5], opacity: [0.7, 0.3, 0] }}
                    transition={{ duration: 1.3, repeat: Infinity, delay: 0.3 }}
                  />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Tailwind Animation Styles */}
      <style jsx>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.7; }
          50% { transform: scale(1.05); opacity: 1; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        .animate-pulse { animation: pulse 3.2s ease-in-out infinite; }
        .animate-float { animation: float 3.2s ease-in-out infinite; }
        .animate-spin-slow { animation: spin 12s linear infinite; }
      `}</style>
    </section>
  )
}