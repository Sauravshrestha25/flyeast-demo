"use client";
import React from 'react'
import gsap from 'gsap'
import { useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger)

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
      pin:true,
    }
  })

  tl.fromTo(videoRef.current, {

    scale: 0.6,

  }, {
scale: 1
  })

  },[])
 


  return (
    <section ref={heroRef} className='min-h-screen w-full relative '>
      <Image src="/images/herobg.png" alt="Hero Overlay" fill className='absolute top-0 left-0 w-full h-full object-cover z-10' />
      <Image src="/images/logo.webp" alt="Hero Overlay" width={200} height={200} className='absolute top-1/2 left-0 translate-x-1/2 translate-y-2/3 object-cover z-30' />

      <video ref={videoRef} src="/videos/haha.mp4" autoPlay loop muted className='absolute top-0 left-0 w-full h-full object-cover z-20' />
    </section>
  )
}

export default Hero
