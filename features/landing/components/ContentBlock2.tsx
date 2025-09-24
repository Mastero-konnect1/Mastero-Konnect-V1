import Link from 'next/link'
import { Star, Clock, Users, Trophy } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: "easeOut" } }
}

const statVariants = {
  hidden: { opacity: 0, rotateY: 90 },
  visible: { opacity: 1, rotateY: 0, transition: { duration: 0.6, ease: "easeOut" } },
  hover: { scale: 1.05, rotateY: 10, transition: { duration: 0.3 } }
}

const buttonVariants = {
  hover: {
    scale: 1.1,
    boxShadow: "0 8px 25px rgba(0, 112, 255, 0.3)",
    transition: { type: "spring", stiffness: 300, damping: 15 }
  },
  tap: { scale: 0.98, transition: { duration: 0.2 } }
}

const rocketVariants = {
  hidden: { opacity: 0, y: 0 },
  visible: {
    opacity: 1,
    y: -200,
    transition: { duration: 1.5, ease: "easeInOut" }
  },
  exit: { opacity: 0, y: -300, transition: { duration: 0.5 } }
}

const trailVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: { opacity: 0.5, scale: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0, scale: 1.5, transition: { duration: 0.3 } }
}

export default function ContentBlock2() {
  const [showRocket, setShowRocket] = useState(false)

  const handleButtonClick = () => {
    setShowRocket(true)
    setTimeout(() => setShowRocket(false), 2000) // Hide rocket after 2s
  }

  return (
    <section className="relative py-32 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/noisy.png')] bg-blue-900/10 mix-blend-overlay" />
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-800/70 to-blue-600/70" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-black mb-8 relative animate-pulse-slow"
          >
            <span className="block mt-12 bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-black drop-shadow-[0_4px_10px_rgba(0,112,255,0.5)]">
              Elevate Your Journey
            </span>
            <span className="block mt-12 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-gray drop-shadow-[0_4px_10px_rgba(0,112,255,0.5)]">
              ,Achieve More
            </span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-black mb-12 max-w-2xl mx-auto leading-relaxed drop-shadow-[0_2px_5px_rgba(255,255,255,0.3)]"
          >
            Unlock your career potential with expert guidance, delivering faster and greater success.
          </motion.p>

          {/* Stats Carousel */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={statVariants}
                initial="visible"
                whileHover="hover"
                className="p-6 rounded-xl bg-white/20 backdrop-blur-sm relative overflow-hidden cursor-pointer"
                style={{
                  borderImage: "linear-gradient(to right, #3B82F6, #60A5FA) 1",
                  borderWidth: "2px",
                  borderStyle: "solid"
                }}
                onMouseEnter={() => {
                  const tooltip = document.createElement('div')
                  tooltip.className = 'absolute bg-blue-900 text-white text-xs p-2 rounded-md shadow-lg'
                  tooltip.textContent = stat.description
                  tooltip.style.left = '50%'
                  tooltip.style.transform = 'translateX(-50%)'
                  tooltip.style.bottom = '100%'
                  tooltip.style.zIndex = '20'
                  document.querySelectorAll('.stat-card')[index]?.appendChild(tooltip)
                }}
                onMouseLeave={() => {
                  document.querySelectorAll('.stat-card .bg-blue-900')?.forEach(el => el.remove())
                }}
              >
                <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22%3E%3Ccircle cx=%2250%22 cy=%2250%22 r=%2210%22 fill=%22rgba(59,130,246,0.1)%22/%3E%3C/svg%3E')] opacity-30" />
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="flex justify-center mb-4 animate-float">
                    <stat.icon className="h-10 w-10 text-blue-500" />
                  </div>
                  <div className="text-3xl font-bold text-gray-800 mb-2">{stat.value}</div>
                  <div className="text-sm font-medium text-gray-200">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Visual Accent */}
          <motion.div
            variants={itemVariants}
            className="relative w-36 h-36 mx-auto mb-12"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-400 rounded-full opacity-20 blur-xl animate-pulse" />
            <div className="absolute inset-2 bg-blue-800 rounded-full flex items-center justify-center">
              <span className="text-4xl text-white animate-bounce">🚀</span>
            </div>
          </motion.div>

          {/* Buttons */}
       <motion.div
  variants={containerVariants}
  className="flex flex-row justify-center gap-8 flex-wrap w-full max-w-[90%] mx-auto"
>
  {/* Button 1 */}
  <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap" onClick={handleButtonClick}>
    <Button
      size="lg"
      asChild
      className="relative overflow-hidden bg-gradient-mastero hover:opacity-90 text-lg font-bold px-12 py-6 rounded-full shadow-xl hover:scale-105 transition-transform duration-300 focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 flex items-center gap-4 max-w-[300px] w-full"
    >
      <Link href="/ai-assessment">
        Get Started Now <span className="text-xl">→</span>
        {/* White shimmer animation using inline Tailwind */}
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 blur-sm [animation:shimmer_2s_linear_infinite] pointer-events-none"></span>
      </Link>
    </Button>
  </motion.div>

  {/* Button 2 */}
  <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap" onClick={handleButtonClick}>
    <Button
      size="lg"
      asChild
      className="relative overflow-hidden bg-gradient-mastero hover:opacity-90 text-lg font-bold px-12 py-6 rounded-full shadow-xl hover:scale-105 transition-transform duration-300 focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 flex items-center gap-4 max-w-[300px] w-full"
    >
      <Link href="/auth/sign-up">
        Join as Mentor <span className="text-xl">→</span>
        {/* White shimmer animation using inline Tailwind */}
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 blur-sm [animation:shimmer_2s_linear_infinite] pointer-events-none"></span>
      </Link>
    </Button>
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
                  <span className="text-7xl text-blue-400 animate-bounce">🚀</span>
                  <motion.div
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-blue-400 rounded-full"
                    animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}