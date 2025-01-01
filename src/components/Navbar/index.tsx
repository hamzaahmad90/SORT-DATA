import React from 'react';
import { Menu, X, GraduationCap, LogIn } from 'lucide-react';
import { NavLink } from './NavLink';
import { MobileNavLink } from './MobileNavLink';

interface NavbarProps {
  onLoginClick: () => void;
}

const Navbar = ({ onLoginClick }: NavbarProps) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <GraduationCap className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">SORT</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#programs">Programs</NavLink>
            <NavLink href="#faculty">Faculty</NavLink>
            <NavLink href="#campus">Campus</NavLink>
            <button 
              onClick={onLoginClick}
              className="inline-flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-200"
            >
              <LogIn className="h-5 w-5 mr-1" />
              Login
            </button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
              Apply Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-500 hover:text-gray-600"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <MobileNavLink href="#home">Home</MobileNavLink>
            <MobileNavLink href="#about">About</MobileNavLink>
            <MobileNavLink href="#programs">Programs</MobileNavLink>
            <MobileNavLink href="#faculty">Faculty</MobileNavLink>
            <MobileNavLink href="#campus">Campus</MobileNavLink>
            <button 
              onClick={onLoginClick}
              className="w-full text-left px-3 py-2 text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50 transition-colors duration-200 inline-flex items-center"
            >
              <LogIn className="h-5 w-5 mr-2" />
              Login
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;