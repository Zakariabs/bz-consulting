import React from 'react';

function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-100 shadow-sm sticky top-0 z-20">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="inline-block w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center text-white text-2xl font-bold mr-2">Z</span>
          <span className="font-bold text-xl text-gray-800">Zakaria Basraoui</span>
        </div>
        <div className="hidden md:flex gap-8 text-gray-700 font-medium">
          <a href="#over-mij" className="hover:text-blue-600 transition-colors">Over Mij</a>
          <a href="#diensten" className="hover:text-blue-600 transition-colors">Diensten</a>
          <a href="#tarieven" className="hover:text-blue-600 transition-colors">Tarieven</a>
          <a href="#extras" className="hover:text-blue-600 transition-colors">Pakketten</a>
          <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
