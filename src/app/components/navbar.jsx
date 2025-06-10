import React from 'react';

const Navbar = () => (
  <nav className="fixed top-0 left-0 w-full flex items-center justify-between p-6 z-50">
    <div>
      <img src="/images/navbar/logo.png" alt="Histare Logo" className="h-16 w-auto" />
    </div>
    <div>
      <button className="focus:outline-none text-gray-600 text-2xl">
        &#8942;
      </button>
    </div>
  </nav>
);

export default Navbar;
