function AiSuite() {
  const products = [
    { idx: 'HAG-01', name: 'Config Assist', tag: 'Live', benefit: 'Generates Workday configuration workbooks from business requirements, trained on sixteen years of anonymised delivery artefacts.' },
    { idx: 'HAG-02', name: 'TestGen', tag: 'Live', benefit: 'Produces end-to-end test scripts and regression packs from your tenant configuration — covering HCM, Payroll and Integrations.' },
    { idx: 'HAG-03', name: 'DataMigrate', tag: 'Live', benefit: 'Validates legacy HR data against Workday field rules pre-load, flagging exceptions with proposed remediation.' },
    { idx: 'HAG-04', name: 'DocEngine', tag: 'Live', benefit: 'Produces configuration workbooks, runbooks and BAU handover packs directly from the live tenant state.' },
    { idx: 'HAG-05', name: 'Insights', tag: 'Q2 2026', benefit: 'Ongoing tenant monitoring for drift, unused configuration and emerging optimisation opportunities.' },
  ];
  return (
    <section className="section on-navy" data-surface="navy">
      <div className="container">
        <div className="ai-shell">
          <div className="ai-aside">
            <div className="eyebrow on-navy plain">HAG AI suite</div>
            <h2>Purposeful AI, built on the programme floor.</h2>
            <p>Five production tools used on every engagement. Built by our senior delivery leads — not a separate lab — and refined against live Workday tenants, not demo data.</p>
            <div className="pullquote">
              <div className="stat">Reduces configuration design time by up to <em>40%</em>.</div>
              <div className="label">Config Assist · measured across 14 deployments</div>
            </div>
            <div className="pullquote">
              <div className="stat">Cuts documentation effort by <em>60–70%</em>.</div>
              <div className="label">DocEngine · measured across 22 programmes</div>
            </div>
          </div>
          <div className="ai-products">
            {products.map(p => (
              <article className="ai-product" key={p.idx}>
                <div className="idx">{p.idx}</div>
                <div className="body">
                  <h3>{p.name} <span className={"tag " + (p.tag === 'Live' ? 'live' : '')}>{p.tag}</span></h3>
                  <p>{p.benefit}</p>
                </div>
                <div className="arr">→</div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function LevelChip({ level }) {
  const map = {
    Expert: { cls: 'level-expert', count: 3 },
    Advanced: { cls: 'level-advanced', count: 2 },
    Competent: { cls: 'level-competent', count: 1 },
  };
  const { cls, count } = map[level];
  return (
    <span className={"level-chip " + cls}>
      <span className="bar">
        <span className={count >= 1 ? 'on' : ''}></span>
        <span className={count >= 2 ? 'on' : ''}></span>
        <span className={count >= 3 ? 'on' : ''}></span>
      </span>
      {level}
    </span>
  );
}

function Coverage() {
  const rows = [
    { n: '01', product: 'HCM Core', note: 'Foundation tables, supervisory organisations, business processes, security.', level: 'Expert' },
    { n: '02', product: 'Payroll', note: 'UK, US, Netherlands, Germany. Benefits harmonisation across jurisdictions.', level: 'Expert' },
    { n: '03', product: 'Absence & Time Tracking', note: 'Complex accruals, multi-country working patterns, schedule calendars.', level: 'Expert' },
    { n: '04', product: 'Talent & Performance', note: 'Review cycles, calibration, career frameworks and succession.', level: 'Advanced' },
    { n: '05', product: 'Recruiting', note: 'Candidate journey, job requisition design, third-party integrations.', level: 'Advanced' },
    { n: '06', product: 'Learning', note: 'Content architecture, learning programmes, extended enterprise.', level: 'Advanced' },
    { n: '07', product: 'Prism Analytics', note: 'Data ingestion, composite reporting, derived datasets.', level: 'Advanced' },
    { n: '08', product: 'Extend', note: 'Custom app development on the Workday platform, API integrations.', level: 'Advanced' },
    { n: '09', product: 'VNDLY', note: 'Contingent workforce management, vendor onboarding.', level: 'Competent' },
    { n: '10', product: 'Integrations', note: 'Core Connectors, EIB, Studio, PECI. Full-stack integration engineering.', level: 'Expert' },
    { n: '11', product: 'AI/ML Features', note: 'Workday-native AI, Illuminate, HiredScore. Adoption and governance.', level: 'Advanced' },
  ];
  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <div><div className="eyebrow">Workday coverage</div></div>
          <div>
            <h2>Eleven product areas, three levels of depth.</h2>
            <p className="section-head-sub">Honest labels, not a capability matrix designed for sales decks. Expert means we lead it. Advanced means we deliver it. Competent means we have shipped it.</p>
          </div>
        </div>
        <div className="coverage-table">
          <div className="coverage-row head">
            <div>—</div>
            <div>Product area</div>
            <div className="note-col">Scope</div>
            <div>Depth</div>
          </div>
          {rows.map(r => (
            <div className="coverage-row" key={r.n}>
              <div className="num">— {r.n}</div>
              <div className="product">{r.product}</div>
              <div className="note">{r.note}</div>
              <div><LevelChip level={r.level} /></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Founder() {
  const credentials = ['HCM Core', 'Payroll', 'Integrations', 'Prism Analytics', 'Talent & Performance', 'Recruiting', 'Learning', 'Extend'];
  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <div><div className="eyebrow">Founder</div></div>
          <div>
            <h2>The people who sell the work are the people who do it.</h2>
          </div>
        </div>
        <div className="founder-grid">
          <div className="founder-photo">
            <div className="ph-label">Portrait · editorial</div>
          </div>
          <div className="founder-body">
            <p className="lede">
              <em>Sixteen years of Workday HCM delivery</em> at two of Workday's largest global clients — spanning original implementation, multi-country rollout and sustained optimisation.
            </p>
            <p style={{fontSize:'15.5px', color:'var(--fg-muted)', lineHeight:1.62, maxWidth:'52ch', margin:0}}>
              Before founding HCM Advisory Group, led multi-product Workday programmes across Europe and APAC with go-lives at scale. Certified across the platform and a frequent speaker at Workday Rising on AI-accelerated delivery.
            </p>
            <div className="founder-credentials">
              <div className="founder-credentials-label">Certified in</div>
              <div className="credentials-list">
                {credentials.map(c => <span className="credential" key={c}>{c}</span>)}
              </div>
            </div>
            <div className="name-line">
              <span className="name">Alexander Dalsson</span>
              <span>Founder &amp; Managing Partner</span>
              <span>· London</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Outcomes() {
  const items = [
    { metric: '11', unit: 'days', label: 'ahead of schedule on a nine-country HCM harmonisation.', client: 'FTSE 250 · Manufacturing · 14,200 FTE' },
    { metric: '42', unit: '%', label: 'reduction in configuration design effort via Config Assist.', client: 'Nordic industrials · 8,600 FTE' },
    { metric: '£3.1', unit: 'M', label: 'in avoided Big Four fees on a single 18-month programme.', client: 'DACH financial services · 11,400 FTE' },
  ];
  return (
    <section className="section" style={{paddingTop: 0}}>
      <div className="container">
        <div className="section-head">
          <div><div className="eyebrow">Outcomes</div></div>
          <div>
            <h2>Measured against the metrics you set on day one.</h2>
            <p className="section-head-sub">A selection of recent client outcomes. Names under NDA — references available on request.</p>
          </div>
        </div>
        <div className="outcomes">
          {items.map((it, i) => (
            <div className="outcome" key={i}>
              <div className="metric">{it.metric}<span className="unit">{it.unit}</span></div>
              <div className="metric-label">{it.label}</div>
              <div className="client">{it.client}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { AiSuite, Coverage, Founder, Outcomes, LevelChip });
