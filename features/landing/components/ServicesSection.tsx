
// // // 'use client'

// // // import { MessageSquare, CheckSquare, Calendar, TrendingUp } from 'lucide-react'
// // // import { useEffect, useRef, useState } from 'react'

// // // export default function ServicesSection() {
// // //   const [entered, setEntered] = useState(false)
// // //   const [hoveredTile, setHoveredTile] = useState<number | null>(null)
// // //   const sectionRef = useRef<HTMLElement | null>(null)

// // //   useEffect(() => {
// // //     const observer = new IntersectionObserver(
// // //       (entries) => {
// // //         entries.forEach((entry) => {
// // //           if (entry.isIntersecting) {
// // //             setEntered(true)
// // //             observer.unobserve(entry.target)
// // //           }
// // //         })
// // //       },
// // //       { threshold: 0.15 }
// // //     )

// // //     if (sectionRef.current) {
// // //       observer.observe(sectionRef.current)
// // //     }

// // //     return () => observer.disconnect()
// // //   }, [])

// // //   const tiles = [
// // //     {
// // //       id: 1,
// // //       title: "Built-In Team Chat",
// // //       subtitle: "Real-time collaboration with your mentor",
// // //       imageUrl: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=600&fit=crop&auto=format&q=80",
// // //       icon: MessageSquare,
// // //       position: 'top-left'
// // //     },
// // //     {
// // //       id: 2,
// // //       title: "Task Assignment",
// // //       subtitle: "Structured goals and milestones",
// // //       icon: CheckSquare,
// // //       position: 'top-right'
// // //     },
// // //     {
// // //       id: 3,
// // //       title: "Real-Time Scheduling",
// // //       subtitle: "Flexible booking system",
// // //       icon: Calendar,
// // //       position: 'bottom-left'
// // //     },
// // //     {
// // //       id: 4,
// // //       title: "Progress Tracking",
// // //       subtitle: "Monitor your growth journey",
// // //       imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop&auto=format&q=80",
// // //       icon: TrendingUp,
// // //       position: 'bottom-right'
// // //     }
// // //   ]

// // //   return (
// // //     <section ref={sectionRef} style={{
// // //       background: 'white',
// // //       padding: 'clamp(64px, 8vw, 120px) clamp(16px, 3vw, 40px)'
// // //     }}>
// // //       <style>{`
// // //         .feature-tile {
// // //           transform: translateY(18px);
// // //           opacity: 0;
// // //           transition: transform 380ms cubic-bezier(.22,.9,.3,1), opacity 320ms ease-out;
// // //           will-change: transform, opacity;
// // //           position: relative;
// // //           overflow: hidden;
// // //         }
// // //         .feature-tile.entered {
// // //           transform: translateY(0);
// // //           opacity: 1;
// // //         }
// // //         .feature-tile:hover {
// // //           transform: translateY(-4px);
// // //           transition: transform 180ms cubic-bezier(.22,.9,.3,1);
// // //         }
        
// // //         .tile-background {
// // //           transition: transform 900ms ease-out;
// // //         }
// // //         .feature-tile:hover .tile-background {
// // //           transform: scale(1.03);
// // //         }
        
// // //         @media (prefers-reduced-motion: reduce) {
// // //           .feature-tile, .tile-background {
// // //             transition: none !important;
// // //             transform: none !important;
// // //             opacity: 1 !important;
// // //           }
// // //         }
        
// // //         @media (max-width: 1024px) {
// // //           .feature-grid {
// // //             grid-template-columns: repeat(6, 1fr) !important;
// // //           }
// // //           .tile-7 { grid-column: span 6 !important; }
// // //           .tile-5 { grid-column: span 6 !important; }
// // //         }
        
// // //         @media (max-width: 768px) {
// // //           .feature-grid {
// // //             grid-template-columns: 1fr !important;
// // //           }
// // //           .tile-7, .tile-5 { grid-column: span 1 !important; }
// // //         }
// // //       `}</style>
        
// // //       <div style={{
// // //         maxWidth: '1200px',
// // //         margin: '0 auto'
// // //       }}>
// // //         {/* 2×2 Feature Collage */}
// // //         <div className={`feature-grid`} style={{
// // //           display: 'grid',
// // //           gridTemplateColumns: 'repeat(12, 1fr)',
// // //           gap: '24px'
// // //         }}>
// // //           {/* Top-Left Tile - 7 columns */}
// // //           <div 
// // //             className={`feature-tile tile-7 ${entered ? 'entered' : ''}`}
// // //             onMouseEnter={() => setHoveredTile(1)}
// // //             onMouseLeave={() => setHoveredTile(null)}
// // //             style={{
// // //               gridColumn: 'span 7',
// // //               minHeight: '300px',
// // //               transitionDelay: '0ms'
// // //             }}
// // //           >
// // //             <div 
// // //               className="tile-background"
// // //               style={{
// // //                 position: 'absolute',
// // //                 inset: 0,
// // //                 backgroundImage: `url(${tiles[0].imageUrl})`,
// // //                 backgroundSize: 'cover',
// // //                 backgroundPosition: 'center'
// // //               }}
// // //             />
// // //               <div style={{
// // //               position: 'absolute',
// // //               inset: 0,
// // //               background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 50%)'
// // //             }} />
// // //                 <div style={{
// // //               position: 'absolute',
// // //               bottom: '24px',
// // //               left: '24px',
// // //               color: 'white',
// // //               zIndex: 2
// // //             }}>
// // //                   <h3 style={{
// // //                 fontSize: '1.5rem',
// // //                     fontWeight: '600',
// // //                 marginBottom: '8px',
// // //                 lineHeight: '1.2'
// // //               }}>
// // //                 {tiles[0].title}
// // //                   </h3>
// // //               <p style={{
// // //                 fontSize: '0.875rem',
// // //                 opacity: 0.9,
// // //                 lineHeight: '1.4'
// // //               }}>
// // //                 {tiles[0].subtitle}
// // //               </p>
// // //                 </div>
// // //               </div>

// // //           {/* Top-Right Tile - 5 columns */}
// // //           <div 
// // //             className={`feature-tile tile-5 ${entered ? 'entered' : ''}`}
// // //             onMouseEnter={() => setHoveredTile(2)}
// // //             onMouseLeave={() => setHoveredTile(null)}
// // //             style={{
// // //               gridColumn: 'span 5',
// // //               minHeight: '300px',
// // //               background: 'linear-gradient(135deg, #f0f9ff, #e0e7ff)',
// // //               borderRadius: '20px',
// // //               padding: '24px',
// // //               display: 'flex',
// // //               flexDirection: 'column',
// // //               alignItems: 'flex-end',
// // //               justifyContent: 'flex-end',
// // //               transitionDelay: '80ms'
// // //             }}
// // //           >
// // //             <div style={{ textAlign: 'right' }}>
// // //               <h3 style={{
// // //                 fontSize: '1.5rem',
// // //                 fontWeight: '600',
// // //                 color: '#1e293b',
// // //                 marginBottom: '8px',
// // //                 lineHeight: '1.2'
// // //               }}>
// // //                 {tiles[1].title}
// // //               </h3>
// // //                 <p style={{
// // //                 fontSize: '0.875rem',
// // //                 color: '#64748b',
// // //                 lineHeight: '1.4'
// // //               }}>
// // //                 {tiles[1].subtitle}
// // //                 </p>
// // //               </div>
// // //           </div>

// // //           {/* Bottom-Left Tile - 5 columns */}
// // //           <div 
// // //             className={`feature-tile tile-5 ${entered ? 'entered' : ''}`}
// // //             onMouseEnter={() => setHoveredTile(3)}
// // //             onMouseLeave={() => setHoveredTile(null)}
// // //             style={{
// // //               gridColumn: 'span 5',
// // //               minHeight: '240px',
// // //               background: 'linear-gradient(135deg, #fef3c7, #fde68a)',
// // //               borderRadius: '20px',
// // //               padding: '24px',
// // //               display: 'flex',
// // //               flexDirection: 'column',
// // //               justifyContent: 'flex-end',
// // //               transitionDelay: '40ms'
// // //             }}
// // //           >
// // //             <h3 style={{
// // //               fontSize: '1.5rem',
// // //               fontWeight: '600',
// // //               color: '#1e293b',
// // //               lineHeight: '1.2'
// // //             }}>
// // //               {tiles[2].title}
// // //             </h3>
// // //           </div>

// // //           {/* Bottom-Right Tile - 7 columns */}
// // //           <div 
// // //             className={`feature-tile tile-7 ${entered ? 'entered' : ''}`}
// // //             onMouseEnter={() => setHoveredTile(4)}
// // //             onMouseLeave={() => setHoveredTile(null)}
// // //             style={{
// // //               gridColumn: 'span 7',
// // //               minHeight: '240px',
// // //               background: 'linear-gradient(135deg, #ecfdf5, #d1fae5)',
// // //               borderRadius: '20px',
// // //               padding: '24px',
// // //               position: 'relative',
// // //               transitionDelay: '120ms'
// // //             }}
// // //           >
// // //             {/* Circular Portrait */}
// // //             <div style={{
// // //               position: 'absolute',
// // //               right: '32px',
// // //               bottom: '32px',
// // //               width: 'clamp(200px, 48%, 220px)',
// // //               height: 'clamp(200px, 48%, 220px)',
// // //               borderRadius: '50%',
// // //               backgroundImage: `url(${tiles[3].imageUrl})`,
// // //               backgroundSize: 'cover',
// // //               backgroundPosition: 'center',
// // //               boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
// // //               transform: hoveredTile === 4 ? 'scale(1.02)' : 'scale(1)',
// // //               transition: 'transform 300ms ease-out'
// // //             }} />
            
// // //             <div style={{ position: 'relative', zIndex: 2 }}>
// // //               <h3 style={{
// // //                 fontSize: '1.5rem',
// // //                 fontWeight: '600',
// // //                 color: '#1e293b',
// // //                 marginBottom: '8px',
// // //                 lineHeight: '1.2'
// // //               }}>
// // //                 {tiles[3].title}
// // //               </h3>
// // //               <p style={{
// // //                 fontSize: '0.875rem',
// // //                 color: '#64748b',
// // //                 lineHeight: '1.4'
// // //               }}>
// // //                 {tiles[3].subtitle}
// // //               </p>
// // //             </div>
// // //           </div>
// // //       </div>
// // //       </div>
// // //     </section>
// // //   )
// // // }
// // 'use client'

// // import { MessageSquare, CheckSquare, Calendar, TrendingUp } from 'lucide-react'
// // import { useEffect, useRef, useState } from 'react'

// // export default function ServicesSection() {
// //   const [entered, setEntered] = useState(false)
// //   const [hoveredTile, setHoveredTile] = useState<number | null>(null)
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

// //   const tiles = [
// //     {
// //       id: 1,
// //       title: "Built-In Team Chat",
// //       subtitle: "Real-time collaboration with your mentor",
// //       imageUrl: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=600&fit=crop&auto=format&q=80",
// //       icon: MessageSquare,
// //       position: 'top-left'
// //     },
// //     {
// //       id: 2,
// //       title: "Task Assignment",
// //       subtitle: "Structured goals and milestones",
// //       icon: CheckSquare,
// //       position: 'top-right'
// //     },
// //     {
// //       id: 3,
// //       title: "Real-Time Scheduling",
// //       subtitle: "Flexible booking system",
// //       icon: Calendar,
// //       position: 'bottom-left'
// //     },
// //     {
// //       id: 4,
// //       title: "Progress Tracking",
// //       subtitle: "Monitor your growth journey",
// //       imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop&auto=format&q=80",
// //       icon: TrendingUp,
// //       position: 'bottom-right'
// //     }
// //   ]

// //   return (
// //     <section ref={sectionRef} style={{
// //       background: 'white',
// //       padding: 'clamp(64px, 8vw, 120px) clamp(16px, 3vw, 40px)'
// //     }}>
// //       <style>{`
// //         /* Content slide-in animations */
// //         .content-top-left {
// //           transform: translate(-50px, -50px);
// //           opacity: 0;
// //           transition: transform 800ms cubic-bezier(.22,.9,.3,1), opacity 600ms ease-out;
// //         }
// //         .entered .content-top-left {
// //           transform: translate(0, 0);
// //           opacity: 1;
// //         }

// //         .content-top-right {
// //           transform: translate(50px, -50px);
// //           opacity: 0;
// //           transition: transform 800ms cubic-bezier(.22,.9,.3,1), opacity 600ms ease-out;
// //           transition-delay: 150ms;
// //         }
// //         .entered .content-top-right {
// //           transform: translate(0, 0);
// //           opacity: 1;
// //         }

// //         .content-bottom-left {
// //           transform: translate(-50px, 50px);
// //           opacity: 0;
// //           transition: transform 800ms cubic-bezier(.22,.9,.3,1), opacity 600ms ease-out;
// //           transition-delay: 300ms;
// //         }
// //         .entered .content-bottom-left {
// //           transform: translate(0, 0);
// //           opacity: 1;
// //         }

// //         .content-bottom-right {
// //           transform: translate(50px, 50px);
// //           opacity: 0;
// //           transition: transform 800ms cubic-bezier(.22,.9,.3,1), opacity 600ms ease-out;
// //           transition-delay: 450ms;
// //         }
// //         .entered .content-bottom-right {
// //           transform: translate(0, 0);
// //           opacity: 1;
// //         }

// //         /* Background image slide-in */
// //         .tile-background {
// //           transform: scale(1.1);
// //           opacity: 0;
// //           transition: transform 1200ms ease-out, opacity 900ms ease-out;
// //         }
// //         .entered .tile-background {
// //           transform: scale(1);
// //           opacity: 1;
// //         }

// //         /* Circular image slide-in */
// //         .circular-image {
// //           transform: translate(80px, 80px) scale(0.8);
// //           opacity: 0;
// //           transition: transform 1000ms cubic-bezier(.22,.9,.3,1), opacity 800ms ease-out;
// //           transition-delay: 600ms;
// //         }
// //         .entered .circular-image {
// //           transform: translate(0, 0) scale(1);
// //           opacity: 1;
// //         }

// //         /* Common hover effects */
// //         .feature-tile {
// //           position: relative;
// //           overflow: hidden;
// //           transition: transform 300ms cubic-bezier(.22,.9,.3,1);
// //         }
        
// //         .feature-tile:hover {
// //           transform: translateY(-8px);
// //         }
        
// //         .feature-tile:hover .tile-background {
// //           transform: scale(1.08);
// //         }
        
// //         .feature-tile:hover .circular-image {
// //           transform: scale(1.02);
// //         }
        
// //         /* Accessibility */
// //         @media (prefers-reduced-motion: reduce) {
// //           .content-top-left,
// //           .content-top-right,
// //           .content-bottom-left,
// //           .content-bottom-right,
// //           .tile-background,
// //           .circular-image,
// //           .feature-tile {
// //             transition: none !important;
// //             transform: none !important;
// //             opacity: 1 !important;
// //           }
// //         }
        
// //         /* Responsive grid */
// //         @media (max-width: 1024px) {
// //           .feature-grid {
// //             grid-template-columns: repeat(6, 1fr) !important;
// //           }
// //           .tile-7 { grid-column: span 6 !important; }
// //           .tile-5 { grid-column: span 6 !important; }
// //         }
        
// //         @media (max-width: 768px) {
// //           .feature-grid {
// //             grid-template-columns: 1fr !important;
// //           }
// //           .tile-7, .tile-5 { grid-column: span 1 !important; }
          
// //           /* Mobile: all content slides up from bottom */
// //           .content-top-left,
// //           .content-top-right,
// //           .content-bottom-left,
// //           .content-bottom-right {
// //             transform: translateY(40px);
// //             opacity: 0;
// //             transition: transform 600ms cubic-bezier(.22,.9,.3,1), opacity 500ms ease-out;
// //           }
// //           .entered .content-top-left,
// //           .entered .content-top-right,
// //           .entered .content-bottom-left,
// //           .entered .content-bottom-right {
// //             transform: translateY(0);
// //             opacity: 1;
// //           }
// //         }
// //       `}</style>
        
// //       <div style={{
// //         maxWidth: '1200px',
// //         margin: '0 auto'
// //       }}>
// //         {/* 2×2 Feature Collage */}
// //         <div className={`feature-grid ${entered ? 'entered' : ''}`} style={{
// //           display: 'grid',
// //           gridTemplateColumns: 'repeat(12, 1fr)',
// //           gap: '24px'
// //         }}>
// //           {/* Top-Left Tile - 7 columns */}
// //           <div 
// //             className="feature-tile tile-7"
// //             onMouseEnter={() => setHoveredTile(1)}
// //             onMouseLeave={() => setHoveredTile(null)}
// //             style={{
// //               gridColumn: 'span 7',
// //               minHeight: '300px',
// //               borderRadius: '20px',
// //               position: 'relative',
// //               overflow: 'hidden'
// //             }}
// //           >
// //             <div 
// //               className="tile-background"
// //               style={{
// //                 position: 'absolute',
// //                 inset: 0,
// //                 backgroundImage: `url(${tiles[0].imageUrl})`,
// //                 backgroundSize: 'cover',
// //                 backgroundPosition: 'center'
// //               }}
// //             />
// //             <div style={{
// //               position: 'absolute',
// //               inset: 0,
// //               background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 50%)'
// //             }} />
// //             <div className="content-top-left" style={{
// //               position: 'absolute',
// //               bottom: '24px',
// //               left: '24px',
// //               color: 'white',
// //               zIndex: 2
// //             }}>
// //               <h3 style={{
// //                 fontSize: '1.5rem',
// //                 fontWeight: '600',
// //                 marginBottom: '8px',
// //                 lineHeight: '1.2'
// //               }}>
// //                 {tiles[0].title}
// //               </h3>
// //               <p style={{
// //                 fontSize: '0.875rem',
// //                 opacity: 0.9,
// //                 lineHeight: '1.4'
// //               }}>
// //                 {tiles[0].subtitle}
// //               </p>
// //             </div>
// //           </div>

// //           {/* Top-Right Tile - 5 columns */}
// //           <div 
// //             className="feature-tile tile-5"
// //             onMouseEnter={() => setHoveredTile(2)}
// //             onMouseLeave={() => setHoveredTile(null)}
// //             style={{
// //               gridColumn: 'span 5',
// //               minHeight: '300px',
// //               background: 'linear-gradient(135deg, #f0f9ff, #e0e7ff)',
// //               borderRadius: '20px',
// //               padding: '24px',
// //               display: 'flex',
// //               flexDirection: 'column',
// //               alignItems: 'flex-end',
// //               justifyContent: 'flex-end'
// //             }}
// //           >
// //             <div className="content-top-right" style={{ textAlign: 'right' }}>
// //               <h3 style={{
// //                 fontSize: '1.5rem',
// //                 fontWeight: '600',
// //                 color: '#1e293b',
// //                 marginBottom: '8px',
// //                 lineHeight: '1.2'
// //               }}>
// //                 {tiles[1].title}
// //               </h3>
// //               <p style={{
// //                 fontSize: '0.875rem',
// //                 color: '#64748b',
// //                 lineHeight: '1.4'
// //               }}>
// //                 {tiles[1].subtitle}
// //               </p>
// //             </div>
// //           </div>

// //           {/* Bottom-Left Tile - 5 columns */}
// //           <div 
// //             className="feature-tile tile-5"
// //             onMouseEnter={() => setHoveredTile(3)}
// //             onMouseLeave={() => setHoveredTile(null)}
// //             style={{
// //               gridColumn: 'span 5',
// //               minHeight: '240px',
// //               background: 'linear-gradient(135deg, #fef3c7, #fde68a)',
// //               borderRadius: '20px',
// //               padding: '24px',
// //               display: 'flex',
// //               flexDirection: 'column',
// //               justifyContent: 'flex-end'
// //             }}
// //           >
// //             <div className="content-bottom-left">
// //               <h3 style={{
// //                 fontSize: '1.5rem',
// //                 fontWeight: '600',
// //                 color: '#1e293b',
// //                 lineHeight: '1.2'
// //               }}>
// //                 {tiles[2].title}
// //               </h3>
// //             </div>
// //           </div>

// //           {/* Bottom-Right Tile - 7 columns */}
// //           <div 
// //             className="feature-tile tile-7"
// //             onMouseEnter={() => setHoveredTile(4)}
// //             onMouseLeave={() => setHoveredTile(null)}
// //             style={{
// //               gridColumn: 'span 7',
// //               minHeight: '240px',
// //               background: 'linear-gradient(135deg, #ecfdf5, #d1fae5)',
// //               borderRadius: '20px',
// //               padding: '24px',
// //               position: 'relative'
// //             }}
// //           >
// //             {/* Circular Portrait */}
// //             <div className="circular-image" style={{
// //               position: 'absolute',
// //               right: '32px',
// //               bottom: '32px',
// //               width: 'clamp(200px, 48%, 220px)',
// //               height: 'clamp(200px, 48%, 220px)',
// //               borderRadius: '50%',
// //               backgroundImage: `url(${tiles[3].imageUrl})`,
// //               backgroundSize: 'cover',
// //               backgroundPosition: 'center',
// //               boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
// //               transition: 'transform 300ms ease-out'
// //             }} />
            
// //             <div className="content-bottom-right" style={{ position: 'relative', zIndex: 2 }}>
// //               <h3 style={{
// //                 fontSize: '1.5rem',
// //                 fontWeight: '600',
// //                 color: '#1e293b',
// //                 marginBottom: '8px',
// //                 lineHeight: '1.2'
// //               }}>
// //                 {tiles[3].title}
// //               </h3>
// //               <p style={{
// //                 fontSize: '0.875rem',
// //                 color: '#64748b',
// //                 lineHeight: '1.4'
// //               }}>
// //                 {tiles[3].subtitle}
// //               </p>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   )
// // }

// 'use client'

// import { MessageSquare, CheckSquare, Calendar, TrendingUp } from 'lucide-react'
// import { useEffect, useRef, useState } from 'react'

// export default function ServicesSection() {
//   const [entered, setEntered] = useState(false)
//   const [hoveredTile, setHoveredTile] = useState<number | null>(null)
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

//   const tiles = [
//     {
//       id: 1,
//       title: "Built-In Team Chat",
//       subtitle: "Real-time collaboration with your mentor",
//       imageUrl: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=600&fit=crop&auto=format&q=80",
//       icon: MessageSquare,
//       position: 'top-left'
//     },
//     {
//       id: 2,
//       title: "Task Assignment",
//       subtitle: "Structured goals and milestones",
//       icon: CheckSquare,
//       position: 'top-right'
//     },
//     {
//       id: 3,
//       title: "Real-Time Scheduling",
//       subtitle: "Flexible booking system",
//       icon: Calendar,
//       position: 'bottom-left'
//     },
//     {
//       id: 4,
//       title: "Progress Tracking",
//       subtitle: "Monitor your growth journey",
//       imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop&auto=format&q=80",
//       icon: TrendingUp,
//       position: 'bottom-right'
//     }
//   ]

//   return (
//     <section ref={sectionRef} style={{
//       background: 'white',
//       padding: 'clamp(64px, 8vw, 120px) clamp(16px, 3vw, 40px)',
      
//     }}>
//       <style>{`
//         /* Heading mask reveal */
//         .section-headline {
//           overflow: hidden;
//           text-align: center;
//         }
//         .section-headline .line {
//           display: inline-block;
//           transform: translateY(100%);
//           opacity: 0;
//           transition: transform 1200ms cubic-bezier(.16,.84,.35,1), opacity 520ms ease-out;
//           will-change: transform, opacity;
//         }
//         .section-headline.entered .line {
//           transform: translateY(0);
//           opacity: 1;
//         }

//         /* Content slide-in animations */
//         .content-top-left {
//           transform: translate(-50px, -50px);
//           opacity: 0;
//           transition: transform 800ms cubic-bezier(.22,.9,.3,1), opacity 600ms ease-out;
//         }
//         .entered .content-top-left {
//           transform: translate(0, 0);
//           opacity: 1;
//         }

//         .content-top-right {
//           transform: translate(50px, -50px);
//           opacity: 0;
//           transition: transform 800ms cubic-bezier(.22,.9,.3,1), opacity 600ms ease-out;
//           transition-delay: 150ms;
//         }
//         .entered .content-top-right {
//           transform: translate(0, 0);
//           opacity: 1;
//         }

//         .content-bottom-left {
//           transform: translate(-50px, 50px);
//           opacity: 0;
//           transition: transform 800ms cubic-bezier(.22,.9,.3,1), opacity 600ms ease-out;
//           transition-delay: 300ms;
//         }
//         .entered .content-bottom-left {
//           transform: translate(0, 0);
//           opacity: 1;
//         }

//         .content-bottom-right {
//           transform: translate(50px, 50px);
//           opacity: 0;
//           transition: transform 800ms cubic-bezier(.22,.9,.3,1), opacity 600ms ease-out;
//           transition-delay: 450ms;
//         }
//         .entered .content-bottom-right {
//           transform: translate(0, 0);
//           opacity: 1;
//         }

//         /* Background image slide-in */
//         .tile-background {
//           transform: scale(1.1);
//           opacity: 0;
//           transition: transform 1200ms ease-out, opacity 900ms ease-out;
//         }
//         .entered .tile-background {
//           transform: scale(1);
//           opacity: 1;
//         }

//         /* Circular image slide-in */
//         .circular-image {
//           transform: translate(80px, 80px) scale(0.8);
//           opacity: 0;
//           transition: transform 1000ms cubic-bezier(.22,.9,.3,1), opacity 800ms ease-out;
//           transition-delay: 600ms;
//         }
//         .entered .circular-image {
//           transform: translate(0, 0) scale(1);
//           opacity: 1;
//         }

//         /* Common hover effects */
//         .feature-tile {
//           position: relative;
//           overflow: hidden;
//           transition: transform 300ms cubic-bezier(.22,.9,.3,1);
//         }
        
//         .feature-tile:hover {
//           transform: translateY(-8px);
//         }
        
//         .feature-tile:hover .tile-background {
//           transform: scale(1.08);
//         }
        
//         .feature-tile:hover .circular-image {
//           transform: scale(1.02);
//         }
        
//         /* Accessibility */
//         @media (prefers-reduced-motion: reduce) {
//           .section-headline .line,
//           .content-top-left,
//           .content-top-right,
//           .content-bottom-left,
//           .content-bottom-right,
//           .tile-background,
//           .circular-image,
//           .feature-tile {
//             transition: none !important;
//             transform: none !important;
//             opacity: 1 !important;
//           }
//         }
        
//         /* Responsive grid */
//         @media (max-width: 1024px) {
//           .feature-grid {
//             grid-template-columns: repeat(6, 1fr) !important;
//           }
//           .tile-7 { grid-column: span 6 !important; }
//           .tile-5 { grid-column: span 6 !important; }
//         }
        
//         @media (max-width: 768px) {
//           .feature-grid {
//             grid-template-columns: 1fr !important;
//           }
//           .tile-7, .tile-5 { grid-column: span 1 !important; }
          
//           /* Mobile: all content slides up from bottom */
//           .content-top-left,
//           .content-top-right,
//           .content-bottom-left,
//           .content-bottom-right {
//             transform: translateY(40px);
//             opacity: 0;
//             transition: transform 600ms cubic-bezier(.22,.9,.3,1), opacity 500ms ease-out;
//           }
//           .entered .content-top-left,
//           .entered .content-top-right,
//           .entered .content-bottom-left,
//           .entered .content-bottom-right {
//             transform: translateY(0);
//             opacity: 1;
//           }
//         }
//       `}</style>
        
//       <div style={{
//         maxWidth: '1200px',
//         margin: '0 auto',
        
//       }}>
//         {/* Heading Section */}
//         <div style={{ textAlign: 'center', marginBottom: '80px' }}>
//           <h1 className={`section-headline ${entered ? 'entered' : ''}`} style={{
//             fontSize: '74px',
//             fontWeight: '700',
//             lineHeight: '1.1',
//             color: '#1e293b',
//             marginBottom: '24px',
//             maxWidth: '800px',
//             margin: '0 auto 24px',
//             position: 'relative',
//             zIndex: 2
//           }}>
    
//             <span 
//               className="line" 
//               style={{ 
//                 background: 'linear-gradient(90deg, #3A86FF 0%, #7B2FF7 100%)', 
//                 WebkitBackgroundClip: 'text', 
//                 backgroundClip: 'text', 
//                 WebkitTextFillColor: 'transparent', 
//                 transitionDelay: '70ms' 
//               }}
//             >
//              Who we  are?
//             </span>
//           </h1>
//         </div>

//         {/* 2×2 Feature Collage */}
//         <div className={`feature-grid ${entered ? 'entered' : ''}`} style={{
//           display: 'grid',
//           gridTemplateColumns: 'repeat(12, 1fr)',
//           gap: '24px'
//         }}>
//           {/* Top-Left Tile - 7 columns */}
//           <div 
//             className="feature-tile tile-7"
//             onMouseEnter={() => setHoveredTile(1)}
//             onMouseLeave={() => setHoveredTile(null)}
//             style={{
//               gridColumn: 'span 7',
//               minHeight: '300px',
//               borderRadius: '20px',
//               position: 'relative',
//               overflow: 'hidden'
//             }}
//           >
//             <div 
//               className="tile-background"
//               style={{
//                 position: 'absolute',
//                 inset: 0,
//                 backgroundImage: `url(${tiles[0].imageUrl})`,
//                 backgroundSize: 'cover',
//                 backgroundPosition: 'center'
//               }}
//             />
//             <div style={{
//               position: 'absolute',
//               inset: 0,
//               background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 50%)'
//             }} />
//             <div className="content-top-left" style={{
//               position: 'absolute',
//               bottom: '24px',
//               left: '24px',
//               color: 'white',
//               zIndex: 2
//             }}>
//               <h3 style={{
//                 fontSize: '1.5rem',
//                 fontWeight: '600',
//                 marginBottom: '8px',
//                 lineHeight: '1.2'
//               }}>
//                 {tiles[0].title}
//               </h3>
//               <p style={{
//                 fontSize: '0.875rem',
//                 opacity: 0.9,
//                 lineHeight: '1.4'
//               }}>
//                 {tiles[0].subtitle}
//               </p>
//             </div>
//           </div>

//           {/* Top-Right Tile - 5 columns */}
//           <div 
//             className="feature-tile tile-5"
//             onMouseEnter={() => setHoveredTile(2)}
//             onMouseLeave={() => setHoveredTile(null)}
//             style={{
//               gridColumn: 'span 5',
//               minHeight: '300px',
//               background: 'linear-gradient(135deg, #f0f9ff, #e0e7ff)',
//               borderRadius: '20px',
//               padding: '24px',
//               display: 'flex',
//               flexDirection: 'column',
//               alignItems: 'flex-end',
//               justifyContent: 'flex-end'
//             }}
//           >
//             <div className="content-top-right" style={{ textAlign: 'right' }}>
//               <h3 style={{
//                 fontSize: '1.5rem',
//                 fontWeight: '600',
//                 color: '#1e293b',
//                 marginBottom: '8px',
//                 lineHeight: '1.2'
//               }}>
//                 {tiles[1].title}
//               </h3>
//               <p style={{
//                 fontSize: '0.875rem',
//                 color: '#64748b',
//                 lineHeight: '1.4'
//               }}>
//                 {tiles[1].subtitle}
//               </p>
//             </div>
//           </div>

//           {/* Bottom-Left Tile - 5 columns */}
//           <div 
//             className="feature-tile tile-5"
//             onMouseEnter={() => setHoveredTile(3)}
//             onMouseLeave={() => setHoveredTile(null)}
//             style={{
//               gridColumn: 'span 5',
//               minHeight: '240px',
//               background: 'linear-gradient(135deg, #fef3c7, #fde68a)',
//               borderRadius: '20px',
//               padding: '24px',
//               display: 'flex',
//               flexDirection: 'column',
//               justifyContent: 'flex-end'
//             }}
//           >
//             <div className="content-bottom-left">
//               <h3 style={{
//                 fontSize: '1.5rem',
//                 fontWeight: '600',
//                 color: '#1e293b',
//                 lineHeight: '1.2'
//               }}>
//                 {tiles[2].title}
//               </h3>
//             </div>
//           </div>

//           {/* Bottom-Right Tile - 7 columns */}
//           <div 
//             className="feature-tile tile-7"
//             onMouseEnter={() => setHoveredTile(4)}
//             onMouseLeave={() => setHoveredTile(null)}
//             style={{
//               gridColumn: 'span 7',
//               minHeight: '240px',
//               background: 'linear-gradient(135deg, #ecfdf5, #d1fae5)',
//               borderRadius: '20px',
//               padding: '24px',
//               position: 'relative'
//             }}
//           >
//             {/* Circular Portrait */}
//             <div className="circular-image" style={{
//               position: 'absolute',
//               right: '32px',
//               bottom: '32px',
//               width: 'clamp(200px, 48%, 220px)',
//               height: 'clamp(200px, 48%, 220px)',
//               borderRadius: '50%',
//               backgroundImage: `url(${tiles[3].imageUrl})`,
//               backgroundSize: 'cover',
//               backgroundPosition: 'center',
//               boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
//               transition: 'transform 300ms ease-out'
//             }} />
            
//             <div className="content-bottom-right" style={{ position: 'relative', zIndex: 2 }}>
//               <h3 style={{
//                 fontSize: '1.5rem',
//                 fontWeight: '600',
//                 color: '#1e293b',
//                 marginBottom: '8px',
//                 lineHeight: '1.2'
//               }}>
//                 {tiles[3].title}
//               </h3>
//               <p style={{
//                 fontSize: '0.875rem',
//                 color: '#64748b',
//                 lineHeight: '1.4'
//               }}>
//                 {tiles[3].subtitle}
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

'use client'

import { MessageSquare, CheckSquare, Calendar, TrendingUp } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

export default function ServicesSection() {
  const [entered, setEntered] = useState(false)
  const [hoveredTile, setHoveredTile] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setEntered(true)
            observer.unobserve(entry.target)
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

  const tiles = [
    {
      id: 1,
      title: "Built-In Team Chat",
      subtitle: "Real-time collaboration with your mentor",
      imageUrl: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=600&fit=crop&auto=format&q=80",
      icon: MessageSquare,
      position: 'top-left'
    },
    {
      id: 2,
      title: "Task Assignment",
      subtitle: "Structured goals and milestones",
      icon: CheckSquare,
      position: 'top-right'
    },
    {
      id: 3,
      title: "Real-Time Scheduling",
      subtitle: "Flexible booking system",
      icon: Calendar,
      position: 'bottom-left'
    },
    {
      id: 4,
      title: "Progress Tracking",
      subtitle: "Monitor your growth journey",
      imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop&auto=format&q=80",
      icon: TrendingUp,
      position: 'bottom-right'
    }
  ]

  return (
    <section ref={sectionRef} style={{
      background: 'white',
      padding: 'clamp(64px, 8vw, 120px) clamp(16px, 3vw, 40px)',
      position: 'relative',
      overflow: 'hidden',
      zIndex: 10
    }}>
      {/* Gradient Glassmorphic Background Cards */}
      <div className={`glass-card-1 ${entered ? 'entered' : ''}`} style={{
        position: 'absolute',
        top: '10%',
        left: '10%',
        right: '10%',
        bottom: '10%',
        background: 'linear-gradient(135deg, rgba(58, 134, 255, 0.15), rgba(123, 47, 247, 0.15))',
        backdropFilter: 'blur(20px)',
        borderRadius: '32px',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        boxShadow: '0 25px 50px rgba(0, 0, 0, 0.1)',
        zIndex: 1,
        transitionDelay: '200ms'
      }} />

      <div className={`glass-card-2 ${entered ? 'entered' : ''}`} style={{
        position: 'absolute',
        top: '5%',
        left: '5%',
        right: '5%',
        bottom: '5%',
        background: 'linear-gradient(135deg, rgba(58, 134, 255, 0.1), rgba(123, 47, 247, 0.1))',
        backdropFilter: 'blur(30px)',
        borderRadius: '40px',
        border: '1px solid rgba(255, 255, 255, 0.3)',
        boxShadow: '0 35px 70px rgba(0, 0, 0, 0.15)',
        zIndex: 2,
        transitionDelay: '400ms'
      }} />
      <style>{`
        /* Heading mask reveal */
        .section-headline {
          overflow: hidden;
          text-align: center;
        }
        .section-headline .line {
          display: inline-block;
          transform: translateY(100%);
          opacity: 0;
          transition: transform 1200ms cubic-bezier(.16,.84,.35,1), opacity 520ms ease-out;
          will-change: transform, opacity;
        }
        .section-headline.entered .line {
          transform: translateY(0);
          opacity: 1;
        }

        /* Content slide-in animations */
        .content-top-left {
          transform: translate(-50px, -50px);
          opacity: 0;
          transition: transform 800ms cubic-bezier(.22,.9,.3,1), opacity 600ms ease-out;
        }
        .entered .content-top-left {
          transform: translate(0, 0);
          opacity: 1;
        }

        .content-top-right {
          transform: translate(50px, -50px);
          opacity: 0;
          transition: transform 800ms cubic-bezier(.22,.9,.3,1), opacity 600ms ease-out;
          transition-delay: 150ms;
        }
        .entered .content-top-right {
          transform: translate(0, 0);
          opacity: 1;
        }

        .content-bottom-left {
          transform: translate(-50px, 50px);
          opacity: 0;
          transition: transform 800ms cubic-bezier(.22,.9,.3,1), opacity 600ms ease-out;
          transition-delay: 300ms;
        }
        .entered .content-bottom-left {
          transform: translate(0, 0);
          opacity: 1;
        }

        .content-bottom-right {
          transform: translate(50px, 50px);
          opacity: 0;
          transition: transform 800ms cubic-bezier(.22,.9,.3,1), opacity 600ms ease-out;
          transition-delay: 450ms;
        }
        .entered .content-bottom-right {
          transform: translate(0, 0);
          opacity: 1;
        }

        /* Background image slide-in */
        .tile-background {
          transform: scale(1.1);
          opacity: 0;
          transition: transform 1200ms ease-out, opacity 900ms ease-out;
        }
        .entered .tile-background {
          transform: scale(1);
          opacity: 1;
        }

        /* Circular image slide-in */
        .circular-image {
          transform: translate(80px, 80px) scale(0.8);
          opacity: 0;
          transition: transform 1000ms cubic-bezier(.22,.9,.3,1), opacity 800ms ease-out;
          transition-delay: 600ms;
        }
        .entered .circular-image {
          transform: translate(0, 0) scale(1);
          opacity: 1;
        }

        /* Common hover effects */
        .feature-tile {
          position: relative;
          overflow: hidden;
          transition: transform 300ms cubic-bezier(.22,.9,.3,1);
        }
        
        .feature-tile:hover {
          transform: translateY(-8px);
        }
        
        .feature-tile:hover .tile-background {
          transform: scale(1.08);
        }
        
        .feature-tile:hover .circular-image {
          transform: scale(1.02);
        }

        /* Glassmorphic card animations */
        .glass-card-1 {
          transform: translateY(60px) scale(0.95);
          opacity: 0;
          transition: all 1000ms cubic-bezier(0.22, 0.9, 0.3, 1);
        }
        .entered .glass-card-1 {
          transform: translateY(0) scale(1);
          opacity: 1;
        }

        .glass-card-2 {
          transform: translateY(80px) scale(0.9);
          opacity: 0;
          transition: all 1200ms cubic-bezier(0.22, 0.9, 0.3, 1);
        }
        .entered .glass-card-2 {
          transform: translateY(0) scale(1);
          opacity: 1;
        }
        
        /* Accessibility */
        @media (prefers-reduced-motion: reduce) {
          .section-headline .line,
          .content-top-left,
          .content-top-right,
          .content-bottom-left,
          .content-bottom-right,
          .tile-background,
          .circular-image,
          .feature-tile,
          .glass-card-1,
          .glass-card-2 {
            transition: none !important;
            transform: none !important;
            opacity: 1 !important;
          }
        }
        
        /* Responsive grid */
        @media (max-width: 1024px) {
          .feature-grid {
            grid-template-columns: repeat(6, 1fr) !important;
          }
          .tile-7 { grid-column: span 6 !important; }
          .tile-5 { grid-column: span 6 !important; }
        }
        
        @media (max-width: 768px) {
          .feature-grid {
            grid-template-columns: 1fr !important;
          }
          .tile-7, .tile-5 { grid-column: span 1 !important; }
          
          /* Mobile: all content slides up from bottom */
          .content-top-left,
          .content-top-right,
          .content-bottom-left,
          .content-bottom-right {
            transform: translateY(40px);
            opacity: 0;
            transition: transform 600ms cubic-bezier(.22,.9,.3,1), opacity 500ms ease-out;
          }
          .entered .content-top-left,
          .entered .content-top-right,
          .entered .content-bottom-left,
          .entered .content-bottom-right {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>

      {/* Gradient Glassmorphic Background Cards */}
      <div className={`glass-card-1 ${entered ? 'entered' : ''}`} style={{
        position: 'absolute',
        top: '10%',
        left: '10%',
        right: '10%',
        bottom: '10%',
        background: 'linear-gradient(135deg, rgba(58, 134, 255, 0.15), rgba(123, 47, 247, 0.15))',
        backdropFilter: 'blur(20px)',
        borderRadius: '32px',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        boxShadow: '0 25px 50px rgba(0, 0, 0, 0.1)',
        zIndex: 1,
        transitionDelay: '200ms'
      }} />

      <div className={`glass-card-2 ${entered ? 'entered' : ''}`} style={{
        position: 'absolute',
        top: '5%',
        left: '5%',
        right: '5%',
        bottom: '5%',
        background: 'linear-gradient(135deg, rgba(58, 134, 255, 0.1), rgba(123, 47, 247, 0.1))',
        backdropFilter: 'blur(30px)',
        borderRadius: '40px',
        border: '1px solid rgba(255, 255, 255, 0.3)',
        boxShadow: '0 35px 70px rgba(0, 0, 0, 0.15)',
        zIndex: 2,
        transitionDelay: '400ms'
      }} />
        
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 3
      }}>
        {/* Heading Section */}
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <h1 className={`section-headline ${entered ? 'entered' : ''}`} style={{
            fontSize: '74px',
            fontWeight: '700',
            lineHeight: '1.1',
            color: '#1e293b',
            marginBottom: '16px',
            maxWidth: '800px',
            margin: '0 auto 16px',
            position: 'relative',
            zIndex: 4
          }}>
            <span 
              className="line" 
              style={{ 
                background: 'linear-gradient(90deg, #3A86FF 0%, #7B2FF7 100%)', 
                WebkitBackgroundClip: 'text', 
                backgroundClip: 'text', 
                WebkitTextFillColor: 'transparent', 
                transitionDelay: '70ms' 
              }}
            >
             Who we are?
            </span>
          </h1>
          <p className={`section-headline ${entered ? 'entered' : ''}`} style={{
            fontSize: '1.25rem',
            color: '#64748b',
            lineHeight: '1.6',
            maxWidth: '600px',
            margin: '0 auto',
            transitionDelay: '200ms'
          }}>
            <span className="line" style={{ transitionDelay: '140ms' }}>
              We are a platform dedicated to connecting mentors and mentees for meaningful growth and learning experiences.
            </span>
          </p>
        </div>

        {/* 2×2 Feature Collage */}
        <div className={`feature-grid ${entered ? 'entered' : ''}`} style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gap: '24px',
          position: 'relative',
          zIndex: 4
        }}>
          {/* Top-Left Tile - 7 columns */}
          <div 
            className="feature-tile tile-7 gradient-shadow-lg"
            onMouseEnter={() => setHoveredTile(1)}
            onMouseLeave={() => setHoveredTile(null)}
            style={{
              gridColumn: 'span 7',
              minHeight: '300px',
              borderRadius: '20px',
              position: 'relative',
              overflow: 'hidden',
              background: 'rgba(255, 255, 255, 0.8)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              boxShadow: `
                0 8px 32px rgba(0, 0, 0, 0.1),
                0 20px 40px rgba(58, 134, 255, 0.15),
                0 0 60px rgba(123, 47, 247, 0.1)
              `
            }}
          >
            <div 
              className="tile-background"
              style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: `url(${tiles[0].imageUrl})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            />
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 50%)'
            }} />
            <div className="content-top-left" style={{
              position: 'absolute',
              bottom: '24px',
              left: '24px',
              color: 'white',
              zIndex: 2
            }}>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '600',
                marginBottom: '8px',
                lineHeight: '1.2'
              }}>
                {tiles[0].title}
              </h3>
              <p style={{
                fontSize: '0.875rem',
                opacity: 0.9,
                lineHeight: '1.4'
              }}>
                {tiles[0].subtitle}
              </p>
            </div>
          </div>

          {/* Top-Right Tile - 5 columns */}
          <div 
            className="feature-tile tile-5 gradient-shadow"
            onMouseEnter={() => setHoveredTile(2)}
            onMouseLeave={() => setHoveredTile(null)}
            style={{
              gridColumn: 'span 5',
              minHeight: '300px',
              background: 'linear-gradient(135deg, rgba(240, 249, 255, 0.8), rgba(224, 231, 255, 0.8))',
              backdropFilter: 'blur(10px)',
              borderRadius: '20px',
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-end',
              justifyContent: 'flex-end',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              boxShadow: `
                0 8px 32px rgba(0, 0, 0, 0.1),
                0 20px 40px rgba(58, 134, 255, 0.15),
                0 0 60px rgba(123, 47, 247, 0.1)
              `
            }}
          >
            <div className="content-top-right" style={{ textAlign: 'right' }}>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '600',
                color: '#1e293b',
                marginBottom: '8px',
                lineHeight: '1.2'
              }}>
                {tiles[1].title}
              </h3>
              <p style={{
                fontSize: '0.875rem',
                color: '#64748b',
                lineHeight: '1.4'
              }}>
                {tiles[1].subtitle}
              </p>
            </div>
          </div>

          {/* Bottom-Left Tile - 5 columns */}
          <div 
            className="feature-tile tile-5 gradient-shadow"
            onMouseEnter={() => setHoveredTile(3)}
            onMouseLeave={() => setHoveredTile(null)}
            style={{
              gridColumn: 'span 5',
              minHeight: '240px',
              background: 'linear-gradient(135deg, rgba(254, 243, 199, 0.8), rgba(253, 230, 138, 0.8))',
              backdropFilter: 'blur(10px)',
              borderRadius: '20px',
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              boxShadow: `
                0 8px 32px rgba(0, 0, 0, 0.1),
                0 20px 40px rgba(58, 134, 255, 0.15),
                0 0 60px rgba(123, 47, 247, 0.1)
              `
            }}
          >
            <div className="content-bottom-left">
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '600',
                color: '#1e293b',
                lineHeight: '1.2'
              }}>
                {tiles[2].title}
              </h3>
            </div>
          </div>

          {/* Bottom-Right Tile - 7 columns */}
          <div 
            className="feature-tile tile-7 gradient-shadow-lg"
            onMouseEnter={() => setHoveredTile(4)}
            onMouseLeave={() => setHoveredTile(null)}
            style={{
              gridColumn: 'span 7',
              minHeight: '240px',
              background: 'linear-gradient(135deg, rgba(236, 253, 245, 0.8), rgba(209, 250, 229, 0.8))',
              backdropFilter: 'blur(10px)',
              borderRadius: '20px',
              padding: '24px',
              position: 'relative',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              boxShadow: `
                0 8px 32px rgba(0, 0, 0, 0.1),
                0 20px 40px rgba(58, 134, 255, 0.15),
                0 0 60px rgba(123, 47, 247, 0.1)
              `
            }}
          >
            {/* Circular Portrait */}
            <div className="circular-image" style={{
              position: 'absolute',
              right: '32px',
              bottom: '32px',
              width: 'clamp(200px, 48%, 220px)',
              height: 'clamp(200px, 48%, 220px)',
              borderRadius: '50%',
              backgroundImage: `url(${tiles[3].imageUrl})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
              border: '3px solid rgba(255, 255, 255, 0.8)',
              transition: 'transform 300ms ease-out'
            }} />
            
            <div className="content-bottom-right" style={{ position: 'relative', zIndex: 2 }}>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '600',
                color: '#1e293b',
                marginBottom: '8px',
                lineHeight: '1.2'
              }}>
                {tiles[3].title}
              </h3>
              <p style={{
                fontSize: '0.875rem',
                color: '#64748b',
                lineHeight: '1.4'
              }}>
                {tiles[3].subtitle}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}