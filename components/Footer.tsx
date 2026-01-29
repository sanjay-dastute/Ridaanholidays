import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white mt-auto pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <img src="/images/logo-brand.png" alt="Ridaan Holidays" className="h-12 w-auto" />
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Your trusted partner for global visa assistance and luxury travel planning. Experience the world without limits.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-widest text-sm">Destinations</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><Link to="/services/canada" className="hover:text-primary transition-colors font-medium">Canada</Link></li>
              <li><Link to="/services/schengen" className="hover:text-primary transition-colors font-medium">Schengen Area</Link></li>
              <li><Link to="/services/uk" className="hover:text-primary transition-colors font-medium">United Kingdom</Link></li>
              <li><Link to="/services/australia" className="hover:text-primary transition-colors font-medium">Australia</Link></li>

            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-widest text-sm">Company</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><Link to="/" className="hover:text-primary transition-colors font-medium">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors font-medium">Contact</Link></li>
              <li><Link to="/terms" className="hover:text-primary transition-colors font-medium">Terms & Conditions</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-widest text-sm">Contact</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[20px] text-primary">mail</span>
                info@ridaanholidays.co.uk
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[20px] text-primary">call</span>
                +44 7501 881114
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">© 2024 Ridaan Holidays. All rights reserved.</p>
          <div className="flex gap-4">
            {['FB', 'IN', 'TW'].map((social) => (
              <div key={social} className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-all cursor-pointer shadow-lg">
                <span className="font-black text-xs">{social}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;