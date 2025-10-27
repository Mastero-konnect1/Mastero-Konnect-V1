

// 'use client'

// import { useState, useEffect, useRef } from 'react'
// import { ArrowRight, Users, Search, MessageCircle, Code, Palette, Camera, } from 'lucide-react'

// const ContentBlock2 = () => {
//   const [activeTab, setActiveTab] = useState<'mentors' | 'gigs'>('mentors')
//   const [entered, setEntered] = useState(false)
//   const sectionRef = useRef<HTMLElement | null>(null)

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setEntered(true)
//           } else {
//             setEntered(false) // Reset when leaving viewport to restart animations
//           }
//         })
//       },
//       { threshold: 0.15 }
//     )

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current)
//     }

//     return () => observer.disconnect()
//   }, [])

//   const mentorSteps = [
//     {
//       number: '01',
//       title: 'Find a Mentor',
//       description: 'Browse our curated list of industry experts and find the perfect match for your goals.',
      
//       color: 'from-blue-500 to-purple-600'
//     },
//     {
//       number: '02', 
//       title: 'Book a Session',
//       description: 'Schedule your mentorship session at a time that works for both you and your mentor.',
      
//       color: 'from-purple-500 to-pink-600'
//     },
//     {
//       number: '03',
//       title: 'Start Learning',
//       description: 'Connect with your mentor and begin your personalized learning journey.',
     
//       color: 'from-pink-500 to-red-600'
//     }
//   ]

//   const gigSteps = [
//     {
//       number: '01',
//       title: 'Find Your Gig',
//       description: 'Explore available gigs that match your skills and career aspirations.',
//       icon: <Target className="w-6 h-6" />,
//       color: 'from-blue-500 to-purple-600'
//     },
//     {
//       number: '02', 
//       title: 'Apply & Connect',
//       description: 'Submit your application and connect with project owners directly.',
//       icon: <Star className="w-6 h-6" />,
//       color: 'from-purple-500 to-pink-600'
//     },
//     {
//       number: '03',
//       title: 'Start Earning',
//       description: 'Begin your gig and get paid for your expertise and time.',
//       icon: <Zap className="w-6 h-6" />,
//       color: 'from-pink-500 to-red-600'
//     }
//   ]

//   const gigsData = [
//     {
//       id: 1,
//       title: "Web Development",
//       description: "Build responsive websites and web applications using modern technologies.",
//       icon: <Code className="w-8 h-8" />,
//       price: "$50-150/hr",
//       duration: "1-4 weeks",
//       skills: ["React", "Node.js", "TypeScript"],
//       category: "Development"
//     },
//     {
//       id: 2,
//       title: "UI/UX Design",
//       description: "Create beautiful and intuitive user interfaces and experiences.",
//       icon: <Palette className="w-8 h-8" />,
//       price: "$40-120/hr",
//       duration: "2-6 weeks",
//       skills: ["Figma", "Adobe XD", "Prototyping"],
//       category: "Design"
//     },
//     {
//       id: 3,
//       title: "Photography",
//       description: "Professional photography services for events, products, and portraits.",
//       icon: <Camera className="w-8 h-8" />,
//       price: "$75-200/hr",
//       duration: "Flexible",
//       skills: ["Portrait", "Event", "Product"],
//       category: "Creative"
//     }
//   ]

//   const currentSteps = activeTab === 'mentors' ? mentorSteps : gigSteps

//   return (
//     <section 
//       ref={sectionRef}
//       className="py-20 px-5 md:px-10 lg:px-20 gradient-shadow-xl"
//       style={{
//         background: 'white',
//         minHeight: '100vh',
//         position: 'relative',
//         overflow: 'hidden',
//         zIndex: 10,
//         boxShadow: `
//           0 20px 40px rgba(58, 134, 255, 0.15),
//           0 0 60px rgba(123, 47, 247, 0.1),
//           inset 0 1px 0 rgba(255, 255, 255, 0.1)
//         `
//       }}
//     >
//       <style>{`
//         .step-card {
//           opacity: 0;
//           transform: translateY(60px);
//           transition: all 1000ms cubic-bezier(0.22, 0.9, 0.3, 1);
//           will-change: transform, opacity;
//           backdrop-filter: blur(20px);
//           background: linear-gradient(135deg, rgba(123, 47, 247, 0.15), rgba(58, 134, 255, 0.15));
//           border: 1px solid rgba(123, 47, 247, 0.2);
//           position: relative;
//           overflow: hidden;
//         }
        
//         .step-card.entered {
//           opacity: 1;
//           transform: translateY(0);
//         }
        
//         .step-card:hover {
//           transform: translateY(-8px);
//           background: linear-gradient(135deg, rgba(123, 47, 247, 0.2), rgba(58, 134, 255, 0.2));
//           border: 1px solid rgba(123, 47, 247, 0.3);
//           box-shadow: 
//             0 20px 40px rgba(123, 47, 247, 0.15),
//             0 0 60px rgba(58, 134, 255, 0.1);
//           transition: all 600ms cubic-bezier(0.22, 0.9, 0.3, 1);
//         }
        
//         .step-card::before {
//           content: '';
//           position: absolute;
//           top: 0;
//           left: 0;
//           right: 0;
//           bottom: 0;
//           background: linear-gradient(135deg, rgba(123, 47, 247, 0.1), rgba(58, 134, 255, 0.05));
//           opacity: 0;
//           transition: opacity 500ms ease;
//           pointer-events: none;
//         }
        
//         .step-card:hover::before {
//           opacity: 1;
//         }

//         .section-header {
//           transform: translateY(40px);
//           opacity: 0;
//           transition: all 800ms cubic-bezier(0.22, 0.9, 0.3, 1);
//         }
//         .section-header.entered {
//           transform: translateY(0);
//           opacity: 1;
//         }
        
//         .step-number-bg {
//           transform: translateY(20px);
//           opacity: 0;
//           transition: all 1000ms cubic-bezier(0.22, 0.9, 0.3, 1);
//         }
//         .steps-container.entered .step-number-bg {
//           transform: translateY(0);
//           opacity: 0.15;
//         }
        
//         .tab-button {
//           transition: all 400ms cubic-bezier(0.22, 0.9, 0.3, 1);
//         }
//         .tab-button.active {
//           transform: translateY(-2px);
//           box-shadow: 0 8px 25px rgba(123, 47, 247, 0.2);
//         }

//         .gig-card {
//           opacity: 0;
//           transform: translateY(50px) scale(0.95);
//           transition: all 800ms cubic-bezier(0.22, 0.9, 0.3, 1);
//           will-change: transform, opacity;
//           backdrop-filter: blur(20px);
//           background: linear-gradient(135deg, rgba(123, 47, 247, 0.1), rgba(58, 134, 255, 0.1));
//           border: 1px solid rgba(123, 47, 247, 0.2);
//         }
        
//         .gig-card.entered {
//           opacity: 1;
//           transform: translateY(0) scale(1);
//         }
        
//         .gig-card:hover {
//           transform: translateY(-6px) scale(1.02);
//           background: linear-gradient(135deg, rgba(123, 47, 247, 0.15), rgba(58, 134, 255, 0.15));
//           border: 1px solid rgba(123, 47, 247, 0.3);
//           box-shadow: 
//             0 15px 35px rgba(123, 47, 247, 0.15),
//             0 0 50px rgba(58, 134, 255, 0.1);
//           transition: all 500ms cubic-bezier(0.22, 0.9, 0.3, 1);
//         }

//         .slide-in-from-left {
//           transform: translateX(-60px);
//           opacity: 0;
//           transition: all 900ms cubic-bezier(0.22, 0.9, 0.3, 1);
//         }
        
//         .step-card.entered .slide-in-from-left {
//           transform: translateX(0);
//           opacity: 1;
//         }

//         .slide-in-from-right {
//           transform: translateX(60px);
//           opacity: 0;
//           transition: all 900ms cubic-bezier(0.22, 0.9, 0.3, 1);
//         }
        
//         .step-card.entered .slide-in-from-right {
//           transform: translateX(0);
//           opacity: 1;
//         }

//         .slide-in-from-bottom {
//           transform: translateY(30px);
//           opacity: 0;
//           transition: all 800ms cubic-bezier(0.22, 0.9, 0.3, 1);
//         }
        
//         .step-card.entered .slide-in-from-bottom {
//           transform: translateY(0);
//           opacity: 1;
//         }

//         @media (prefers-reduced-motion: reduce) {
//           .step-card, .section-header, .step-number-bg, .tab-button, .gig-card,
//           .slide-in-from-left, .slide-in-from-right, .slide-in-from-bottom {
//             transition: none !important;
//             transform: none !important;
//             opacity: 1 !important;
//           }
//         }
//       `}</style>

//       <div className="max-w-7xl mx-auto">
//         {/* Section Header */}
//         <div className={`section-header ${entered ? 'entered' : ''}`} style={{ 
//           textAlign: 'center', 
//           marginBottom: '4rem',
//           transitionDelay: '0ms'
//         }}>
//           <h2 style={{
//             fontSize: 'clamp(2.5rem, 5vw, 4rem)',
//             fontWeight: 'bold',
//             fontFamily: 'serif',
//             color: '#1f2937',
//             marginBottom: '2rem',
//             lineHeight: '1.1',
//             letterSpacing: '-0.02em'
//           }}>
//             How InnovKaro Works?
//           </h2>
          
//           {/* Toggle Buttons */}
//           <div style={{
//             display: 'inline-flex',
//             backgroundColor: 'rgba(123, 47, 247, 0.05)',
//             borderRadius: '9999px',
//             padding: '0.25rem',
//             gap: '0.25rem',
//             boxShadow: '0 4px 12px rgba(123, 47, 247, 0.1)',
//             marginBottom: '3rem',
//             border: '1px solid rgba(123, 47, 247, 0.1)'
//           }}>
//             <button
//               onClick={() => setActiveTab('mentors')}
//               className={`tab-button ${activeTab === 'mentors' ? 'active' : ''}`}
//               style={{
//                 padding: '0.75rem 2rem',
//                 borderRadius: '9999px',
//                 fontSize: '0.95rem',
//                 fontWeight: '600',
//                 transition: 'all 400ms cubic-bezier(0.22,0.9,0.3,1)',
//                 backgroundColor: activeTab === 'mentors' ? 'white' : 'transparent',
//                 color: activeTab === 'mentors' ? '#7B2FF7' : '#6b7280',
//                 boxShadow: activeTab === 'mentors' ? '0 4px 12px rgba(123, 47, 247, 0.2)' : 'none',
//                 border: 'none',
//                 cursor: 'pointer'
//               }}
//             >
//               MENTORS
//             </button>
//             <button
//               onClick={() => setActiveTab('gigs')}
//               className={`tab-button ${activeTab === 'gigs' ? 'active' : ''}`}
//               style={{
//                 padding: '0.75rem 2rem',
//                 borderRadius: '9999px',
//                 fontSize: '0.95rem',
//                 fontWeight: '600',
//                 transition: 'all 400ms cubic-bezier(0.22,0.9,0.3,1)',
//                 backgroundColor: activeTab === 'gigs' ? 'white' : 'transparent',
//                 color: activeTab === 'gigs' ? '#7B2FF7' : '#6b7280',
//                 boxShadow: activeTab === 'gigs' ? '0 4px 12px rgba(123, 47, 247, 0.2)' : 'none',
//                 border: 'none',
//                 cursor: 'pointer'
//               }}
//             >
//               GIGS
//             </button>
//           </div>
//         </div>

//         {/* Steps/Gigs Container */}
//         <div className={`steps-container ${entered ? 'entered' : ''}`} style={{ position: 'relative' }}>
          
//           {activeTab === 'mentors' ? (
//             /* Mentor Steps */
//             <div style={{
//               position: 'relative',
//               zIndex: 10,
//               display: 'flex',
//               flexDirection: 'column',
//               gap: '2.5rem',
//               alignItems: 'center',
//               maxWidth: '800px',
//               margin: '0 auto'
//             }}>
//               {mentorSteps.map((step, index) => (
//                 <div
//                   key={index}
//                   className={`step-card ${entered ? 'entered' : ''}`}
//                   style={{
//                     transitionDelay: `${index * 200}ms`,
//                     borderRadius: '24px',
//                     padding: '2.5rem 2rem',
//                     width: '100%',
//                     cursor: 'pointer',
//                     position: 'relative',
//                     overflow: 'hidden',
//                     minHeight: '200px',
//                   }}
//                 >
//                   {/* Large Background Number */}
//                   <div 
//                     className="step-number-bg"
//                     style={{
//                       position: 'absolute',
//                       right: '-2rem',
//                       top: '50%',
//                       transform: 'translateY(-50%)',
//                       fontSize: 'clamp(6rem, 10vw, 8rem)',
//                       fontWeight: '900',
//                       color: 'rgba(123, 47, 247, 0.1)',
//                       fontFamily: 'monospace',
//                       zIndex: 1,
//                       transitionDelay: `${index * 300}ms`,
//                       lineHeight: '1'
//                     }}
//                   >
//                     {step.number}
//                   </div>

//                   <div style={{ 
//                     position: 'relative', 
//                     zIndex: 20,
//                     display: 'flex',
//                     alignItems: 'flex-start',
//                     gap: '1.5rem',
//                     height: '100%'
//                   }}>
//                     {/* Serial Number and Icon Container */}
//                     <div style={{
//                       display: 'flex',
//                       flexDirection: 'column',
//                       alignItems: 'center',
//                       gap: '1rem',
//                       flexShrink: 0
//                     }}>
//                       {/* Serial Number */}
//                       <div className="slide-in-from-left" style={{
//                         transitionDelay: `${400 + index * 100}ms`,
//                         width: '4rem',
//                         height: '4rem',
//                         borderRadius: '16px',
//                         background: 'rgba(255, 255, 255, 0.95)',
//                         display: 'flex',
//                         alignItems: 'center',
//                         justifyContent: 'center',
//                         color: '#7B2FF7',
//                         fontWeight: 'bold',
//                         fontSize: '1.5rem',
//                         boxShadow: '0 4px 12px rgba(123, 47, 247, 0.2)'
//                       }}>
//                         {step.number}
//                       </div>
//                       {/* Icon */}
//                       {/* <div className="slide-in-from-left" style={{
//                         transitionDelay: `${450 + index * 100}ms`,
//                         width: '3rem',
//                         height: '3rem',
//                         borderRadius: '12px',
//                         background: 'rgba(255, 255, 255, 0.9)',
//                         display: 'flex',
//                         alignItems: 'center',
//                         justifyContent: 'center',
//                         color: '#3A86FF',
//                         boxShadow: '0 2px 8px rgba(58, 134, 255, 0.2)'
//                       }}>
//                         {step.icon} */}
//                       {/* </div> */}
//                     {/* </div> */}

//                     {/* Content */}
//                     <div style={{ flex: 1 }}>
//                       <h3 className="slide-in-from-right" style={{
//                         transitionDelay: `${500 + index * 100}ms`,
//                         fontSize: '1.75rem',
//                         fontWeight: 'bold',
//                         color: '#1f2937',
//                         marginBottom: '0.75rem',
//                         fontFamily: 'serif'
//                       }}>
//                         {step.title}
//                       </h3>
//                       <p className="slide-in-from-bottom" style={{
//                         transitionDelay: `${600 + index * 100}ms`,
//                         color: '#6b7280',
//                         fontSize: '1.1rem',
//                         lineHeight: '1.6',
//                         margin: 0
//                       }}>
//                         {step.description}
//                       </p>
//                     </div>
//                   </div>

//                   {/* Arrow Indicator */}
//                   <div className="slide-in-from-right" style={{
//                     transitionDelay: `${700 + index * 100}ms`,
//                     position: 'absolute',
//                     bottom: '1.5rem',
//                     right: '1.5rem',
//                     width: '2.5rem',
//                     height: '2.5rem',
//                     borderRadius: '50%',
//                     background: 'rgba(255, 255, 255, 0.9)',
//                     display: 'flex',
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                     color: '#7B2FF7',
//                     boxShadow: '0 2px 8px rgba(123, 47, 247, 0.2)'
//                   }}>
//                     <ArrowRight className="w-5 h-5" />
//                   </div>
//                 </div>
//               ))}
//             </div>
//           ) : (
//             /* Gigs Display */
//             <div style={{
//               display: 'grid',
//               gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
//               gap: '2rem',
//               maxWidth: '1200px',
//               margin: '0 auto'
//             }}>
//               {gigsData.map((gig, index) => (
//                 <div
//                   key={gig.id}
//                   className={`gig-card ${entered ? 'entered' : ''}`}
//                   style={{
//                     transitionDelay: `${index * 200}ms`,
//                     borderRadius: '20px',
//                     padding: '2rem',
//                     cursor: 'pointer'
//                   }}
//                 >
//                   {/* Gig Header */}
//                   <div style={{
//                     display: 'flex',
//                     alignItems: 'flex-start',
//                     gap: '1rem',
//                     marginBottom: '1.5rem'
//                   }}>
//                     <div style={{
//                       width: '4rem',
//                       height: '4rem',
//                       borderRadius: '12px',
//                       background: 'linear-gradient(135deg, #7B2FF7, #3A86FF)',
//                       display: 'flex',
//                       alignItems: 'center',
//                       justifyContent: 'center',
//                       color: 'white'
//                     }}>
//                       {gig.icon}
//                     </div>
//                     <div style={{ flex: 1 }}>
//                       <h3 style={{
//                         fontSize: '1.5rem',
//                         fontWeight: 'bold',
//                         color: '#1f2937',
//                         marginBottom: '0.5rem'
//                       }}>
//                         {gig.title}
//                       </h3>
//                       <div style={{
//                         display: 'inline-block',
//                         padding: '0.25rem 0.75rem',
//                         background: 'rgba(123, 47, 247, 0.1)',
//                         color: '#7B2FF7',
//                         borderRadius: '6px',
//                         fontSize: '0.875rem',
//                         fontWeight: '600'
//                       }}>
//                         {gig.category}
//                       </div>
//                     </div>
//                   </div>

//                   {/* Gig Description */}
//                   <p style={{
//                     color: '#6b7280',
//                     lineHeight: '1.6',
//                     marginBottom: '1.5rem'
//                   }}>
//                     {gig.description}
//                   </p>

//                   {/* Gig Details */}
//                   <div style={{
//                     display: 'flex',
//                     justifyContent: 'space-between',
//                     alignItems: 'center',
//                     marginBottom: '1.5rem'
//                   }}>
//                     <div>
//                       <div style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#7B2FF7' }}>
//                         {gig.price}
//                       </div>
//                       <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>
//                         {gig.duration}
//                       </div>
//                     </div>
//                     <button style={{
//                       padding: '0.75rem 1.5rem',
//                       background: 'linear-gradient(135deg, #7B2FF7, #3A86FF)',
//                       color: 'white',
//                       border: 'none',
//                       borderRadius: '8px',
//                       fontWeight: '600',
//                       cursor: 'pointer',
//                       transition: 'transform 300ms ease'
//                     }}
//                     onMouseEnter={(e) => {
//                       e.currentTarget.style.transform = 'translateY(-2px)'
//                     }}
//                     onMouseLeave={(e) => {
//                       e.currentTarget.style.transform = 'translateY(0)'
//                     }}
//                     >
//                       Apply Now
//                     </button>
//                   </div>

//                   {/* Skills */}
//                   <div>
//                     <div style={{ fontSize: '0.875rem', fontWeight: '600', color: '#1f2937', marginBottom: '0.5rem' }}>
//                       Required Skills:
//                     </div>
//                     <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
//                       {gig.skills.map((skill, skillIndex) => (
//                         <span
//                           key={skillIndex}
//                           style={{
//                             padding: '0.25rem 0.75rem',
//                             background: 'rgba(123, 47, 247, 0.1)',
//                             color: '#7B2FF7',
//                             borderRadius: '6px',
//                             fontSize: '0.75rem',
//                             fontWeight: '500'
//                           }}
//                         >
//                           {skill}
//                         </span>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       </div>
//     </section>
//   )
// }

// export default ContentBlock2
'use client'

import { useState, useEffect, useRef } from 'react'
import { ArrowRight, Code, Palette, Camera } from 'lucide-react'

const ContentBlock2 = () => {
  const [activeTab, setActiveTab] = useState<'mentors' | 'gigs'>('mentors')
  const [entered, setEntered] = useState(false)
  const sectionRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setEntered(true)
          } else {
            setEntered(false) // Reset when leaving viewport to restart animations
          }
        })
      },
      { threshold: 0.15 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const mentorSteps = [
    {
      number: '01',
      title: 'Find a Mentor',
      description: 'Browse our curated list of industry experts and find the perfect match for your goals.',
      color: 'from-blue-500 to-purple-600'
    },
    {
      number: '02', 
      title: 'Book a Session',
      description: 'Schedule your mentorship session at a time that works for both you and your mentor.',
      color: 'from-purple-500 to-pink-600'
    },
    {
      number: '03',
      title: 'Start Learning',
      description: 'Connect with your mentor and begin your personalized learning journey.',
      color: 'from-pink-500 to-red-600'
    }
  ]

  const gigsData = [
    {
      id: 1,
      title: "Web Development",
      description: "Build responsive websites and web applications using modern technologies.",
      icon: <Code className="w-8 h-8" />,
      price: "$50-150/hr",
      duration: "1-4 weeks",
      skills: ["React", "Node.js", "TypeScript"],
      category: "Development"
    },
    {
      id: 2,
      title: "UI/UX Design",
      description: "Create beautiful and intuitive user interfaces and experiences.",
      icon: <Palette className="w-8 h-8" />,
      price: "$40-120/hr",
      duration: "2-6 weeks",
      skills: ["Figma", "Adobe XD", "Prototyping"],
      category: "Design"
    },
    {
      id: 3,
      title: "Photography",
      description: "Professional photography services for events, products, and portraits.",
      icon: <Camera className="w-8 h-8" />,
      price: "$75-200/hr",
      duration: "Flexible",
      skills: ["Portrait", "Event", "Product"],
      category: "Creative"
    }
  ]

  return (
    <section 
      ref={sectionRef}
      className="py-20 px-5 md:px-10 lg:px-20 gradient-shadow-xl"
      style={{
        background: 'white',
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden',
        zIndex: 10,
        boxShadow: `
          0 20px 40px rgba(58, 134, 255, 0.15),
          0 0 60px rgba(123, 47, 247, 0.1),
          inset 0 1px 0 rgba(255, 255, 255, 0.1)
        `
      }}
    >
      <style>{`
        .step-card {
          opacity: 0;
          transform: translateY(60px);
          transition: all 1000ms cubic-bezier(0.22, 0.9, 0.3, 1);
          will-change: transform, opacity;
          backdrop-filter: blur(20px);
          background: linear-gradient(135deg, rgba(123, 47, 247, 0.15), rgba(58, 134, 255, 0.15));
          border: 1px solid rgba(123, 47, 247, 0.2);
          position: relative;
          overflow: hidden;
        }
        
        .step-card.entered {
          opacity: 1;
          transform: translateY(0);
        }
        
        .step-card:hover {
          transform: translateY(-8px);
          background: linear-gradient(135deg, rgba(123, 47, 247, 0.2), rgba(58, 134, 255, 0.2));
          border: 1px solid rgba(123, 47, 247, 0.3);
          box-shadow: 
            0 20px 40px rgba(123, 47, 247, 0.15),
            0 0 60px rgba(58, 134, 255, 0.1);
          transition: all 600ms cubic-bezier(0.22, 0.9, 0.3, 1);
        }
        
        .step-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(123, 47, 247, 0.1), rgba(58, 134, 255, 0.05));
          opacity: 0;
          transition: opacity 500ms ease;
          pointer-events: none;
        }
        
        .step-card:hover::before {
          opacity: 1;
        }

        .section-header {
          transform: translateY(40px);
          opacity: 0;
          transition: all 800ms cubic-bezier(0.22, 0.9, 0.3, 1);
        }
        .section-header.entered {
          transform: translateY(0);
          opacity: 1;
        }
        
        .step-number-bg {
          transform: translateY(20px);
          opacity: 0;
          transition: all 1000ms cubic-bezier(0.22, 0.9, 0.3, 1);
        }
        .steps-container.entered .step-number-bg {
          transform: translateY(0);
          opacity: 0.15;
        }
        
        .tab-button {
          transition: all 400ms cubic-bezier(0.22, 0.9, 0.3, 1);
        }
        .tab-button.active {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(123, 47, 247, 0.2);
        }

        .gig-card {
          opacity: 0;
          transform: translateY(50px) scale(0.95);
          transition: all 800ms cubic-bezier(0.22, 0.9, 0.3, 1);
          will-change: transform, opacity;
          backdrop-filter: blur(20px);
          background: linear-gradient(135deg, rgba(123, 47, 247, 0.1), rgba(58, 134, 255, 0.1));
          border: 1px solid rgba(123, 47, 247, 0.2);
        }
        
        .gig-card.entered {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
        
        .gig-card:hover {
          transform: translateY(-6px) scale(1.02);
          background: linear-gradient(135deg, rgba(123, 47, 247, 0.15), rgba(58, 134, 255, 0.15));
          border: 1px solid rgba(123, 47, 247, 0.3);
          box-shadow: 
            0 15px 35px rgba(123, 47, 247, 0.15),
            0 0 50px rgba(58, 134, 255, 0.1);
          transition: all 500ms cubic-bezier(0.22, 0.9, 0.3, 1);
        }

        .slide-in-from-left {
          transform: translateX(-60px);
          opacity: 0;
          transition: all 900ms cubic-bezier(0.22, 0.9, 0.3, 1);
        }
        
        .step-card.entered .slide-in-from-left {
          transform: translateX(0);
          opacity: 1;
        }

        .slide-in-from-right {
          transform: translateX(60px);
          opacity: 0;
          transition: all 900ms cubic-bezier(0.22, 0.9, 0.3, 1);
        }
        
        .step-card.entered .slide-in-from-right {
          transform: translateX(0);
          opacity: 1;
        }

        .slide-in-from-bottom {
          transform: translateY(30px);
          opacity: 0;
          transition: all 800ms cubic-bezier(0.22, 0.9, 0.3, 1);
        }
        
        .step-card.entered .slide-in-from-bottom {
          transform: translateY(0);
          opacity: 1;
        }

        @media (prefers-reduced-motion: reduce) {
          .step-card, .section-header, .step-number-bg, .tab-button, .gig-card,
          .slide-in-from-left, .slide-in-from-right, .slide-in-from-bottom {
            transition: none !important;
            transform: none !important;
            opacity: 1 !important;
          }
        }
      `}</style>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className={`section-header ${entered ? 'entered' : ''}`} style={{ 
          textAlign: 'center', 
          marginBottom: '4rem',
          transitionDelay: '0ms'
        }}>
          <h2 style={{
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: 'bold',
            fontFamily: 'serif',
            color: '#1f2937',
            marginBottom: '2rem',
            lineHeight: '1.1',
            letterSpacing: '-0.02em'
          }}>
            How InnovKaro Works?
          </h2>
          
          {/* Toggle Buttons */}
          <div style={{
            display: 'inline-flex',
            backgroundColor: 'rgba(123, 47, 247, 0.05)',
            borderRadius: '9999px',
            padding: '0.25rem',
            gap: '0.25rem',
            boxShadow: '0 4px 12px rgba(123, 47, 247, 0.1)',
            marginBottom: '3rem',
            border: '1px solid rgba(123, 47, 247, 0.1)'
          }}>
            <button
              onClick={() => setActiveTab('mentors')}
              className={`tab-button ${activeTab === 'mentors' ? 'active' : ''}`}
              style={{
                padding: '0.75rem 2rem',
                borderRadius: '9999px',
                fontSize: '0.95rem',
                fontWeight: '600',
                transition: 'all 400ms cubic-bezier(0.22,0.9,0.3,1)',
                backgroundColor: activeTab === 'mentors' ? 'white' : 'transparent',
                color: activeTab === 'mentors' ? '#7B2FF7' : '#6b7280',
                boxShadow: activeTab === 'mentors' ? '0 4px 12px rgba(123, 47, 247, 0.2)' : 'none',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              MENTORS
            </button>
            <button
              onClick={() => setActiveTab('gigs')}
              className={`tab-button ${activeTab === 'gigs' ? 'active' : ''}`}
              style={{
                padding: '0.75rem 2rem',
                borderRadius: '9999px',
                fontSize: '0.95rem',
                fontWeight: '600',
                transition: 'all 400ms cubic-bezier(0.22,0.9,0.3,1)',
                backgroundColor: activeTab === 'gigs' ? 'white' : 'transparent',
                color: activeTab === 'gigs' ? '#7B2FF7' : '#6b7280',
                boxShadow: activeTab === 'gigs' ? '0 4px 12px rgba(123, 47, 247, 0.2)' : 'none',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              GIGS
            </button>
          </div>
        </div>

        {/* Steps/Gigs Container */}
        <div className={`steps-container ${entered ? 'entered' : ''}`} style={{ position: 'relative' }}>
          
          {activeTab === 'mentors' ? (
            /* Mentor Steps */
            <div style={{
              position: 'relative',
              zIndex: 10,
              display: 'flex',
              flexDirection: 'column',
              gap: '2.5rem',
              alignItems: 'center',
              maxWidth: '800px',
              margin: '0 auto'
            }}>
              {mentorSteps.map((step, index) => (
                <div
                  key={index}
                  className={`step-card ${entered ? 'entered' : ''}`}
                  style={{
                    transitionDelay: `${index * 200}ms`,
                    borderRadius: '24px',
                    padding: '2.5rem 2rem',
                    width: '100%',
                    cursor: 'pointer',
                    position: 'relative',
                    overflow: 'hidden',
                    minHeight: '200px',
                  }}
                >
                  {/* Large Background Number */}
                  <div 
                    className="step-number-bg"
                    style={{
                      position: 'absolute',
                      right: '-2rem',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      fontSize: 'clamp(6rem, 10vw, 8rem)',
                      fontWeight: '900',
                      color: 'rgba(123, 47, 247, 0.1)',
                      fontFamily: 'monospace',
                      zIndex: 1,
                      transitionDelay: `${index * 300}ms`,
                      lineHeight: '1'
                    }}
                  >
                    {step.number}
                  </div>

                  <div style={{ 
                    position: 'relative', 
                    zIndex: 20,
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '1.5rem',
                    height: '100%'
                  }}>
                    {/* Serial Number Container */}
                    <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      flexShrink: 0
                    }}>
                      {/* Serial Number */}
                      <div className="slide-in-from-left" style={{
                        transitionDelay: `${400 + index * 100}ms`,
                        width: '4rem',
                        height: '4rem',
                        borderRadius: '16px',
                        background: 'rgba(255, 255, 255, 0.95)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#7B2FF7',
                        fontWeight: 'bold',
                        fontSize: '1.5rem',
                        boxShadow: '0 4px 12px rgba(123, 47, 247, 0.2)'
                      }}>
                        {step.number}
                      </div>
                    </div>

                    {/* Content */}
                    <div style={{ flex: 1 }}>
                      <h3 className="slide-in-from-right" style={{
                        transitionDelay: `${500 + index * 100}ms`,
                        fontSize: '1.75rem',
                        fontWeight: 'bold',
                        color: '#1f2937',
                        marginBottom: '0.75rem',
                        fontFamily: 'serif'
                      }}>
                        {step.title}
                      </h3>
                      <p className="slide-in-from-bottom" style={{
                        transitionDelay: `${600 + index * 100}ms`,
                        color: '#6b7280',
                        fontSize: '1.1rem',
                        lineHeight: '1.6',
                        margin: 0
                      }}>
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Arrow Indicator */}
                  <div className="slide-in-from-right" style={{
                    transitionDelay: `${700 + index * 100}ms`,
                    position: 'absolute',
                    bottom: '1.5rem',
                    right: '1.5rem',
                    width: '2.5rem',
                    height: '2.5rem',
                    borderRadius: '50%',
                    background: 'rgba(255, 255, 255, 0.9)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#7B2FF7',
                    boxShadow: '0 2px 8px rgba(123, 47, 247, 0.2)'
                  }}>
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* Gigs Display */
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
              gap: '2rem',
              maxWidth: '1200px',
              margin: '0 auto'
            }}>
              {gigsData.map((gig, index) => (
                <div
                  key={gig.id}
                  className={`gig-card ${entered ? 'entered' : ''}`}
                  style={{
                    transitionDelay: `${index * 200}ms`,
                    borderRadius: '20px',
                    padding: '2rem',
                    cursor: 'pointer'
                  }}
                >
                  {/* Gig Header */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '1rem',
                    marginBottom: '1.5rem'
                  }}>
                    <div style={{
                      width: '4rem',
                      height: '4rem',
                      borderRadius: '12px',
                      background: 'linear-gradient(135deg, #7B2FF7, #3A86FF)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white'
                    }}>
                      {gig.icon}
                    </div>
                    <div style={{ flex: 1 }}>
                      <h3 style={{
                        fontSize: '1.5rem',
                        fontWeight: 'bold',
                        color: '#1f2937',
                        marginBottom: '0.5rem'
                      }}>
                        {gig.title}
                      </h3>
                      <div style={{
                        display: 'inline-block',
                        padding: '0.25rem 0.75rem',
                        background: 'rgba(123, 47, 247, 0.1)',
                        color: '#7B2FF7',
                        borderRadius: '6px',
                        fontSize: '0.875rem',
                        fontWeight: '600'
                      }}>
                        {gig.category}
                      </div>
                    </div>
                  </div>

                  {/* Gig Description */}
                  <p style={{
                    color: '#6b7280',
                    lineHeight: '1.6',
                    marginBottom: '1.5rem'
                  }}>
                    {gig.description}
                  </p>

                  {/* Gig Details */}
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '1.5rem'
                  }}>
                    <div>
                      <div style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#7B2FF7' }}>
                        {gig.price}
                      </div>
                      <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>
                        {gig.duration}
                      </div>
                    </div>
                    <button style={{
                      padding: '0.75rem 1.5rem',
                      background: 'linear-gradient(135deg, #7B2FF7, #3A86FF)',
                      color: 'white',
                      border: 'none',
                      borderRadius: '8px',
                      fontWeight: '600',
                      cursor: 'pointer',
                      transition: 'transform 300ms ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-2px)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)'
                    }}
                    >
                      Apply Now
                    </button>
                  </div>

                  {/* Skills */}
                  <div>
                    <div style={{ fontSize: '0.875rem', fontWeight: '600', color: '#1f2937', marginBottom: '0.5rem' }}>
                      Required Skills:
                    </div>
                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                      {gig.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          style={{
                            padding: '0.25rem 0.75rem',
                            background: 'rgba(123, 47, 247, 0.1)',
                            color: '#7B2FF7',
                            borderRadius: '6px',
                            fontSize: '0.75rem',
                            fontWeight: '500'
                          }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default ContentBlock2