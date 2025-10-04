"use client"

import Link from 'next/link'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, Zap, Sparkles, Crown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

// Source-of-truth plan data (monthly base). Yearly will compute 20% off
const plansData = [
  {
    name: "Basic Plan",
    icon: Zap,
    monthlyPrice: 99,
    description: "For small teams or starters, get the essentials to launch.",
    features: [
      "Unlimited members",
      "Near-Zero Payments",
      "Secure Payment Gateway",
      "Basic Analytics and Reporting",
      "Email Support"
    ],
    ctaMonthly: "Get Started",
    ctaYearly: "Get Started",
    href: "/auth/sign-up?plan=basic",
    popular: false
  },
  {
    name: "Pro Plan",
    icon: Sparkles,
    monthlyPrice: 150,
    description: "Everything in Basic plus speed, reliability, and more control.",
    features: [
      "Unlimited members",
      "Near-Zero Payments",
      "Secure Payment Gateway",
      "Advanced Analytics and Reporting",
      "Priority Support"
    ],
    ctaMonthly: "Get Started",
    ctaYearly: "Get 20% Off",
    href: "/auth/sign-up?plan=pro",
    popular: true
  },
  {
    name: "Business Plan",
    icon: Crown,
    monthlyPrice: 390,
    description: "For larger teams and enterprises, the most powerful features.",
    features: [
      "Unlimited members",
      "Near-Zero Payments",
      "Secure Payment Gateway",
      "Advanced Analytics and Reporting",
      "Dedicated Support"
    ],
    ctaMonthly: "Get Started",
    ctaYearly: "Contact Sales",
    href: "/auth/sign-up?plan=business",
    popular: false
  }
]

export default function PricingSection() {
  const [isYearly, setIsYearly] = useState(false)

  const handleToggleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'ArrowLeft' || event.key === 'Home') {
      setIsYearly(false)
    }
    if (event.key === 'ArrowRight' || event.key === 'End') {
      setIsYearly(true)
    }
  }

  const plans = plansData.map(plan => ({
    ...plan,
    totalPrice: isYearly 
      ? `$${(plan.monthlyPrice * 0.8 * 12).toFixed(0)}`
      : `$${plan.monthlyPrice}`,
    monthlyEquivalent: isYearly ? `($${(plan.monthlyPrice * 0.8).toFixed(0)} /mo)` : '',
    period: isYearly ? '/yr' : '/mo',
    cta: isYearly ? plan.ctaYearly : plan.ctaMonthly
  }))

  const toggleClass = isYearly ? 'yearly-gradient' : 'monthly-gradient'

  return (
    <section style={{ position: 'relative', padding: '2.5rem 0', paddingTop: '4rem', paddingBottom: '6rem', background: 'linear-gradient(to bottom right, #f8fafc, #eff6ff, #eef2ff)', overflow: 'hidden' }}>
      {/* Animated Background */}
      <div style={{ position: 'absolute', inset: '0', background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)', backgroundSize: '200% 200%', animation: 'background-move 15s ease infinite' }}></div>

      {/* Big rounded gradient hero container */}
      <div style={{ position: 'relative', margin: '0 auto', maxWidth: '72rem', borderRadius: '2rem', border: '1px solid rgba(147, 197, 253, 0.3)', background: 'linear-gradient(to bottom, #0a5bec, #2a69ff)', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}>
        {/* Layered rounded rectangles in the header background */}
        <div style={{ pointerEvents: 'none', position: 'absolute', inset: '0', overflow: 'hidden', borderRadius: '2rem' }}>
          <div style={{ position: 'absolute', left: '1.5rem', right: '1.5rem', top: '1.5rem', height: '15rem', borderRadius: '2rem', background: 'rgba(147, 197, 253, 0.05)', backdropFilter: 'blur(0.5rem)' }}></div>
          <div style={{ position: 'absolute', left: '2.5rem', right: '2.5rem', top: '2.5rem', height: '13.125rem', borderRadius: '1.75rem', background: 'rgba(147, 197, 253, 0.075)', backdropFilter: 'blur(0.5rem)', animation: 'float-slow 8s ease-in-out infinite' }}></div>
          <div style={{ position: 'absolute', left: '4rem', right: '4rem', top: '3.5rem', height: '11.25rem', borderRadius: '1.5rem', background: 'rgba(147, 197, 253, 0.1)', backdropFilter: 'blur(1rem)', animation: 'float-slow 12s ease-in-out infinite' }}></div>

          {/* Blobs */}
          <div style={{ position: 'absolute', left: '-2.5rem', top: '-2.5rem', height: '15rem', width: '15rem', borderRadius: '50%', background: 'rgba(147, 197, 253, 0.15)', filter: 'blur(3rem)', animation: 'blob 10s infinite' }}></div>
          <div style={{ position: 'absolute', right: '-4rem', top: '1.5rem', height: '14rem', width: '14rem', borderRadius: '50%', background: 'rgba(34, 197, 94, 0.2)', filter: 'blur(3rem)', animation: 'blob 10s infinite', animationDelay: '2s' }}></div>
          <div style={{ position: 'absolute', left: '33%', bottom: '-0.75rem', height: '16rem', width: '16rem', borderRadius: '50%', background: 'rgba(99, 102, 241, 0.2)', filter: 'blur(3rem)', animation: 'blob 10s infinite', animationDelay: '4s' }}></div>

          {/* Shimmer line */}
          <div style={{ position: 'absolute', left: '0', right: '0', top: '16.25rem', height: '1px', background: 'linear-gradient(to right, transparent, rgba(147, 197, 253, 0.6), transparent)', animation: 'shimmer 3.2s ease-in-out infinite' }}></div>
        </div>

        {/* Content inside hero */}
        <div style={{ position: 'relative', paddingLeft: '1.5rem', paddingRight: '1.5rem', paddingTop: '3.5rem', paddingBottom: '2.5rem', textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', borderRadius: '9999px', border: '1px solid rgba(147, 197, 253, 0.25)', background: 'rgba(59, 130, 246, 0.1)', padding: '0.25rem 0.75rem', color: 'rgba(239, 246, 255, 0.9)', backdropFilter: 'blur(0.5rem)', boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)' }}>
            <span style={{ height: '0.375rem', width: '0.375rem', borderRadius: '50%', background: '#86efac', animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite' }}></span>
            <span style={{ fontSize: '0.75rem', fontWeight: '500', letterSpacing: '0.05em' }}>No hidden fees — cancel anytime</span>
          </div>

          <h2 style={{ marginTop: '1.25rem', fontSize: 'clamp(1.875rem, 5vw, 6rem)', fontWeight: '800', letterSpacing: '-0.025em', color: '#eff6ff', textShadow: '0 1px 2px rgba(0, 0, 0, 0.1)' }}>
            Simple, Transparent Pricing
          </h2>
          <p style={{ marginTop: '0.75rem', fontSize: 'clamp(1rem, 2.5vw, 1.25rem)', color: 'rgba(239, 246, 255, 0.8)', maxWidth: '32rem', marginLeft: 'auto', marginRight: 'auto' }}>
            Choose a plan that fits your business needs and budget.
          </p>

          {/* Pricing Toggle */}
          <div style={{ marginTop: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <motion.div 
              style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: '0', borderRadius: '9999px', border: '1px solid rgba(147, 197, 253, 0.25)', padding: '0.25rem', backdropFilter: 'blur(1rem)', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)', overflow: 'hidden', backgroundSize: '300% 300%', animation: 'gradient-shift 3s ease infinite' }}
              role="radiogroup"
              aria-labelledby="billing-period-label"
              tabIndex={0}
              onKeyDown={handleToggleKeyDown}
              initial={false}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <span id="billing-period-label" style={{ position: 'absolute', width: '1px', height: '1px', padding: '0', margin: '-1px', overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', whiteSpace: 'nowrap', borderWidth: '0' }}>Billing period</span>
              <motion.button
                type="button"
                onClick={() => setIsYearly(false)}
                style={{ position: 'relative', zIndex: '10', borderRadius: '9999px', padding: '0.75rem 1.5rem', fontSize: '0.875rem', fontWeight: '600', transition: 'all 0.3s', outline: 'none', border: 'none', background: 'transparent', color: !isYearly ? '#1e40af' : 'rgba(239, 246, 255, 0.7)', boxShadow: !isYearly ? '0 10px 15px -3px rgba(59, 130, 246, 0.25)' : 'none', cursor: 'pointer' }}
                aria-checked={!isYearly}
                role="radio"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Monthly billing"
              >
                Monthly
              </motion.button>
              <motion.button
                type="button"
                onClick={() => setIsYearly(true)}
                style={{ position: 'relative', zIndex: '10', borderRadius: '9999px', padding: '0.75rem 1.5rem', fontSize: '0.875rem', fontWeight: '600', transition: 'all 0.3s', outline: 'none', border: 'none', background: 'transparent', color: isYearly ? '#1e40af' : 'rgba(239, 246, 255, 0.7)', boxShadow: isYearly ? '0 10px 15px -3px rgba(59, 130, 246, 0.25)' : 'none', cursor: 'pointer' }}
                aria-checked={isYearly}
                role="radio"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Yearly billing"
              >
                Yearly
              </motion.button>

              {/* Sliding pill */}
              <motion.span
                key={`toggle-pill-${isYearly}`}
                initial={{ x: isYearly ? '100%' : '0%' }}
                animate={{ x: isYearly ? '100%' : '0%' }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                style={{ position: 'absolute', top: '0.25rem', bottom: '0.25rem', left: '0', width: '50%', borderRadius: '9999px', background: 'rgba(239, 246, 255, 0.9)', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)', backdropFilter: 'blur(0.5rem)' }}
              />
            </motion.div>

            <AnimatePresence mode="wait">
              {isYearly && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                >
                  <Badge style={{ marginLeft: '0.75rem', background: '#4ade80', color: '#064e3b', boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)', border: '1px solid rgba(6, 78, 59, 0.2)' }}>
                    20% off
                  </Badge>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Cards */}
          <div style={{ position: 'relative', margin: '0 auto', marginTop: '2.5rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.5rem', alignItems: 'stretch', maxWidth: '80rem', paddingLeft: '0.25rem', paddingRight: '0.25rem', overflowX: 'auto' }}>
            <AnimatePresence mode="popLayout">
              {plans.map((plan, index) => (
                <motion.div
                  key={`${plan.name}-${isYearly}`}
                  initial={{ opacity: 0, y: 24, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -24, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: index * 0.1, ease: 'easeOut' }}
                  layout
                  style={{ flex: '1', minWidth: '17.5rem', height: '100%' }}
                >
                  <Card style={{ position: 'relative', height: '100%', width: '100%', overflow: 'hidden', borderRadius: '1.5rem', border: '1px solid rgba(147, 197, 253, 0.6)', background: 'rgba(239, 246, 255, 0.9)', backdropFilter: 'blur(1.25rem)', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)', transition: 'all 0.3s' , transform: 'translateY(0)',}}>
                    {/* Popular badge */}
                    {plan.popular && (
                      <motion.div 
                        className="absolute top-0 right-4 z-10"
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.2 }}
                        >
                        <Badge className="rounded-full bg-blue-600 px-3 py-1 text-blue-50 shadow-md">
                            Most Popular
                        </Badge>
                        </motion.div>
                    )}

                    {/* Glow on hover */}
                    <div style={{ pointerEvents: 'none', position: 'absolute', inset: '0', opacity: '0', transition: 'opacity 0.3s', background: 'linear-gradient(to bottom, rgba(239, 246, 255, 0.4), transparent)' }}></div>

                    <CardHeader style={{ paddingTop: '2rem', paddingBottom: '1rem', textAlign: 'center' }}>
                      <motion.div 
                        style={{ margin: '0 auto', marginBottom: '1rem', display: 'grid', height: '3.5rem', width: '3.5rem', placeItems: 'center', borderRadius: '0.5rem', boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)', transition: 'transform 0.3s', background: 'linear-gradient(to bottom right, #eff6ff, #dbeafe)', color: '#1d4ed8' }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <plan.icon style={{ height: '1.75rem', width: '1.75rem' }} />
                      </motion.div>
                      <CardTitle style={{ fontSize: '1.25rem', fontWeight: '700', color: '#1f2937' }}>{plan.name}</CardTitle>
                      <CardDescription style={{ marginTop: '0.25rem', color: '#6b7280' }}>{plan.description}</CardDescription>

                      <div style={{ marginTop: '1rem', display: 'flex', alignItems: 'end', justifyContent: 'center', gap: '0.25rem' }}>
                        <AnimatePresence mode="wait">
                          <motion.span
                            key={`${plan.name}-price-${isYearly}`}
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            transition={{ duration: 0.2 }}
                            style={{ fontSize: '2.5rem', fontWeight: '800', letterSpacing: '-0.025em', color: plan.popular ? '#1d4ed8' : '#1f2937' }}
                          >
                            {plan.totalPrice}
                          </motion.span>
                        </AnimatePresence>
                        <span style={{ paddingBottom: '0.25rem', fontSize: '0.875rem', color: '#6b7280' }}>{plan.period}</span>
                        {isYearly && (
                          <span style={{ paddingBottom: '0.25rem', fontSize: '0.875rem', color: '#6b7280' }}>{plan.monthlyEquivalent}</span>
                        )}
                        <span style={{ paddingBottom: '0.25rem', fontSize: '0.6875rem', color: '#9ca3af', marginLeft: '0.25rem' }}>USD</span>
                      </div>
                    </CardHeader>

                    <CardContent style={{ paddingBottom: '2rem' }}>
                      <ul style={{ margin: '0', padding: '0', listStyle: 'none' }}>
                        {plan.features.map((feature, featureIndex) => (
                          <motion.li 
                            key={`${plan.name}-feature-${featureIndex}`}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: (index + featureIndex) * 0.05 }}
                            style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '0.75rem' }}
                          >
                            <span style={{ marginTop: '0.125rem', display: 'grid', height: '1.25rem', width: '1.25rem', placeItems: 'center', borderRadius: '50%', background: 'rgba(59, 130, 246, 0.1)', color: '#2563eb' }}>
                              <Check style={{ height: '0.875rem', width: '0.875rem' }} />
                            </span>
                            <span style={{ color: '#374151' }}>{feature}</span>
                          </motion.li>
                        ))}
                      </ul>

                      <div style={{ paddingTop: '1.5rem' }}>
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Button
                            asChild
                            size="lg"
                            style={{ width: '100%', borderRadius: '0.75rem', paddingTop: '1.25rem', paddingBottom: '1.25rem', fontWeight: '600', transition: 'all 0.3s', borderWidth: '2px', background: plan.popular ? 'linear-gradient(to right, #2563eb, #3730a3)' : '#eff6ff', color: plan.popular ? '#eff6ff' : '#2563eb', borderColor: plan.popular ? '#2563eb' : '#2563eb', boxShadow: plan.popular ? '0 10px 15px -3px rgba(0, 0, 0, 0.1)' : 'none' }}
                          >
                            <Link href={plan.href}>{plan.cta}</Link>
                          </Button>
                        </motion.div>
                      </div>
                    </CardContent>

                    {/* Decorative corner highlight */}
                    <div style={{ pointerEvents: 'none', position: 'absolute', right: '-1.5rem', top: '-1.5rem', height: '6rem', width: '6rem', borderRadius: '50%', background: 'rgba(59, 130, 246, 0.1)', filter: 'blur(2rem)' }} />
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Bottom CTA */}
          <div style={{ marginTop: '3rem' }}>
            <p style={{ color: 'rgba(239, 246, 255, 0.8)' }}>Start your free trial today. Cancel anytime.</p>
            <div style={{ marginTop: '1rem' }}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button variant="outline" size="lg" asChild style={{ borderColor: 'rgba(147, 197, 253, 0.6)', color: 'blue' }}>
                  <Link href="/contact">Contact Sales</Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Page-level subtle vignette */}
      <div style={{ pointerEvents: 'none', position: 'absolute', inset: '0', background: 'radial-gradient(ellipse at center, rgba(0, 0, 0, 0.05) 0%, transparent 60%)' }}></div>

      <style jsx>{`
        @keyframes background-move {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -40px) scale(1.06); }
          66% { transform: translate(-20px, 20px) scale(0.96); }
          100% { transform: translate(0px, 0px) scale(1); }
        }

        @keyframes float-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(6px); }
        }

        @keyframes shimmer {
          0% { transform: translateX(-30%); opacity: 0; }
          10% { opacity: 0.9; }
          100% { transform: translateX(30%); opacity: 0; }
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .yearly-gradient {
          background: linear-gradient(135deg, #0A5BEC 0%, #2A69FF 50%, #0A5BEC 100%);
          background-size: 300% 300%;
          animation: gradient-shift 3s ease infinite;
        }

        .monthly-gradient {
          background: linear-gradient(135deg, #3B82F6 0%, #1D4ED8 50%, #3B82F6 100%);
          background-size: 300% 300%;
          animation: gradient-shift 3s ease infinite;
        }

        /* Add more styles if needed */
      `}</style>
    </section>
  )
}
