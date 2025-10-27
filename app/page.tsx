// 'use client'

// import { useEffect } from 'react'
// import HeroSection from '@/features/landing/components/HeroSection'
// import ServicesSection from '@/features/landing/components/ServicesSection'
// import ContentBlock1 from '@/features/landing/components/ContentBlock1'
// import ContentBlock2 from '@/features/landing/components/ContentBlock2'
// import WeCanDO from '@/features/landing/components/WeCanDO'
// import PricingSection from '@/features/landing/components/PricingSection'
// import FAQSection from '@/features/landing/components/FAQSection'
// import TestimonialsSection from '@/features/landing/components/TestimonialsSection'
// import CTABanner from '@/features/landing/components/CTABanner'
// import Footer from '@/components/layout/Footer'
// import { initMotionSystem } from '@/features/landing/motion'
// import '@/features/landing/motion.css'

// export default function HomePage() {
//   useEffect(() => {
//     initMotionSystem()
//   }, [])

//   return (
//     <div className="min-h-screen bg-linear-gradient(135deg,rgb(64, 142, 216), rgb(220, 218, 231), rgb(90, 56, 136))">
//       {/* <Navigation /> */}
//       <HeroSection />
//       <ServicesSection />
//       <ContentBlock2 />
//       <WeCanDO />
//       <ContentBlock1 />
//       {/* <PricingSection /> */}
//       <FAQSection />
//       <TestimonialsSection />s
//       <CTABanner />
//       <Footer />
//     </div>
//   )
// }
'use client'

import { useEffect } from 'react'
import HeroSection from '@/features/landing/components/HeroSection'
import ServicesSection from '@/features/landing/components/ServicesSection'
import ContentBlock1 from '@/features/landing/components/ContentBlock1'
import ContentBlock2 from '@/features/landing/components/ContentBlock2'
import WeCanDO from '@/features/landing/components/WeCanDO'
import PricingSection from '@/features/landing/components/PricingSection'
import FAQSection from '@/features/landing/components/FAQSection'
import TestimonialsSection from '@/features/landing/components/TestimonialsSection'
import CTABanner from '@/features/landing/components/CTABanner'
import Footer from '@/components/layout/Footer'
import { initMotionSystem } from '@/features/landing/motion'
import '@/features/landing/motion.css'

export default function HomePage() {
  useEffect(() => {
    initMotionSystem()
  }, [])

  return (
    <div className="min-h-screen relative overflow-hidden" style={{
      background: "linear-gradient(135deg, rgb(64, 142, 216), rgb(220, 218, 231), rgb(90, 56, 136))",
      position: 'relative'
    }}>
      {/* Enhanced Background decorative elements with more circles */}
      <div style={{
        position: 'absolute',
        top: '5%',
        left: '3%',
        width: '400px',
        height: '400px',
        borderRadius: '50%',
        background: 'rgba(123, 47, 247, 0.15)',
        filter: 'blur(60px)',
        animation: 'float 12s ease-in-out infinite'
      }} />
      <div style={{
        position: 'absolute',
        bottom: '8%',
        right: '4%',
        width: '500px',
        height: '500px',
        borderRadius: '50%',
        background: 'rgba(58, 134, 255, 0.12)',
        filter: 'blur(70px)',
        animation: 'float 15s ease-in-out infinite reverse'
      }} />
      <div style={{
        position: 'absolute',
        top: '30%',
        left: '8%',
        width: '300px',
        height: '300px',
        borderRadius: '50%',
        background: 'rgba(99, 102, 241, 0.1)',
        filter: 'blur(50px)',
        animation: 'float 10s ease-in-out infinite'
      }} />
      <div style={{
        position: 'absolute',
        top: '60%',
        right: '15%',
        width: '350px',
        height: '350px',
        borderRadius: '50%',
        background: 'rgba(139, 92, 246, 0.08)',
        filter: 'blur(45px)',
        animation: 'float 18s ease-in-out infinite reverse'
      }} />
      <div style={{
        position: 'absolute',
        top: '15%',
        right: '25%',
        width: '250px',
        height: '250px',
        borderRadius: '50%',
        background: 'rgba(59, 130, 246, 0.1)',
        filter: 'blur(40px)',
        animation: 'float 14s ease-in-out infinite'
      }} />
      <div style={{
        position: 'absolute',
        bottom: '25%',
        left: '20%',
        width: '320px',
        height: '320px',
        borderRadius: '50%',
        background: 'rgba(147, 51, 234, 0.12)',
        filter: 'blur(55px)',
        animation: 'float 16s ease-in-out infinite reverse'
      }} />
      <div style={{
        position: 'absolute',
        top: '45%',
        left: '50%',
        width: '200px',
        height: '200px',
        borderRadius: '50%',
        background: 'rgba(79, 70, 229, 0.08)',
        filter: 'blur(35px)',
        animation: 'float 11s ease-in-out infinite'
      }} />
      <div style={{
        position: 'absolute',
        bottom: '40%',
        right: '35%',
        width: '280px',
        height: '280px',
        borderRadius: '50%',
        background: 'rgba(67, 56, 202, 0.09)',
        filter: 'blur(48px)',
        animation: 'float 13s ease-in-out infinite reverse'
      }} />

      <style>{`
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) translateX(0px) rotate(0deg) scale(1); 
          }
          25% { 
            transform: translateY(-30px) translateX(15px) rotate(90deg) scale(1.1); 
          }
          50% { 
            transform: translateY(-20px) translateX(-10px) rotate(180deg) scale(0.9); 
          }
          75% { 
            transform: translateY(-40px) translateX(20px) rotate(270deg) scale(1.05); 
          }
        }
        
        /* Enhanced gradient shadows for sections */
        .gradient-shadow {
          box-shadow: 
            0 20px 40px rgba(58, 134, 255, 0.15),
            0 0 60px rgba(123, 47, 247, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
        }
        
        .gradient-shadow-lg {
          box-shadow: 
            0 30px 60px rgba(58, 134, 255, 0.2),
            0 0 80px rgba(123, 47, 247, 0.15),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
        }
        
        .gradient-shadow-xl {
          box-shadow: 
            0 40px 80px rgba(58, 134, 255, 0.25),
            0 0 100px rgba(123, 47, 247, 0.2),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
        }
      `}</style>

      {/* <Navigation /> */}
      <HeroSection />
      <ServicesSection />
      <ContentBlock2 />
      <WeCanDO />
      <ContentBlock1 />
      {/* <PricingSection /> */}
      <FAQSection />
      <TestimonialsSection />
      <CTABanner />
      <Footer />
    </div>
  )
}