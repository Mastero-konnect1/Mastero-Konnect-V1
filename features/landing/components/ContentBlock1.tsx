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
    iconColor: "#7DD3FC" // sky-300
  },
  {
    icon: Award,
    title: "Expert Instructors",
    description: "Learn from certified professionals with proven industry experience",
    iconColor: "#FBBF24" // amber-400
  },
  {
    icon: BookOpen,
    title: "Premium Platform",
    description: "Access our cutting-edge online learning environment with advanced tools",
    iconColor: "#34D399" // emerald-400
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description: "Study when it works best for your lifestyle and commitments",
    iconColor: "#F472B6" // pink-400
  },
  {
    icon: Target,
    title: "Progress Tracking",
    description: "Monitor your advancement with clear milestones and detailed insights",
    iconColor: "#A78BFA" // violet-400
  },
  {
    icon: Sparkles,
    title: "Community Support",
    description: "Connect with fellow learners in our vibrant, supportive community",
    iconColor: "#22D3EE" // cyan-400
  }
]

const scrollingFeatures = [...features, ...features]

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
    transition: { duration: 0.5, ease: "easeOut" }
  },
  hover: { 
    scale: 1.05,
    y: -8,
    rotateX: 5,
    rotateY: 5,
    transition: { 
      duration: 0.3,
      type: "spring",
      stiffness: 300,
      damping: 20
    }
  }
}

const buttonVariants = {
  hover: {
    scale: 1.05,
    boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)",
    transition: { type: "spring", stiffness: 300, damping: 20 }
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
    <section style={{ paddingTop: '6rem', paddingBottom: '6rem', backgroundColor: '#E6F0FA', position: 'relative', overflow: 'hidden' }}>
      {/* Background Pattern */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundImage: `url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%236368A0" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`, opacity: 0.3 }} />
      
      <div style={{ maxWidth: '80rem', margin: '0 auto', paddingLeft: '1.5rem', paddingRight: '1.5rem',  position: 'relative', zIndex: 10 }}>
        {/* Header Section */}
        <motion.div
          style={{ textAlign: 'center', marginBottom: '4rem' }}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h2 
            variants={itemVariants}
            style={{ 
              marginBottom: '1.5rem', 
              position: 'relative',
              textAlign: 'center'
            }}
          >
            <span style={{ 
              display: 'inline-block', 
              fontSize: '2.5rem', 
              fontWeight: 'bold', 
              background: 'linear-gradient(135deg, #3B82F6, #6366F1)', 
              WebkitBackgroundClip: 'text', 
              backgroundClip: 'text', 
              WebkitTextFillColor: 'transparent', 
              boxShadow: '0 4px 12px rgba(59,130,246,0.4)', 
              marginBottom: '0.5rem' 
            }}>
              Why Choose
            </span>
            <br />
            <span style={{ 
              fontSize: '3rem', 
              fontWeight: '900', 
              background: 'linear-gradient(135deg, #6366F1, #8B5CF6)', 
              WebkitBackgroundClip: 'text', 
              backgroundClip: 'text', 
              WebkitTextFillColor: 'transparent', 
              boxShadow: '0 6px 16px rgba(99,102,241,0.6)', 
              letterSpacing: '-0.05em',
              fontStyle: 'italic'
            }}>
              Perfect Tutor?
            </span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            style={{ 
              fontSize: '1.125rem', 
              lineHeight: '1.75', 
              letterSpacing: '0.025em', 
              fontWeight: '300', 
              color: '#1F2937',
              maxWidth: '48rem',
              margin: '0 auto',
              textShadow: '0 2px 4px rgba(0,0,0,0.1)',
      
            }}
          >
            Experience exceptional tutoring designed to help you <span style={{ 
              fontWeight: '600', 
              background: 'linear-gradient(135deg, #3B82F6, #6366F1)', 
              WebkitBackgroundClip: 'text', 
              backgroundClip: 'text', 
              WebkitTextFillColor: 'transparent',
              fontStyle: 'italic'
            }}>achieve your goals</span> with confidence and excellence.
          </motion.p>
        </motion.div>

        {/* Features Marquee - Infinite Left-to-Right */}
        <motion.div
          style={{ position: 'relative', marginBottom: '4rem' }}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div style={{ overflow: 'hidden', borderRadius: '1.5rem', background: 'rgba(255, 255, 255, 0.05)', backdropFilter: 'blur(20px)',  }}>
            <div className="marquee" style={{ display: 'flex', gap: '2rem', width: 'max-content', animation: 'marquee-right 35s linear infinite', willChange: 'transform' }}>
              {scrollingFeatures.map((feature, index) => (
                <motion.div
                  key={`${index}-${feature.title}`}
                  whileHover="hover"
                  style={{ 
                    position: 'relative', 
                    minWidth: '20rem', 
                    maxWidth: '23.75rem', 
                    display: 'inline-block', 
                    marginLeft: '1rem', 
                    marginRight: '1rem',
                    perspective: "1000px"
                  
                  }}
                >
               <div
  style={{
    position: 'relative',
    height: '100%',
    padding: '2rem',
    borderRadius: '1.5rem',
    // removed semi-transparent background

    transition: 'all 0.5s ease',
    cursor: 'pointer',
    overflow: 'hidden',
    border: 'none',
    outline: 'none',
  }}
>
  {/* Card Content */}
  <div
    style={{
      position: 'relative',
      height: '85%',
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: 'white',
      width: '100%',
      borderRadius: '1rem',
      padding: '1.5rem',
      transition: 'transform 0.3s ease',
      margin: 0,
      border: 'none',
      outline: 'none',
    }}
  >
    {/* Logo and Icon */}
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.2rem', marginBottom: '1.5rem' }}>
      <div
        style={{
          width: '4rem',
          height: '4rem',
          borderRadius: '0.75rem',
          backgroundColor: feature.iconColor || '#1E3A8A',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 0.75rem 3rem rgba(0,0,0,0.3)',
          transition: 'transform 0.3s ease',
          border: 'none',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
        onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
      >
        <feature.icon
          style={{
            height: '1.75rem',
            width: '1.75rem',
            color: 'white',
            filter: 'drop-shadow(0 0.25rem 0.75rem rgba(0,0,0,0.4))',
          }}
        />
      </div>
    </div>

    {/* Title */}
    <h3
      style={{
        fontSize: '1.5rem',
        fontWeight: '900',
        color: '#1E3A8A',
        marginBottom: '1rem',
        transition: 'color 0.3s ease',
      }}
      onMouseEnter={(e) => (e.currentTarget.style.color = '#2563EB')}
      onMouseLeave={(e) => (e.currentTarget.style.color = '#1E3A8A')}
    >
      {feature.title}
    </h3>

    {/* Description */}
    <p
      style={{
        color: '#475569',
        lineHeight: '1.6',
        flexGrow: 1,
        transition: 'color 0.3s ease',
        fontStyle: 'italic',
        fontWeight: '300',
      }}
      onMouseEnter={(e) => (e.currentTarget.style.color = '#1E293B')}
      onMouseLeave={(e) => (e.currentTarget.style.color = '#475569')}
    >
      {feature.description}
    </p>

    {/* Hover Indicator */}
    <div
      style={{
        marginTop: '1.5rem',
        display: 'flex',
        alignItems: 'center',
        fontSize: '0.875rem',
        fontWeight: '500',
        color: '#2563EB',
        transition: 'color 0.3s ease',
      }}
      onMouseEnter={(e) => (e.currentTarget.style.color = '#1E3A8A')}
      onMouseLeave={(e) => (e.currentTarget.style.color = '#2563EB')}
    >
      <span>Learn more</span>
      <ArrowRight
        style={{
          height: '1rem',
          width: '1rem',
          marginLeft: '0.5rem',
          transition: 'transform 0.3s ease',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateX(0.25rem)')}
        onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateX(0)')}
      />
    </div>
  </div>

  {/* Optional shimmer effect — disabled by default */}
  <div
    style={{
      position: 'absolute',
      inset: 0,
      opacity: 0,
      transition: 'opacity 0.3s ease',
      pointerEvents: 'none',
    }}
  />
</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          style={{ textAlign: 'center' }}
          variants={itemVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div whileHover="hover" whileTap="tap" onClick={handleButtonClick}>
            <Button
              size="lg"
              asChild
              style={{ 
                position: 'relative', 
                overflow: 'hidden', 
                background: 'linear-gradient(135deg, #3B82F6, #6366F1)', 
                color: 'white', 
                fontWeight: 'bold', 
                fontSize: '1.125rem', 
                paddingLeft: '3rem', 
                paddingRight: '3rem', 
                paddingTop: '1.5rem', 
                paddingBottom: '1.5rem', 
                borderRadius: '1rem', 
                boxShadow: '0 1.25rem 2rem rgba(0,0,0,0.3)', 
                transition: 'all 0.3s ease',
                display: 'flex', 
                alignItems: 'center', 
                gap: '1rem', 
                margin: '0 auto' 
              }} onMouseEnter={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, #2563EB, #4F46E5)';
                e.currentTarget.style.boxShadow = '0 1.5rem 2.5rem rgba(0,0,0,0.4)';
              }} onMouseLeave={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, #3B82F6, #6366F1)';
                e.currentTarget.style.boxShadow = '0 1.25rem 2rem rgba(0,0,0,0.3)';
              }}
            >
              <Link href="/ai-assessment" style={{ color: 'white', textDecoration: 'none' }}>
                Start Your Journey
                <ArrowRight style={{ height: '1.5rem', width: '1.5rem' }} />
                <span style={{ 
                  position: 'absolute', 
                  inset: 0, 
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)', 
                  opacity: 0, 
                  transition: 'opacity 0.5s ease',
                  pointerEvents: 'none' 
                }} />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Rocket Loading Animation */}
      <AnimatePresence>
        {showRocket && (
          <motion.div
            style={{ 
              position: 'fixed', 
              inset: 0, 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              backgroundColor: 'rgba(15, 23, 42, 0.8)', 
              zIndex: 50 
            }}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={rocketVariants}
          >
            <motion.div
              style={{ position: 'relative' }}
              variants={trailVariants}
            >
              <span style={{ fontSize: '5rem', color: '#60A5FA', animation: 'bounce 2s infinite' }}>🚀</span>
              <motion.div
                style={{ 
                  position: 'absolute', 
                  top: '50%', 
                  left: '50%', 
                  transform: 'translate(-50%, -50%)', 
                  width: '1.5rem', 
                  height: '1.5rem', 
                  backgroundColor: '#60A5FA', 
                  borderRadius: '50%' 
                }}
                animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .marquee {
          display: flex;
          gap: 2rem;
          width: max-content;
          animation: marquee-right 35s linear infinite;
          will-change: transform;
        }
        .marquee:hover {
          animation-play-state: paused;
        }
        @keyframes marquee-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </section>
  )
}