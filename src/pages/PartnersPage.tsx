import { partnerDisclosureItems, partnerTemplates } from '../siteContent'

function PartnersPage() {
  return (
    <div className="page page-detail">
      <section className="page-hero reveal">
        <p className="eyebrow">Partner lenders</p>
        <h1>Do not make borrowers guess who is actually lending.</h1>
        <p className="lead">
          This page is built to hold your real lender roster, comparison logic, and product
          disclosures. It protects trust by making the regulated entity visible at the moment
          it matters.
        </p>
      </section>

      <section className="content-section reveal delay-1">
        <div className="section-heading">
          <p className="eyebrow">Public rules for offer display</p>
          <h2>What should be visible before a user proceeds</h2>
        </div>
        <div className="card-grid two-up">
          {partnerDisclosureItems.map((item) => (
            <article className="check-card" key={item}>
              <h3>Display standard</h3>
              <p>{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section reveal delay-2">
        <div className="section-heading">
          <p className="eyebrow">Partner slots</p>
          <h2>Ready for your actual regulated entities</h2>
        </div>
        <div className="card-grid three-up">
          {partnerTemplates.map((template) => (
            <article className="info-card" key={template.slot}>
              <p className="eyebrow">{template.status}</p>
              <h3>{template.slot}</h3>
              <ul className="clean-list accent-list">
                {template.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section reveal">
        <div className="split-panel">
          <article className="info-card info-card--dark">
            <h3>Ranking logic should be public</h3>
            <p>
              If Rinex ranks or highlights offers, users should understand the broad logic
              such as eligibility fit, APR competitiveness, product availability, or service
              readiness. Hidden ranking rules feel manipulative.
            </p>
          </article>
          <article className="info-card">
            <h3>Sample lender card fields</h3>
            <ul className="clean-list accent-list">
              <li>Lender legal name and entity type</li>
              <li>APR band and repayment illustration</li>
              <li>Processing-fee and penal-charge treatment</li>
              <li>KFS access path and sanction handoff</li>
              <li>Complaint contact and servicing ownership</li>
            </ul>
          </article>
        </div>
      </section>
    </div>
  )
}

export default PartnersPage
