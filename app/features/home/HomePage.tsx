import { PageShell } from "../../shared/layout/PageShell";
import { HomeHero } from "./HomeHero";
import { FeaturedWork } from "./FeaturedWork";
import { ServicesBento } from "./ServicesBento";
import { ProcessPreview } from "./ProcessPreview";
import { HomeCta } from "./HomeCta";
export function HomePage() {
  return (
    <PageShell>
      <HomeHero />
      <FeaturedWork />
      <ServicesBento />
      <ProcessPreview />
      <HomeCta />
    </PageShell>
  );
}
