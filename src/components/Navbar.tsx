import React from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';


const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const menuItems = ['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact'];

  return (
    <nav className="fixed w-full bg-slate-900/95 backdrop-blur-md z-50 border-b border-slate-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <img src={logo} alt='logo' className='w-9 h-9 object-contain' />
            <span className="ml-2 font-serif text-xl font-bold text-slate-100">Harrison Itotia</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {menuItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-slate-300 hover:text-green-400 px-3 py-2 text-sm font-medium transition-colors font-mono uppercase tracking-wider"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-300 hover:text-green-400 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-slate-800 border-t border-slate-600">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {menuItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-slate-300 hover:text-green-400 block px-3 py-2 text-base font-medium font-mono uppercase tracking-wider"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;