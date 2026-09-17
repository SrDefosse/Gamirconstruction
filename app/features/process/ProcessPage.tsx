import { PageShell } from "../../shared/layout/PageShell";
import { Button } from "../../shared/ui/Button";
import { ProcessStory } from "./ProcessStory";
export function ProcessPage() {
  return (
    <PageShell>
      <section className="page-hero shell">
        <p className="kicker">Our process</p>
        <h1>Every detail has a place in the bigger picture.</h1>
        <p>
          We guide you through the decisions, from choosing the right lot to
          opening the front door.
        </p>
      </section>
      <ProcessStory />
      <section className="cta">
        <div className="shell">
          <h2>Bring us your ideas and your questions.</h2>
          <Button to="/contact" variant="light">
            Talk with our team
          </Button>
        </div>
      </section>
    </PageShell>
  );
}
