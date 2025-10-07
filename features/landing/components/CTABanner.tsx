import React from "react";
import { Sparkles, ArrowRight, Users, TrendingUp, Heart } from "lucide-react";
import Link from "next/link";

const CTABanner = () => {
  const styles = {
    heroGradient: {
      background:
        "linear-gradient(135deg, #6B50EB, #6256ED, #555DEF)",
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

        .btn-hero:hover {
          background: hsl(0, 0%, 95%) !important;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px 0 rgba(0, 0, 0, 0.15) !important;
        }

        .btn-hero:hover .arrow {
          transform: translateX(4px);
        }

        .btn-hero-outline:hover {
          background: rgba(255, 255, 255, 0.1) !important;
          border-color: rgba(255, 255, 255, 0.5) !important;
        }

        .arrow {
          transition: transform 0.3s ease;
        }

        /* Star animations */
        @keyframes starTwinkle {
          0%, 100% { opacity: 0.25; transform: scale(1) rotate(0deg); }
          50% { opacity: 0.9; transform: scale(1.05) rotate(5deg); }
        }
        @keyframes starFloat {
          0% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
          100% { transform: translateY(0); }
        }
        .star { opacity: 0.6; filter: drop-shadow(0 2px 6px rgba(98,86,237,0.25)); }
        .star--twinkle { animation: starTwinkle 3s ease-in-out infinite; }
        .star--float { animation: starFloat 6s ease-in-out infinite; }

        /* Stats card hover (match button hover feel) */
        .stats-card {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .stats-card:hover {
          background: rgba(255, 255, 255, 0.12) !important;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px 0 rgba(0, 0, 0, 0.15) !important;
          border-color: rgba(255, 255, 255, 0.35) !important;
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

      <div
        style={{
          ...styles.heroGradient,
          minHeight: "88vh",
          position: "relative",
          overflow: "hidden",
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
        {/* Stars */}
        <svg width="0" height="0" style={{ position: "absolute" }}>
          <defs>
            <symbol id="mk-star" viewBox="0 0 100 100">
              <path d="M50 6 L61 36 L93 39 L68 58 L75 90 L50 73 L25 90 L32 58 L7 39 L39 36 Z" fill="white" />
            </symbol>
          </defs>
        </svg>
        {/* Top-left star */}
        <svg className="star star--twinkle" width="80" height="80" style={{ position: 'absolute', top: '2.5rem', left: '1.25rem', opacity: 0.25 }}>
          <use href="#mk-star" />
        </svg>
        {/* Mid-right small stars */}
        <svg className="star star--float" width="32" height="32" style={{ position: 'absolute', top: '35%', right: '4rem', opacity: 0.35 }}>
          <use href="#mk-star" />
        </svg>
        <svg className="star star--twinkle" width="22" height="22" style={{ position: 'absolute', top: '28%', right: '7.5rem', opacity: 0.35 }}>
          <use href="#mk-star" />
        </svg>
        {/* Bottom-right larger star */}
        <svg className="star star--twinkle" width="92" height="92" style={{ position: 'absolute', bottom: '4.5rem', right: '2rem', opacity: 0.25 }}>
          <use href="#mk-star" />
        </svg>
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
          <div style={{ marginBottom: "1.5rem", ...styles.fadeIn }}>
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
              }}
            >
              Ready to Accelerate Your{" "}
              <span style={styles.gradientText}>Career?</span>
            </h1>
            <p
              className="hero-subtitle"
              style={{
                fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
                color: "rgba(255, 255, 255, 0.9)",
                lineHeight: "1.6",
                maxWidth: "42rem",
                margin: "0 auto",
              }}
            >
              Start your personalized mentorship journey today and unlock your
              full potential with expert guidance.
            </p>
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
        <div style={{ padding: "0 1rem 1.5rem", marginTop: "-1rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "1.25rem",
              }}
            >
              {[
                { icon: <Users />, number: "5,000+", label: "Expert Mentors" },
                {
                  icon: <TrendingUp />,
                  number: "3.2x",
                  label: "Faster Career Growth",
                },
                { icon: <Heart />, number: "95%", label: "Satisfaction Rate" },
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
                  <div style={{ marginBottom: "0.75rem",  justifyItems:"center" }}>{stat.icon}</div>
                  <div style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "0.5rem" }}>
                    {stat.number}
                  </div>
                  <div style={{ color: "rgba(255, 255, 255, 0.8)", fontWeight: "500" }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CTABanner;