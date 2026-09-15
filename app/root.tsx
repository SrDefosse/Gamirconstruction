import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";
import "./home-balance.css";
import "./mobile-nav.css";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "@id": "https://www.gamirconstruction.com/#business",
  name: "Gamir Construction",
  url: "https://www.gamirconstruction.com/",
  logo: "https://www.gamirconstruction.com/logo.avif",
  image: "https://www.gamirconstruction.com/logo.avif",
  telephone: "+1-210-799-7222",
  email: "info@gamirconstruction.com",
  address: { "@type": "PostalAddress", streetAddress: "200 E. Grayson Street, Suite 210", addressLocality: "San Antonio", addressRegion: "TX", postalCode: "78215", addressCountry: "US" },
  areaServed: { "@type": "City", name: "San Antonio" },
  priceRange: "$$$",
};

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Cabinet+Grotesk:wght@400;500;600;700;800&family=DM+Mono:wght@400;500&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
