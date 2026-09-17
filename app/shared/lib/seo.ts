const origin = "https://www.gamirconstruction.com";
export function seoMeta(title: string, description: string, path: string) {
  const url = `${origin}${path}`;
  return [
    { title },
    { name: "description", content: description },
    { name: "robots", content: "index, follow" },
    { tagName: "link", rel: "canonical", href: url },
    { property: "og:type", content: "website" },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:url", content: url },
    { property: "og:site_name", content: "Gamir Construction" },
    { name: "twitter:card", content: "summary_large_image" },
  ];
}
