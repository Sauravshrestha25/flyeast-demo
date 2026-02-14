"use client";
import ElegantCarousel from '@/components/Homepage/Featured/elegant-carousel'
import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const Featured = () => {



  useGSAP(() => {
    gsap.from("#section", {
      yPercent: 20,
      opacity: 0,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#section",
        start: "top 80%",
        end: "center 20%",
      }
    })
  },[])

  return (
    <section  className='min-h-screen font-primary font-medium text-6xl bg-slate-950'>
       <div id="section">
 <ElegantCarousel/>
       </div>
       
     
    </section>

  )
}

export default Featured
