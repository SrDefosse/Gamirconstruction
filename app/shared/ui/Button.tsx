import { Link } from "react-router";
export function Button({ to, children, variant = "dark" }: { to: string; children: React.ReactNode; variant?: "dark" | "light" }) { return <Link to={to} className={`button button--${variant}`}>{children}<span aria-hidden="true">↗</span></Link>; }
