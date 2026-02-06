
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Category from './components/Category';
import Bestseller from './components/Bestseller';
import DealOfTheWeek from './components/DealOfTheWeek';
import AboutSummary from './components/About';
import Reservation from './components/Reservation';
import Gallery from './components/Gallery';
import AboutHero from './components/AboutHero';
import AboutIntro from './components/AboutIntro';
import Sponsors from './components/Sponsors';
import HowWeWork from './components/HowWeWork';
import History from './components/History';
import Services from './components/Services';
import Experts from './components/Experts';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import ContactHero from './components/ContactHero';
import ContactContent from './components/ContactContent';
import ContactHours from './components/ContactHours';
import ServicesHero from './components/ServicesHero';
import ServiceOccasions from './components/ServiceOccasions';
import ServiceStats from './components/ServiceStats';
import ServiceAppPromo from './components/ServiceAppPromo';
import ChefHero from './components/ChefHero';
import ChefProfile from './components/ChefProfile';
import ChefBio from './components/ChefBio';

type Page = 'home' | 'about' | 'contact' | 'services' | 'chef-details';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderHome = () => (
    <>
      <Hero />
      <Category />
      <Bestseller />
      <DealOfTheWeek />
      <AboutSummary />
      <Reservation />
      <Gallery />
    </>
  );

  const renderAbout = () => (
    <>
      <AboutHero />
      <AboutIntro />
      <Sponsors />
      <HowWeWork />
      <History />
      <Services />
      <Experts />
      <Testimonials />
    </>
  );

  const renderContact = () => (
    <>
      <ContactHero />
      <ContactContent />
      <ContactHours />
    </>
  );

  const renderServices = () => (
    <>
      <ServicesHero />
      <ServiceOccasions />
      <ServiceStats />
      <ServiceAppPromo />
      <Gallery />
      <Reservation />
    </>
  );

  const renderChefDetails = () => (
    <>
      <ChefHero />
      <ChefProfile />
      <ChefBio />
    </>
  );

  return (
    <div className="min-h-screen bg-white">
      <Header onPageChange={setCurrentPage} currentPage={currentPage} />
      <main>
        {currentPage === 'home' && renderHome()}
        {currentPage === 'about' && renderAbout()}
        {currentPage === 'contact' && renderContact()}
        {currentPage === 'services' && renderServices()}
        {currentPage === 'chef-details' && renderChefDetails()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
