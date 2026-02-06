
import React from 'react';
import { Play } from 'lucide-react';

const HowWeWork: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-[#FF1A4D] text-white relative overflow-hidden">
      {/* Background sketches */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <img src="https://www.transparenttextures.com/patterns/food.png" className="w-full h-full object-repeat" alt="" />
      </div>

      <div className="container mx-auto px-4 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 items-center">
          
          <div className="lg:col-span-8">
            <h4 className="text-white font-[800] text-[16px] md:text-[18px] uppercase tracking-widest mb-3 md:mb-4">Easy Order In 3 Steps</h4>
            <h2 className="text-[48px] md:text-[64px] lg:text-[72px] font-[900] text-white mb-8 md:mb-16 leading-tight">How We Work</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              <Step 
                num="1" 
                title="Explore Menu" 
                desc="A range of powerful tools for viewing, querying and filtering your data." 
                icon={<svg className="w-8 h-8 md:w-10 md:h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M7 8h10M7 12h10M7 16h6"/></svg>} 
              />
              <Step 
                num="2" 
                title="Choose a Dish" 
                desc="A range of powerful tools for viewing, querying and filtering your data." 
                icon={<svg className="w-8 h-8 md:w-10 md:h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v2M5 12h14a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2z"/></svg>} 
              />
              <Step 
                num="3" 
                title="Place Order" 
                desc="A range of powerful tools for viewing, querying and filtering your data." 
                icon={<svg className="w-8 h-8 md:w-10 md:h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 18h8M13 14h5M5 18H3M7 14H3M9 6c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2V6z"/></svg>} 
              />
            </div>
          </div>

          <div className="lg:col-span-4 relative flex justify-center">
            {/* Tooltip & Arrow */}
            <div className="absolute -top-12 md:-top-16 left-0 flex flex-col items-center">
              <span className="text-[12px] md:text-[14px] font-[900] mb-2">Watch And Follow</span>
              <svg className="w-12 h-8 md:w-16 md:h-12 text-[#FFD700] fill-none" viewBox="0 0 100 60">
                <path d="M10,10 Q50,60 90,10" stroke="currentColor" strokeWidth="2" strokeDasharray="5,5" />
                <path d="M90,10 l-5,5 m5,-5 l-5,-5" stroke="currentColor" strokeWidth="2" />
              </svg>
            </div>

            <div className="w-[280px] h-[280px] md:w-[350px] md:h-[350px] lg:w-[420px] lg:h-[420px] rounded-full border-[12px] md:border-[15px] border-white/20 relative group cursor-pointer overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" className="w-full h-full object-cover transition-transform group-hover:scale-110" alt="Video Placeholder" />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                <div className="w-16 h-16 md:w-20 md:w-24 md:h-24 bg-white rounded-full flex items-center justify-center text-black shadow-xl transform transition-transform group-hover:scale-110">
                  <Play fill="black" size={24} md:size={32} className="translate-x-1" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

const Step: React.FC<{ num: string; title: string; desc: string; icon: React.ReactNode }> = ({ num, title, desc, icon }) => (
  <div>
    <div className="relative mb-6 md:mb-8">
      <div className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] rounded-full bg-[#FFD700] flex items-center justify-center text-black shadow-lg">
        {icon}
      </div>
      <div className="absolute -top-2 -left-2 w-8 h-8 md:w-10 md:h-10 bg-black rounded-full flex items-center justify-center font-[900] text-[14px] md:text-[16px] text-white">
        {num}
      </div>
    </div>
    <h5 className="text-[20px] md:text-[26px] font-[900] mb-3 md:mb-4">{title}</h5>
    <p className="text-white/80 font-[500] leading-relaxed text-[14px] md:text-[16px]">{desc}</p>
  </div>
);

export default HowWeWork;
