// // 'use client'

// // import { useState, useEffect, useRef } from 'react'
// // import { ArrowRight, Code, Palette, BarChart3, Camera, Music, BookOpen, Briefcase, Heart } from 'lucide-react'

// // const WeCanDO = () => {
// //   const [hoveredCard, setHoveredCard] = useState<number | null>(null)
// //   const [entered, setEntered] = useState(false)
// //   const sectionRef = useRef<HTMLElement | null>(null)

// //   useEffect(() => {
// //     const observer = new IntersectionObserver(
// //       (entries) => {
// //         entries.forEach((entry) => {
// //           if (entry.isIntersecting) {
// //             setEntered(true)
// //             observer.unobserve(entry.target)
// //           }
// //         })
// //       },
// //       { threshold: 0.15 }
// //     )

// //     if (sectionRef.current) {
// //       observer.observe(sectionRef.current)
// //     }

// //     return () => observer.disconnect()
// //   }, [])

// //   const services = [
// //     {
// //       icon: <Code className="w-8 h-8" />,
// //       title: 'Web Development',
// //       description: 'Full-stack development with modern frameworks',
// //       color: 'from-blue-500 to-cyan-500'
// //     },
// //     {
// //       icon: <Palette className="w-8 h-8" />,
// //       title: 'UI/UX Design',
// //       description: 'Beautiful and intuitive user experiences',
// //       color: 'from-purple-500 to-pink-500'
// //     },
// //     {
// //       icon: <BarChart3 className="w-8 h-8" />,
// //       title: 'Data Analytics',
// //       description: 'Insights and visualization from your data',
// //       color: 'from-green-500 to-emerald-500'
// //     },
// //     {
// //       icon: <Camera className="w-8 h-8" />,
// //       title: 'Photography',
// //       description: 'Professional photography and editing',
// //       color: 'from-orange-500 to-red-500'
// //     },
// //     {
// //       icon: <Music className="w-8 h-8" />,
// //       title: 'Music Production',
// //       description: 'Audio engineering and music creation',
// //       color: 'from-indigo-500 to-purple-500'
// //     },
// //     {
// //       icon: <BookOpen className="w-8 h-8" />,
// //       title: 'Content Writing',
// //       description: 'Engaging content and copywriting',
// //       color: 'from-teal-500 to-cyan-500'
// //     },
// //     {
// //       icon: <Briefcase className="w-8 h-8" />,
// //       title: 'Business Strategy',
// //       description: 'Strategic planning and consulting',
// //       color: 'from-amber-500 to-orange-500'
// //     },
// //     {
// //       icon: <Heart className="w-8 h-8" />,
// //       title: 'Life Coaching',
// //       description: 'Personal development and wellness',
// //       color: 'from-rose-500 to-pink-500'
// //     }
// //   ]

// //   return (
// //     <section 
// //       ref={sectionRef}
// //       className="py-20 px-5 md:px-10 lg:px-20"
// //       style={{
// //         background: "white",
// //         minHeight: '100vh'
// //       }}
// //     >
// //       <style>{`
// //         .service-card {
// //           transform: translateY(22px) scale(.98);
// //           opacity: 0;
// //           transition: transform 420ms cubic-bezier(.22,.9,.3,1), opacity 360ms ease-out;
// //           will-change: transform, opacity;
// //         }
// //         .services-grid.entered .service-card {
// //           transform: translateY(0) scale(1);
// //           opacity: 1;
// //         }
// //         .service-card:hover {
// //           transform: translateY(-8px) scale(1.05);
// //           transition: transform 300ms cubic-bezier(.4,0,.2,1);
// //         }
        
// //         .section-header {
// //           transform: translateY(12px);
// //           opacity: 0;
// //           transition: transform 420ms cubic-bezier(.22,.9,.3,1), opacity 360ms ease-out;
// //         }
// //         .section-header.entered {
// //           transform: translateY(0);
// //           opacity: 1;
// //         }
        
// //         .cta-buttons {
// //           transform: translateY(12px);
// //           opacity: 0;
// //           transition: transform 420ms cubic-bezier(.22,.9,.3,1), opacity 360ms ease-out;
// //           transition-delay: 400ms;
// //         }
// //         .services-grid.entered ~ .cta-buttons {
// //           transform: translateY(0);
// //           opacity: 1;
// //         }
        
// //         .arrow-button {
// //           transform: translateX(0) rotate(0deg);
// //           opacity: 0;
// //           transition: all 300ms cubic-bezier(.4,0,.2,1);
// //         }
// //         .service-card:hover .arrow-button {
// //           transform: translateX(4px) rotate(45deg);
// //           opacity: 1;
// //         }
        
// //         .btn-hover {
// //           transition: all 300ms cubic-bezier(.4,0,.2,1);
// //         }
// //         .btn-hover:hover {
// //           transform: translateX(4px);
// //         }
        
// //         @media (prefers-reduced-motion: reduce) {
// //           .service-card, .section-header, .cta-buttons, .arrow-button, .btn-hover {
// //             transition: none !important;
// //             transform: none !important;
// //             opacity: 1 !important;
// //           }
// //         }
// //       `}</style>

// //       <div className="max-w-7xl mx-auto">
// //         {/* Section Header */}
// //         <div className={`section-header ${entered ? 'entered' : ''}`} style={{ textAlign: 'center', marginBottom: '4rem' }}>
// //           <h2 style={{
// //             fontSize: 'clamp(2.5rem, 5vw, 4rem)',
// //             fontWeight: 'bold',
// //             fontFamily: 'serif',
// //             color: '#1f2937',
// //             marginBottom: '1rem',
// //             lineHeight: '1.1',
// //             letterSpacing: '-0.02em'
// //           }}>
// //             We can do — <br />
// //             <span style={{
// //               background: 'linear-gradient(90deg, #3A86FF 0%, #7B2FF7 100%)',
// //               WebkitBackgroundClip: 'text',
// //               backgroundClip: 'text',
// //               WebkitTextFillColor: 'transparent',
// //               fontStyle: 'italic'
// //             }}>
// //               services
// //             </span>
// //           </h2>
// //           <div style={{
// //             width: '64px',
// //             height: '4px',
// //             background: 'linear-gradient(135deg, #6B50EB, #6256ED, #555DEF)',
// //             margin: '0 auto 2rem auto',
// //             borderRadius: '2px'
// //           }}></div>
// //         </div>

// //         {/* Services Grid */}
// //         <div className={`services-grid ${entered ? 'entered' : ''}`} style={{
// //           display: 'grid',
// //           gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
// //           gap: '1.5rem',
// //           marginBottom: '4rem'
// //         }}>
// //           {services.map((service, index) => (
// //             <div
// //               key={index}
// //               className="service-card"
// //               style={{
// //                 transitionDelay: `${index * 100}ms`,
// //                 backgroundColor: 'white',
// //                 borderRadius: '20px',
// //                 padding: '2rem',
// //                 boxShadow: '0 4px 12px rgba(0,0,0,0.06), 0 1px 3px rgba(0,0,0,0.04)',
// //                 border: '1px solid rgba(0,0,0,0.05)',
// //                 cursor: 'pointer',
// //                 position: 'relative',
// //                 overflow: 'hidden',
// //                 aspectRatio: '1',
// //                 display: 'flex',
// //                 flexDirection: 'column',
// //                 justifyContent: 'space-between'
// //               }}
// //               onMouseEnter={() => setHoveredCard(index)}
// //               onMouseLeave={() => setHoveredCard(null)}
// //             >
// //               {/* Gradient Overlay */}
// //               <div style={{
// //                 position: 'absolute',
// //                 inset: 0,
// //                 background: `linear-gradient(135deg, ${service.color})`,
// //                 opacity: hoveredCard === index ? 0.1 : 0,
// //                 transition: 'opacity 300ms ease',
// //                 pointerEvents: 'none'
// //               }} />

// //               {/* Blurred Glow Effect */}
// //               <div style={{
// //                 position: 'absolute',
// //                 inset: 0,
// //                 background: `radial-gradient(circle at center, ${service.color.includes('blue') ? 'rgba(59, 130, 246, 0.1)' : service.color.includes('purple') ? 'rgba(147, 51, 234, 0.1)' : 'rgba(16, 185, 129, 0.1)'} 0%, transparent 70%)`,
// //                 opacity: hoveredCard === index ? 1 : 0,
// //                 filter: 'blur(20px)',
// //                 transition: 'opacity 300ms ease',
// //                 pointerEvents: 'none'
// //               }} />

// //               {/* Content */}
// //               <div style={{ position: 'relative', zIndex: 10 }}>
// //                 {/* Icon */}
// //                 <div style={{
// //                   width: '4rem',
// //                   height: '4rem',
// //                   borderRadius: '16px',
// //                   background: `linear-gradient(135deg, ${service.color})`,
// //                   display: 'flex',
// //                   alignItems: 'center',
// //                   justifyContent: 'center',
// //                   color: 'white',
// //                   marginBottom: '1.5rem',
// //                   transform: hoveredCard === index ? 'scale(1.1)' : 'scale(1)',
// //                   transition: 'transform 300ms ease'
// //                 }}>
// //                   {service.icon}
// //                 </div>

// //                 {/* Title */}
// //                 <h3 style={{
// //                   fontSize: '1.25rem',
// //                   fontWeight: 'bold',
// //                   color: '#1f2937',
// //                   marginBottom: '0.75rem',
// //                   fontFamily: 'serif'
// //                 }}>
// //                   {service.title}
// //                 </h3>

// //                 {/* Description */}
// //                 <p style={{
// //                   color: '#6b7280',
// //                   fontSize: '0.95rem',
// //                   lineHeight: '1.5',
// //                   margin: 0
// //                 }}>
// //                   {service.description}
// //                 </p>
// //               </div>

// //               {/* Arrow Button */}
// //               <div className="arrow-button" style={{
// //                 position: 'absolute',
// //                 bottom: '1rem',
// //                 right: '1rem',
// //                 width: '2.5rem',
// //                 height: '2.5rem',
// //                 borderRadius: '50%',
// //                 background: 'rgba(0,0,0,0.1)',
// //                 display: 'flex',
// //                 alignItems: 'center',
// //                 justifyContent: 'center',
// //                 color: '#6b7280'
// //               }}>
// //                 <ArrowRight className="w-4 h-4" />
// //               </div>
// //             </div>
// //           ))}
// //         </div>

// //         {/* CTA Buttons */}
// //         <div className={`cta-buttons ${entered ? 'entered' : ''}`} style={{ textAlign: 'center' }}>
// //           <div style={{
// //             display: 'flex',
// //             gap: '1rem',
// //             justifyContent: 'center',
// //             flexWrap: 'wrap'
// //           }}>
// //             <button className="btn-hover" style={{
// //               padding: '1rem 2rem',
// //               backgroundColor: 'transparent',
// //               color: '#1f2937',
// //               border: '2px solid #e5e7eb',
// //               borderRadius: '12px',
// //               fontSize: '1rem',
// //               fontWeight: '600',
// //               cursor: 'pointer',
// //               transition: 'all 300ms cubic-bezier(.4,0,.2,1)'
// //             }}
// //             onMouseEnter={(e) => {
// //               e.currentTarget.style.borderColor = '#3b82f6'
// //               e.currentTarget.style.color = '#3b82f6'
// //             }}
// //             onMouseLeave={(e) => {
// //               e.currentTarget.style.borderColor = '#e5e7eb'
// //               e.currentTarget.style.color = '#1f2937'
// //             }}
// //             >
// //               VIEW LAST COURSES
// //             </button>
// //             <button className="btn-hover" style={{
// //               padding: '1rem 2rem',
// //               backgroundColor: '#3b82f6',
// //               color: 'white',
// //               border: 'none',
// //               borderRadius: '12px',
// //               fontSize: '1rem',
// //               fontWeight: '600',
// //               cursor: 'pointer',
// //               transition: 'all 300ms cubic-bezier(.4,0,.2,1)',
// //               boxShadow: '0 4px 6px rgba(59, 130, 246, 0.3)'
// //             }}
// //             onMouseEnter={(e) => {
// //               e.currentTarget.style.backgroundColor = '#2563eb'
// //               e.currentTarget.style.boxShadow = '0 8px 15px rgba(59, 130, 246, 0.4)'
// //             }}
// //             onMouseLeave={(e) => {
// //               e.currentTarget.style.backgroundColor = '#3b82f6'
// //               e.currentTarget.style.boxShadow = '0 4px 6px rgba(59, 130, 246, 0.3)'
// //             }}
// //             >
// //               VIEW ALL MENTORS
// //             </button>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   )
// // }

// // export default WeCanDO
// 'use client'

// import { useState, useEffect, useRef } from 'react'
// import { ArrowRight, Code, Palette, BarChart3, Camera, Music, BookOpen, Briefcase, Heart } from 'lucide-react'

// const WeCanDO = () => {
//   const [hoveredCard, setHoveredCard] = useState<number | null>(null)
//   const [entered, setEntered] = useState(false)
//   const sectionRef = useRef<HTMLElement | null>(null)

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setEntered(true)
//             observer.unobserve(entry.target)
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

//   const services = [
//     {
//       icon: <Code className="w-8 h-8" />,
//       title: 'Web Development',
//       description: 'Full-stack development with modern frameworks',
//       color: 'from-blue-500 to-cyan-500'
//     },
//     {
//       icon: <Palette className="w-8 h-8" />,
//       title: 'UI/UX Design',
//       description: 'Beautiful and intuitive user experiences',
//       color: 'from-purple-500 to-pink-500'
//     },
//     {
//       icon: <BarChart3 className="w-8 h-8" />,
//       title: 'Data Analytics',
//       description: 'Insights and visualization from your data',
//       color: 'from-green-500 to-emerald-500'
//     },
   
    
//     {
//       icon: <BookOpen className="w-8 h-8" />,
//       title: 'Content Writing',
//       description: 'Engaging content and copywriting',
//       color: 'from-teal-500 to-cyan-500'
//     },
//     {
//       icon: <Briefcase className="w-8 h-8" />,
//       title: 'Business Strategy',
//       description: 'Strategic planning and consulting',
//       color: 'from-amber-500 to-orange-500'
//     },
//     {
//       icon: <Heart className="w-8 h-8" />,
//       title: 'Life Coaching',
//       description: 'Personal development and wellness',
//       color: 'from-rose-500 to-pink-500'
//     }
//   ]

//   return (
//     <section 
//       ref={sectionRef}
//       className="py-20 px-5 md:px-10 lg:px-20"
//       style={{
//         background: "linear-gradient(135deg,rgb(64, 142, 216), rgb(220, 218, 231), rgb(90, 56, 136))",
//         minHeight: '100vh',
//         position: 'relative',
//         overflow: 'hidden'
//       }}
//     >
//       {/* Background decorative elements */}
//       <div style={{
//         position: 'absolute',
//         top: '10%',
//         left: '5%',
//         width: '300px',
//         height: '300px',
//         borderRadius: '50%',
//         background: 'rgba(255, 255, 255, 0.1)',
//         filter: 'blur(40px)',
//         animation: 'float 8s ease-in-out infinite'
//       }} />
//       <div style={{
//         position: 'absolute',
//         bottom: '10%',
//         right: '5%',
//         width: '400px',
//         height: '400px',
//         borderRadius: '50%',
//         background: 'rgba(255, 255, 255, 0.05)',
//         filter: 'blur(50px)',
//         animation: 'float 12s ease-in-out infinite'
//       }} />

//       <style>{`
//         @keyframes float {
//           0%, 100% { transform: translateY(0px) rotate(0deg); }
//           50% { transform: translateY(-20px) rotate(180deg); }
//         }

//         .service-card {
//           transform: translateY(30px) scale(0.95);
//           opacity: 0;
//           transition: all 600ms cubic-bezier(0.22, 0.9, 0.3, 1);
//           will-change: transform, opacity;
//           backdrop-filter: blur(20px);
//           background: rgba(255, 255, 255, 0.1);
//           border: 1px solid rgba(255, 255, 255, 0.2);
//           position: relative;
//           overflow: hidden;
//         }
        
//         .services-grid.entered .service-card {
//           transform: translateY(0) scale(1) rotateX(0) rotateY(0);
//           opacity: 1;
//         }
        
//         .service-card::before {
//           content: '';
//           position: absolute;
//           top: 0;
//           left: 0;
//           right: 0;
//           bottom: 0;
//           background: linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05));
//           opacity: 0;
//           transition: opacity 400ms ease;
//           pointer-events: none;
//         }
        
//         .service-card:hover::before {
//           opacity: 1;
//         }
        
//         .service-card:hover {
//           transform: 
//             translateY(-12px) 
//             scale(1.05) 
//             rotateX(5deg) 
//             rotateY(2deg);
//           background: rgba(255, 255, 255, 0.15);
//           border: 1px solid rgba(255, 255, 255, 0.3);
//           box-shadow: 
//             0 20px 40px rgba(0,0,0,0.15),
//             0 0 80px rgba(255,255,255,0.1);
//           transition: all 400ms cubic-bezier(0.22, 0.9, 0.3, 1);
//         }
        
//         .section-header {
//           transform: translateY(20px);
//           opacity: 0;
//           transition: transform 800ms cubic-bezier(0.22,0.9,0.3,1), opacity 600ms ease-out;
//         }
//         .section-header.entered {
//           transform: translateY(0);
//           opacity: 1;
//         }
        
//         .cta-buttons {
//           transform: translateY(20px);
//           opacity: 0;
//           transition: transform 800ms cubic-bezier(0.22,0.9,0.3,1), opacity 600ms ease-out;
//           transition-delay: 600ms;
//         }
//         .services-grid.entered ~ .cta-buttons {
//           transform: translateY(0);
//           opacity: 1;
//         }
        
//         .arrow-button {
//           transform: translateX(-10px) rotate(-45deg);
//           opacity: 0;
//           transition: all 500ms cubic-bezier(0.22,0.9,0.3,1);
//         }
//         .service-card:hover .arrow-button {
//           transform: translateX(0) rotate(0deg);
//           opacity: 1;
//           background: rgba(255, 255, 255, 0.9);
//         }
        
//         .btn-hover {
//           transition: all 400ms cubic-bezier(0.22,0.9,0.3,1);
//           backdrop-filter: blur(10px);
//           border: 1px solid rgba(255, 255, 255, 0.3);
//         }
//         .btn-hover:hover {
//           transform: translateY(-3px) scale(1.05);
//           box-shadow: 0 15px 30px rgba(0,0,0,0.2);
//         }
        
//         .icon-container {
//           transition: all 500ms cubic-bezier(0.22,0.9,0.3,1);
//           background: rgba(255, 255, 255, 0.9);
//           backdrop-filter: blur(10px);
//         }
        
//         .service-card:hover .icon-container {
//           transform: scale(1.15) rotate(5deg);
//           background: rgba(255, 255, 255, 0.95);
//           box-shadow: 0 10px 25px rgba(0,0,0,0.15);
//         }
        
//         @media (prefers-reduced-motion: reduce) {
//           .service-card, .section-header, .cta-buttons, .arrow-button, .btn-hover, .icon-container {
//             transition: none !important;
//             transform: none !important;
//             opacity: 1 !important;
//             animation: none !important;
//           }
//         }
//       `}</style>

//       <div className="max-w-7xl mx-auto" style={{ position: 'relative', zIndex: 10 }}>
//         {/* Section Header */}
//         <div className={`section-header ${entered ? 'entered' : ''}`} style={{ textAlign: 'center', marginBottom: '5rem' }}>
//           <h2 style={{
//             fontSize: 'clamp(2.5rem, 5vw, 4rem)',
//             fontWeight: 'bold',
//             fontFamily: 'serif',
//             color: 'white',
//             marginBottom: '1rem',
//             lineHeight: '1.1',
//             letterSpacing: '-0.02em',
//             textShadow: '0 4px 8px rgba(0,0,0,0.2)'
//           }}>
//             Services We Provide <br />
//             <span style={{
//               background: 'linear-gradient(90deg,rgb(95, 95, 92) 0%,rgb(240, 238, 235) 100%)',
//               WebkitBackgroundClip: 'text',
//               backgroundClip: 'text',
//               WebkitTextFillColor: 'transparent',
//               fontStyle: 'italic',
//               textShadow: 'none'
//             }}>
              
//             </span>
//           </h2>
//           <div style={{
//             width: '80px',
//             height: '4px',
//             background: 'linear-gradient(90deg,rgb(109, 109, 109),rgb(243, 242, 239))',
//             margin: '0 auto 2rem auto',
//             borderRadius: '2px',
//             boxShadow: '0 2px 8px rgba(255, 215, 0, 0.3)'
//           }}></div>
//           <p style={{
//             color: 'rgba(255, 255, 255, 0.9)',
//             fontSize: '1.2rem',
//             maxWidth: '600px',
//             margin: '0 auto',
//             lineHeight: '1.6',
//             textShadow: '0 2px 4px rgba(0,0,0,0.1)'
//           }}>
//             Discover our comprehensive range of professional services designed to help you succeed
//           </p>
//         </div>

//         {/* Services Grid */}
//         <div className={`services-grid ${entered ? 'entered' : ''}`} style={{
//           display: 'grid',
//           gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
//           gap: '2rem',
//           marginBottom: '5rem'
//         }}>
//           {services.map((service, index) => (
//             <div
//               key={index}
//               className="service-card"
//               style={{
//                 transitionDelay: `${index * 120}ms`,
//                 borderRadius: '24px',
//                 padding: '2.5rem 2rem',
//                 cursor: 'pointer',
//                 aspectRatio: '1',
//                 display: 'flex',
//                 flexDirection: 'column',
//                 justifyContent: 'space-between',
//                 boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
//               }}
//               onMouseEnter={() => setHoveredCard(index)}
//               onMouseLeave={() => setHoveredCard(null)}
//             >
//               {/* Animated gradient border effect */}
//               <div style={{
//                 position: 'absolute',
//                 inset: 0,
//                 borderRadius: '24px',
//                 padding: '2px',
//                 background: 'linear-gradient(135deg, rgba(255,255,255,0.4), rgba(255,255,255,0.1))',
//                 WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
//                 WebkitMaskComposite: 'xor',
//                 maskComposite: 'exclude',
//                 opacity: hoveredCard === index ? 1 : 0,
//                 transition: 'opacity 400ms ease',
//                 pointerEvents: 'none'
//               }} />

//               {/* Content */}
//               <div style={{ position: 'relative', zIndex: 10, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
//                 {/* Top Section - Icon and Title */}
//                 <div>
//                   {/* Icon */}
//                   <div className="icon-container" style={{
//                     width: '5rem',
//                     height: '5rem',
//                     borderRadius: '20px',
//                     display: 'flex',
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                     marginBottom: '1.5rem',
//                     color: '#7B2FF7',
//                     boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
//                   }}>
//                     {service.icon}
//                   </div>

//                   {/* Title */}
//                   <h3 style={{
//                     fontSize: '1.5rem',
//                     fontWeight: 'bold',
//                     color: 'white',
//                     marginBottom: '1rem',
//                     fontFamily: 'serif',
//                     textShadow: '0 2px 4px rgba(0,0,0,0.2)'
//                   }}>
//                     {service.title}
//                   </h3>

//                   {/* Description */}
//                   <p style={{
//                     color: 'rgba(255, 255, 255, 0.9)',
//                     fontSize: '1rem',
//                     lineHeight: '1.6',
//                     margin: 0,
//                     textShadow: '0 1px 2px rgba(0,0,0,0.1)'
//                   }}>
//                     {service.description}
//                   </p>
//                 </div>

//                 {/* Arrow Button */}
//                 <div className="arrow-button" style={{
//                   alignSelf: 'flex-end',
//                   width: '3rem',
//                   height: '3rem',
//                   borderRadius: '50%',
//                   display: 'flex',
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                   color: '#7B2FF7',
//                   marginTop: 'auto'
//                 }}>
//                   <ArrowRight className="w-5 h-5" />
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* CTA Buttons */}
//         <div className={`cta-buttons ${entered ? 'entered' : ''}`} style={{ textAlign: 'center' }}>
//           <div style={{
//             display: 'flex',
//             gap: '1.5rem',
//             justifyContent: 'center',
//             flexWrap: 'wrap'
//           }}>
//             <button className="btn-hover" style={{
//               padding: '1.2rem 2.5rem',
//               backgroundColor: 'rgba(255, 255, 255, 0.1)',
//               color: 'white',
//               border: '1px solid rgba(255, 255, 255, 0.3)',
//               borderRadius: '16px',
//               fontSize: '1.1rem',
//               fontWeight: '600',
//               cursor: 'pointer',
//               backdropFilter: 'blur(10px)'
//             }}
//             onMouseEnter={(e) => {
//               e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'
//               e.currentTarget.style.color = '#FFD700'
//             }}
//             onMouseLeave={(e) => {
//               e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'
//               e.currentTarget.style.color = 'white'
//             }}
//             >
//               VIEW LAST COURSES
//             </button>
//             <button className="btn-hover" style={{
//               padding: '1.2rem 2.5rem',
//               backgroundColor: 'rgba(138, 137, 135, 0.9)',
//               color: '#1f2937',
//               border: 'none',
//               borderRadius: '16px',
//               fontSize: '1.1rem',
//               fontWeight: '600',
//               cursor: 'pointer',
//               backdropFilter: 'blur(10px)',
//               boxShadow: '0 8px 20px rgba(255, 215, 0, 0.3)'
//             }}
//             onMouseEnter={(e) => {
//               e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.9)'
//               e.currentTarget.style.boxShadow = '0 12px 30px rgba(17, 17, 17, 0.4)'
//             }}
//             onMouseLeave={(e) => {
//               e.currentTarget.style.backgroundColor = 'rgba(233, 233, 232, 0.9)'
//               e.currentTarget.style.boxShadow = '0 8px 20px rgba(14, 13, 13, 0.3)'
//             }}
//             >
//               VIEW ALL MENTORS
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default WeCanDO


'use client'

import { useState, useEffect, useRef } from 'react'
import { ArrowRight, Code, Palette, BarChart3, Camera, Music, BookOpen, Briefcase, Heart } from 'lucide-react'

const WeCanDO = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
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

  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Web Development',
      description: 'Full-stack development with modern frameworks',
      color: '#3A86FF'
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'UI/UX Design',
      description: 'Beautiful and intuitive user experiences',
      color: '#7B2FF7'
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'Data Analytics',
      description: 'Insights and visualization from your data',
      color: '#10B981'
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: 'Content Writing',
      description: 'Engaging content and copywriting',
      color: '#F59E0B'
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: 'Business Strategy',
      description: 'Strategic planning and consulting',
      color: '#EF4444'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Life Coaching',
      description: 'Personal development and wellness',
      color: '#EC4899'
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
        .service-card {
          opacity: 0;
          transform: translateY(60px) scale(0.95);
          transition: all 1000ms cubic-bezier(0.22, 0.9, 0.3, 1);
          will-change: transform, opacity;
          backdrop-filter: blur(20px);
          background: linear-gradient(135deg, rgba(123, 47, 247, 0.1), rgba(58, 134, 255, 0.1));
          border: 1px solid rgba(123, 47, 247, 0.2);
          position: relative;
          overflow: hidden;
          transform-style: preserve-3d;
          perspective: 1000px;
        }
        
        .services-grid.entered .service-card {
          opacity: 1;
          transform: translateY(0) scale(1) rotateX(0) rotateY(0);
        }
        
        .service-card:hover {
          transform: 
            translateY(-12px) 
            scale(1.02)
            rotateX(8deg) 
            rotateY(5deg);
          background: linear-gradient(135deg, rgba(123, 47, 247, 0.15), rgba(58, 134, 255, 0.15));
          border: 1px solid rgba(123, 47, 247, 0.3);
          box-shadow: 
            0 25px 50px rgba(123, 47, 247, 0.15),
            0 0 80px rgba(58, 134, 255, 0.1);
          transition: all 600ms cubic-bezier(0.22, 0.9, 0.3, 1);
        }
        
        .service-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(123, 47, 247, 0.08), rgba(58, 134, 255, 0.05));
          opacity: 0;
          transition: opacity 500ms ease;
          pointer-events: none;
        }
        
        .service-card:hover::before {
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
        
        .cta-buttons {
          transform: translateY(40px);
          opacity: 0;
          transition: all 800ms cubic-bezier(0.22, 0.9, 0.3, 1);
          transition-delay: 800ms;
        }
        .services-grid.entered ~ .cta-buttons {
          transform: translateY(0);
          opacity: 1;
        }
        
        .arrow-button {
          transform: translateX(-20px) rotate(-45deg);
          opacity: 0;
          transition: all 700ms cubic-bezier(0.22, 0.9, 0.3, 1);
        }
        .service-card:hover .arrow-button {
          transform: translateX(0) rotate(0deg);
          opacity: 1;
          background: rgba(255, 255, 255, 0.9);
          box-shadow: 
            5px 5px 10px rgba(163, 177, 198, 0.3),
            -5px -5px 10px rgba(255, 255, 255, 0.8);
        }
        
        .btn-hover {
          transition: all 500ms cubic-bezier(0.22, 0.9, 0.3, 1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(123, 47, 247, 0.2);
        }
        .btn-hover:hover {
          transform: translateY(-4px) scale(1.05);
          box-shadow: 0 20px 40px rgba(123, 47, 247, 0.2);
        }
        
        /* Neumorphism Icon Styles */
        .neumorphic-icon {
          background: linear-gradient(145deg, #f0f0f0, #cacaca);
          box-shadow: 
            8px 8px 16px rgba(163, 177, 198, 0.4),
            -8px -8px 16px rgba(255, 255, 255, 0.8);
          transition: all 600ms cubic-bezier(0.22, 0.9, 0.3, 1);
        }
        
        .service-card:hover .neumorphic-icon {
          transform: scale(1.1) rotate(5deg);
          box-shadow: 
            inset 4px 4px 8px rgba(163, 177, 198, 0.4),
            inset -4px -4px 8px rgba(255, 255, 255, 0.8),
            4px 4px 8px rgba(163, 177, 198, 0.2);
        }

        .slide-in-from-left {
          transform: translateX(-60px);
          opacity: 0;
          transition: all 900ms cubic-bezier(0.22, 0.9, 0.3, 1);
        }
        
        .service-card.entered .slide-in-from-left {
          transform: translateX(0);
          opacity: 1;
        }

        .slide-in-from-right {
          transform: translateX(60px);
          opacity: 0;
          transition: all 900ms cubic-bezier(0.22, 0.9, 0.3, 1);
        }
        
        .service-card.entered .slide-in-from-right {
          transform: translateX(0);
          opacity: 1;
        }

        .slide-in-from-bottom {
          transform: translateY(40px);
          opacity: 0;
          transition: all 800ms cubic-bezier(0.22, 0.9, 0.3, 1);
        }
        
        .service-card.entered .slide-in-from-bottom {
          transform: translateY(0);
          opacity: 1;
        }

        @media (prefers-reduced-motion: reduce) {
          .service-card, .section-header, .cta-buttons, .arrow-button, .btn-hover, .neumorphic-icon,
          .slide-in-from-left, .slide-in-from-right, .slide-in-from-bottom {
            transition: none !important;
            transform: none !important;
            opacity: 1 !important;
          }
        }
      `}</style>

      <div className="max-w-7xl mx-auto" style={{ position: 'relative', zIndex: 10 }}>
        {/* Section Header */}
        <div className={`section-header ${entered ? 'entered' : ''}`} style={{ 
          textAlign: 'center', 
          marginBottom: '5rem',
          transitionDelay: '0ms'
        }}>
          <h2 style={{
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: 'bold',
            fontFamily: 'serif',
            color: '#1f2937',
            marginBottom: '1rem',
            lineHeight: '1.1',
            letterSpacing: '-0.02em'
          }}>
            Services We Provide
          </h2>
          <div style={{
            width: '80px',
            height: '4px',
            background: 'linear-gradient(90deg, #7B2FF7, #3A86FF)',
            margin: '0 auto 2rem auto',
            borderRadius: '2px',
            boxShadow: '0 2px 8px rgba(123, 47, 247, 0.3)'
          }}></div>
          <p style={{
            color: '#6b7280',
            fontSize: '1.2rem',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Discover our comprehensive range of professional services designed to help you succeed
          </p>
        </div>

        {/* Services Grid */}
        <div className={`services-grid ${entered ? 'entered' : ''}`} style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          marginBottom: '5rem'
        }}>
          {services.map((service, index) => (
            <div
              key={index}
              className={`service-card ${entered ? 'entered' : ''}`}
              style={{
                transitionDelay: `${index * 150}ms`,
                borderRadius: '24px',
                padding: '2.5rem 2rem',
                cursor: 'pointer',
                aspectRatio: '1',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Animated gradient border effect */}
              <div style={{
                position: 'absolute',
                inset: 0,
                borderRadius: '24px',
                padding: '2px',
                background: 'linear-gradient(135deg, rgba(123, 47, 247, 0.3), rgba(58, 134, 255, 0.3))',
                WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                WebkitMaskComposite: 'xor',
                maskComposite: 'exclude',
                opacity: hoveredCard === index ? 1 : 0,
                transition: 'opacity 500ms ease',
                pointerEvents: 'none'
              }} />

              {/* Content */}
              <div style={{ 
                position: 'relative', 
                zIndex: 10, 
                height: '100%', 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'space-between' 
              }}>
                {/* Top Section - Icon and Title */}
                <div>
                  {/* Neumorphic Icon */}
                  <div 
                    className="neumorphic-icon"
                    style={{
                      transitionDelay: `${400 + index * 100}ms`,
                      width: '5rem',
                      height: '5rem',
                      borderRadius: '20px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '1.5rem'
                    }}
                  >
                    <div style={{ 
                      color: service.color,
                      transition: 'color 400ms ease'
                    }}>
                      {service.icon}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="slide-in-from-left" style={{
                    transitionDelay: `${500 + index * 100}ms`,
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    color: '#1f2937',
                    marginBottom: '1rem',
                    fontFamily: 'serif'
                  }}>
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="slide-in-from-bottom" style={{
                    transitionDelay: `${600 + index * 100}ms`,
                    color: '#6b7280',
                    fontSize: '1rem',
                    lineHeight: '1.6',
                    margin: 0
                  }}>
                    {service.description}
                  </p>
                </div>

                {/* Arrow Button */}
                <div className="arrow-button" style={{
                  alignSelf: 'flex-end',
                  width: '3rem',
                  height: '3rem',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#7B2FF7',
                  marginTop: 'auto',
                  background: 'rgba(255, 255, 255, 0.8)',
                  transitionDelay: `${700 + index * 100}ms`
                }}>
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className={`cta-buttons ${entered ? 'entered' : ''}`} style={{ textAlign: 'center' }}>
          <div style={{
            display: 'flex',
            gap: '1.5rem',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <button className="btn-hover" style={{
              padding: '1.2rem 2.5rem',
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              color: '#7B2FF7',
              border: '1px solid rgba(123, 47, 247, 0.3)',
              borderRadius: '16px',
              fontSize: '1.1rem',
              fontWeight: '600',
              cursor: 'pointer',
              backdropFilter: 'blur(10px)',
              boxShadow: '0 8px 20px rgba(123, 47, 247, 0.1)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(123, 47, 247, 0.1)'
              e.currentTarget.style.color = '#7B2FF7'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.9)'
              e.currentTarget.style.color = '#7B2FF7'
            }}
            >
              VIEW LAST COURSES
            </button>
            <button className="btn-hover" style={{
              padding: '1.2rem 2.5rem',
              background: 'linear-gradient(135deg, #7B2FF7, #3A86FF)',
              color: 'white',
              border: 'none',
              borderRadius: '16px',
              fontSize: '1.1rem',
              fontWeight: '600',
              cursor: 'pointer',
              backdropFilter: 'blur(10px)',
              boxShadow: '0 8px 20px rgba(123, 47, 247, 0.3)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'linear-gradient(135deg, #6A23E5, #2A75F5)'
              e.currentTarget.style.boxShadow = '0 12px 30px rgba(123, 47, 247, 0.4)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'linear-gradient(135deg, #7B2FF7, #3A86FF)'
              e.currentTarget.style.boxShadow = '0 8px 20px rgba(123, 47, 247, 0.3)'
            }}
            >
              VIEW ALL MENTORS
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WeCanDO