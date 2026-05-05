// Icons for services + AI products (thin 1.5px stroke, 24x24)
const Icon = {
  compass: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9"/>
      <path d="M15.5 8.5L13.5 13.5L8.5 15.5L10.5 10.5Z"/>
    </svg>
  ),
  layers: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3L3 8L12 13L21 8L12 3Z"/>
      <path d="M3 13L12 18L21 13"/>
      <path d="M3 18L12 23L21 18" opacity="0.5"/>
    </svg>
  ),
  flow: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="7" height="6" rx="1"/>
      <rect x="14" y="4" width="7" height="6" rx="1"/>
      <rect x="8.5" y="14" width="7" height="6" rx="1"/>
      <path d="M6.5 10V12.5C6.5 13 7 13.5 7.5 13.5H10"/>
      <path d="M17.5 10V12.5C17.5 13 17 13.5 16.5 13.5H14"/>
    </svg>
  ),
  sliders: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 6H14"/><path d="M18 6H20"/>
      <path d="M4 12H8"/><path d="M12 12H20"/>
      <path d="M4 18H16"/><path d="M20 18H20.01"/>
      <circle cx="16" cy="6" r="2"/>
      <circle cx="10" cy="12" r="2"/>
      <circle cx="18" cy="18" r="2"/>
    </svg>
  ),
  spark: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3V7M12 17V21M3 12H7M17 12H21M5.6 5.6L8.4 8.4M15.6 15.6L18.4 18.4M5.6 18.4L8.4 15.6M15.6 8.4L18.4 5.6"/>
      <circle cx="12" cy="12" r="2.5"/>
    </svg>
  ),
};

function Nav({ scrolled }) {
  const links = ['Services', 'AI suite', 'Workday coverage', 'About', 'Perspectives'];
  return (
    <header className={"nav" + (scrolled ? " scrolled" : "")}>
      <div className="container nav-inner">
        <div className="nav-brand">
          <img src="assets/logo-mark.png" alt="" />
          <span>HCM Advisory Group</span>
          <span className="sub">Workday specialists</span>
        </div>
        <nav className="nav-links">
          {links.map(l => (
            <span key={l} className="nav-link">{l}</span>
          ))}
        </nav>
        <button className="nav-cta">Book a strategy call</button>
      </div>
    </header>
  );
}

function Hero() {
  const videoRef = React.useRef(null);
  React.useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.85;
    }
  }, []);
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-grid">
          <div>
            <div className="eyebrow hero-eyebrow">Independent Workday advisory · est. 2009</div>
            <h1>Unlock the full value of your Workday investment<em>.</em></h1>
            <p className="hero-lead">
              Faster, smarter, more secure HR technology transformations — delivered by senior practitioners with sixteen years of enterprise experience and purposeful AI.
            </p>
            <div className="hero-actions">
              <button className="btn-primary">Book a strategy call <span aria-hidden="true">→</span></button>
              <button className="btn-ghost">See our approach <span className="arr">→</span></button>
            </div>
            <div className="hero-meta">
              <div className="hero-meta-item"><span className="dot-mark"></span> No resellers, no referral fees</div>
              <div className="hero-meta-item"><span className="dot-mark"></span> Senior-only delivery teams</div>
              <div className="hero-meta-item"><span className="dot-mark"></span> Fees tied to outcomes</div>
            </div>
          </div>
          <div className="hero-media">
            <div className="hero-media-corner">HCM / 01</div>
            <div className="hero-media-corner-tr"><span className="live"></span>Since 2009</div>
            <video ref={videoRef} autoPlay loop muted playsInline>
              <source src="assets/logo-animation.mp4" type="video/mp4" />
            </video>
            <div className="hero-media-label">
              <span>Brand identity · motion</span>
              <span>01 / 01</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustBar() {
  return (
    <section className="trust-bar">
      <div className="container trust-inner">
        <div className="trust-label">Track record</div>
        <div className="trust-items">
          <div className="trust-item"><span className="n">16</span><span className="l">years of Workday delivery</span></div>
          <div className="trust-item"><span className="n">2</span><span className="l">of Workday's largest global clients</span></div>
          <div className="trust-item"><span className="n">11</span><span className="l">Workday product areas</span></div>
          <div className="trust-item"><span className="n"></span><span className="l">UK · Nordics · DACH · Benelux</span></div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const items = [
    { n: '01', t: 'Strategy & Selection', d: 'Independent vendor assessment, readiness diagnostics, and business-case shaping. A clear programme plan before a single licence is signed.', icon: Icon.compass },
    { n: '02', t: 'Implementation', d: 'End-to-end Workday deployment across HCM, Payroll and beyond. AI-accelerated configuration with senior practitioners on day one.', icon: Icon.layers },
    { n: '03', t: 'Integration & Data', d: 'Integrations engineering, data migration and cutover. Clean historical data, validated against the upstream system before go-live.', icon: Icon.flow },
    { n: '04', t: 'Optimisation & Support', d: 'Post-production audit, configuration refinement and managed support. A named lead, a 48-hour SLA, quarterly reviews.', icon: Icon.sliders },
  ];
  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <div><div className="eyebrow">Services</div></div>
          <div>
            <h2>Four practices. One partnership model.</h2>
            <p className="section-head-sub">Every engagement begins with a named partner who stays with you through go-live. No hand-offs to junior teams, no referral fees, no conflicts of interest.</p>
          </div>
        </div>
        <div className="services">
          {items.map(it => (
            <div className="service" key={it.n}>
              <div className="service-head">
                <div className="service-icon">{it.icon}</div>
                <div>
                  <span className="num">{it.n}</span>
                  <h3>{it.t}</h3>
                </div>
              </div>
              <p>{it.d}</p>
              <span className="service-link">Read more <span className="arr">→</span></span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  const pillars = [
    { n: '01', t: 'Deep Workday expertise', d: 'Multi-product coverage across eleven Workday areas, delivered at enterprise scale. Senior practitioners on your programme from day one — no shadow bench, no learn-on-client.' },
    { n: '02', t: 'AI-first delivery', d: 'Proprietary tooling built by our delivery leads, proven on live programmes. Not marketing fluff — practical accelerators that compress configuration, testing and documentation work.' },
    { n: '03', t: 'Outcome-led engagement', d: 'Fees tied to the business results you define on day one. A fixed investment, measurable milestones, and a partner incentivised to finish — not to extend.' },
  ];
  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <div><div className="eyebrow">Why us</div></div>
          <div>
            <h2>Built to solve the Big Four problem.</h2>
            <p className="section-head-sub">CHROs are tired of paying partner rates for junior resourcing. We are the opposite of that model.</p>
          </div>
        </div>
        <div className="pillars">
          {pillars.map(p => (
            <div className="pillar" key={p.n}>
              <div className="pillar-num">— {p.n}</div>
              <h3>{p.t}</h3>
              <p>{p.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Nav, Hero, TrustBar, Services, WhyUs, Icon });
