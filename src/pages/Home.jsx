import React from 'react'
import GlimpseOfPalestine from "../components/GlimpseOfPalestine";
import HeroSection from "../components/Hero";
import TimelineSummary from "../components/TimelineSummary";

function Home() {
  return (
    <>
      <HeroSection />
      <TimelineSummary />
      <GlimpseOfPalestine />
    </>
  );
}

export default Home