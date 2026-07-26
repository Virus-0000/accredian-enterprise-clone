import Image from "next/image";
import { CheckCircle } from "lucide-react";

interface HeroProps {
  onEnquire?: () => void;
}

const features = [
  "Tailored Solutions",
  "Industry Insights",
  "Expert Guidance",
];

export default function Hero({ onEnquire }: HeroProps) {
  return (
    <section className="pt-3 lg:pt-5">
      <div className="mx-auto max-w-[1180px] px-5 lg:px-6">
        <div className="overflow-hidden rounded-[32px] bg-[#F4F8FF] border border-blue-100">
          <div className="grid items-center gap-10 px-8 py-10 lg:grid-cols-2 lg:px-14 lg:py-12">
            {/* Left */}

            <div>
              <h1 className="max-w-xl text-4xl font-bold leading-tight tracking-tight text-slate-900 md:text-5xl lg:text-[52px]">
                Next-Gen{" "}
                <span className="text-[#1677FF]">
                  Expertise
                </span>
                <br />
                For Your{" "}
                <span className="text-[#1677FF]">
                  Enterprise
                </span>
              </h1>

              <p className="mt-6 max-w-lg text-lg leading-8 text-slate-600">
                Cultivate high-performance teams through
                expert learning experiences designed
                specifically for modern enterprises.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                {features.map((item) => (
                  <div
                    key={item}
className="flex items-center gap-2 rounded-full bg-white px-3 py-1.5 shadow-sm"
                  >
                   <CheckCircle size={16}
                      className="text-green-600"
                    />
                    <span className="text-[13px] font-medium text-slate-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <button
                onClick={onEnquire}
                className="mt-10 rounded-full bg-[#1677FF] px-10 py-4 text-base font-semibold text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0F67E6] hover:shadow-xl"
              >
                Enquire Now
              </button>
            </div>

            {/* Right */}

            <div className="flex justify-center lg:justify-end">
              <Image
                src="/images/hero.png"
                alt="Enterprise Learning"
                width={560}
                height={560}
                priority
className="h-auto w-full max-w-[540px] lg:max-w-[560px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}