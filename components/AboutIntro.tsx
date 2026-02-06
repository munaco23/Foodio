
import React from 'react';

const AboutIntro: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-start mb-16 md:mb-24">
          <div>
            <h4 className="text-[#FF1A4D] font-[900] tracking-[0.2em] uppercase text-[12px] md:text-[15px] mb-4 md:mb-6">About the food restaurant</h4>
            <h2 className="text-[36px] md:text-[48px] lg:text-[58px] font-[900] text-black leading-[1.1] mb-6 md:mb-8">New Ground with Dishes to be Enjoyed</h2>
          </div>
          <div className="lg:pt-6">
            <p className="text-[#666] text-[16px] md:text-[18px] font-[500] leading-[1.8] mb-8 md:mb-12">
              Nisl quam nestibulum ac quam nec odio eleme aucan ligula. Orci varius nat oque pena tibus et urient monte nascete rid iculus mus nellentesq um ac qu am nec odio rbine. Nisl quam nestibu aucan ligula.
            </p>
            <div className="flex items-center gap-4 md:gap-6">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-gray-100 shadow-sm">
                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" className="w-full h-full object-cover" alt="Willimes James" />
              </div>
              <div>
                <h5 className="text-[18px] md:text-[22px] font-[900] text-black">Willimes James</h5>
                <p className="text-[12px] md:text-[14px] font-[700] text-gray-400">Director and Chief Operations Officer</p>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Images with yellow inner borders */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <FoodFrame src="https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" />
          <FoodFrame src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" className="translate-y-4 md:translate-y-6" />
          <FoodFrame src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" />
        </div>
      </div>
    </section>
  );
};

const FoodFrame: React.FC<{ src: string; className?: string }> = ({ src, className }) => (
  <div className={`relative p-2 md:p-3 bg-white rounded-[30px] md:rounded-[40px] shadow-2xl overflow-hidden ${className}`}>
    <div className="absolute inset-3 md:inset-5 border-[2px] border-[#FFD700] rounded-[24px] md:rounded-[32px] pointer-events-none z-10"></div>
    <img src={src} className="w-full h-[250px] md:h-[300px] lg:h-[400px] object-cover rounded-[20px] md:rounded-[32px]" alt="Dish" />
  </div>
);

export default AboutIntro;
