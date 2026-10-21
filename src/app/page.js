"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Slider from "@/components/Slider"
import WhatWeDo from "@/components/Whatwedo";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero/>
        <Slider/>
        <WhatWeDo/>
      </main>
    </>
  );
}