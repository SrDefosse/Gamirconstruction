import type { Route } from "./+types/process";
import { ProcessPage } from "../features/process/ProcessPage";
import { seoMeta } from "../shared/lib/seo";
export function meta({}: Route.MetaArgs) { return seoMeta("Our Custom Home Building Process | Gamir Construction", "Explore Gamir Construction's clear custom home process, from evaluating your lot and shaping the design through construction, completion, and move-in.", "/process"); }
export default ProcessPage;
