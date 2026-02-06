
import React from 'react';

const History: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-12">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-[40px] md:text-[56px] lg:text-[64px] font-[900] text-black mb-1 relative inline-block">
            Restaurant History
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-32 md:w-40 lg:w-48 h-[4px] md:h-[6px] bg-[#FFD700] rounded-full"></div>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 md:gap-x-20 gap-y-12 md:gap-y-16">
          <HistoryItem year="1994" title="Begins Shop" image="https://images.unsplash.com/photo-1556910103-1c02745aae4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" />
          <HistoryItem year="2010" title="Restaurant" image="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" />
          <HistoryItem year="2016" title="Online Shop" image="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" />
          <HistoryItem year="2022" title="BBQ Restaurant" image="https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" />
        </div>
      </div>
    </section>
  );
};

const HistoryItem: React.FC<{ year: string; title: string; image: string }> = ({ year, title, image }) => (
  <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
    <div className="relative flex-shrink-0">
      <div className="w-[160px] h-[160px] md:w-[220px] md:h-[220px] rounded-t-full rounded-b-3xl overflow-hidden shadow-xl border-6 md:border-8 border-white">
        <img src={image} className="w-full h-full object-cover" alt={title} />
      </div>
      <div className="absolute top-1/2 -right-6 md:-right-10 -translate-y-1/2 w-16 h-16 md:w-24 md:h-24 bg-[#FF1A4D] rounded-full flex items-center justify-center text-white font-[900] text-[16px] md:text-[22px] shadow-lg border-3 md:border-4 border-white">
        {year}
      </div>
    </div>
    <div className="text-center md:text-left">
      <h4 className="text-[24px] md:text-[32px] font-[900] text-black mb-3 md:mb-4">{title}</h4>
      <p className="text-[#888] font-[500] leading-relaxed max-w-xs text-[14px] md:text-[16px]">
        Nisl quam nestibulum ac quam nec monte nascete ridiculus mus nell umnec odio rbine.
      </p>
    </div>
  </div>
);

export default History;
