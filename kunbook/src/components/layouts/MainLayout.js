import React from 'react';
import Navbar from '../common/Navbar';
import Footer from '../common/Footer';

const MainLayout = ({ children, className = '' }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className={`flex-grow container mx-auto px-4 py-6 ${className}`}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;