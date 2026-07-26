export default function Clients() {
  return (
    <section id="clients" className="py-16 sm:py-24 bg-white">
   <div className="mx-auto max-w-[1180px] px-5 lg:px-6">
        {/* Section Header */}
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold tracking-tight text-gray-900">
            Our Proven <span className="text-[#1B76FF]">Partnerships</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg font-medium text-gray-600">
            Successful Collaborations With the{" "}
            <span className="text-[#1B76FF]">Industry's Best</span>
          </p>
        </div>

        {/* Partner Logos Horizontal Row */}
        <div className="mt-14 sm:mt-18 flex flex-wrap items-center justify-center gap-10 sm:gap-12 md:gap-16 lg:gap-20">
          {/* Reliance Industries Limited */}
          <div className="flex flex-col items-center justify-center h-16 w-36 sm:w-44 transition-opacity hover:opacity-90">
            <svg viewBox="0 0 160 55" className="h-full w-auto max-h-14">
              <path
                d="M80 5 C75 14, 70 20, 60 22 C70 24, 75 30, 80 39 C85 30, 90 24, 100 22 C90 20, 85 14, 80 5 Z"
                fill="#C59B27"
              />
              <circle cx="80" cy="22" r="4" fill="#8B6914" />
              <text
                x="80"
                y="46"
                textAnchor="middle"
                fontSize="13"
                fontWeight="bold"
                fontFamily="Georgia, serif"
                fill="#333333"
              >
                Reliance
              </text>
              <text
                x="80"
                y="54"
                textAnchor="middle"
                fontSize="6.5"
                fontFamily="Georgia, serif"
                fill="#666666"
              >
                Industries Limited
              </text>
            </svg>
          </div>

          {/* HCL */}
          <div className="flex items-center justify-center h-16 w-28 sm:w-36 transition-opacity hover:opacity-90">
            <svg viewBox="0 0 120 40" className="h-full w-auto max-h-10">
              <text
                x="60"
                y="32"
                textAnchor="middle"
                fontSize="36"
                fontWeight="900"
                fontStyle="italic"
                fontFamily="Arial, sans-serif"
                fill="#0056B3"
                letterSpacing="-1"
              >
                HCL
              </text>
            </svg>
          </div>

          {/* IBM */}
          <div className="flex items-center justify-center h-16 w-28 sm:w-36 transition-opacity hover:opacity-90">
            <svg viewBox="0 0 140 50" className="h-full w-auto max-h-10">
              <g fill="#052FAD">
                {/* I */}
                <rect x="10" y="5" width="20" height="4" />
                <rect x="10" y="11" width="20" height="4" />
                <rect x="18" y="17" width="4" height="4" />
                <rect x="18" y="23" width="4" height="4" />
                <rect x="18" y="29" width="4" height="4" />
                <rect x="18" y="35" width="4" height="4" />
                <rect x="10" y="41" width="20" height="4" />

                {/* B */}
                <rect x="40" y="5" width="22" height="4" />
                <rect x="40" y="11" width="24" height="4" />
                <rect x="40" y="17" width="8" height="4" />
                <rect x="54" y="17" width="10" height="4" />
                <rect x="40" y="23" width="22" height="4" />
                <rect x="40" y="29" width="8" height="4" />
                <rect x="54" y="29" width="10" height="4" />
                <rect x="40" y="35" width="24" height="4" />
                <rect x="40" y="41" width="22" height="4" />

                {/* M */}
                <rect x="74" y="5" width="6" height="4" />
                <rect x="94" y="5" width="6" height="4" />
                <rect x="114" y="5" width="6" height="4" />
                <rect x="74" y="11" width="8" height="4" />
                <rect x="93" y="11" width="8" height="4" />
                <rect x="112" y="11" width="8" height="4" />
                <rect x="74" y="17" width="6" height="4" />
                <rect x="92" y="17" width="10" height="4" />
                <rect x="114" y="17" width="6" height="4" />
                <rect x="74" y="23" width="6" height="4" />
                <rect x="91" y="23" width="12" height="4" />
                <rect x="114" y="23" width="6" height="4" />
                <rect x="74" y="29" width="6" height="4" />
                <rect x="94" y="29" width="6" height="4" />
                <rect x="114" y="29" width="6" height="4" />
                <rect x="74" y="35" width="6" height="4" />
                <rect x="94" y="35" width="6" height="4" />
                <rect x="114" y="35" width="6" height="4" />
                <rect x="74" y="41" width="6" height="4" />
                <rect x="94" y="41" width="6" height="4" />
                <rect x="114" y="41" width="6" height="4" />
              </g>
            </svg>
          </div>

          {/* CRIF */}
          <div className="flex items-center justify-center h-16 w-32 sm:w-40 transition-opacity hover:opacity-90">
            <svg viewBox="0 0 140 45" className="h-full w-auto max-h-12">
              <path
                d="M10 25 C15 15, 30 10, 45 14 C35 18, 25 24, 20 32 Z"
                fill="#F26522"
              />
              <text
                x="45"
                y="28"
                fontSize="26"
                fontWeight="900"
                fontStyle="italic"
                fontFamily="Arial, sans-serif"
                fill="#00529B"
              >
                CRIF
              </text>
              <text
                x="45"
                y="38"
                fontSize="7.5"
                fontWeight="bold"
                fontFamily="Arial, sans-serif"
                fill="#00529B"
              >
                Together to the next level
              </text>
            </svg>
          </div>

          {/* ADP */}
          <div className="flex items-center justify-center h-16 w-28 sm:w-36 transition-opacity hover:opacity-90">
            <svg viewBox="0 0 120 45" className="h-full w-auto max-h-11">
              <text
                x="60"
                y="35"
                textAnchor="middle"
                fontSize="40"
                fontWeight="900"
                fontStyle="italic"
                fontFamily="Arial, sans-serif"
                fill="#D0271D"
                letterSpacing="-1.5"
              >
                ADP
              </text>
            </svg>
          </div>

          {/* BAYER */}
          <div className="flex items-center justify-center h-16 w-24 sm:w-28 transition-opacity hover:opacity-90">
            <svg viewBox="0 0 100 100" className="h-full w-auto max-h-16">
              <circle
                cx="50"
                cy="50"
                r="44"
                fill="none"
                stroke="#00BC06"
                strokeWidth="7"
              />
              <text
                x="50"
                y="33"
                textAnchor="middle"
                fontSize="18"
                fontWeight="bold"
                fontFamily="Arial, sans-serif"
                fill="#00529B"
              >
                B
              </text>
              <text
                x="50"
                y="48"
                textAnchor="middle"
                fontSize="18"
                fontWeight="bold"
                fontFamily="Arial, sans-serif"
                fill="#00529B"
              >
                A
              </text>
              <text
                x="50"
                y="63"
                textAnchor="middle"
                fontSize="18"
                fontWeight="bold"
                fontFamily="Arial, sans-serif"
                fill="#00529B"
              >
                Y
              </text>
              <text
                x="50"
                y="78"
                textAnchor="middle"
                fontSize="18"
                fontWeight="bold"
                fontFamily="Arial, sans-serif"
                fill="#00529B"
              >
                E
              </text>
              <text
                x="50"
                y="93"
                textAnchor="middle"
                fontSize="18"
                fontWeight="bold"
                fontFamily="Arial, sans-serif"
                fill="#00529B"
              >
                R
              </text>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}