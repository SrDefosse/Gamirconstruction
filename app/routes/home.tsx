import type { Route } from "./+types/home";
import { HomePage } from "../features/home/HomePage";
import { seoMeta } from "../shared/lib/seo";

export function meta({}: Route.MetaArgs) {
  return seoMeta("Custom Homes in San Antonio, Texas | Gamir Construction", "Gamir Construction is a family-led San Antonio builder for thoughtful design-build, custom homes, and remodels shaped around how you live every day in Texas.", "/");
}

export default HomePage;
