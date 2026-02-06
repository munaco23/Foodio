
import React from 'react';

const Services: React.FC = () => {
  return (
    <section className="py-12 md:py-24 bg-[#FAFAFA]">
      <div className="container mx-auto px-4 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-start mb-12 md:mb-16 lg:mb-24">
          <div>
            <h4 className="text-[#FF1A4D] font-[900] tracking-[0.2em] uppercase text-[12px] md:text-[15px] mb-3 md:mb-4">Best Solutions</h4>
            <h2 className="text-[32px] md:text-[48px] lg:text-[72px] font-[900] text-black leading-[1.1] mb-4 md:mb-6 lg:mb-8">We Provide Best Services</h2>
          </div>
          <div className="lg:pt-6">
            <p className="text-[#666] text-[14px] md:text-[16px] lg:text-[18px] font-[500] leading-[1.8] max-w-md md:max-w-lg lg:max-w-xl">
              Nisl quam nestibulum ac quam nec odio elementu aucan ligula. Orci varius natoque pena tibus et maurient monte nascete ridiculus mus nellentesque um ac quam nec odio rbine.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-12">
          <ServiceItem 
            title="Afternoon Tea" 
            icon={<svg className="w-8 h-8 md:w-10 md:h-12 lg:w-12 lg:h-12" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="1.5"><path d="M18 8h1a4 4 0 0 1 0 8h-1M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8zM12 2v3M8 2v3M16 2v3"/></svg>} 
          />
          <ServiceItem 
            title="Takeaway & Delivery" 
            icon={<svg className="w-8 h-8 md:w-10 md:h-12 lg:w-12 lg:h-12" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="1.5"><path d="M10 17h4m-8 4h12a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2zM12 12V7m0 0l-3 3m3-3l3 3"/></svg>} 
          />
          <ServiceItem 
            title="Wine & Cocktails" 
            icon={<svg className="w-8 h-8 md:w-10 md:h-12 lg:w-12 lg:h-12" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="1.5"><path d="M18 22L12 15l-6 7M21 2H3l9 13"/></svg>} 
          />
          <ServiceItem 
            title="Alfresco Dining" 
            icon={<svg className="w-8 h-8 md:w-10 md:h-12 lg:w-12 lg:h-12" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="1.5"><path d="M3 22l1.35-6.75a2 2 0 0 1 1.96-1.61h11.38a2 2 0 0 1 1.96 1.61L21 22M12 10V2M9 4l3-2 3 2"/></svg>} 
          />
        </div>
      </div>
    </section>
  );
};

const ServiceItem: React.FC<{ title: string; icon: React.ReactNode }> = ({ title, icon }) => (
  <div className="text-center group">
    <div className="w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-[150px] md:h-[150px] rounded-full bg-[#FFD700] border-[3px] sm:border-[4px] md:border-[5px] border-white shadow-xl mx-auto flex items-center justify-center mb-4 sm:mb-6 md:mb-8 transition-transform group-hover:scale-110">
      {icon}
    </div>
    <h5 className="text-[18px] sm:text-[20px] md:text-[26px] font-[900] text-black mb-2 sm:mb-3 md:mb-4">{title}</h5>
    <p className="text-[#888] font-[500] text-[12px] sm:text-[14px] md:text-[16px] leading-relaxed">
      Nisl quam nestibulum ac quam nec aucan ligula Orci varius.
    </p>
  </div>
);

export default Services;
