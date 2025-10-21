import React from 'react'

const Footer = ({ setCurrentPage }) => {
  const handleFooterNavigation = (page) => {
    setCurrentPage(page)
    window.scrollTo(0, 0)
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="footer-section">
            <div className="flex items-center mb-4">
              <div className="text-2xl text-emerald-500 mr-3">
                <span>🍛</span>
              </div>
              <span className="text-xl font-bold text-emerald-400">Kokaapi Foods</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Serving authentic South Indian cuisine with love and tradition since 2010. 
              Experience the real taste of home-made food.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/share/1BD73fDUkV/" className="bg-gray-800 hover:bg-emerald-500 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300">
                <img src="./facebook.png" alt="Facebook" className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-emerald-500 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300">
                <img src="./inst.png" alt="Instagram" className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-emerald-500 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300">
                <img src="./youtube.png" alt="Twitter" className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links with simple arrows */}
          <div className="footer-section">
            <h3 className="text-lg font-semibold mb-6 text-emerald-400 border-b border-emerald-500 pb-2">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <span 
                  onClick={() => handleFooterNavigation('home')} 
                  className="flex items-center text-gray-300 hover:text-emerald-400 cursor-pointer transition-colors duration-300"
                >
                  <span className="text-xs mr-2 text-emerald-500">➤</span> Home
                </span>
              </li>
              <li>
                <span 
                  onClick={() => handleFooterNavigation('menu')} 
                  className="flex items-center text-gray-300 hover:text-emerald-400 cursor-pointer transition-colors duration-300"
                >
                  <span className="text-xs mr-2 text-emerald-500">➤</span> Menu
                </span>
              </li>
              <li>
                <span 
                  onClick={() => handleFooterNavigation('about')} 
                  className="flex items-center text-gray-300 hover:text-emerald-400 cursor-pointer transition-colors duration-300"
                >
                  <span className="text-xs mr-2 text-emerald-500">➤</span> About Us
                </span>
              </li>
              <li>
                <span 
                  onClick={() => handleFooterNavigation('contact')} 
                  className="flex items-center text-gray-300 hover:text-emerald-400 cursor-pointer transition-colors duration-300"
                >
                  <span className="text-xs mr-2 text-emerald-500">➤</span> Contact
                </span>
              </li>
              <li>
                <span 
                  onClick={() => handleFooterNavigation('cart')} 
                  className="flex items-center text-gray-300 hover:text-emerald-400 cursor-pointer transition-colors duration-300"
                >
                  <span className="text-xs mr-2 text-emerald-500">➤</span> Cart
                </span>
              </li>
            </ul>
          </div>

          {/* Popular Categories with emojis */}
          <div className="footer-section">
            <h3 className="text-lg font-semibold mb-6 text-emerald-400 border-b border-emerald-500 pb-2">Popular Categories</h3>
            <ul className="space-y-3">
              <li>
                <span className="flex items-center text-gray-300 hover:text-emerald-400 cursor-pointer transition-colors duration-300">
                  <span className="text-sm mr-2 text-emerald-500">🍛</span> Biryani
                </span>
              </li>
              <li>
                <span className="flex items-center text-gray-300 hover:text-emerald-400 cursor-pointer transition-colors duration-300">
                  <span className="text-sm mr-2 text-emerald-500">🥪</span> Tiffin
                </span>
              </li>
              <li>
                <span className="flex items-center text-gray-300 hover:text-emerald-400 cursor-pointer transition-colors duration-300">
                  <span className="text-sm mr-2 text-emerald-500">🍗</span> Chicken
                </span>
              </li>
              <li>
                <span className="flex items-center text-gray-300 hover:text-emerald-400 cursor-pointer transition-colors duration-300">
                  <span className="text-sm mr-2 text-emerald-500">🐟</span> Seafood
                </span>
              </li>
              <li>
                <span className="flex items-center text-gray-300 hover:text-emerald-400 cursor-pointer transition-colors duration-300">
                  <span className="text-sm mr-2 text-emerald-500">🍦</span> Desserts
                </span>
              </li>
            </ul>
          </div>

          {/* Contact Info with emojis */}
          <div className="footer-section">
            <h3 className="text-lg font-semibold mb-6 text-emerald-400 border-b border-emerald-500 pb-2">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="text-emerald-500 mt-1 mr-3">📍</span>
                <div className="text-gray-300">
                  <div>299,Vannathikuttai,West Rajapalayam,Pethanaickanpalayam(tK),</div>
                  <div>Valapadi,Salem, Tamil Nadu - 636115</div>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-emerald-500 mt-1 mr-3">📞</span>
                <div className="text-gray-300">
                  <div>+91 80152 85690</div>
                  <div>+91 80567 24909</div>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-emerald-500 mt-1 mr-3">✉️</span>
                <div className="text-gray-300">
                  <div>Kokaapikokappi@gmail.com</div>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-emerald-500 mt-1 mr-3">⏰</span>
                <div className="text-gray-300">
                  <div>Monday - Sunday</div>
                  <div>6:30 AM - 8:00 PM</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="copyright">
              <p className="text-gray-400 text-sm">&copy; 2024 Kokappi Foods. All rights reserved.</p>
            </div>
            <div className="footer-bottom-links flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-emerald-400 text-sm transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 text-sm transition-colors duration-300">Terms & Conditions</a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 text-sm transition-colors duration-300">Refund Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer