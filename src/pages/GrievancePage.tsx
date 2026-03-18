import { companyProfile, grievanceSteps, officialResources } from '../siteContent'

function GrievancePage() {
  return (
    <div className="page page-detail">
      <section className="page-hero reveal">
        <p className="eyebrow">Grievance redressal</p>
        <h1>Complaint handling should feel organized, not defensive.</h1>
        <p className="lead">
          Users trust financial brands more when the escalation path is obvious. This page
          makes complaint ownership, response expectations, and official escalation options
          part of the core experience.
        </p>
      </section>

      <section className="content-section reveal delay-1">
        <div className="split-panel">
          <article className="info-card">
            <p className="eyebrow">Nodal grievance officer</p>
            <h2>{companyProfile.grievanceOfficerName}</h2>
            <ul className="clean-list accent-list">
              <li>{companyProfile.grievanceOfficerEmail}</li>
              <li>{companyProfile.grievanceOfficerPhone}</li>
              <li>{companyProfile.supportWindow}</li>
            </ul>
          </article>
          <article className="info-card info-card--dark">
            <p className="eyebrow">Complaint handling norm</p>
            <h2>Target acknowledgment within 24 hours</h2>
            <p>
              Final-resolution timing depends on whether the issue belongs to Rinex, a
              partner lender, or another service provider. Keep the borrower informed at each
              handoff.
            </p>
          </article>
        </div>
      </section>

      <section className="content-section reveal delay-2">
        <div className="section-heading">
          <p className="eyebrow">Complaint workflow</p>
          <h2>One route in, clean routing behind the scenes</h2>
        </div>
        <div className="timeline">
          {grievanceSteps.map((step) => (
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

      <section className="content-section reveal">
        <div className="section-heading">
          <p className="eyebrow">Official resources</p>
          <h2>Escalation references users can trust</h2>
        </div>
        <div className="card-grid three-up">
          {officialResources.map((resource) => (
            <article className="resource-card" key={resource.href}>
              <h3>{resource.title}</h3>
              <p>{resource.description}</p>
              <a href={resource.href} target="_blank" rel="noreferrer">
                Visit official resource
              </a>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}

export default GrievancePage
