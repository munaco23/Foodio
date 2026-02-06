
import React from 'react';

const ServiceAppPromo: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
          
          {/* Text Side */}
          <div className="relative z-10">
            <h4 className="text-[#FF1A4D] font-[900] tracking-[0.2em] uppercase text-[12px] md:text-[15px] mb-4 md:mb-6">Best app for foods ordering</h4>
            <h2 className="text-[36px] md:text-[48px] lg:text-[64px] font-[900] text-black leading-[1.1] mb-8 md:mb-12 tracking-tight">
              Manage Your Restaurant Anytime! Anywhere!
            </h2>

            <ul className="space-y-4 md:space-y-6 mb-8 md:mb-16">
              <BulletItem text="Higher Reach - Minimal Effort" />
              <BulletItem text="Showcase your Brand" />
              <BulletItem text="Exclusive offers & discounts" />
            </ul>

            <div className="flex flex-wrap gap-4 md:gap-6">
              <button className="bg-black hover:bg-gray-800 transition-colors rounded-xl md:rounded-2xl p-1 shadow-lg group">
                <div className="flex items-center gap-2 md:gap-3 px-4 md:px-6 py-2 md:py-3">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/3/31/Apple_logo_white.svg" className="w-6 h-6 md:w-8 md:h-8" alt="App Store" />
                  <div className="text-left text-white">
                    <div className="text-[8px] md:text-[10px] font-bold leading-none uppercase opacity-60">Download from</div>
                    <div className="text-[16px] md:text-[20px] font-black leading-none">App Store</div>
                  </div>
                </div>
              </button>
              <button className="bg-[#FF1A4D] hover:bg-[#e01644] transition-colors rounded-xl md:rounded-2xl p-1 shadow-lg group">
                <div className="flex items-center gap-2 md:gap-3 px-4 md:px-6 py-2 md:py-3">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" className="w-6 h-6 md:w-8 md:h-8" alt="Google Play" />
                  <div className="text-left text-white">
                    <div className="text-[8px] md:text-[10px] font-bold leading-none uppercase opacity-60">Download from</div>
                    <div className="text-[16px] md:text-[20px] font-black leading-none">Google Play</div>
                  </div>
                </div>
              </button>
            </div>
          </div>

          {/* Graphic Side */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Background Red Blob Shape */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] md:w-[120%] h-[60%] md:h-[80%] bg-[#FF1A4D] rounded-[80px] md:rounded-[100px] -rotate-6"></div>
            
            {/* Main Hand Mockup */}
            <div className="relative z-10">
               <img 
                 src="https://img.freepik.com/free-photo/close-up-holding-smartphone-white-background_23-2148181467.jpg" 
                 className="max-w-[300px] md:max-w-[450px] mix-blend-multiply opacity-90" 
                 alt="Phone Hand" 
               />
               
               {/* Floating elements from image */}
               <img 
                 src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" 
                 className="absolute -top-8 md:-top-10 right-0 w-20 h-20 md:w-32 md:h-32 rounded-full border-2 md:border-4 border-white shadow-xl rotate-12" 
               />
               <img 
                 src="https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" 
                 className="absolute bottom-8 md:bottom-10 right-[-20px] md:right-[-40px] w-16 h-16 md:w-28 md:h-28 rounded-full border-2 md:border-4 border-white shadow-xl -rotate-12" 
               />
               
               {/* Delivery Scooter Overlay */}
               <div className="absolute bottom-8 md:bottom-10 left-[-20px] md:left-[-40px] w-20 h-20 md:w-32 md:h-32 animate-bounce">
                  <img src="https://cdn-icons-png.flaticon.com/512/2830/2830305.png" alt="Scooter" />
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

const BulletItem: React.FC<{ text: string }> = ({ text }) => (
  <div className="flex items-center gap-3 md:gap-4">
    <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-[#FFD700] border-2 border-white shadow-sm"></div>
    <span className="text-[16px] md:text-[20px] font-[700] md:font-[800] text-gray-700">{text}</span>
  </div>
);

export default ServiceAppPromo;
