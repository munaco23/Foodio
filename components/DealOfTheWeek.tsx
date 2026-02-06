
import React, { useState } from 'react';
import { Check, Minus, Plus } from 'lucide-react';

const DealOfTheWeek: React.FC = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('Large');

  return (
    <section className="py-12 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        {/* Section Heading */}
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-[40px] md:text-[54px] font-[900] text-black text-center mb-4 leading-tight tracking-tight">
            Deal of the Week
          </h2>
          <div className="w-[120px] md:w-[180px] h-[5px] md:h-[7px] bg-[#FFD700] rounded-full"></div>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          
          {/* Left Column: Countdown Timers */}
          <div className="flex flex-row lg:flex-col gap-4">
            <CountdownBox value="0" label="DAYS" />
            <CountdownBox value="10" label="HOUR" />
            <CountdownBox value="18" label="MIN" />
            <CountdownBox value="27" label="SEC" />
          </div>

          {/* Middle Column: Product Details */}
          <div className="flex-grow max-w-2xl">
            {/* Sale Badge */}
            <div className="bg-[#FFD700] text-black px-6 py-2 rounded-full font-[900] text-[15px] inline-block mb-8">
              Sale up to 33%
            </div>

            <h3 className="text-[40px] md:text-[56px] font-[900] text-black mb-6 md:mb-10 leading-none">
              Burger No.4
            </h3>

            {/* Features List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 mb-8 md:mb-12">
              <FeatureItem text="Fresh & Tasty" />
              <FeatureItem text="Best in organic foods" />
              <FeatureItem text="100 Fresh Ingredients" />
              <FeatureItem text="Better for your Health" />
            </div>

            {/* Pricing */}
            <div className="flex items-center gap-6 mb-12">
              <span className="text-[34px] font-[900] text-[#FF1A4D]">$19.99 USD</span>
              <span className="text-[22px] font-[800] text-[#FFB6C1] line-through">$29.99 USD</span>
            </div>

            {/* Size Selector */}
            <div className="mb-10">
              <span className="block text-[14px] font-[900] text-gray-500 mb-4 uppercase tracking-tighter">Size</span>
              <div className="flex flex-wrap gap-3">
                {['Large', 'Small', 'Medium'].map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-8 py-2.5 rounded-full font-[900] text-[16px] border-2 transition-all ${
                      selectedSize === size
                        ? 'bg-black text-white border-black'
                        : 'bg-white text-black border-gray-200 hover:border-black'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center gap-8 mb-12">
              <span className="text-[14px] font-[900] text-gray-500 uppercase tracking-tighter">Quantity</span>
              <div className="flex items-center border-2 border-gray-100 rounded-lg overflow-hidden h-[54px]">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-5 hover:bg-gray-50 text-gray-400 transition-colors"
                >
                  <Minus size={18} strokeWidth={3} />
                </button>
                <div className="px-8 font-[900] text-[18px] border-x-2 border-gray-100 h-full flex items-center">
                  {quantity}
                </div>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-5 hover:bg-gray-50 text-gray-400 transition-colors"
                >
                  <Plus size={18} strokeWidth={3} />
                </button>
              </div>
            </div>

            {/* Framed Sold Out Button */}
            <div className="relative group cursor-not-allowed inline-block w-full sm:w-auto">
              <div className="absolute -inset-1.5 border-2 border-[#FFB6C1] rounded-[22px]"></div>
              <button className="relative w-full sm:w-auto bg-[#FFB6C1] text-white px-20 py-5 rounded-[16px] font-[900] text-[22px] shadow-sm cursor-not-allowed">
                Sold Out
              </button>
            </div>
          </div>

          {/* Right Column: Large Product Image */}
          <div className="flex-shrink-0 w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative group flex justify-center items-center">
              <div className="absolute -inset-10 bg-[#FFD700] opacity-5 blur-[100px] rounded-full"></div>
              <img 
                src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Mega Burger" 
                className="w-full max-w-[500px] lg:max-w-[600px] h-auto object-contain transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

const CountdownBox: React.FC<{ value: string; label: string }> = ({ value, label }) => (
  <div className="bg-[#FFD700] w-[90px] h-[90px] md:w-[100px] md:h-[100px] rounded-[24px] flex flex-col items-center justify-center text-black shadow-sm">
    <span className="text-[28px] md:text-[32px] font-[900] leading-none mb-1">{value}</span>
    <span className="text-[11px] md:text-[12px] font-[900] tracking-tight">{label}</span>
  </div>
);

const FeatureItem: React.FC<{ text: string }> = ({ text }) => (
  <div className="flex items-center gap-4">
    <div className="bg-[#4CAF50] text-white rounded-full p-1 shadow-sm">
      <Check size={14} strokeWidth={4} />
    </div>
    <span className="text-[17px] font-[800] text-gray-700 leading-tight">
      {text}
    </span>
  </div>
);

export default DealOfTheWeek;
