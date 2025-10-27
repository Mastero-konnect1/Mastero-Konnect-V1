// 'use client'

// import { useEffect, useMemo, useState } from "react";
// import { useRouter, useParams } from "next/navigation";
// import { Inter } from 'next/font/google'

// const inter = Inter({ 
//   subsets: ['latin'],
//   weight: ['400', '500', '600', '700']
// })

// export default function ConnectMentor() {
//   const router = useRouter();
//   const { id } = useParams();

//   const [current, setCurrent] = useState(() => new Date());
//   const [selectedDate, setSelectedDate] = useState<Date | null>(null);
//   const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
//   const [agenda, setAgenda] = useState("");
//   const [showModal, setShowModal] = useState(false);

//   const monthLabel = useMemo(() => current.toLocaleString('default', { month: 'long', year: 'numeric' }), [current]);

//   const days = useMemo(() => {
//     const year = current.getFullYear();
//     const month = current.getMonth();
//     const firstDay = new Date(year, month, 1).getDay();
//     const daysInMonth = new Date(year, month + 1, 0).getDate();
//     const items: Array<{ label: string; date?: Date; available?: boolean }>= [];
//     for (let i = 0; i < firstDay; i++) items.push({ label: '' });
//     for (let d = 1; d <= daysInMonth; d++) {
//       const date = new Date(year, month, d);
//       const isWed = date.getDay() === 3;
//       const isFri = date.getDay() === 5 && d % 2 === 0;
//       items.push({ label: String(d), date, available: isWed || isFri });
//     }
//     return items;
//   }, [current]);

//   const times = ['09:00 AM','10:30 AM','01:00 PM','03:00 PM','05:30 PM'];

//   return (
//     <main className={`container ${inter.className}`} style={{ maxWidth: 1200, margin: '0 auto', padding: 32, color: '#333' }}>
//       <style>
//         {`
//           :root { --border:#EAEAEA; --blue-1:#2F6BAE; --blue-2:#5A8DC8; --gradient: linear-gradient(135deg, var(--blue-1), var(--blue-2)); }
//           .title { font-size:28px; font-weight:700; margin-bottom:24px }
//           .layout { display:grid; grid-template-columns: 1fr 360px; gap:24px }
//           @media (max-width:980px){ .layout{ grid-template-columns: 1fr } }
//           .card { border:1px solid var(--border); border-radius:12px; background:#fff; box-shadow: 0 4px 12px rgba(0,0,0,0.05) }
//           .body { padding:24px }
//           .cal-nav { display:flex; justify-content:space-between; align-items:center; margin-bottom:16px }
//           .cal-month { font-weight:700 }
//           .cal-btn { border:1px solid var(--border); background:#fff; border-radius:8px; padding:6px 10px; cursor:pointer }
//           .cal-head { display:grid; grid-template-columns: repeat(7, 1fr); gap:8px; color:#666; margin-bottom:8px; font-size:12px }
//           .calendar { display:grid; grid-template-columns: repeat(7, 1fr); gap:8px }
//           .day { padding:12px; border:1px solid var(--border); border-radius:10px; text-align:center; background:#fff }
//           .day[aria-disabled="true"] { opacity:.45 }
//           .day.available { background:#E8F1FF }
//           .day.selected { border-color: var(--blue-1); background:#F6FAFF }
//           .slots { display:grid; grid-template-columns: repeat(auto-fit, minmax(180px,1fr)); gap:16px }
//           .slot { border:1px solid var(--border); border-radius:10px; padding:16px; display:flex; justify-content:space-between; align-items:center; transition: border-color .15s ease, box-shadow .15s ease }
//           .slot:hover { border-color: var(--blue-1); box-shadow: 0 6px 16px rgba(47,107,174,0.12) }
//           .slot-time { font-weight:700 }
//           .btn-outline { background:#fff; border:1px solid var(--blue-1); color:var(--blue-1); border-radius:999px; padding:8px 12px; font-weight:700; cursor:pointer }
//           .btn-outline:hover{ border-color:#2562A4; color:#2562A4 }
//           .btn-primary { background: var(--gradient); color:#fff; border:none; border-radius:999px; padding:12px 18px; font-weight:800; cursor:pointer; box-shadow: 0 8px 20px rgba(47,107,174,0.25) }
//           .btn-primary:disabled { opacity:.6; cursor:not-allowed }
//           .sidebar { position:sticky; top:20px }
//           .row { display:grid; grid-template-columns: 110px 1fr; gap:8px; margin-bottom:10px; font-size:14px }
//           .label { color:#666 }
//           .input { width:100%; border:1px solid var(--border); border-radius:10px; padding:10px 12px; font:inherit; outline:none }
//           .input:focus{ border-color: var(--blue-1); box-shadow: 0 0 0 4px rgba(47,107,174,0.08) }
//           .backdrop { position:fixed; inset:0; display:flex; align-items:center; justify-content:center; background: rgba(0,0,0,0.35) }
//           .modal { max-width:520px; width:100%; background:#fff; border-radius:14px; box-shadow:0 12px 30px rgba(0,0,0,0.2); overflow:hidden }
//           .modal-head { padding:18px 20px; background: var(--gradient); color:#fff; font-weight:800 }
//           .modal-body { padding:20px; color:#666 }
//           .modal-actions { padding:16px 20px; display:flex; gap:12px; justify-content:flex-end; border-top:1px solid var(--border) }
//           .btn-secondary { border:1px solid var(--border); background:#fff; border-radius:10px; padding:10px 14px; cursor:pointer }
//         `}
//       </style>

//       <h1 className="title">Schedule Your Session with Sarah Chen</h1>
//       <div className="layout">
//         <section className="card">
//           <div className="body">
//             <div className="cal-nav">
//               <button className="cal-btn" onClick={() => setCurrent(prev => new Date(prev.getFullYear(), prev.getMonth() - 1, 1))}>‹</button>
//               <div className="cal-month">{monthLabel}</div>
//               <button className="cal-btn" onClick={() => setCurrent(prev => new Date(prev.getFullYear(), prev.getMonth() + 1, 1))}>›</button>
//             </div>
//             <div className="cal-head">
//               <div>Sun</div><div>Mon</div><div>Tue</div><div>Wed</div><div>Thu</div><div>Fri</div><div>Sat</div>
//             </div>
//             <div className="calendar" role="grid" aria-label="Select a date">
//               {days.map((d, i) => {
//                 if (!d.label) return <div key={i} />;
//                 const disabled = !d.available;
//                 const selected = selectedDate && d.date && selectedDate.toDateString() === d.date.toDateString();
//                 return (
//                   <button
//                     key={i}
//                     className={`day ${d.available ? 'available' : ''} ${selected ? 'selected' : ''}`}
//                     aria-disabled={disabled}
//                     disabled={disabled}
//                     onClick={() => {
//                       if (d.date) {
//                         setSelectedDate(d.date);
//                         setSelectedSlot(null);
//                       }
//                     }}
//                   >
//                     {d.label}
//                   </button>
//                 );
//               })}
//             </div>

//             <h3 style={{ margin: '24px 0 12px' }}>Available Times</h3>
//             <div className="slots">
//               {times.map(t => (
//                 <div key={t} className="slot">
//                   <div className="slot-time">{t}</div>
//                   <button className="btn-outline" onClick={() => setSelectedSlot(t)}>Select</button>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         <aside className="card sidebar" aria-label="Booking Summary">
//           <div className="body">
//             <h3 style={{ marginTop: 0 }}>Booking Summary</h3>
//             <div className="row"><div className="label">Mentor</div><div>Sarah Chen</div></div>
//             <div className="row"><div className="label">Session</div><div>1:1 Video • 30 mins</div></div>
//             <div className="row"><div className="label">Selected</div><div>{selectedDate && selectedSlot ? `${selectedDate.toDateString()} • ${selectedSlot}` : '—'}</div></div>
//             <div style={{ margin: '14px 0 6px' }} className="label">Agenda / Question</div>
//             <textarea className="input" rows={5} placeholder="What would you like to focus on?" value={agenda} onChange={(e) => setAgenda(e.target.value)} />
//             <div style={{ display: 'flex', gap: 12, marginTop: 16 }}>
//               <button className="btn-primary" disabled={!selectedDate || !selectedSlot} onClick={() => setShowModal(true)}>Confirm & Book Session</button>
//             </div>
//           </div>
//         </aside>
//       </div>

//       {showModal && (
//         <div className="backdrop" role="dialog" aria-modal="true">
//           <div className="modal">
//             <div className="modal-head">Session Booked!</div>
//             <div className="modal-body">
//               You're confirmed with Sarah Chen for <strong>{selectedDate?.toDateString()} • {selectedSlot}</strong>.
//               We've sent a confirmation email.
//             </div>
//             <div className="modal-actions">
//               <button className="btn-secondary" onClick={() => window.open('https://calendar.google.com','_blank')}>Add to Google Calendar</button>
//               <button className="btn-secondary" onClick={() => window.open('https://outlook.live.com/calendar','_blank')}>Add to Outlook</button>
//               <button className="btn-primary" onClick={() => router.push(`/feedback-rewards/${id || 'sarah-chen'}`)}>Done</button>
//             </div>
//           </div>
//         </div>
//       )}
//     </main>
//   );
// }

'use client'

import { useEffect, useMemo, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { Inter } from 'next/font/google'
import { Sparkles, Calendar, Clock, User, Video } from 'lucide-react';

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
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden py-12 px-4 sm:px-6 lg:px-8">
      {/* Enhanced Gradient Glassmorphic Background */}
      <div className="absolute top-10 left-10 right-10 bottom-10 bg-gradient-to-br from-blue-500/20 via-purple-500/15 to-indigo-500/20 backdrop-blur-xl rounded-3xl border border-white/30 shadow-2xl z-0" />
      <div className="absolute top-5 left-5 right-5 bottom-5 bg-gradient-to-br from-blue-500/15 via-purple-500/10 to-indigo-500/15 backdrop-blur-2xl rounded-[40px] border border-white/40 shadow-3xl z-1" />
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-br from-transparent via-blue-500/5 to-purple-500/5 z-2" />
      
      <main className={`max-w-6xl mx-auto relative z-10 ${inter.className}`}>
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Schedule Your Session with Sarah Chen
          </h1>
          <div className="flex items-center justify-center gap-6 text-gray-600">
            <div className="flex items-center gap-2">
              <Video className="w-5 h-5 text-blue-500" />
              <span>1:1 Video Call</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-purple-500" />
              <span>30 Minutes</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Calendar Section */}
          <div className="lg:col-span-2">
            <div
              className="service-card"
              style={{
                borderRadius: '24px',
                padding: '2rem',
                background: 'rgba(255, 255, 255, 0.8)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                position: 'relative',
                boxShadow: '0 20px 40px rgba(123, 47, 247, 0.1)'
              }}
            >
              {/* Calendar Navigation */}
              <div className="flex items-center justify-between mb-6 p-4 bg-white/50 rounded-2xl border border-white/30">
                <button 
                  className="cal-btn"
                  style={{
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    background: 'rgba(255, 255, 255, 0.8)',
                    borderRadius: '12px',
                    padding: '10px 16px',
                    cursor: 'pointer',
                    backdropFilter: 'blur(10px)',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(123, 47, 247, 0.1)';
                    e.currentTarget.style.borderColor = 'rgba(123, 47, 247, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.8)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                  }}
                  onClick={() => setCurrent(prev => new Date(prev.getFullYear(), prev.getMonth() - 1, 1))}
                >
                  ‹
                </button>
                <div 
                  className="cal-month"
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: '700',
                    background: 'linear-gradient(135deg, #7B2FF7, #3A86FF)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}
                >
                  {monthLabel}
                </div>
                <button 
                  className="cal-btn"
                  style={{
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    background: 'rgba(255, 255, 255, 0.8)',
                    borderRadius: '12px',
                    padding: '10px 16px',
                    cursor: 'pointer',
                    backdropFilter: 'blur(10px)',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(123, 47, 247, 0.1)';
                    e.currentTarget.style.borderColor = 'rgba(123, 47, 247, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.8)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                  }}
                  onClick={() => setCurrent(prev => new Date(prev.getFullYear(), prev.getMonth() + 1, 1))}
                >
                  ›
                </button>
              </div>

              {/* Calendar Grid */}
              <div className="cal-head grid grid-cols-7 gap-2 mb-4 text-sm font-semibold text-gray-600">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                  <div key={day} className="text-center py-2">{day}</div>
                ))}
              </div>

              <div className="calendar grid grid-cols-7 gap-2">
                {days.map((d, i) => {
                  if (!d.label) return <div key={i} />;
                  const disabled = !d.available;
                  const selected = selectedDate && d.date && selectedDate.toDateString() === d.date.toDateString();
                  
                  return (
                    <button
                      key={i}
                      className={`day relative rounded-xl transition-all duration-300 ${
                        disabled ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer hover:scale-105'
                      } ${
                        selected ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg' :
                        d.available ? 'bg-blue-50 border border-blue-200' : 'bg-white/50 border border-white/30'
                      }`}
                      style={{
                        padding: '12px 8px',
                        backdropFilter: 'blur(10px)',
                        transition: 'all 0.3s ease'
                      }}
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

              {/* Available Times */}
              <h3 className="text-xl font-semibold mt-8 mb-4 text-gray-800">Available Times</h3>
              <div className="slots grid grid-cols-1 md:grid-cols-2 gap-3">
                {times.map((t, index) => (
                  <div
                    key={t}
                    className="slot relative rounded-xl transition-all duration-300"
                    style={{
                      padding: '1.25rem',
                      background: 'rgba(255, 255, 255, 0.6)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.3)',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={() => setHoveredCard(index)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    {/* Animated gradient border effect */}
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      borderRadius: '12px',
                      padding: '2px',
                      background: 'linear-gradient(135deg, rgba(123, 47, 247, 0.3), rgba(58, 134, 255, 0.3))',
                      WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                      WebkitMaskComposite: 'xor',
                      maskComposite: 'exclude',
                      opacity: hoveredCard === index ? 1 : 0,
                      transition: 'opacity 500ms ease',
                      pointerEvents: 'none'
                    }} />

                    <div className="flex justify-between items-center relative z-10">
                      <div className="slot-time font-semibold text-gray-800">{t}</div>
                      <button 
                        className="btn-outline"
                        style={{
                          background: 'rgba(255, 255, 255, 0.9)',
                          border: '1px solid rgba(123, 47, 247, 0.3)',
                          color: '#7B2FF7',
                          borderRadius: '20px',
                          padding: '8px 16px',
                          fontWeight: '600',
                          cursor: 'pointer',
                          backdropFilter: 'blur(10px)',
                          transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = 'rgba(123, 47, 247, 0.1)';
                          e.currentTarget.style.transform = 'translateY(-2px)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
                          e.currentTarget.style.transform = 'translateY(0)';
                        }}
                        onClick={() => setSelectedSlot(t)}
                      >
                        Select
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Booking Summary Sidebar */}
          <div className="lg:col-span-1">
            <div
              className="service-card sticky top-8"
              style={{
                borderRadius: '24px',
                padding: '2rem',
                background: 'rgba(255, 255, 255, 0.8)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                position: 'relative',
                boxShadow: '0 20px 40px rgba(123, 47, 247, 0.1)'
              }}
            >
              <h3 className="text-xl font-semibold mb-6 text-gray-800">Booking Summary</h3>
              
              {/* Mentor Info */}
              <div className="flex items-center gap-4 mb-6 p-4 bg-white/50 rounded-2xl border border-white/30">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                  <User className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-gray-800">Sarah Chen</div>
                  <div className="text-sm text-gray-600">Senior Product Designer</div>
                </div>
              </div>

              {/* Booking Details */}
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center p-3 bg-white/50 rounded-xl border border-white/30">
                  <span className="text-gray-600">Session Type</span>
                  <span className="font-semibold text-gray-800">1:1 Video • 30 mins</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white/50 rounded-xl border border-white/30">
                  <span className="text-gray-600">Selected Time</span>
                  <span className="font-semibold text-gray-800">
                    {selectedDate && selectedSlot ? `${selectedDate.toDateString()} • ${selectedSlot}` : '—'}
                  </span>
                </div>
              </div>

              {/* Agenda Input */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-3">Agenda / Question</label>
                <textarea 
                  className="w-full rounded-xl border border-white/30 bg-white/50 backdrop-blur-sm px-4 py-3 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300"
                  rows={4}
                  placeholder="What would you like to focus on?"
                  value={agenda}
                  onChange={(e) => setAgenda(e.target.value)}
                />
              </div>

              {/* Confirm Button */}
              <button 
                className="btn-primary w-full"
                style={{
                  background: 'linear-gradient(135deg, #7B2FF7, #3A86FF)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '16px',
                  padding: '1rem 2rem',
                  fontSize: '1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  backdropFilter: 'blur(10px)',
                  boxShadow: '0 8px 20px rgba(123, 47, 247, 0.3)',
                  transition: 'all 0.3s ease'
                }}
                disabled={!selectedDate || !selectedSlot}
                onMouseEnter={(e) => {
                  if (!e.currentTarget.disabled) {
                    e.currentTarget.style.background = 'linear-gradient(135deg, #6A23E5, #2A75F5)';
                    e.currentTarget.style.boxShadow = '0 12px 30px rgba(123, 47, 247, 0.4)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!e.currentTarget.disabled) {
                    e.currentTarget.style.background = 'linear-gradient(135deg, #7B2FF7, #3A86FF)';
                    e.currentTarget.style.boxShadow = '0 8px 20px rgba(123, 47, 247, 0.3)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }
                }}
                onClick={() => setShowModal(true)}
              >
                Confirm & Book Session
              </button>
            </div>
          </div>
        </div>

        {/* Modal */}
        {showModal && (
          <div className="backdrop fixed inset-0 flex items-center justify-center z-50" style={{ background: 'rgba(0,0,0,0.35)' }}>
            <div 
              className="modal relative"
              style={{
                maxWidth: '520px',
                width: '90%',
                background: 'rgba(255, 255, 255, 0.9)',
                borderRadius: '24px',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
                overflow: 'hidden'
              }}
            >
              {/* Animated gradient border */}
              <div style={{
                position: 'absolute',
                inset: 0,
                borderRadius: '24px',
                padding: '2px',
                background: 'linear-gradient(135deg, rgba(123, 47, 247, 0.3), rgba(58, 134, 255, 0.3))',
                WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                WebkitMaskComposite: 'xor',
                maskComposite: 'exclude',
                pointerEvents: 'none'
              }} />

              <div 
                className="modal-head"
                style={{
                  padding: '1.5rem 2rem',
                  background: 'linear-gradient(135deg, #7B2FF7, #3A86FF)',
                  color: 'white',
                  fontWeight: '800'
                }}
              >
                Session Booked!
              </div>
              <div 
                className="modal-body"
                style={{
                  padding: '2rem',
                  color: '#666'
                }}
              >
                You're confirmed with Sarah Chen for <strong>{selectedDate?.toDateString()} • {selectedSlot}</strong>.
                We've sent a confirmation email.
              </div>
              <div 
                className="modal-actions"
                style={{
                  padding: '1.5rem 2rem',
                  display: 'flex',
                  gap: '12px',
                  justifyContent: 'flex-end',
                  borderTop: '1px solid rgba(255, 255, 255, 0.3)'
                }}
              >
                <button 
                  className="btn-secondary"
                  style={{
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    background: 'rgba(255, 255, 255, 0.8)',
                    borderRadius: '12px',
                    padding: '12px 20px',
                    cursor: 'pointer',
                    backdropFilter: 'blur(10px)',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(123, 47, 247, 0.1)';
                    e.currentTarget.style.borderColor = 'rgba(123, 47, 247, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.8)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                  }}
                  onClick={() => window.open('https://calendar.google.com','_blank')}
                >
                  Add to Google Calendar
                </button>
                <button 
                  className="btn-primary"
                  style={{
                    background: 'linear-gradient(135deg, #7B2FF7, #3A86FF)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '12px',
                    padding: '12px 20px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    backdropFilter: 'blur(10px)',
                    boxShadow: '0 8px 20px rgba(123, 47, 247, 0.3)',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(135deg, #6A23E5, #2A75F5)';
                    e.currentTarget.style.boxShadow = '0 12px 30px rgba(123, 47, 247, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(135deg, #7B2FF7, #3A86FF)';
                    e.currentTarget.style.boxShadow = '0 8px 20px rgba(123, 47, 247, 0.3)';
                  }}
                  onClick={() => router.push(`/feedback-rewards/${id || 'sarah-chen'}`)}
                >
                  Done
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}