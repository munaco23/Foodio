
import React, { useState } from 'react';
import { Phone, Mail, User, Search, ShoppingBag, ChevronDown, ChevronUp, Menu, X } from 'lucide-react';

interface HeaderProps {
  onPageChange: (page: 'home' | 'about' | 'contact' | 'services' | 'chef-details') => void;
  currentPage: string;
}

const Header: React.FC<HeaderProps> = ({ onPageChange, currentPage }) => {
  const [isPagesOpen, setIsPagesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full relative z-[100]">
      {/* Top Bar */}
      <div className="bg-[#FFD700] py-3 px-4 md:px-12 flex justify-between items-center text-[11px] md:text-[13px] font-extrabold text-black">
        <div className="flex items-center space-x-4 md:space-x-6">
          <div className="flex items-center space-x-2">
            <div className="bg-[#FF1A4D] p-1 rounded-full text-white shadow-sm">
              <Phone size={12} strokeWidth={2.5} />
            </div>
            <span className="hidden md:inline">Phone: +1(850) 12 34 56</span>
            <span className="md:hidden">+1(850) 12 34 56</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="bg-[#FF1A4D] p-1 rounded-full text-white shadow-sm">
              <Mail size={12} strokeWidth={2.5} />
            </div>
            <span className="hidden md:inline">Email: info@domain.com</span>
            <span className="md:hidden">info@domain.com</span>
          </div>
        </div>
        
        <div className="hidden md:flex items-center space-x-6">
          <div className="flex space-x-6">
            <a href="#" className="underline decoration-black decoration-2 underline-offset-4 hover:opacity-70 transition-opacity">Twitter</a>
            <a href="#" className="underline decoration-black decoration-2 underline-offset-4 hover:opacity-70 transition-opacity">Facebook</a>
            <a href="#" className="underline decoration-black decoration-2 underline-offset-4 hover:opacity-70 transition-opacity">Instagram</a>
          </div>

          <div className="flex items-center space-x-2 cursor-pointer hover:opacity-80 transition-opacity">
            <User size={18} strokeWidth={2} />
            <span className="text-[14px]">Log in/ Register</span>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav className="bg-white py-4 md:py-6 px-4 md:px-12 flex justify-between items-center border-b border-gray-50 relative">
        {/* Logo Section */}
        <div className="flex flex-col items-center cursor-pointer" onClick={() => onPageChange('home')}>
          <div className="flex items-baseline">
            <span className="text-[32px] md:text-[44px] font-[900] tracking-tight text-[#1a1a1a] leading-none">F</span>
            <div className="flex -space-x-1 items-baseline mx-0.5 translate-y-1">
              <div className="relative">
                <div className="w-[16px] md:w-[22px] h-[16px] md:h-[22px] bg-[#FF1A4D] rounded-full flex items-center justify-center">
                   <div className="w-1 h-1 bg-white rounded-full -mt-1 ml-1 opacity-60"></div>
                </div>
                <div className="absolute -top-3.5 -right-0.5 w-3 h-4 border-t-2 border-r-2 border-[#FF1A4D] rounded-tr-xl"></div>
              </div>
              <div className="relative">
                <div className="w-[16px] md:w-[22px] h-[16px] md:h-[22px] bg-[#FF1A4D] rounded-full flex items-center justify-center">
                   <div className="w-1 h-1 bg-white rounded-full -mt-1 ml-1 opacity-60"></div>
                </div>
                <div className="absolute -top-3.5 -right-0.5 w-3 h-4 border-t-2 border-r-2 border-[#FF1A4D] rounded-tr-xl"></div>
              </div>
            </div>
            <span className="text-[32px] md:text-[44px] font-[900] tracking-tight text-[#1a1a1a] leading-none">dio</span>
          </div>
          <span className="text-[8px] md:text-[10px] tracking-[0.3em] font-black text-gray-400 -mt-0.5 uppercase">FOOD & RESTAURANT</span>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="xl:hidden flex items-center justify-center p-2 rounded-lg hover:bg-gray-100 transition-colors"
        >
          {isMobileMenuOpen ? <X size={24} strokeWidth={2} /> : <Menu size={24} strokeWidth={2} />}
        </button>

        {/* Navigation Links - Desktop */}
        <ul className="hidden xl:flex items-center space-x-8 md:space-x-12 font-[800] text-[14px] md:text-[16px] text-[#1a1a1a]">
          <li>
            <button 
              onClick={() => onPageChange('home')} 
              className={`transition-all ${currentPage === 'home' ? 'text-[#FF1A4D] underline decoration-[#FF1A4D] decoration-[3px] underline-offset-[14px]' : 'hover:text-[#FF1A4D]'}`}
            >
              Home
            </button>
          </li>
          <li>
            <a href="#" className="flex items-center gap-1.5 hover:text-[#FF1A4D] transition-colors">
              Menus <ChevronDown size={18} strokeWidth={2.5} className="text-gray-400" />
            </a>
          </li>
          
          <li 
            className="relative"
            onMouseEnter={() => setIsPagesOpen(true)}
            onMouseLeave={() => setIsPagesOpen(false)}
          >
            <button className={`flex items-center gap-1.5 transition-colors ${(currentPage === 'about' || currentPage === 'contact' || currentPage === 'services' || currentPage === 'chef-details') ? 'text-[#FF1A4D] underline decoration-[#FF1A4D] decoration-[3px] underline-offset-[14px]' : 'hover:text-[#FF1A4D]'}`}>
              Pages {isPagesOpen ? <ChevronUp size={18} strokeWidth={2.5} className="text-[#1a1a1a]" /> : <ChevronDown size={18} strokeWidth={2.5} className="text-gray-400" />}
            </button>

            {isPagesOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-10 w-[240px]">
                <div className="bg-[#FFD700] rounded-[32px] overflow-hidden shadow-2xl relative">
                  <div className="absolute top-0 left-0 right-0 h-[8px] bg-[#FF1A4D]"></div>
                  <ul className="py-6 flex flex-col">
                    <li className="px-10 py-4">
                      <button 
                        onClick={() => { onPageChange('about'); setIsPagesOpen(false); }} 
                        className="text-[18px] font-[900] text-black hover:opacity-70 transition-opacity w-full text-left"
                      >
                        About Us
                      </button>
                    </li>
                    <div className="mx-8 border-t border-black/10"></div>
                    <li className="px-10 py-4">
                      <button 
                        onClick={() => { onPageChange('contact'); setIsPagesOpen(false); }} 
                        className="text-[18px] font-[900] text-black hover:opacity-70 transition-opacity w-full text-left"
                      >
                        Contact Us
                      </button>
                    </li>
                    <div className="mx-8 border-t border-black/10"></div>
                    <li className="px-10 py-4">
                      <button 
                        onClick={() => { onPageChange('services'); setIsPagesOpen(false); }} 
                        className="text-[18px] font-[900] text-black hover:opacity-70 transition-opacity w-full text-left"
                      >
                        Our Services
                      </button>
                    </li>
                    <div className="mx-8 border-t border-black/10"></div>
                    <li className="px-10 py-4">
                      <button 
                        onClick={() => { onPageChange('chef-details'); setIsPagesOpen(false); }} 
                        className="text-[18px] font-[900] text-black hover:opacity-70 transition-opacity w-full text-left"
                      >
                        Chef Details
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </li>

          <li><a href="#" className="hover:text-[#FF1A4D] transition-colors">News</a></li>
          <li>
            <button 
              onClick={() => onPageChange('contact')} 
              className={`transition-all ${currentPage === 'contact' ? 'text-[#FF1A4D] underline decoration-[#FF1A4D] decoration-[3px] underline-offset-[14px]' : 'hover:text-[#FF1A4D]'}`}
            >
              Contact
            </button>
          </li>
        </ul>

        {/* Action Icons and Button - Desktop */}
        <div className="hidden lg:flex items-center space-x-6 md:space-x-10">
          <div className="flex items-center space-x-4 md:space-x-6">
            <Search className="cursor-pointer hover:text-[#FF1A4D] transition-colors" size={20} md:size={24} strokeWidth={1.5} />
            <div className="relative cursor-pointer hover:text-[#FF1A4D] transition-colors">
              <ShoppingBag size={20} md:size={24} strokeWidth={1.5} />
            </div>
          </div>
          
          <div className="relative hidden md:inline-flex items-center group">
            <div className="absolute inset-0 border-2 border-[#FF1A4D] rounded-[18px] transition-all duration-200 group-hover:left-1 group-hover:right-1 group-hover:top-1 group-hover:bottom-1"></div>
            <div className="relative p-1.5">
              <button className="bg-[#FF1A4D] text-white px-4 md:px-6 py-2.5 md:py-3 rounded-[14px] font-extrabold text-[12px] md:text-[14px] whitespace-nowrap shadow-md transition-transform duration-200 hover:scale-[1.02]">
                Reserve A Table
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="xl:hidden fixed inset-0 z-[90] bg-white">
          <div className="flex flex-col h-full">
            {/* Mobile Menu Header */}
            <div className="flex justify-between items-center p-4 border-b border-gray-100">
              <div className="flex flex-col items-center cursor-pointer" onClick={() => { onPageChange('home'); setIsMobileMenuOpen(false); }}>
                <div className="flex items-baseline">
                  <span className="text-[32px] font-[900] tracking-tight text-[#1a1a1a] leading-none">F</span>
                  <div className="flex -space-x-1 items-baseline mx-0.5 translate-y-1">
                    <div className="relative">
                      <div className="w-[16px] h-[16px] bg-[#FF1A4D] rounded-full flex items-center justify-center">
                        <div className="w-1 h-1 bg-white rounded-full -mt-1 ml-1 opacity-60"></div>
                      </div>
                      <div className="absolute -top-3.5 -right-0.5 w-3 h-4 border-t-2 border-r-2 border-[#FF1A4D] rounded-tr-xl"></div>
                    </div>
                    <div className="relative">
                      <div className="w-[16px] h-[16px] bg-[#FF1A4D] rounded-full flex items-center justify-center">
                        <div className="w-1 h-1 bg-white rounded-full -mt-1 ml-1 opacity-60"></div>
                      </div>
                      <div className="absolute -top-3.5 -right-0.5 w-3 h-4 border-t-2 border-r-2 border-[#FF1A4D] rounded-tr-xl"></div>
                    </div>
                  </div>
                  <span className="text-[32px] font-[900] tracking-tight text-[#1a1a1a] leading-none">dio</span>
                </div>
                <span className="text-[8px] tracking-[0.3em] font-black text-gray-400 -mt-0.5 uppercase">FOOD & RESTAURANT</span>
              </div>
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <X size={24} strokeWidth={2} />
              </button>
            </div>

            {/* Mobile Menu Items */}
            <div className="flex-1 overflow-y-auto p-4">
              <ul className="space-y-4">
                <li>
                  <button 
                    onClick={() => { onPageChange('home'); setIsMobileMenuOpen(false); }} 
                    className={`block w-full text-left py-3 px-4 rounded-lg transition-all ${currentPage === 'home' ? 'text-[#FF1A4D] bg-[#FF1A4D]/10' : 'hover:bg-gray-100'}`}
                  >
                    Home
                  </button>
                </li>
                <li>
                  <a href="#" className="flex items-center gap-2 py-3 px-4 rounded-lg hover:bg-gray-100 transition-colors">
                    Menus <ChevronDown size={18} strokeWidth={2.5} className="text-gray-400" />
                  </a>
                </li>
                <li>
                  <button 
                    onClick={() => { onPageChange('about'); setIsMobileMenuOpen(false); }} 
                    className={`block w-full text-left py-3 px-4 rounded-lg transition-all ${currentPage === 'about' ? 'text-[#FF1A4D] bg-[#FF1A4D]/10' : 'hover:bg-gray-100'}`}
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => { onPageChange('contact'); setIsMobileMenuOpen(false); }} 
                    className={`block w-full text-left py-3 px-4 rounded-lg transition-all ${currentPage === 'contact' ? 'text-[#FF1A4D] bg-[#FF1A4D]/10' : 'hover:bg-gray-100'}`}
                  >
                    Contact
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => { onPageChange('services'); setIsMobileMenuOpen(false); }} 
                    className={`block w-full text-left py-3 px-4 rounded-lg transition-all ${currentPage === 'services' ? 'text-[#FF1A4D] bg-[#FF1A4D]/10' : 'hover:bg-gray-100'}`}
                  >
                    Our Services
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => { onPageChange('chef-details'); setIsMobileMenuOpen(false); }} 
                    className={`block w-full text-left py-3 px-4 rounded-lg transition-all ${currentPage === 'chef-details' ? 'text-[#FF1A4D] bg-[#FF1A4D]/10' : 'hover:bg-gray-100'}`}
                  >
                    Chef Details
                  </button>
                </li>
              </ul>
            </div>

            {/* Mobile Menu Footer */}
            <div className="p-4 border-t border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <Search className="cursor-pointer hover:text-[#FF1A4D] transition-colors" size={20} strokeWidth={1.5} />
                  <div className="relative cursor-pointer hover:text-[#FF1A4D] transition-colors">
                    <ShoppingBag size={20} strokeWidth={1.5} />
                  </div>
                </div>
                <div className="flex items-center space-x-2 cursor-pointer hover:opacity-80 transition-opacity">
                  <User size={18} strokeWidth={2} />
                  <span className="text-[12px]">Login</span>
                </div>
              </div>
              <button className="w-full bg-[#FF1A4D] text-white py-3 rounded-[14px] font-extrabold text-[14px] shadow-md transition-transform hover:scale-[1.02]">
                Reserve A Table
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
