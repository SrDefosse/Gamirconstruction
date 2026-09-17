import { Link } from "react-router";
const explore = [
  { to: "/work", label: "Work" },
  { to: "/services", label: "Services" },
  { to: "/process", label: "Process" },
  { to: "/about", label: "About" },
  { to: "/journal", label: "Journal" },
];
export function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer-grid">
        <div className="footer-intro">
          <Link
            className="brand-logo"
            to="/"
            aria-label="Gamir Construction home"
          >
            <img src="/logo.png" alt="Gamir Construction" />
          </Link>
          <p>Homes shaped around the way you live.</p>
          <Link className="footer-cta" to="/contact">
            Start a conversation <span>↗</span>
          </Link>
        </div>
        <div>
          <p className="footer-title">Explore</p>
          <nav className="footer-nav" aria-label="Footer navigation">
            {explore.map((link) => (
              <Link key={link.to} to={link.to}>
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <div>
          <p className="footer-title">Visit</p>
          <address>
            200 E. Grayson Street, Suite 210
            <br />
            San Antonio, TX 78215
          </address>
          <a
            className="footer-map"
            href="https://maps.google.com/?q=200+E+Grayson+Street+Suite+210+San+Antonio+TX+78215"
            target="_blank"
            rel="noreferrer"
          >
            Get directions ↗
          </a>
        </div>
        <div>
          <p className="footer-title">Connect</p>
          <a href="tel:+12107997222">(210) 799-7222</a>
          <a href="mailto:info@gamirconstruction.com">
            info@gamirconstruction.com
          </a>
          <p className="footer-hours">
            Monday–Friday
            <br />
            8:00 AM–5:00 PM
          </p>
        </div>
      </div>
      <div className="shell footer-bottom">
        <span>© 2026 GAMIR CONSTRUCTION, LLC</span>
        <span>San Antonio, Texas</span>
        <Link to="/contact">Inquire about a project ↗</Link>
      </div>
    </footer>
  );
}
