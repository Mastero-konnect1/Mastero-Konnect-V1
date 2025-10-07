'use client'

export default function OurCommunitySection() {
  return (
    <>
      <style>{`
        /* Star animations matching CTABanner theme */
        @keyframes starTwinkle {
          0%, 100% { opacity: 0.25; transform: scale(1) rotate(0deg); }
          50% { opacity: 0.9; transform: scale(1.05) rotate(5deg); }
        }
        @keyframes starFloat {
          0% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
          100% { transform: translateY(0); }
        }
        @keyframes starGlow {
          0%, 100% { filter: drop-shadow(0 0 4px rgba(59, 130, 246, 0.3)); }
          50% { filter: drop-shadow(0 0 12px rgba(59, 130, 246, 0.6)); }
        }
        .star { opacity: 0.7; filter: drop-shadow(0 2px 8px rgba(0,0,0,0.1)); }
        .star--twinkle { animation: starTwinkle 3s ease-in-out infinite; }
        .star--float { animation: starFloat 6s ease-in-out infinite; }
        .star--glow { animation: starGlow 4s ease-in-out infinite; }
        
        /* White background with subtle texture */
        .testimonials-gradient {
          background: white;
        }
        
        /* Floating particles animation */
        @keyframes floatParticle {
          0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
          25% { transform: translateY(-10px) translateX(5px) rotate(90deg); }
          50% { transform: translateY(-5px) translateX(-5px) rotate(180deg); }
          75% { transform: translateY(-15px) translateX(3px) rotate(270deg); }
        }
        .floating-particle {
          animation: floatParticle 8s ease-in-out infinite;
        }
      `}</style>
      
      <section className="py-20 testimonials-section relative overflow-hidden testimonials-gradient">
        {/* Enhanced animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-purple-50/30"></div>
          
          {/* Blurred orbs */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200/30 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-200/30 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-cyan-200/20 rounded-full blur-xl animate-bounce" style={{animationDelay: '2s', animationDuration: '3s'}}></div>
          <div className="absolute bottom-1/3 right-1/3 w-28 h-28 bg-indigo-200/25 rounded-full blur-2xl animate-pulse" style={{animationDelay: '0.5s'}}></div>
          
          {/* Additional glass morphism elements */}
          <div className="absolute top-1/4 right-1/4 w-20 h-20 bg-white/5 rounded-full blur-xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
          <div className="absolute bottom-1/4 left-1/3 w-16 h-16 bg-white/10 rounded-full blur-lg animate-bounce" style={{animationDelay: '2.5s', animationDuration: '4s'}}></div>
        </div>
        
        {/* Star SVG definitions */}
        <svg width="0" height="0" style={{ position: "absolute" }}>
          <defs>
            <symbol id="community-star" viewBox="0 0 100 100">
              <path d="M50 6 L61 36 L93 39 L68 58 L75 90 L50 73 L25 90 L32 58 L7 39 L39 36 Z" fill="#3B82F6" />
            </symbol>
            <symbol id="community-star-purple" viewBox="0 0 100 100">
              <path d="M50 6 L61 36 L93 39 L68 58 L75 90 L50 73 L25 90 L32 58 L7 39 L39 36 Z" fill="#8B5CF6" />
            </symbol>
            <symbol id="community-star-cyan" viewBox="0 0 100 100">
              <path d="M50 6 L61 36 L93 39 L68 58 L75 90 L50 73 L25 90 L32 58 L7 39 L39 36 Z" fill="#06B6D4" />
            </symbol>
          </defs>
        </svg>
        
        {/* Animated stars */}
        <svg className="star star--twinkle" width="60" height="60" style={{ position: 'absolute', top: '3rem', left: '2rem', opacity: 0.6 }}>
          <use href="#community-star" />
        </svg>
        <svg className="star star--float" width="40" height="40" style={{ position: 'absolute', top: '25%', right: '3rem', opacity: 0.5 }}>
          <use href="#community-star-purple" />
        </svg>
        <svg className="star star--glow" width="35" height="35" style={{ position: 'absolute', top: '40%', left: '8rem', opacity: 0.55 }}>
          <use href="#community-star-cyan" />
        </svg>
        <svg className="star star--twinkle" width="50" height="50" style={{ position: 'absolute', bottom: '3rem', right: '2.5rem', opacity: 0.5 }}>
          <use href="#community-star-purple" />
        </svg>
        <svg className="star star--float" width="25" height="25" style={{ position: 'absolute', bottom: '20%', left: '5rem', opacity: 0.6 }}>
          <use href="#community-star" />
        </svg>
        <svg className="star star--glow" width="30" height="30" style={{ position: 'absolute', top: '60%', right: '8rem', opacity: 0.4 }}>
          <use href="#community-star-cyan" />
        </svg>
        <svg className="star star--twinkle" width="45" height="45" style={{ position: 'absolute', top: '15%', left: '12rem', opacity: 0.45 }}>
          <use href="#community-star-purple" />
        </svg>
        
        {/* Additional stars around content boundaries */}
        <svg className="star star--float" width="20" height="20" style={{ position: 'absolute', top: '30%', left: '22%', opacity: 0.4 }}>
          <use href="#community-star-cyan" />
        </svg>
        <svg className="star star--glow" width="28" height="28" style={{ position: 'absolute', top: '25%', right: '27%', opacity: 0.5 }}>
          <use href="#community-star" />
        </svg>
        <svg className="star star--twinkle" width="22" height="22" style={{ position: 'absolute', bottom: '25%', right: '28%', opacity: 0.45 }}>
          <use href="#community-star-purple" />
        </svg>
        <svg className="star star--float" width="32" height="32" style={{ position: 'absolute', bottom: '30%', left: '20%', opacity: 0.35 }}>
          <use href="#community-star-cyan" />
        </svg>
        <svg className="star star--glow" width="25" height="25" style={{ position: 'absolute', top: '75%', left: '25%', opacity: 0.4 }}>
          <use href="#community-star" />
        </svg>
        
        {/* Additional stars on the right side */}
        <svg className="star star--twinkle" width="24" height="24" style={{ position: 'absolute', top: '40%', right: '18%', opacity: 0.45 }}>
          <use href="#community-star-purple" />
        </svg>
        <svg className="star star--float" width="26" height="26" style={{ position: 'absolute', top: '60%', right: '15%', opacity: 0.4 }}>
          <use href="#community-star-cyan" />
        </svg>
        
        {/* Floating particles */}
        <div className="absolute top-1/3 left-1/2 w-2 h-2 bg-blue-400/60 rounded-full floating-particle" style={{animationDelay: '0s'}}></div>
        <div className="absolute top-2/3 right-1/3 w-1 h-1 bg-purple-400/70 rounded-full floating-particle" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/3 left-1/4 w-1.5 h-1.5 bg-cyan-400/60 rounded-full floating-particle" style={{animationDelay: '4s'}}></div>
        <div className="absolute top-1/4 right-1/2 w-1 h-1 bg-blue-500/50 rounded-full floating-particle" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/2 right-1/4 w-1.5 h-1.5 bg-purple-500/40 rounded-full floating-particle" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-2/3 left-1/3 w-1 h-1 bg-cyan-500/50 rounded-full floating-particle" style={{animationDelay: '5s'}}></div>
        
        <div className="testimonials-content relative z-10">
        
        {/* Section Header */}
        <div className="testimonials-header">
          <h1 className="testimonials-heading animate-fade-in-up">
            Our <span className="community-text">Community</span>
          </h1>
          
          {/* Coming Soon Subheading */}
          <h2 className="testimonials-subheading animate-fade-in-up" style={{animationDelay: '0.3s'}}>
            Coming Soon
          </h2>
          
          {/* Additional Subheading */}
          <div className="testimonials-main-content animate-fade-in-up" style={{animationDelay: '0.6s'}}>
            <h3 className="testimonials-cta-text cursor-default transform hover:scale-105 transition-all duration-500">
              <span className="text-blue-600 hover:text-blue-700 transition-colors duration-300">Get ready to </span>
              <span className="text-blue-600 hover:text-blue-700 testimonials-cta-highlight transition-all duration-300">
                book your session
              </span>
            </h3>
            
            {/* Decorative underline */}
            <div className="testimonials-decoration"></div>
            
            {/* Call-to-action hint */}
            <p className="testimonials-benefits animate-fade-in-up" style={{animationDelay: '0.8s'}}>
              ✨ Early access • Priority booking • Exclusive benefits
            </p>
          </div>
          
          {/* Animated decorative elements */}
          <div className="flex justify-center items-center gap-4 mt-8 animate-fade-in-up" style={{animationDelay: '0.9s'}}>
            <div className="w-3 h-3 bg-blue-500 rounded-full animate-ping"></div>
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-ping" style={{animationDelay: '0.2s'}}></div>
            <div className="w-3 h-3 bg-cyan-500 rounded-full animate-ping" style={{animationDelay: '0.4s'}}></div>
          </div>
        </div>
      </div>
      </section>
    </>
  )
}