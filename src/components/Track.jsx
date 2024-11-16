'use client';
import React, { useEffect, useState } from "react";

const BusinessGrowth = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.querySelector('.business-growth');
    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className={`py-20 business-growth ${isVisible ? 'animate-slide-up' : ''}`}
      style={{ backgroundColor: "#fff8f4" }}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row items-start justify-between max-w-6xl mx-auto">
          {/* Left Side (Image) */}
          <div className="md:w-[60%] flex items-center justify-center md:justify-start">
            <div className="relative w-full">
              <img
                src="/assets/track.webp"
                alt="Business Growth Illustration"
                className="w-full h-auto rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>

          {/* Right Side (Text Content) - Added pl-16 for gap from image */}
          <div className="md:w-[45%] text-black mt-8 md:mt-0 md:pl-16">
            <h2
              className={`text-4xl font-bold mb-6 text-primary text-left ${isVisible ? 'animate-slide-up' : ''
                }`}
            >
              Track your college startup culture with us
            </h2>
            <p
              className={`text-base mb-8 text-gray-800 leading-relaxed text-left ${isVisible ? 'animate-slide-up' : ''
                }`}
            >
              The Co-creation spaces Helps student ventures to kickstart their development and Help colleges to track..
            </p>

            <div className="space-y-8">
              {[
                {
                  title: "Use our gathering platform to build projects with all development tools",
                  description: "Keep track of Projects for your startup with analytics and development features.",
                  delay: "animate-slide-up-delay-1"
                },
                {
                  title: "Increase your success by finding your potential teammates",
                  description: "Find your co-founder, tech lead, marketing person just on one click",
                  delay: "animate-slide-up-delay-2"
                },
                {
                  title: "Connect your Startup with investors",
                  description: "Privilege to all startups showcases and personal investor reach",
                  delay: "animate-slide-up-delay-3"
                }
              ].map((feature, index) => (
                <div
                  key={index}
                  className={`feature-item text-left ${isVisible ? feature.delay : ''}`}
                >
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-base text-gray-700 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessGrowth;