import {
  Lightbulb,
  Brain,
  Users,
  BarChart3,
  Settings,
  Globe,
  Banknote,
} from "lucide-react";

const DOMAINS = [
  {
    id: "product",
    title: "Product & Innovation Hub",
    icon: Lightbulb,
  },
  {
    id: "genai",
    title: "Gen-AI Mastery",
    icon: Brain,
  },
  {
    id: "leadership",
    title: "Leadership Elevation",
    icon: Users,
  },
  {
    id: "tech-data",
    title: "Tech & Data Insights",
    icon: BarChart3,
  },
  {
    id: "operations",
    title: "Operations Excellence",
    icon: Settings,
  },
  {
    id: "digital",
    title: "Digital Enterprise",
    icon: Globe,
  },
  {
    id: "fintech",
    title: "Fintech Innovation Lab",
    icon: Banknote,
  },
];

export default function DomainExpertise() {
  const topRows = DOMAINS.slice(0, 6);
  const centeredItem = DOMAINS[6];

  return (
<section id="cat" className="py-16 sm:py-20 bg-[#F8FBFF]">
<div className="mx-auto max-w-[1180px] px-5 lg:px-6">
        {/* Section Header */}
        <div className="text-center">
<h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-tight text-slate-900">
            Our <span className="text-[#1B76FF]">Domain Expertise</span>
          </h2>
<p className="mt-3 text-base text-slate-600">
            <span className="text-[#1B76FF]">Specialized Programs</span>{" "}
            Designed to Fuel Innovation
          </p>
        </div>

        {/* 7 Card Grid */}
<div className="mt-14 max-w-6xl mx-auto">
          {/* Top 6 items (3 columns x 2 rows) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {topRows.map((domain) => {
              const Icon = domain.icon;
              return (
                <div
                  key={domain.id}
                 className="group flex flex-col items-center justify-center rounded-3xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#1677FF]/30 hover:shadow-xl"
                >
                  <Icon className="h-11 w-11 text-[#1677FF] transition-transform duration-300 group-hover:scale-110" />
                  <h3 className="mt-5 text-lg font-bold text-gray-900 text-center">
                    {domain.title}
                  </h3>
                </div>
              );
            })}
          </div>

          {/* 7th Centered Item */}
          <div className="mt-6 sm:mt-8 flex justify-center">
            <div className="w-full md:w-[31.5%] p-8 sm:p-10 rounded-2xl bg-white border border-gray-100/80 shadow-md shadow-blue-950/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10 cursor-pointer group flex flex-col items-center justify-center">
              <centeredItem.icon className="h-12 w-12 text-[#1B76FF] stroke-[1.75] transition-transform duration-300 group-hover:scale-110" />
              <h3 className="mt-5 text-lg font-semibold text-slate-900 text-center leading-7">
                {centeredItem.title}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
