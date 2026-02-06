
import React from 'react';
import { Home } from 'lucide-react';

const AboutHero: React.FC = () => {
  return (
    <section className="relative h-[350px] md:h-[450px] bg-[#F3F4F6] overflow-hidden flex items-center">
      {/* Background Image - Mobile Only */}
      <div className="absolute inset-0 md:hidden opacity-20">
        <img 
          src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
          className="w-full h-full object-cover" 
          alt="" 
        />
      </div>
      
      {/* Background Image - Desktop Only */}
      <div className="absolute inset-0 hidden md:block opacity-15">
        <img 
          src="https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
          className="w-full h-full object-cover" 
          alt="" 
        />
      </div>
      
      {/* Abstract Background Patterns - Desktop Only */}
      <div className="absolute inset-0 opacity-10 pointer-events-none hidden md:block">
         <img src="https://www.transparenttextures.com/patterns/pinstriped-suit.png" className="absolute inset-0" alt="" />
         <div className="absolute top-0 left-0 w-48 md:w-64 h-48 md:h-64 border-8 border-gray-300 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-12 flex flex-col md:flex-row justify-between items-center relative z-10">
        <div>
          <h1 className="text-[48px] md:text-[64px] lg:text-[72px] font-[900] text-black mb-6 md:mb-8 leading-none">About Us</h1>
          <div className="bg-[#FF1A4D] px-6 md:px-8 py-3 rounded-full inline-flex items-center gap-2 md:gap-3 text-white font-[800] text-[14px] md:text-[16px] shadow-lg shadow-red-500/20 cursor-pointer">
            <Home size={16} md:size={18} fill="white" />
            <span>Home</span>
            <span className="opacity-50">-</span>
            <span>About Us</span>
          </div>
        </div>

        <div className="hidden lg:block relative group">
           <div className="w-[280px] h-[280px] md:w-[320px] md:h-[320px] lg:w-[380px] lg:h-[380px] rounded-full overflow-hidden border-[12px] md:border-[15px] border-white shadow-2xl transform rotate-3 transition-transform group-hover:rotate-0">
              <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" className="w-full h-full object-cover" alt="Plated Food" />
           </div>
           {/* Floating elements */}
           <div className="absolute -bottom-4 -left-8 md:-bottom-4 md:-left-12 w-16 h-16 md:w-24 md:h-24 bg-white rounded-full shadow-lg p-2 md:p-4 rotate-12">
              <img src="https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" className="w-full h-full object-cover rounded-full" />
           </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
