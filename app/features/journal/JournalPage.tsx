import { PageShell } from "../../shared/layout/PageShell";
import { images } from "../../shared/lib/images";
const articles = [
  [
    "Understanding Texas Custom Home Costs",
    "A practical guide to the decisions that influence the investment in a custom home.",
    images.exterior,
  ],
  [
    "Choosing the Right Custom Home Builder",
    "What a trusted partnership should bring to your planning process.",
    images.detail,
  ],
  [
    "Building in San Antonio",
    "Key considerations when choosing a site and shaping a home in the Hill Country.",
    images.landscape,
  ],
];
export function JournalPage() {
  return (
    <PageShell>
      <section className="page-hero journal-hero shell">
        <p className="kicker">Journal</p>
        <h1>Notes for building a more informed home.</h1>
        <p>Guidance and perspectives from the Gamir Construction team.</p>
      </section>
      <section className="shell section journal-grid">
        {articles.map(([title, text, image]) => (
          <article key={title}>
            <img src={image} alt="Custom home journal article" />
            <p>Guidance</p>
            <h2>{title}</h2>
            <p>{text}</p>
            <a href="#article">Read article ↗</a>
          </article>
        ))}
      </section>
    </PageShell>
  );
}
