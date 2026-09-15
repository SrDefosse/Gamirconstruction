import type { Route } from "./+types/about";
import { AboutPage } from "../features/about/AboutPage";
import { seoMeta } from "../shared/lib/seo";
export function meta({}: Route.MetaArgs) { return seoMeta("About Gamir Construction | San Antonio Home Builder", "Meet Gamir Construction, a family-led San Antonio custom home builder uniting design, planning, and construction in one trusted team for each home today.", "/about"); }
export default AboutPage;
