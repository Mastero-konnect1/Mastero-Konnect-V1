'use client'

import { useState, useRef, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { Inter } from 'next/font/google'

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700']
})

export default function FeedbackRewards() {
  const router = useRouter();
  const { id } = useParams();
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [progress, setProgress] = useState(280);
  const xpRef = useRef<HTMLDivElement>(null);

  const canSubmit = rating > 0 && feedback.trim().length > 0;

  const submit = () => {
    if (!canSubmit) return;

    // XP animation
    if (xpRef.current) {
      xpRef.current.style.transform = 'scale(1.3)';
      xpRef.current.style.color = '#10B981';
      setTimeout(() => {
        if (xpRef.current) {
          xpRef.current.style.transform = 'scale(1)';
          xpRef.current.style.color = '#2F6BAE';
        }
      }, 600);
    }

    setProgress(320); // +40 XP
    setTimeout(() => router.push('/'), 2000);
  };

  return (
    <main className={`container ${inter.className}`} style={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(180deg, rgba(47,107,174,0.18), rgba(255,255,255,1), rgba(90,141,200,0.18))',
      padding: '40px 24px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <style>
        {`
          :root { --blue-1:#2F6BAE; --blue-2:#5A8DC8; --gradient: linear-gradient(135deg, var(--blue-1), var(--blue-2)); }
          .card { background:#fff; border:1px solid #EAEAEA; border-radius:12px; box-shadow: 0 4px 12px rgba(0,0,0,0.05); padding:24px; margin-bottom:24px; max-width:500px; width:100% }
          .stars { display:flex; gap:8px; justify-content:center; margin:16px 0 }
          .star { font-size:32px; cursor:pointer; color:#E5E7EB; transition: color 0.2s }
          .star.filled { color:#F59E0B }
          .textarea { width:100%; min-height:100px; border:1px solid #D1D5DB; border-radius:8px; padding:12px; font:inherit; resize:vertical }
          .progress-bg { background:#E5E7EB; height:8px; border-radius:4px; overflow:hidden }
          .progress-fill { background: var(--gradient); height:100%; transition: width 0.5s ease }
          .badge { background:#F3F4F6; color:#374151; padding:8px 16px; border-radius:20px; font-size:12px; font-weight:600 }
          .btn-submit { background: var(--gradient); color:#fff; border:none; border-radius:999px; padding:16px 24px; font-weight:800; cursor:pointer; box-shadow: 0 8px 20px rgba(47,107,174,0.25); width:100% }
          .btn-submit:disabled { opacity:0.5; cursor:not-allowed }
          .text-center { text-align:center }
          .mb-16 { margin-bottom:16px }
          .mb-24 { margin-bottom:24px }
        `}
      </style>

      <div style={{ maxWidth: 600, width: '100%' }}>
        <h1 className="text-center mb-24" style={{ fontSize: '28px', fontWeight: 700, color: '#333' }}>
          Session Complete! 🎉
        </h1>

        <div className="card">
          <h2 className="text-center mb-16" style={{ fontSize: '20px', fontWeight: 600, color: '#333' }}>
            How was your session with Sarah?
          </h2>

          <div className="stars">
            {[1, 2, 3, 4, 5].map(star => (
              <span
                key={star}
                className={`star ${star <= rating ? 'filled' : ''}`}
                onClick={() => setRating(star)}
              >
                ★
              </span>
            ))}
          </div>

          <textarea
            className="textarea"
            placeholder="Share your experience with Sarah and the community..."
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
          />
        </div>

        <div className="card">
          <h3 className="text-center mb-16" style={{ fontSize: '18px', fontWeight: 600, color: '#333' }}>
            Rewards Progress
          </h3>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
            <span style={{ fontSize: '14px', color: '#6B7280' }}>Level 2 Learner</span>
            <div ref={xpRef} style={{ fontSize: '18px', fontWeight: 700, color: '#2F6BAE', transition: 'all 0.3s ease' }}>
              {progress} XP
            </div>
          </div>

          <div className="progress-bg">
            <div className="progress-fill" style={{ width: `${(progress / 500) * 100}%` }} />
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 16 }}>
            <div className="badge">🏆 Mentorship Champion</div>
            <span style={{ fontSize: '12px', color: '#9CA3AF' }}>{500 - progress} XP to Level 3</span>
          </div>
        </div>

        <button
          className="btn-submit"
          disabled={!canSubmit}
          onClick={submit}
        >
          Submit Feedback & Continue
        </button>
      </div>
    </main>
  );
}