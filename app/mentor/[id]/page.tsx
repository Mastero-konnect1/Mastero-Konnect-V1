'use client'

import { useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { Inter } from 'next/font/google'

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700']
})

export default function MentorProfile() {
  const router = useRouter();
  const { id } = useParams();

  const activateTab = (tabId: string) => {
    const tabs = Array.from(document.querySelectorAll('.mkp-tab-btn')) as HTMLButtonElement[];
    tabs.forEach(t => { t.classList.remove('active'); t.setAttribute('aria-selected','false'); });
    const panels = ['overview','skills','reviews','availability'];
    panels.forEach(pid => {
      const panel = document.getElementById(`mkp-panel-${pid}`);
      if (panel) panel.hidden = true;
    });
    const tab = document.getElementById(`mkp-tab-${tabId}`) as HTMLButtonElement | null;
    const panel = document.getElementById(`mkp-panel-${tabId}`);
    if (tab) { tab.classList.add('active'); tab.setAttribute('aria-selected','true'); }
    if (panel) panel.hidden = false;
  };

  return (
    <main className={`container ${inter.className}`} style={{ maxWidth: 1100, margin: '0 auto', padding: 24, color: '#333' }}>
      <style>
        {`
          :root { --border:#EAEAEA; --blue-1:#2F6BAE; --blue-2:#5A8DC8; --gradient: linear-gradient(135deg, var(--blue-1), var(--blue-2)); }
          .mkp-hero { display:grid; grid-template-columns:120px 1fr; gap:24px; align-items:center; padding-top:32px; }
          .mkp-avatar { width:120px; height:120px; border-radius:50%; background: var(--gradient); box-shadow: 0 4px 12px rgba(0,0,0,0.05); display:grid; place-items:center; color:#fff; font-size:40px; font-weight:700 }
          .mkp-name { font-size:28px; font-weight:700 }
          .mkp-sub { color:#666 }
          .mkp-badges { display:flex; gap:16px; flex-wrap:wrap; margin-top:16px }
          .mkp-badge { border:1px solid var(--border); padding:6px 10px; border-radius:999px; font-size:12px; color:#666; background:#fff }
          .mkp-tabs { display:flex; gap:24px; margin-top:32px; border-bottom:1px solid var(--border) }
          .mkp-tab-btn { padding:10px 0; color:#666; font-weight:600; border:none; background:none; cursor:pointer; position:relative }
          .mkp-tab-btn.active { color: var(--blue-1) }
          .mkp-tab-btn.active::after { content:""; position:absolute; left:0; right:0; bottom:-1px; height:2px; background: var(--gradient); }
          .mkp-card { border:1px solid var(--border); border-radius:12px; box-shadow: 0 4px 12px rgba(0,0,0,0.05); background:#fff; padding:24px; margin-top:24px }
          .mkp-skills { display:flex; gap:16px; flex-wrap:wrap }
          .mkp-skill { background:#F6F9FE; color: var(--blue-1); border:1px solid #E8F1FF; padding:8px 12px; border-radius:999px; font-size:13px }
          .mkp-reviews { display:grid; gap:16px }
          .mkp-review { border:1px solid var(--border); border-radius:12px; padding:16px }
          .mkp-stars { color:#FFD700; letter-spacing:2px }
          .mkp-sticky { position:sticky; bottom:0; background:rgba(255,255,255,0.95); backdrop-filter: blur(8px); border-top:1px solid var(--border); padding:16px 24px; display:flex; justify-content:space-between; align-items:center; gap:16px; margin-top:32px }
          .mkp-cta { background: var(--gradient); color:#fff; border:none; border-radius:999px; padding:12px 18px; font-weight:700; cursor:pointer; box-shadow: 0 8px 20px rgba(47,107,174,0.25) }
          @media (max-width:640px){ .mkp-hero{grid-template-columns:80px 1fr} .mkp-avatar{width:80px;height:80px;font-size:28px} .mkp-name{font-size:22px} .mkp-tabs{overflow-x:auto} }
        `}
      </style>

      <section className="mkp-hero">
        <div className="mkp-avatar" aria-hidden>SC</div>
        <div>
          <div className="mkp-name">Sarah Chen</div>
          <div className="mkp-sub">Senior Product Manager • Google</div>
          <div className="mkp-sub">10+ years experience</div>
          <div className="mkp-badges" aria-label="Highlights">
            <span className="mkp-badge">4.9 ★ (127 reviews)</span>
            <span className="mkp-badge">Top Mentor</span>
            <span className="mkp-badge">PM • Strategy • Design</span>
          </div>
        </div>
      </section>

      <nav className="mkp-tabs" role="tablist" aria-label="Profile Sections">
        <button id="mkp-tab-overview" className="mkp-tab-btn active mkp-tab-btn" role="tab" aria-selected="true" onClick={() => activateTab('overview')}>Overview</button>
        <button id="mkp-tab-skills" className="mkp-tab-btn mkp-tab-btn" role="tab" aria-selected="false" onClick={() => activateTab('skills')}>Skills</button>
        <button id="mkp-tab-reviews" className="mkp-tab-btn mkp-tab-btn" role="tab" aria-selected="false" onClick={() => activateTab('reviews')}>Reviews</button>
        <button id="mkp-tab-availability" className="mkp-tab-btn mkp-tab-btn" role="tab" aria-selected="false" onClick={() => activateTab('availability')}>Availability</button>
      </nav>

      <section>
        <div id="mkp-panel-overview" className="mkp-card" role="tabpanel">
          <h3 style={{ marginTop: 0 }}>Bio & Mentoring Philosophy</h3>
          <p style={{ color: '#666', lineHeight: 1.7 }}>
            I help designers transition into product management with a blend of empathetic leadership and data-driven decision making.
            Expect hands-on frameworks, interview prep, and portfolio storytelling tuned to your background.
          </p>
        </div>

        <div id="mkp-panel-skills" className="mkp-card" role="tabpanel" hidden>
          <h3 style={{ marginTop: 0 }}>Expertise</h3>
          <div className="mkp-skills">
            <span className="mkp-skill">Product Strategy</span>
            <span className="mkp-skill">Roadmapping</span>
            <span className="mkp-skill">User Research</span>
            <span className="mkp-skill">Design Systems</span>
            <span className="mkp-skill">A/B Testing</span>
            <span className="mkp-skill">Go-to-Market</span>
            <span className="mkp-skill">Interview Prep</span>
            <span className="mkp-skill">Career Coaching</span>
          </div>
        </div>

        <div id="mkp-panel-reviews" className="mkp-card" role="tabpanel" hidden>
          <h3 style={{ marginTop: 0 }}>Testimonials</h3>
          <div className="mkp-reviews">
            <div className="mkp-review">
              <div className="mkp-stars">★★★★★</div>
              <p style={{ margin: '8px 0 0', color: '#666' }}>"Sarah's frameworks helped me land two PM offers in 6 weeks." — Priya S.</p>
            </div>
            <div className="mkp-review">
              <div className="mkp-stars">★★★★★</div>
              <p style={{ margin: '8px 0 0', color: '#666' }}>"Clear, actionable, and encouraging. Best mentor I've had." — Daniel K.</p>
            </div>
          </div>
        </div>

        <div id="mkp-panel-availability" className="mkp-card" role="tabpanel" hidden>
          <h3 style={{ marginTop: 0 }}>General Availability</h3>
          <p style={{ color: '#666' }}>Accepts sessions on Wednesdays and select Fridays. Timezone: PST (GMT-8).</p>
        </div>
      </section>

      <div className="mkp-sticky" role="region" aria-label="Booking">
        <div style={{ color: '#666', fontSize: 14 }}>1:1 Video Session • 30 mins</div>
        <button className="mkp-cta" onClick={() => router.push(`/connect-mentor/${id || 'sarah-chen'}`)}>Check Availability & Connect</button>
      </div>
    </main>
  );
}