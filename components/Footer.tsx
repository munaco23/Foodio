
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="pt-24 pb-16 bg-[#F9FAFB] border-t border-gray-50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-24">
          
          {/* Logo & Info Card */}
          <div className="bg-[#FF1A4D] rounded-[40px] p-8 text-white shadow-xl flex flex-col justify-between min-h-[450px]">
            <div>
              <div className="flex flex-col mb-8">
                <div className="flex items-baseline">
                  <span className="text-[44px] font-[900] tracking-tight leading-none">F</span>
                  <div className="flex -space-x-1 items-baseline mx-0.5 translate-y-1">
                    <div className="relative">
                      <div className="w-[20px] h-[20px] bg-white rounded-full flex items-center justify-center">
                         <div className="w-1 h-1 bg-[#FF1A4D] rounded-full -mt-1 ml-1 opacity-60"></div>
                      </div>
                      <div className="absolute -top-3.5 -right-0.5 w-3 h-4 border-t-2 border-r-2 border-white rounded-tr-xl"></div>
                    </div>
                    <div className="relative">
                      <div className="w-[20px] h-[20px] bg-white rounded-full flex items-center justify-center">
                         <div className="w-1 h-1 bg-[#FF1A4D] rounded-full -mt-1 ml-1 opacity-60"></div>
                      </div>
                      <div className="absolute -top-3.5 -right-0.5 w-3 h-4 border-t-2 border-r-2 border-white rounded-tr-xl"></div>
                    </div>
                  </div>
                  <span className="text-[44px] font-[900] tracking-tight leading-none">dio</span>
                </div>
                <span className="text-[10px] tracking-[0.3em] font-black text-white/70 uppercase">FOOD & RESTAURANT</span>
              </div>

              <div className="space-y-3 text-[16px] font-[800]">
                <p className="leading-tight">Tuesday - Saturday: 12:00pm - 23:00pm</p>
                <p className="inline-block border-b-2 border-[#FFD700] pb-0.5 cursor-pointer">
                  Closed on Sunday
                </p>
              </div>
            </div>

            <div className="mt-auto">
              <div className="bg-black/20 rounded-[20px] p-2.5 flex items-center gap-3 w-fit pr-6">
                <div className="bg-white px-2 py-1.5 rounded-lg flex-shrink-0 flex items-center justify-center">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/0/02/Tripadvisor_Logo.svg" 
                    className="h-3.5" 
                    alt="Tripadvisor" 
                  />
                </div>
                <div className="leading-tight">
                  <h6 className="font-[900] text-[13px] text-white">Tripadvisor</h6>
                  <p className="text-[9px] font-[800] text-white/80 uppercase tracking-tighter">5 star rated on TripAdvisor</p>
                </div>
              </div>
            </div>
          </div>

          {/* About Column */}
          <div className="pt-2">
            <h3 className="text-[20px] font-[900] text-black mb-1 relative inline-block">
              About
              <div className="absolute -bottom-4 left-0 w-10 h-[3px] bg-[#FFD700] rounded-full"></div>
            </h3>
            <div className="mt-12 space-y-4">
              <FooterLink text="Special Dish" />
              <FooterLink text="Reservation" />
              <FooterLink text="Contact" />
              <FooterLink text="About" />
              <FooterLink text="FAQs" />
            </div>
          </div>

          {/* Menu Column */}
          <div className="pt-2">
            <h3 className="text-[20px] font-[900] text-black mb-1 relative inline-block">
              Menu
              <div className="absolute -bottom-4 left-0 w-10 h-[3px] bg-[#FFD700] rounded-full"></div>
            </h3>
            <div className="mt-12 space-y-4">
              <FooterLink text="Steaks" />
              <FooterLink text="Burgers" />
              <FooterLink text="Coctails" />
              <FooterLink text="Bar BBQ" />
              <FooterLink text="Desserts" />
              <FooterLink text="Reserve a Table" />
            </div>
          </div>

          {/* Newsletter Column */}
          <div className="pt-2">
            <h3 className="text-[20px] font-[900] text-black mb-1 relative inline-block">
              Newsletter
              <div className="absolute -bottom-4 left-0 w-16 h-[3px] bg-[#FFD700] rounded-full"></div>
            </h3>
            <div className="mt-12">
              <p className="text-[#888] font-[700] text-[15px] mb-8">
                Get recent news and updates.
              </p>
              
              <div className="mb-6">
                <input 
                  type="email"
                  placeholder="Email"
                  className="w-full bg-white border-2 border-gray-100 rounded-2xl p-6 h-[65px] flex flex-col justify-center shadow-sm text-[15px] font-[800] focus:outline-none focus:border-[#FF1A4D]/30"
                />
              </div>

              {/* Framed Subscribe Button */}
              <div className="relative group cursor-pointer inline-block w-full max-w-[140px]">
                <div className="absolute -inset-1 border-2 border-[#FF1A4D] rounded-[15px] opacity-100 transition-all group-hover:-inset-1.5"></div>
                <button className="relative w-full bg-[#FF1A4D] text-white py-3 rounded-[12px] font-[900] text-[15px] shadow-lg transition-all hover:bg-black">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Yellow Line */}
        <div className="w-full h-[6px] bg-[#FFD700] rounded-full mb-12"></div>

        {/* Brand Copyright and Payments Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 py-8 border-t border-gray-100">
           <div className="text-[16px] font-[900] text-black uppercase tracking-tight">
              © 2026, Foodio | Shopify Theme
           </div>

           <div className="flex flex-col items-center">
              <span className="text-[11px] font-[900] text-gray-400 uppercase mb-2">Country/region</span>
              <div className="bg-white border border-gray-200 rounded-lg px-4 py-2 flex items-center gap-2 font-[800] text-[14px] cursor-pointer hover:border-black transition-colors">
                <span>United States (USD $)</span>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M3 4.5l3 3 3-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
           </div>

           <div className="flex items-center gap-4 opacity-80">
              <PaymentIcon icon="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png" />
              <PaymentIcon icon="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png" />
              <PaymentIcon icon="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/1200px-PayPal.svg.png" />
              <PaymentIcon icon="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_Pay_logo.svg/1200px-Apple_Pay_logo.svg.png" />
              <PaymentIcon icon="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Apple_Pay_logo.svg/2560px-Apple_Pay_logo.svg.png" className="grayscale" />
           </div>
        </div>
      </div>
    </footer>
  );
};

const FooterLink: React.FC<{ text: string }> = ({ text }) => (
  <a 
    href="#" 
    className="flex items-center gap-3 text-[#666] font-[800] text-[17px] hover:text-[#FF1A4D] transition-colors group"
  >
    <span className="text-gray-300 font-black transition-transform group-hover:translate-x-1">&gt;</span>
    {text}
  </a>
);

const PaymentIcon: React.FC<{ icon: string; className?: string }> = ({ icon, className }) => (
  <div className={`h-8 w-12 bg-white border border-gray-200 rounded p-1 flex items-center justify-center ${className}`}>
     <img src={icon} className="max-h-full max-w-full object-contain" alt="Payment Method" />
  </div>
);

export default Footer;
