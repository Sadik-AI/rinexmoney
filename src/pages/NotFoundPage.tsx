import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <div className="page page-detail">
      <section className="page-hero reveal">
        <p className="eyebrow">Missing page</p>
        <h1>This route does not exist yet.</h1>
        <p className="lead">
          The site map is in place, but this specific path has not been assigned content.
        </p>
        <div className="hero-actions">
          <Link className="button button-primary" to="/">
            Return home
          </Link>
          <Link className="button button-secondary" to="/legal">
            Open legal center
          </Link>
        </div>
      </section>
    </div>
  )
}

export default NotFoundPage
