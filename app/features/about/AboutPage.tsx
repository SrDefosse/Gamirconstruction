import { PageShell } from "../../shared/layout/PageShell";
import { images } from "../../shared/lib/images";
import { Button } from "../../shared/ui/Button";
const principles = [
  [
    "01",
    "A shared plan",
    "We bring design, planning, and construction into the same conversation, so the decisions behind your home remain connected.",
  ],
  [
    "02",
    "Care in the details",
    "Materials, proportions, and everyday use all deserve the same attention as the larger architectural idea.",
  ],
  [
    "03",
    "A steady partnership",
    "Clear communication helps make a complex process feel more understandable from the first conversation through the handoff.",
  ],
];
const memberships = [
  {
    src: "/logos/Texas-Association-of-Builders-logo.png",
    alt: "Texas Association of Builders",
  },
  { src: "/logos/nahb-logo.png", alt: "National Association of Home Builders" },
  {
    src: "/logos/International-Code-Council-ICC-Membership-logo.webp",
    alt: "International Code Council membership",
  },
  {
    src: "/logos/ICC-Residential-Building-Inspector-logo.png",
    alt: "ICC Residential Building Inspector",
  },
  {
    src: "/logos/GSABA-logo.png",
    alt: "Greater San Antonio Builders Association",
  },
];
export function AboutPage() {
  return (
    <PageShell>
      <div className="about-page">
        <section className="page-hero shell">
          <p className="kicker">A family-led practice</p>
          <h1>
            Built on close attention, honest partnership, and lasting work.
          </h1>
          <p>
            Gamir Construction is a San Antonio custom home builder bringing
            design, visual planning, and construction under one roof, so each
            project has a consistent team from first conversation through final
            handoff.
          </p>
        </section>
        <section className="section shell story">
          <img src={images.living} alt="Gamir custom home interior" />
          <div>
            <p className="kicker">Our approach</p>
            <h2>Practical thinking meets inspired design.</h2>
            <p>
              We believe a home should feel as clear in the details as it does
              in the big picture. That means a relationship built on
              communication, curiosity, and follow-through.
            </p>
            <p>
              Our team brings the perspective to navigate complex choices
              without losing sight of the feeling you want your home to have
              when it is finished.
            </p>
          </div>
        </section>
        <section className="about-principles section">
          <div className="shell">
            <div className="about-principles__intro">
              <p className="kicker">What guides us</p>
              <h2>Every decision should hold together.</h2>
            </div>
            <div className="about-principles__list">
              {principles.map(([number, title, text]) => (
                <article key={number}>
                  <span>{number}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="about-memberships section--warm">
          <div className="shell">
            <div className="about-memberships__intro">
              <p className="kicker">Professional membership</p>
              <h2>Connected to the craft.</h2>
              <p>
                We stay engaged with the organizations that support thoughtful
                building, sound practice, and the wider construction community.
              </p>
            </div>
            <div className="about-memberships__logos">
              {memberships.map((membership) => (
                <div key={membership.src}>
                  <img src={membership.src} alt={membership.alt} />
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="cta">
          <div className="shell">
            <h2>We would be glad to hear what you are imagining.</h2>
            <p>
              Tell us where you are in the process, and we will help you find
              the most useful next step.
            </p>
            <Button to="/contact" variant="light">
              Meet the team
            </Button>
          </div>
        </section>
      </div>
    </PageShell>
  );
}
