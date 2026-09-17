"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { gsap, ScrollTrigger } from "../lib/gsap";

export function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: false,
      anchors: true,
      lerp: 0.085,
      smoothWheel: true,
      syncTouch: false,
      stopInertiaOnNavigate: true,
      respectReducedMotion: true,
    });

    const syncScrollTrigger = () => ScrollTrigger.update();
    const tick = (time: number) => lenis.raf(time * 1000);

    lenis.on("scroll", syncScrollTrigger);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(tick);
      lenis.destroy();
    };
  }, []);

  return null;
}
