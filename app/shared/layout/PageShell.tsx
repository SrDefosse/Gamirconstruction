import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import { Preloader } from "./Preloader";
export function PageShell({ children }: { children: React.ReactNode }) { return <main className="site"><Preloader /><Navbar />{children}<Footer /></main>; }
