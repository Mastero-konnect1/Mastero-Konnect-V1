// import React, { useState, useEffect, useRef } from "react";
// import { Sparkles, ArrowRight, Users, TrendingUp, Heart } from "lucide-react";
// import Link from "next/link";

// const CTABanner = () => {
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
//   const styles = {
//     heroGradient: {
//        background: 'linear-gradient(135deg,rgb(64, 142, 216), rgb(220, 218, 231), rgb(90, 56, 136))',
//          minHeight: '100vh',
      
//     },
//     glassCard: {
//       background: "rgba(255, 255, 255, 0.1)",
//       backdropFilter: "blur(20px)",
//       border: "1px solid rgba(255, 255, 255, 0.2)",
//       boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
//     },
//     btnHero: {
//       background: "white",
//       color: "#6256ED",
//       border: "none",
//       padding: "0.875rem 2rem",
//       borderRadius: "0.75rem",
//       fontSize: "1rem",
//       fontWeight: "600",
//       display: "inline-flex",
//       alignItems: "center",
//       justifyContent: "center",
//       gap: "0.5rem",
//       cursor: "pointer",
//       transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
//       boxShadow: "0 4px 14px 0 rgba(0, 0, 0, 0.1)",
//       flexShrink: 0,
//     },
//     btnHeroOutline: {
//       background: "transparent",
//       color: "white",
//       border: "2px solid rgba(255, 255, 255, 0.35)",
//       padding: "0.875rem 2rem",
//       borderRadius: "0.75rem",
//       fontSize: "1rem",
//       fontWeight: "600",
//       display: "inline-flex",
//       alignItems: "center",
//       justifyContent: "center",
//       gap: "0.5rem",
//       cursor: "pointer",
//       transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
//       backdropFilter: "blur(10px)",
//       flexShrink: 0,
//     },
//     gradientText: {
//       background: "linear-gradient(90deg, #3A86FF 0%, #7B2FF7 100%)",
//       backgroundClip: "text",
//       WebkitBackgroundClip: "text",
//       WebkitTextFillColor: "transparent",
//     },
//     fadeIn: {
//       animation: "fadeIn 1s ease-out",
//     },
//   };

//   return (
//     <>
//       <style>{`
//         .cta-header {
//           transform: translateY(12px);
//           opacity: 0;
//           transition: transform 420ms cubic-bezier(.22,.9,.3,1), opacity 360ms ease-out;
//         }
//         .cta-banner.entered .cta-header {
//           transform: translateY(0);
//           opacity: 1;
//         }

//         .cta-stats {
//           transform: translateY(22px) scale(.98);
//           opacity: 0;
//           transition: transform 420ms cubic-bezier(.22,.9,.3,1), opacity 360ms ease-out;
//           transition-delay: 200ms;
//         }
//         .cta-banner.entered .cta-stats {
//           transform: translateY(0) scale(1);
//           opacity: 1;
//         }

//         .stats-card {
//           transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
//         }
//         .stats-card:hover {
//           background: rgba(255, 255, 255, 0.12) !important;
//           transform: translateY(-2px);
//           box-shadow: 0 8px 25px 0 rgba(0, 0, 0, 0.15) !important;
//           border-color: rgba(255, 255, 255, 0.35) !important;
//         }

//         @media (prefers-reduced-motion: reduce) {
//           .cta-header, .cta-stats, .stats-card {
//             transition: none !important;
//             transform: none !important;
//             opacity: 1 !important;
//           }
//         }

//         @keyframes fadeIn {
//           from {
//             opacity: 0;
//             transform: translateY(20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         @keyframes wave-sweep {
//           0% {
//             transform: translateX(-100%) translateY(-100%) rotate(45deg);
//             opacity: 0;
//           }
//           50% {
//             opacity: 1;
//           }
//           100% {
//             transform: translateX(100%) translateY(100%) rotate(45deg);
//             opacity: 0;
//           }
//         }

//         @keyframes float-slow {
//           0%, 100% {
//             transform: translateY(0);
//           }
//           50% {
//             transform: translateY(-10px);
//           }
//         }

//         @keyframes pulse {
//           0%, 100% {
//             transform: scale(1);
//             opacity: 1;
//           }
//           50% {
//             transform: scale(1.05);
//             opacity: 0.8;
//           }
//         }

//         .btn-hero:hover {
//           background: hsl(0, 0%, 95%) !important;
//           transform: translateY(-2px);
//           box-shadow: 0 8px 25px 0 rgba(0, 0, 0, 0.15) !important;
//         }

//         .btn-hero:hover .arrow {
//           transform: translateX(4px);
//         }

//         .btn-hero-outline:hover {
//           background: linear-gradient(90deg, #3A86FF 0%, #7B2FF7 100%) !important;
//           border-color: rgba(255, 255, 255, 0.5) !important;
//         }

//         .arrow {
//           transition: transform 0.3s ease;
//         }


//         /* Responsive fixes */
//         @media (max-width: 768px) {
//           .hero-title {
//             font-size: 2.5rem !important;
//           }
//           .hero-subtitle {
//             font-size: 1rem !important;
//           }
//           .cta-buttons {
//             flex-direction: column !important;
//             width: 100%;
//           }
//           .cta-buttons button {
//             width: 100%;
//             max-width: 360px;
//             margin: 0 auto;
//           }
//         }
//       `}</style>

//       <section
//         ref={sectionRef}
//         className={`cta-banner gradient-shadow-xl ${entered ? 'entered' : ''}`}
//         style={{
//           ...styles.heroGradient,
//           minHeight: "88vh",
//           position: "relative",
//           overflow: "hidden",
//           zIndex: 10,
//           boxShadow: `
//             0 20px 40px rgba(58, 134, 255, 0.15),
//             0 0 60px rgba(123, 47, 247, 0.1),
//             inset 0 1px 0 rgba(255, 255, 255, 0.1)
//           `
//         }}
//       >
//         {/* Background decorations */}
//         <div
//           style={{
//             position: "absolute",
//             inset: 0,
//             background:
//               "linear-gradient(to bottom right, rgba(107, 80, 235, 0.12), transparent, rgba(98, 86, 237, 0.12))",
//           }}
//         />
        
//         {/* Wave Animation */}
//         <div style={{
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           right: 0,
//           bottom: 0,
//           background: 'linear-gradient(45deg, rgba(255,255,255,0.1) 0%, transparent 50%, rgba(255,255,255,0.1) 100%)',
//           animation: 'wave-sweep 6s ease-in-out infinite',
//           pointerEvents: 'none'
//         }} />
        
//         {/* Floating orbs */}
//         <div
//           style={{
//             position: "absolute",
//             top: "5rem",
//             left: "2.5rem",
//             width: "18rem",
//             height: "18rem",
//             borderRadius: "50%",
//             filter: "blur(3rem)",
//             background: "rgba(255, 255, 255, 0.05)",
//             animation: 'float-slow 8s ease-in-out infinite'
//           }}
//         />
//         <div
//           style={{
//             position: "absolute",
//             bottom: "5rem",
//             right: "2.5rem",
//             width: "24rem",
//             height: "24rem",
//             borderRadius: "50%",
//             filter: "blur(3rem)",
//             background: "rgba(255, 255, 255, 0.05)",
//             animation: 'float-slow 12s ease-in-out infinite'
//           }}
//         />

//         <div
//           style={{
//             position: "relative",
//             zIndex: 10,
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//             justifyContent: "center",
//             minHeight: "80vh",
//             padding: "2.5rem 1rem",
//             maxWidth: "90rem",
//             margin: "0 auto",
//           }}
//         >
//           {/* Badge */}
//           <div className="cta-header" style={{ marginBottom: "1.5rem" }}>
//             <div
//               style={{
//                 display: "flex",
//                 alignItems: "center",
//                 gap: "0.5rem",
//                 padding: "0.625rem 1.25rem",
//                 borderRadius: "9999px",
//                 color: "white",
//                 fontSize: "0.8125rem",
//                 fontWeight: "500",
//                 ...styles.glassCard,
//               }}
//             >
//               <Sparkles style={{ width: "0.9rem", height: "0.9rem" }} />
//               Join 50,000+ Success Stories
//             </div>
//           </div>

//           {/* Heading */}
//           <div style={{ textAlign: "center", maxWidth: "60rem", margin: "0 auto 2rem" }}>
//             <h1
//               className="hero-title"
//               style={{
//                 fontSize: "clamp(2.5rem, 5vw, 3.75rem)",
//                 fontWeight: "bold",
//                 color: "white",
//                 marginBottom: "1.25rem",
//                 lineHeight: "1.1",
//                 fontFamily: 'serif'
//               }}
//             >
//               Are you ready to{" "}
//               <span style={styles.gradientText}>find your mentor?</span>
//             </h1>
//             <p
//               className="hero-subtitle"
//               style={{
//                 fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
//                 color: "rgba(255, 255, 255, 0.9)",
//                 lineHeight: "1.6",
//                 maxWidth: "42rem",
//                 margin: "0 auto",
//               }}
//             >
//               Connect with industry experts and accelerate your career growth with personalized mentorship.
//             </p>
            
//             {/* Growth Icon */}
//             <div style={{
//               display: 'flex',
//               justifyContent: 'center',
//               marginTop: '1.5rem',
//               marginBottom: '0.5rem'
//             }}>
//               <div style={{
//                 width: '3rem',
//                 height: '3rem',
//                 borderRadius: '50%',
//                 background: 'rgba(255, 255, 255, 0.15)',
//                 backdropFilter: 'blur(10px)',
//                 border: '1px solid rgba(255, 255, 255, 0.2)',
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 color: 'white',
//                 boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
//                 animation: 'pulse 2s ease-in-out infinite'
//               }}>
//                 <TrendingUp className="w-6 h-6" />
//               </div>
//             </div>
//           </div>

//           {/* Buttons */}
//           <div
//             className="cta-buttons"
//             style={{
//               display: "flex",
//               flexDirection: "row",
//               gap: "0.75rem",
//               justifyContent: "center",
//               marginBottom: "1.5rem",
//               flexWrap: "wrap",
//             }}
//           >
//             <Link href="/ai-assessment"  className="btn-hero" style={styles.btnHero}>
//               Start Your AI Assessment
//               <ArrowRight
//                 style={{ width: "1.1rem", height: "1.1rem" }}
//                 className="arrow"
//               />
//             </Link>
//             <Link href="/find-mentor" className="btn-hero-outline" style={styles.btnHeroOutline}>
//               Browse Mentors
//             </Link>
//           </div>

//           {/* Trust Indicators */}
//           <div
//             style={{
//               display: "flex",
//               flexWrap: "wrap",
//               justifyContent: "center",
//               gap: "1.5rem",
//               color: "rgba(255, 255, 255, 0.8)",
//               fontSize: "0.85rem",
//               fontWeight: "500",
//               marginBottom: "1.5rem",
//             }}
//           >
//             {["14-day free trial", "No credit card required", "Cancel anytime"].map(
//               (text, i) => (
//                 <div key={i} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
//                   <div
//                     style={{
//                       width: "0.5rem",
//                       height: "0.5rem",
//                       background: "white",
//                       borderRadius: "50%",
//                     }}
//                   />
//                   {text}
//                 </div>
//               )
//             )}
//           </div>
//         </div>

//         {/* Stats Section */}
//         <div className="cta-stats" style={{ padding: "0 1rem 1.5rem", marginTop: "-1rem" }}>
//           <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
//             <div
//               style={{
//                 display: "grid",
//                 gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
//                 gap: "1.25rem",
//               }}
//             >
//               {[
//                 { icon: <Users />, number: "5,000+", label: "Expert Mentors" },
//                 {
//                   icon: <TrendingUp />,
//                   number: "8.2x",
//                   label: "Faster Career Growth",
//                 },
//                 { icon: <Heart />, number: "95%", label: "Satisfaction Rate" },
//               ].map((stat, i) => (
//                 <div
//                   key={i}
//                   style={{
//                     ...styles.glassCard,
//                     borderRadius: "1rem",
//                     padding: "1.5rem",
//                     textAlign: "center",
//                     color: "white",
//                     gap: 0
//                   }}
//                   className="stats-card"
//                 >
//                   <div style={{ marginBottom: "0.75rem",  justifyItems:"center" }}>{stat.icon}</div>
//                   <div style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "0.5rem" }}>
//                     {stat.number}
//                   </div>
//                   <div style={{ color: "rgba(255, 255, 255, 0.8)", fontWeight: "500" }}>
//                     {stat.label}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default CTABanner;

import React, { useState, useEffect, useRef } from "react";
import { Sparkles, ArrowRight, Users, TrendingUp, Heart } from "lucide-react";
import Link from "next/link";

const CTABanner = () => {
  const [entered, setEntered] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

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
  const styles = {
    heroGradient: {
       background: 'linear-gradient(135deg,rgb(64, 142, 216), rgb(220, 218, 231), rgb(90, 56, 136))',
         minHeight: '100vh',
      
    },
    glassCard: {
      background: "rgba(255, 255, 255, 0.1)",
      backdropFilter: "blur(20px)",
      border: "1px solid rgba(255, 255, 255, 0.2)",
      boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
    },
    btnHero: {
      background: "white",
      color: "#6256ED",
      border: "none",
      padding: "0.875rem 2rem",
      borderRadius: "0.75rem",
      fontSize: "1rem",
      fontWeight: "600",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "0.5rem",
      cursor: "pointer",
      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
      boxShadow: "0 4px 14px 0 rgba(0, 0, 0, 0.1)",
      flexShrink: 0,
    },
    btnHeroOutline: {
      background: "transparent",
      color: "white",
      border: "2px solid rgba(255, 255, 255, 0.35)",
      padding: "0.875rem 2rem",
      borderRadius: "0.75rem",
      fontSize: "1rem",
      fontWeight: "600",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "0.5rem",
      cursor: "pointer",
      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
      backdropFilter: "blur(10px)",
      flexShrink: 0,
    },
    gradientText: {
      background: "linear-gradient(90deg, #3A86FF 0%, #7B2FF7 100%)",
      backgroundClip: "text",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },
    fadeIn: {
      animation: "fadeIn 1s ease-out",
    },
  };

  return (
    <>
      <style>{`
        .cta-header {
          transform: translateY(12px);
          opacity: 0;
          transition: transform 420ms cubic-bezier(.22,.9,.3,1), opacity 360ms ease-out;
        }
        .cta-banner.entered .cta-header {
          transform: translateY(0);
          opacity: 1;
        }

        .cta-stats {
          transform: translateY(22px) scale(.98);
          opacity: 0;
          transition: transform 420ms cubic-bezier(.22,.9,.3,1), opacity 360ms ease-out;
          transition-delay: 200ms;
        }
        .cta-banner.entered .cta-stats {
          transform: translateY(0) scale(1);
          opacity: 1;
        }

        .stats-card {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .stats-card:hover {
          background: rgba(255, 255, 255, 0.12) !important;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px 0 rgba(0, 0, 0, 0.15) !important;
          border-color: rgba(255, 255, 255, 0.35) !important;
        }

        @media (prefers-reduced-motion: reduce) {
          .cta-header, .cta-stats, .stats-card {
            transition: none !important;
            transform: none !important;
            opacity: 1 !important;
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes wave-sweep {
          0% {
            transform: translateX(-100%) translateY(-100%) rotate(45deg);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateX(100%) translateY(100%) rotate(45deg);
            opacity: 0;
          }
        }

        @keyframes float-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.8;
          }
        }

        .btn-hero:hover {
          background: hsl(0, 0%, 95%) !important;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px 0 rgba(0, 0, 0, 0.15) !important;
        }

        .btn-hero:hover .arrow {
          transform: translateX(4px);
        }

        .btn-hero-outline:hover {
          background: linear-gradient(90deg, #3A86FF 0%, #7B2FF7 100%) !important;
          border-color: rgba(255, 255, 255, 0.5) !important;
        }

        .arrow {
          transition: transform 0.3s ease;
        }


        /* Responsive fixes */
        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem !important;
          }
          .hero-subtitle {
            font-size: 1rem !important;
          }
          .cta-buttons {
            flex-direction: column !important;
            width: 100%;
          }
          .cta-buttons button {
            width: 100%;
            max-width: 360px;
            margin: 0 auto;
          }
        }
      `}</style>

      <section
        ref={sectionRef}
        className={`cta-banner gradient-shadow-xl ${entered ? 'entered' : ''}`}
        style={{
          ...styles.heroGradient,
          minHeight: "88vh",
          position: "relative",
          overflow: "hidden",
          zIndex: 10,
          boxShadow: `
            0 20px 40px rgba(58, 134, 255, 0.15),
            0 0 60px rgba(123, 47, 247, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.1)
          `
        }}
      >
        {/* Background decorations */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom right, rgba(107, 80, 235, 0.12), transparent, rgba(98, 86, 237, 0.12))",
          }}
        />
        
        {/* Wave Animation */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(45deg, rgba(255,255,255,0.1) 0%, transparent 50%, rgba(255,255,255,0.1) 100%)',
          animation: 'wave-sweep 6s ease-in-out infinite',
          pointerEvents: 'none'
        }} />
        
        {/* Floating orbs */}
        <div
          style={{
            position: "absolute",
            top: "5rem",
            left: "2.5rem",
            width: "18rem",
            height: "18rem",
            borderRadius: "50%",
            filter: "blur(3rem)",
            background: "rgba(255, 255, 255, 0.05)",
            animation: 'float-slow 8s ease-in-out infinite'
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "5rem",
            right: "2.5rem",
            width: "24rem",
            height: "24rem",
            borderRadius: "50%",
            filter: "blur(3rem)",
            background: "rgba(255, 255, 255, 0.05)",
            animation: 'float-slow 12s ease-in-out infinite'
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 10,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "80vh",
            padding: "2.5rem 1rem",
            maxWidth: "90rem",
            margin: "0 auto",
          }}
        >
          {/* Badge */}
          <div className="cta-header" style={{ marginBottom: "1.5rem" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.625rem 1.25rem",
                borderRadius: "9999px",
                color: "white",
                fontSize: "0.8125rem",
                fontWeight: "500",
                ...styles.glassCard,
              }}
            >
              <Sparkles style={{ width: "0.9rem", height: "0.9rem" }} />
              Join 50,000+ Success Stories
            </div>
          </div>

          {/* Heading */}
          <div style={{ textAlign: "center", maxWidth: "60rem", margin: "0 auto 2rem" }}>
            <h1
              className="hero-title"
              style={{
                fontSize: "clamp(2.5rem, 5vw, 3.75rem)",
                fontWeight: "bold",
                color: "white",
                marginBottom: "1.25rem",
                lineHeight: "1.1",
                fontFamily: 'serif'
              }}
            >
              Are you ready to{" "}
              <span style={styles.gradientText}>find your mentor?</span>
            </h1>
            <p
              className="hero-subtitle"
              style={{
                fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
                color: "rgba(10, 10, 10, 0.9)",
                lineHeight: "1.6",
                maxWidth: "42rem",
                margin: "0 auto",
              }}
            >
              Connect with industry experts and accelerate your career growth with personalized mentorship.
            </p>
            
            {/* Growth Icon - Increased size and changed color */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: '1.5rem',
              marginBottom: '0.5rem'
            }}>
              <div style={{
                width: '4.5rem', // Increased from 3rem
                height: '4.5rem', // Increased from 3rem
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.15)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#7B2FF7', // Changed from white to purple
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                animation: 'pulse 2s ease-in-out infinite'
              }}>
                <TrendingUp className="w-10 h-10" /> {/* Increased from w-6 h-6 */}
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div
            className="cta-buttons"
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "0.75rem",
              justifyContent: "center",
              marginBottom: "1.5rem",
              flexWrap: "wrap",
            }}
          >
            <Link href="/ai-assessment"  className="btn-hero" style={styles.btnHero}>
              Start Your AI Assessment
              <ArrowRight
                style={{ width: "1.1rem", height: "1.1rem" }}
                className="arrow"
              />
            </Link>
            <Link href="/find-mentor" className="btn-hero-outline" style={styles.btnHeroOutline}>
              Browse Mentors
            </Link>
          </div>

          {/* Trust Indicators */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "1.5rem",
              color: "rgba(255, 255, 255, 0.8)",
              fontSize: "0.85rem",
              fontWeight: "500",
              marginBottom: "1.5rem",
            }}
          >
            {["14-day free trial", "No credit card required", "Cancel anytime"].map(
              (text, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <div
                    style={{
                      width: "0.5rem",
                      height: "0.5rem",
                      background: "white",
                      borderRadius: "50%",
                    }}
                  />
                  {text}
                </div>
              )
            )}
          </div>
        </div>

        {/* Stats Section */}
        <div className="cta-stats" style={{ padding: "0 1rem 1.5rem", marginTop: "-1rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "1.25rem",
              }}
            >
              {[
                { 
                  icon: <Users style={{ color: '#3A86FF' }} />, // Changed color
                  number: "5,000+", 
                  label: "Expert Mentors" 
                },
                {
                  icon: <TrendingUp style={{ color: '#7B2FF7' }} />, // Changed color
                  number: "8.2x",
                  label: "Faster Career Growth",
                },
                { 
                  icon: <Heart style={{ color: '#FF006E' }} />, // Changed color
                  number: "95%", 
                  label: "Satisfaction Rate" 
                },
              ].map((stat, i) => (
                <div
                  key={i}
                  style={{
                    ...styles.glassCard,
                    borderRadius: "1rem",
                    padding: "1.5rem",
                    textAlign: "center",
                    color: "white",
                    gap: 0
                  }}
                  className="stats-card"
                >
                  <div style={{ 
                    marginBottom: "0.75rem",  
                    justifyItems: "center",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                  }}>
                    <div style={{
                      width: '3.5rem',
                      height: '3.5rem',
                      borderRadius: '50%',
                      background: 'rgba(255, 255, 255, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: '1px solid rgba(255, 255, 255, 0.2)'
                    }}>
                      {stat.icon}
                    </div>
                  </div>
                  <div style={{ 
                    fontSize: "2rem", 
                    fontWeight: "bold", 
                    marginBottom: "0.5rem",
                    color: "#E5E7EB" // Changed to lighter color for better contrast
                  }}>
                    {stat.number}
                  </div>
                  <div style={{ 
                    color: "#D1D5DB", // Changed to lighter color for better contrast
                    fontWeight: "500",
                    fontSize: "0.95rem"
                  }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CTABanner;