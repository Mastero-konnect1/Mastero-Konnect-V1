import { Brain, Users, CheckCircle, Target, Zap } from 'lucide-react'

const services = [
  {
    icon: Brain,
    title: "AI-Powered Matching",
    description: "Advanced AI analyzes your goals, skills, and preferences to find the perfect mentor match.",
    features: ["Smart compatibility scoring", "Continuous learning", "Instant recommendations"],
    iconBg: "#E6F0FF",
    iconColor:"#5183F0"
  },
  {
    icon: Users,
    title: "Expert Mentors",
    description: "Connect with industry leaders, executives, and specialists across 50+ fields and industries.",
    features: ["Verified professionals", "Industry expertise", "Proven track records"],
    iconBg: "#E8FFF3",
    iconColor:"#7BDCB9"
  },
  {
    icon: Target,
    title: "Goal-Oriented Sessions",
    description: "Structured mentorship programs designed to help you achieve specific career and personal goals.",
    features: ["Custom roadmaps", "Progress tracking", "Milestone celebrations"],
    iconBg: "#FFECEF",
    iconColor:"#E6639B"
  },
  {
    icon: Zap,
    title: "Flexible Scheduling",
    description: "Book sessions that fit your schedule with easy rescheduling and multiple communication options.",
    features: ["24/7 availability", "Multiple time zones", "Various session formats"],
    iconBg: "#FFF5E6",
    iconColor:"#FB9851"
  }
]

export default function ServicesSection() {
  return (
    <section style={{
      padding: '0',
      // background: '#ffffff',
      // minHeight: '100vh'
     
      minHeight: '100vh',
      width: '90%',
      margin: '0 auto',
     
    }}>
      <div style={{ background: 'linear-gradient(135deg,rgb(64, 142, 216), rgb(220, 218, 231), rgb(90, 56, 136))',
        opacity:'0.8'
      }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '80px 16px'
      }}>
        {/* Section Header */}
        <div style={{
          textAlign: 'center',
          marginBottom: '64px'
        }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 4rem)',
            fontWeight: 'bold',
            color: '#0F172A',
            marginBottom: '24px',
            lineHeight: '1.2'
          }}>
            Who{' '}
            <span style={{
              background: 'linear-gradient(135deg, #8B5CF6, #3B82F6)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
             we are ?
            </span>{' '}
           
          </h2>
          <div style={{
            width: '64px',
            height: '4px',
            background: 'linear-gradient(135deg, #6B50EB, #6256ED, #555DEF)',
            margin: '0 auto 32px auto',
            borderRadius: '2px'
          }}></div>
          <p style={{
            fontSize: '20px',
            color: '#64748B',
            maxWidth: '720px',
            margin: '0 auto',
            lineHeight: '1.7'
          }}>
            We blend cutting-edge AI technology with human expertise to deliver 
            mentorship experiences that truly make an impact.
          </p>
        </div>

        {/* Services Grid - 1 card on mobile, 2 cards on desktop */}
        <div style={{
          display: 'grid',
          gap: 'clamp(24px, 4vw, 32px)',
          maxWidth: '1024px',
          margin: '0 auto'
        }}
        className="grid-cols-1 md:grid-cols-2">
          {services.map((service, index) => (
            <div
              key={index}
              style={{
                background: 'white',
                borderRadius: '20px',
                padding: 'clamp(16px, 4vw, 32px)',
                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.3s ease',
                border: 'none',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)'
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.1)'
              }}
            >
              <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'nowrap',
                alignItems: 'center',
                gap: 'clamp(12px, 3vw, 16px)',
                marginBottom: 'clamp(12px, 3vw, 16px)'
              }}>
                <div style={{
                  padding: 'clamp(12px, 3.5vw, 16px)',
                  borderRadius: '16px',
                  background: service.iconBg,
                  color: service.iconColor,
                  flexShrink: 0
                }}>
                  <service.icon style={{ width: 'clamp(20px, 4vw, 24px)', height: 'clamp(20px, 4vw, 24px)', color:'currentcolor' }} />
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{
                    fontSize: 'clamp(18px, 2.5vw, 20px)',
                    fontWeight: '600',
                    color: '#0F172A',
                    marginBottom: 'clamp(8px, 2vw, 12px)',
                    lineHeight: '1.3',
                    textAlign: 'left'
                  }}>
                    {service.title}
                  </h3>
                </div>
              </div>
              <div style={{
                marginBottom: 'clamp(12px, 3vw, 16px)'
              }}>
                <p style={{
                  color: '#64748B',
                  fontSize: 'clamp(14px, 2.2vw, 16px)',
                  lineHeight: '1.6',
                  margin: 0
                }}>
                  {service.description}
                </p>
              </div>
              
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0
              }}>
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    marginBottom: featureIndex < service.features.length - 1 ? '12px' : '0',
                    fontSize: 'clamp(13px, 2vw, 14px)',
                    color: '#64748B'
                  }}>
                    <CheckCircle style={{ 
                      width: 'clamp(14px, 3vw, 16px)', 
                      height: 'clamp(14px, 3vw, 16px)', 
                      color: '#10B981',
                      flexShrink: 0
                    }} />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  )
}