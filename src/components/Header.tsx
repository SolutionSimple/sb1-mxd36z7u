import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navigation = [
  { name: 'Support Informatique', href: '/support' },
  { name: 'Gestion de Projets', href: '/projets' },
  { name: 'Analyse et Optimisation', href: '/analyse' },
  { name: 'Solutions IA', href: '/ia' }
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-dark-900/95 backdrop-blur-lg shadow-lg shadow-gold-500/5' : 'bg-transparent'
    }`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex lg:flex-1"
        >
          <Link to="/" className="flex items-center space-x-2">
            <img className="h-10 w-auto" src="/src/assets/logo.png" alt="Solution Simple" />
            <span className="font-semibold text-gold-400">Solution Simple</span>
          </Link>
        </motion.div>

        <div className="flex lg:hidden">
          <button
            type="button"
            className="rounded-full p-2.5 text-gold-300 hover:bg-gold-500/10 transition-colors"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden lg:flex lg:gap-x-8"
        >
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`nav-link ${location.pathname === item.href ? 'text-gold-400 after:w-full' : ''}`}
            >
              {item.name}
            </Link>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="hidden lg:flex lg:flex-1 lg:justify-end"
        >
          <Link to="/contact" className="button-primary">
            Contactez-nous
          </Link>
        </motion.div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lg:hidden"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/30 backdrop-blur-sm"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-dark-800/95 backdrop-blur-lg px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gold-500/10"
            >
              <div className="flex items-center justify-between">
                <Link to="/" className="flex items-center space-x-2">
                  <img className="h-8 w-auto" src="/src/assets/logo.png" alt="Solution Simple" />
                  <span className="font-semibold text-gold-400">Solution Simple</span>
                </Link>
                <button
                  type="button"
                  className="rounded-full p-2.5 text-gold-300 hover:bg-gold-500/10 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <X className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`block rounded-lg px-3 py-2 text-base font-medium leading-7 hover:bg-gold-500/10 transition-colors ${
                        location.pathname === item.href ? 'text-gold-400 bg-gold-500/5' : 'text-gold-200'
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6">
                  <Link
                    to="/contact"
                    className="button-primary w-full text-center"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Contactez-nous
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}