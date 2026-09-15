import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("process", "routes/process.tsx"),
  route("work", "routes/work.tsx"),
  route("about", "routes/about.tsx"),
  route("services", "routes/services.tsx"),
  route("journal", "routes/journal.tsx"),
  route("contact", "routes/contact.tsx"),
] satisfies RouteConfig;
