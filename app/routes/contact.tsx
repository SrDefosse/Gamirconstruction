import type { Route } from "./+types/contact";
import { ContactPage } from "../features/contact/ContactPage";
import { seoMeta } from "../shared/lib/seo";
export function meta({}: Route.MetaArgs) {
  return seoMeta(
    "Contact Gamir Construction | San Antonio Home Builder",
    "Start a conversation with Gamir Construction about your custom home, remodel, or design-build project in San Antonio, Texas and nearby Hill Country communities.",
    "/contact",
  );
}
export default ContactPage;
