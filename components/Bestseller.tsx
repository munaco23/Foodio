
import React from 'react';
import { ShoppingBag } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  isFeatured?: boolean;
}

const products: Product[] = [
  { id: 1, name: "Burger No.1", price: "19.99", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
  { id: 2, name: "Cupcake No.2", price: "19.99", image: "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
  { id: 3, name: "Fried Chicken No.3", price: "19.99", image: "https://images.unsplash.com/photo-1562967914-608f82629710?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
  { id: 4, name: "Alcohol Cocktail No.1", price: "19.99", image: "https://images.unsplash.com/photo-1536935338788-846bb9981813?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", isFeatured: true },
  { id: 5, name: "Pizza No.2", price: "19.99", image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
  { id: 6, name: "Donut No.4", price: "19.99", image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
  { id: 8, name: "Ice Cream No.3", price: "19.99", image: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
];

const Bestseller: React.FC = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        {/* Section Heading */}
        <div className="flex flex-col items-center mb-10">
          <h2 className="text-[40px] md:text-[54px] font-[900] text-black text-center mb-4 leading-tight tracking-tight">
            Bestseller Food
          </h2>
          <div className="w-[120px] md:w-[180px] h-[5px] md:h-[7px] bg-[#FFD700] rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4 items-center">
          {/* Top Row */}
          <ProductCard product={products[0]} />
          <ProductCard product={products[1]} />
          <ProductCard product={products[2]} />

          {/* Middle Row Start */}
          <ProductCard product={products[3]} />
          
          {/* Opening Times Center Card */}
          <div className="bg-[#FFD700] rounded-[32px] overflow-hidden flex flex-col items-center text-black shadow-sm h-full">
            <div className="p-6 w-full flex flex-col items-center">
              <h3 className="text-[24px] md:text-[28px] font-[900] uppercase mb-1 tracking-tight">OPENING TIMES</h3>
              <div className="w-12 h-[4px] bg-black mb-6 md:mb-8"></div>
              
              <div className="w-full space-y-3 md:space-y-4 font-[800] text-[15px] md:text-[16px]">
                <div className="flex justify-between items-center">
                  <span>Mon</span>
                  <span>17:00 to 23:00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Tue</span>
                  <span>17:00 to 23:00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Web</span>
                  <span>19:00 to 24:00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Thu</span>
                  <span>14:00 to 18:00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Fri</span>
                  <span>16:00 to 24:00</span>
                </div>
                <div className="flex justify-between items-center text-[#FF1A4D]">
                  <span>Sat-Sun</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>

            {/* Red Contact Section at bottom of opening times card */}
            <div className="bg-[#FF1A4D] w-full p-8 text-white text-center rounded-t-[40px]">
              <div className="text-[24px] font-[900] border-b-2 border-white/30 inline-block mb-3 px-2">
                +1 234 567 891
              </div>
              <p className="text-[13px] font-[800] leading-relaxed">
                Avenue New Town 124 United State
              </p>
            </div>
          </div>

          <ProductCard product={products[4]} />

          {/* Bottom Row */}
          <ProductCard product={products[5]} />
          <div className="hidden lg:block"></div> {/* Spacer for grid alignment if needed */}
          <ProductCard product={products[6]} />
        </div>
      </div>
    </section>
  );
};

const ProductCard: React.FC<{ product: Product }> = ({ product }) => (
  <div className={`relative bg-white border-[3px] ${product.isFeatured ? 'border-[#FF1A4D]' : 'border-[#FFD700]'} rounded-[32px] p-6 flex flex-row items-center gap-4 shadow-sm hover:shadow-md transition-all group`}>
    {/* Product Image Wrapper */}
    <div className="w-24 h-24 md:w-32 md:h-32 flex-shrink-0 relative">
      <img 
        src={product.image} 
        alt={product.name} 
        className="w-full h-full object-cover rounded-2xl shadow-lg transition-transform duration-500 group-hover:scale-105" 
      />
    </div>

    {/* Product Details */}
    <div className="flex flex-col flex-grow min-w-0">
      <h4 className="text-[18px] md:text-[20px] font-[900] text-black leading-tight mb-1 truncate">{product.name}</h4>
      <p className="text-[16px] md:text-[17px] font-[800] text-black mb-3">${product.price} USD</p>
      
      {/* Add to Cart Icon Button */}
      <div className="bg-[#FFD700] w-10 h-10 rounded-xl flex items-center justify-center cursor-pointer hover:bg-black hover:text-white transition-all transform hover:scale-110 active:scale-95 shadow-sm">
        <ShoppingBag size={18} strokeWidth={2.5} />
      </div>
    </div>
  </div>
);

export default Bestseller;
