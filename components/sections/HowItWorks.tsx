"use client";

import { BarChart3, Monitor, Presentation } from "lucide-react";

const steps = [
  {
    number: "1",
    title: "Skill Gap Analysis",
    description: "Assess team skill gaps and developmental needs.",
    icon: BarChart3,
  },
  {
    number: "2",
    title: "Customized Training Plan",
    description: "Create a tailored roadmap addressing organizational goals.",
    icon: Monitor,
  },
  {
    number: "3",
    title: "Flexible Program Delivery",
    description:
      "Deliver adaptable programs aligned with industry and organizational needs.",
    icon: Presentation,
  },
];

export default function HowItWorks() {
  return (
  <section
  id="how-it-works"
  className="scroll-mt-32 pt-32 pb-24 bg-white"
>
<div className="max-w-7xl mx-auto px-6">
    <div className="text-center mb-16">
<h2 className="text-4xl md:text-[52px] font-bold leading-tight text-gray-900">
    How We <span className="text-blue-600">Deliver Results</span> That Matter?
  </h2>

<p className="mt-3 text-lg text-gray-600">
    A Structured Three-Step Approach to{" "}
    <span className="font-semibold text-blue-600">
      Skill Development
    </span>
  </p>
</div>
<div className="grid lg:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div key={step.number} className="relative">
                {/* {index < 2 && (
<div className="hidden lg:block absolute top-1/2 -right-4 -translate-y-1/2 z-20">
  <div className="w-6 h-2 rounded-full bg-blue-600"></div>
</div>
                )} */}

<div className="relative rounded-2xl border border-blue-200 bg-blue-50 px-8 py-12 text-center shadow-md min-h-[245px] flex flex-col justify-center ">

{/* Left Accent */}
<div className="absolute -left-2 top-6 bottom-6 w-2 rounded-full bg-blue-600" />

{/* Right Accent */}
<div className="absolute -right-2 top-6 bottom-6 w-2 rounded-full bg-blue-600" />
<div className="absolute left-4 top-4 w-10 h-10 rounded-full border-2 border-gray-300 bg-white flex items-center justify-center font-bold text-lg shadow-sm">
                    {step.number}
                  </div>

<div className="mx-auto mb-7 flex h-[72px] w-[72px] items-center justify-center rounded-full bg-blue-600 shadow-lg">
<Icon className="w-8 h-8 text-white" />
                  </div>

<h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>

<p className="text-base text-gray-600 leading-7">
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