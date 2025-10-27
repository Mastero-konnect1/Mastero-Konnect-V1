// import Link from 'next/link'
// import { Twitter, Linkedin, Youtube, Facebook, Instagram, Shield, HelpCircle } from 'lucide-react'

// export default function Footer() {
//   return (
//     <>
//       <style>{`
//         .footer-section {
//           opacity: 0;
//           transform: translateY(20px);
//           transition: opacity 300ms ease-out, transform 400ms cubic-bezier(.22,.9,.3,1);
//         }
//         .footer-section.entered {
//           opacity: 1;
//           transform: translateY(0);
//         }
//         .footer-link {
//           position: relative;
//           transition: all 300ms cubic-bezier(.4,0,.2,1);
//         }
//         .footer-link::after {
//           content: '';
//           position: absolute;
//           bottom: -2px;
//           left: 0;
//           width: 0;
//           height: 2px;
//           background: currentColor;
//           transition: width 300ms cubic-bezier(.4,0,.2,1);
//         }
//         .footer-link:hover::after {
//           width: 100%;
//         }
//         .app-store-icon {
//           transition: transform 300ms cubic-bezier(.4,0,.2,1);
//         }
//         .app-store-icon:hover {
//           transform: scale(1.05);
//         }
//         .footer-gradient {
//           background: linear-gradient(135deg, #1e293b 0%, #334155 50%, #475569 100%);
//           animation: gradient-shift 8s ease infinite;
//         }
//         @keyframes gradient-shift {
//           0%, 100% { background-position: 0% 50%; }
//           50% { background-position: 100% 50%; }
//         }
//         @media (prefers-reduced-motion: reduce) {
//           .footer-section, .footer-link, .app-store-icon {
//             transition: none !important;
//             transform: none !important;
//             opacity: 1 !important;
//           }
//         }
//         @media (max-width: 768px) {
//           .footer-utility-row {
//             grid-template-columns: 1fr !important;
//             gap: 16px !important;
//           }
//           .footer-controls-left,
//           .footer-controls-right {
//             grid-column: span 1 !important;
//             justify-content: center !important;
//           }
//         }
//       `}</style>
      
//       <footer className="footer-gradient text-white relative overflow-hidden">
//         {/* Top curved cutouts */}
//         <div style={{
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           right: 0,
//           height: '3rem',
//           background: 'white',
//           borderRadius: '0 0 3rem 3rem',
//           clipPath: 'polygon(0% 0%, 20% 100%, 40% 0%, 60% 100%, 80% 0%, 100% 100%, 100% 0%)'
//         }} />
//         <div style={{
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           right: 0,
//           height: '2.5rem',
//           background: 'white',
//           borderRadius: '0 0 2.5rem 2.5rem',
//           opacity: 0.9
//         }} />
        
//         <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-20 py-16 relative z-10" style={{
//           maxWidth: '1280px'
//         }}>
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//             {/* Brand + Tagline */}
//             <div className="footer-section" style={{ transitionDelay: '0ms' }}>
//               <h3 style={{
//                 fontSize: '1.75rem',
//                 fontWeight: 'bold',
//                 fontFamily: 'serif',
//                 marginBottom: '1rem',
//                 color: 'white'
//               }}>
//                 InnovKaro
//               </h3>
//               <p style={{
//                 fontSize: '0.95rem',
//                 opacity: 0.9,
//                 lineHeight: '1.6',
//                 marginBottom: '1.5rem',
//                 color: 'rgba(255, 255, 255, 0.8)'
//               }}>
//                 Connecting mentors and mentees for meaningful professional growth and career development.
//               </p>
//               <div className="flex gap-4">
//                 <a href="https://x.com/KonnectMas86897" target='_blank' className="app-store-icon hover:text-blue-300 transition-colors">
//                   <Twitter className="w-5 h-5" />
//                 </a>
//                 <a href="https://www.linkedin.com/company/innov-karo/" target='_blank' className="app-store-icon hover:text-blue-300 transition-colors">
//                   <Linkedin className="w-5 h-5" />
//                 </a>
//                 <a href="https://www.youtube.com/@Innovkaro" target='_blank' className="app-store-icon hover:text-blue-300 transition-colors">
//                   <Youtube className="w-5 h-5" />
//                 </a>
//                 <a href="https://www.facebook.com/profile.php?id=61581066593207" target='_blank' className="app-store-icon hover:text-blue-300 transition-colors">
//                   <Facebook className="w-5 h-5" />
//                 </a>
//                 <a href="https://www.instagram.com/innovkaro/" target='_blank' className="app-store-icon hover:text-blue-300 transition-colors">
//                   <Instagram className="w-5 h-5" />
//                 </a>
//               </div>
//             </div>

//             {/* Useful Links */}
//             <div className="footer-section" style={{ transitionDelay: '100ms' }}>
//               <h4 style={{
//                 fontSize: '1.125rem',
//                 fontWeight: '600',
//                 marginBottom: '1rem',
//                 color: 'white'
//               }}>
//                 Useful Links
//               </h4>
//               <ul style={{ fontSize: '0.95rem', lineHeight: '1.8' }}>
//                 <li><Link href="/find-mentor" className="footer-link hover:text-blue-300 transition-colors">Find Mentors</Link></li>
//                 <li><Link href="/ai-assessment" className="footer-link hover:text-blue-300 transition-colors">AI Assessment</Link></li>
//                 <li><Link href="/profile-building" className="footer-link hover:text-blue-300 transition-colors">Build Profile</Link></li>
//                 <li><Link href="/auth/sign-up" className="footer-link hover:text-blue-300 transition-colors">Become a Mentor</Link></li>
//               </ul>
//             </div>

//             {/* Contact Info */}
//             <div className="footer-section" style={{ transitionDelay: '200ms' }}>
//               <h4 style={{
//                 fontSize: '1.125rem',
//                 fontWeight: '600',
//                 marginBottom: '1rem',
//                 color: 'white'
//               }}>
//                 Contact Info
//               </h4>
//               <div style={{ fontSize: '0.95rem', lineHeight: '1.8' }}>
//                 <p className="footer-link hover:text-blue-300 transition-colors cursor-pointer">
//                   Email: connect@innovkaro.com
//                 </p>
//                 <p className="footer-link hover:text-blue-300 transition-colors cursor-pointer">
//                   Phone: +91 7382987332
//                 </p>
//                 <div style={{ marginTop: '1rem' }}>
//                   <p className="footer-link hover:text-blue-300 transition-colors cursor-pointer">
//                     Support Center
//                   </p>
//                   <p className="footer-link hover:text-blue-300 transition-colors cursor-pointer">
//                     Privacy Policy
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* Rules/Legal and App Store */}
//             <div className="footer-section" style={{ transitionDelay: '300ms' }}>
//               <h4 style={{
//                 fontSize: '1.125rem',
//                 fontWeight: '600',
//                 marginBottom: '1rem',
//                 color: 'white'
//               }}>
//                 Legal & Apps
//               </h4>
//               <div style={{ fontSize: '0.95rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
//                 <p className="footer-link hover:text-blue-300 transition-colors cursor-pointer">
//                   Terms of Service
//                 </p>
//                 <p className="footer-link hover:text-blue-300 transition-colors cursor-pointer">
//                   Cookie Policy
//                 </p>
//                 <p className="footer-link hover:text-blue-300 transition-colors cursor-pointer">
//                   GDPR Compliance
//                 </p>
//               </div>
              
//               {/* App Store Buttons */}
//               <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
//                 <div className="app-store-icon" style={{
//                   backgroundColor: 'rgba(255, 255, 255, 0.1)',
//                   borderRadius: '8px',
//                   padding: '0.75rem',
//                   cursor: 'pointer',
//                   display: 'flex',
//                   alignItems: 'center',
//                   gap: '0.5rem'
//                 }}>
//                   <div style={{ width: '24px', height: '24px', backgroundColor: 'white', borderRadius: '4px' }} />
//                   <span style={{ fontSize: '0.875rem', fontWeight: '500' }}>Download App</span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <hr style={{ margin: '2rem 0', borderColor: 'rgba(255, 255, 255, 0.2)' }} />
          
//           {/* Bottom Utility Row */}
//           <div style={{
//             display: 'grid',
//             gridTemplateColumns: 'repeat(12, 1fr)',
//             gap: '24px',
//             alignItems: 'center',
//             marginBottom: '2rem'
//           }} className="footer-utility-row">
//             {/* Currency and Language Controls */}
//             <div className="footer-controls-left" style={{
//               gridColumn: 'span 6',
//               display: 'flex',
//               gap: '12px',
//               alignItems: 'center'
//             }}>
//               <select style={{
//                 padding: '0.5rem 1rem',
//                 borderRadius: '9999px',
//                 background: 'rgba(255,255,255,0.1)',
//                 border: '1px solid rgba(255,255,255,0.2)',
//                 color: 'white',
//                 fontSize: '0.875rem',
//                 cursor: 'pointer',
//                 outline: 'none',
//                 minHeight: '40px'
//               }}>
//                 <option value="USD">USD $</option>
//                 <option value="EUR">EUR €</option>
//                 <option value="GBP">GBP £</option>
//               </select>
//               <select style={{
//                 padding: '0.5rem 1rem',
//                 borderRadius: '9999px',
//                 background: 'rgba(255,255,255,0.1)',
//                 border: '1px solid rgba(255,255,255,0.2)',
//                 color: 'white',
//                 fontSize: '0.875rem',
//                 cursor: 'pointer',
//                 outline: 'none',
//                 minHeight: '40px'
//               }}>
//                 <option value="en">English</option>
//                 <option value="es">Español</option>
//                 <option value="fr">Français</option>
//               </select>
//             </div>

//             {/* Social and Support Icons */}
//             <div className="footer-controls-right" style={{
//               gridColumn: 'span 6',
//               display: 'flex',
//               justifyContent: 'flex-end',
//               gap: '12px',
//               alignItems: 'center'
//             }}>
//               <div className="app-store-icon" style={{
//                 width: '40px',
//                 height: '40px',
//                 borderRadius: '50%',
//                 background: 'rgba(255,255,255,0.1)',
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 cursor: 'pointer',
//                 transition: 'background 300ms ease'
//               }} onMouseEnter={(e) => {
//                 e.currentTarget.style.background = 'rgba(255,255,255,0.2)'
//               }} onMouseLeave={(e) => {
//                 e.currentTarget.style.background = 'rgba(255,255,255,0.1)'
//               }}>
//                 <Shield style={{ width: '18px', height: '18px', color: 'white' }} />
//               </div>
//               <div className="app-store-icon" style={{
//                 width: '40px',
//                 height: '40px',
//                 borderRadius: '50%',
//                 background: 'rgba(255,255,255,0.1)',
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 cursor: 'pointer',
//                 transition: 'background 300ms ease'
//               }} onMouseEnter={(e) => {
//                 e.currentTarget.style.background = 'rgba(255,255,255,0.2)'
//               }} onMouseLeave={(e) => {
//                 e.currentTarget.style.background = 'rgba(255,255,255,0.1)'
//               }}>
//                 <HelpCircle style={{ width: '18px', height: '18px', color: 'white' }} />
//               </div>
//             </div>
//           </div>

//           <div style={{ 
//             textAlign: 'center', 
//             fontSize: '0.875rem', 
//             opacity: 0.8,
//             color: 'rgba(255, 255, 255, 0.7)'
//           }}>
//             © 2024 InnovKaro. All rights reserved. Built with ❤️ for professional growth.
//           </div>
//         </div>
//       </footer>
//     </>
//   )
// }
import Link from 'next/link'
import { Twitter, Linkedin, Youtube, Facebook, Instagram, Shield, HelpCircle } from 'lucide-react'

export default function Footer() {
  return (
    <>
      <style>{`
        .footer-section {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 300ms ease-out, transform 400ms cubic-bezier(.22,.9,.3,1);
        }
        .footer-section.entered {
          opacity: 1;
          transform: translateY(0);
        }
        .footer-link {
          position: relative;
          transition: all 300ms cubic-bezier(.4,0,.2,1);
        }
        .footer-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 2px;
          background: currentColor;
          transition: width 300ms cubic-bezier(.4,0,.2,1);
        }
        .footer-link:hover::after {
          width: 100%;
        }
        .app-store-icon {
          transition: transform 300ms cubic-bezier(.4,0,.2,1);
        }
        .app-store-icon:hover {
          transform: scale(1.05);
        }
        .footer-gradient {
          background: linear-gradient(135deg, #1e293b 0%, #334155 50%, #475569 100%);
          background-size: 200% 200%;
          animation: gradient-shift 8s ease infinite;
        }
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @media (prefers-reduced-motion: reduce) {
          .footer-section, .footer-link, .app-store-icon {
            transition: none !important;
            transform: none !important;
            opacity: 1 !important;
          }
          .footer-gradient {
            animation: none !important;
          }
        }
        @media (max-width: 768px) {
          .footer-utility-row {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }
          .footer-controls-left,
          .footer-controls-right {
            grid-column: span 1 !important;
            justify-content: center !important;
          }
        }
      `}</style>
      
      <footer className="footer-gradient text-white relative overflow-hidden">
        {/* Top curved cutouts - REMOVED or FIXED */}
        {/* <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '3rem',
          background: 'white',
          borderRadius: '0 0 3rem 3rem',
          clipPath: 'polygon(0% 0%, 20% 100%, 40% 0%, 60% 100%, 80% 0%, 100% 100%, 100% 0%)'
        }} />
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '2.5rem',
          background: 'white',
          borderRadius: '0 0 2.5rem 2.5rem',
          opacity: 0.9
        }} /> */}
        
        <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-20 py-16 relative z-10" style={{
          maxWidth: '1280px'
        }}>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand + Tagline */}
            <div className="footer-section entered" style={{ transitionDelay: '0ms' }}>
              <h3 style={{
                fontSize: '1.75rem',
                fontWeight: 'bold',
                fontFamily: 'serif',
                marginBottom: '1rem',
                color: 'white'
              }}>
                InnovKaro
              </h3>
              <p style={{
                fontSize: '0.95rem',
                opacity: 0.9,
                lineHeight: '1.6',
                marginBottom: '1.5rem',
                color: 'rgba(255, 255, 255, 0.8)'
              }}>
                Connecting mentors and mentees for meaningful professional growth and career development.
              </p>
              <div className="flex gap-4">
                <a href="https://x.com/KonnectMas86897" target='_blank' className="app-store-icon hover:text-blue-300 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="https://www.linkedin.com/company/innov-karo/" target='_blank' className="app-store-icon hover:text-blue-300 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://www.youtube.com/@Innovkaro" target='_blank' className="app-store-icon hover:text-blue-300 transition-colors">
                  <Youtube className="w-5 h-5" />
                </a>
                <a href="https://www.facebook.com/profile.php?id=61581066593207" target='_blank' className="app-store-icon hover:text-blue-300 transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="https://www.instagram.com/innovkaro/" target='_blank' className="app-store-icon hover:text-blue-300 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Useful Links */}
            <div className="footer-section entered" style={{ transitionDelay: '100ms' }}>
              <h4 style={{
                fontSize: '1.125rem',
                fontWeight: '600',
                marginBottom: '1rem',
                color: 'white'
              }}>
                Useful Links
              </h4>
              <ul style={{ fontSize: '0.95rem', lineHeight: '1.8' }}>
                <li><Link href="/find-mentor" className="footer-link hover:text-blue-300 transition-colors block py-1">Find Mentors</Link></li>
                <li><Link href="/ai-assessment" className="footer-link hover:text-blue-300 transition-colors block py-1">AI Assessment</Link></li>
                <li><Link href="/profile-building" className="footer-link hover:text-blue-300 transition-colors block py-1">Build Profile</Link></li>
                <li><Link href="/auth/sign-up" className="footer-link hover:text-blue-300 transition-colors block py-1">Become a Mentor</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="footer-section entered" style={{ transitionDelay: '200ms' }}>
              <h4 style={{
                fontSize: '1.125rem',
                fontWeight: '600',
                marginBottom: '1rem',
                color: 'white'
              }}>
                Contact Info
              </h4>
              <div style={{ fontSize: '0.95rem', lineHeight: '1.8' }}>
                <p className="footer-link hover:text-blue-300 transition-colors cursor-pointer py-1">
                  Email: connect@innovkaro.com
                </p>
                <p className="footer-link hover:text-blue-300 transition-colors cursor-pointer py-1">
                  Phone: +91 7382987332
                </p>
                <div style={{ marginTop: '1rem' }}>
                  <p className="footer-link hover:text-blue-300 transition-colors cursor-pointer py-1">
                    Support Center
                  </p>
                  <p className="footer-link hover:text-blue-300 transition-colors cursor-pointer py-1">
                    Privacy Policy
                  </p>
                </div>
              </div>
            </div>

            {/* Rules/Legal and App Store */}
            <div className="footer-section entered" style={{ transitionDelay: '300ms' }}>
              <h4 style={{
                fontSize: '1.125rem',
                fontWeight: '600',
                marginBottom: '1rem',
                color: 'white'
              }}>
                Legal & Apps
              </h4>
              <div style={{ fontSize: '0.95rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                <p className="footer-link hover:text-blue-300 transition-colors cursor-pointer py-1">
                  Terms of Service
                </p>
                <p className="footer-link hover:text-blue-300 transition-colors cursor-pointer py-1">
                  Cookie Policy
                </p>
                <p className="footer-link hover:text-blue-300 transition-colors cursor-pointer py-1">
                  GDPR Compliance
                </p>
              </div>
              
              {/* App Store Buttons */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <div className="app-store-icon" style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '8px',
                  padding: '0.75rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  border: '1px solid rgba(255, 255, 255, 0.2)'
                }}>
                  <div style={{ width: '24px', height: '24px', backgroundColor: 'white', borderRadius: '4px' }} />
                  <span style={{ fontSize: '0.875rem', fontWeight: '500', color: 'white' }}>Download App</span>
                </div>
              </div>
            </div>
          </div>

          <hr style={{ margin: '2rem 0', borderColor: 'rgba(255, 255, 255, 0.2)' }} />
          
          {/* Bottom Utility Row */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '24px',
            alignItems: 'center',
            marginBottom: '2rem'
          }} className="footer-utility-row">
            {/* Currency and Language Controls */}
            <div className="footer-controls-left" style={{
              gridColumn: 'span 6',
              display: 'flex',
              gap: '12px',
              alignItems: 'center'
            }}>
              <select style={{
                padding: '0.5rem 1rem',
                borderRadius: '9999px',
                background: 'rgba(255,255,255,0.1)',
                border: '1px solid rgba(255,255,255,0.2)',
                color: 'white',
                fontSize: '0.875rem',
                cursor: 'pointer',
                outline: 'none',
                minHeight: '40px'
              }}>
                <option value="USD">USD $</option>
                <option value="EUR">EUR €</option>
                <option value="GBP">GBP £</option>
              </select>
              <select style={{
                padding: '0.5rem 1rem',
                borderRadius: '9999px',
                background: 'rgba(255,255,255,0.1)',
                border: '1px solid rgba(255,255,255,0.2)',
                color: 'white',
                fontSize: '0.875rem',
                cursor: 'pointer',
                outline: 'none',
                minHeight: '40px'
              }}>
                <option value="en">English</option>
                <option value="es">Español</option>
                <option value="fr">Français</option>
              </select>
            </div>

            {/* Social and Support Icons */}
            <div className="footer-controls-right" style={{
              gridColumn: 'span 6',
              display: 'flex',
              justifyContent: 'flex-end',
              gap: '12px',
              alignItems: 'center'
            }}>
              <div className="app-store-icon" style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'background 300ms ease',
                border: '1px solid rgba(255,255,255,0.2)'
              }} onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.2)'
              }} onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.1)'
              }}>
                <Shield style={{ width: '18px', height: '18px', color: 'white' }} />
              </div>
              <div className="app-store-icon" style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'background 300ms ease',
                border: '1px solid rgba(255,255,255,0.2)'
              }} onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.2)'
              }} onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.1)'
              }}>
                <HelpCircle style={{ width: '18px', height: '18px', color: 'white' }} />
              </div>
            </div>
          </div>

          <div style={{ 
            textAlign: 'center', 
            fontSize: '0.875rem', 
            opacity: 0.8,
            color: 'rgba(255, 255, 255, 0.7)'
          }}>
            © 2024 InnovKaro. All rights reserved. Built with ❤️ for professional growth.
          </div>
        </div>
      </footer>
    </>
  )
}