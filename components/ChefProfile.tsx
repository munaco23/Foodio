
import React from 'react';
import { Facebook, Twitter, Instagram, Star } from 'lucide-react';

const ChefProfile: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
          
          {/* Left: Chef Image with Frame and Floating Elements */}
          <div className="relative flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="relative p-2 md:p-6 bg-white rounded-[20px] md:rounded-[40px] shadow-2xl mx-auto lg:mx-0 max-w-[320px] md:max-w-none">
              {/* Yellow Inner Border */}
              <div className="absolute inset-2 md:inset-8 border-[2px] md:border-[4px] border-[#FFD700] rounded-[16px] md:rounded-[32px] pointer-events-none z-10"></div>
              
              {/* Chef Image */}
              <div className="w-[240px] h-[280px] md:w-[380px] md:h-[460px] lg:w-[450px] lg:h-[550px] rounded-[16px] md:rounded-[32px] overflow-hidden">
                <img 
                  src="https://img.freepik.com/free-photo/handsome-cook-holding-thumbs-up_23-2148763175.jpg" 
                  className="w-full h-full object-cover" 
                  alt="James Smith" 
                />
              </div>

              {/* Floating Experience Badge */}
              <div className="absolute bottom-4 md:bottom-10 right-[-15px] md:right-[-30px] bg-[#FFD700] p-3 md:p-6 px-4 md:px-8 rounded-[12px] md:rounded-[24px] shadow-xl z-20">
                <h6 className="text-black text-[14px] md:text-[22px] font-[900] mb-1 md:mb-2 leading-none text-center">14 Years<br/>Experience</h6>
                <div className="flex justify-center text-[#FF1A4D]">
                  {[...Array(5)].map((_, i) => <Star key={i} size={10} md:size={16} fill="currentColor" />)}
                </div>
              </div>

              {/* Floating Decorative Ingredients */}
              <div className="absolute top-1/2 right-[-20px] md:right-[-50px] w-12 h-12 md:w-24 md:h-24 opacity-80 pointer-events-none">
                 <img src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" className="w-full h-full object-contain" alt="" />
              </div>
            </div>
          </div>

          {/* Right: Personal Details */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <h2 className="text-[32px] md:text-[40px] lg:text-[64px] font-[900] text-black mb-6 md:mb-12">I'm James Smith</h2>
            
            <div className="space-y-3 md:space-y-6 mb-6 md:mb-12">
              <DetailRow label="Expertise:" value="Dessert, Chicken, Mutton" />
              <DetailRow label="Experience:" value="7 Years" />
              <DetailRow label="Age:" value="22 Years" />
              <DetailRow label="Phone:" value="1234-0129-123" />
              <DetailRow label="Email:" value="username@domain.com" />
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-3 md:gap-6 mb-6 md:mb-12">
              <SocialIcon icon={<Facebook size={16} md:size={24} />} />
              <SocialIcon icon={<Twitter size={16} md:size={24} />} />
              <SocialIcon icon={<Instagram size={16} md:size={24} />} />
            </div>

            {/* Signature SVG */}
            <div className="opacity-80 flex justify-center lg:justify-start">
               <svg width="140" height="40" md:width="220" md:height="80" viewBox="0 0 220 80" className="text-black">
                  <path 
                    d="M20,50 Q60,10 100,40 T180,30 Q200,50 210,60 M50,65 L150,55" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="3" 
                    strokeLinecap="round" 
                  />
               </svg>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

const DetailRow: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <div className="flex flex-col sm:flex-row items-start sm:items-baseline gap-1 sm:gap-6 md:gap-10">
    <span className="w-full sm:w-32 text-[14px] sm:text-[16px] md:text-[20px] font-[900] text-gray-800">{label}</span>
    <span className="text-[14px] sm:text-[16px] md:text-[20px] font-[700] text-gray-500 break-words">{value}</span>
  </div>
);

const SocialIcon: React.FC<{ icon: React.ReactNode }> = ({ icon }) => (
  <div className="text-black hover:text-[#FF1A4D] transition-colors cursor-pointer">
    {icon}
  </div>
);

export default ChefProfile;
