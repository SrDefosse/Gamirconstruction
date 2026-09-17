import { PageShell } from "../../shared/layout/PageShell";
type ContactIconName = "phone" | "mail" | "pin";
function ContactIcon({ name }: { name: ContactIconName }) {
  const paths = {
    phone: (
      <path d="M7.2 3.8 5 5.2c-.7.5-1 1.4-.7 2.2 1.5 4.3 4.8 7.7 9.2 9.2.8.3 1.7 0 2.2-.7l1.4-2.2-3.3-2.1-1.5 1.5c-2.1-1-3.8-2.7-4.8-4.8L9 6.8 7.2 3.8Z" />
    ),
    mail: (
      <>
        <rect x="3.5" y="5.5" width="17" height="13" rx="1" />
        <path d="m4 6 8 6.4L20 6" />
      </>
    ),
    pin: (
      <>
        <path d="M12 21s6-5.5 6-11a6 6 0 1 0-12 0c0 5.5 6 11 6 11Z" />
        <circle cx="12" cy="10" r="2" />
      </>
    ),
  };
  return (
    <span className="contact-icon" aria-hidden="true">
      <svg viewBox="0 0 24 24">{paths[name]}</svg>
    </span>
  );
}
export function ContactPage() {
  return (
    <PageShell>
      <section className="contact shell">
        <div className="contact-intro">
          <p className="kicker">Start a conversation</p>
          <h1>Tell us what home means to you.</h1>
          <p>We would love to set up a consultation to discuss your project.</p>
          <div className="contact-details">
            <p>
              <ContactIcon name="phone" />
              <strong>Call</strong>
              <a href="tel:+12107997222">(210) 799-7222</a>
            </p>
            <p>
              <ContactIcon name="mail" />
              <strong>Email</strong>
              <a href="mailto:info@gamirconstruction.com">
                info@gamirconstruction.com
              </a>
            </p>
            <p>
              <ContactIcon name="pin" />
              <strong>Visit</strong>
              <span>
                200 E. Grayson Street, Suite 210
                <br />
                San Antonio, TX 78215
              </span>
            </p>
          </div>
        </div>
        <form>
          <label>
            First name
            <input
              name="firstName"
              placeholder="First name"
              autoComplete="given-name"
            />
          </label>
          <label>
            Last name
            <input
              name="lastName"
              placeholder="Last name"
              autoComplete="family-name"
            />
          </label>
          <label>
            Email
            <input
              name="email"
              type="email"
              placeholder="you@company.com"
              autoComplete="email"
            />
          </label>
          <label>
            Tell us about your project
            <textarea
              name="message"
              placeholder="Share a few details about your vision…"
              rows={5}
            />
          </label>
          <button type="submit">
            Send inquiry <span>→</span>
          </button>
          <p className="form-note">Monday to Saturday, by appointment.</p>
        </form>
      </section>
    </PageShell>
  );
}
