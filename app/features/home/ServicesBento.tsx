import { Link } from "react-router";
import { images } from "../../shared/lib/images";
const services = [
  {
    title: "Design Build",
    text: "A team working together from start to finish in collaboration with our clients in order to build exceptional projects.",
    image: images.landscape,
  },
  {
    title: "Custom Homes",
    text: "Building client's dream homes by paying attention to detail in both the design and construction phase to achieve a one of a kind home.",
    image: images.exterior,
  },
  {
    title: "Remodel",
    text: "Whether you’re looking to renovate your kitchen, upgrade your bathroom, or add an addition to your home. We will facilitate the process.",
    image: images.interior,
  },
];
const credentials = [
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
export function ServicesBento() {
  return (
    <section className="section section--warm">
      <div className="shell">
        <div className="section-heading">
          <p className="kicker">How we help</p>
          <h2>One team. A more considered way to build.</h2>
          <p>
            Our work is organized around a single point of accountability, so
            the conversations that shape your home stay connected from early
            plans through construction and completion.
          </p>
        </div>
        <div className="services-grid">
          {services.map((service) => (
            <Link key={service.title} to="/services" className="service-card">
              <img src={service.image} alt="" />
              <div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </div>
            </Link>
          ))}
        </div>
        <section
          className="credentials-row"
          aria-label="Professional memberships and credentials"
        >
          <p className="kicker">Professional memberships</p>
          <div>
            {credentials.map((credential) => (
              <img
                key={credential.src}
                src={credential.src}
                alt={credential.alt}
              />
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
