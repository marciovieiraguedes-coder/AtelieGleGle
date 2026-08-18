/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Differentials } from "./components/Differentials";
import { About } from "./components/About";
import { Gallery } from "./components/Gallery";
import { Testimonials } from "./components/Testimonials";
import { InstagramFeed } from "./components/InstagramFeed";
import { Footer } from "./components/Footer";
import { WhatsAppFloating } from "./components/WhatsAppFloating";
import { SchedulingModal } from "./components/SchedulingModal";

export default function App() {
  const [isSchedulingOpen, setIsSchedulingOpen] = useState(false);

  return (
    <main className="relative">
      <Navbar onOpenScheduling={() => setIsSchedulingOpen(true)} />
      <Hero />
      <Differentials />
      <About />
      <Gallery />
      <Testimonials />
      <InstagramFeed />
      <Footer />
      
      {/* Global Overlays */}
      <WhatsAppFloating />
      <SchedulingModal 
        isOpen={isSchedulingOpen} 
        onClose={() => setIsSchedulingOpen(false)} 
      />
    </main>
  );
}

