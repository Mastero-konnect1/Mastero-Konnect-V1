'use client'

import Navigation from '@/components/layout/Navigation'
import HeroSection from '@/features/landing/components/HeroSection'
import ServicesSection from '@/features/landing/components/ServicesSection'
import ContentBlock1 from '@/features/landing/components/ContentBlock1'
import ContentBlock2 from '@/features/landing/components/ContentBlock2'
import PricingSection from '@/features/landing/components/PricingSection'
import FAQSection from '@/features/landing/components/FAQSection'
import TestimonialsSection from '@/features/landing/components/TestimonialsSection'
import CTABanner from '@/features/landing/components/CTABanner'
import Footer from '@/components/layout/Footer'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <ContentBlock1 />
      <ContentBlock2 />
      <PricingSection />
      <FAQSection />
      <TestimonialsSection />
      <CTABanner />
      <Footer />
    </div>
  )
}