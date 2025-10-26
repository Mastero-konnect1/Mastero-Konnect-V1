// import Link from 'next/link'
// import { CheckCircle, ArrowRight, Sparkles, Users, Clock, Target, Award, BookOpen } from 'lucide-react'
// import { Button } from '@/components/ui/button'
// import { motion, AnimatePresence } from 'framer-motion'
// import { useState } from 'react'

// const features = [
//   {
//     icon: Users,
//     title: "Personalized Mentorship",
//     description: "One-on-one guidance tailored to your unique learning style and career goals",
//     iconColor: "#6B50EB" // brand start
//   },
//   {
//     icon: Award,
//     title: "Expert Instructors",
//     description: "Learn from certified professionals with proven industry experience",
//     iconColor: "#6256ED" // brand mid
//   },
//   {
//     icon: BookOpen,
//     title: "Premium Platform",
//     description: "Access our cutting-edge online learning environment with advanced tools",
//     iconColor: "#555DEF" // brand end
//   },
//   {
//     icon: Clock,
//     title: "Flexible Scheduling",
//     description: "Study when it works best for your lifestyle and commitments",
//     iconColor: "#6B50EB" // brand start
//   },
//   {
//     icon: Target,
//     title: "Progress Tracking",
//     description: "Monitor your advancement with clear milestones and detailed insights",
//     iconColor: "#6256ED" // brand mid
//   },
//   {
//     icon: Sparkles,
//     title: "Community Support",
//     description: "Connect with fellow learners in our vibrant, supportive community",
//     iconColor: "#555DEF" // brand end
//   }
// ]

// const scrollingFeatures = [...features, ...features]

// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: { staggerChildren: 0.1, delayChildren: 0.2 }
//   }
// }

// const itemVariants = {
//   hidden: { opacity: 0, y: 30, scale: 0.95 },
//   visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6 } }
// }

// const cardVariants = {
//   hidden: { opacity: 0, y: 20, scale: 0.95 },
//   visible: { 
//     opacity: 1, 
//     y: 0, 
//     scale: 1, 
//     transition: { duration: 0.5, ease: "easeOut" }
//   },
//   hover: { 
//     scale: 1.05,
//     y: -8,
//     rotateX: 5,
//     rotateY: 5,
//     transition: { 
//       duration: 0.3,
//       type: "spring",
//       stiffness: 300,
//       damping: 20
//     }
//   }
// }

// const buttonVariants = {
//   hover: {
//     scale: 1.05,
//     boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)",
//     transition: { type: "spring", stiffness: 300, damping: 20 }
//   },
//   tap: { scale: 0.98, transition: { duration: 0.2 } }
// }

// const rocketVariants = {
//   hidden: { opacity: 0, y: 0 },
//   visible: {
//     opacity: 1,
//     y: -200,
//     transition: { duration: 1.5 }
//   },
//   exit: { opacity: 0, y: -300, transition: { duration: 0.5 } }
// }

// const trailVariants = {
//   hidden: { opacity: 0, scale: 0 },
//   visible: { opacity: 0.6, scale: 1, transition: { duration: 0.5 } },
//   exit: { opacity: 0, scale: 1.5, transition: { duration: 0.3 } }
// }

// export default function ContentBlock1() {
//   const [showRocket, setShowRocket] = useState(false)

//   const handleButtonClick = () => {
//     setShowRocket(true)
//     setTimeout(() => setShowRocket(false), 2000)
//   }

//   return (
//     <section style={{ paddingTop: '6rem', paddingBottom: '6rem', background: 'linear-gradient(135deg,rgb(64, 142, 216), rgb(220, 218, 231), rgb(90, 56, 136))', position: 'relative', overflow: 'hidden', width: '90%', margin: '0 auto' }}>
//       {/* Background Pattern */}
//       <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundImage: `url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%236368A0" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`, opacity: 0.3 }} />
      
//       <div style={{ maxWidth: '80rem', margin: '0 auto', paddingLeft: '1.5rem', paddingRight: '1.5rem',  position: 'relative', zIndex: 10 }}>
//         {/* Header Section */}
//         <motion.div
//           style={{ textAlign: 'center', marginBottom: '4rem' }}
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//         >
//           <motion.h2 
//             variants={itemVariants}
//             style={{ 
//               marginBottom: '1.5rem', 
//               position: 'relative',
//               textAlign: 'center'
//             }}
//           >
//             <span style={{ 
//               display: 'inline-block', 
//               fontSize: '2.5rem', 
//               fontWeight: 'bold', 
//               background: 'linear-gradient(90deg, #3A86FF 0%, #7B2FF7 100%)',
//               WebkitBackgroundClip: 'text', 
//               backgroundClip: 'text', 
//               WebkitTextFillColor: 'transparent', 
//               marginBottom: '0.5rem' ,
//               marginRight: '0.5rem',
//             }}>
//               Choose your
//             </span>
            
//             <span style={{ 
//               fontSize: '3rem', 
//               fontWeight: '800', 
//               background: 'linear-gradient(90deg, #3A86FF 0%, #7B2FF7 100%)',
//               WebkitBackgroundClip: 'text', 
//               backgroundClip: 'text', 
//               WebkitTextFillColor: 'transparent', 
//               // boxShadow: '0 6px 16px rgba(85,93,239,0.45)', 
//               letterSpacing: '0.05em',
//               marginRight: '0.5rem',
              
//             }}>
//                Perfect Tutor
//             </span>
//           </motion.h2>
//           <motion.p
//             variants={itemVariants}
//             style={{ 
//               fontSize: '1.125rem', 
//               lineHeight: '1.75', 
              
//               fontWeight: '300', 
//               color: '#1F2937',
//               maxWidth: '48rem',
//               margin: '0 auto',
//               textShadow: '0 2px 4px rgba(0,0,0,0.1)',
      
//             }}
//           >
//             Experience exceptional tutoring designed to help you <span style={{ 
//               fontWeight: '600', 
//               background: 'linear-gradient(90deg, #3A86FF 0%, #7B2FF7 100%)', 
//               WebkitBackgroundClip: 'text', 
//               backgroundClip: 'text', 
//               WebkitTextFillColor: 'transparent',
//               fontStyle: 'italic'
//             }}>achieve your goals</span> with confidence and excellence.
//           </motion.p>
//         </motion.div>

//         {/* Features Marquee - Infinite Left-to-Right */}
//         <motion.div
//           style={{ position: 'relative', marginBottom: '4rem' }}
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//         >
//           <div style={{ overflow: 'hidden', borderRadius: '1.5rem', background: 'rgba(255, 255, 255, 0.05)', backdropFilter: 'blur(20px)',  }}>
//             <div className="marquee" style={{ display: 'flex', gap: '2rem', width: 'max-content', animation: 'marquee-right 35s linear infinite', willChange: 'transform' }}>
//               {scrollingFeatures.map((feature, index) => (
//                 <motion.div
//                   key={`${index}-${feature.title}`}
//                   whileHover="hover"
//                   style={{ 
//                     position: 'relative', 
//                     minWidth: '20rem', 
//                     maxWidth: '23.75rem', 
//                     display: 'inline-block', 
//                     marginLeft: '1rem', 
//                     marginRight: '1rem',
//                     perspective: "1000px"
                  
//                   }}
//                 >
//                <div
//   className="relative overflow-hidden group transition-transform duration-300 hover:scale-105 border-[3px] border-gradient-to-br from-blue-200 to-blue-400 shadow-md h-[420px]"
//   style={{
//     position: 'relative',
//     height: '420px',
//     transition: 'all 0.5s ease',
//     cursor: 'pointer',
//     overflow: 'hidden',
//     border: '3px solid transparent',
//     background: 'linear-gradient(white, white) padding-box, linear-gradient(135deg, #93C5FD, #60A5FA) border-box',
//     borderRadius: '1rem',
//     boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
//   }}
// >
//   {/* Background with whitish light blue */}
//   <div 
//     className="absolute inset-0"
//     style={{
//       background: 'linear-gradient(135deg, #f0f8ff, #e6f3ff, #ddeeff)',
//       backgroundSize: 'cover',
//       backgroundPosition: 'center',
//       backgroundRepeat: 'no-repeat'
//     }}
//   />
//   <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 via-transparent to-blue-100/30" />
  
//   {/* Top content */}
//   <div className="absolute top-4 left-4 text-slate-800">
//     <div className="flex items-center gap-3 mb-4">
//       <div
//         style={{
//           width: '3rem',
//           height: '3rem',
//           borderRadius: '0.75rem',
//           backgroundColor: feature.iconColor || '#3B82F6',
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//           boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)',
//         }}
//       >
//         <feature.icon
//           style={{
//             height: '1.5rem',
//             width: '1.5rem',
//             color: 'white',
//           }}
//         />
//       </div>
//     </div>
//     <h3 className="text-2xl font-bold mb-1 text-slate-800">{feature.title}</h3>
//      {/* Bottom content */}
//   <div className="relative z-10 h-full flex flex-col justify-end p-4 text-slate-700">
//     <div className="flex items-center justify-center mb-6">
//       <div className="text-center space-y-2">
//         <p className="text-base text-slate-600"><span className="font-semibold text-slate-800">{feature.description}</span></p>
//         <ul className="list-disc list-inside text-slate-700 space-y-1 mt-2">
//           <li>Tailored guidance</li>
//           <li>Proven results</li>
//         </ul>
//       </div>
//     </div>
//   </div>
//     <Button
//       size="lg"
//       className="bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 w-full py-4 transition-all duration-300 mt-4 shadow-lg"
//     >
//       Learn more
//       <ArrowRight className="w-5 h-5 ml-2" />
//     </Button>
//   </div>
// </div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </motion.div>

//         {/* CTA Section */}
//         <motion.div 
//           style={{ textAlign: 'center' }}
//           variants={itemVariants}
//           initial="hidden"
//           animate="visible"
//         >
//           <motion.div whileHover="hover" whileTap="tap" onClick={handleButtonClick}>
//             <Button
//               size="lg"
//               asChild
//               style={{ 
//                 position: 'relative', 
//                 overflow: 'hidden', 
//                 background: 'linear-gradient(135deg, #3B82F6, #6366F1)', 
//                 color: 'white', 
//                 fontWeight: 'bold', 
//                 fontSize: '1.125rem', 
//                 paddingLeft: '3rem', 
//                 paddingRight: '3rem', 
//                 paddingTop: '1.5rem', 
//                 paddingBottom: '1.5rem', 
//                 borderRadius: '1rem', 
//                 boxShadow: '0 1.25rem 2rem rgba(0,0,0,0.3)', 
//                 transition: 'all 0.3s ease',
//                 display: 'flex', 
//                 alignItems: 'center', 
//                 gap: '1rem', 
//                 margin: '0 auto' 
//               }} onMouseEnter={(e) => {
//                 e.currentTarget.style.background = 'linear-gradient(135deg, #2563EB, #4F46E5)';
//                 e.currentTarget.style.boxShadow = '0 1.5rem 2.5rem rgba(0,0,0,0.4)';
//               }} onMouseLeave={(e) => {
//                 e.currentTarget.style.background = 'linear-gradient(135deg, #3B82F6, #6366F1)';
//                 e.currentTarget.style.boxShadow = '0 1.25rem 2rem rgba(0,0,0,0.3)';
//               }}
//             >
//               <Link href="/ai-assessment" style={{ color: 'white', textDecoration: 'none'}} className="w-[30%] sm:w-[100%]">
//                 Start Your Journey
//                 <ArrowRight style={{ height: '1.5rem', width: '1.5rem' }} />
//                 <span style={{ 
//                   position: 'absolute', 
//                   inset: 0, 
//                   background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)', 
//                   opacity: 0, 
//                   transition: 'opacity 0.5s ease',
//                   pointerEvents: 'none' 
//                 }} />
//               </Link>
//             </Button>
//           </motion.div>
//         </motion.div>
//       </div>

//       {/* Rocket Loading Animation */}
//       {/* <AnimatePresence>
//         {showRocket && (
//           <motion.div
//             style={{ 
//               position: 'fixed', 
//               inset: 0, 
//               display: 'flex', 
//               alignItems: 'center', 
//               justifyContent: 'center', 
//               backgroundColor: 'rgba(15, 23, 42, 0.8)', 
//               zIndex: 50 
//             }}
//             initial="hidden"
//             animate="visible"
//             exit="exit"
//             variants={rocketVariants}
//           >
//             <motion.div
//               style={{ position: 'relative' }}
//               variants={trailVariants}
//             >
//               <span style={{ fontSize: '5rem', color: '#60A5FA', animation: 'bounce 2s infinite' }}>🚀</span>
//               <motion.div
//                 style={{ 
//                   position: 'absolute', 
//                   top: '50%', 
//                   left: '50%', 
//                   transform: 'translate(-50%, -50%)', 
//                   width: '1.5rem', 
//                   height: '1.5rem', 
//                   backgroundColor: '#60A5FA', 
//                   borderRadius: '50%' 
//                 }}
//                 animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 0] }}
//                 transition={{ duration: 1, repeat: Infinity }}
//               />
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence> */}

//       <style jsx>{`
//         .marquee {
//           display: flex;
//           gap: 2rem;
//           width: max-content;
//           animation: marquee-right 35s linear infinite;
//           will-change: transform;
//         }
//         .marquee:hover {
//           animation-play-state: paused;
//         }
//         @keyframes marquee-right {
//           0% {
//             transform: translateX(-50%);
//           }
//           100% {
//             transform: translateX(0);
//           }
//         }
//         @keyframes bounce {
//           0%, 100% { transform: translateY(0); }
//           50% { transform: translateY(-20px); }
//         }
//       `}</style>
//     </section>
//   )
// }

'use client'
import { ArrowRight, Briefcase } from "lucide-react";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

const ContentBlock1 = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [hoveredButton, setHoveredButton] = useState<number | null>(null);
  const [hoveredMainButton, setHoveredMainButton] = useState(false);
  const [entered, setEntered] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setEntered(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Mentor images sourced from ai-recommendation page
  const mentorImages = [
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=600&fit=crop&crop=face&auto=format&q=80", // Sarah Chen
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face&auto=format&q=80", // Marcus Johnson
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face&auto=format&q=80", // Emily Rodriguez
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face&auto=format&q=80", // David Kim
    "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face&auto=format&q=80", // Lisa Thompson
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face&auto=format&q=80", // Aisha Patel
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face&auto=format&q=80", // Rajesh Kumar
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face&auto=format&q=80", // Sophie Lee
  ];

  const cards = [
   {
    title: "Sarah Chen",
    description: "Senior Product Manager",
    company: "Google",
    rating: 4.9,
    image: mentorImages[0],
    },
    {
      
      title: "Marcus Johnson",
      description: "VP of Engineering",
      company: "Stripe",
      rating: 4.8,
      image: mentorImages[1]
    },
    {
     
      title: "Emily Rodriguez",
      description: "Design Director",
      company: "AirBnB",
      rating: 4.9,
      image: mentorImages[2]
    },
    {
   
     title: "David Kim",
      description: "Head of growth ",
      company: "Notion",
      rating: 4.7,
    image: mentorImages[3]
  },
   {
  
     title: "Lisa Thompson",
      description: "Chief Technology Officer",
      company: "Shopify",
      rating: 4.9,
    image: mentorImages[4]
  },
  {
     title: "Aisha Patel",
      description: "Senior Data Scientist",
      company: "Meta",
      rating: 4.8,
    image: mentorImages[5]
  },
  {
   
     title: "Rajesh Kumar",
      description: "Chief Marketing Officer",
      company: "Amazon",
      rating: 4.7,
    image: mentorImages[6]
  },
  {
   
     title: "Sophie Lee",
      description: "Head of Product",
      company: "Dropbox",
      rating: 4.9,
    image: mentorImages[7]
  },
  ];

  return (
    <section 
      ref={sectionRef}
      style={{ padding: '5rem 3rem',  background: 'white',
      minHeight: '100vh',
     }}>
      <style>{`
        .mentor-card {
          transform: translateY(22px) scale(.98);
          opacity: 0;
          transition: transform 420ms cubic-bezier(.22,.9,.3,1), opacity 360ms ease-out;
          will-change: transform, opacity;
        }
        .mentor-grid.entered .mentor-card {
          transform: translateY(0) scale(1);
          opacity: 1;
        }
        .content-header {
          transform: translateY(12px);
          opacity: 0;
          transition: transform 420ms cubic-bezier(.22,.9,.3,1), opacity 360ms ease-out;
        }
        .content-header.entered {
          transform: translateY(0);
          opacity: 1;
        }
        @media (prefers-reduced-motion: reduce) {
          .mentor-card, .content-header {
            transition: none !important;
            transform: none !important;
            opacity: 1 !important;
          }
        }
      `}</style>
      <div className={`content-header ${entered ? 'entered' : ''}`} style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h1 style={{
          fontSize: '3.5rem',
          fontWeight: 'bold',
          color: '#1f2937',
          marginBottom: '1.5rem',
          lineHeight: '1.2'
        }}>
          Choose your <span style={{  background: 'linear-gradient(90deg, #3A86FF 0%, #7B2FF7 100%)',
              WebkitBackgroundClip: 'text', 
              backgroundClip: 'text', 
              WebkitTextFillColor: 'transparent',  }}>Perfect Tutor</span>
        </h1>
        <p style={{
          fontSize: '1.125rem',
          color: '#4b5563',
          maxWidth: '700px',
          margin: '0 auto'
        }}>
          Experience exceptional tutoring designed to help you <span style={{  background: 'linear-gradient(90deg, #3A86FF 0%, #7B2FF7 100%)',
              WebkitBackgroundClip: 'text', 
              backgroundClip: 'text', 
              WebkitTextFillColor: 'transparent',  fontStyle: 'italic' }}>achieve your goals</span> with confidence and excellence.
        </p>
      </div>

      {/* Infinite Scrolling Cards Container */}
      <div style={{
        position: 'relative',
        overflow: 'hidden',
        marginBottom: '3rem',
        background: 'rgba(255, 255, 255, 0.05)',
        backdropFilter: 'blur(20px)',
        borderRadius: '1.5rem',
        padding: '1rem 0'
      }}>
        <div 
          className={`marquee-container mentor-grid ${entered ? 'entered' : ''}`}
          style={{
            display: 'flex',
            gap: '2rem',
            width: 'max-content',
            animation: 'marquee-scroll 30s linear infinite',
            willChange: 'transform'
          }}
        >
          {/* Duplicate cards for seamless infinite scroll */}
          {[...cards, ...cards].map((card, index) => {
            const isHovered = hoveredCard === index;
            const isButtonHovered = hoveredButton === index;

            return (
              <div
                key={`${index}-${card.title}`}
                className="mentor-card"
                onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                transitionDelay: `${index * 70}ms`,
                  position: 'relative',
                  backgroundImage: card.image ? `url(${card.image})` : undefined,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '19px',
                  padding: '1.5rem',
                  boxShadow: isHovered 
                    ? '0 25px 50px -12px rgba(0, 0, 0, 0.25)' 
                    : '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                  transform: isHovered ? 'scale(1.05)' : 'scale(1)',
                  transition: 'all 0.5s ease',
                  overflow: 'hidden',
                  minWidth: '320px',
                  maxWidth: '320px',
                  // height: '420px',
                  height: '300px',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                {/* Dark overlay for readability over image */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundColor: 'rgba(0,0,0,0.45)'
                }} />
                {/* Gradient Overlay Effect */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(to bottom right, rgba(59, 130, 246, 0.15), rgba(168, 85, 247, 0.15), rgba(236, 72, 153, 0.15))',
                  opacity: isHovered ? 1 : 0,
                  transition: 'opacity 0.5s ease',
                  borderRadius: '16px',
                  pointerEvents: 'none'
                }} />

                {/* Content */}
                <div style={{ position: 'relative', zIndex: 10, height: '100%', display: 'flex', flexDirection: 'column' }}>
                  {/* Title */}
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#FFFFFF', marginBottom: '0.5rem' }}>
                    {card.title}
                  </h3>
                  {/* Description */}
                  <p style={{ color: '#E5E7EB', marginBottom: '1rem', lineHeight: '1.6' }}>
                    {card.description}
                  </p>
                  {/* Company and Rating */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: '#E5E7EB', marginBottom: '1.25rem' }}>
                    
                    <span style={{ fontSize: '0.95rem' }}>{card.company}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: '#E5E7EB', marginBottom: '1.25rem' }}>
                    <span style={{ fontWeight: 600 }}>⭐ {card.rating}</span>
                  </div>

                  <Link
                  href="/find-mentor"
                    onMouseEnter={() => setHoveredButton(index)}
                    onMouseLeave={() => setHoveredButton(null)}
                    style={{
                      width: '100%',
                      padding: '0.875rem',
                      // backgroundColor: isButtonHovered ? '#1D4ED8' : '#2563EB',
                      backgroundColor: isButtonHovered ? 'white' : 'transparent',
                      color: isButtonHovered ? '#6256ED' : 'white',
                      // border: 'none',
                      border: '2px solid rgba(255, 255, 255, 0.35)',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      fontSize: '1rem',
                      fontWeight: '600',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.5rem',
                      transition: 'background-color 0.3s ease',
                      marginTop: 'auto'
                    }}
                  >
                    View Mentor
                    <ArrowRight style={{
                      width: '18px',
                      height: '18px',
                      transform: isButtonHovered ? 'translateX(4px)' : 'translateX(0)',
                      transition: 'transform 0.3s ease'
                    }} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div style={{ textAlign: 'center' }}>
          <Link href='/ai-assessment'
            onMouseEnter={() => setHoveredMainButton(true)}
            onMouseLeave={() => setHoveredMainButton(false)}
            style={{
              padding: '1rem 2.5rem',
              backgroundColor: hoveredMainButton ? '#1D4ED8' : '#2563EB',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '1.125rem',
              fontWeight: '600',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              boxShadow: '0 4px 6px rgba(37, 99, 235, 0.3)',
              transition: 'background-color 0.3s ease'
            }}
          >
            Start Your Journey 
            <ArrowRight style={{
              width: '20px',
              height: '20px',
              transform: hoveredMainButton ? 'translateX(4px)' : 'translateX(0)',
              transition: 'transform 0.3s ease'
            }} />
        </Link>
      </div>

      {/* CSS Animation Styles */}
      <style jsx>{`
        .marquee-container {
          display: flex;
          gap: 2rem;
          width: max-content;
          animation: marquee-scroll 30s linear infinite;
          will-change: transform;
        }
        .marquee-container:hover {
          animation-play-state: paused;
        }
        @keyframes marquee-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
};

export default ContentBlock1;
