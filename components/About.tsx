
import React from 'react';

const About: React.FC = () => {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-12">
        {/* Section Heading */}
        <div className="text-center mb-12 md:mb-16 lg:mb-24">
          <h4 className="text-[#FF1A4D] font-[900] tracking-[0.2em] uppercase text-[12px] md:text-[15px] mb-4 md:mb-6">
            About the food restaurant
          </h4>
          <h2 className="text-[32px] md:text-[44px] lg:text-[56px] font-[900] text-black max-w-3xl md:max-w-4xl mx-auto leading-[1.15] tracking-tight">
            Perfect Place For An Exceptional Experience
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center">
          {/* Images Section */}
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            {/* Arch-shaped image (Left) */}
            <div className="w-full md:w-1/2 h-[300px] md:h-[400px] lg:h-[540px] rounded-t-[120px] md:rounded-t-[160px] lg:rounded-t-[200px] rounded-b-[24px] md:rounded-b-[32px] lg:rounded-b-[40px] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700" 
                alt="Chef Preparing Food" 
              />
            </div>
            {/* Vertical pill-shaped image with phone mockup style (Right) */}
            <div className="w-full md:w-1/2 h-[320px] md:h-[480px] lg:h-[640px] rounded-full overflow-hidden shadow-2xl border-[8px] md:border-[12px] border-white relative">
              <img 
                src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                className="w-full h-full object-cover" 
                alt="Food Background" 
              />
            </div>
          </div>

          {/* Text & Features Section */}
          <div className="lg:pl-0 lg:pl-10">
            <p className="text-[#888] text-[16px] md:text-[18px] lg:text-[20px] font-[500] leading-[1.7] mb-8 md:mb-12 lg:mb-16 max-w-lg md:max-w-xl">
              Nisl quam nestibulum ac quam nec odio elementum sceisue the aucan ligula. Orci varius natoque pena culus mus nellentesque ha um ac quam nec odio aibulum ac quam nec odio elrbine.
            </p>

            {/* Feature 1 */}
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 mb-8 md:mb-12 lg:mb-14">
              <div className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] rounded-full border-[4px] md:border-[5px] border-[#FFD700] flex-shrink-0 flex items-center justify-center p-4 md:p-5">
                {/* Custom SVG icon for Online Ordering */}
                <svg className="w-full h-full text-[#FF1A4D]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="7" height="7" />
                  <rect x="14" y="3" width="7" height="7" />
                  <rect x="14" y="14" width="7" height="7" />
                  <rect x="3" y="14" width="7" height="7" />
                  <circle cx="6.5" cy="6.5" r="1.5" />
                  <circle cx="17.5" cy="17.5" r="1.5" />
                </svg>
              </div>
              <div className="text-center md:text-left">
                <h5 className="text-[20px] md:text-[24px] lg:text-[26px] font-[900] text-black mb-2 tracking-tight">Online Food Ordering</h5>
                <p className="text-[#888] text-[14px] md:text-[16px] lg:text-[18px] font-[500]">Easy Food delivery from the best restaurants.</p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
              <div className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] rounded-full border-[4px] md:border-[5px] border-[#FFD700] flex-shrink-0 flex items-center justify-center p-4 md:p-5">
                {/* Custom SVG icon for Healthy Food (Phone/Platter) */}
                <svg className="w-full h-full text-[#FF1A4D]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                  <line x1="12" y1="18" x2="12.01" y2="18" />
                  <path d="M9 10c0-1.5 1.5-3 3-3s3 1.5 3 3" />
                  <path d="M8 12h8" />
                </svg>
              </div>
              <div className="text-center md:text-left">
                <h5 className="text-[20px] md:text-[24px] lg:text-[26px] font-[900] text-black mb-2 tracking-tight">100% Healthy Food</h5>
                <p className="text-[#888] text-[14px] md:text-[16px] lg:text-[18px] font-[500]">Easy Food delivery from the best restaurants.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
