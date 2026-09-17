import { Link } from "react-router";
import { images } from "../../shared/lib/images";
export function ProcessPreview() {
  return (
    <section className="section shell process-preview">
      <div className="process-intro">
        <p className="kicker">Our process</p>
        <h2>A clear path from first sketch to first night home.</h2>
        <p>
          Building well asks for hundreds of decisions. Our process gives each
          one the right moment, the right expertise, and a clear connection to
          the larger vision.
        </p>
        <Link className="text-link" to="/process">
          See how we work ↗
        </Link>
      </div>
      <div className="process-cards">
        <article>
          <img src={images.detail} alt="Design detail" />
          <h3>Start with what matters</h3>
          <p>
            We begin by listening closely, understanding the land, and defining
            the priorities that will guide every design choice that follows.
          </p>
        </article>
        <article>
          <img src={images.interior} alt="Finished interior" />
          <h3>Stay connected</h3>
          <p>
            Regular communication and a coordinated team bring clarity to
            materials, milestones, and the many details that make a house feel
            complete.
          </p>
        </article>
      </div>
    </section>
  );
}
