import React from 'react';

const Terms: React.FC = () => {
  return (
    <div className="w-full flex justify-center py-10 px-4 md:px-8">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-10">
        <aside className="hidden lg:block lg:col-span-3">
          <div className="sticky top-24">
            <nav className="space-y-1">
            </nav>
            <div className="mt-8 p-4 bg-primary/5 rounded-xl border border-primary/10">
              <p className="text-sm font-medium text-slate-900 mb-2">Need help understanding?</p>
              <p className="text-xs text-slate-500 mb-3">Our support team is available to answer any questions.</p>
              <a href="#contact" className="text-xs font-bold text-primary hover:underline">Contact Support →</a>
            </div>
          </div>
        </aside>

        <main className="lg:col-span-9">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 md:p-12">
            <div className="border-b border-slate-100 pb-8 mb-8" id="intro">
              <div className="flex flex-wrap justify-between items-end gap-4">
                <div>
                  <h1 className="text-4xl md:text-5xl font-brand text-primary tracking-wide mb-3">Terms & Conditions</h1>
                  <p className="text-slate-500 text-sm font-medium flex items-center gap-2">
                    <span className="material-symbols-outlined text-[18px] text-primary">calendar_today</span>
                    Last Updated: October 26, 2023
                  </p>
                </div>
                <div className="hidden sm:block">
                  <button className="flex items-center gap-2 text-slate-400 hover:text-primary transition-colors text-sm font-medium" onClick={() => window.print()}>
                    <span className="material-symbols-outlined text-[20px]">print</span>
                    Print
                  </button>
                </div>
              </div>
              <div className="mt-6">
                <p className="text-slate-600 leading-relaxed font-display">
                  Welcome to Ridaan Holidays. These Terms and Conditions constitute a legally binding agreement made between you, whether personally or on behalf of an entity (“you”) and Ridaan Holidays (“we,” “us” or “our”), concerning your access to and use of our services. Please read these terms carefully before engaging our services.
                </p>
              </div>
            </div>

            <div className="space-y-12">
              {/* Sections */}
              <section className="scroll-mt-24" id="nature">
                <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3 font-display">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary text-sm font-bold">1</span>
                  Nature of Services
                </h2>
                <div className="text-slate-600 leading-loose font-display">
                  <p className="mb-4">
                    Ridaan Holidays acts as a facilitator and intermediary for travel-related services. We connect clients with third-party service providers such as airlines, hotels, tour operators, and visa consulates.
                  </p>
                  <p>
                    We do not own, operate, or directly control these third-party services. Therefore, while we strive to select reputable partners, Ridaan Holidays cannot be held liable for any acts, omissions, or negligence of these third-party providers. Your contract for these specific services is directly with the supplier, and their terms and conditions will apply in addition to ours.
                  </p>
                </div>
              </section>

              <section className="scroll-mt-24" id="visa">
                <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3 font-display">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary text-sm font-bold">2</span>
                  No Visa Guarantee
                </h2>
                <div className="text-slate-600 leading-loose font-display">
                  <p className="mb-4">
                    Please be explicitly advised that <strong>Ridaan Holidays does not guarantee the issuance of any visa</strong>. The decision to grant or deny a visa rests solely with the respective Embassy, Consulate, or High Commission.
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-slate-600 ml-1">
                    <li>We are not responsible for any rejection, delay, or errors made by the immigration authorities.</li>
                    <li>Visa fees are non-refundable once the application has been submitted to the authorities, regardless of the outcome.</li>
                    <li>Any timelines provided by us are estimates based on average processing times and are not binding.</li>
                  </ul>
                </div>
              </section>

              <section className="scroll-mt-24" id="fees">
                <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3 font-display">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary text-sm font-bold">3</span>
                  Fees & Payments
                </h2>
                <div className="text-slate-600 leading-loose space-y-4 font-display">
                  <p>
                    All prices quoted are in the local currency unless otherwise stated. Payment terms will be specified at the time of booking. Ridaan Holidays reserves the right to amend prices in the event of currency fluctuations, changes in government taxes, or supplier price increases prior to full payment.
                  </p>
                  <p>
                    <strong>Service Charges:</strong> We charge a service fee for our consultation and facilitation efforts. This fee is separate from the actual cost of the visa or travel booking and is non-refundable.
                  </p>
                  <p>
                    <strong>Payment Methods:</strong> We accept bank transfers, credit cards, and verified digital wallets. Ensure that you receive an official receipt for every payment made.
                  </p>
                </div>
              </section>

              <section className="scroll-mt-24" id="responsibilities">
                <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3 font-display">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary text-sm font-bold">4</span>
                  Client Responsibilities
                </h2>
                <div className="text-slate-600 leading-loose font-display">
                  <p className="mb-4">
                    To ensure smooth processing of your travel arrangements, you agree to:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-primary text-sm mt-1">check_circle</span>
                      <span>Provide accurate, complete, and truthful information on all forms and documents.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-primary text-sm mt-1">check_circle</span>
                      <span>Ensure your passport has a minimum validity of 6 months beyond your intended return date.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-primary text-sm mt-1">check_circle</span>
                      <span>Disclose any prior visa rejections or criminal records that may affect your application.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-primary text-sm mt-1">check_circle</span>
                      <span>Review all travel documents immediately upon receipt and notify us of any errors within 24 hours.</span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Contact Block */}
              <div className="bg-slate-900 rounded-xl p-8 md:p-10 relative overflow-hidden group" id="contact">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary via-slate-900 to-slate-900"></div>
                <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2 font-display">Have questions about these terms?</h3>
                    <p className="text-slate-400 max-w-md font-display">Our legal and support team is available to clarify any points regarding our service agreement.</p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button className="bg-primary hover:bg-primary-hover text-white font-bold py-3 px-6 rounded-lg transition-all shadow-lg hover:shadow-primary/25 flex items-center justify-center gap-2">
                      <span className="material-symbols-outlined">mail</span>
                      Email Legal Team
                    </button>
                    <button className="bg-transparent border border-primary/40 hover:border-primary text-white font-bold py-3 px-6 rounded-lg transition-all flex items-center justify-center gap-2">
                      <span className="material-symbols-outlined text-primary">call</span>
                      Call Us
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Terms;