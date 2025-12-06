"use client"

import { useState, useEffect } from "react"
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Exhibits } from "@/components/sections/Exhibits";
import { Gallery } from "@/components/sections/Gallery";
import { Contact } from "@/components/sections/Contact";
import { HowToReach } from "@/components/sections/HowToReach";
import { Testimonials } from "@/components/sections/Testimonials";
import { News } from "@/components/sections/News";
import { InstagramFeed } from "@/components/sections/InstagramFeed";
import { LoadingScreen } from "@/components/ui/LoadingScreen";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      <Hero isLoading={isLoading} />
      <div id="about" className="w-full"><About /></div>
      <div id="exhibits" className="w-full"><Exhibits /></div>
      <div id="gallery" className="w-full"><Gallery /></div>
      <div id="testimonials" className="w-full"><Testimonials /></div>
      <div id="news" className="w-full"><News /></div>
      <div id="feed" className="w-full"><InstagramFeed /></div>
      <div id="how-to-reach" className="w-full"><HowToReach /></div>
      <div id="contact" className="w-full"><Contact /></div>
    </main>
  );
}
