import React from 'react';

const pageStyle: React.CSSProperties = {
  backgroundColor: '#f7f9fc',
  borderRadius: '28px',
  boxShadow: '0 18px 40px rgba(15, 23, 42, 0.08)',
  display: 'flex',
  flexDirection: 'column',
  gap: '2.5rem',
  padding: '3rem',
};

const heroStyle: React.CSSProperties = {
  display: 'grid',
  gap: '2rem',
  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
  alignItems: 'center',
};

const heroTextStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '1.25rem',
  color: '#0f172a',
};

const heroEyebrowStyle: React.CSSProperties = {
  backgroundColor: '#e0e7ff',
  borderRadius: '999px',
  color: '#3730a3',
  fontSize: '0.85rem',
  fontWeight: 600,
  letterSpacing: '0.08em',
  padding: '0.45rem 1.15rem',
  textTransform: 'uppercase',
  width: 'fit-content',
};

const heroTitleStyle: React.CSSProperties = {
  fontSize: '2.25rem',
  fontWeight: 700,
  lineHeight: 1.15,
  margin: 0,
};

const heroDescriptionStyle: React.CSSProperties = {
  color: '#475569',
  fontSize: '1.05rem',
  lineHeight: 1.65,
  margin: 0,
};

const overviewStyle: React.CSSProperties = {
  display: 'grid',
  gap: '1rem',
};

const overviewBadgeStyle: React.CSSProperties = {
  alignSelf: 'flex-start',
  backgroundColor: '#dbeafe',
  borderRadius: '12px',
  color: '#1d4ed8',
  fontWeight: 600,
  padding: '0.75rem 1rem',
};

const searchRowStyle: React.CSSProperties = {
  alignItems: 'center',
  backgroundColor: '#ffffff',
  borderRadius: '16px',
  boxShadow: '0 12px 24px rgba(15, 23, 42, 0.08)',
  display: 'grid',
  gap: '1rem',
  gridTemplateColumns: '3fr 2fr 1fr',
  padding: '1rem 1.25rem',
};

const inputStyle: React.CSSProperties = {
  border: '1px solid #cbd5f5',
  borderRadius: '12px',
  fontSize: '1rem',
  padding: '0.75rem 1rem',
  width: '100%',
};

const selectStyle: React.CSSProperties = {
  ...inputStyle,
  appearance: 'none',
  backgroundColor: '#f8fafc',
  fontWeight: 600,
};

const buttonStyle: React.CSSProperties = {
  backgroundColor: '#1d4ed8',
  border: 'none',
  borderRadius: '12px',
  color: '#ffffff',
  cursor: 'pointer',
  fontSize: '1rem',
  fontWeight: 600,
  padding: '0.85rem 1.2rem',
};

const cardsGridStyle: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
  gap: '1.5rem',
};

const cardStyle: React.CSSProperties = {
  backgroundColor: '#ffffff',
  borderRadius: '18px',
  boxShadow: '0 10px 24px rgba(15, 23, 42, 0.06)',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  padding: '1.5rem',
};

const cardBadgeStyle: React.CSSProperties = {
  alignSelf: 'flex-start',
  backgroundColor: '#eef2ff',
  borderRadius: '10px',
  color: '#4338ca',
  fontSize: '0.75rem',
  fontWeight: 700,
  letterSpacing: '0.05em',
  padding: '0.35rem 0.75rem',
  textTransform: 'uppercase',
};

const cardTitleStyle: React.CSSProperties = {
  fontSize: '1.25rem',
  fontWeight: 600,
  margin: 0,
};

const cardDescriptionStyle: React.CSSProperties = {
  color: '#475569',
  lineHeight: 1.6,
};

const metaRowStyle: React.CSSProperties = {
  borderTop: '1px dashed rgba(148, 163, 184, 0.5)',
  display: 'flex',
  flexWrap: 'wrap',
  gap: '0.75rem',
  marginTop: 'auto',
  paddingTop: '1rem',
  fontSize: '0.9rem',
};

const metaPillStyle: React.CSSProperties = {
  backgroundColor: '#e2e8f0',
  borderRadius: '999px',
  color: '#0f172a',
  fontWeight: 500,
  padding: '0.35rem 0.85rem',
};

const categoryStyle: React.CSSProperties = {
  display: 'grid',
  gap: '1rem',
};

const categoryHeaderStyle: React.CSSProperties = {
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'space-between',
};

const categoryTitleStyle: React.CSSProperties = {
  color: '#0f172a',
  fontSize: '1.5rem',
  fontWeight: 700,
  margin: 0,
};

const categoryHintStyle: React.CSSProperties = {
  color: '#6366f1',
  fontWeight: 600,
};

const resourceListStyle: React.CSSProperties = {
  backgroundColor: '#ffffff',
  borderRadius: '16px',
  display: 'grid',
  gap: '1rem',
  padding: '1.5rem',
};

const resourceItemStyle: React.CSSProperties = {
  alignItems: 'center',
  display: 'flex',
  gap: '0.75rem',
  justifyContent: 'space-between',
  padding: '0.75rem 1rem',
  borderRadius: '12px',
  backgroundColor: '#f8fafc',
};

const arrowStyle: React.CSSProperties = {
  color: '#2563eb',
  fontWeight: 700,
};

const categories = [
  {
    name: 'Payment processors',
    hint: 'Certified connections ready to launch',
    integrations: [
      {
        badge: 'Popular',
        title: 'HausPay Core',
        description:
          'End-to-end acquiring with built-in fraud signals, tokenization, and ledger reconciliation.',
        meta: ['PCI Level 1', 'Global'],
      },
      {
        badge: 'New',
        title: 'Atlas Gateway',
        description: 'Modular gateway for multi-processor orchestration across regions.',
        meta: ['Adaptive routing', 'LATAM'],
      },
      {
        badge: 'Scale',
        title: 'NovaPay Enterprise',
        description: 'High-volume authorization stack with chargeback management tooling.',
        meta: ['Chargeback suite', 'Enterprise'],
      },
    ],
  },
  {
    name: 'Compliance & risk',
    hint: 'Accelerate underwriting with third-party data',
    integrations: [
      {
        badge: 'Risk',
        title: 'SignalLift KYB',
        description: 'Automated business verification with global document coverage.',
        meta: ['KYB', 'Global coverage'],
      },
      {
        badge: 'Security',
        title: 'ShieldScore AML',
        description: 'Continuous monitoring and reporting for AML/KYC obligations.',
        meta: ['AML', 'Screening'],
      },
      {
        badge: 'Identity',
        title: 'VeriFlow Biometrics',
        description: 'Device fingerprinting with behavioral analytics for risky applications.',
        meta: ['Biometrics', 'Risk tiers'],
      },
    ],
  },
  {
    name: 'Revenue operations',
    hint: 'Keep finance and partner success aligned',
    integrations: [
      {
        badge: 'Analytics',
        title: 'LedgerIQ Insights',
        description: 'Unified revenue dashboards that sync payment provider data nightly.',
        meta: ['NetSuite sync', 'Data warehouse'],
      },
      {
        badge: 'Workflow',
        title: 'CoPilot Playbooks',
        description: 'Trigger tailored partner journeys based on performance milestones.',
        meta: ['Playbooks', 'Automation'],
      },
      {
        badge: 'Support',
        title: 'RelayDesk Resolve',
        description: 'Embed merchant health into support routing to prioritize outreach.',
        meta: ['Support tooling', 'Alerts'],
      },
    ],
  },
];

const resources = [
  {
    label: 'Integration playbook templates',
    detail: 'Step-by-step launch checklists for partner teams.',
  },
  {
    label: 'API coverage matrix',
    detail: 'Compare available endpoints across providers at a glance.',
  },
  {
    label: 'Regulatory readiness kit',
    detail: 'Region-specific compliance requirements summarized for your team.',
  },
];

export default function IntegrationDirectory() {
  return (
    <div style={pageStyle}>
      <section style={heroStyle}>
        <div style={heroTextStyle}>
          <span style={heroEyebrowStyle}>Integration directory</span>
          <h2 style={heroTitleStyle}>Launch any merchant workflow faster.</h2>
          <p style={heroDescriptionStyle}>
            Explore vetted integrations spanning payments, compliance, risk, and revenue
            operations. Each listing includes implementation guidance, certification
            notes, and launch resources curated by the MerchantHaus partner team.
          </p>
        </div>
        <div style={overviewStyle}>
          <div style={overviewBadgeStyle}>58 integrations ready to connect</div>
          <div style={{ color: '#475569', lineHeight: 1.6 }}>
            Filter by capability, region, or merchant segment to build a stack that
            fits. New listings are added monthly with sandbox credentials provided
            instantly.
          </div>
        </div>
      </section>

      <section style={searchRowStyle}>
        <input style={inputStyle} placeholder="Search integrations" />
        <select style={selectStyle} defaultValue="">
          <option value="" disabled>
            Filter by category
          </option>
          <option>Payment processors</option>
          <option>Compliance &amp; risk</option>
          <option>Revenue operations</option>
        </select>
        <button type="button" style={buttonStyle}>
          Download catalog
        </button>
      </section>

      {categories.map((category) => (
        <section key={category.name} style={categoryStyle}>
          <div style={categoryHeaderStyle}>
            <h3 style={categoryTitleStyle}>{category.name}</h3>
            <span style={categoryHintStyle}>{category.hint}</span>
          </div>
          <div style={cardsGridStyle}>
            {category.integrations.map((integration) => (
              <article key={integration.title} style={cardStyle}>
                <span style={cardBadgeStyle}>{integration.badge}</span>
                <h4 style={cardTitleStyle}>{integration.title}</h4>
                <p style={cardDescriptionStyle}>{integration.description}</p>
                <div style={metaRowStyle}>
                  {integration.meta.map((item) => (
                    <span key={item} style={metaPillStyle}>
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>
      ))}

      <section style={resourceListStyle}>
        {resources.map((resource) => (
          <div key={resource.label} style={resourceItemStyle}>
            <div>
              <div style={{ fontWeight: 600, color: '#0f172a' }}>{resource.label}</div>
              <div style={{ color: '#475569', fontSize: '0.95rem' }}>{resource.detail}</div>
            </div>
            <span style={arrowStyle}>→</span>
          </div>
        ))}
      </section>
    </div>
  );
}
