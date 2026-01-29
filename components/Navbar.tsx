import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const linkClass = (path: string) =>
    `text-sm font-bold transition-colors ${isActive(path)
      ? 'text-primary'
      : 'text-slate-700 hover:text-primary'
    }`;

  const closeMenu = () => setIsOpen(false);

  const isDropdownActive = location.pathname.includes('/services') && location.pathname !== '/services/schengen';

  return (
    <div className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img src="/images/logo-brand.png" alt="Ridaan Holidays" className="h-14 w-auto group-hover:scale-105 transition-transform" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex flex-1 justify-end gap-8 items-center">
            <nav className="flex gap-8">
              <Link to="/" className={linkClass('/')}>Home</Link>
              <Link to="/services/schengen" className={linkClass('/services/schengen')}>Schengen Visa</Link>
              <div className="relative group">
                <button className={`flex items-center gap-1 ${isDropdownActive ? 'text-primary' : 'text-slate-700'} text-sm font-bold hover:text-primary`}>
                  Other Visas <span className="material-symbols-outlined text-[16px]">expand_more</span>
                </button>
                <div className="absolute top-full left-0 w-56 pt-1 hidden group-hover:block before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-2 before:-translate-y-full">
                  <div className="bg-white shadow-xl rounded-xl p-2 border border-slate-100">
                    <Link to="/services/canada" className="block px-4 py-2 text-sm text-slate-700 hover:bg-primary-light hover:text-primary rounded-lg">Canada Visa</Link>
                    <Link to="/services/uk" className="block px-4 py-2 text-sm text-slate-700 hover:bg-primary-light hover:text-primary rounded-lg">UK Visa</Link>
                    <Link to="/services/usa" className="block px-4 py-2 text-sm text-slate-700 hover:bg-primary-light hover:text-primary rounded-lg">USA Visa</Link>
                    <Link to="/services/australia" className="block px-4 py-2 text-sm text-slate-700 hover:bg-primary-light hover:text-primary rounded-lg">Australia Visa</Link>
                    <Link to="/services/new-zealand" className="block px-4 py-2 text-sm text-slate-700 hover:bg-primary-light hover:text-primary rounded-lg">New Zealand Visa</Link>
                  </div>
                </div>
              </div>
              <Link to="/terms" className={linkClass('/terms')}>Terms</Link>
              <Link to="/contact" className={linkClass('/contact')}>Contact Us</Link>
            </nav>
            <Link to="/contact">
              <button className="bg-primary hover:bg-primary-hover text-white text-sm font-bold py-3 px-6 rounded-lg transition-all shadow-lg shadow-primary/30 flex items-center gap-2 transform hover:-translate-y-0.5">
                <span className="material-symbols-outlined text-[18px]">calendar_month</span>
                <span>Book Consultation</span>
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-slate-600 hover:text-primary"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="material-symbols-outlined">menu</span>
          </button>
        </header>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 p-4 shadow-lg absolute w-full max-h-[calc(100vh-80px)] overflow-y-auto">
          <nav className="flex flex-col gap-4">
            <Link to="/" className="text-sm font-bold text-slate-700" onClick={closeMenu}>Home</Link>
            <Link to="/services/schengen" className="text-sm font-bold text-slate-700" onClick={closeMenu}>Schengen Visa</Link>
            <div className="space-y-2 pl-4 border-l-2 border-slate-100">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Other Destinations</span>
              <Link to="/services/canada" className="block text-sm font-medium text-slate-600 hover:text-primary" onClick={closeMenu}>Canada</Link>
              <Link to="/services/uk" className="block text-sm font-medium text-slate-600 hover:text-primary" onClick={closeMenu}>United Kingdom</Link>
              <Link to="/services/usa" className="block text-sm font-medium text-slate-600 hover:text-primary" onClick={closeMenu}>USA</Link>
              <Link to="/services/australia" className="block text-sm font-medium text-slate-600 hover:text-primary" onClick={closeMenu}>Australia</Link>
              <Link to="/services/new-zealand" className="block text-sm font-medium text-slate-600 hover:text-primary" onClick={closeMenu}>New Zealand</Link>
            </div>
            <Link to="/terms" className="text-sm font-bold text-slate-700" onClick={closeMenu}>Terms</Link>
            <Link to="/contact" className="text-sm font-bold text-primary" onClick={closeMenu}>Contact Us</Link>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Navbar;