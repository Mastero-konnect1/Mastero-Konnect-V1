'use client'

export default function OurCommunitySection() {
  return (
    <section className="py-20 testimonials-section relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200/30 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-200/30 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-cyan-200/20 rounded-full blur-xl animate-bounce" style={{animationDelay: '2s', animationDuration: '3s'}}></div>
        <div className="absolute bottom-1/3 right-1/3 w-28 h-28 bg-indigo-200/25 rounded-full blur-2xl animate-pulse" style={{animationDelay: '0.5s'}}></div>
      </div>
      
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
  )
}