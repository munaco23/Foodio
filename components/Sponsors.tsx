
import React from 'react';

const Sponsors: React.FC = () => {
  return (
    <section className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-10">
        <h4 className="text-xl md:text-2xl font-black text-center mb-8 md:mb-16 uppercase tracking-wider">Highly Trusted Sponsor</h4>
        
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 lg:gap-24 opacity-60">
           {/* Mock logos using simple SVGs/text since exact images aren't provided */}
           <LogoPlaceholder name="ORGANIC FOOD" color="text-green-700" />
           <LogoPlaceholder name="Health Food" color="text-yellow-700" />
           <LogoPlaceholder name="VEGETARIAN RESTAURANT" color="text-green-600" />
           <LogoPlaceholder name="Veggie Style" color="text-red-700" />
           <LogoPlaceholder name="Vegetarian Food" color="text-orange-700" />
           <LogoPlaceholder name="VEGAN FOOD" color="text-green-800" />
        </div>
      </div>
    </section>
  );
};

const LogoPlaceholder: React.FC<{ name: string; color: string }> = ({ name, color }) => (
  <div className={`flex flex-col items-center gap-2 ${color}`}>
    <div className="w-16 h-16 border-2 border-current rounded-lg flex items-center justify-center font-black">L</div>
    <span className="text-[10px] font-black uppercase text-center max-w-[80px]">{name}</span>
  </div>
);

export default Sponsors;
