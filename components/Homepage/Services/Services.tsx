"use client";
import React, { useState, useEffect } from "react";
import ServicesSection from "@/components/Homepage/Services/ServicesSection";
import ServicesSectionMobile from "./ServicesSectionCopy";

const Services = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // check window width on mount
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="min-h-screen">
      {isMobile ? <ServicesSectionMobile /> : <ServicesSection />}
    </div>
  );
};

export default Services;
