
import React, { useState, useEffect, useRef } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    {
      id: 1,
      name: "Bratlee Hamint",
      text: "A good restaurant is like a vacation; it transports you, and it becomes a lot more than just about the food. All great deeds and all great thoughts",
      rating: 5,
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 2,
      name: "Sarah Johnson",
      text: "The food quality is exceptional and the service is outstanding. Every visit feels like a special occasion. Highly recommend!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 3,
      name: "Michael Chen",
      text: "Best dining experience in the city! The ambiance is perfect and the menu offers something for everyone. Will definitely come back.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1541167760496-162955ed8a9f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 4,
      name: "Emily Davis",
      text: "The attention to detail and the quality of ingredients is impressive. This place has become our family's favorite restaurant.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
  ];

  // Auto-scroll functionality
  useEffect(() => {
    if (!isAutoScrolling) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoScrolling, testimonials.length]);

  // Manual scroll functions
  const scrollToTestimonial = (index: number) => {
    setCurrentIndex(index);
    setIsAutoScrolling(false);
  };

  const nextTestimonial = () => {
    scrollToTestimonial((currentIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    scrollToTestimonial((currentIndex - 1 + testimonials.length) % testimonials.length);
  };

  // Resume auto-scroll on dot click
  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
    setIsAutoScrolling(true);
  };

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-12">
        <div className="text-center mb-8 md:mb-16">
          <h4 className="text-[#FF1A4D] font-[900] tracking-[0.2em] uppercase text-[12px] md:text-[15px] mb-4 md:mb-6">Testimonials & Reviews</h4>
          <h2 className="text-[40px] md:text-[56px] lg:text-[72px] font-[900] text-black leading-[1.1]">Our Customer Feedbacks</h2>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button 
            onClick={prevTestimonial}
            className="hidden md:flex absolute left-0 md:-left-12 top-1/2 -translate-y-1/2 z-20 bg-[#FFD700] text-black rounded-full p-2 md:p-3 shadow-lg hover:bg-[#FF1A4D] hover:text-white transition-all duration-300"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} md:size={24} strokeWidth={2.5} />
          </button>
          <button 
            onClick={nextTestimonial}
            className="hidden md:flex absolute right-0 md:-right-12 top-1/2 -translate-y-1/2 z-20 bg-[#FFD700] text-black rounded-full p-2 md:p-3 shadow-lg hover:bg-[#FF1A4D] hover:text-white transition-all duration-300"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} md:size={24} strokeWidth={2.5} />
          </button>

          {/* Scroll Container */}
          <div 
            ref={scrollContainerRef}
            className="overflow-hidden"
            onMouseEnter={() => setIsAutoScrolling(false)}
            onMouseLeave={() => setIsAutoScrolling(true)}
          >
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-2 md:px-4">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-20 items-center">
                    {/* Testimonial Content */}
                    <div className="order-2 lg:order-1">
                      <div className="relative pt-6 md:pt-8 pr-8 md:pr-12">
                        {/* Framed Testimonial Box */}
                        <div className="bg-white border-[2px] md:border-[3px] border-[#FFD700] rounded-[30px] md:rounded-[40px] p-6 md:p-12 shadow-2xl relative">
                          <p className="text-[#666] text-[16px] md:text-[22px] font-[500] leading-[1.8] mb-8 md:mb-12">
                            "{testimonial.text}"
                          </p>
                          
                          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                            <div>
                              <h6 className="text-black text-[18px] md:text-[24px] font-[900] mb-2">{testimonial.name}</h6>
                              <div className="flex text-[#FFD700] gap-1">
                                {[...Array(testimonial.rating)].map((_, i) => <Star key={i} size={16} md:size={20} fill="currentColor" />)}
                              </div>
                            </div>
                            {/* Quote Bubble */}
                            <div className="w-12 h-12 md:w-16 md:h-16 bg-[#FFD700] rounded-full flex items-center justify-center text-black shadow-lg translate-x-6 md:translate-x-8 translate-y-6 md:translate-y-8">
                              <Quote fill="black" size={24} md:size={32} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Image */}
                    <div className="order-1 lg:order-2 relative">
                      <div className="flex justify-center">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className="rounded-[40px] md:rounded-[60px] shadow-xl w-full max-w-[400px] md:max-w-[500px] h-[300px] md:h-[400px] object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 md:gap-4 mt-8 md:mt-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? "bg-[#FF1A4D] scale-110" 
                    : "bg-[#FF1A4D] opacity-30 hover:opacity-60"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
