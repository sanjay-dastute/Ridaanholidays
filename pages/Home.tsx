import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const HERO_IMAGES = [
  "/images/1094079.jpg", // High-res landscape
  "/images/Canada.jpg", // Canada
  "/images/banff.png", // Banff National Park, Canada
  "/images/zurich.webp", // Paris, France
  "/images/Paris.jpg", // Paris, France
  "/images/Australia 1.jpg", // Australia
  "/images/Singapore.jpg", // Singapore
  "/images/Thailand.jpg", // Thailand
  "/images/scottish-highlands.png", // Scottish Highlands, UK
  "/images/santorini-blue-domes.jpeg", // Santorini, Greece
  "/images/UAE.jpg", // United Arab Emirates
  "/images/stonehenge.png", // Stonehenge, UK

];


const HERO_CONTENT = [
  {
    title: (
      <>
        START YOUR <span className="text-primary drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">JOURNEY</span> TODAY
      </>
    ),
    desc: (
      <>
        Schengen visa <span className="text-primary">appointment</span> for only <span className="text-primary">£69</span> , available in <span className="text-primary">one week</span>.
      </>
    )
  },
  {
    title: (
      <>
        WORLDWIDE <span className="text-primary drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">VISITOR VISA</span> ASSISTANCE
      </>
    ),
    desc: "Simple, reliable support for tourist visas across the globe."
  },
  {
    title: (
      <>
        WE SPECIALIZE <span className="text-primary drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">EXCLUSIVELY</span> IN VISITOR VISAS
      </>
    ),
    desc: "From USA and UK to Europe (Schengen), Canada, Australia, UAE, Singapore, Thailand, and beyond — we’ve got you covered."
  },
  {
    title: (
      <>
        COMPLETE <span className="text-primary drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">VISA FILE PREPARATION</span> & SUPPORT
      </>
    ),
    desc: "We plan your appointment according to your travel dates and will provide hands-on one to one support for the entire process."
  }
];

const Home: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % HERO_IMAGES.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const currentContent = HERO_CONTENT[currentImageIndex % HERO_CONTENT.length];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative h-[400px] sm:h-[500px] md:h-[600px] w-full overflow-hidden flex items-center justify-center">
        {/* Background Slideshow */}
        {HERO_IMAGES.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-all duration-[2000ms] ease-in-out ${index === currentImageIndex ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
              }`}
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.65) 100%), url("${img}")`,
            }}
          />
        ))}

        <div className="flex flex-col max-w-[1200px] px-6 text-center z-10 relative">

          <div className="min-h-[160px] flex flex-col justify-center items-center transition-all duration-500">
            <h2 key={`title-${currentImageIndex}`}
              className="text-white text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold uppercase tracking-wide leading-tight max-w-4xl mx-auto drop-shadow-2xl font-promo px-4 mb-3 animate-fade-in-up">
              {currentContent.title}
            </h2>
            <p key={`desc-${currentImageIndex}`} className="text-slate-50 text-lg sm:text-xl md:text-2xl font-bold leading-relaxed max-w-4xl mx-auto drop-shadow-lg font-promo px-4 animate-fade-in-up animation-delay-200">
              {currentContent.desc}
            </p>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="relative w-full bg-white py-12 sm:py-16 md:py-24 border-b border-slate-100" id="why-us">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
          <div className="text-center">
            <h2 className="text-slate-900 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-brand mb-4 sm:mb-6">Why Choose Ridaan Holidays?</h2>
            <div className="w-16 sm:w-24 h-1.5 bg-primary mx-auto mb-6 sm:mb-10"></div>
            <h3 className="text-primary text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-6 uppercase tracking-tight font-display">Worldwide Visitor Visa Services</h3>
            <p className="text-slate-600 max-w-4xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed font-medium font-display px-2">
              Dreaming of travelling abroad? 🌍 <br></br> We specialize exclusively in visitor visas.
              We make visitor visas simple and stress-free.
              From USA and UK to Europe (Schengen), Canada, Australia, UAE, Singapore, Thailand, and beyond — we’ve got you covered.           </p>
          </div>
        </div>
      </div>

      {/* Destinations Grid */}
      <div className="relative w-full py-24 bg-background-light" id="destinations">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-10">
          <div className="mb-16 text-center md:text-left">
            <h2 className="text-slate-900 text-4xl md:text-5xl font-brand leading-tight">Visitor Visas We Offer Worldwide</h2>
            <div className="w-24 h-1.5 bg-primary mt-6 mb-10 mx-auto md:mx-0"></div>
            <p className="text-slate-700 text-xl leading-relaxed font-display">
              We handle complete paperwork and prepare your file.
              We plan your appointment according to your travel dates and will provide hands-on one to one support for the entire process
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
            {/* Canada Card */}
            <div className="group flex flex-col bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all hover:-translate-y-2 border border-slate-100">
              <div className="w-full aspect-[4/3] bg-center bg-no-repeat bg-cover relative" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBpMZGS0shuc9tIf2g5DAuUenZVOvjGYlSDyEG9tuNDdF77_swRF72sTppG_uBPVH2PRDuNiIhPG9fE9zwg0jON4N5iGEhrU-8G1k8-OdV81-s-WXMDnPM6vfbYuxxllJ7bxi0aovvYBQmt0F6iFF-cVKHHSnPWRX6Rx8_g1iiYW2tl7DFw24m3OB6YKw7kIUtvK9x1Z3dS9KJg-Ut0lWzFIaY97ndmgPCRcc7hYkzeNLM3WOgWW0Ck6j_1-LhgekY6eiUnD-cSX_2g")' }}>
                <div className="absolute top-3 right-3">
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-slate-900 text-xl font-bold font-display">Canada</h3>
                  <span className="text-primary font-black text-lg">£350</span>
                </div>
                <p className="text-slate-500 text-sm mb-6 font-medium leading-relaxed font-display">Complete visitor visa support for the Great White North.</p>
                <Link to="/services/canada" className="mt-auto block text-center w-full py-3 border-2 border-primary text-primary text-xs font-black uppercase tracking-widest hover:bg-primary hover:text-white transition-all rounded">View Details</Link>
              </div>
            </div>

            {/* Schengen Card */}
            <div className="group flex flex-col bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all hover:-translate-y-2 border border-slate-100">
              <div className="w-full aspect-[4/3] bg-center bg-no-repeat bg-cover relative" style={{ backgroundImage: 'url("/images/Eiffel Tower.jpeg")' }}>
                <div className="absolute top-3 right-3">
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-slate-900 text-xl font-bold font-display">Schengen Area</h3>
                  <span className="text-primary font-black text-lg">£69</span>
                </div>
                <p className="text-slate-500 text-sm mb-6 font-medium leading-relaxed font-display">Visitor visa appointments in 1 week with full application.</p>
                <Link to="/services/schengen" className="mt-auto block text-center w-full py-3 border-2 border-primary text-primary text-xs font-black uppercase tracking-widest hover:bg-primary hover:text-white transition-all rounded">View Details</Link>
              </div>
            </div>

            {/* UK Card */}
            <div className="group flex flex-col bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all hover:-translate-y-2 border border-slate-100">
              <div className="w-full aspect-[4/3] bg-center bg-no-repeat bg-cover relative" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=1000")' }}>
                <div className="absolute top-3 right-3">
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-slate-900 text-xl font-bold font-display">United Kingdom</h3>
                  <span className="text-primary font-black text-lg">£270</span>
                </div>
                <p className="text-slate-500 text-sm mb-6 font-medium leading-relaxed font-display">UK-based support and full application guidance.</p>
                <Link to="/services/uk" className="mt-auto block text-center w-full py-3 border-2 border-primary text-primary text-xs font-black uppercase tracking-widest hover:bg-primary hover:text-white transition-all rounded">View Details</Link>
              </div>
            </div>

            {/* USA Card */}
            <div className="group flex flex-col bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all hover:-translate-y-2 border border-slate-100">
              <div className="w-full aspect-[4/3] bg-center bg-no-repeat bg-cover relative" style={{ backgroundImage: 'url("/images/statue-of-liberty.jpeg")' }}>
                <div className="absolute top-3 right-3">
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-slate-900 text-xl font-bold font-display">USA</h3>
                  <span className="text-primary font-black text-lg">£350</span>
                </div>
                <p className="text-slate-500 text-sm mb-6 font-medium leading-relaxed font-display">Comprehensive interview preparation for USA visas.</p>
                <Link to="/services/usa" className="mt-auto block text-center w-full py-3 border-2 border-primary text-primary text-xs font-black uppercase tracking-widest hover:bg-primary hover:text-white transition-all rounded">View Details</Link>
              </div>
            </div>

            {/* Australia Card */}
            <div className="group flex flex-col bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all hover:-translate-y-2 border border-slate-100">
              <div className="w-full aspect-[4/3] bg-center bg-no-repeat bg-cover relative" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCEfbUZxd8NdvvR6UkVXLr3Wp-OyS_XpOgdPt4rSjxxKdm08wn-y4wHed3MPrCKqfuEO2U-Zg3BqjqTVgYmjcIcfQ6P_x14hRr1lT0EWKHJqJhmLZ9ntZKRDe9BA7Aspt_mVr4Qf7HTJ16JVL_m_7p1_3uojKtGZq4U_eOrkM2RHETs3QH7VaTBetpr4RF5MxFJvYeFbtimegQ6SPsHHNVjSCZ7hVWptPEg9hXk3FDuERGIOrZ2-f42SzyUMC98VuaTJPiMQljjWjvU")' }}>
                <div className="absolute top-3 right-3">
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-slate-900 text-xl font-bold font-display">Australia</h3>
                  <span className="text-primary font-black text-lg">£250</span>
                </div>
                <p className="text-slate-500 text-sm mb-6 font-medium leading-relaxed font-display">Explore the outback with simple digital visa processing.</p>
                <Link to="/services/australia" className="mt-auto block text-center w-full py-3 border-2 border-primary text-primary text-xs font-black uppercase tracking-widest hover:bg-primary hover:text-white transition-all rounded">View Details</Link>
              </div>
            </div>

            {/* New Zealand Card */}
            <div className="group flex flex-col bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all hover:-translate-y-2 border border-slate-100">
              <div className="w-full aspect-[4/3] bg-center bg-no-repeat bg-cover relative" style={{ backgroundImage: 'url("/images/hobbiton.png")' }}>
                <div className="absolute top-3 right-3">
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-slate-900 text-xl font-bold font-display">New Zealand</h3>
                  <span className="text-primary font-black text-lg">£250</span>
                </div>
                <p className="text-slate-500 text-sm mb-6 font-medium leading-relaxed font-display">Fully online eVisa process. No passport submission.</p>
                <Link to="/services/new-zealand" className="mt-auto block text-center w-full py-3 border-2 border-primary text-primary text-xs font-black uppercase tracking-widest hover:bg-primary hover:text-white transition-all rounded">View Details</Link>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="w-full py-32 bg-primary-light">
        <div className="w-full max-w-4xl mx-auto px-4 text-center">
          <div className="w-24 h-1.5 bg-primary mx-auto mb-12"></div>
          <h2 className="text-4xl md:text-6xl font-brand mb-10 text-slate-900">Ready to travel the world?</h2>
          <p className="text-slate-600 mb-16 max-w-2xl mx-auto text-xl leading-relaxed font-medium font-display">
            We handle the complete paperwork and prepare your file.
            We plan your appointment according to your travel dates and will provide hands on one to one support for the entire process.
            <br></br>
            <br></br>
            Ready to apply for your visa?
          </p>
          <Link to="/contact">
            <button className="inline-flex items-center justify-center h-20 px-16 bg-primary text-white font-black text-xl uppercase tracking-widest hover:bg-primary-hover transition-all shadow-2xl hover:scale-105 rounded-lg">
              Start Your Application Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;