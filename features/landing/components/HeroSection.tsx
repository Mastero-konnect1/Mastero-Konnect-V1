'use client'

import { Sparkles } from "lucide-react";


const HeroSection = () => {
  return (
    <div style={{
      background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      {/* Hero Section */}
      <main style={{
        position: 'relative',
        padding: 'clamp(60px, 10vw, 120px) clamp(20px, 5vw, 80px) clamp(40px, 8vw, 80px)',
        textAlign: 'center',
        overflow: 'hidden'
      }}>
        {/* Floating Icons - Responsive positioning */}
        <div style={{
          position: 'absolute',
          top: 'clamp(120px, 15vw, 140px)',
          left: 'clamp(20px, 15vw, 200px)',
          width: 'clamp(40px, 6vw, 56px)',
          height: 'clamp(40px, 6vw, 56px)',
          backgroundColor: '#8b5cf6',
          borderRadius: '12px',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontSize: 'clamp(14px, 2.5vw, 20px)',
          fontWeight: 'bold',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
        }}
        className="hidden md:flex">
          S
        </div>

        <div style={{
          position: 'absolute',
          top: 'clamp(100px, 12vw, 120px)',
          right: 'clamp(20px, 15vw, 220px)',
          width: 'clamp(40px, 6vw, 56px)',
          height: 'clamp(40px, 6vw, 56px)',
          backgroundColor: '#10b981',
          borderRadius: '12px',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontSize: 'clamp(10px, 2vw, 14px)',
          fontWeight: 'bold',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
        }}
        className="hidden md:flex">
          qb
        </div>

        <div style={{
          position: 'absolute',
          top: 'clamp(200px, 25vw, 220px)',
          left: 'clamp(15px, 12vw, 180px)',
          width: 'clamp(40px, 6vw, 56px)',
          height: 'clamp(40px, 6vw, 56px)',
          backgroundColor: '#84cc16',
          borderRadius: '12px',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontSize: 'clamp(12px, 2.2vw, 16px)',
          fontWeight: 'bold',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
        }}
        className="hidden md:flex">
          🛍️
        </div>

        <div style={{
          position: 'absolute',
          top: 'clamp(180px, 22vw, 200px)',
          right: 'clamp(15px, 12vw, 200px)',
          width: 'clamp(40px, 6vw, 56px)',
          height: 'clamp(40px, 6vw, 56px)',
          backgroundColor: '#10b981',
          borderRadius: '12px',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontSize: 'clamp(12px, 2.2vw, 16px)',
          fontWeight: 'bold',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
        }}
        className="hidden md:flex">
          X
        </div>

        <div style={{
          position: 'absolute',
          top: 'clamp(300px, 35vw, 340px)',
          left: 'clamp(25px, 18vw, 220px)',
          width: 'clamp(40px, 6vw, 56px)',
          height: 'clamp(40px, 6vw, 56px)',
          backgroundColor: '#f59e0b',
          borderRadius: '12px',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontSize: 'clamp(12px, 2.2vw, 16px)',
          fontWeight: 'bold',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
        }}
        className="hidden md:flex">
          📊
        </div>

        <div style={{
          position: 'absolute',
          top: 'clamp(280px, 32vw, 320px)',
          right: 'clamp(25px, 18vw, 240px)',
          width: 'clamp(40px, 6vw, 56px)',
          height: 'clamp(40px, 6vw, 56px)',
          backgroundColor: '#10b981',
          borderRadius: '12px',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontSize: 'clamp(12px, 2.2vw, 16px)',
          fontWeight: 'bold',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
        }}
        className="hidden md:flex">
          📄
        </div>

        {/* Gradient Circle Decorations */}
        <div style={{
          position: 'absolute',
          top: '120px',
          left: '200px',
          width: '120px',
          height: '120px',
          background: 'linear-gradient(135deg, #8b5cf6, #06b6d4)',
          borderRadius: '50%',
          opacity: '0.1',
          filter: 'blur(30px)'
        }}></div>

        <div style={{
          position: 'absolute',
          top: '250px',
          right: '180px',
          width: '80px',
          height: '80px',
          background: 'linear-gradient(135deg, #f59e0b, #8b5cf6)',
          borderRadius: '50%',
          opacity: '0.15',
          filter: 'blur(20px)'
        }} className="hidden md:block"></div>

        <div style={{
          position: 'absolute',
          top: '400px',
          left: '300px',
          width: '100px',
          height: '100px',
          background: 'linear-gradient(135deg, #06b6d4, #8b5cf6, #f59e0b)',
          borderRadius: '50%',
          opacity: '0.1',
          filter: 'blur(25px)'
        }} className="hidden md:block"></div>

        <div style={{
          position: 'absolute',
          top: '160px',
          right: '300px',
          width: '60px',
          height: '60px',
          background: 'linear-gradient(135deg, #8b5cf6, #f59e0b)',
          borderRadius: '50%',
          opacity: '0.2',
          filter: 'blur(15px)'
        }} className="hidden md:block"></div>

        {/* Main Headline */}
        <h1 style={{
          fontSize: '64px',
          fontWeight: '700',
          lineHeight: '1.1',
          color: '#1e293b',
          marginBottom: '24px',
          maxWidth: '800px',
          margin: '0 auto 24px'
        }}>
          Connect with{' '}
          <span style={{ color: '#3b82f6' }}>world</span>{' '}
          <br />
          {' '}
          <span style={{ color: '#3b82f6' }}>class</span>{' '}
          Mentors
        </h1>

        {/* Subtitle */}
        <p style={{
          fontSize: '20px',
          color: '#64748b',
          lineHeight: '1.6',
          maxWidth: '720px',
          margin: '0 auto 48px'
        }}>
           Transform your career with personalized guidance from industry experts. 
            Our AI matches you with the perfect mentor for your goals.
        </p>

        {/* Button */}
        <button style={{
          backgroundColor: '#1e293b',
          color: 'white',
          border: 'none',
          borderRadius: '50px',
          padding: '16px 32px',
          fontSize: '16px',
          fontWeight: '600',
          cursor: 'pointer',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '12px',
          transition: 'all 0.2s',
          marginBottom: '80px'
        }}
        onMouseEnter={(e) => {
          (e.target as HTMLElement).style.backgroundColor = '#0f172a';
          (e.target as HTMLElement).style.transform = 'translateY(-2px)';
        }}
        onMouseLeave={(e) => {
          (e.target as HTMLElement).style.backgroundColor = '#1e293b';
          (e.target as HTMLElement).style.transform = 'translateY(0)';
        }}
        >
          <div style={{
            width: '20px',
            height: '20px',
            backgroundColor: 'white',
            borderRadius: '50%',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <div style={{
              width: '0',
              height: '0',
              borderLeft: '6px solid #1e293b',
              borderTop: '4px solid transparent',
              borderBottom: '4px solid transparent',
              marginLeft: '2px'
            }}></div>
          </div>
         Get Started
        </button>

        {/* Gradient Background Below Button */}
        <div style={{
          position: 'absolute',
          bottom: '0',
          left: '0',
          right: '0',
          height: '300px',
          background: 'linear-gradient(135deg, #3b82f6 0%, #06b6d4 25%, #84cc16 50%, #f59e0b 75%, #8b5cf6 100%)',
          borderRadius: '50% 50% 0 0',
          opacity: '0.2',
          transform: 'translateY(150px)'
        }}></div>

      
      </main>

      
    </div>
  );
};

export default HeroSection;
