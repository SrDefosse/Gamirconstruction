import type { Route } from "./+types/work";
import { WorkPage } from "../features/work/WorkPage";
import { seoMeta } from "../shared/lib/seo";
export function meta({}: Route.MetaArgs) {
  return seoMeta(
    "Custom Home Portfolio in San Antonio | Gamir Construction",
    "View custom homes, remodels, and work in progress from Gamir Construction across San Antonio and the Texas Hill Country communities where people live.",
    "/work",
  );
}
export default WorkPage;
