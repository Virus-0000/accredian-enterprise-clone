"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import Clients from "@/components/sections/Clients";
import Edge from "@/components/sections/Edge";
import DomainExpertise from "@/components/sections/DomainExpertise";
import CourseSegmentation from "@/components/sections/CourseSegmentation";
import Footer from "@/components/layout/Footer";
import EnquireModal from "@/components/ui/EnquireModal";
import StrategicSkill from "@/components/sections/StrategicSkill";
import HowItWorks from "@/components/sections/HowItWorks";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-1">
       <Hero onEnquire={handleOpenModal} />
<Stats />
<Clients />
<Edge />
<DomainExpertise />
<CourseSegmentation />
<StrategicSkill />
<HowItWorks />
<FAQ onEnquire={handleOpenModal} />
<Testimonials />
<CTA onEnquire={handleOpenModal} />
      </main>

      <Footer onEnquire={handleOpenModal} />

      {/* Interactive Lead Generation Modal */}
      <EnquireModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
}