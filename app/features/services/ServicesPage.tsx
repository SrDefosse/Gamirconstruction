import { PageShell } from "../../shared/layout/PageShell";
import { images } from "../../shared/lib/images";
import { Button } from "../../shared/ui/Button";

const services = [
  ["Design Build", "One collaborative process for the home in your head and the home on your land. We connect design, estimating, and construction early so choices stay grounded in a shared plan.", images.landscape],
  ["Custom Homes", "A singular residence, carefully designed around your needs, specifications, and site. From spatial planning to finish selections, every decision is made in service of a home that will age well with you.", images.exterior],
  ["Remodels", "More light, more connection, and more usefulness from the home you know. We rethink what is already there with respect for the structure, the neighborhood, and your next chapter.", images.interior],
];

const startingPoints = [
  ["Have land?", "Bring the site, what you know about it, and the kind of life you picture there. We can begin by understanding the opportunity."],
  ["Considering a remodel?", "Start with what is not working, what you want to preserve, and where more space or better flow could change daily life."],
  ["Still exploring?", "An early conversation is a useful place to ask questions, compare paths, and understand what to consider next."],
];

export function ServicesPage() {
  return <PageShell><section className="page-hero shell"><p className="kicker">Services</p><h1>Making space for the way you want to live.</h1><p>From first ideas to the final walk-through, we bring the right people and decisions together, with a process that respects both the creative ambition and the practical demands of building well.</p></section><section className="service-list shell section">{services.map(([title, text, image]) => <article key={title}><img src={image} alt={`${title} by Gamir Construction`} /><div><h2>{title}</h2><p>{text}</p><Button to="/contact">Discuss your project</Button></div></article>)}</section><section className="service-start section--warm"><div className="shell"><img className="service-start__image" src={images.detail} alt="Thoughtful custom home detail" /><div className="service-start__content"><p className="kicker">Start where you are</p><h2>There is a useful next step from here.</h2><p>Every project begins with a different amount of information. Start with what you know, and we will help you make sense of what comes next.</p><div className="service-start__choices">{startingPoints.map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div></div></section><section className="cta"><div className="shell"><p className="kicker">Start a conversation</p><h2>Bring us your ideas and your questions.</h2><Button to="/contact" variant="light">Talk with our team</Button></div></section></PageShell>;
}
