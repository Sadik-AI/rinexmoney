import type { PolicyDocument } from '../siteContent'

type PolicyPageProps = {
  document: PolicyDocument
}

function PolicyPage({ document }: PolicyPageProps) {
  return (
    <div className="page page-detail">
      <section className="page-hero reveal">
        <p className="eyebrow">Policy document</p>
        <h1>{document.title}</h1>
        <p className="lead">{document.summary}</p>
        <p className="page-meta">Last updated: {document.updated}</p>
      </section>

      <section className="content-section reveal delay-1">
        <div className="policy-layout">
          <div className="policy-sections">
            {document.sections.map((section) => (
              <article className="policy-card" key={section.title}>
                <h2>{section.title}</h2>
                <p>{section.intro}</p>
                <ul className="clean-list accent-list">
                  {section.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <aside className="policy-sidebar">
            {document.sidebar.map((group) => (
              <article className="sidebar-card" key={group.title}>
                <h3>{group.title}</h3>
                <ul className="clean-list">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </aside>
        </div>
      </section>
    </div>
  )
}

export default PolicyPage
