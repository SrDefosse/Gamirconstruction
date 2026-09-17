import { PageShell } from "../../shared/layout/PageShell";
import { PortfolioGrid } from "./PortfolioGrid";
export function WorkPage() {
  return (
    <PageShell>
      <section className="page-hero shell">
        <p className="kicker">Our work</p>
        <h1>
          Homes that belong to their landscape and the people inside them.
        </h1>
        <p>
          A growing portfolio of custom residences, remodels, and works in
          progress across San Antonio and the Hill Country.
        </p>
      </section>
      <section className="shell section">
        <PortfolioGrid />
      </section>
    </PageShell>
  );
}
