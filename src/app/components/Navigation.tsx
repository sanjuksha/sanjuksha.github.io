import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Internships', href: '#internships' },
    { label: 'Impact', href: '#leadership' },
    { label: 'Projects', href: '#projects' },
    { label: 'Robocon', href: '#robocon' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className={`text-xl font-semibold transition-colors duration-300 ${isScrolled ? 'text-gray-900' : 'text-white'}`}
          >
            SN
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8 items-center">
            {navLinks.map(link => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className={`transition-colors duration-300 ${isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-300'}`}
              >
                {link.label}
              </button>
            ))}
            <a
              href="https://sanjuksha.github.io/Sanjuksha_Nirgude_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden transition-colors duration-300 ${isScrolled ? 'text-gray-900' : 'text-white'}`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden pt-4"
          >
            {navLinks.map(link => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="block w-full text-left py-2 text-gray-900 hover:text-blue-600 transition-colors"
              >
                {link.label}
              </button>
            ))}
            <a
              href="https://sanjuksha.github.io/Sanjuksha_Nirgude_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-left py-2 px-4 mt-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Resume
            </a>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
