
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface SlideContent {
  id: number;
  subtitle: string;
  title: string;
  description: string;
  image: string;
  discount: string;
}

const slides: SlideContent[] = [
  {
    id: 1,
    subtitle: "Fastest Delivery & Easy Pickup",
    title: "Food Platter",
    description: "Good Food Starts With Good Ingredients. We Only Bring You The Best.",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    discount: "20%"
  },
  {
    id: 2,
    subtitle: "Authentic Italian Taste",
    title: "Classic Pizza",
    description: "Experience the true flavors of Italy with our wood-fired sourdough crusts.",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    discount: "15%"
  },
  {
    id: 3,
    subtitle: "Gourmet Selection",
    title: "Double Burger",
    description: "Juicy prime beef patties stacked with organic greens and house-made sauce.",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    discount: "25%"
  }
];

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  return (
    <section className="relative w-full h-[600px] md:h-[750px] overflow-hidden chalkboard-bg text-white group">
      {/* Static Background Layer */}
      <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
        <img 
          src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
          className="w-full h-full object-cover grayscale" 
          alt="" 
        />
      </div>

      {/* Content Container (Sliding Layer) */}
      <div className="relative z-10 w-full h-full container mx-auto px-4 md:px-12">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 flex items-center transition-all duration-700 ease-in-out px-4 md:px-12 ${
              index === currentSlide 
                ? "opacity-100 translate-x-0" 
                : index < currentSlide 
                  ? "opacity-0 -translate-x-full" 
                  : "opacity-0 translate-x-full"
            }`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 md:gap-16 w-full">
              {/* Text Side */}
              <div className={`max-w-xl md:max-w-2xl transition-all duration-1000 delay-100 ${index === currentSlide ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
                <h4 className="text-[#FFD700] text-lg md:text-xl lg:text-2xl font-extrabold mb-4 md:mb-6 tracking-wide">
                  {slide.subtitle}
                </h4>
                <h1 className="text-[48px] md:text-[70px] lg:text-[110px] font-[900] text-[#FFD700] leading-[0.9] mb-6 md:mb-8 drop-shadow-lg">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl lg:text-2xl font-bold mb-8 md:mb-12 text-gray-200 leading-relaxed max-w-lg">
                  {slide.description}
                </p>
                
                {/* Framed Button */}
                <div className="relative group cursor-pointer inline-block">
                  <div className="absolute -inset-2 border-2 border-[#FF1A4D] rounded-[20px] md:rounded-[24px]"></div>
                  <button className="relative bg-[#FF1A4D] text-white px-8 md:px-12 py-4 md:py-6 rounded-[14px] md:rounded-[18px] font-black text-lg md:text-xl shadow-xl transition-all hover:bg-[#e01644] active:scale-95">
                    View Our Menu
                  </button>
                </div>
              </div>

              {/* Image Side */}
              <div className={`relative flex justify-center lg:justify-end transition-all duration-1000 delay-300 ${index === currentSlide ? "scale-100 rotate-0 opacity-100" : "scale-75 rotate-6 opacity-0"}`}>
                <div className="relative group mt-8 lg:mt-0">
                  {/* Decorative Glow */}
                  <div className="absolute -inset-4 md:-inset-6 lg:-inset-10 bg-[#FFD700] opacity-20 blur-[40px] md:blur-[60px] lg:blur-[80px] rounded-full"></div>
                  
                  {/* Main Food Image with Frame */}
                  <div className="relative z-10 w-[200px] h-[160px] sm:w-[240px] sm:h-[190px] md:w-[450px] md:h-[350px] lg:w-[650px] lg:h-[450px] bg-white p-2 md:p-3 lg:p-5 rounded-[20px] md:rounded-[30px] lg:rounded-[40px] transform -rotate-3 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.7)] overflow-hidden border-4 md:border-6 lg:border-8 border-white">
                    <img 
                      src={slide.image} 
                      className="w-full h-full object-cover rounded-[16px] md:rounded-[20px] lg:rounded-[24px]" 
                      alt={slide.title} 
                      loading="eager"
                    />
                  </div>

                  {/* High-Fidelity Discount Badge */}
                  <div className="absolute -bottom-6 -left-6 sm:-bottom-8 sm:-left-8 md:-bottom-12 md:-left-12 lg:-bottom-16 lg:-left-16 z-20 bg-[#FFD700] text-black w-20 h-20 sm:w-24 sm:h-24 md:w-36 md:h-36 lg:w-52 lg:h-52 rounded-full border-[6px] sm:border-[8px] md:border-[12px] border-[#1a1a1a] flex flex-col items-center justify-center shadow-2xl transform rotate-12 transition-transform group-hover:rotate-0">
                    <span className="text-[8px] sm:text-[10px] md:text-xs lg:text-sm font-black tracking-tighter opacity-80">UPTO</span>
                    <span className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-[900] leading-none my-1">{slide.discount}</span>
                    <span className="text-[8px] sm:text-[10px] md:text-xs lg:text-sm font-black tracking-widest">DISCOUNT</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button 
        onClick={handlePrev}
        className="absolute left-4 md:left-6 lg:left-12 top-1/2 -translate-y-1/2 z-30 text-white/50 hover:text-[#FFD700] transition-all hover:scale-110 active:scale-90 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto"
        aria-label="Previous slide"
      >
        <ChevronLeft size={50} md:size={60} lg:size={70} strokeWidth={2} />
      </button>
      <button 
        onClick={handleNext}
        className="absolute right-4 md:right-6 lg:right-12 top-1/2 -translate-y-1/2 z-30 text-white/50 hover:text-[#FFD700] transition-all hover:scale-110 active:scale-90 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto"
        aria-label="Next slide"
      >
        <ChevronRight size={50} md:size={60} lg:size={70} strokeWidth={2} />
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 z-30 flex space-x-3 md:space-x-4">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`transition-all duration-300 rounded-full border-2 border-white/30 ${
              idx === currentSlide 
                ? "w-3 h-3 md:w-4 md:h-4 bg-[#FFD700] border-[#FFD700]" 
                : "w-2 h-2 md:w-3 md:h-3 bg-white/20 hover:bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
