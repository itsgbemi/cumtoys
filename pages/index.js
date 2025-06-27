// pages/index.js
import { useState, useEffect } from 'react';
import Head from 'next/head';

export default function CumToysStore() {
  const [isMobile, setIsMobile] = useState(false);
  const [activeFooterSections, setActiveFooterSections] = useState({});
  const [isAgeVerified, setIsAgeVerified] = useState(false);

  useEffect(() => {
    const handleResize = () => { setIsMobile(window.innerWidth <= 768); };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleFooterSection = (section) => {
    setActiveFooterSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const handleUnder18 = () => {
    window.location.href = 'https://www.google.com'; // Redirect to safe site
  };

  const styles = {
    root: { '--font-xs': '0.75rem', '--font-sm': '0.875rem', '--font-base': '1rem', '--font-lg': '1.125rem', '--font-xl': '1.25rem', '--font-2xl': '1.5rem', '--font-3xl': '1.875rem', '--font-4xl': '2.25rem', '--font-5xl': '3rem', '--font-6xl': '3.75rem', '--color-black': '#000', '--color-white': '#fff', '--color-gray-100': '#f3f4f6', '--color-gray-200': '#e5e7eb', '--color-gray-300': '#d1d5db', '--color-gray-400': '#9ca3af', '--color-gray-500': '#6b7280', '--color-gray-600': '#4b5563', '--color-gray-700': '#374151', '--color-gray-800': '#1f2937', '--color-gray-900': '#111827', '--color-red-500': '#ef4444', '--color-red-600': '#dc2626', '--color-green-500': '#10b981' },
    global: { margin: 0, padding: 0, boxSizing: 'border-box', fontFamily: "'Inter', sans-serif", lineHeight: 1.6, color: 'var(--color-white)' },
    preHeader: { backgroundColor: 'var(--color-black)', padding: '8px 20px', display: 'flex', gap: '10px', justifyContent: 'space-between', alignItems: 'center' },
    shopNowBtn: { backgroundColor: 'var(--color-red-500)', color: 'var(--color-black)', padding: '6px 12px', border: 'none', fontSize: '0.6rem', fontWeight: 500, letterSpacing: '0.03em', minWidth: '80px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', transition: 'background-color 0.3s', cursor: 'pointer' },
    header: { height: '100vh', backgroundColor: 'var(--color-gray-900)', position: 'relative', display: 'flex', flexDirection: 'column' },
    navbar: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px' },
    heroContent: { position: 'absolute', bottom: isMobile ? '10%' : '20%', left: '5%', maxWidth: '500px' },
    footer: { backgroundColor: 'var(--color-gray-800)', padding: '40px 20px' },
    footerContainer: { maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(200px, 1fr))', gap: '30px' },
    footerSectionHeader: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', cursor: 'pointer' },
    footerList: { listStyle: 'none', overflow: 'hidden', transition: 'max-height 0.3s ease', maxHeight: isMobile ? 0 : '1000px' },
    activeFooterList: { maxHeight: '1000px' },
    footerBottom: { textAlign: isMobile ? 'left' : 'center', marginTop: '40px', paddingTop: '20px', borderTop: '1px solid #444', fontSize: 'var(--font-sm)' },
    // Updated age gate styles
    ageGate: { 
      position: 'fixed', 
      top: 0, 
      left: 0, 
      width: '100%', 
      height: '100%', 
      backgroundColor: 'rgba(0,0,0,0.9)', 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      zIndex: 1000 
    },
    ageGateContent: {
      backgroundColor: 'var(--color-gray-800)',
      borderRadius: '9999px', // Pill shape
      padding: '40px',
      maxWidth: '600px',
      width: '90%',
      textAlign: 'center',
      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.5)'
    },
    ageGateTitle: { 
      color: 'white', 
      fontSize: '2rem', 
      marginBottom: '20px' 
    },
    ageGateText: { 
      color: 'white', 
      maxWidth: '500px', 
      margin: '20px auto', 
      lineHeight: '1.6' 
    },
    ageGateButtonGroup: {
      display: 'flex',
      justifyContent: 'center',
      gap: '20px',
      marginTop: '30px'
    },
    ageGateButton: { 
      padding: '15px 30px', 
      fontSize: '1.2rem', 
      cursor: 'pointer', 
      border: 'none',
      borderRadius: '9999px',
      fontWeight: 'bold',
      transition: 'all 0.3s ease'
    },
    ageGateButtonConfirm: {
      backgroundColor: 'var(--color-green-500)',
      color: 'white'
    },
    ageGateButtonDeny: {
      backgroundColor: 'var(--color-red-600)',
      color: 'white'
    }
  };

  if (!isAgeVerified) {
    return (
      <div style={{ ...styles.global, ...styles.ageGate }}>
        <div style={styles.ageGateContent}>
          <h2 style={styles.ageGateTitle}>ADULT CONTENT WARNING</h2>
          <p style={styles.ageGateText}>
            This website contains explicit adult material and is only for individuals 18 years or older.
            By entering, you confirm that you are at least 18 years of age or the legal age in your jurisdiction.
          </p>
          <div style={styles.ageGateButtonGroup}>
            <button 
              style={{ ...styles.ageGateButton, ...styles.ageGateButtonConfirm }} 
              onClick={() => setIsAgeVerified(true)}
            >
              I'M OVER 18
            </button>
            <button 
              style={{ ...styles.ageGateButton, ...styles.ageGateButtonDeny }} 
              onClick={handleUnder18}
            >
              I'M UNDER 18
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.root}>
      <Head>
        <title>CumToys | Adult Sex Toy Store</title>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap" rel="stylesheet" />
      </Head>

      <div style={styles.global}>
        <div style={styles.preHeader}>
          <div style={{ fontSize: '0.65rem' }}>Use coupon code <strong>BLISS35</strong> to get 35% off all items</div>
          <a href="#shop" style={styles.shopNowBtn}>SHOP NOW</a>
        </div>

        <header style={styles.header}>
          <nav style={styles.navbar}>
            <div style={{ display: isMobile ? 'none' : 'flex', alignItems: 'center', gap: '10px' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
              <span>Explore</span>
            </div>
            <div style={{ letterSpacing: '5px', fontSize: '24px', fontWeight: 700 }}>CUMTOYS</div>
            <div style={{ display: 'flex', gap: '20px' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
              {isMobile && (<div><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg></div>)}
            </div>
          </nav>

          <section style={styles.heroContent}>
            <h1 style={{ fontSize: isMobile ? 'var(--font-4xl)' : 'var(--font-5xl)', fontWeight: 700, marginBottom: '15px' }}>BLISS</h1>
            <p style={{ fontSize: isMobile ? 'var(--font-base)' : 'var(--font-lg)' }}>Experience blissful orgasms with exotic toys</p>
          </section>
        </header>

        <footer style={styles.footer}>
          <div style={styles.footerContainer}>
            <div>
              <div style={styles.footerSectionHeader} onClick={() => isMobile && toggleFooterSection('location')}>
                <h3 style={{ fontSize: 'var(--font-base)', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '20px' }}>Store Location</h3>
                {isMobile && (<button style={{ background: 'none', border: 'none', color: 'var(--color-white)', fontSize: '20px', cursor: 'pointer', padding: 0, marginLeft: '10px' }}>{activeFooterSections.location ? '−' : '+'}</button>)}
              </div>
              <ul style={{ ...styles.footerList, ...(isMobile && activeFooterSections.location && styles.activeFooterList) }}>
                <li>
                  <address style={{ fontStyle: 'normal' }}>500 Terry Francine Street<br />San Francisco, CA 94158<br /><a href="mailto:info@mysite.com" style={{ color: '#ccc', textDecoration: 'none' }}>info@mysite.com</a><br />123-456-7890</address>
                </li>
              </ul>
            </div>

            <div>
              <div style={styles.footerSectionHeader} onClick={() => isMobile && toggleFooterSection('company')}>
                <h3 style={{ fontSize: 'var(--font-base)', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '20px' }}>Company</h3>
                {isMobile && (<button style={{ background: 'none', border: 'none', color: 'var(--color-white)', fontSize: '20px', cursor: 'pointer', padding: 0, marginLeft: '10px' }}>{activeFooterSections.company ? '−' : '+'}</button>)}
              </div>
              <ul style={{ ...styles.footerList, ...(isMobile && activeFooterSections.company && styles.activeFooterList) }}>
                {['About CumToys', 'Impressum', 'Company Information', 'Industry Awards', 'Press Room', 'Careers', 'Privacy Policy', 'Cookie Policy', 'Terms of Use', 'Affiliate Program', 'Retailers'].map((item) => (<li key={item} style={{ marginBottom: '10px' }}><a href="#" style={{ color: '#ccc', textDecoration: 'none', fontSize: 'var(--font-sm)' }}>{item}</a></li>))}
              </ul>
            </div>

            <div>
              <div style={styles.footerSectionHeader} onClick={() => isMobile && toggleFooterSection('support')}>
                <h3 style={{ fontSize: 'var(--font-base)', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '20px' }}>Support</h3>
                {isMobile && (<button style={{ background: 'none', border: 'none', color: 'var(--color-white)', fontSize: '20px', cursor: 'pointer', padding: 0, marginLeft: '10px' }}>{activeFooterSections.support ? '−' : '+'}</button>)}
              </div>
              <ul style={{ ...styles.footerList, ...(isMobile && activeFooterSections.support && styles.activeFooterList) }}>
                {['Contact Support', 'Shipping', 'CumToys Warranty', 'Extended Warranty', 'Regulatory Compliance', 'General FAQs', 'Shopping FAQs', 'Product FAQs', 'Environmental Labels', 'Contact Us', 'Store Locator', 'Student Discount'].map((item) => (<li key={item} style={{ marginBottom: '10px' }}><a href="#" style={{ color: '#ccc', textDecoration: 'none', fontSize: 'var(--font-sm)' }}>{item}</a></li>))}
              </ul>
            </div>

            <div>
              <div style={styles.footerSectionHeader} onClick={() => isMobile && toggleFooterSection('browse')}>
                <h3 style={{ fontSize: 'var(--font-base)', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '20px' }}>Browse by Type</h3>
                {isMobile && (<button style={{ background: 'none', border: 'none', color: 'var(--color-white)', fontSize: '20px', cursor: 'pointer', padding: 0, marginLeft: '10px' }}>{activeFooterSections.browse ? '−' : '+'}</button>)}
              </div>
              <ul style={{ ...styles.footerList, ...(isMobile && activeFooterSections.browse && styles.activeFooterList) }}>
                {['Categories', 'Best Selling Sex Toys', 'Sex Toys for Women', 'Sex Toys for Men', 'Sex Toys for Couples', 'Bundles', 'Luxury Sex Toys', 'Lubricants', 'Sex Accessories', 'Condoms', 'Queer Picks'].map((item) => (<li key={item} style={{ marginBottom: '10px' }}><a href="#" style={{ color: '#ccc', textDecoration: 'none', fontSize: 'var(--font-sm)' }}>{item}</a></li>))}
              </ul>
            </div>
          </div>

          <div style={styles.footerBottom}>
            <p>© 2005-{new Date().getFullYear()}. CumToys. All rights reserved.</p>
            <p>All models appearing on this website are 18 years or older.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
