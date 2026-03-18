import { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { companyProfile, navigation } from '../siteContent'

function Layout() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <div className="site-shell">
      <div className="top-note">
        <span className="note-chip">Preview build</span>
        Replace placeholder legal fields before public launch.
      </div>

      <header className="site-header">
        <NavLink className="brand-mark" to="/" onClick={closeMenu}>
          <span className="brand-mark__crest">R</span>
          <span>
            <strong>{companyProfile.brandName}</strong>
            <small>{companyProfile.marketplaceLabel}</small>
          </span>
        </NavLink>

        <button
          className="menu-toggle"
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="site-nav"
        >
          Menu
        </button>

        <nav
          id="site-nav"
          className={`site-nav${menuOpen ? ' is-open' : ''}`}
          aria-label="Primary"
        >
          {navigation.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `site-nav__link${isActive ? ' is-active' : ''}`
              }
              onClick={closeMenu}
            >
              {item.label}
            </NavLink>
          ))}
          <NavLink className="button button-primary nav-cta" to="/legal" onClick={closeMenu}>
            Build trust stack
          </NavLink>
        </nav>
      </header>

      <main className="site-main">
        <Outlet />
      </main>

      <footer className="site-footer">
        <section className="footer-card">
          <div>
            <p className="eyebrow">Rinex launch notes</p>
            <h2>Built for credibility before scale</h2>
            <p className="muted">
              This version is intentionally designed to feel premium without pretending
              to be a bank, NBFC, regulator, or government-backed scheme.
            </p>
          </div>
          <div className="footer-links">
            <NavLink to="/privacy-policy">Privacy Policy</NavLink>
            <NavLink to="/terms-of-use">Terms of Use</NavLink>
            <NavLink to="/partner-lenders">Partner Lenders</NavLink>
            <NavLink to="/grievance-redressal">Grievance Redressal</NavLink>
          </div>
        </section>

        <section className="footer-grid">
          <article className="footer-panel">
            <p className="eyebrow">Brand</p>
            <h3>{companyProfile.brandName}</h3>
            <p className="muted">{companyProfile.heroStatement}</p>
          </article>

          <article className="footer-panel">
            <p className="eyebrow">Support</p>
            <ul className="clean-list">
              <li>{companyProfile.supportPhone}</li>
              <li>{companyProfile.supportWindow}</li>
              <li>{companyProfile.corporateEmail}</li>
            </ul>
          </article>

          <article className="footer-panel">
            <p className="eyebrow">Legal profile</p>
            <ul className="clean-list">
              <li>{companyProfile.legalEntityName}</li>
              <li>{companyProfile.registeredOffice}</li>
              <li>{companyProfile.cin}</li>
            </ul>
          </article>

          <article className="footer-panel">
            <p className="eyebrow">Grievance officer</p>
            <ul className="clean-list">
              <li>{companyProfile.grievanceOfficerName}</li>
              <li>{companyProfile.grievanceOfficerEmail}</li>
              <li>{companyProfile.grievanceOfficerPhone}</li>
            </ul>
          </article>
        </section>

        <p className="footer-meta">
          Last content framework update: {companyProfile.lastUpdated}. Replace placeholder
          entries and validate every public claim before launch.
        </p>
      </footer>
    </div>
  )
}

export default Layout
