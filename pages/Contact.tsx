import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    destination: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    // Formatted message for WhatsApp
    const message = `New Website Enquiry \n\n Name: ${formData.fullName}\n Phone: ${formData.phone}\n Email: ${formData.email}\n Destination: ${formData.destination}\n Message: ${formData.message}`;

    // Open WhatsApp directly with proper encoding
    window.open(`https://wa.me/447501881114?text=${encodeURIComponent(message)}`, '_blank');

    setSubmitted(true);
    setIsSubmitting(false);

    // Reset form
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      destination: '',
      message: ''
    });

    // Reset submission state after 5 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

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

          {submitted ? (
            <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="material-symbols-outlined text-green-600 text-3xl">check_circle</span>
              </div>
              <h3 className="text-xl font-bold text-green-800 mb-2">Enquiry Received!</h3>
              <p className="text-green-600">Thank you for your enquiry. We'll contact you shortly via WhatsApp and Email!</p>
            </div>
          ) : (
            <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
              {error && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-600 text-sm">
                  {error}
                </div>
              )}
              <div className="flex flex-col md:flex-row gap-5">
                <label className="flex flex-col flex-1">
                  <p className="text-slate-900 text-sm font-semibold leading-normal pb-2">Full Name</p>
                  <input
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="flex w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-all placeholder:text-slate-400 text-base"
                    placeholder="John Doe"
                    required
                    type="text"
                  />
                </label>
                <label className="flex flex-col flex-1">
                  <p className="text-slate-900 text-sm font-semibold leading-normal pb-2">Phone Number</p>
                  <input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="flex w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-all placeholder:text-slate-400 text-base"
                    placeholder="+44 7xxx xxxxxx"
                    type="tel"
                    required
                  />
                </label>
              </div>
              <label className="flex flex-col w-full">
                <p className="text-slate-900 text-sm font-semibold leading-normal pb-2">Email Address</p>
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="flex w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-all placeholder:text-slate-400 text-base"
                  placeholder="john@example.com"
                  required
                  type="email"
                />
              </label>
              <label className="flex flex-col w-full relative">
                <p className="text-slate-900 text-sm font-semibold leading-normal pb-2">Destination Country</p>
                <div className="relative">
                  <select
                    name="destination"
                    value={formData.destination}
                    onChange={handleChange}
                    className="appearance-none flex w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-all text-base pr-10 cursor-pointer"
                    required
                  >
                    <option disabled value="">Select a destination</option>
                    <option value="Canada">Canada</option>
                    <option value="Schengen Area (Europe)">Schengen Area (Europe)</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="United States of America">United States of America</option>
                    <option value="Australia">Australia</option>
                    <option value="New Zealand">New Zealand</option>
                    <option value="Dubai (UAE)">Dubai (UAE)</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-500">
                    <span className="material-symbols-outlined">expand_more</span>
                  </div>
                </div>
              </label>
              <label className="flex flex-col w-full">
                <p className="text-slate-900 text-sm font-semibold leading-normal pb-2">Message</p>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="flex w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-all placeholder:text-slate-400 text-base min-h-[120px] resize-y"
                  placeholder="Tell us about your travel plans..."
                  required
                ></textarea>
              </label>
              <button
                className="mt-4 flex w-full cursor-pointer items-center justify-center gap-3 overflow-hidden rounded-lg h-12 px-5 bg-primary hover:bg-primary-hover transition-colors text-white text-base font-bold leading-normal tracking-[0.015em] shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="animate-spin material-symbols-outlined text-xl">progress_activity</span>
                    Sending...
                  </>
                ) : (
                  <>
                    <span className="material-symbols-outlined text-xl">send</span>
                    Submit Enquiry
                  </>
                )}
              </button>
            </form>
          )}

          <div className="mt-12 pt-8 border-t border-slate-100">
            <h3 className="text-sm font-bold text-primary uppercase tracking-widest mb-4">Contact Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a href="tel:+447501881114" className="flex items-center gap-3 group/item hover:bg-slate-50 p-2 rounded-lg transition-colors">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 group-hover/item:bg-primary/20 transition-colors text-primary">
                  <span className="material-symbols-outlined text-[20px]">call</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-slate-500">Phone</span>
                  <span className="text-sm font-medium text-slate-900">+44 7501 881114</span>
                </div>
              </a>
              <a href="mailto:info@ridaanholidays.co.uk" className="flex items-center gap-3 group/item hover:bg-slate-50 p-2 rounded-lg transition-colors">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 group-hover/item:bg-primary/20 transition-colors text-primary">
                  <span className="material-symbols-outlined text-[20px]">mail</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-slate-500">Email</span>
                  <span className="text-sm font-medium text-slate-900">info@ridaanholidays.co.uk</span>
                </div>
              </a>
              <a href="https://wa.me/447501881114" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group/item hover:bg-slate-50 p-2 rounded-lg transition-colors md:col-span-2">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-100 group-hover/item:bg-green-200 transition-colors text-green-600">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-slate-500">WhatsApp</span>
                  <span className="text-sm font-medium text-green-600">Chat with us instantly</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;