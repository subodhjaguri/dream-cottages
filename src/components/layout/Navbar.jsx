import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Home, Ruler, Package, Image, Phone, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navigation = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'About', href: '/about', icon: Info },
  {
    name: 'Services',
    icon: Ruler,
    children: [
      { name: 'Design Services', href: '/services/design' },
      { name: 'Build Services', href: '/services/build' },
    ],
  },
  { name: 'Products', href: '/products', icon: Package },
  { name: 'Gallery', href: '/gallery', icon: Image },
  { name: 'Contact', href: '/contact', icon: Phone },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setServicesOpen(false);
  }, [location]);

  const isHomePage = location.pathname === '/';
  const navBackground = isScrolled || !isHomePage
    ? 'bg-white shadow-md'
    : 'bg-transparent';
  const textColor = isScrolled || !isHomePage
    ? 'text-dark'
    : 'text-white';
  const logoColor = isScrolled || !isHomePage
    ? 'text-primary'
    : 'text-white';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBackground}`}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className={`w-10 h-10 rounded-lg bg-primary flex items-center justify-center ${isScrolled || !isHomePage ? '' : 'bg-white/20 backdrop-blur-sm'}`}>
              <Home className={`w-6 h-6 ${isScrolled || !isHomePage ? 'text-white' : 'text-white'}`} />
            </div>
            <span className={`font-heading font-bold text-xl ${logoColor}`}>
              Make My Dream Cottages
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) =>
              item.children ? (
                <div key={item.name} className="relative">
                  <button
                    className={`flex items-center space-x-1 font-medium transition-colors ${textColor} hover:text-accent`}
                    onClick={() => setServicesOpen(!servicesOpen)}
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <span>{item.name}</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2"
                        onMouseEnter={() => setServicesOpen(true)}
                        onMouseLeave={() => setServicesOpen(false)}
                      >
                        {item.children.map((child) => (
                          <NavLink
                            key={child.name}
                            to={child.href}
                            className={({ isActive }) =>
                              `block px-4 py-2 text-sm transition-colors ${
                                isActive
                                  ? 'bg-primary/10 text-primary'
                                  : 'text-dark hover:bg-gray-100'
                              }`
                            }
                          >
                            {child.name}
                          </NavLink>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className={({ isActive }) =>
                    `font-medium transition-colors ${
                      isActive
                        ? 'text-accent'
                        : `${textColor} hover:text-accent`
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              )
            )}
            <Link
              to="/contact"
              className="btn-primary"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className={`lg:hidden p-2 ${textColor}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t shadow-lg overflow-hidden relative z-60"
          >
            <div className="container-custom py-4 space-y-2 bg-white relative z-50">
              {navigation.map((item) =>
                item.children ? (
                  <div key={item.name}>
                    <button
                      className="flex items-center justify-between w-full py-3 text-dark font-medium"
                      onClick={() => setServicesOpen(!servicesOpen)}
                    >
                      <div className="flex items-center space-x-3">
                        <item.icon className="w-5 h-5 text-primary" />
                        <span>{item.name}</span>
                      </div>
                      <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                    </button>
                    <AnimatePresence>
                      {servicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="pl-8 space-y-2"
                        >
                          {item.children.map((child) => (
                            <NavLink
                              key={child.name}
                              to={child.href}
                              className={({ isActive }) =>
                                `block py-2 text-sm ${
                                  isActive ? 'text-primary' : 'text-gray-600'
                                }`
                              }
                            >
                              {child.name}
                            </NavLink>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <NavLink
                    key={item.name}
                    to={item.href}
                    className={({ isActive }) =>
                      `flex items-center space-x-3 py-3 ${
                        isActive ? 'text-primary' : 'text-dark'
                      }`
                    }
                  >
                    <item.icon className="w-5 h-5 text-primary" />
                    <span className="font-medium">{item.name}</span>
                  </NavLink>
                )
              )}
              <div className="pt-4">
                <Link
                  to="/contact"
                  className="btn-primary w-full text-center block"
                >
                  Get Quote
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
