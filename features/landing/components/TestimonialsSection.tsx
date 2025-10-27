// // 'use client'

// // import { Shield, CheckCircle, Star, Users, TrendingUp } from 'lucide-react'
// // import { useEffect, useRef, useState } from 'react'

// // export default function TestimonialsSection() {
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

// //   const avatarImages = [
// //     "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&auto=format&q=80",
// //     "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&auto=format&q=80",
// //     "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&auto=format&q=80",
// //     "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&auto=format&q=80",
// //   ]

// //   return (
// //     <section ref={sectionRef} style={{
// //       background: 'white',
// //       minHeight: '100vh',
// //       padding: 'clamp(64px, 8vw, 120px) clamp(16px, 3vw, 40px)'
// //     }}>
// //       <style>{`
// //         .testimonial-tile {
// //           transform: translateY(8px);
// //           opacity: 0;
// //           transition: transform 320ms cubic-bezier(.22,.9,.3,1), opacity 260ms ease-out;
// //           will-change: transform, opacity;
// //         }
// //         .testimonial-tile.entered {
// //           transform: translateY(0);
// //           opacity: 1;
// //         }
// //         .testimonial-tile:hover {
// //           transform: translateY(-4px);
// //           transition: transform 300ms cubic-bezier(.4,0,.2,1);
// //         }
        
// //         @media (prefers-reduced-motion: reduce) {
// //           .testimonial-tile {
// //             transition: none !important;
// //             transform: none !important;
// //             opacity: 1 !important;
// //           }
// //         }
// //         @media (max-width: 1024px) {
// //           .testimonial-grid {
// //             grid-template-columns: repeat(6, 1fr) !important;
// //           }
// //           .testimonial-left {
// //             grid-column: span 6 !important;
// //           }
// //           .testimonial-center {
// //             grid-column: span 3 !important;
// //           }
// //           .testimonial-right {
// //             grid-column: span 3 !important;
// //           }
// //         }
// //         @media (max-width: 768px) {
// //           .testimonial-grid {
// //             grid-template-columns: 1fr !important;
// //           }
// //           .testimonial-left,
// //           .testimonial-center,
// //           .testimonial-right {
// //             grid-column: span 1 !important;
// //           }
// //         }
// //       `}</style>
      
// //       <div className="testimonial-grid" style={{
// //         maxWidth: '1280px',
// //         margin: '0 auto',
// //         display: 'grid',
// //         gridTemplateColumns: 'repeat(12, 1fr)',
// //         gap: '24px'
// //       }}>
// //         {/* Left Column - Stacked Cluster */}
// //         <div className="testimonial-left" style={{
// //           gridColumn: 'span 4',
// //           display: 'flex',
// //           flexDirection: 'column',
// //           gap: '24px'
// //         }}>
// //           {/* Circular Metric Badge */}
// //           <div className={`testimonial-tile ${entered ? 'entered' : ''}`} style={{
// //             transitionDelay: '0ms',
// //             background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
// //             borderRadius: '50%',
// //             aspectRatio: '1',
// //             padding: '32px',
// //             display: 'flex',
// //             flexDirection: 'column',
// //             alignItems: 'center',
// //             justifyContent: 'center',
// //             color: 'white',
// //             boxShadow: '0 8px 24px rgba(59, 130, 246, 0.25)',
// //             minHeight: '140px'
// //           }}>
// //             <div style={{ fontSize: '3rem', fontWeight: 'bold', lineHeight: '1' }}>98%</div>
// //             <div style={{ fontSize: '0.875rem', opacity: 0.9, marginTop: '8px' }}>Satisfaction Rate</div>
// //           </div>

// //           {/* Dark Trust Logos Tile */}
// //           <div className={`testimonial-tile ${entered ? 'entered' : ''}`} style={{
// //             transitionDelay: '80ms',
// //             background: '#0f172a',
// //             borderRadius: '20px',
// //             padding: '32px',
// //             boxShadow: '0 10px 30px rgba(0,0,0,0.15)'
// //           }}>
// //             <h4 style={{
// //               fontSize: '0.875rem',
// //               fontWeight: '600',
// //               color: 'rgba(255,255,255,0.7)',
// //               textTransform: 'uppercase',
// //               letterSpacing: '0.05em',
// //               marginBottom: '24px'
// //             }}>
// //               Trusted By
// //             </h4>
// //             <div style={{
// //               display: 'flex',
// //               gap: '12px',
// //               justifyContent: 'center',
// //               marginBottom: '16px'
// //             }}>
// //               {['Google', 'Meta', 'Apple'].map((brand, i) => (
// //                 <div key={brand} style={{
// //                   width: '64px',
// //                   height: '64px',
// //                   borderRadius: '50%',
// //                   background: 'rgba(255,255,255,0.1)',
// //                   display: 'flex',
// //                   alignItems: 'center',
// //                   justifyContent: 'center',
// //                   fontSize: '0.75rem',
// //                   fontWeight: 'bold',
// //                   color: 'white'
// //                 }}>
// //                   {brand[0]}
// //                 </div>
// //               ))}
// //             </div>
// //             <div style={{
// //               display: 'flex',
// //               justifyContent: 'center',
// //               gap: '4px'
// //             }}>
// //               {[1, 2, 3].map((dot) => (
// //                 <div key={dot} style={{
// //                   width: '8px',
// //                   height: '8px',
// //                   borderRadius: '50%',
// //                   background: 'rgba(255,255,255,0.3)'
// //                 }} />
// //               ))}
// //             </div>
// //           </div>
// //         </div>

// //         {/* Center Column - Concentric Rings Avatar */}
// //         <div className="testimonial-center" style={{
// //           gridColumn: 'span 3',
// //           display: 'flex',
// //           alignItems: 'flex-end'
// //         }}>
// //           <div className={`testimonial-tile ${entered ? 'entered' : ''}`} style={{
// //             transitionDelay: '160ms',
// //             width: '100%',
// //             aspectRatio: '1',
// //             background: 'linear-gradient(135deg, #f0f9ff, #e0e7ff)',
// //             borderRadius: '20px',
// //             padding: '40px',
// //             display: 'flex',
// //             alignItems: 'center',
// //             justifyContent: 'center',
// //             position: 'relative',
// //             boxShadow: '0 4px 12px rgba(0,0,0,0.06)'
// //           }}>
// //             {/* Concentric Rings */}
// //             <div style={{
// //               position: 'absolute',
// //               width: '120px',
// //               height: '120px',
// //               borderRadius: '50%',
// //               border: '2px solid rgba(59, 130, 246, 0.2)'
// //             }} />
// //             <div style={{
// //               position: 'absolute',
// //               width: '90px',
// //               height: '90px',
// //               borderRadius: '50%',
// //               border: '2px solid rgba(59, 130, 246, 0.3)'
// //             }} />
// //             <div style={{
// //               position: 'absolute',
// //               width: '60px',
// //               height: '60px',
// //               borderRadius: '50%',
// //               border: '2px solid rgba(59, 130, 246, 0.4)',
// //               background: `url(${avatarImages[0]})`,
// //               backgroundSize: 'cover',
// //               backgroundPosition: 'center'
// //             }} />
// //           </div>
// //         </div>

// //         {/* Right Column - Main Content */}
// //         <div className="testimonial-right" style={{
// //           gridColumn: 'span 5',
// //           display: 'flex',
// //           flexDirection: 'column',
// //           gap: '24px'
// //         }}>
// //           {/* Main Headline */}
// //           <div className={`testimonial-tile ${entered ? 'entered' : ''}`} style={{
// //             transitionDelay: '240ms',
// //             marginBottom: '8px'
// //           }}>
// //             <h2 style={{
// //               fontSize: 'clamp(2.5rem, 6vw, 4rem)',
// //               fontWeight: 'bold',
// //               fontFamily: 'serif',
// //               color: '#0f172a',
// //               lineHeight: '1.1',
// //               letterSpacing: '-0.02em',
// //               marginBottom: '24px'
// //             }}>
// //               Safety & Trust
// //             </h2>
// //             <p style={{
// //               fontSize: '1.125rem',
// //               color: '#64748b',
// //               lineHeight: '1.6',
// //               maxWidth: '65ch',
// //               marginBottom: '32px'
// //             }}>
// //               Our platform ensures verified professionals and secure mentorship experiences with industry-leading encryption and privacy standards.
// //             </p>
// //           </div>

// //           {/* Metrics Grid */}
// //           <div style={{
// //             display: 'grid',
// //             gridTemplateColumns: 'repeat(2, 1fr)',
// //             gap: '24px',
// //             marginBottom: '24px'
// //           }}>
// //             {/* Large Metric Tile */}
// //             <div className={`testimonial-tile ${entered ? 'entered' : ''}`} style={{
// //               transitionDelay: '320ms',
// //               background: 'linear-gradient(135deg, #f0f9ff, #e0e7ff)',
// //               borderRadius: '20px',
// //               padding: '32px',
// //               boxShadow: '0 4px 12px rgba(0,0,0,0.06)'
// //             }}>
// //               <div style={{
// //                 fontSize: '3.5rem',
// //                 fontWeight: 'bold',
// //                 color: '#1e40af',
// //                 lineHeight: '1',
// //                 marginBottom: '12px'
// //               }}>
// //                 10k+
// //               </div>
// //               <div style={{
// //                 fontSize: '0.875rem',
// //                 color: '#64748b',
// //                 fontWeight: '500'
// //               }}>
// //                 Active Mentors
// //               </div>
// //             </div>

// //             {/* Circular Seal */}
// //             <div className={`testimonial-tile ${entered ? 'entered' : ''}`} style={{
// //               transitionDelay: '400ms',
// //               aspectRatio: '1',
// //               background: 'white',
// //               borderRadius: '20px',
// //               padding: '32px',
// //               display: 'flex',
// //               flexDirection: 'column',
// //               alignItems: 'center',
// //               justifyContent: 'center',
// //               border: '2px solid #e0e7ff',
// //               boxShadow: '0 4px 12px rgba(0,0,0,0.06)'
// //             }}>
// //               <Shield style={{ width: '48px', height: '48px', color: '#3b82f6' }} />
// //               <div style={{
// //                 fontSize: '0.875rem',
// //                 fontWeight: '600',
// //                 color: '#1e40af',
// //                 marginTop: '12px',
// //                 textAlign: 'center'
// //               }}>
// //                 Verified
// //               </div>
// //             </div>
// //           </div>

// //           {/* User Chips List */}
// //           <div className={`testimonial-tile ${entered ? 'entered' : ''}`} style={{
// //             transitionDelay: '480ms',
// //             background: '#f8fafc',
// //             borderRadius: '20px',
// //             padding: '24px',
// //             display: 'flex',
// //             flexDirection: 'column',
// //             gap: '16px',
// //             boxShadow: '0 4px 12px rgba(0,0,0,0.06)'
// //           }}>
// //             <div style={{
// //               display: 'flex',
// //               alignItems: 'center',
// //               justifyContent: 'space-between',
// //               paddingBottom: '16px',
// //               borderBottom: '1px solid #e2e8f0'
// //             }}>
// //               <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
// //                 <img 
// //                   src={avatarImages[0]} 
// //                   alt="User"
// //                   style={{
// //                     width: '32px',
// //                     height: '32px',
// //                     borderRadius: '50%',
// //                     objectFit: 'cover'
// //                   }}
// //                 />
// //                 <div>
// //                   <div style={{ fontSize: '0.875rem', fontWeight: '600', color: '#1e293b' }}>Sarah M.</div>
// //                   <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Product Manager</div>
// //                 </div>
// //               </div>
// //               <div style={{ fontSize: '0.875rem', fontWeight: '600', color: '#10b981' }}>$2.5k</div>
// //             </div>
            
// //             <div style={{
// //               display: 'flex',
// //               alignItems: 'center',
// //               justifyContent: 'space-between'
// //             }}>
// //               <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
// //                 <img 
// //                   src={avatarImages[1]} 
// //                   alt="User"
// //                   style={{
// //                     width: '32px',
// //                     height: '32px',
// //                     borderRadius: '50%',
// //                     objectFit: 'cover'
// //                   }}
// //                 />
// //                 <div>
// //                   <div style={{ fontSize: '0.875rem', fontWeight: '600', color: '#1e293b' }}>John D.</div>
// //                   <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Engineer</div>
// //                 </div>
// //               </div>
// //               <div style={{ fontSize: '0.875rem', fontWeight: '600', color: '#10b981' }}>$3.2k</div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   )
// // }

// 'use client'

// import { Shield, CheckCircle, Star, Users, TrendingUp, CreditCard, MessageCircle, ThumbsUp } from 'lucide-react'
// import { useEffect, useRef, useState } from 'react'

// export default function TestimonialsSection() {
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

//   const avatarImages = [
//     "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&auto=format&q=80",
//     "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&auto=format&q=80",
//     "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&auto=format&q=80",
//     "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&auto=format&q=80",
//   ]

//   return (
//     <section ref={sectionRef} style={{
//       background: "linear-gradient(135deg, rgb(64, 142, 216), rgb(220, 218, 231), rgb(90, 56, 136))",
//       minHeight: '100vh',
//       padding: 'clamp(64px, 8vw, 120px) clamp(16px, 3vw, 40px)',
//       position: 'relative',
//       overflow: 'hidden'
//     }}>
      
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

//         .stats-card {
//           opacity: 0;
//           transform: translateY(30px) scale(0.95);
//           transition: all 600ms cubic-bezier(0.22, 0.9, 0.3, 1);
//           will-change: transform, opacity;
//           backdrop-filter: blur(20px);
//           background: rgba(255, 255, 255, 0.1);
//           border: 1px solid rgba(255, 255, 255, 0.2);
//           position: relative;
//           overflow: hidden;
//         }
        
//         .stats-card.entered {
//           opacity: 1;
//           transform: translateY(0) scale(1);
//         }
        
//         .stats-card:hover {
//           transform: translateY(-8px) scale(1.02);
//           background: rgba(255, 255, 255, 0.15);
//           border: 1px solid rgba(255, 255, 255, 0.3);
//           box-shadow: 0 20px 40px rgba(0,0,0,0.15), 0 0 80px rgba(255,255,255,0.1);
//           transition: all 400ms cubic-bezier(0.22, 0.9, 0.3, 1);
//         }
        
//         .stats-card::before {
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
        
//         .stats-card:hover::before {
//           opacity: 1;
//         }

//         .metric-number {
//           background: linear-gradient(135deg, #FFFFFF, #E0E7FF);
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//           background-clip: text;
//           text-fill-color: transparent;
//           filter: drop-shadow(0 4px 8px rgba(0,0,0,0.2));
//         }

//         .trust-badge {
//           transform: scale(0.8) rotate(-10deg);
//           opacity: 0;
//           transition: all 500ms cubic-bezier(0.22, 0.9, 0.3, 1);
//         }
        
//         .stats-card.entered .trust-badge {
//           transform: scale(1) rotate(0deg);
//           opacity: 1;
//         }

//         .rating-star {
//           transform: scale(0) rotate(180deg);
//           opacity: 0;
//           transition: all 400ms cubic-bezier(0.22, 0.9, 0.3, 1);
//         }
        
//         .stats-card.entered .rating-star {
//           transform: scale(1) rotate(0deg);
//           opacity: 1;
//         }

//         .user-avatar {
//           transform: translateX(-20px);
//           opacity: 0;
//           transition: all 400ms cubic-bezier(0.22, 0.9, 0.3, 1);
//         }
        
//         .stats-card.entered .user-avatar {
//           transform: translateX(0);
//           opacity: 1;
//         }

//         .feature-icon {
//           transform: scale(0) rotate(-45deg);
//           opacity: 0;
//           transition: all 500ms cubic-bezier(0.22, 0.9, 0.3, 1);
//         }
        
//         .stats-card.entered .feature-icon {
//           transform: scale(1) rotate(0deg);
//           opacity: 1;
//         }

//         @media (prefers-reduced-motion: reduce) {
//           .stats-card, .trust-badge, .rating-star, .user-avatar, .feature-icon {
//             transition: none !important;
//             transform: none !important;
//             opacity: 1 !important;
//             animation: none !important;
//           }
//         }
        
//         @media (max-width: 1024px) {
//           .testimonial-grid {
//             grid-template-columns: repeat(2, 1fr) !important;
//           }
//         }
        
//         @media (max-width: 768px) {
//           .testimonial-grid {
//             grid-template-columns: 1fr !important;
//           }
//         }
//       `}</style>
      
//       <div className="testimonial-grid" style={{
//         maxWidth: '1400px',
//         margin: '0 auto',
//         display: 'grid',
//         gridTemplateColumns: 'repeat(3, 1fr)',
//         gap: '32px',
//         position: 'relative',
//         zIndex: 10
//       }}>
        
//         {/* Left Column - Stats & Trust */}
//         <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          
//           {/* 28k Verified Mentions */}
//           <div className={`stats-card ${entered ? 'entered' : ''}`} style={{
//             transitionDelay: '0ms',
//             borderRadius: '24px',
//             padding: '2.5rem 2rem',
//             textAlign: 'center',
//             minHeight: '200px',
//             display: 'flex',
//             flexDirection: 'column',
//             justifyContent: 'center',
//             alignItems: 'center'
//           }}>
//             <div className="metric-number" style={{
//               fontSize: '4.5rem',
//               fontWeight: 'bold',
//               lineHeight: '1',
//               marginBottom: '1rem'
//             }}>
//               28k
//             </div>
//             <div style={{
//               fontSize: '1.25rem',
//               fontWeight: '600',
//               color: 'white',
//               textShadow: '0 2px 4px rgba(0,0,0,0.2)'
//             }}>
//               Verified Mentions
//             </div>
//             <div className="trust-badge" style={{
//               position: 'absolute',
//               top: '1rem',
//               right: '1rem',
//               background: 'rgba(255, 255, 255, 0.9)',
//               borderRadius: '50%',
//               width: '2.5rem',
//               height: '2.5rem',
//               display: 'flex',
//               alignItems: 'center',
//               justifyContent: 'center',
//               transitionDelay: '300ms'
//             }}>
//               <CheckCircle style={{ width: '1.5rem', height: '1.5rem', color: '#10B981' }} />
//             </div>
//           </div>

//           {/* 28gk Gigs Registered */}
//           <div className={`stats-card ${entered ? 'entered' : ''}`} style={{
//             transitionDelay: '100ms',
//             borderRadius: '24px',
//             padding: '2.5rem 2rem',
//             textAlign: 'center',
//             minHeight: '200px',
//             display: 'flex',
//             flexDirection: 'column',
//             justifyContent: 'center',
//             alignItems: 'center'
//           }}>
//             <div className="metric-number" style={{
//               fontSize: '4.5rem',
//               fontWeight: 'bold',
//               lineHeight: '1',
//               marginBottom: '1rem'
//             }}>
//               28gk
//             </div>
//             <div style={{
//               fontSize: '1.25rem',
//               fontWeight: '600',
//               color: 'white',
//               textShadow: '0 2px 4px rgba(0,0,0,0.2)'
//             }}>
//               Gigs Registered
//             </div>
//           </div>

//           {/* Trust Signals - OVER 16K CLIENTS */}
//           <div className={`stats-card ${entered ? 'entered' : ''}`} style={{
//             transitionDelay: '200ms',
//             borderRadius: '24px',
//             padding: '2rem',
//             textAlign: 'center'
//           }}>
//             <h3 style={{
//               fontSize: '0.875rem',
//               fontWeight: '600',
//               color: 'rgba(255, 255, 255, 0.8)',
//               textTransform: 'uppercase',
//               letterSpacing: '0.1em',
//               marginBottom: '1rem'
//             }}>
//               Trust Signals
//             </h3>
//             <div style={{
//               fontSize: '2.5rem',
//               fontWeight: 'bold',
//               color: 'white',
//               textShadow: '0 2px 4px rgba(0,0,0,0.2)',
//               marginBottom: '1.5rem'
//             }}>
//               OVER 16K CLIENTS
//             </div>
//             <div style={{
//               display: 'flex',
//               justifyContent: 'center',
//               gap: '1rem',
//               flexWrap: 'wrap'
//             }}>
//               {['Google', 'Meta', 'Apple', 'Netflix'].map((brand, i) => (
//                 <div key={brand} className="trust-badge" style={{
//                   transitionDelay: `${400 + i * 100}ms`,
//                   padding: '0.75rem 1rem',
//                   background: 'rgba(255, 255, 255, 0.1)',
//                   borderRadius: '12px',
//                   border: '1px solid rgba(255, 255, 255, 0.2)',
//                   fontSize: '0.875rem',
//                   fontWeight: '600',
//                   color: 'white'
//                 }}>
//                   {brand}
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Center Column - Answer & Protection */}
//         <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          
//           {/* Answer Section */}
//           <div className={`stats-card ${entered ? 'entered' : ''}`} style={{
//             transitionDelay: '300ms',
//             borderRadius: '24px',
//             padding: '2rem'
//           }}>
//             <h3 style={{
//               fontSize: '1.5rem',
//               fontWeight: 'bold',
//               color: 'white',
//               marginBottom: '1.5rem',
//               textShadow: '0 2px 4px rgba(0,0,0,0.2)'
//             }}>
//               Answer
//             </h3>
            
//             <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
//               <div className="feature-icon" style={{
//                 transitionDelay: '500ms',
//                 display: 'flex',
//                 alignItems: 'center',
//                 gap: '1rem',
//                 padding: '1rem',
//                 background: 'rgba(255, 255, 255, 0.1)',
//                 borderRadius: '12px',
//                 border: '1px solid rgba(255, 255, 255, 0.2)'
//               }}>
//                 <ThumbsUp style={{ width: '1.5rem', height: '1.5rem', color: '#10B981' }} />
//                 <span style={{ color: 'white', fontWeight: '500' }}>yeshoot</span>
//               </div>
              
//               <div className="feature-icon" style={{
//                 transitionDelay: '600ms',
//                 display: 'flex',
//                 alignItems: 'center',
//                 gap: '1rem',
//                 padding: '1rem',
//                 background: 'rgba(255, 255, 255, 0.1)',
//                 borderRadius: '12px',
//                 border: '1px solid rgba(255, 255, 255, 0.2)'
//               }}>
//                 <MessageCircle style={{ width: '1.5rem', height: '1.5rem', color: '#3B82F6' }} />
//                 <span style={{ color: 'white', fontWeight: '500' }}>Answer</span>
//               </div>
//             </div>
//           </div>

//           {/* Question Protection */}
//           <div className={`stats-card ${entered ? 'entered' : ''}`} style={{
//             transitionDelay: '400ms',
//             borderRadius: '24px',
//             padding: '2rem'
//           }}>
//             <h3 style={{
//               fontSize: '1.25rem',
//               fontWeight: 'bold',
//               color: 'white',
//               marginBottom: '0.5rem',
//               textShadow: '0 2px 4px rgba(0,0,0,0.2)'
//             }}>
//               Question Protection
//             </h3>
            
//             <div className="feature-icon" style={{
//               transitionDelay: '700ms',
//               display: 'flex',
//               alignItems: 'center',
//               gap: '1rem',
//               marginBottom: '1.5rem',
//               padding: '1rem',
//               background: 'rgba(255, 255, 255, 0.1)',
//               borderRadius: '12px',
//               border: '1px solid rgba(255, 255, 255, 0.2)'
//             }}>
//               <CreditCard style={{ width: '2rem', height: '2rem', color: '#8B5CF6' }} />
//               <div>
//                 <div style={{ fontSize: '1rem', fontWeight: '600', color: 'white' }}>Secure Payments</div>
//                 <div style={{ fontSize: '0.875rem', color: 'rgba(255, 255, 255, 0.8)' }}>
//                   We will keep tracking your all payments to make it safe.
//                 </div>
//               </div>
//             </div>

//             <div style={{
//               padding: '1.5rem',
//               background: 'rgba(255, 255, 255, 0.05)',
//               borderRadius: '12px',
//               border: '1px solid rgba(255, 255, 255, 0.1)',
//               textAlign: 'center'
//             }}>
//               <div style={{
//                 fontSize: '0.875rem',
//                 fontWeight: '600',
//                 color: 'rgba(255, 255, 255, 0.9)',
//                 textTransform: 'uppercase',
//                 letterSpacing: '0.1em',
//                 marginBottom: '0.5rem'
//               }}>
//                 SECURE PAYMENTS
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Right Column - Safety & Why */}
//         <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          
//           {/* Safety & Trust */}
//           <div className={`stats-card ${entered ? 'entered' : ''}`} style={{
//             transitionDelay: '500ms',
//             borderRadius: '24px',
//             padding: '2rem'
//           }}>
//             <h3 style={{
//               fontSize: '1.5rem',
//               fontWeight: 'bold',
//               color: 'white',
//               marginBottom: '1rem',
//               textShadow: '0 2px 4px rgba(0,0,0,0.2)'
//             }}>
//               Safety & Trust
//             </h3>
            
//             <p style={{
//               color: 'rgba(255, 255, 255, 0.9)',
//               lineHeight: '1.6',
//               marginBottom: '1.5rem',
//               fontSize: '0.95rem'
//             }}>
//               Explore a diverse network of professionals eager to share their expertise, provide advice, and support you every step of the way.
//             </p>

//             <div style={{
//               display: 'flex',
//               alignItems: 'center',
//               gap: '1rem',
//               padding: '1rem',
//               background: 'rgba(255, 255, 255, 0.1)',
//               borderRadius: '12px',
//               border: '1px solid rgba(255, 255, 255, 0.2)'
//             }}>
//               <Shield style={{ width: '2rem', height: '2rem', color: '#10B981' }} />
//               <div>
//                 <div style={{ fontSize: '1rem', fontWeight: '600', color: 'white' }}>Verified Professionals</div>
//                 <div style={{ fontSize: '0.875rem', color: 'rgba(255, 255, 255, 0.8)' }}>
//                   All mentors are thoroughly vetted
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Why? Section */}
//           <div className={`stats-card ${entered ? 'entered' : ''}`} style={{
//             transitionDelay: '600ms',
//             borderRadius: '24px',
//             padding: '2rem'
//           }}>
//             <h3 style={{
//               fontSize: '1.5rem',
//               fontWeight: 'bold',
//               color: 'white',
//               marginBottom: '1.5rem',
//               textShadow: '0 2px 4px rgba(0,0,0,0.2)'
//             }}>
//               Why?
//             </h3>

//             {/* Rating */}
//             <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
//               <div className="metric-number" style={{
//                 fontSize: '3rem',
//                 fontWeight: 'bold'
//               }}>
//                 4.9
//               </div>
//               <div>
//                 <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '0.5rem' }}>
//                   {[1, 2, 3, 4, 5].map((star) => (
//                     <Star key={star} className="rating-star" style={{
//                       transitionDelay: `${700 + star * 100}ms`,
//                       width: '1.25rem',
//                       height: '1.25rem',
//                       fill: '#FBBF24',
//                       color: '#FBBF24'
//                     }} />
//                   ))}
//                 </div>
//                 <div style={{ fontSize: '0.875rem', color: 'rgba(255, 255, 255, 0.8)' }}>
//                   ALL VERSES
//                 </div>
//               </div>
//             </div>

//             {/* User List */}
//             <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
//               {[
               
//               ].map((user, index) => (
//                 <div key={index} className="user-avatar" style={{
//                   transitionDelay: `${800 + index * 100}ms`,
//                   display: 'flex',
//                   alignItems: 'center',
//                   gap: '1rem',
//                   padding: '0.75rem',
//                   background: 'rgba(255, 255, 255, 0.05)',
//                   borderRadius: '8px',
//                   border: '1px solid rgba(255, 255, 255, 0.1)'
//                 }}>
//                   <img 
//                     src={avatarImages[index % avatarImages.length]} 
//                     alt={user.name}
//                     style={{
//                       width: '2.5rem',
//                       height: '2.5rem',
//                       borderRadius: '50%',
//                       objectFit: 'cover'
//                     }}
//                   />
//                   <div style={{ flex: 1 }}>
//                     <div style={{ fontSize: '0.95rem', fontWeight: '600', color: 'white' }}>
//                       {user.name}
//                     </div>
//                     <div style={{ fontSize: '0.8rem', color: 'rgba(255, 255, 255, 0.7)' }}>
//                       {user.role}
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Helping Your Account */}
//             <div className="feature-icon" style={{
//               transitionDelay: '1200ms',
//               marginTop: '1.5rem',
//               padding: '1rem',
//               background: 'rgba(255, 255, 255, 0.1)',
//               borderRadius: '12px',
//               border: '1px solid rgba(255, 255, 255, 0.2)',
//               textAlign: 'center'
//             }}>
//               <div style={{ fontSize: '1rem', fontWeight: '600', color: 'white', marginBottom: '0.5rem' }}>
//                 Helping Your Account
//               </div>
//               <div style={{ fontSize: '0.875rem', color: 'rgba(255, 255, 255, 0.8)' }}>
//                 Professional support for your growth journey
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

'use client'

import { Shield, CheckCircle, Star, Users, TrendingUp, CreditCard, MessageCircle, ThumbsUp } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

export default function TestimonialsSection() {
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

  const avatarImages = [
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&auto=format&q=80",
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&auto=format&q=80",
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&auto=format&q=80",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&auto=format&q=80",
  ]

  const users = [
    { name: 'Lens R. Therman', role: 'Reacts' },
    
  ]

  return (
    <section ref={sectionRef} style={{
      background: 'white',
      minHeight: '100vh',
      padding: 'clamp(64px, 8vw, 120px) clamp(16px, 3vw, 40px)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      
      <style>{`
        .stats-card {
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
        
        .stats-card.entered {
          opacity: 1;
          transform: translateY(0);
        }
        
        .stats-card:hover {
          transform: translateY(-8px);
          background: linear-gradient(135deg, rgba(123, 47, 247, 0.2), rgba(58, 134, 255, 0.2));
          border: 1px solid rgba(123, 47, 247, 0.3);
          box-shadow: 
            0 20px 40px rgba(123, 47, 247, 0.15),
            0 0 60px rgba(58, 134, 255, 0.1);
          transition: all 600ms cubic-bezier(0.22, 0.9, 0.3, 1);
        }
        
        .stats-card::before {
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
        
        .stats-card:hover::before {
          opacity: 1;
        }

        .metric-number {
          background: linear-gradient(135deg, #7B2FF7, #3A86FF);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-fill-color: transparent;
          filter: drop-shadow(0 4px 8px rgba(0,0,0,0.1));
        }

        .trust-badge {
          transform: translateY(-20px) scale(0.8);
          opacity: 0;
          transition: all 800ms cubic-bezier(0.22, 0.9, 0.3, 1);
        }
        
        .stats-card.entered .trust-badge {
          transform: translateY(0) scale(1);
          opacity: 1;
        }

        .rating-star {
          transform: scale(0) rotate(180deg);
          opacity: 0;
          transition: all 700ms cubic-bezier(0.22, 0.9, 0.3, 1);
        }
        
        .stats-card.entered .rating-star {
          transform: scale(1) rotate(0deg);
          opacity: 1;
        }

        .user-avatar {
          transform: translateX(-40px);
          opacity: 0;
          transition: all 800ms cubic-bezier(0.22, 0.9, 0.3, 1);
        }
        
        .stats-card.entered .user-avatar {
          transform: translateX(0);
          opacity: 1;
        }

        .feature-icon {
          transform: translateX(-30px) scale(0.9);
          opacity: 0;
          transition: all 900ms cubic-bezier(0.22, 0.9, 0.3, 1);
        }
        
        .stats-card.entered .feature-icon {
          transform: translateX(0) scale(1);
          opacity: 1;
        }

        .slide-in-from-left {
          transform: translateX(-80px);
          opacity: 0;
          transition: all 1200ms cubic-bezier(0.22, 0.9, 0.3, 1);
        }
        
        .stats-card.entered .slide-in-from-left {
          transform: translateX(0);
          opacity: 1;
        }

        .slide-in-from-right {
          transform: translateX(80px);
          opacity: 0;
          transition: all 1200ms cubic-bezier(0.22, 0.9, 0.3, 1);
        }
        
        .stats-card.entered .slide-in-from-right {
          transform: translateX(0);
          opacity: 1;
        }

        .slide-in-from-bottom {
          transform: translateY(40px);
          opacity: 0;
          transition: all 1100ms cubic-bezier(0.22, 0.9, 0.3, 1);
        }
        
        .stats-card.entered .slide-in-from-bottom {
          transform: translateY(0);
          opacity: 1;
        }

        @media (prefers-reduced-motion: reduce) {
          .stats-card, .trust-badge, .rating-star, .user-avatar, .feature-icon,
          .slide-in-from-left, .slide-in-from-right, .slide-in-from-bottom {
            transition: none !important;
            transform: none !important;
            opacity: 1 !important;
          }
        }
        
        @media (max-width: 1024px) {
          .testimonial-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        
        @media (max-width: 768px) {
          .testimonial-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
      
      <div className="testimonial-grid" style={{
        maxWidth: '1400px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '32px',
        position: 'relative',
        zIndex: 10
      }}>
        
        {/* Left Column - Stats & Trust */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          
          {/* 28k Verified Mentions */}
          <div className={`stats-card ${entered ? 'entered' : ''}`} style={{
            transitionDelay: '0ms',
            borderRadius: '24px',
            padding: '2.5rem 2rem',
            textAlign: 'center',
            minHeight: '200px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <div className="metric-number" style={{
              fontSize: '4.5rem',
              fontWeight: 'bold',
              lineHeight: '1',
              marginBottom: '1rem'
            }}>
              28k
            </div>
            <div className="slide-in-from-bottom" style={{
              fontSize: '1.25rem',
              fontWeight: '600',
              color: '#1f2937',
              transitionDelay: '400ms'
            }}>
              Verified Mentions
            </div>
            <div className="trust-badge" style={{
              position: 'absolute',
              top: '1rem',
              right: '1rem',
              background: 'linear-gradient(135deg, #7B2FF7, #3A86FF)',
              borderRadius: '50%',
              width: '2.5rem',
              height: '2.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transitionDelay: '600ms'
            }}>
              <CheckCircle style={{ width: '1.5rem', height: '1.5rem', color: 'white' }} />
            </div>
          </div>

          {/* 28gk Gigs Registered */}
          <div className={`stats-card ${entered ? 'entered' : ''}`} style={{
            transitionDelay: '200ms',
            borderRadius: '24px',
            padding: '2.5rem 2rem',
            textAlign: 'center',
            minHeight: '200px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <div className="metric-number" style={{
              fontSize: '4.5rem',
              fontWeight: 'bold',
              lineHeight: '1',
              marginBottom: '1rem'
            }}>
              28gk
            </div>
            <div className="slide-in-from-bottom" style={{
              fontSize: '1.25rem',
              fontWeight: '600',
              color: '#1f2937',
              transitionDelay: '600ms'
            }}>
              Gigs Registered
            </div>
          </div>

          {/* Trust Signals - OVER 16K CLIENTS */}
          <div className={`stats-card ${entered ? 'entered' : ''}`} style={{
            transitionDelay: '400ms',
            borderRadius: '24px',
            padding: '2rem',
            textAlign: 'center'
          }}>
            <h3 className="slide-in-from-left" style={{
              transitionDelay: '600ms',
              fontSize: '0.875rem',
              fontWeight: '600',
              color: '#6b7280',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              marginBottom: '1rem'
            }}>
              Trust Signals
            </h3>
            <div className="slide-in-from-right" style={{
              transitionDelay: '800ms',
              fontSize: '2.5rem',
              fontWeight: 'bold',
              color: '#1f2937',
              marginBottom: '1.5rem'
            }}>
              OVER 16K CLIENTS
            </div>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '1rem',
              flexWrap: 'wrap'
            }}>
              {['Google', 'Meta', 'Apple', 'Netflix'].map((brand, i) => (
                <div key={brand} className="trust-badge" style={{
                  transitionDelay: `${1000 + i * 150}ms`,
                  padding: '0.75rem 1rem',
                  background: 'linear-gradient(135deg, rgba(123, 47, 247, 0.1), rgba(58, 134, 255, 0.1))',
                  borderRadius: '12px',
                  border: '1px solid rgba(123, 47, 247, 0.2)',
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  color: '#7B2FF7'
                }}>
                  {brand}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Center Column - Answer & Protection */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          
          {/* Answer Section */}
          <div className={`stats-card ${entered ? 'entered' : ''}`} style={{
            transitionDelay: '100ms',
            borderRadius: '24px',
            padding: '2rem'
          }}>
            <h3 className="slide-in-from-left" style={{
              transitionDelay: '500ms',
              fontSize: '1.5rem',
              fontWeight: 'bold',
              color: '#1f2937',
              marginBottom: '1.5rem'
            }}>
              Answer
            </h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div className="feature-icon" style={{
                transitionDelay: '700ms',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                padding: '1rem',
                background: 'rgba(123, 47, 247, 0.08)',
                borderRadius: '12px',
                border: '1px solid rgba(123, 47, 247, 0.15)'
              }}>
                <ThumbsUp style={{ width: '1.5rem', height: '1.5rem', color: '#7B2FF7' }} />
                <span style={{ color: '#1f2937', fontWeight: '500' }}>yeshoot</span>
              </div>
              
              <div className="feature-icon" style={{
                transitionDelay: '900ms',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                padding: '1rem',
                background: 'rgba(58, 134, 255, 0.08)',
                borderRadius: '12px',
                border: '1px solid rgba(58, 134, 255, 0.15)'
              }}>
                <MessageCircle style={{ width: '1.5rem', height: '1.5rem', color: '#3A86FF' }} />
                <span style={{ color: '#1f2937', fontWeight: '500' }}>Answer</span>
              </div>
            </div>
          </div>

          {/* Question Protection */}
          <div className={`stats-card ${entered ? 'entered' : ''}`} style={{
            transitionDelay: '300ms',
            borderRadius: '24px',
            padding: '2rem'
          }}>
            <h3 className="slide-in-from-right" style={{
              transitionDelay: '700ms',
              fontSize: '1.25rem',
              fontWeight: 'bold',
              color: '#1f2937',
              marginBottom: '0.5rem'
            }}>
              Question Protection
            </h3>
            
            <div className="feature-icon" style={{
              transitionDelay: '900ms',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              marginBottom: '1.5rem',
              padding: '1rem',
              background: 'rgba(123, 47, 247, 0.08)',
              borderRadius: '12px',
              border: '1px solid rgba(123, 47, 247, 0.15)'
            }}>
              <CreditCard style={{ width: '2rem', height: '2rem', color: '#7B2FF7' }} />
              <div>
                <div style={{ fontSize: '1rem', fontWeight: '600', color: '#1f2937' }}>Secure Payments</div>
                <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>
                  We will keep tracking your all payments to make it safe.
                </div>
              </div>
            </div>

            <div className="slide-in-from-bottom" style={{
              transitionDelay: '1100ms',
              padding: '1.5rem',
              background: 'rgba(58, 134, 255, 0.08)',
              borderRadius: '12px',
              border: '1px solid rgba(58, 134, 255, 0.15)',
              textAlign: 'center'
            }}>
              <div style={{
                fontSize: '0.875rem',
                fontWeight: '600',
                color: '#3A86FF',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                marginBottom: '0.5rem'
              }}>
                SECURE PAYMENTS
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Safety & Why */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          
          {/* Safety & Trust */}
          <div className={`stats-card ${entered ? 'entered' : ''}`} style={{
            transitionDelay: '500ms',
            borderRadius: '24px',
            padding: '2rem'
          }}>
            <h3 className="slide-in-from-right" style={{
              transitionDelay: '800ms',
              fontSize: '1.5rem',
              fontWeight: 'bold',
              color: '#1f2937',
              marginBottom: '1rem'
            }}>
              Safety & Trust
            </h3>
            
            <p className="slide-in-from-left" style={{
              transitionDelay: '1000ms',
              color: '#6b7280',
              lineHeight: '1.6',
              marginBottom: '1.5rem',
              fontSize: '0.95rem'
            }}>
              Explore a diverse network of professionals eager to share their expertise, provide advice, and support you every step of the way.
            </p>

            <div className="feature-icon" style={{
              transitionDelay: '1200ms',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              padding: '1rem',
              background: 'rgba(16, 185, 129, 0.08)',
              borderRadius: '12px',
              border: '1px solid rgba(16, 185, 129, 0.15)'
            }}>
              <Shield style={{ width: '2rem', height: '2rem', color: '#10B981' }} />
              <div>
                <div style={{ fontSize: '1rem', fontWeight: '600', color: '#1f2937' }}>Verified Professionals</div>
                <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>
                  All mentors are thoroughly vetted
                </div>
              </div>
            </div>
          </div>

          {/* Why? Section */}
          <div className={`stats-card ${entered ? 'entered' : ''}`} style={{
            transitionDelay: '700ms',
            borderRadius: '24px',
            padding: '2rem'
          }}>
            <h3 className="slide-in-from-left" style={{
              transitionDelay: '1000ms',
              fontSize: '1.5rem',
              fontWeight: 'bold',
              color: '#1f2937',
              marginBottom: '1.5rem'
            }}>
              Why?
            </h3>

            {/* Rating */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <div className="metric-number slide-in-from-bottom" style={{
                transitionDelay: '1200ms',
                fontSize: '3rem',
                fontWeight: 'bold'
              }}>
                4.9
              </div>
              <div>
                <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '0.5rem' }}>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="rating-star" style={{
                      transitionDelay: `${1400 + star * 100}ms`,
                      width: '1.25rem',
                      height: '1.25rem',
                      fill: '#FBBF24',
                      color: '#FBBF24'
                    }} />
                  ))}
                </div>
                <div className="slide-in-from-right" style={{
                  transitionDelay: '1500ms',
                  fontSize: '0.875rem',
                  color: '#6b7280'
                }}>
                  ALL VERSES
                </div>
              </div>
            </div>

            {/* User List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {users.map((user, index) => (
                <div key={index} className="user-avatar" style={{
                  transitionDelay: `${1600 + index * 150}ms`,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: '0.75rem',
                  background: 'rgba(123, 47, 247, 0.05)',
                  borderRadius: '8px',
                  border: '1px solid rgba(123, 47, 247, 0.1)'
                }}>
                  <img 
                    src={avatarImages[index % avatarImages.length]} 
                    alt={user.name}
                    style={{
                      width: '2.5rem',
                      height: '2.5rem',
                      borderRadius: '50%',
                      objectFit: 'cover'
                    }}
                  />
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '0.95rem', fontWeight: '600', color: '#1f2937' }}>
                      {user.name}
                    </div>
                    <div style={{ fontSize: '0.8rem', color: '#6b7280' }}>
                      {user.role}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Helping Your Account */}
            <div className="feature-icon" style={{
              transitionDelay: '2200ms',
              marginTop: '1.5rem',
              padding: '1rem',
              background: 'linear-gradient(135deg, rgba(123, 47, 247, 0.1), rgba(58, 134, 255, 0.1))',
              borderRadius: '12px',
              border: '1px solid rgba(123, 47, 247, 0.2)',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '1rem', fontWeight: '600', color: '#1f2937', marginBottom: '0.5rem' }}>
                Helping Your Account
              </div>
              <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>
                Professional support for your growth journey
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}