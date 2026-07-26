
import { ArrowRight, Clock, Award } from "lucide-react";

const COURSES = [
  {
    id: "leadership",
    title: "Executive AI & Strategic Leadership",
    subtitle: "For Senior Directors & Executives",
    duration: "12 Weeks",
    certification: "Executive Certificate",
    image: "/images/hero.png", // Reusing hero image asset cleanly
    accent: "bg-blue-600",
  },
  {
    id: "data-ai",
    title: "Applied Generative AI & Data Analytics",
    subtitle: "For Engineering & Data Teams",
    duration: "16 Weeks",
    certification: "Postgraduate Diploma",
    image: "/images/hero.png",
    accent: "bg-indigo-600",
  },
  {
    id: "operations",
    title: "Digital Operations & Cloud Excellence",
    subtitle: "For Product & Operations Managers",
    duration: "10 Weeks",
    certification: "Professional Certificate",
    image: "/images/hero.png",
    accent: "bg-cyan-600",
  },
];

export default function CourseSegmentation() {
  return (
<section id="courses" className="py-16 sm:py-20 bg-white">
<div className="mx-auto max-w-[1180px] px-5 lg:px-6">
        {/* Section Header */}
        <div className="text-center">
<h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-tight text-slate-900">
            Tailored <span className="text-[#1B76FF]">Course Segmentation</span>
          </h2>
<p className="mt-3 text-base text-slate-600">
            Explore <span className="text-[#1B76FF]">Custom-fit Courses</span>{" "}
            Designed to Address Every Professional Focus
          </p>
        </div>

        {/* Course Cards Grid */}
<div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {COURSES.map((course) => (
            <div
              key={course.id}
className="group flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#1677FF]/30 hover:shadow-xl"
            >
              {/* Top Banner Accent */}
              <div className="relative flex h-44 flex-col justify-between overflow-hidden bg-gradient-to-r from-blue-50 to-sky-100 p-6">
                <div className="flex items-center justify-between z-10">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white backdrop-blur-xs text-xs font-semibold text-[#1B76FF] shadow-xs">
                    <Award size={14} />
                    {course.certification}
                  </span>
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-blue-600 text-xs font-semibold text-white">
                    <Clock size={12} />
                    {course.duration}
                  </span>
                </div>
                <div className="z-10 mt-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
                    {course.subtitle}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 leading-snug group-hover:text-[#1B76FF] transition-colors">
                    {course.title}
                  </h3>
                  <p className="mt-3 text-[15px] text-gray-600 leading-relaxed">
                    Designed with industry leaders to equip enterprise teams with high-impact skills and practical experience.
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-[15px] font-semibold text-[#1B76FF]">
                    View Curriculum
                  </span>
                  <div className="h-10 w-10 rounded-full bg-blue-50 flex items-center justify-center text-[#1B76FF] group-hover:bg-[#1B76FF] group-hover:text-white transition-all">
                    <ArrowRight size={18} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
