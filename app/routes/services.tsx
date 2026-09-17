import type { Route } from "./+types/services";
import { ServicesPage } from "../features/services/ServicesPage";
import { seoMeta } from "../shared/lib/seo";
export function meta({}: Route.MetaArgs) {
  return seoMeta(
    "Design Build and Custom Homes | Gamir Construction",
    "Discover Gamir Construction's design-build, custom home, and remodel services for discerning homeowners throughout San Antonio and the Hill Country region.",
    "/services",
  );
}
export default ServicesPage;
