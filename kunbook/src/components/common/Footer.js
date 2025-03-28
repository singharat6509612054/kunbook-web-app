import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FacebookIcon, 
  TwitterIcon, 
  InstagramIcon 
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-12">
      <div className="container mx-auto px-4 grid md:grid-cols-4 gap-8">
        {/* Brand Section */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-gray-800">KunBook</h3>
          <p className="text-gray-600">
            Your ultimate online e-book reading platform.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-4 text-gray-800">Quick Links</h4>
          <nav className="space-y-2">
            <Link to="/books" className="block text-gray-600 hover:text-blue-600">
              Book Store
            </Link>
            <Link to="/categories" className="block text-gray-600 hover:text-blue-600">
              Categories
            </Link>
            <Link to="/about" className="block text-gray-600 hover:text-blue-600">
              About Us
            </Link>
          </nav>
        </div>

        {/* Support */}
        <div>
          <h4 className="font-semibold mb-4 text-gray-800">Support</h4>
          <nav className="space-y-2">
            <Link to="/help" className="block text-gray-600 hover:text-blue-600">
              Help Center
            </Link>
            <Link to="/contact" className="block text-gray-600 hover:text-blue-600">
              Contact Us
            </Link>
            <Link to="/faq" className="block text-gray-600 hover:text-blue-600">
              FAQ
            </Link>
          </nav>
        </div>

        {/* Social Links */}
        <div>
          <h4 className="font-semibold mb-4 text-gray-800">Connect With Us</h4>
          <div className="flex space-x-4">
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600"
            >
              <FacebookIcon className="h-6 w-6" />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600"
            >
              <TwitterIcon className="h-6 w-6" />
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600"
            >
              <InstagramIcon className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-8 pt-4 border-t border-gray-200 text-gray-600">
        © {new Date().getFullYear()} KunBook. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;