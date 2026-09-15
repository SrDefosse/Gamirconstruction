"use client";

import { useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "../lib/gsap";

export function Preloader() {
  const [visible, setVisible] = useState(true);
  useGSAP(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { setVisible(false); return; }
    const timeline = gsap.timeline({ onComplete: () => setVisible(false) });
    timeline.fromTo(".preloader-logo", { autoAlpha: 0, scale: .9 }, { autoAlpha: 1, scale: 1, duration: .45, ease: "power2.out" }).to(".preloader", { yPercent: -100, duration: .72, ease: "power3.inOut", delay: .28 });
  });
  if (!visible) return null;
  return <div className="preloader" role="status" aria-label="Loading Gamir Construction"><img className="preloader-logo" src="/logo.avif" alt="" /></div>;
}
