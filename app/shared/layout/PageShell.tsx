import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import { Preloader } from "./Preloader";
import { SmoothScroll } from "./SmoothScroll";
export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <main className="site">
      <SmoothScroll />
      <Preloader />
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}
