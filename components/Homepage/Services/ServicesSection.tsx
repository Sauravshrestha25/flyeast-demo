"use client";
import { ReactLenis } from "lenis/react";
import React, { forwardRef } from "react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger, SplitText);

const ServicesSection = forwardRef<HTMLElement>((props, ref) => {
  const textRef1 = React.useRef<HTMLDivElement>(null);
  const textRef2 = React.useRef<HTMLDivElement>(null);
  const sectionRef = React.useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const textSplit = new SplitText([textRef1.current, textRef2.current], {
      type: "chars, words",
    });

    gsap.from(sectionRef.current, {
      yPercent: 20,
      opacity: 0,
      duration: 1,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "bottom 20%",
      },
    });
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 60%",
        end: "bottom 90%",
        scrub: true,
      },
    });

    tl.fromTo(
      textSplit.chars,
      {
        opacity: 0.02,
        y: 10,
      },
      {
        opacity: 1,
        y: 0,
        stagger: 0.05,
      },
      ">",
    );
  }, []);

  return (
    <ReactLenis root>
      <main className="bg-slate-950" ref={ref}>
        <section ref={sectionRef} className="text-white w-[90%] mx-auto pt-40">
          <div className="grid grid-cols-12 gap-2">
            {/* Left Column */}
            <div className="grid gap-2 col-span-4 ">
              <figure className="relative w-full group">
                <div className="absolute inset-0 bg-black/20 hidden group-hover:block font-primary text-2xl">
                  <div className="absolute inset-0 bg-black hidden group-hover:block -z-10" />
                  <div className="flex flex-col w-full h-full items-center justify-center">
                    <p>Everest Base Camp</p>
                    <button className="text-sm">Learn More</button>
                  </div>
                </div>

                <Image
                  src="/images/trek1.png"
                  alt=""
                  width={200}
                  height={200}
                  className="transition-all duration-300 w-full h-96  align-bottom object-cover rounded-md "
                ></Image>
              </figure>
              <figure className="relative group w-full">
                 <div className="absolute inset-0 bg-black/20 hidden group-hover:block font-primary text-2xl">
                  <div className="absolute inset-0 bg-black hidden group-hover:block -z-10" />
                  <div className="flex flex-col w-full h-full items-center justify-center">
                    <p>Everest Base Camp</p>
                    <button className="text-sm">Learn More</button>
                  </div>
                </div>
                <Image
                  src="/images/trek2.png"
                  alt=""
                  width={200}
                  height={200}
                  className="transition-all duration-300 w-full h-96  align-bottom object-cover rounded-md "
                ></Image>
              </figure>
              <figure className="relative group w-full">
                 <div className="absolute inset-0 bg-black/20 hidden group-hover:block font-primary text-2xl">
                  <div className="absolute inset-0 bg-black hidden group-hover:block -z-10" />
                  <div className="flex flex-col w-full h-full items-center justify-center">
                    <p>Everest Base Camp</p>
                    <button className="text-sm">Learn More</button>
                  </div>
                </div>
                <Image
                  src="/images/helitrek.png"
                  alt=""
                  width={200}
                  height={200}
                  className="transition-all duration-300 w-full h-96  align-bottom object-cover rounded-md "
                />
              </figure>
              <figure className="w-full relative group">
                 <div className="absolute inset-0 bg-black/20 hidden group-hover:block font-primary text-2xl">
                  <div className="absolute inset-0 bg-black hidden group-hover:block -z-10" />
                  <div className="flex flex-col w-full h-full items-center justify-center">
                    <p>Everest Base Camp</p>
                    <button className="text-sm">Learn More</button>
                  </div>
                </div>
                <Image
                  src="/images/helitrek2.png"
                  alt=""
                  width={200}
                  height={200}
                  className="transition-all duration-300 w-full h-96  align-bottom object-cover rounded-md "
                />
              </figure>
            </div>
            {/* Center Column */}
            <div className="sticky top-0 h-screen w-full col-span-4 flex flex-col justify-center items-center gap-20">
              <div
                ref={textRef1}
                className="font-primary text-white text-4xl font-medium leading-[1.2em] text-center"
              >
                <h3 className="text-brand text-6xl py-6 font-primary text-center font-semibold">
                  Touch the Peaks
                </h3>
                Walk paths carved by centuries. <br /> Stand where legends
                stood. <br /> Earn every breathtaking view.
              </div>
              <div
                ref={textRef2}
                className="font-primary text-white text-4xl font-medium leading-[1.2em] text-center"
              >
                or
                <br />
                <br /> Rise above glaciers.
                <br />
                Witness Everest at sunrise.
                <br />
                Reach in minutes what takes days.
              </div>
            </div>
            {/* Right Column */}
            <div className="grid gap-2 col-span-4">
              <figure className="w-full relative group">
                 <div className="absolute inset-0 bg-black/20 hidden group-hover:block font-primary text-2xl">
                  <div className="absolute inset-0 bg-black hidden group-hover:block -z-10" />
                  <div className="flex flex-col w-full h-full items-center justify-center">
                    <p>Everest Base Camp</p>
                    <button className="text-sm">Learn More</button>
                  </div>
                </div>
                <Image
                  src="/images/trek2.png"
                  alt=""
                  width={200}
                  height={200}
                  className="transition-all duration-300 w-full h-96  align-bottom object-cover rounded-md "
                />
              </figure>
              <figure className="w-full relative group">
                 <div className="absolute inset-0 bg-black/20 hidden group-hover:block font-primary text-2xl">
                  <div className="absolute inset-0 bg-black hidden group-hover:block -z-10" />
                  <div className="flex flex-col w-full h-full items-center justify-center">
                    <p>Everest Base Camp</p>
                    <button className="text-sm">Learn More</button>
                  </div>
                </div>
                <Image
                  width={200}
                  height={200}
                  src="/images/trek1.png"
                  alt=""
                  className="transition-all duration-300 w-full h-96  align-bottom object-cover rounded-md "
                />
              </figure>
              <figure className="w-full relative group">
                 <div className="absolute inset-0 bg-black/20 hidden group-hover:block font-primary text-2xl">
                  <div className="absolute inset-0 bg-black hidden group-hover:block -z-10" />
                  <div className="flex flex-col w-full h-full items-center justify-center">
                    <p>Everest Base Camp</p>
                    <button className="text-sm">Learn More</button>
                  </div>
                </div>
                <Image
                  width={200}
                  height={200}
                  src="/images/helitrek2.png"
                  alt=""
                  className="transition-all duration-300 w-full h-96  align-bottom object-cover rounded-md "
                />
              </figure>
              <figure className="w-full relative group">
                 <div className="absolute inset-0 bg-black/20 hidden group-hover:block font-primary text-2xl">
                  <div className="absolute inset-0 bg-black hidden group-hover:block -z-10" />
                  <div className="flex flex-col w-full h-full items-center justify-center">
                    <p>Everest Base Camp</p>
                    <button className="text-sm">Learn More</button>
                  </div>
                </div>
                <Image
                  width={200}
                  height={200}
                  src="/images/helitrek.png"
                  alt=""
                  className="transition-all duration-300 w-full h-96  align-bottom object-cover rounded-md "
                />
              </figure>
            </div>
          </div>
        </section>

        <div className=" bg-slate-950 ">
          <h1 className="text-[4vw]  translate-y-20 leading-[100%] uppercase font-primary font-semibold text-center bg-linear-to-r  text-white bg-clip-text transition-all ease-linear">
            We got you covered
          </h1>
        </div>
      </main>
    </ReactLenis>
  );
});

ServicesSection.displayName = "ServicesSection";

export default ServicesSection;
