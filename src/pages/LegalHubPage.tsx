import { Link } from 'react-router-dom'
import {
  complianceBoard,
  launchChecklist,
  legalDocuments,
  partnerDisclosureItems,
} from '../siteContent'

function LegalHubPage() {
  return (
    <div className="page page-detail">
      <section className="page-hero reveal">
        <p className="eyebrow">Legal center</p>
        <h1>Make compliance visible, understandable, and useful.</h1>
        <p className="lead">
          A strong legal section should reduce fear, not create more of it. This page gives
          users, partners, and your own team one clean place to understand how Rinex works.
        </p>
      </section>

      <section className="content-section reveal delay-1">
        <div className="card-grid two-up">
          {legalDocuments.map((document) => (
            <article className="document-card" key={document.path}>
              <div>
                <h2>{document.title}</h2>
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

      <section className="content-section reveal delay-2">
        <div className="section-heading">
          <p className="eyebrow">Launch checklist</p>
          <h2>These details still need your real-world data.</h2>
        </div>
        <div className="card-grid two-up">
          {launchChecklist.map((item) => (
            <article className="check-card" key={item}>
              <h3>Before you publish</h3>
              <p>{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section reveal">
        <div className="section-heading">
          <p className="eyebrow">Disclosure discipline</p>
          <h2>What every offer and legal flow should reinforce</h2>
        </div>
        <div className="split-panel">
          <article className="info-card">
            <h3>Offer presentation rules</h3>
            <ul className="clean-list accent-list">
              {partnerDisclosureItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="info-card info-card--dark">
            <h3>Readiness board</h3>
            <div className="mini-status-list">
              {complianceBoard.map((item) => (
                <div key={item.title}>
                  <strong>{item.title}</strong>
                  <p>{item.status}</p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>
    </div>
  )
}

export default LegalHubPage
