function Calendar() {
  const [selectedDay, setSelectedDay] = React.useState(14);
  const [selectedSlot, setSelectedSlot] = React.useState('10:30');

  // April 2026 grid — 1st is a Wednesday
  const days = [
    { d: 30, m: true }, { d: 31, m: true }, { d: 1 }, { d: 2 }, { d: 3 }, { d: 4 }, { d: 5 },
    { d: 6 }, { d: 7 }, { d: 8 }, { d: 9 }, { d: 10 }, { d: 11 }, { d: 12 },
    { d: 13 }, { d: 14, a: true }, { d: 15, a: true }, { d: 16 }, { d: 17, a: true }, { d: 18 }, { d: 19 },
    { d: 20, a: true }, { d: 21, a: true }, { d: 22 }, { d: 23, a: true }, { d: 24 }, { d: 25 }, { d: 26 },
    { d: 27 }, { d: 28, a: true }, { d: 29, a: true }, { d: 30, a: true }, { d: 1, m: true }, { d: 2, m: true }, { d: 3, m: true },
  ];
  const slots = ['09:30', '10:30', '11:30', '14:00', '15:00', '16:30'];

  return (
    <div className="calendar-placeholder">
      <div className="cal-head">
        <h4>30-minute strategy call</h4>
        <div className="month">April 2026 · BST</div>
      </div>
      <div className="cal-days">
        {['M','T','W','T','F','S','S'].map((d,i) => <div className="dh" key={i}>{d}</div>)}
        {days.map((day, i) => (
          <div
            key={i}
            className={
              "d" +
              (day.m ? " muted" : "") +
              (day.a ? " avail" : "") +
              (day.d === selectedDay && !day.m ? " selected" : "")
            }
            onClick={() => !day.m && day.a && setSelectedDay(day.d)}
          >
            {day.d}
          </div>
        ))}
      </div>
      <div className="cal-slots">
        {slots.map(s => (
          <button
            key={s}
            className={"cal-slot" + (s === selectedSlot ? " selected" : "")}
            onClick={() => setSelectedSlot(s)}
          >{s}</button>
        ))}
      </div>
      <div className="cal-foot">
        <span>Tue 14 April · {selectedSlot} BST</span>
        <span>30 min · video</span>
      </div>
    </div>
  );
}

function FinalCta() {
  return (
    <section className="final-cta">
      <div className="container">
        <div className="final-cta-grid">
          <div>
            <div className="eyebrow on-navy plain">Start the conversation</div>
            <h2>Book a 30-minute strategy call.</h2>
            <p>A senior practitioner responds within one working day. No qualification funnel, no marketing sequence — a focused conversation about where you are and what you are weighing up.</p>
            <button className="btn-primary-invert">Reserve a time <span aria-hidden="true">→</span></button>
            <div style={{marginTop:'48px', paddingTop:'28px', borderTop:'1px solid rgba(237,237,237,0.14)', display:'flex', gap:'40px', flexWrap:'wrap', fontSize:'13px', color:'rgba(237,237,237,0.72)'}}>
              <div>
                <div style={{fontFamily:'var(--font-mono)', fontSize:'10.5px', letterSpacing:'0.12em', textTransform:'uppercase', color:'var(--brand-copper)', marginBottom:'8px'}}>Direct line</div>
                <div>+44 20 4538 9120</div>
              </div>
              <div>
                <div style={{fontFamily:'var(--font-mono)', fontSize:'10.5px', letterSpacing:'0.12em', textTransform:'uppercase', color:'var(--brand-copper)', marginBottom:'8px'}}>Partner email</div>
                <div>partners@hcmadvisorygroup.com</div>
              </div>
            </div>
          </div>
          <Calendar />
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand footer-col">
            <img src="assets/logo-mark.png" alt="" />
            <div className="name">HCM Advisory Group<span className="dot">.</span></div>
            <div className="desc">Independent Workday specialist consultancy. Established 2009. London, Stockholm, Amsterdam.</div>
            <div className="partner">
              <span className="wd-mark">W</span>
              <div>
                <div style={{fontSize:'11px', color:'rgba(237,237,237,0.54)', letterSpacing:'0.08em', textTransform:'uppercase'}}>Workday</div>
                <div style={{fontSize:'13px', color:'var(--ink-100)', marginTop:'2px'}}>Services Partner</div>
              </div>
            </div>
          </div>
          <div className="footer-col">
            <h4>Services</h4>
            <a>Strategy & selection</a>
            <a>Implementation</a>
            <a>Integration & data</a>
            <a>Optimisation & support</a>
            <a>AI suite</a>
          </div>
          <div className="footer-col">
            <h4>Offices</h4>
            <div className="office-addr">
              <span className="city">London</span>
              42 Bedford Row<br/>WC1R 4JH
            </div>
            <div className="office-addr">
              <span className="city">Stockholm</span>
              Birger Jarlsgatan 14<br/>111 45
            </div>
            <div className="office-addr">
              <span className="city">Amsterdam</span>
              Keizersgracht 241<br/>1016 EA
            </div>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <a>About</a>
            <a>Careers</a>
            <a>Perspectives</a>
            <a>Contact</a>
          </div>
          <div className="footer-col">
            <h4>Legal</h4>
            <a>Privacy</a>
            <a>Modern slavery</a>
            <a>Terms of business</a>
            <a>Cookies</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 HCM Advisory Group Limited · Registered in England 11452304</span>
          <span>London · Stockholm · Amsterdam · Frankfurt</span>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { FinalCta, Footer, Calendar });
