"use client";

import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export function CtaSection() {
  const topRowRef = useRef<HTMLDivElement | null>(null);
  const bottomRowRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    const top = topRowRef.current;
    const bottom = bottomRowRef.current;

    if (!top || !bottom) return;

    const topWidth = top.scrollWidth / 2;
    const bottomWidth = bottom.scrollWidth / 2;

    const tl = gsap.timeline({ repeat: -1, defaults: { ease: "none" } });

    // Top row → LEFT
    tl.to(top, {
      x: -topWidth,
      duration: 30,
    }, 0);

    // Bottom row → RIGHT
    tl.fromTo(
      bottom,
      { x: -bottomWidth },
      {
        x: 0,
        duration: 30,
      },
      0
    );

    return () => tl.kill();
  }, []);

  const rowOneImages = [
    "/images/trek1.png",
    "/images/helitrek.png",
    "/images/trek1.png",
    "/images/helitrek.png",
    "/images/trek1.png",
    "/images/helitrek.png",
  ];

  const rowTwoImages = [
    "/images/helitrek.png",
    "/images/trek1.png",
    "/images/helitrek.png",
    "/images/trek1.png",
    "/images/helitrek.png",
    "/images/trek1.png",
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center overflow-hidden font-primary">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT CONTENT */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-brand">
              The Himalayas are waiting
            </h1>

            <div className="space-y-1">
              <p className="text-2xl">You’ve seen the journey.</p>
              <p className="text-2xl">Now it’s time to live it.</p>
            </div>

            <button className="text-lg font-secondary bg-brand px-6 py-3 rounded-full hover:scale-105 transition-all duration-300">
              Plan My Journey
            </button>
          </div>

          {/* RIGHT CAROUSEL */}
          <div className="overflow-hidden relative space-y-4">
            
            {/* Edge fade */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-linear-to-r from-slate-950 to-transparent z-10" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-linear-to-l from-slate-950 to-transparent z-10" />

            {/* TOP ROW */}
            <div className="overflow-hidden">
              <div ref={topRowRef} className="flex w-max gap-4">
                {[...rowOneImages, ...rowOneImages].map((src, i) => (
                  <div
                    key={i}
                    className="relative w-48 h-48 shrink-0 rounded-2xl overflow-hidden"
                  >
                    <Image
                      src={src}
                      alt={`top-${i}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* BOTTOM ROW */}
            <div className="overflow-hidden">
              <div ref={bottomRowRef} className="flex w-max gap-4">
                {[...rowTwoImages, ...rowTwoImages].map((src, i) => (
                  <div
                    key={i}
                    className="relative w-48 h-48 shrink-0 rounded-2xl overflow-hidden"
                  >
                    <Image
                      src={src}
                      alt={`bottom-${i}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
