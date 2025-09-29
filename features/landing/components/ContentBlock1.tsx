import Link from 'next/link'
import { CheckCircle, ArrowRight, Sparkles, Users, Clock, Target, Award, BookOpen } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const features = [
  {
    icon: Users,
    title: "Personalized Mentorship",
    description: "One-on-one guidance tailored to your unique learning style and career goals",
    gradient: "from-blue-500 to-blue-600"
  },
  {
    icon: Award,
    title: "Expert Instructors",
    description: "Learn from certified professionals with proven industry experience",
    gradient: "from-blue-600 to-blue-700"
  },
  {
    icon: BookOpen,
    title: "Premium Platform",
    description: "Access our cutting-edge online learning environment with advanced tools",
    gradient: "from-blue-700 to-blue-800"
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description: "Study when it works best for your lifestyle and commitments",
    gradient: "from-blue-800 to-blue-900"
  },
  {
    icon: Target,
    title: "Progress Tracking",
    description: "Monitor your advancement with clear milestones and detailed insights",
    gradient: "from-blue-900 to-indigo-800"
  },
  {
    icon: Sparkles,
    title: "Community Support",
    description: "Connect with fellow learners in our vibrant, supportive community",
    gradient: "from-indigo-800 to-indigo-900"
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6 } }
}

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1, 
    transition: { duration: 0.5, ease: "easeOut" as const }
  },
  hover: { 
    scale: 1.05,
    y: -8,
    rotateX: 5,
    rotateY: 5,
    transition: { 
      duration: 0.3,
      type: "spring" as const,
      stiffness: 300,
      damping: 20
    }
  }
}

const buttonVariants = {
  hover: {
    scale: 1.05,
    boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)",
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

export default function ContentBlock1() {
  const [showRocket, setShowRocket] = useState(false)

  const handleButtonClick = () => {
    setShowRocket(true)
    setTimeout(() => setShowRocket(false), 2000)
  }

  return (
    <section className="py-24 bg-mastero-bg-subtle  relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30" />
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl font-semibold sm:text-5xl lg:text-9xl font-extrabold text-mastero-dark mb-6"
          >
            Why Choose Perfect Tutor?
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl sm:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed"
          >
            Experience exceptional tutoring designed to help you achieve your goals with confidence and excellence.
          </motion.p>
        </motion.div>

        {/* Features Grid - 3 columns, 2 rows */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              className="group relative"
              style={{ perspective: "1000px" }}
            >
              <div className={`
                relative h-full p-8 rounded-3xl bg-white/10 backdrop-blur-sm 
                border-2 border-white/30 hover:border-blue/50 shadow-xl hover:shadow-2xl
                transition-all duration-500 cursor-pointer rounded-xl overflow-hidden
                before:absolute before:inset-0 before:bg-gradient-to-br before:${feature.gradient} 
                before:opacity-0 before:transition-opacity before:duration-300 
                group-hover:before:opacity-100
              `}>
                {/* Card Content */}
                <div className="relative z-10 h-full flex flex-col">
                  {/* Logo and Icon */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`
                      w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} 
                      flex items-center justify-center shadow-lg
                      group-hover:scale-110 transition-transform duration-300
                    `}>
                      <feature.icon className="h- w-6 text-mastero" />
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-mastero-dark mb-4 group-hover:text-blue-100 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-blue-100 leading-relaxed flex-grow group-hover:text-white transition-colors duration-300">
                    {feature.description}
                  </p>
                  
                  {/* Hover Indicator */}
                  <div className="mt-6 flex items-center text-sm font-medium text-blue-200 group-hover:text-white transition-colors duration-300">
                    <span>Learn more</span>
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
                
                {/* Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-pulse pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="text-center"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap" onClick={handleButtonClick}>
            <Button
              size="lg"
              asChild
              className="relative overflow-hidden bg-gradient-to-r from-white to-blue-100 hover:from-blue-50 hover:to-blue-200 text-blue-700 font-bold text-lg px-12 py-6 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 focus:ring-4 focus:ring-white/50 flex items-center gap-4 mx-auto"
            >
              <Link href="/ai-assessment">
                Start Your Journey
                <ArrowRight className="h-6 w-6" />
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500 pointer-events-none"></span>
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>

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
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-blue-400 rounded-full"
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