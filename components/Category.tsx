
import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CategoryItem {
  id: number;
  name: string;
  count: number;
  image: string;
}

const categories: CategoryItem[] = [
  {
    id: 1,
    name: 'Organic Food',
    count: 12,
    image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 2,
    name: 'Zinger Burgers',
    count: 4,
    image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 3,
    name: 'Grill Food',
    count: 12,
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 4,
    name: 'BBQ Set',
    count: 12,
    image: 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  },
];

const Category: React.FC = () => {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-8 md:mb-12">
          <h2 className="text-[32px] md:text-[40px] lg:text-[48px] font-[900] text-black text-center mb-4 leading-tight">
            Choose a Category
          </h2>
          {/* Yellow Underline Bar */}
          <div className="w-[120px] md:w-[160px] lg:w-[200px] h-[4px] md:h-[6px] bg-[#FFD700] rounded-full mb-6 md:mb-8"></div>
          
          {/* Navigation Arrows */}
          <div className="flex space-x-4 md:space-x-6 text-black">
            <button className="hover:text-[#FF1A4D] transition-colors" aria-label="Previous category">
              <ChevronLeft size={20} md:size={24} strokeWidth={2.5} />
            </button>
            <button className="hover:text-[#FF1A4D] transition-colors" aria-label="Next category">
              <ChevronRight size={20} md:size={24} strokeWidth={2.5} />
            </button>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10">
          {categories.map((category) => (
            <div key={category.id} className="group cursor-pointer">
              {/* Pill-shaped Image Container */}
              <div className="relative w-full aspect-[16/10] overflow-hidden rounded-[60px] sm:rounded-[80px] lg:rounded-[100px] border-none shadow-lg mb-4 md:mb-6 transition-transform duration-300 group-hover:-translate-y-2">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay for better text separation if needed, but keeping it clean per image */}
                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors"></div>
              </div>

              {/* Text Content */}
              <div className="text-center">
                <h3 className="text-[18px] md:text-[20px] lg:text-[24px] font-[900] text-black mb-1 group-hover:text-[#FF1A4D] transition-colors">
                  {category.name}
                </h3>
                <p className="text-[12px] md:text-[14px] font-[800] text-[#FF1A4D] tracking-tight">
                  {category.count.toString().padStart(2, '0')} Dishes in the Menu
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Category;
