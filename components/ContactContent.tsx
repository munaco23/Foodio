
import React from 'react';
import { Phone, Mail } from 'lucide-react';

const ContactContent: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20">
          
          {/* Left Side: Contact Cards & Map */}
          <div>
            <h2 className="text-[36px] md:text-[48px] lg:text-[54px] font-[900] text-black mb-8 md:mb-12">Get in Touch</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
               {/* Phone Box */}
               <div className="bg-white border-[2px] md:border-[3px] border-[#FFD700] rounded-[24px] md:rounded-[32px] p-6 md:p-10 flex flex-col items-center text-center shadow-sm">
                  <div className="bg-[#FF1A4D] w-12 h-12 md:w-16 md:h-16 rounded-2xl md:rounded-3xl flex items-center justify-center text-white mb-4 md:mb-6">
                    <Phone size={20} md:size={24} fill="currentColor" />
                  </div>
                  <h5 className="text-[#FF1A4D] text-[16px] md:text-[18px] font-[900] mb-2">For Booking</h5>
                  <p className="text-[18px] md:text-[22px] font-[900] text-black">01 123 456 786</p>
               </div>

               {/* Email Box */}
               <div className="bg-white border-[2px] md:border-[3px] border-[#FFD700] rounded-[24px] md:rounded-[32px] p-6 md:p-10 flex flex-col items-center text-center shadow-sm">
                  <div className="bg-[#FF1A4D] w-12 h-12 md:w-16 md:h-16 rounded-2xl md:rounded-3xl flex items-center justify-center text-white mb-4 md:mb-6">
                    <Mail size={20} md:size={24} fill="currentColor" />
                  </div>
                  <h5 className="text-[#FF1A4D] text-[16px] md:text-[18px] font-[900] mb-2">For Private Dining</h5>
                  <p className="text-[18px] md:text-[22px] font-[900] text-black">Info@Domain.Com</p>
               </div>
            </div>

            {/* Map Placeholder */}
            <div className="rounded-[30px] md:rounded-[40px] overflow-hidden shadow-xl border-4 md:border-8 border-white h-[300px] md:h-[400px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1000!2d-122.40476!3d37.78193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ2JzU0LjkiNiAxMjLCsDI0JzE3LjEiVw!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* Right Side: Form */}
          <div>
            <h2 className="text-[36px] md:text-[48px] lg:text-[54px] font-[900] text-black mb-4">Have Question?</h2>
            <p className="text-[#888] text-[16px] md:text-[18px] font-[500] leading-relaxed mb-8 md:mb-12 max-w-lg">
              For all enquires, please contact us and one of our delightful team will be be happy to help.
            </p>

            <form className="space-y-4 md:space-y-6">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div className="bg-white border-2 border-gray-100 rounded-xl md:rounded-2xl p-4 md:p-6 h-[60px] md:h-[74px] flex flex-col justify-center shadow-sm">
                    <span className="text-[12px] md:text-[14px] font-[900] text-gray-700">Name</span>
                  </div>
                  <div className="bg-white border-2 border-gray-100 rounded-xl md:rounded-2xl p-4 md:p-6 h-[60px] md:h-[74px] flex flex-col justify-center shadow-sm">
                    <span className="text-[12px] md:text-[14px] font-[900] text-gray-700">Email</span>
                  </div>
               </div>

               <div className="bg-white border-2 border-gray-100 rounded-xl md:rounded-2xl p-4 md:p-6 h-[60px] md:h-[74px] flex flex-col justify-center shadow-sm">
                  <span className="text-[12px] md:text-[14px] font-[900] text-gray-700">Phone number</span>
               </div>

               <div className="bg-white border-2 border-gray-100 rounded-xl md:rounded-2xl p-4 md:p-6 h-[200px] md:h-[250px] flex flex-col shadow-sm">
                  <span className="text-[12px] md:text-[14px] font-[900] text-gray-700">Comment</span>
               </div>

               <div className="pt-2 md:pt-4">
                  <div className="relative group cursor-pointer inline-block">
                    <div className="absolute -inset-2 border-2 border-[#FF1A4D] rounded-[18px] md:rounded-[24px]"></div>
                    <button className="relative bg-[#FF1A4D] text-white px-8 md:px-12 py-4 md:py-5 rounded-[14px] md:rounded-[18px] font-[900] text-[16px] md:text-[18px] shadow-lg transition-all hover:bg-black">
                      Send Message
                    </button>
                  </div>
               </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactContent;
