"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";


export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
  loop: true,
  align: "start",
});
const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    onSelect();
    emblaApi.on("select", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    
    <section id="testimonials" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
       <h2 className="text-center text-5xl font-bold text-gray-900">
  Testimonials from <span className="text-blue-600">Our Partners</span>
</h2>

<p className="text-center text-xl text-gray-600 mt-4 mb-16">
  What <span className="text-blue-600">Our Clients</span> Are Saying
</p>

<div className="overflow-hidden" ref={emblaRef}>
  <div className="flex gap-6">
<div className="min-w-0 flex-[0_0_50%] rounded-2xl border border-gray-200 bg-white p-12 min-h-[280px]">
    <Image
  src="/logos/adp.png"
  alt="adp Logo"
  width={70}
  height={70}
  className="mb-8 object-contain"
/>

    <p className="text-gray-700 text-lg leading-9">
      "We would like to thank Accredian for the wonderful support and the
      beautiful journey. The team turned our vision into reality with
      unparalleled dedication, service, and expertise throughout the entire
      process."
    </p>
  </div>

<div className="min-w-0 flex-[0_0_50%] rounded-2xl border border-gray-200 bg-white p-12 min-h-[280px]">
<Image
  src="/logos/bayer.png"
  alt="Bayer Logo"
  width={70}
  height={70}
  className="mb-8 object-contain"
/>

    <p className="text-gray-700 text-lg leading-9">
      "Accredian's commitment to excellence is unmatched. They consistently go
      the extra mile to ensure our needs are met and exceeded, providing
      reliable support and high-quality service every step of the way."
    </p>
  </div>
<div className="min-w-0 flex-[0_0_50%] rounded-2xl border border-gray-200 bg-white p-12 min-h-[280px]">
  <Image
    src="/logos/reliance.png"
    alt="Reliance Logo"
    width={140}
    height={50}
    className="mb-8 object-contain"
  />

  <p className="text-gray-700 text-lg leading-9">
    "Accredian helped us build a future-ready workforce with customized learning
    programs. Their trainers, content quality, and support exceeded our
    expectations."
  </p>
  </div>
  </div>
</div>
<div className="flex justify-center gap-3 mt-8">
  {[0, 1].map((index) => (
    <button
      key={index}
      onClick={() => emblaApi?.scrollTo(index)}
      className={`w-3 h-3 rounded-full transition-colors ${
        selectedIndex === index ? "bg-blue-600" : "bg-gray-300"
      }`}
    />
  ))}
</div>
      </div>
    </section>
  );
}