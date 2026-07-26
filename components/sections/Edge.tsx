import {
  Lightbulb,
  UserCheck,
  RotateCw,
  Cpu,
  Maximize2,
  Target,
  Package,
  ChevronsRight,
} from "lucide-react";

const STEPS = [
  {
    id: 1,
    position: "top",
    title: "Tailored Solutions",
    description: "Programs customized to your organization's goals and challenges.",
    icon: Lightbulb,
    active: true,
  },
  {
    id: 2,
    position: "bottom",
    title: "Expert Guidance",
    description: "Learn from industry leaders with real-world success.",
    icon: UserCheck,
    active: false,
  },
  {
    id: 3,
    position: "top",
    title: "Innovative Framework",
    description: "Proprietary methods for impactful, application-driven results.",
    icon: RotateCw,
    active: false,
  },
  {
    id: 4,
    position: "bottom",
    title: "Advanced Technology",
    description: "State-of-the-art LMS for seamless learning experiences.",
    icon: Cpu,
    active: false,
  },
  {
    id: 5,
    position: "top",
    title: "Diverse Offerings",
    description: "Courses across industries, skill levels, and emerging fields.",
    icon: Maximize2,
    active: false,
  },
  {
    id: 6,
    position: "bottom",
    title: "Proven Impact",
    description: "Trusted by leading organizations for measurable ROI.",
    icon: Target,
    active: false,
  },
  {
    id: 7,
    position: "top",
    title: "Flexible Delivery",
    description: "Online and offline options tailored to your needs.",
    icon: Package,
    active: false,
  },
];

export default function Edge() {
  return (
    <section id="edge" className="py-20 sm:py-28 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold tracking-tight text-gray-900">
            The <span className="text-[#1B76FF]">Accredian Edge</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg font-medium text-gray-600">
            Key Aspects of <span className="text-[#1B76FF]">Our Strategic Training</span>
          </p>
        </div>

        {/* Desktop Horizontal Connected Flow (Hidden on mobile) */}
        <div className="hidden lg:block mt-24 relative px-2">
          {/* Dashed Connecting Line behind nodes */}
          <div className="absolute top-1/2 left-10 right-10 -translate-y-1/2 border-b-2 border-dashed border-gray-300 z-0" />

          <div className="grid grid-cols-7 relative z-10 gap-0">
            {STEPS.map((step, idx) => {
              const Icon = step.icon;
              const isTop = step.position === "top";

              return (
                <div
                  key={step.id}
                  className="flex flex-col items-center relative group"
                >
                  {/* TOP CALLOUT CONTAINER */}
                  <div className="h-44 flex flex-col justify-end items-center text-left mb-3">
                    {isTop ? (
                      <div className="w-[170px] flex flex-col items-start">
                        <div className="flex items-center gap-1.5">
                          <span className="h-2 w-2 rounded-full bg-[#1B76FF] shrink-0" />
                          <h3 className="text-base font-bold text-gray-900 leading-snug">
                            {step.title}
                          </h3>
                        </div>
                        <p className="mt-1.5 text-xs text-gray-600 leading-relaxed font-normal">
                          {step.description}
                        </p>
                        {/* Vertical Stem pointing down */}
                        <div className="w-[1.5px] h-8 bg-[#1B76FF] mt-2 ml-1" />
                      </div>
                    ) : (
                      <div className="h-full" />
                    )}
                  </div>

                  {/* CENTER NODE CIRCLE & CHEVRONS */}
                  <div className="flex items-center w-full justify-center relative">
                    <div
                      className={`relative flex items-center justify-center h-20 w-20 rounded-full transition-all duration-300 shadow-md ${
                        step.active
                          ? "bg-[#38BDF8] text-white ring-4 ring-[#00529B] border-4 border-white"
                          : "bg-[#1E40AF] text-white hover:bg-[#1B76FF] hover:scale-105"
                      }`}
                    >
                      <Icon className="h-9 w-9 stroke-[1.75]" />
                    </div>

                    {/* Right Chevron Flow Arrow (except last node) */}
                    {idx < STEPS.length - 1 && (
                      <div className="absolute -right-2 top-1/2 -translate-y-1/2 text-gray-400 z-20 pointer-events-none">
                        <ChevronsRight size={18} className="text-gray-400" />
                      </div>
                    )}
                  </div>

                  {/* BOTTOM CALLOUT CONTAINER */}
                  <div className="h-44 flex flex-col justify-start items-center text-left mt-3">
                    {!isTop ? (
                      <div className="w-[170px] flex flex-col items-start">
                        {/* Vertical Stem pointing up */}
                        <div className="w-[1.5px] h-8 bg-[#1B76FF] mb-2 ml-1" />
                        <div className="flex items-center gap-1.5">
                          <span className="h-2 w-2 rounded-full bg-[#1B76FF] shrink-0" />
                          <h3 className="text-base font-bold text-gray-900 leading-snug">
                            {step.title}
                          </h3>
                        </div>
                        <p className="mt-1.5 text-xs text-gray-600 leading-relaxed font-normal">
                          {step.description}
                        </p>
                      </div>
                    ) : (
                      <div className="h-full" />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile & Tablet Vertical Flow List */}
        <div className="lg:hidden mt-14 space-y-5 max-w-md mx-auto">
          {STEPS.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.id}
                className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-gray-100 shadow-sm"
              >
                <div
                  className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${
                    step.active
                      ? "bg-[#38BDF8] text-white"
                      : "bg-[#1E40AF] text-white"
                  }`}
                >
                  <Icon className="h-7 w-7" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-sm text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}