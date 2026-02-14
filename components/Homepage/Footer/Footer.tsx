"use client";

import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white pt-16 pb-8">
      <div className="w-[90%] mx-auto px-6">

        {/* TOP SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* LEFT COLUMN */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Image
                src="/images/logo.webp"
                alt="FlyEast Nepal"
                width={160}
                height={40}
              />
            </div>

            <p className="text-sm text-slate-400 leading-relaxed mb-6">
              Flyeast Nepal is a premier travel agency dedicated to crafting
              unforgettable journeys in Nepal. Experience the majestic
              Himalayas with our expert guides and personalized adventures.
            </p>

            <div className="space-y-3 text-sm text-slate-300">
              <div className="flex items-center gap-3">
                <MapPin size={16} />
                <span>Thamel, Kathmandu, Nepal</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={16} />
                <span>+977 980-1086542</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={16} />
                <span>info@flyeastnepal.com</span>
              </div>

              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full" />
                <span>Always available</span>
              </div>
            </div>

            {/* SOCIALS */}
            <div className="mt-6">
              <p className="font-semibold mb-3 tracking-widest text-sm text-slate-400">
                FOLLOW US
              </p>
              <div className="flex gap-3">
                {["F", "I", "Y"].map((item, index) => (
                  <div
                    key={index}
                    className="w-10 h-10 bg-slate-800 hover:bg-white hover:text-slate-950 rounded-full flex items-center justify-center transition duration-300 cursor-pointer"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="font-semibold text-sm tracking-widest mb-5 text-slate-400">
              QUICK LINKS
            </h3>
            <ul className="space-y-3 text-sm text-slate-300">
              {[
                "Home",
                "About Us",
                "Blog",
                "Our Team",
                "Useful Info",
                "Quick Booking",
              ].map((item, i) => (
                <li
                  key={i}
                  className="hover:text-white transition duration-300 cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* SERVICES + LEGAL */}
          <div>
            <h3 className="font-semibold text-sm tracking-widest mb-5 text-slate-400">
              SERVICES
            </h3>
            <ul className="space-y-3 text-sm text-slate-300 mb-8">
              <li className="hover:text-white transition cursor-pointer">
                Trekking
              </li>
              <li className="hover:text-white transition cursor-pointer">
                Peak Climbing
              </li>
            </ul>

            <h3 className="font-semibold text-sm tracking-widest mb-5 text-slate-400">
              LEGAL
            </h3>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="hover:text-white transition cursor-pointer">
                Terms & Conditions
              </li>
              <li className="hover:text-white transition cursor-pointer">
                Contact Us
              </li>
            </ul>
          </div>

          {/* PARTNERS + PAYMENTS */}
          <div>
            <h3 className="font-semibold text-sm tracking-widest mb-5 text-slate-400">
              ASSOCIATED WITH
            </h3>

            <div className="grid grid-cols-3 gap-3 mb-8">
              {[1, 2, 3, 4, 5].map((item) => (
                <div
                  key={item}
                  className="bg-slate-800 hover:bg-slate-700 transition p-4 rounded-md"
                />
              ))}
            </div>

            <h3 className="font-semibold text-sm tracking-widest mb-5 text-slate-400">
              SEARCH & RESCUE PARTNER
            </h3>

            <div className="bg-slate-800 hover:bg-slate-700 transition p-5 rounded-md text-center font-semibold mb-8">
              MAGEN
            </div>

            <h3 className="font-semibold text-sm tracking-widest mb-5 text-slate-400">
              WE ACCEPT
            </h3>

            <div className="flex gap-3">
              {["VISA", "Mastercard", "PayPal"].map((item, i) => (
                <div
                  key={i}
                  className="bg-slate-800 hover:bg-slate-700 transition px-4 py-2 rounded-md text-sm"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-slate-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-slate-400">
          <p>© 2026 Flyeast Nepal. All rights reserved.</p>
          <p className="mt-2 md:mt-0">
            Designed & Developed by{" "}
            <span className="text-white font-semibold">webx</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
