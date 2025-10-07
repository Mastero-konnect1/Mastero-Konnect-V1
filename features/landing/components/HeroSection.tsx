'use client'

import { Sparkles } from "lucide-react";


const HeroSection = () => {
  return (
    <div style={{
      background: '#ffffff',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      {/* Hero Section */}
      <main style={{
        position: 'relative',
        height: '100vh',
        padding: 'clamp(120px, 30vw, 190px) clamp(20px, 5vw, 80px) clamp(40px, 8vw, 80px)',
        textAlign: 'center',
        overflow: 'hidden'
      }}>
        <style>{`@keyframes floatYSlow{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}@keyframes floatYFast{0%,100%{transform:translateY(0)}50%{transform:translateY(-16px)}}`}</style>
        {/* Floating Icons - Responsive positioning */}
        <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/figma.svg" alt="Design" className="hidden md:block" style={{position:'absolute',top:'clamp(160px, 35vw, 190px)',left:'clamp(60px, 25vw, 290px)',width:'clamp(40px, 6vw, 56px)',height:'clamp(40px, 6vw, 56px)',padding:'8px',borderRadius:'12px',background:'rgba(255,255,255,0.6)',backdropFilter:'blur(8px)',boxShadow:'0 10px 25px rgba(0,0,0,0.12)',animation:'floatYSlow 6s ease-in-out infinite'}} />

        <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/react.svg" alt="React" className="hidden md:block" style={{position:'absolute',top:'clamp(200px, 35vw, 220px)',right:'clamp(20px, 25vw, 290px)',width:'clamp(40px, 6vw, 56px)',height:'clamp(40px, 6vw, 56px)',padding:'8px',borderRadius:'12px',background:'rgba(255,255,255,0.6)',backdropFilter:'blur(8px)',boxShadow:'0 10px 25px rgba(0,0,0,0.12)',animation:'floatYFast 7s ease-in-out infinite'}} />

        <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/github.svg" alt="GitHub" className="hidden md:block" style={{position:'absolute',top:'clamp(300px, 45vw, 320px)',left:'clamp(15px, 12vw, 180px)',width:'clamp(40px, 6vw, 56px)',height:'clamp(40px, 6vw, 56px)',padding:'8px',borderRadius:'12px',background:'rgba(255,255,255,0.6)',backdropFilter:'blur(8px)',boxShadow:'0 10px 25px rgba(0,0,0,0.12)',animation:'floatYSlow 8s ease-in-out infinite'}} />

        <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/nextdotjs.svg" alt="Next.js" className="hidden md:block" style={{position:'absolute',top:'clamp(320px, 45vw, 340px)',right:'clamp(10px, 28vw, 200px)',width:'clamp(40px, 6vw, 56px)',height:'clamp(40px, 6vw, 56px)',padding:'8px',borderRadius:'12px',background:'rgba(255,255,255,0.6)',backdropFilter:'blur(8px)',boxShadow:'0 10px 25px rgba(0,0,0,0.12)',animation:'floatYFast 5.5s ease-in-out infinite'}} />

        <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/typescript.svg" alt="TypeScript" className="hidden md:block" style={{position:'absolute',top:'clamp(400px, 55vw, 480px)',left:'clamp(25px, 28vw, 290px)',width:'clamp(40px, 6vw, 56px)',height:'clamp(40px, 6vw, 56px)',padding:'8px',borderRadius:'12px',background:'rgba(255,255,255,0.6)',backdropFilter:'blur(8px)',boxShadow:'0 10px 25px rgba(0,0,0,0.12)',animation:'floatYSlow 7.5s ease-in-out infinite'}} />

        <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/supabase.svg" alt="Supabase" className="hidden md:block" style={{position:'absolute',top:'clamp(480px, 52vw, 420px)',right:'clamp(25px, 28vw, 240px)',width:'clamp(40px, 6vw, 56px)',height:'clamp(40px, 6vw, 56px)',padding:'8px',borderRadius:'12px',background:'rgba(255,255,255,0.6)',backdropFilter:'blur(8px)',boxShadow:'0 10px 25px rgba(0,0,0,0.12)',animation:'floatYFast 6.5s ease-in-out infinite'}} />

        {/* Gradient Circle Decorations */}
        {/* <div style={{
          position: 'absolute',
          top: '120px',
          left: '200px',
          width: '120px',
          height: '120px',
          background: 'linear-gradient(135deg,rgb(140, 190, 236), rgb(220, 218, 231), rgb(94, 67, 233))',
          borderRadius: '50%',
          opacity: '0.1',
          filter: 'blur(15px)'
        }}></div>

        <div style={{
          position: 'absolute',
          top: '250px',
          right: '180px',
          width: '80px',
          height: '80px',
          background: 'linear-gradient(135deg,rgb(140, 190, 236), rgb(220, 218, 231), rgb(94, 67, 233))',
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
          background: 'linear-gradient(135deg, #6B50EB, #6256ED, #555DEF)',
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
          background: 'linear-gradient(135deg, #6B50EB, #6256ED, #555DEF)',
          borderRadius: '50%',
          opacity: '0.2',
          filter: 'blur(15px)'
        }} className="hidden md:block"></div> */}

        {/* Main Headline */}
        <h1 style={{
          fontSize: '74px',
          fontWeight: '700',
          lineHeight: '1.1',
          color: '#1e293b',
          marginBottom: '24px',
          maxWidth: '800px',
          margin: '0 auto 24px'
        }}>
          Ready to {' '}
          <span style={{ background: 'linear-gradient(90deg, #3A86FF 0%, #7B2FF7 100%)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent' }}> level up?</span>{' '}
          
        </h1>

        {/* Subtitle */}
        <p style={{
          fontSize: '28px',
          color: '#64748b',
          lineHeight: '1.6',
          maxWidth: '720px',
          margin: '0 auto 48px'
        }}>
           Connect with top mentors, gain clarity, and grow faster with InnovKaro.
           <span style={{ color: '#6256ED' }}>          One right conversation can change your entire direction.
          </span>{' '}
           Your AI-powered success partner is just around the corner
        </p>

        {/* Button */}
        {/* <button style={{
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
        </button> */}

        {/* Gradient Background Below Button */}
        <div style={{
          position: 'relative',
          bottom: '0',
          left: '0',
          right: '0',
          height: '300px',
          background: 'linear-gradient(135deg,rgb(64, 142, 216), rgb(220, 218, 231), rgb(90, 56, 136))',
          // borderRadius: '50% 50% 0 0',
          opacity: '0.2',
          transform: 'translateY(150px)'
        }} />
      
      </main>

      
    </div>
  );
};

export default HeroSection;
