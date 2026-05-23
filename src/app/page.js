"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Slider from "@/components/Slider"

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero/>
        <Slider/>
      </main>
    </>
  );
}