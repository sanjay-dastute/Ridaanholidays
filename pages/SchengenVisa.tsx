import React from 'react';
import { Link } from 'react-router-dom';

const SchengenVisa: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero Banner */}
      <div className="relative h-[300px] sm:h-[350px] md:h-[500px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url("/images/Eiffel Tower.jpeg")' }}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
        <div className="absolute inset-0 flex flex-col justify-end pb-6 sm:pb-12 md:pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="flex items-center gap-2 text-primary bg-white/10 backdrop-blur-md w-fit px-2 sm:px-3 py-1 rounded-full border border-white/20 mb-3 sm:mb-4">
              <span className="material-symbols-outlined text-[14px] sm:text-[18px]">public</span>
              <span className="text-xs sm:text-sm font-bold text-white tracking-wide">EUROPE TRAVEL</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl text-white mb-2 sm:mb-4 drop-shadow-lg font-brand">
              Schengen Visitor Visa
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-200 max-w-2xl leading-relaxed drop-shadow-sm font-medium hidden sm:block">
              Unlock access to 27 European countries with a single visa. Experience the culture, history, and beauty of Europe without borders.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">

        {/* Main Content Area - Centered */}
        <div className="max-w-5xl mx-auto space-y-12 mb-20">
          <div>
            <h2 className="text-3xl text-slate-900 mb-8 flex items-center gap-3 font-brand">
              <span className="material-symbols-outlined text-primary text-3xl">payments</span>
              Choose Your Plan
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Option 1 */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-primary/50 transition-colors relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1 bg-slate-300 group-hover:bg-primary transition-colors"></div>
                <div className="mb-4">
                  <h3 className="text-lg font-bold text-slate-900 font-display">Option 1: Appointment Only</h3>
                  <div className="mt-2 flex items-baseline gap-1">
                    <span className="text-3xl font-extrabold text-primary">£69</span>
                    <span className="text-sm text-slate-500">/ applicant</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-6">
                  {['Guaranteed appointment booking within a week',].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
                      <span className="material-symbols-outlined text-primary text-[18px] shrink-0">check_circle</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="block text-center w-full py-2.5 px-4 rounded-lg bg-primary text-white font-bold hover:bg-primary/90 transition-all text-sm shadow-lg shadow-primary/10">Select Basic</Link>
              </div>

              {/* Option 2 */}
              <div className="bg-white rounded-2xl p-6 border-2 border-primary/40 relative overflow-hidden shadow-xl shadow-primary/5 scale-[1.02]">
                <div className="absolute top-0 right-0 bg-primary text-white text-[10px] font-bold px-3 py-1.5 rounded-bl-lg uppercase tracking-wider">Most Popular</div>
                <div className="mb-4">
                  <h3 className="text-lg font-bold text-slate-900 font-display">Option 2: Full A-Z Service</h3>
                  <div className="mt-2 flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold text-primary">£169</span>
                    <span className="text-sm text-slate-500">/ applicant</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-6">

                  {['Detailed application form filling', 'Personal cover letter drafting', 'Travel itinerary creation'].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
                      <span className="material-symbols-outlined text-primary text-[18px] shrink-0">check_circle</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="block text-center w-full py-3 px-4 rounded-lg bg-primary text-white font-bold hover:bg-primary/90 transition-all text-sm shadow-lg shadow-primary/25">Select Full Service</Link>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { icon: 'event_available', title: 'Guaranteed Appointment', desc: 'Within 7 days of booking' },
              { icon: 'map', title: '27 Countries', desc: 'One visa, zero borders' },
              { icon: 'verified_user', title: 'Expert Review', desc: 'Error-free applications' },
              { icon: 'support_agent', title: 'Dedicated Support', desc: 'Guidance at every step' },
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 card-shadow flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-xl text-primary shrink-0">
                  <span className="material-symbols-outlined text-2xl">{item.icon}</span>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1 font-display">{item.title}</h3>
                  <p className="text-sm text-slate-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-red-50 rounded-2xl p-6 border border-red-100">
            <h3 className="text-lg font-bold text-primary mb-3 flex items-center gap-2">
              <span className="material-symbols-outlined">info</span>
              Important Information
            </h3>
            <p className="text-slate-700 text-sm leading-relaxed mb-4">
              Please note that the visa application fees charged by the embassy are separate from our service fees.
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li className="flex gap-2">
                <span className="material-symbols-outlined text-primary text-[18px] mt-0.5">flight</span>
                <span><strong>Flights:</strong> Flight tickets are the sole responsibility of the applicant. We provide dummy bookings for the application only.</span>
              </li>
              <li className="flex gap-2">
                <span className="material-symbols-outlined text-primary text-[18px] mt-0.5">health_and_safety</span>
                <span><strong>Insurance:</strong> Mandatory travel insurance is required but not included in our service fee. We can recommend trusted partners.</span>
              </li>
            </ul>
          </div>

          <div className="bg-primary rounded-2xl p-8 text-center md:text-left md:flex md:items-center md:justify-between overflow-hidden relative shadow-2xl shadow-primary/20">
            <div className="absolute top-0 right-0 -mt-4 -mr-4 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-white mb-2 font-brand tracking-wide">Ready to explore Europe?</h3>
              <p className="text-white/80 text-sm max-w-md font-medium">Don't let paperwork delay your dreams. Secure your appointment today and let us handle the rest.</p>
            </div>
            <div className="relative z-10 mt-6 md:mt-0">
              <Link to="/contact" className="bg-white text-primary hover:bg-slate-50 font-bold py-3.5 px-8 rounded-xl transition-all shadow-xl flex items-center gap-2">
                <span>Secure Your Appointment</span>
                <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Popular Destinations - Bottom Full Width */}
        <div className="border-t border-slate-200 pt-16">
          <div className="text-center mb-10">
            <h3 className="text-3xl text-slate-900 mb-4 font-brand">Popular Destinations</h3>
            <p className="text-slate-500 max-w-2xl mx-auto">Explore some of the most visited destinations across the Schengen Area.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Santorini, Greece', desc: 'Iconic blue domes and stunning sunsets.', img: '/images/santorini-blue-domes.jpeg' },
              { name: 'Copenhagen, Denmark', desc: 'Colorful Nyhavn harbor and hygge culture.', img: '/images/copenhagen-nyhavn.jpeg' },
              { name: 'Oia Village, Greece', desc: 'Charming streets and artisan shops.', img: '/images/santorini-oia-street.jpeg' },
            ].map((item, i) => (
              <div key={i} className="group cursor-pointer rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1">
                <div className="h-64 relative overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80"></div>
                  <div className="absolute bottom-0 left-0 p-6">
                    <h4 className="font-bold text-white text-xl mb-1">{item.name}</h4>
                    <p className="text-sm text-slate-200">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 pt-6 border-t border-slate-100 flex justify-center">
            <div className="flex items-center gap-4 text-slate-600 text-sm bg-white px-6 py-3 rounded-full shadow-sm border border-slate-100">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white flex items-center justify-center text-xs font-bold">JD</div>
                <div className="w-8 h-8 rounded-full bg-slate-300 border-2 border-white flex items-center justify-center text-xs font-bold">AS</div>
                <div className="w-8 h-8 rounded-full bg-primary border-2 border-white flex items-center justify-center text-xs font-bold text-white">+2k</div>
              </div>
              <p className="font-medium">Happy travelers this year</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchengenVisa;