import React, { useState } from 'react'
import logo from '../assets/KOLogo.png' // Adjust the path based on your file structure

const Navbar = ({ setCurrentPage, currentPage, cartItemsCount }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleNavigation = (page) => {
    setCurrentPage(page)
    setIsMenuOpen(false)
    // Scroll to top when navigating
    window.scrollTo(0, 0)
  }

  const isActive = (page) => currentPage === page

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div 
            className={`flex items-center space-x-3 text-xl font-bold cursor-pointer transition-colors duration-300 ${
              isActive('home') ? 'text-emerald-600' : 'text-gray-800 hover:text-emerald-600'
            }`}
            onClick={() => handleNavigation('home')}
          >
            {/* Company Logo Image */}
            <img 
              src={logo} 
              alt="KoKappi Foods" 
              className="w-10 h-10 object-contain"
            />
            <div className="flex flex-col">
              <span className="text-emerald-600 text-lg leading-5">KOKAAPI</span>
              <span className="text-gray-600 text-sm font-normal">FOODS</span>
            </div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <div 
              className={`nav-link px-3 py-2 rounded-md text-sm font-medium cursor-pointer transition-colors duration-300 ${
                isActive('home') 
                  ? 'bg-emerald-600 text-white' 
                  : 'text-gray-700 hover:bg-emerald-100 hover:text-emerald-600'
              }`}
              onClick={() => handleNavigation('home')}
            >
              Home
            </div>
            <div 
              className={`nav-link px-3 py-2 rounded-md text-sm font-medium cursor-pointer transition-colors duration-300 ${
                isActive('menu') 
                  ? 'bg-emerald-600 text-white' 
                  : 'text-gray-700 hover:bg-emerald-100 hover:text-emerald-600'
              }`}
              onClick={() => handleNavigation('menu')}
            >
              Menu
            </div>
            <div 
              className={`nav-link px-3 py-2 rounded-md text-sm font-medium cursor-pointer transition-colors duration-300 ${
                isActive('about') 
                  ? 'bg-emerald-600 text-white' 
                  : 'text-gray-700 hover:bg-emerald-100 hover:text-emerald-600'
              }`}
              onClick={() => handleNavigation('about')}
            >
              About
            </div>
            <div 
              className={`nav-link px-3 py-2 rounded-md text-sm font-medium cursor-pointer transition-colors duration-300 ${
                isActive('contact') 
                  ? 'bg-emerald-600 text-white' 
                  : 'text-gray-700 hover:bg-emerald-100 hover:text-emerald-600'
              }`}
              onClick={() => handleNavigation('contact')}
            >
              Contact
            </div>
            
            {/* Cart with better styling */}
            <div 
              className={`relative px-4 py-2 rounded-md text-sm font-medium cursor-pointer transition-colors duration-300 ${
                isActive('cart') 
                  ? 'bg-emerald-600 text-white' 
                  : 'text-gray-700 hover:bg-emerald-100 hover:text-emerald-600'
              }`}
              onClick={() => handleNavigation('cart')}
            >
              <div className="flex items-center space-x-2">
                <i className="fas fa-shopping-cart text-lg"></i>
                <span className="text-sm font-medium">Cart</span>
                {cartItemsCount > 0 && (
                  <span className="absolute -top-2 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center shadow-md">
                    {cartItemsCount}
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            {/* Cart icon for mobile (outside menu) */}
            <div 
              className={`relative p-2 rounded-md cursor-pointer transition-colors duration-300 ${
                isActive('cart') 
                  ? 'bg-emerald-600 text-white' 
                  : 'text-gray-700 hover:bg-emerald-100 hover:text-emerald-600'
              }`}
              onClick={() => handleNavigation('cart')}
            >
              <i className="fas fa-shopping-cart text-lg"></i>
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center text-[10px]">
                  {cartItemsCount}
                </span>
              )}
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-emerald-600 hover:bg-emerald-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-emerald-600 transition-colors duration-300"
            >
              <div className="space-y-1">
                <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
            <div 
              className={`block px-3 py-2 rounded-md text-base font-medium cursor-pointer transition-colors duration-300 ${
                isActive('home') 
                  ? 'bg-emerald-600 text-white' 
                  : 'text-gray-700 hover:bg-emerald-100 hover:text-emerald-600'
              }`}
              onClick={() => handleNavigation('home')}
            >
              Home
            </div>
            <div 
              className={`block px-3 py-2 rounded-md text-base font-medium cursor-pointer transition-colors duration-300 ${
                isActive('menu') 
                  ? 'bg-emerald-600 text-white' 
                  : 'text-gray-700 hover:bg-emerald-100 hover:text-emerald-600'
              }`}
              onClick={() => handleNavigation('menu')}
            >
              Menu
            </div>
            <div 
              className={`block px-3 py-2 rounded-md text-base font-medium cursor-pointer transition-colors duration-300 ${
                isActive('about') 
                  ? 'bg-emerald-600 text-white' 
                  : 'text-gray-700 hover:bg-emerald-100 hover:text-emerald-600'
              }`}
              onClick={() => handleNavigation('about')}
            >
              About
            </div>
            <div 
              className={`block px-3 py-2 rounded-md text-base font-medium cursor-pointer transition-colors duration-300 ${
                isActive('contact') 
                  ? 'bg-emerald-600 text-white' 
                  : 'text-gray-700 hover:bg-emerald-100 hover:text-emerald-600'
              }`}
              onClick={() => handleNavigation('contact')}
            >
              Contact
            </div>
            {/* Cart in mobile menu (without duplicate) */}
            <div 
              className={`block px-3 py-2 rounded-md text-base font-medium cursor-pointer transition-colors duration-300 ${
                isActive('cart') 
                  ? 'bg-emerald-600 text-white' 
                  : 'text-gray-700 hover:bg-emerald-100 hover:text-emerald-600'
              }`}
              onClick={() => handleNavigation('cart')}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <i className="fas fa-shopping-cart mr-3"></i>
                  <span>Cart</span>
                </div>
                {cartItemsCount > 0 && (
                  <span className="bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
                    {cartItemsCount}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar