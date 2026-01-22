import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row flex-1 overflow-hidden font-display">
      {/* Image Side */}
      <div className="relative w-full lg:w-1/2 h-64 lg:h-auto overflow-hidden group">
        <img alt="Beautiful coastal town in Croatia with boats and historic buildings" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" src="/images/croatia-coastal-town.jpeg" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-8 lg:p-16 z-10 w-full">
          <div className="flex flex-col gap-4">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white w-fit">
              <span className="material-symbols-outlined text-sm">public</span>
              Global Destinations
            </span>
            <h1 className="text-white tracking-tight text-4xl lg:text-6xl font-brand leading-tight max-w-[600px] drop-shadow-lg">
              Start Your Journey Today
            </h1>
            <p className="text-gray-200 text-lg font-medium leading-relaxed max-w-[500px]">
              Expert visa services for your dream destinations. Let us handle the paperwork while you pack your bags.
            </p>
          </div>
        </div>
      </div>

      {/* Form Side */}
      <div className="w-full lg:w-1/2 bg-white overflow-y-auto">
        <div className="h-full flex flex-col justify-center px-6 py-12 lg:px-20 lg:py-16 max-w-2xl mx-auto">
          <div className="mb-10">
            <h1 className="text-primary tracking-tight text-4xl font-brand leading-tight mb-3">Book Your Consultation</h1>
            <p className="text-slate-500 text-base font-normal leading-normal">
              Fill out the form below and our experts will get back to you within 24 hours to plan your next adventure.
            </p>
          </div>
          <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col md:flex-row gap-5">
              <label className="flex flex-col flex-1">
                <p className="text-slate-900 text-sm font-semibold leading-normal pb-2">Full Name</p>
                <input className="flex w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-all placeholder:text-slate-400 text-base" placeholder="John Doe" required type="text" />
              </label>
              <label className="flex flex-col flex-1">
                <p className="text-slate-900 text-sm font-semibold leading-normal pb-2">Phone Number</p>
                <input className="flex w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-all placeholder:text-slate-400 text-base" placeholder="+1 (555) 000-0000" type="tel" />
              </label>
            </div>
            <label className="flex flex-col w-full">
              <p className="text-slate-900 text-sm font-semibold leading-normal pb-2">Email Address</p>
              <input className="flex w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-all placeholder:text-slate-400 text-base" placeholder="john@example.com" required type="email" />
            </label>
            <label className="flex flex-col w-full relative">
              <p className="text-slate-900 text-sm font-semibold leading-normal pb-2">Destination Country</p>
              <div className="relative">
                <select className="appearance-none flex w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-all text-base pr-10 cursor-pointer">
                  <option disabled selected value="">Select a destination</option>
                  <option value="canada">Canada</option>
                  <option value="schengen">Schengen Area (Europe)</option>
                  <option value="uk">United Kingdom</option>
                  <option value="usa">United States of America</option>
                  <option value="australia">Australia</option>
                  <option value="dubai">Dubai (UAE)</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-500">
                  <span className="material-symbols-outlined">expand_more</span>
                </div>
              </div>
            </label>
            <label className="flex flex-col w-full">
              <p className="text-slate-900 text-sm font-semibold leading-normal pb-2">Message</p>
              <textarea className="flex w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-all placeholder:text-slate-400 text-base min-h-[120px] resize-y" placeholder="Tell us about your travel plans..."></textarea>
            </label>
            <button className="mt-4 flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary hover:bg-primary-hover transition-colors text-white text-base font-bold leading-normal tracking-[0.015em] shadow-md hover:shadow-lg" type="submit">
              Submit Request
            </button>
          </form>
          <div className="mt-12 pt-8 border-t border-slate-100">
            <h3 className="text-sm font-bold text-primary uppercase tracking-widest mb-4">Contact Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 group/item">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 group-hover/item:bg-primary/20 transition-colors text-primary">
                  <span className="material-symbols-outlined text-[20px]">call</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-slate-500">Phone</span>
                  <span className="text-sm font-medium text-slate-900">+44 7501 881114</span>
                </div>
              </div>
              <div className="flex items-center gap-3 group/item">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 group-hover/item:bg-primary/20 transition-colors text-primary">
                  <span className="material-symbols-outlined text-[20px]">mail</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-slate-500">Email</span>
                  <span className="text-sm font-medium text-slate-900">info@ridaanholidays.co.uk</span>
                </div>
              </div>
              <div className="flex items-center gap-3 group/item md:col-span-2">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 group-hover/item:bg-primary/20 transition-colors text-primary">
                  <span className="material-symbols-outlined text-[20px]">location_on</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-slate-500">Office</span>
                  <span className="text-sm font-medium text-slate-900">123 Travel Lane, Suite 400, New York, NY 10001</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;