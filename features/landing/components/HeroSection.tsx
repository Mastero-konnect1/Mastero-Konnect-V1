// Hero Section 
'use client'

import { Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    // Trigger entrance animations
    const timer = setTimeout(() => setEntered(true), 120);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{
      background: 'white',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      position: 'relative',
      zIndex: 10
    }}>
      <style>{`
        @keyframes floatYSlow{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}
        @keyframes floatYFast{0%,100%{transform:translateY(0)}50%{transform:translateY(-16px)}}
        
        /* Hero background zoom */
        .hero-bg {
          transform: scale(1);
          transition: transform 1000ms cubic-bezier(.2,.8,.2,1);
          will-change: transform;
        }
        .hero-bg.entered { 
          transform: scale(1.03); 
        }
        
        /* Headline mask reveal */
        .hero-headline {
          overflow: hidden;
        }
        .hero-headline .line {
          display: inline-block;
          transform: translateY(100%);
          opacity: 0;
          transition: transform 1200ms cubic-bezier(.16,.84,.35,1), opacity 520ms ease-out;
          will-change: transform, opacity;
        }
        .hero-headline.entered .line {
          transform: translateY(0);
          opacity: 1;
        }
        
        /* Subtitle reveal */
        .hero-subtitle {
          transform: translateY(12px);
          opacity: 0;
          transition: transform 120ms cubic-bezier(.22,.9,.3,1), opacity 460ms ease-out;
          transition-delay: 300ms;
        }
        .hero-subtitle.entered {
          transform: translateY(0);
          opacity: 1;
        }
        
        /* Reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .hero-bg, .hero-headline .line, .hero-subtitle {
            transition: none !important;
            transform: none !important;
            opacity: 1 !important;
          }
        }
      `}</style>
      
      {/* Hero Section */}
      <main className={`hero hero-bg ${entered ? 'entered' : ''}`} style={{
        position: 'relative',
        height: '100vh',
        padding: 'clamp(120px, 30vw, 190px) clamp(20px, 5vw, 80px) clamp(40px, 8vw, 80px)',
        textAlign: 'center',
        overflow: 'hidden',
        background: 'white'
      }}>
        
        {/* Contained Background Gradient */}
        <div style={{
          position: 'absolute',
          top: '40%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 'min(1600px, 100vw)',
          height: 'min(500px, 70vh)',
          background: 'linear-gradient(90deg, rgb(64, 142, 216), rgb(220, 218, 231),rgb(220, 218, 231), rgb(90, 56, 136))',
          borderRadius: '84px',
          opacity: '0.6',
          filter: 'blur(35px)',
          zIndex: 0
        }} />
        
        {/* Additional decorative blobs */}
        {/* <div style={{
          position: 'absolute',
          top: '20%',
          right: '15%',
          width: '300px',
          height: '300px',
          background: 'linear-gradient(135deg, rgba(64, 142, 216, 0.1), rgba(90, 56, 136, 0.1))',
          borderRadius: '50%',
          filter: 'blur(30px)',
          zIndex: 0
        }} /> */}
        
        {/* <div style={{
          position: 'absolute',
          bottom: '15%',
          left: '10%',
          width: '250px',
          height: '250px',
          background: 'linear-gradient(135deg, rgba(220, 218, 231, 0.1), rgba(64, 142, 216, 0.1))',
          borderRadius: '50%',
          filter: 'blur(25px)',
          zIndex: 0
        }} /> */}

        {/* Floating Icons - Responsive positioning */}
        <img aria-hidden src={'/figma.png'} alt="Design" style={{position:'absolute',top:'clamp(160px, 35vw, 190px)',left:'clamp(60px, 25vw, 290px)',width:'clamp(40px, 6vw, 56px)',height:'clamp(40px, 6vw, 56px)',padding:'8px',borderRadius:'12px',background:'rgba(255,255,255,0.6)',backdropFilter:'blur(8px)',boxShadow:'0 10px 25px rgba(0,0,0,0.12)',animation:'floatYSlow 6s ease-in-out infinite',pointerEvents:'none',zIndex:1}} />

        <img aria-hidden src={'/physics.png'} alt="React" style={{position:'absolute',top:'clamp(200px, 35vw, 220px)',right:'clamp(20px, 25vw, 290px)',width:'clamp(40px, 6vw, 56px)',height:'clamp(40px, 6vw, 56px)',padding:'8px',borderRadius:'12px',background:'rgba(255,255,255,0.6)',backdropFilter:'blur(8px)',boxShadow:'0 10px 25px rgba(0,0,0,0.12)',animation:'floatYFast 7s ease-in-out infinite',pointerEvents:'none',zIndex:1}} />

        <img aria-hidden src={'/github.png'} alt="GitHub" style={{position:'absolute',top:'clamp(300px, 45vw, 320px)',left:'clamp(15px, 12vw, 180px)',width:'clamp(40px, 6vw, 56px)',height:'clamp(40px, 6vw, 56px)',padding:'8px',borderRadius:'12px',background:'rgba(255,255,255,0.6)',backdropFilter:'blur(8px)',boxShadow:'0 10px 25px rgba(0,0,0,0.12)',animation:'floatYSlow 8s ease-in-out infinite',pointerEvents:'none',zIndex:1}} />

        <img aria-hidden src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/nextdotjs.svg" alt="Next.js" style={{position:'absolute',top:'clamp(320px, 45vw, 340px)',right:'clamp(10px, 28vw, 200px)',width:'clamp(40px, 6vw, 56px)',height:'clamp(40px, 6vw, 56px)',padding:'8px',borderRadius:'12px',background:'rgba(255,255,255,0.6)',backdropFilter:'blur(8px)',boxShadow:'0 10px 25px rgba(0,0,0,0.12)',animation:'floatYFast 5.5s ease-in-out infinite',pointerEvents:'none',zIndex:1}} />

        <img aria-hidden src={'/typescript.png'} alt="TypeScript" style={{position:'absolute',top:'clamp(400px, 55vw, 480px)',left:'clamp(25px, 28vw, 290px)',width:'clamp(40px, 6vw, 56px)',height:'clamp(40px, 6vw, 56px)',padding:'8px',borderRadius:'12px',background:'rgba(255,255,255,0.6)',backdropFilter:'blur(8px)',boxShadow:'0 10px 25px rgba(0,0,0,0.12)',animation:'floatYSlow 7.5s ease-in-out infinite',pointerEvents:'none',zIndex:1}} />

        <img aria-hidden src={'/flash.png'} alt="Supabase" style={{position:'absolute',top:'clamp(420px, 52vw, 480px)',right:'clamp(25px, 28vw, 240px)',width:'clamp(40px, 6vw, 56px)',height:'clamp(40px, 6vw, 56px)',padding:'8px',borderRadius:'12px',background:'rgba(255,255,255,0.6)',backdropFilter:'blur(8px)',boxShadow:'0 10px 25px rgba(0,0,0,0.12)',animation:'floatYFast 6.5s ease-in-out infinite', backgroundColor:'black',pointerEvents:'none',zIndex:1}} />

        {/* Main Headline */}
        <h1 className="hero-headline headline" style={{
          fontSize: '74px',
          fontWeight: '700',
          lineHeight: '1.1',
          color: '#1e293b',
          marginBottom: '24px',
          maxWidth: '800px',
          margin: '0 auto 24px',
          position: 'relative',
          zIndex: 2
        }}>
          <span className="line" style={{ transitionDelay: '0ms' }}>Ready to </span>
          <span className="line" style={{ background: 'linear-gradient(90deg, #3A86FF 0%, #7B2FF7 100%)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent', transitionDelay: '70ms' }}>level up?</span>
        </h1>

        {/* Subtitle */}
        <p className={`hero-subtitle ${entered ? 'entered' : ''}`} style={{
          fontSize: '28px',
          color: '#64748b',
          lineHeight: '1.6',
          maxWidth: '720px',
          margin: '0 auto 48px',
          position: 'relative',
          zIndex: 2
        }}>
           Connect with top mentors, gain clarity, and grow faster with InnovKaro.
           <span style={{ color: '#6256ED' }}> One right conversation can change your entire direction.</span>{' '}
           Your AI-powered success partner is just around the corner
        </p>
      
      </main>
    </div>
  );
};

export default HeroSection;