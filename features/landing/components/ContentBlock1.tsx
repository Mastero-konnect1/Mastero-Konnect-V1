
// 'use client'
// import { Bookmark } from "lucide-react";
// import Link from "next/link";
// import { useState, useEffect, useRef } from "react";

// const ContentBlock1 = () => {
//   const [hoveredCard, setHoveredCard] = useState<number | null>(null);
//   const [entered, setEntered] = useState(false);
//   const sectionRef = useRef<HTMLElement | null>(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setEntered(true);
//             observer.unobserve(entry.target);
//           }
//         });
//       },
//       { threshold: 0.15 }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => observer.disconnect();
//   }, []);

//   const cards = [
//    {
//     title: "Sarah Chen",
//       role: "Senior Product Manager",
//     company: "Google",
//       gigs: "12 gigs",
//     rating: 4.9,
//       reviews: 120,
//       image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=600&fit=crop&crop=face&auto=format&q=80",
//       imagePosition: "left"
//     },
//     {
//       title: "Marcus Johnson",
//       role: "VP of Engineering",
//       company: "Stripe",
//       gigs: "8 gigs",
//       rating: 4.9,
//       reviews: 89,
//       image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face&auto=format&q=80",
//       imagePosition: "center"
//     },
//     {
//       title: "Emily Rodriguez",
//       role: "Design Director at AirBnB",
//       company: "AirBnB",
//       gigs: "15 gigs",
//       rating: 4.8,
//       reviews: 156,
//       image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face&auto=format&q=80",
//       imagePosition: "center"
//     },
//     {
//      title: "David Kim",
//       role: "Head of Growth",
//       company: "Notion",
//       gigs: "5 gigs",
//       rating: 3.8,
//       reviews: 42,
//       image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face&auto=format&q=80",
//       imagePosition: "right"
//     }
//   ];

//   return (
//     <section 
//       ref={sectionRef}
//       style={{ 
//         background: 'white',
//         padding: 'clamp(64px, 8vw, 120px) 0'
//       }}
//     >
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

//         /* Card content slide from top */
//         .card-content {
//           transform: translateY(-40px);
//           opacity: 0;
//           transition: transform 800ms cubic-bezier(.22,.9,.3,1), opacity 600ms ease-out;
//         }
//         .mentor-card.entered .card-content {
//           transform: translateY(0);
//           opacity: 1;
//         }

//         /* Card image slide from top with delay */
//         .card-image {
//           transform: translateY(-60px);
//           opacity: 0;
//           transition: transform 1000ms cubic-bezier(.22,.9,.3,1), opacity 700ms ease-out;
//           transition-delay: 200ms;
//         }
//         .mentor-card.entered .card-image {
//           transform: translateY(0);
//           opacity: 1;
//         }

//         /* Card rating slide from top with more delay */
//         .card-rating {
//           transform: translateY(-20px);
//           opacity: 0;
//           transition: transform 700ms cubic-bezier(.22,.9,.3,1), opacity 500ms ease-out;
//           transition-delay: 400ms;
//         }
//         .mentor-card.entered .card-rating {
//           transform: translateY(0);
//           opacity: 1;
//         }

//         /* Mentor card base styles */
//         .mentor-card {
//           transition: transform 300ms cubic-bezier(.22,.9,.3,1);
//           will-change: transform;
//         }
//         .mentor-card:hover {
//           transform: translateY(-8px);
//         }

//         /* Accessibility */
//         @media (prefers-reduced-motion: reduce) {
//           .section-headline .line,
//           .card-content,
//           .card-image,
//           .card-rating,
//           .mentor-card {
//             transition: none !important;
//             transform: none !important;
//             opacity: 1 !important;
//           }
//         }
        
//         /* Responsive grid */
//         @media (max-width: 1024px) {
//           .mentor-grid {
//             grid-template-columns: repeat(2, 1fr) !important;
//           }
//         }
        
//         @media (max-width: 768px) {
//           .mentor-grid {
//             grid-template-columns: 1fr !important;
//           }
//         }
//       `}</style>
      
//       <div style={{
//         maxWidth: '1200px',
//         margin: '0 auto',
//         padding: '0 clamp(16px, 3vw, 40px)'
//       }}>

//         {/* Heading Section */}
//         <div style={{ textAlign: 'center', marginBottom: '80px' }}>
//           <h1 className={`section-headline ${entered ? 'entered' : ''}`} style={{
//             fontSize: '54px',
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
//              Choose your perfect tutor
//             </span>
//           </h1>
//         </div>

//         {/* Four-Up Card Row */}
//         <div className="mentor-grid" style={{
//           display: 'grid',
//           gridTemplateColumns: 'repeat(4, 1fr)',
//           gap: '24px'
//         }}>
//           {cards.map((card, index) => {
//             const isHovered = hoveredCard === index;

//             return (
//               <div
//                 key={index}
//                 className={`mentor-card ${entered ? 'entered' : ''}`}
//                 onMouseEnter={() => setHoveredCard(index)}
//                 onMouseLeave={() => setHoveredCard(null)}
//                 style={{
//                   transitionDelay: `${index * 80}ms`,
//                   width: '100%',
//                   height: 'clamp(360px, 32vw, 400px)',
//                   backgroundColor: 'transparent',
//                   borderRadius: '18px',
//                   overflow: 'hidden',
//                   cursor: 'pointer',
//                   position: 'relative',
//                   display: 'flex',
//                   flexDirection: 'column',
//                   border: '1px solid rgba(0,0,0,0.08)'
//                 }}
//               >
//                 {/* Utility Icon */}
//                 <div className="card-content" style={{
//                   position: 'absolute',
//                   top: '16px',
//                   right: '16px',
//                   width: '40px',
//                   height: '40px',
//                   borderRadius: '50%',
//                   background: 'rgba(255, 255, 255, 0.95)',
//                   backdropFilter: 'blur(8px)',
//                   display: 'flex',
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                   color: '#6b7280',
//                   zIndex: 10,
//                   transition: 'transform 200ms ease',
//                   transform: isHovered ? 'scale(1.05)' : 'scale(1)'
//                 }}>
//                   <Bookmark style={{ width: '18px', height: '18px' }} />
//                 </div>

//                 {/* Image Region - 62% of card height */}
//                 <div style={{
//                   position: 'relative',
//                   width: '100%',
//                   height: '102%',
//                   overflow: 'hidden'
//                 }}>
//                   {/* Gradient Overlay for depth */}
//                   {/* <div style={{
//                     position: 'absolute',
//                     bottom: 0,
//                     left: 0,
//                     right: 0,
//                     height: '120px',
//                     background: 'linear-gradient(to top, rgba(255,255,255,0.95) 0%, transparent 100%)',
//                     zIndex: 2
//                   }} /> */}
                  
//                   {/* Image with different positioning per card */}
//                   <div className="card-image" style={{
//                     width: '100%',
//                     height: '100%',
//                     backgroundImage: `url(${card.image})`,
//                     backgroundSize: 'cover',
//                     backgroundPosition: 
//                       card.imagePosition === 'left' ? '90% center' : 
//                       card.imagePosition === 'right' ? '10% center' : 
//                       'center center',
//                     backgroundRepeat: 'no-repeat',
//                     transform: isHovered ? 'scale(1.03)' : 'scale(1)',
//                     transition: 'transform 300ms ease-out'
//                   }} />
//                 </div>

//                 {/* Content Region - 38% of card height */}
//                 <div style={{
//                   flex: 1,
//                   padding: '24px',
//                   display: 'flex',
//                   flexDirection: 'column',
//                   justifyContent: 'space-between',
//                   background: 'transparent'
//                 }}>
//                   <div className="card-content">
//                     {/* Name */}
//                     <h3 style={{
//                         fontSize: '1.125rem',
//                         fontWeight: '600',
//                       color: '#1f2937',
//                         marginBottom: '8px',
//                         lineHeight: '1.2'
//                     }}>
//                       {card.title}
//                     </h3>
                    
//                       {/* Role with meta chip */}
//                     <p style={{
//                         fontSize: '0.875rem',
//                       color: '#6b7280',
//                         marginBottom: '18px',
//                         lineHeight: '1.4',
//                         display: 'flex',
//                         alignItems: 'baseline',
//                         flexWrap: 'wrap',
//                         gap: '6px'
//                       }}>
//                         {card.role} <span style={{ fontSize: '0.75rem', color: '#9ca3af' }}>•</span> <span style={{ fontSize: '0.75rem', color: '#9ca3af' }}>{card.gigs}</span>
//                       </p>
//                   </div>
                  
//                   {/* Rating Block */}
//                   <div className="card-rating" style={{
//                     display: 'flex',
//                     alignItems: 'baseline',
//                     gap: '8px'
//                   }}>
//                     <span style={{ 
//                       fontSize: '1.5rem', 
//                       fontWeight: '700', 
//                       color: '#1f2937',
//                       lineHeight: '1'
//                     }}>
//                       {card.rating}
//                     </span>
//                     <span style={{ 
//                       fontSize: '0.8125rem', 
//                       color: '#6b7280' 
//                     }}>
//                       {card.reviews} reviews
//                     </span>
//                   </div>
                  
//                   {/* Fine print */}
//                   <div className="card-content" style={{
//                     fontSize: '0.75rem',
//                     color: '#9ca3af',
//                     lineHeight: '1.3',
//                     marginTop: '8px'
//                   }}>
//                     Available now • Response time: 2h
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContentBlock1;

'use client'
import { Bookmark } from "lucide-react";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

const ContentBlock1 = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [entered, setEntered] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);
  const carouselRef = useRef<HTMLDivElement | null>(null);

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

  const cards = [
    {
      title: "Sarah Chen",
      role: "Senior Product Manager",
      company: "Google",
      gigs: "12 gigs",
      rating: 4.9,
      reviews: 120,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=600&fit=crop&crop=face&auto=format&q=80",
      imagePosition: "left"
    },
    {
      title: "Marcus Johnson",
      role: "VP of Engineering",
      company: "Stripe",
      gigs: "8 gigs",
      rating: 4.9,
      reviews: 89,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face&auto=format&q=80",
      imagePosition: "center"
    },
    {
      title: "Emily Rodriguez",
      role: "Design Director",
      company: "AirBnB",
      gigs: "15 gigs",
      rating: 4.8,
      reviews: 156,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face&auto=format&q=80",
      imagePosition: "center"
    },
    {
      title: "David Kim",
      role: "Head of Growth",
      company: "Notion",
      gigs: "5 gigs",
      rating: 4.8,
      reviews: 42,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face&auto=format&q=80",
      imagePosition: "right"
    },
    {
      title: "Priya Patel",
      role: "Data Science Lead",
      company: "Meta",
      gigs: "9 gigs",
      rating: 4.9,
      reviews: 98,
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face&auto=format&q=80",
      imagePosition: "center"
    },
    {
      title: "Alex Thompson",
      role: "Frontend Architect",
      company: "Netflix",
      gigs: "11 gigs",
      rating: 4.7,
      reviews: 76,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face&auto=format&q=80",
      imagePosition: "center"
    }
  ];

  // Duplicate cards for seamless infinite scroll
  const duplicatedCards = [...cards, ...cards, ...cards];

  return (
    <section 
      ref={sectionRef}
      style={{ 
        background: 'white',
        padding: 'clamp(64px, 8vw, 120px) 0',
        overflow: 'hidden'
      }}
    >
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

        /* Subtitle animation */
        .section-subtitle {
          transform: translateY(30px);
          opacity: 0;
          transition: transform 800ms cubic-bezier(.22,.9,.3,1), opacity 600ms ease-out;
          transition-delay: 200ms;
        }
        .section-headline.entered .section-subtitle {
          transform: translateY(0);
          opacity: 1;
        }

        /* Card content slide from top */
        .card-content {
          transform: translateY(-40px);
          opacity: 0;
          transition: transform 800ms cubic-bezier(.22,.9,.3,1), opacity 600ms ease-out;
        }
        .mentor-card.entered .card-content {
          transform: translateY(0);
          opacity: 1;
        }

        /* Card image slide from top with delay */
        .card-image {
          transform: translateY(-60px);
          opacity: 0;
          transition: transform 1000ms cubic-bezier(.22,.9,.3,1), opacity 700ms ease-out;
          transition-delay: 200ms;
        }
        .mentor-card.entered .card-image {
          transform: translateY(0);
          opacity: 1;
        }

        /* Card rating slide from top with more delay */
        .card-rating {
          transform: translateY(-20px);
          opacity: 0;
          transition: transform 700ms cubic-bezier(.22,.9,.3,1), opacity 500ms ease-out;
          transition-delay: 400ms;
        }
        .mentor-card.entered .card-rating {
          transform: translateY(0);
          opacity: 1;
        }

        /* Tutor card base styles */
        .tutor-card {
          transition: transform 300ms cubic-bezier(.22,.9,.3,1);
          will-change: transform;
        }
        .tutor-card:hover {
          transform: translateY(-8px);
        }

        /* Infinite carousel animation */
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-250px * 6));
          }
        }

        .carousel-track {
          animation: scroll 40s linear infinite;
        }

        .carousel-track:hover {
          animation-play-state: paused;
        }

        /* Gradient fade edges */
        .carousel-container::before,
        .carousel-container::after {
          content: '';
          position: absolute;
          top: 0;
          bottom: 0;
          width: 100px;
          z-index: 2;
          pointer-events: none;
        }

        .carousel-container::before {
          left: 0;
          background: linear-gradient(to right, white, transparent);
        }

        .carousel-container::after {
          right: 0;
          background: linear-gradient(to left, white, transparent);
        }

        /* Accessibility */
        @media (prefers-reduced-motion: reduce) {
          .section-headline .line,
          .section-subtitle,
          .card-content,
          .card-image,
          .card-rating,
          .tutor-card,
          .carousel-track {
            transition: none !important;
            transform: none !important;
            opacity: 1 !important;
            animation: none !important;
          }
        }
        
        /* Responsive grid */
        @media (max-width: 1024px) {
          .mentor-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        
        @media (max-width: 768px) {
          .mentor-grid {
            grid-template-columns: 1fr !important;
          }
          
          .carousel-container::before,
          .carousel-container::after {
            width: 50px;
          }
        }
      `}</style>
      
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 clamp(16px, 3vw, 40px)'
      }}>

        {/* Heading Section */}
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <div className={`section-headline ${entered ? 'entered' : ''}`}>
            <h1 style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: '700',
              lineHeight: '1.1',
              color: '#1e293b',
              marginBottom: '24px',
              maxWidth: '800px',
              margin: '0 auto 24px',
              position: 'relative',
              zIndex: 2
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
                Choose Your Perfect Tutor
              </span>
            </h1>
            
            <p className="section-subtitle" style={{
              fontSize: 'clamp(1.125rem, 2vw, 1.25rem)',
              color: '#6b7280',
              lineHeight: '1.6',
              maxWidth: '600px',
              margin: '0 auto',
              fontWeight: '400'
            }}>
              Connect with top-tier tutors from leading tech companies. 
              Get personalized 1:1 guidance to accelerate your learning journey.
            </p>
          </div>
        </div>

        
               

        {/* Infinite Auto-scrolling Carousel */}
        <div style={{ marginBottom: '40px' }}>
          {/* <h3 style={{
            textAlign: 'center',
            fontSize: '1.5rem',
            fontWeight: '600',
            color: '#1f2937',
            marginBottom: '32px'
          }}>
            More Expert Tutors
          </h3> */}
          
          <div 
            className="carousel-container"
            style={{
              position: 'relative',
              overflow: 'hidden',
              padding: '20px 0'
            }}
          >
            <div 
              ref={carouselRef}
              className="carousel-track"
              style={{
                display: 'flex',
                gap: '24px',
                width: 'max-content'
              }}
            >
              {duplicatedCards.map((card, index) => (
                <div
                  key={index}
                  className="tutor-card"
                  style={{
                    minWidth: '280px',
                    height: '320px',
                    backgroundColor: 'transparent',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    border: '1px solid rgba(0,0,0,0.08)',
                    flexShrink: 0
                  }}
                  onMouseEnter={() => setHoveredCard(index + 100)} // Offset to avoid conflict with static cards
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Image Region */}
                  <div style={{
                    position: 'relative',
                    width: '100%',
                    height: '60%',
                    overflow: 'hidden'
                  }}>
                    <div style={{
                      width: '100%',
                      height: '100%',
                      backgroundImage: `url(${card.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center center',
                      backgroundRepeat: 'no-repeat',
                      transition: 'transform 300ms ease-out'
                    }} />
                  </div>

                  {/* Content Region */}
                  <div style={{
                    flex: 1,
                    padding: '16px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    background: 'transparent'
                  }}>
                    <div>
                      <h4 style={{
                        fontSize: '1rem',
                        fontWeight: '600',
                        color: '#1f2937',
                        marginBottom: '4px',
                        lineHeight: '1.2'
                      }}>
                        {card.title}
                      </h4>
                      
                      <p style={{
                        fontSize: '0.75rem',
                        color: '#6b7280',
                        marginBottom: '8px',
                        lineHeight: '1.3'
                      }}>
                        {card.role}
                      </p>
                    </div>
                    
                    <div style={{
                      display: 'flex',
                      alignItems: 'baseline',
                      gap: '6px'
                    }}>
                      <span style={{ 
                        fontSize: '1.125rem', 
                        fontWeight: '700', 
                        color: '#1f2937',
                        lineHeight: '1'
                      }}>
                        {card.rating}
                      </span>
                      <span style={{ 
                        fontSize: '0.75rem', 
                        color: '#6b7280' 
                      }}>
                        {card.reviews} reviews
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div style={{
          textAlign: 'center',
          padding: '40px 0'
        }}>
          <button style={{
            padding: '16px 32px',
            fontSize: '1rem',
            fontWeight: '600',
            color: 'white',
            background: 'linear-gradient(90deg, #3A86FF 0%, #7B2FF7 100%)',
            border: 'none',
            borderRadius: '12px',
            cursor: 'pointer',
            transition: 'transform 200ms ease, box-shadow 200ms ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 8px 25px rgba(58, 134, 255, 0.3)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
          }}
          >
            Browse All Tutors
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContentBlock1;