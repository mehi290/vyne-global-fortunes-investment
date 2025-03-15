import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedLogo from './AnimatedLogo';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-[100] transition-all duration-300 ${
        isScrolled || isMobileMenuOpen ? 'bg-primary shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20 mt-8 md:mt-10">
          <Link to="/" className="flex items-center">
            <AnimatedLogo />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-secondary transition-colors font-medium">Home</Link>
            <Link to="/about" className="text-white hover:text-secondary transition-colors font-medium">About</Link>
            <Link to="/services" className="text-white hover:text-secondary transition-colors font-medium">Services</Link>
            <Link to="/contact" className="text-white hover:text-secondary transition-colors font-medium">Contact</Link>
            <Link 
              to="/consultation"
              className="bg-secondary hover:bg-secondary-light text-primary font-semibold px-6 py-2 rounded-md transition-colors"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-primary border-t border-gray-800">
            <div className="flex flex-col py-4">
              <Link 
                to="/" 
                className="text-white hover:text-secondary transition-colors px-4 py-3"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="text-white hover:text-secondary transition-colors px-4 py-3"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/services" 
                className="text-white hover:text-secondary transition-colors px-4 py-3"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                to="/contact" 
                className="text-white hover:text-secondary transition-colors px-4 py-3"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="px-4 py-3">
                <Link
                  to="/consultation" 
                  className="block w-full bg-secondary hover:bg-secondary-light text-primary font-semibold px-6 py-2 rounded-md transition-colors text-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;