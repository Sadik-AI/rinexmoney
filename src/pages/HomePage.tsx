import { Link } from 'react-router-dom'
import {
  complianceBoard,
  companyProfile,
  experienceCards,
  faqItems,
  heroMetrics,
  homeFeatures,
  legalDocuments,
  processSteps,
} from '../siteContent'

function HomePage() {
  return (
    <div className="page page-home">
      <section className="hero-panel reveal">
        <div className="hero-copy">
          <p className="eyebrow">Premium, compliance-forward fintech web presence</p>
          <h1>Make Rinex look sharp, feel trustworthy, and explain itself clearly.</h1>
          <p className="lead">
            This build turns Rinex into a modern loan-marketplace website with visible
            legal infrastructure, stronger lender transparency, and cleaner conversion
            psychology for users who are deciding whether to trust you with sensitive data.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" to="/legal">
              Explore legal center
            </Link>
            <Link className="button button-secondary" to="/partner-lenders">
              Review partner disclosures
            </Link>
          </div>
          <ul className="pill-list">
            <li>Marketplace-first identity</li>
            <li>Data and grievance visibility</li>
            <li>Premium marketing without regulator cosplay</li>
          </ul>
        </div>

        <div className="hero-stack">
          <article className="glass-card accent-rise">
            <p className="card-kicker">Public truth</p>
            <h2>Rinex is introduced as a marketplace interface, not as the hidden lender.</h2>
            <p>
              The pitch is now honest enough to survive scrutiny and polished enough to still
              convert.
            </p>
          </article>
          <article className="glass-card accent-rise delay-1">
            <p className="card-kicker">User confidence</p>
            <h2>Legal, support, and complaint paths are visible before the footer.</h2>
            <p>
              That lowers suspicion, especially on mobile where most users never reach dense
              footer text.
            </p>
          </article>
          <article className="glass-card accent-rise delay-2">
            <p className="card-kicker">Launch discipline</p>
            <h2>Placeholders protect you from publishing fake legal details by accident.</h2>
            <p>
              The structure is complete. Your live facts still need to be inserted before you
              push this domain live.
            </p>
          </article>
        </div>
      </section>

      <section className="metric-row reveal delay-1">
        {heroMetrics.map((metric) => (
          <article className="metric-card" key={metric.label}>
            <strong>{metric.value}</strong>
            <span>{metric.label}</span>
            <p>{metric.note}</p>
          </article>
        ))}
      </section>

      <section className="content-section reveal delay-2">
        <div className="section-heading">
          <p className="eyebrow">Why this version works better</p>
          <h2>The site sells clarity, not just speed.</h2>
        </div>
        <div className="card-grid three-up">
          {homeFeatures.map((feature) => (
            <article className="info-card" key={feature.title}>
              <p className="eyebrow">{feature.eyebrow}</p>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
              <ul className="clean-list accent-list">
                {feature.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section reveal">
        <div className="section-heading">
          <p className="eyebrow">User journey design</p>
          <h2>Build the experience around moments of doubt.</h2>
        </div>
        <div className="card-grid three-up">
          {experienceCards.map((card) => (
            <article className="info-card info-card--dark" key={card.title}>
              <p className="eyebrow">{card.eyebrow}</p>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
              <ul className="clean-list">
                {card.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section reveal delay-1">
        <div className="section-heading">
          <p className="eyebrow">Operating model</p>
          <h2>A better fintech site is mostly sequencing.</h2>
        </div>
        <div className="timeline">
          {processSteps.map((step) => (
            <article className="timeline-card" key={step.step}>
              <span className="timeline-index">{step.step}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
                <small>{step.note}</small>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section reveal delay-2">
        <div className="section-heading">
          <p className="eyebrow">Compliance board</p>
          <h2>Some pieces are ready now. Some need your actual company data.</h2>
        </div>
        <div className="card-grid two-up">
          {complianceBoard.map((item) => (
            <article className="status-card" key={item.title}>
              <span
                className={`status-pill ${
                  item.status === 'Ready now'
                    ? 'status-pill--ready'
                    : item.status === 'Fill before launch'
                      ? 'status-pill--fill'
                      : 'status-pill--verify'
                }`}
              >
                {item.status}
              </span>
              <h3>{item.title}</h3>
              <p>{item.summary}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section reveal">
        <div className="section-heading">
          <p className="eyebrow">Legal center</p>
          <h2>Each document is part of the selling experience.</h2>
        </div>
        <div className="card-grid two-up">
          {legalDocuments.map((document) => (
            <article className="document-card" key={document.path}>
              <div>
                <h3>{document.title}</h3>
                <p>{document.summary}</p>
                <small>{document.note}</small>
              </div>
              <Link className="text-link" to={document.path}>
                Open page
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section reveal delay-1">
        <div className="section-heading">
          <p className="eyebrow">FAQ</p>
          <h2>Answer the skeptical questions before they are asked.</h2>
        </div>
        <div className="faq-list">
          {faqItems.map((item) => (
            <details className="faq-item" key={item.question}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="cta-panel reveal delay-2">
        <div>
          <p className="eyebrow">Next move</p>
          <h2>Fill the placeholders, add real partner data, and this becomes launchable.</h2>
          <p className="muted">
            The framework already reflects {companyProfile.brandName} as a cleaner, more
            credible business. Now we swap in your live legal facts and regulated partner
            roster.
          </p>
        </div>
        <div className="hero-actions">
          <Link className="button button-primary" to="/grievance-redressal">
            Review complaint flow
          </Link>
          <Link className="button button-secondary" to="/privacy-policy">
            Read privacy draft
          </Link>
        </div>
      </section>
    </div>
  )
}

export default HomePage
