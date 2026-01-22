import React from 'react';
import { Link } from 'react-router-dom';

const CanadaVisa: React.FC = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      {/* Breadcrumb */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <Link to="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-primary transition-colors text-sm font-bold group">
          <span className="material-symbols-outlined text-[18px] group-hover:-translate-x-1 transition-transform">arrow_back</span>
          Back to Services
        </Link>
        <div className="hidden sm:flex text-sm text-slate-400 gap-2">
          <Link to="/" className="hover:text-primary">Home</Link>
          <span>/</span>
          <span>Visa Services</span>
          <span>/</span>
          <span className="text-slate-900 font-bold">Canada</span>
        </div>
      </div>

      {/* Hero Banner */}
      <div className="relative h-[350px] sm:h-[400px] md:h-[500px] rounded-2xl sm:rounded-3xl overflow-hidden mb-8 sm:mb-12 group shadow-2xl">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCeAZBT5Rhmm26AyNZq4rViVlqgqXL9WgN6GddBjSMwrgrc_QVkHm6C0daxGPR-PCQ7EOMIs2uewRR_N9TGX-o51oicbw_H7JMtEzoUGrSTt3Tu0tv-530ZsK_zsD4xCseGpoS-y6RwCqvWdBsFl_WFG9BMUFJiMsXGkfjpLamX8tW_4eP1PH3Ayz_zffZm4Tp8_gB6MyoQ2rD5q2eGrIxwe5vWOwBnLsuaaIrOVwPKCIKMJyevjzOILL2f2FAV97PGrDYzI8rpyQ7w")' }}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-4 sm:p-6 md:p-12 text-white w-full">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 md:gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-primary px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-3 sm:mb-6 text-white shadow-lg">
                <span className="material-symbols-outlined text-xs sm:text-sm">public</span> North America
              </div>
              <h1 className="font-brand text-3xl sm:text-4xl md:text-5xl lg:text-7xl mb-2 sm:mb-4 text-white">Canada Visitor Visa</h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-200 font-medium max-w-xl hidden sm:block">Experience the majestic landscapes of the Great White North with our hassle-free visa processing.</p>
            </div>
            <div className="bg-white text-slate-900 px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-6 rounded-xl sm:rounded-2xl shadow-[0_20px_50px_rgba(228,30,38,0.3)] w-full sm:w-auto sm:min-w-[200px] md:min-w-[240px] border-b-4 border-primary">
              <p className="text-[10px] sm:text-xs text-slate-400 font-bold uppercase tracking-widest mb-1">Total Package</p>
              <p className="text-2xl sm:text-3xl md:text-4xl font-black text-primary">£350 <span className="text-xs sm:text-sm font-bold text-slate-400 inline">All Included</span></p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
        <div className="lg:col-span-2 space-y-12">
          {/* Support Section */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-4 font-display">
              <span className="w-12 h-12 rounded-2xl bg-primary text-white flex items-center justify-center shadow-lg shadow-primary/20">
                <span className="material-symbols-outlined text-2xl">assignment_turned_in</span>
              </span>
              Comprehensive Visa Support
            </h2>
            <div className="bg-white border border-slate-100 rounded-3xl p-8 md:p-10 card-shadow">
              <ul className="space-y-8">
                <li className="flex items-start gap-5">
                  <div className="bg-primary/10 p-2.5 rounded-xl mt-1">
                    <span className="material-symbols-outlined text-primary text-2xl font-bold block">check</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Full application preparation</h3>
                    <p className="text-slate-500 mt-2 text-base leading-relaxed">We handle all the tedious paperwork, ensuring every form is filled correctly to maximize your approval chances.</p>
                  </div>
                </li>
                <li className="flex items-start gap-5">
                  <div className="bg-primary/10 p-2.5 rounded-xl mt-1">
                    <span className="material-symbols-outlined text-primary text-2xl font-bold block">calendar_clock</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Early biometric appointment assistance</h3>
                    <p className="text-slate-500 mt-2 text-base leading-relaxed">Don't wait months for an appointment. We help secure the earliest available slots for your biometrics.</p>
                  </div>
                </li>
                <li className="flex items-start gap-5">
                  <div className="bg-primary/10 p-2.5 rounded-xl mt-1">
                    <span className="material-symbols-outlined text-primary text-2xl font-bold block">verified_user</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Clear guidance & strategy</h3>
                    <p className="text-slate-500 mt-2 text-base leading-relaxed">Receive a personalized checklist of documents and expert advice on how to present your travel history and finances.</p>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          {/* Rules Section */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-4 font-display">
              <span className="w-12 h-12 rounded-2xl bg-primary text-white flex items-center justify-center shadow-lg shadow-primary/20">
                <span className="material-symbols-outlined text-2xl">gavel</span>
              </span>
              Rules & Process
            </h2>
            <div className="bg-white border border-slate-100 rounded-3xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { icon: 'info', text: 'Visitor visa only' },
                  { icon: 'block', text: 'No work or study permitted' },
                  { icon: 'admin_panel_settings', text: 'Embassy decision is final' },
                  { icon: 'history', text: 'Standard processing times apply' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 text-slate-800 bg-slate-50 p-5 rounded-2xl border border-slate-200/60">
                    <span className="material-symbols-outlined text-primary font-bold">{item.icon}</span>
                    <span className="font-bold">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Destinations Grid */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-4 font-display">
              <span className="w-12 h-12 rounded-2xl bg-primary text-white flex items-center justify-center shadow-lg shadow-primary/20">
                <span className="material-symbols-outlined text-2xl">photo_camera</span>
              </span>
              Must-Visit Destinations
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="group relative overflow-hidden rounded-3xl aspect-[16/10] md:col-span-2 cursor-pointer shadow-xl">
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: 'url("/images/cn-tower.png")' }}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8">
                  <h3 className="font-brand text-white text-3xl mb-3">CN Tower, Toronto</h3>
                  <p className="text-slate-200 text-sm max-w-lg leading-relaxed">An engineering marvel and the heart of Toronto's skyline. Experience the glass floor and the rotating restaurant for unforgettable views.</p>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-3xl aspect-square cursor-pointer shadow-xl">
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: 'url("/images/niagara-falls.png")' }}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8">
                  <h3 className="font-brand text-white text-2xl mb-2">Niagara Falls</h3>
                  <p className="text-slate-200 text-xs leading-relaxed opacity-90">Witness the awe-inspiring power of the falls from a boat tour or the scenic boardwalks.</p>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-3xl aspect-square cursor-pointer shadow-xl">
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: 'url("/images/banff.png")' }}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8">
                  <h3 className="font-brand text-white text-2xl mb-2">Banff National Park</h3>
                  <p className="text-slate-200 text-xs leading-relaxed opacity-90">Explore turquoise lakes, glaciers, and mountain peaks in Canada's oldest national park.</p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Sidebar Sticky */}
        <div className="lg:col-span-1">
          <div className="sticky top-28 space-y-6">
            <div className="bg-white border-2 border-primary rounded-3xl p-8 card-shadow overflow-hidden relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 pointer-events-none"></div>
              <h3 className="text-xl font-bold text-slate-900 mb-6 relative z-10 font-display">Start Your Journey</h3>
              <div className="flex items-baseline gap-2 mb-8 relative z-10">
                <span className="text-5xl font-black text-primary">£350</span>
                <span className="text-slate-400 font-bold text-sm">/ applicant</span>
              </div>
              <Link to="/contact">
                <button className="w-full bg-primary hover:bg-primary-hover text-white font-bold py-5 px-6 rounded-2xl shadow-[0_12px_30px_-5px_rgba(228,30,38,0.4)] transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-3 mb-4 relative z-10 text-lg">
                  <span>Book This Visa</span>
                  <span className="material-symbols-outlined">arrow_forward</span>
                </button>
              </Link>
              <p className="text-center text-xs text-slate-400 font-bold mb-8 relative z-10 uppercase tracking-widest">Secure processing • No hidden fees</p>
              <div className="space-y-5 border-t border-slate-100 pt-8 relative z-10">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-500 font-semibold flex items-center gap-3">
                    <span className="material-symbols-outlined text-[20px] text-primary">hourglass_top</span> Processing
                  </span>
                  <span className="font-bold text-slate-900">1 Week</span>
                </div>
              </div>
            </div>

            <div className="bg-primary/5 border-2 border-primary/10 rounded-2xl p-6 flex items-start gap-5">
              <div className="w-10 h-10 rounded-full bg-primary flex-shrink-0 flex items-center justify-center text-white shadow-md">
                <span className="material-symbols-outlined text-[20px]">support_agent</span>
              </div>
              <div>
                <h4 className="text-base font-bold text-slate-900 mb-1">Need help?</h4>
                <p className="text-sm text-slate-600 leading-relaxed font-medium">
                  Our visa experts are available 24/7 to answer your questions.
                </p>
                <Link to="/contact" className="text-sm font-black text-primary mt-3 hover:underline inline-block">Contact Support Now</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CanadaVisa;