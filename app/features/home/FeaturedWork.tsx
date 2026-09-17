import { Link } from "react-router";
import { images } from "../../shared/lib/images";
const projects = [
  { name: "Hausman Residence", image: images.exterior, alt: "Hausman Residence exterior", className: "project--large" },
  { name: "Taylor Ridge", image: images.interior, alt: "Taylor Ridge interior", className: "" },
  { name: "Abrego Lake", image: images.detail, alt: "Abrego Lake dining room", className: "project--panoramic" },
];
export function FeaturedWork() { return <section className="featured-work section shell" aria-label="Selected homes"><div className="section-heading"><p className="kicker">Selected homes</p><h2>Architecture made personal.</h2><p>From the way a room holds morning light to the relationship between a home and its site, each residence begins with how its owners want to live, gather, and grow over time.</p></div><div className="project-grid">{projects.map((project) => <Link key={project.name} to="/work" className={`project ${project.className}`}><img src={project.image} alt={project.alt} /><span className="project-meta"><b>{project.name}</b><i aria-hidden="true" /></span></Link>)}</div></section>; }
