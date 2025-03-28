import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpenIcon, 
  SearchIcon, 
  UserCircleIcon, 
  MenuIcon 
} from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <BookOpenIcon className="h-8 w-8 text-blue-600" />
          <span className="text-xl font-bold text-gray-800">KunBook</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          <Link to="/books" className="text-gray-700 hover:text-blue-600">
            Book Store
          </Link>
          <Link to="/categories" className="text-gray-700 hover:text-blue-600">
            Categories
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-blue-600">
            About
          </Link>
        </div>

        {/* Search and User Actions */}
        <div className="flex items-center space-x-4">
          {/* Search */}
          <div className="relative hidden md:block">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search books..."
              className="pl-10 pr-4 py-2 border rounded-md w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* User Actions */}
          <div className="flex items-center space-x-4">
            <Link to="/login" className="text-gray-700 hover:text-blue-600">
              <UserCircleIcon className="h-7 w-7" />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <MenuIcon className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <Link 
              to="/books" 
              className="block py-2 text-gray-700 hover:bg-gray-100"
            >
              Book Store
            </Link>
            <Link 
              to="/categories" 
              className="block py-2 text-gray-700 hover:bg-gray-100"
            >
              Categories
            </Link>
            <Link 
              to="/about" 
              className="block py-2 text-gray-700 hover:bg-gray-100"
            >
              About
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;