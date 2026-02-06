
import React from 'react';
import { Facebook, Twitter, Youtube } from 'lucide-react';

const Experts: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-12">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-[40px] md:text-[56px] lg:text-[64px] font-[900] text-black mb-1 relative inline-block">
            Meet Our Experts
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-32 md:w-40 lg:w-48 h-[4px] md:h-[6px] bg-[#FFD700] rounded-full"></div>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          <ChefCard 
            name="Thomas Walim" 
            title="Dessert specialist" 
            image="https://img.freepik.com/free-photo/portrait-smiling-chef-cook-with-tablet_23-2148763162.jpg" 
          />
          <ChefCard 
            name="James Jhonson" 
            title="Chef Master" 
            image="https://img.freepik.com/free-photo/handsome-cook-holding-thumbs-up_23-2148763175.jpg" 
          />
          <ChefCard 
            name="Room Minal" 
            title="Dessert specialist" 
            image="https://img.freepik.com/free-photo/pleased-chef-standing-with-crossed-arms_23-2148763185.jpg" 
          />
        </div>
      </div>
    </section>
  );
};

const ChefCard: React.FC<{ name: string; title: string; image: string }> = ({ name, title, image }) => (
  <div className="text-center relative pt-16 md:pt-20">
    <div className="bg-[#F8F9FA] rounded-t-full pt-16 md:pt-20 pb-8 md:pb-12 px-6 md:px-8 shadow-sm">
      <div className="absolute -top-8 md:-top-10 left-1/2 -translate-x-1/2 w-[180px] h-[240px] md:w-[240px] md:h-[320px] overflow-hidden rounded-t-full shadow-2xl">
        <img src={image} className="w-full h-full object-cover" alt={name} />
      </div>
      
      <div className="mt-32 md:mt-48">
        <h6 className="text-[#FF1A4D] text-[14px] md:text-[16px] font-[900] mb-2">{name}</h6>
        <h5 className="text-[24px] md:text-[32px] font-[900] text-black mb-6 md:mb-8 leading-tight">{title}</h5>
        
        <div className="flex justify-center gap-4 md:gap-6 text-[#888] mb-8 md:mb-10">
          <Facebook size={18} md:size={20} className="hover:text-black cursor-pointer transition-colors" />
          <Twitter size={18} md:size={20} className="hover:text-black cursor-pointer transition-colors" />
          <Youtube size={18} md:size={20} className="hover:text-black cursor-pointer transition-colors" />
        </div>

        {/* Mock Signature */}
        <div className="flex justify-center opacity-70">
           <svg width="120" height="50" md:width="140" md:height="60" viewBox="0 0 140 60" className="text-black">
              <path d="M20,40 Q40,10 60,30 T100,20 Q120,40 130,50" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <path d="M40,45 L100,35" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3,3" />
           </svg>
        </div>
      </div>
    </div>
  </div>
);

export default Experts;
