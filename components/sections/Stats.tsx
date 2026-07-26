export default function Stats() {
  const stats = [
    {
      number: "10K+",
      label: "Professionals Trained For Exceptional Career Success",
    },
    {
      number: "200+",
      label: "Sessions Delivered With Unmatched Learning Excellence",
    },
    {
      number: "5K+",
      label: "Active Learners Engaged In Dynamic Courses",
    },
  ];

  return (
    <section id="stats" className="py-16 sm:py-20 bg-white">
      <div className="mx-auto max-w-[1180px] px-5 lg:px-6">
        {/* Section Header */}
        <div className="text-center">
     <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-tight text-slate-900">
            Our <span className="text-[#1B76FF]">Track Record</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg font-medium text-gray-600">
            The Numbers Behind <span className="text-[#1B76FF]">Our Success</span>
          </p>
        </div>

        {/* 3 Metric Pill Columns */}
      <div className="mt-10 mx-auto max-w-5xl">
          <div className="grid grid-cols-1 divide-y divide-gray-200 md:grid-cols-3 md:divide-y-0 md:divide-x">
            {stats.map((item) => (
              <div
                key={item.number}
              className="flex flex-col items-center justify-start px-5 py-6 md:py-3 text-center"
              >
                {/* Pill Badge */}
                <div className="inline-flex items-center justify-center rounded-full bg-[#DCEBFF] px-6 py-2 text-xl sm:text-2xl font-bold text-[#1677FF]">
                  {item.number}
                </div>

                {/* Description Text */}
                <p className="mt-5 max-w-[220px] text-sm sm:text-[15px] font-medium leading-6 text-slate-600">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}