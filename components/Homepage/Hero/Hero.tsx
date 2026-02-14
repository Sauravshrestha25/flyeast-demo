"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { Users, MapPin, CheckCircle2, Clock } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const heroRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "100%",
        scrub: true,
        pin: true,
      },
    });

    tl.fromTo(videoRef.current, { scale: 0.8 }, { scale: 1 });
  }, []);

  const stats = [
    { icon: Users, label: "Travellers", value: "27K+" },
    { icon: MapPin, label: "Destinations", value: "72+" },
    { icon: CheckCircle2, label: "Evacuations", value: "3K+" },
    { icon: Clock, label: "Support", value: "24/7" },
  ];

  return (
    <section ref={heroRef} className="min-h-screen w-full relative overflow-hidden bg-slate-950">
      {/* Background & Logo */}
      <Image
        src="/images/bg.png"
        alt="Hero Background"
        fill
        className="absolute inset-0 object-cover z-10 opacity-40"
      />

      <Image
        src="/images/logo.webp"
        alt="Logo"
        width={140}
        height={140}
        className="absolute top-8 left-1/2 -translate-x-1/2 z-40 object-contain opacity-90"
      />

      {/* Main Video */}
      <video
        ref={videoRef}
        src="/videos/hehe.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-30"
      />

      {/* Morphing Compact Stats Bar */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-40 w-fit">
        <div className="flex items-center justify-center bg-black/30 backdrop-blur-2xl border border-white/10 p-2 rounded-full shadow-2xl ring-1 ring-white/5">
          {stats.map((stat, idx) => {
            const IconComp = stat.icon;
            return (
              <div key={idx} className="flex items-center">
                {/* Individual Stat Item */}
                <div className="flex items-center gap-3 px-6 py-2 group cursor-pointer transition-all duration-300">
                  <div className="text-brand opacity-80 group-hover:opacity-100 transition-opacity">
                    <IconComp size={18} />
                  </div>
                  <div className="flex flex-col leading-none">
                    <span className="text-white text-base font-bold tracking-tight">
                      {stat.value}
                    </span>
                    <span className="text-white/40 text-[10px] uppercase font-medium tracking-tighter mt-0.5">
                      {stat.label}
                    </span>
                  </div>
                </div>

                {/* Vertical Divider - Hidden for last item */}
                {idx !== stats.length - 1 && (
                  <div className="h-6 w-px bg-white/10" />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom Vignette */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-slate-950 to-transparent z-35" />
    </section>
  );
};

export default Hero;