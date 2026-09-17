import type { Route } from "./+types/journal";
import { JournalPage } from "../features/journal/JournalPage";
import { seoMeta } from "../shared/lib/seo";
export function meta({}: Route.MetaArgs) {
  return seoMeta(
    "Custom Home Building Journal in Texas | Gamir Construction",
    "Practical insights on custom homes, design, building costs, and choosing the right builder in San Antonio from the experienced Gamir Construction team.",
    "/journal",
  );
}
export default JournalPage;
