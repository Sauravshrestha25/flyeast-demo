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

    tl.fromTo(videoRef.current, { scale: 0.7 }, { scale: 1 });
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
        priority
        className="absolute inset-0 object-cover z-0 opacity-80"
      />

      <Image
        src="/images/logo.webp"
        alt="Logo"
        width={120}
        height={120}
        className="absolute top-8 left-1/2 -translate-x-1/2 z-40 object-contain  sm:width-[140px]"
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
      <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 z-20 w-[90%] md:w-fit">
        <div className="
  grid grid-cols-2 md:flex md:items-center justify-center 
  bg-white/5 backdrop-blur-md border border-white/20 
  p-2 md:p-1.5 rounded-2xl md:rounded-full 
  shadow-2xl ring-1 ring-white/10
">
          {stats.map((stat, idx) => {
            const IconComp = stat.icon;
            return (
              <React.Fragment key={idx}>
                {/* Individual Stat Item */}
                <div className={`
                  flex items-center gap-3 px-4 py-3 md:px-6 md:py-2 
                  group cursor-pointer transition-all duration-300
                  ${idx === 0 ? 'border-b border-r border-white/10 md:border-none' : ''}
                  ${idx === 1 ? 'border-b border-white/10 md:border-none' : ''}
                  ${idx === 2 ? 'border-r border-white/10 md:border-none' : ''}
                `}>
                  <div className="text-brand  transition-opacity">
                    <IconComp size={16} className="md:size-4.5" />
                  </div>
                  <div className="flex flex-col leading-none">
                    <span className="text-white text-sm md:text-base font-bold tracking-tight">
                      {stat.value}
                    </span>
                    <span className="text-white text-[9px] md:text-[10px] uppercase font-medium tracking-tighter mt-1">
                      {stat.label}
                    </span>
                  </div>
                </div>

                {/* Vertical Divider - Desktop Only */}
                {idx !== stats.length - 1 && (
                  <div className="hidden md:block h-6 w-px bg-white/10" />
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* Bottom Vignette */}
    </section>
  );
};

export default Hero;