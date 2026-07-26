import Image from "next/image";
import { MonitorCheck, MonitorX, GraduationCap, Briefcase } from "lucide-react";

const TARGETS = [
  {
    id: "tech",
    icon: MonitorCheck,
    title: "Tech Professionals",
    description: "Enhance expertise, embrace tech, drive innovation.",
  },
  {
    id: "non-tech",
    icon: MonitorX,
    title: "Non-Tech Professionals",
    description: "Adapt digitally, collaborate in tech environments.",
  },
  {
    id: "emerging",
    icon: GraduationCap,
    title: "Emerging Professionals",
    description: "Develop powerful skills for rapid career growth.",
  },
  {
    id: "senior",
    icon: Briefcase,
    title: "Senior Professionals",
    description: "Strengthen leadership, enhance strategic decisions.",
  },
];

export default function StrategicSkill() {
  return (
<section className="py-16 sm:py-20 bg-white">
<div className="mx-auto max-w-[1180px] px-5 lg:px-6">
        <div className="bg-[#1677FF] rounded-[32px] overflow-hidden text-white shadow-2xl relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 lg:p-12">
            {/* Left Header & Character Image */}
            <div className="lg:col-span-5 flex flex-col justify-between h-full relative z-10">
              <div>
                <span className="text-sm font-semibold tracking-wider uppercase text-blue-100">
                  Who Should Join?
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-white mt-2 leading-tight">
                  Strategic Skill Enhancement
                </h2>
              </div>

              {/* Character Image */}
              <div className="mt-8 lg:mt-12 flex justify-start">
                <Image
                  src="/images/hero.png"
                  alt="Enterprise Professional"
                  width={400}
                  height={400}
                  className="h-auto w-full max-w-sm object-contain filter brightness-105"
                />
              </div>
            </div>

            {/* Right 4 Category Grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 relative z-10">
              {TARGETS.map((target) => {
                const Icon = target.icon;
                return (
                  <div
                    key={target.id}
                    className="flex flex-col p-6 sm:p-8 rounded-3xl bg-white/10 backdrop-blur-md border border-white/15 hover:bg-white/15 hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="h-14 w-14 rounded-xl bg-white/20 flex items-center justify-center text-white mb-5">
                      <Icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">
                      {target.title}
                    </h3>
                    <p className="mt-2 text-[15px] text-blue-50 leading-relaxed font-normal">
                      {target.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
