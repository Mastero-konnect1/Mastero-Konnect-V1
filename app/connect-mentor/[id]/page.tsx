'use client'

import { useEffect, useMemo, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { Inter } from 'next/font/google'

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700']
})

export default function ConnectMentor() {
  const router = useRouter();
  const { id } = useParams();

  const [current, setCurrent] = useState(() => new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [agenda, setAgenda] = useState("");
  const [showModal, setShowModal] = useState(false);

  const monthLabel = useMemo(() => current.toLocaleString('default', { month: 'long', year: 'numeric' }), [current]);

  const days = useMemo(() => {
    const year = current.getFullYear();
    const month = current.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const items: Array<{ label: string; date?: Date; available?: boolean }>= [];
    for (let i = 0; i < firstDay; i++) items.push({ label: '' });
    for (let d = 1; d <= daysInMonth; d++) {
      const date = new Date(year, month, d);
      const isWed = date.getDay() === 3;
      const isFri = date.getDay() === 5 && d % 2 === 0;
      items.push({ label: String(d), date, available: isWed || isFri });
    }
    return items;
  }, [current]);

  const times = ['09:00 AM','10:30 AM','01:00 PM','03:00 PM','05:30 PM'];

  return (
    <main className={`container ${inter.className}`} style={{ maxWidth: 1200, margin: '0 auto', padding: 32, color: '#333' }}>
      <style>
        {`
          :root { --border:#EAEAEA; --blue-1:#2F6BAE; --blue-2:#5A8DC8; --gradient: linear-gradient(135deg, var(--blue-1), var(--blue-2)); }
          .title { font-size:28px; font-weight:700; margin-bottom:24px }
          .layout { display:grid; grid-template-columns: 1fr 360px; gap:24px }
          @media (max-width:980px){ .layout{ grid-template-columns: 1fr } }
          .card { border:1px solid var(--border); border-radius:12px; background:#fff; box-shadow: 0 4px 12px rgba(0,0,0,0.05) }
          .body { padding:24px }
          .cal-nav { display:flex; justify-content:space-between; align-items:center; margin-bottom:16px }
          .cal-month { font-weight:700 }
          .cal-btn { border:1px solid var(--border); background:#fff; border-radius:8px; padding:6px 10px; cursor:pointer }
          .cal-head { display:grid; grid-template-columns: repeat(7, 1fr); gap:8px; color:#666; margin-bottom:8px; font-size:12px }
          .calendar { display:grid; grid-template-columns: repeat(7, 1fr); gap:8px }
          .day { padding:12px; border:1px solid var(--border); border-radius:10px; text-align:center; background:#fff }
          .day[aria-disabled="true"] { opacity:.45 }
          .day.available { background:#E8F1FF }
          .day.selected { border-color: var(--blue-1); background:#F6FAFF }
          .slots { display:grid; grid-template-columns: repeat(auto-fit, minmax(180px,1fr)); gap:16px }
          .slot { border:1px solid var(--border); border-radius:10px; padding:16px; display:flex; justify-content:space-between; align-items:center; transition: border-color .15s ease, box-shadow .15s ease }
          .slot:hover { border-color: var(--blue-1); box-shadow: 0 6px 16px rgba(47,107,174,0.12) }
          .slot-time { font-weight:700 }
          .btn-outline { background:#fff; border:1px solid var(--blue-1); color:var(--blue-1); border-radius:999px; padding:8px 12px; font-weight:700; cursor:pointer }
          .btn-outline:hover{ border-color:#2562A4; color:#2562A4 }
          .btn-primary { background: var(--gradient); color:#fff; border:none; border-radius:999px; padding:12px 18px; font-weight:800; cursor:pointer; box-shadow: 0 8px 20px rgba(47,107,174,0.25) }
          .btn-primary:disabled { opacity:.6; cursor:not-allowed }
          .sidebar { position:sticky; top:20px }
          .row { display:grid; grid-template-columns: 110px 1fr; gap:8px; margin-bottom:10px; font-size:14px }
          .label { color:#666 }
          .input { width:100%; border:1px solid var(--border); border-radius:10px; padding:10px 12px; font:inherit; outline:none }
          .input:focus{ border-color: var(--blue-1); box-shadow: 0 0 0 4px rgba(47,107,174,0.08) }
          .backdrop { position:fixed; inset:0; display:flex; align-items:center; justify-content:center; background: rgba(0,0,0,0.35) }
          .modal { max-width:520px; width:100%; background:#fff; border-radius:14px; box-shadow:0 12px 30px rgba(0,0,0,0.2); overflow:hidden }
          .modal-head { padding:18px 20px; background: var(--gradient); color:#fff; font-weight:800 }
          .modal-body { padding:20px; color:#666 }
          .modal-actions { padding:16px 20px; display:flex; gap:12px; justify-content:flex-end; border-top:1px solid var(--border) }
          .btn-secondary { border:1px solid var(--border); background:#fff; border-radius:10px; padding:10px 14px; cursor:pointer }
        `}
      </style>

      <h1 className="title">Schedule Your Session with Sarah Chen</h1>
      <div className="layout">
        <section className="card">
          <div className="body">
            <div className="cal-nav">
              <button className="cal-btn" onClick={() => setCurrent(prev => new Date(prev.getFullYear(), prev.getMonth() - 1, 1))}>‹</button>
              <div className="cal-month">{monthLabel}</div>
              <button className="cal-btn" onClick={() => setCurrent(prev => new Date(prev.getFullYear(), prev.getMonth() + 1, 1))}>›</button>
            </div>
            <div className="cal-head">
              <div>Sun</div><div>Mon</div><div>Tue</div><div>Wed</div><div>Thu</div><div>Fri</div><div>Sat</div>
            </div>
            <div className="calendar" role="grid" aria-label="Select a date">
              {days.map((d, i) => {
                if (!d.label) return <div key={i} />;
                const disabled = !d.available;
                const selected = selectedDate && d.date && selectedDate.toDateString() === d.date.toDateString();
                return (
                  <button
                    key={i}
                    className={`day ${d.available ? 'available' : ''} ${selected ? 'selected' : ''}`}
                    aria-disabled={disabled}
                    disabled={disabled}
                    onClick={() => {
                      if (d.date) {
                        setSelectedDate(d.date);
                        setSelectedSlot(null);
                      }
                    }}
                  >
                    {d.label}
                  </button>
                );
              })}
            </div>

            <h3 style={{ margin: '24px 0 12px' }}>Available Times</h3>
            <div className="slots">
              {times.map(t => (
                <div key={t} className="slot">
                  <div className="slot-time">{t}</div>
                  <button className="btn-outline" onClick={() => setSelectedSlot(t)}>Select</button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <aside className="card sidebar" aria-label="Booking Summary">
          <div className="body">
            <h3 style={{ marginTop: 0 }}>Booking Summary</h3>
            <div className="row"><div className="label">Mentor</div><div>Sarah Chen</div></div>
            <div className="row"><div className="label">Session</div><div>1:1 Video • 30 mins</div></div>
            <div className="row"><div className="label">Selected</div><div>{selectedDate && selectedSlot ? `${selectedDate.toDateString()} • ${selectedSlot}` : '—'}</div></div>
            <div style={{ margin: '14px 0 6px' }} className="label">Agenda / Question</div>
            <textarea className="input" rows={5} placeholder="What would you like to focus on?" value={agenda} onChange={(e) => setAgenda(e.target.value)} />
            <div style={{ display: 'flex', gap: 12, marginTop: 16 }}>
              <button className="btn-primary" disabled={!selectedDate || !selectedSlot} onClick={() => setShowModal(true)}>Confirm & Book Session</button>
            </div>
          </div>
        </aside>
      </div>

      {showModal && (
        <div className="backdrop" role="dialog" aria-modal="true">
          <div className="modal">
            <div className="modal-head">Session Booked!</div>
            <div className="modal-body">
              You're confirmed with Sarah Chen for <strong>{selectedDate?.toDateString()} • {selectedSlot}</strong>.
              We've sent a confirmation email.
            </div>
            <div className="modal-actions">
              <button className="btn-secondary" onClick={() => window.open('https://calendar.google.com','_blank')}>Add to Google Calendar</button>
              <button className="btn-secondary" onClick={() => window.open('https://outlook.live.com/calendar','_blank')}>Add to Outlook</button>
              <button className="btn-primary" onClick={() => router.push(`/feedback-rewards/${id || 'sarah-chen'}`)}>Done</button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}