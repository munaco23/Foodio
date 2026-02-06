
import React from 'react';
import { Calendar, Clock, ChevronDown } from 'lucide-react';

const Reservation: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-white">
      {/* Background with subtle food pattern overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
          className="w-full h-full object-cover" 
          alt="" 
        />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
      </div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Main Red Card */}
        <div className="bg-[#FF1A4D] rounded-[50px] p-12 lg:p-16 shadow-2xl relative overflow-hidden">
          {/* Subtle Sketchy Food Pattern Overlay */}
          <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <filter id="n">
                <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/>
              </filter>
              <rect width="100%" height="100%" filter="url(#n)" opacity="0.4"/>
            </svg>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative z-10">
            {/* Left Column: Heading */}
            <div className="lg:col-span-4 pt-4">
              <h2 className="text-[42px] md:text-[52px] font-[900] text-white leading-[0.9] mb-6 tracking-tight">
                RESERVE <br /> A TABLE
              </h2>
              <div className="w-[120px] h-[5px] bg-[#FFD700] mb-8"></div>
              <p className="text-white text-[18px] font-[700] opacity-90">
                Discover our New Menu!
              </p>
            </div>

            {/* Right Column: Form Grid */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
                
                {/* Name - Col Span 6 (Half Row) */}
                <div className="md:col-span-6 bg-white rounded-[12px] px-5 h-[65px] flex flex-col justify-center">
                  <span className="text-[14px] font-[900] text-gray-700">Name</span>
                </div>

                {/* Date - Col Span 3 */}
                <div className="md:col-span-3 bg-white rounded-[12px] p-3 h-[65px] flex flex-col justify-between group cursor-pointer">
                  <span className="text-[11px] font-[900] text-gray-400 uppercase tracking-tighter">Date</span>
                  <div className="flex justify-between items-center">
                    <span className="text-[15px] font-[800] text-gray-800">mm/dd/yyyy</span>
                    <Calendar size={16} className="text-black" />
                  </div>
                </div>

                {/* Time - Col Span 3 */}
                <div className="md:col-span-3 bg-white rounded-[12px] p-3 h-[65px] flex flex-col justify-between group cursor-pointer">
                  <span className="text-[11px] font-[900] text-gray-400 uppercase tracking-tighter">Time</span>
                  <div className="flex justify-between items-center">
                    <span className="text-[15px] font-[800] text-gray-800">--:-- --</span>
                    <Clock size={16} className="text-black" />
                  </div>
                </div>

                {/* Phone number - Col Span 6 */}
                <div className="md:col-span-6 bg-white rounded-[12px] px-5 h-[65px] flex flex-col justify-center">
                  <span className="text-[14px] font-[900] text-gray-700">Phone number</span>
                </div>

                {/* Number people - Col Span 6 */}
                <div className="md:col-span-6 bg-white rounded-[12px] p-3 h-[65px] flex flex-col justify-between group cursor-pointer">
                  <span className="text-[11px] font-[900] text-gray-400 uppercase tracking-tighter">Number</span>
                  <div className="flex justify-between items-center">
                    <span className="text-[17px] font-[900] text-gray-800">Only Me</span>
                    <ChevronDown size={18} className="text-black opacity-0" />
                  </div>
                </div>

                {/* Reservation Button - Positioned bottom right */}
                <div className="md:col-span-12 flex justify-end mt-2">
                  <div className="relative group cursor-pointer inline-block">
                    {/* The double-frame styling */}
                    <div className="absolute -inset-1.5 border-2 border-[#FFD700] rounded-[18px]"></div>
                    <button className="relative bg-[#FFD700] text-black px-10 py-3.5 rounded-[12px] font-[900] text-[16px] shadow-lg transition-all hover:bg-black hover:text-white transform active:scale-95">
                      Reserve Table
                    </button>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reservation;
