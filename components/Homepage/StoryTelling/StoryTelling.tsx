"use client";
import React from "react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, SplitText);

const StoryTelling = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const textRef2 = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const textSplit = SplitText.create([textRef.current, textRef2.current], {
        type: "chars, words",
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "+=100%",
          scrub: true,
        },
      });

      tl.from(textSplit.words, {
        y: 5,
        opacity: 0.05,
        stagger: 0.1,
        ease: "expo.inOut",
      });
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="h-screen flex flex-col items-center justify-center font-primary "
    >
      <h1
        ref={textRef}
        className="text-4xl sm:text-7xl max-w-7xl font-medium text-black px-8 mx-auto text-center  space-y-4"
      >
        The wind grows colder.
        <br />
        The sky grows wider.
        <br />
        The noise of the world disappears.
      </h1>
      <h1
        ref={textRef2}
        className="text-4xl sm:text-7xl max-w-7xl font-medium text-black px-8 mx-auto text-center  space-y-4"
      >
        On foot or in flight,
        <br />
        this is more than travel.
        <br />
        It is perspective.
      </h1>
    </section>
  );
};

export default StoryTelling;
