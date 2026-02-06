
import React from 'react';
import { Home } from 'lucide-react';

const ChefHero: React.FC = () => {
  return (
    <section className="relative h-[300px] sm:h-[350px] md:h-[450px] bg-[#F3F4F6] overflow-hidden flex items-center">
      {/* Background Image - Mobile Only */}
      <div className="absolute inset-0 md:hidden opacity-20">
        <img 
          src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
          className="w-full h-full object-cover" 
          alt="" 
        />
      </div>
      
      {/* Background Image - Desktop Only */}
      <div className="absolute inset-0 hidden md:block opacity-15">
        <img 
          src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
          className="w-full h-full object-cover" 
          alt="" 
        />
      </div>
      
      {/* Abstract Background Patterns - Desktop Only */}
      <div className="absolute inset-0 opacity-10 pointer-events-none hidden md:block">
         <img src="https://www.transparenttextures.com/patterns/pinstriped-suit.png" className="absolute inset-0" alt="" />
      </div>
      
      <div className="container mx-auto px-4 md:px-12 flex flex-col md:flex-row justify-between items-center relative z-10">
        <div className="text-center md:text-left">
          <h1 className="text-[36px] sm:text-[42px] md:text-[64px] lg:text-[72px] font-[900] text-black mb-4 md:mb-8 leading-none">Chef Details</h1>
          <div className="bg-[#FF1A4D] px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 rounded-full inline-flex items-center gap-2 md:gap-3 text-white font-[800] text-[12px] sm:text-[14px] md:text-[16px] shadow-lg shadow-red-500/20 cursor-pointer">
            <Home size={14} sm:size={16} md:size={18} fill="white" />
            <span>Home</span>
            <span className="opacity-50">-</span>
            <span>Chef Details</span>
          </div>
        </div>

        <div className="hidden lg:block relative group">
           <div className="w-[280px] h-[280px] md:w-[320px] md:h-[320px] lg:w-[380px] lg:h-[380px] rounded-full overflow-hidden border-[12px] md:border-[15px] border-white shadow-2xl transform rotate-3 transition-transform">
              <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" className="w-full h-full object-cover" alt="Chef Details Food" />
           </div>
        </div>
      </div>
    </section>
  );
};

export default ChefHero;
