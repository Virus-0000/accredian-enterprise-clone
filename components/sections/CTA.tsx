"use client";

type CTAProps = {
  onEnquire: () => void;
};

export default function CTA({ onEnquire }: CTAProps) {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-blue-600 rounded-3xl px-10 py-12 flex flex-col lg:flex-row items-center justify-between gap-8">

          <div>
            <h2 className="text-4xl font-bold text-white">
              Want to Learn More About Our Training Solutions?
            </h2>

            <p className="text-blue-100 text-xl mt-4">
              Get Expert Guidance for Your Team's Success!
            </p>
          </div>

          <button
            onClick={onEnquire}
            className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition"
          >
            Contact Us →
          </button>

        </div>
      </div>
    </section>
  );
}