
import React from 'react';
import { Play } from 'lucide-react';

const ContactHours: React.FC = () => {
  return (
    <section className="pb-16 md:pb-24 bg-white">
      <div className="container mx-auto px-4 md:px-12">
        {/* Large Steak Image Section */}
        <div className="relative mb-[-80px] md:mb-[-120px] z-10">
          <div className="rounded-[30px] md:rounded-[50px] overflow-hidden shadow-2xl h-[350px] md:h-[450px] lg:h-[550px] relative group cursor-pointer">
             <img 
               src="https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
               className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-700" 
               alt="Grilled Meat" 
             />
             <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <div className="w-16 h-16 md:w-20 md:w-24 md:h-24 bg-white rounded-full flex items-center justify-center text-black shadow-2xl transform transition-transform group-hover:scale-110">
                   <Play fill="black" size={24} md:size={32} className="translate-x-1" />
                </div>
             </div>
          </div>
        </div>

        {/* Red Hours Section */}
        <div className="bg-[#FF1A4D] rounded-[30px] md:rounded-[50px] pt-[120px] md:pt-[180px] pb-12 md:pb-16 px-6 md:px-12 lg:px-24 text-white relative">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 text-center">
              <div>
                 <h4 className="text-[24px] md:text-[32px] font-[900] mb-4 md:mb-8">Monday - Friday</h4>
                 <div className="text-[24px] md:text-[34px] font-[900] text-[#FFD700] mb-2 md:mb-4">12pm - 11pm</div>
                 <p className="text-[16px] md:text-[18px] font-[800] opacity-90">Open all day</p>
              </div>
              <div className="border-x-0 md:border-x-2 border-white/20 px-4 md:px-8">
                 <h4 className="text-[24px] md:text-[32px] font-[900] mb-4 md:mb-8">Saturday</h4>
                 <div className="text-[24px] md:text-[34px] font-[900] text-[#FFD700] mb-2 md:mb-4">11:30am - 11pm</div>
                 <p className="text-[16px] md:text-[18px] font-[800] opacity-90">Open all day</p>
              </div>
              <div>
                 <h4 className="text-[24px] md:text-[32px] font-[900] mb-4 md:mb-8">Sunday</h4>
                 <div className="text-[24px] md:text-[34px] font-[900] text-[#FFD700] mb-2 md:mb-4">& Holiday</div>
                 <p className="text-[16px] md:text-[18px] font-[800] opacity-90">Close all day</p>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHours;
