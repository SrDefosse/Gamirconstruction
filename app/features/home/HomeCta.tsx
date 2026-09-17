import { Button } from "../../shared/ui/Button";
export function HomeCta() {
  return (
    <section className="cta">
      <div className="shell">
        <p className="kicker">Your next chapter</p>
        <h2>Let’s make a home that feels inevitable.</h2>
        <p>
          Whether you are evaluating land, refining an early idea, or ready to
          begin, our team can help you understand the path ahead.
        </p>
        <Button to="/contact" variant="light">
          Schedule a consultation
        </Button>
      </div>
    </section>
  );
}
