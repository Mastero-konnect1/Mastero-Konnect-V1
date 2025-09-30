import Link from 'next/link'
import { Star, Clock, Users, Trophy, TrendingUp, Award, Target, Zap, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const achievements = [
  {
    icon: Star,
    value: "4.9/5",
    label: "Average Rating",
    description: "Based on 10,000+ verified reviews",
    iconGradient: "bg-gradient-to-br from-yellow-500 to-orange-600",
    beforeGradient: "before:bg-gradient-to-br before:from-yellow-500 before:to-orange-600"
  },
  {
    icon: Clock,
    value: "3.2x",
    label: "Faster Progress",
    description: "Compared to self-learning",
    iconGradient: "bg-gradient-to-br from-blue-500 to-cyan-600",
    beforeGradient: "before:bg-gradient-to-br before:from-blue-500 before:to-cyan-600"
  },
  {
    icon: Users,
    value: "89%",
    label: "Career Advancement",
    description: "Within 6 months",
    iconGradient: "bg-gradient-to-br from-green-500 to-emerald-600",
    beforeGradient: "before:bg-gradient-to-br before:from-green-500 before:to-emerald-600"
  },
  {
    icon: Trophy,
    value: "95%",
    label: "Goal Achievement",
    description: "Success rate",
    iconGradient: "bg-gradient-to-br from-purple-500 to-pink-600",
    beforeGradient: "before:bg-gradient-to-br before:from-purple-500 before:to-pink-600"
  }
]

const features = [
  {
    icon: TrendingUp,
    title: "Proven Results",
    description: "Join thousands who've transformed their careers with our expert guidance"
  },
  {
    icon: Target,
    title: "Goal-Oriented",
    description: "Structured learning paths designed to achieve your specific objectives"
  },
  {
    icon: Zap,
    title: "Fast Track",
    description: "Accelerate your progress with personalized, intensive learning programs"
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6 } }
}

const achievementVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } },
  hover: { 
    scale: 1.08, 
    y: -10,
    rotateY: 5,
    transition: { 
      duration: 0.4,
      type: "spring" as const,
      stiffness: 300,
      damping: 20
    }
  }
}

const featureVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  hover: { 
    scale: 1.05, 
    x: 10,
    transition: { duration: 0.3 }
  }
}

const buttonVariants = {
  hover: {
    scale: 1.05,
    boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)",
    transition: { type: "spring" as const, stiffness: 300, damping: 20 }
  },
  tap: { scale: 0.98, transition: { duration: 0.2 } }
}

const rocketVariants = {
  hidden: { opacity: 0, y: 0 },
  visible: {
    opacity: 1,
    y: -200,
    transition: { duration: 1.5 }
  },
  exit: { opacity: 0, y: -300, transition: { duration: 0.5 } }
}

const trailVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: { opacity: 0.6, scale: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0, scale: 1.5, transition: { duration: 0.3 } }
}

export default function ContentBlock2() {
  const [showRocket, setShowRocket] = useState(false)

  const handleButtonClick = () => {
    setShowRocket(true)
    setTimeout(() => setShowRocket(false), 2000)
  }

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        
        {/* Decorative Lines */}
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-200/40 to-transparent" />
        <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-200/40 to-transparent" />
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-cyan-200/30 to-transparent" />
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-pink-200/30 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <motion.div
          className="text-center mb-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
         <motion.h1
  variants={itemVariants}
  className="pt-4 text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight font-sans text-center"
>
  <span className="bg-clip-text font-semibold">
    Elevate Your Journey, Achieve More Every Day
  </span>
</motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-xl pt-4 sm:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed"
          >
           "Accelerate your career growth with expert guidance—achieve success faster and reach greater heights."
          </motion.p>
        </motion.div>

        {/* Achievements Grid */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2  pt-4 sm:grid-cols-4 gap-8 mb-20"
          initial="hidden"
          animate="visible"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              variants={achievementVariants}
              whileHover="hover"
              className="group relative"
              style={{ perspective: "1000px" }}
            >
              <div className={`
                relative p-8 rounded-3xl bg-gray-50 tp-4
                border border-gray-200 hover:border-gray-300 shadow-md hover:shadow-lg
                transition-all duration-500 cursor-pointer overflow-hidden
                ${achievement.beforeGradient}
                before:opacity-0 before:transition-opacity before:duration-300 
                group-hover:before:opacity-20
              `}>
                {/* Decorative Corner Elements */}
                <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-gray-300 rounded-tl-lg" />
                <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-gray-300 rounded-tr-lg" />
                <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-gray-300 rounded-bl-lg" />
                <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-gray-300 rounded-br-lg" />
                
                <div className="relative z-10 text-center">
                  <div className={`
                    w-20 h-20 mx-auto mb-6 rounded-2xl ${achievement.iconGradient} 
                    flex items-center justify-center shadow-lg relative
                    group-hover:scale-110 transition-transform duration-300
                  `}>
                    <achievement.icon className="h-10 w-10 text-black font-bold" />
                    {/* Glow effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="text-5xl font-bold text-gray-900 mb-2 transition-colors duration-300">
                    {achievement.value}
                  </div>
                  <div className="text-lg font-semibold text-gray-700 mb-2 group-hover:text-gray-900 transition-colors duration-300">
                    {achievement.label}
                  </div>
                  <div className="text-sm text-gray-500 group-hover:text-gray-700 transition-colors duration-300">
                    {achievement.description}
                  </div>
                </div>
                
                {/* Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-pulse pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={containerVariants}
          className="flex flex-col sm:flex-row justify-center gap-8"
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap" onClick={handleButtonClick} className="relative group">
            {/* Decorative background */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl blur opacity-75 group-hover:opacity-100 transition-opacity duration-300" />
            <Button
              size="lg"
              asChild
              className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white font-bold text-lg px-16 py-8 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 focus:ring-4 focus:ring-blue-500/50 flex items-center gap-4 border-2 border-gray-300 hover:border-gray-400"
            >
              <Link href="/ai-assessment">
                <span className="relative z-10 flex items-center gap-3">
                  Get Started Now
                  <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500 pointer-events-none"></span>
              </Link>
            </Button>
          </motion.div>

          <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap" onClick={handleButtonClick} className="relative group">
            {/* Decorative background */}
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 rounded-3xl blur opacity-75 group-hover:opacity-100 transition-opacity duration-300" />
            <Button
              size="lg"
              asChild
              variant="outline"
              className="relative overflow-hidden border-2 border-gray-300 bg-gray-50 hover:bg-gray-100 text-gray-800 font-bold text-lg px-16 py-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 focus:ring-4 focus:ring-gray-300 flex items-center gap-4"
            >
              <Link href="/auth/sign-up">
                <span className="relative z-10 flex items-center gap-3">
                  Join as Mentor
                  <Users className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-200/20 to-transparent opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500 pointer-events-none"></span>
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Rocket Loading Animation */}
      <AnimatePresence>
        {showRocket && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-gray-100/80 z-50"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={rocketVariants}
          >
            <motion.div
              className="relative"
              variants={trailVariants}
            >
              <span className="text-8xl text-blue-500 animate-bounce">🚀</span>
              <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-blue-500 rounded-full shadow-lg"
                animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}