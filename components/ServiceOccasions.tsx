
import React from 'react';
import { Check } from 'lucide-react';

const ServiceOccasions: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
          
          {/* Images Left */}
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 relative">
            <div className="w-[280px] h-[400px] md:w-[320px] md:h-[580px] rounded-[40px] md:rounded-[50px] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1530101974391-01c9fdca35b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                className="w-full h-full object-cover" 
                alt="Celebration" 
              />
            </div>
            <div className="w-[240px] h-[240px] md:w-[280px] md:h-[320px] rounded-[40px] md:rounded-[50px] overflow-hidden shadow-2xl translate-y-16 md:translate-y-20 border-[8px] md:border-[10px] border-white z-10">
              <img 
                src="https://images.unsplash.com/photo-1470337458703-46ad1756a187?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                className="w-full h-full object-cover" 
                alt="Cocktails" 
              />
            </div>
            {/* Floating leaf accent */}
            <div className="absolute -bottom-8 md:-bottom-10 -left-8 md:-left-10 w-16 h-16 md:w-24 md:h-24 opacity-60">
              <img src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" className="w-full h-full object-contain" alt="" />
            </div>
          </div>

          {/* Text Right */}
          <div className="lg:pl-6 md:lg:pl-10">
            <h2 className="text-[36px] md:text-[48px] lg:text-[64px] font-[900] text-black leading-[1.1] mb-6 md:mb-8 tracking-tight">
              Parties, events and special occasions
            </h2>
            <p className="text-[#888] text-[14px] md:text-[18px] font-[500] leading-[1.8] mb-8 md:mb-12 max-w-md md:max-w-xl">
              Nisl quam nestibulum ac quam nec odio elementu sceisue the aucan ligula. Orci varius natoque pena tibus et magnis dis parturient monte nascete ridiculus mus nellentesque habitant moum ac quam nec odio rbine.
            </p>

            <ul className="space-y-4 md:space-y-6">
              <CheckListItem text="Quality foods natural gradient" />
              <CheckListItem text="Award-winning Restaurant" />
              <CheckListItem text="Healthy Food" />
              <CheckListItem text="individually styled bedrooms" />
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

const CheckListItem: React.FC<{ text: string }> = ({ text }) => (
  <li className="flex items-center gap-4 group">
    <div className="bg-[#4CAF50] text-white rounded-md p-1 group-hover:scale-110 transition-transform">
      <Check size={16} strokeWidth={4} />
    </div>
    <span className="text-[20px] font-[700] text-gray-700 leading-tight">
      {text}
    </span>
  </li>
);

export default ServiceOccasions;
