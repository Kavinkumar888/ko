import React from 'react'

const Footer = ({ setCurrentPage }) => {
  const handleFooterNavigation = (page) => {
    setCurrentPage(page)
    // Scroll to top when navigating
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
                <i className="fas fa-utensils"></i>
              </div>
              <span className="text-xl font-bold text-emerald-400">Kokappi Foods</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Serving authentic South Indian cuisine with love and tradition since 2010. 
              Experience the real taste of home-made food.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="social-icon bg-gray-800 hover:bg-emerald-500 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-icon bg-gray-800 hover:bg-emerald-500 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="social-icon bg-gray-800 hover:bg-emerald-500 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-icon bg-gray-800 hover:bg-emerald-500 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300">
                <i className="fab fa-whatsapp"></i>
              </a>
              <a href="#" className="social-icon bg-gray-800 hover:bg-emerald-500 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3 className="text-lg font-semibold mb-6 text-emerald-400 border-b border-emerald-500 pb-2">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <span 
                  onClick={() => handleFooterNavigation('home')} 
                  className="flex items-center text-gray-300 hover:text-emerald-400 cursor-pointer transition-colors duration-300"
                >
                  <i className="fas fa-chevron-right text-xs mr-2 text-emerald-500"></i> Home
                </span>
              </li>
              <li>
                <span 
                  onClick={() => handleFooterNavigation('menu')} 
                  className="flex items-center text-gray-300 hover:text-emerald-400 cursor-pointer transition-colors duration-300"
                >
                  <i className="fas fa-chevron-right text-xs mr-2 text-emerald-500"></i> Menu
                </span>
              </li>
              <li>
                <span 
                  onClick={() => handleFooterNavigation('about')} 
                  className="flex items-center text-gray-300 hover:text-emerald-400 cursor-pointer transition-colors duration-300"
                >
                  <i className="fas fa-chevron-right text-xs mr-2 text-emerald-500"></i> About Us
                </span>
              </li>
              <li>
                <span 
                  onClick={() => handleFooterNavigation('contact')} 
                  className="flex items-center text-gray-300 hover:text-emerald-400 cursor-pointer transition-colors duration-300"
                >
                  <i className="fas fa-chevron-right text-xs mr-2 text-emerald-500"></i> Contact
                </span>
              </li>
              <li>
                <span 
                  onClick={() => handleFooterNavigation('cart')} 
                  className="flex items-center text-gray-300 hover:text-emerald-400 cursor-pointer transition-colors duration-300"
                >
                  <i className="fas fa-chevron-right text-xs mr-2 text-emerald-500"></i> Cart
                </span>
              </li>
            </ul>
          </div>

          {/* Popular Categories */}
          <div className="footer-section">
            <h3 className="text-lg font-semibold mb-6 text-emerald-400 border-b border-emerald-500 pb-2">Popular Categories</h3>
            <ul className="space-y-3">
              <li>
                <span className="flex items-center text-gray-300 hover:text-emerald-400 cursor-pointer transition-colors duration-300">
                  <i className="fas fa-utensils text-sm mr-2 text-emerald-500"></i> Biryani
                </span>
              </li>
              <li>
                <span className="flex items-center text-gray-300 hover:text-emerald-400 cursor-pointer transition-colors duration-300">
                  <i className="fas fa-bread-slice text-sm mr-2 text-emerald-500"></i> Tiffin
                </span>
              </li>
              <li>
                <span className="flex items-center text-gray-300 hover:text-emerald-400 cursor-pointer transition-colors duration-300">
                  <i className="fas fa-drumstick-bite text-sm mr-2 text-emerald-500"></i> Chicken
                </span>
              </li>
              <li>
                <span className="flex items-center text-gray-300 hover:text-emerald-400 cursor-pointer transition-colors duration-300">
                  <i className="fas fa-fish text-sm mr-2 text-emerald-500"></i> Seafood
                </span>
              </li>
              <li>
                <span className="flex items-center text-gray-300 hover:text-emerald-400 cursor-pointer transition-colors duration-300">
                  <i className="fas fa-ice-cream text-sm mr-2 text-emerald-500"></i> Desserts
                </span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h3 className="text-lg font-semibold mb-6 text-emerald-400 border-b border-emerald-500 pb-2">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <i className="fas fa-map-marker-alt text-emerald-500 mt-1 mr-3"></i>
                <div className="text-gray-300">
                  <div>123 Food Street</div>
                  <div>Chennai, Tamil Nadu - 600001</div>
                </div>
              </div>
              <div className="flex items-start">
                <i className="fas fa-phone text-emerald-500 mt-1 mr-3"></i>
                <div className="text-gray-300">
                  <div>+91 98765 43210</div>
                  <div>+91 87654 32109</div>
                </div>
              </div>
              <div className="flex items-start">
                <i className="fas fa-envelope text-emerald-500 mt-1 mr-3"></i>
                <div className="text-gray-300">
                  <div>info@kokappifoods.com</div>
                  <div>order@kokappifoods.com</div>
                </div>
              </div>
              <div className="flex items-start">
                <i className="fas fa-clock text-emerald-500 mt-1 mr-3"></i>
                <div className="text-gray-300">
                  <div>Monday - Sunday</div>
                  <div>7:00 AM - 11:00 PM</div>
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
            <div className="payment-methods flex space-x-4">
              <i className="fab fa-cc-visa text-gray-400 hover:text-white text-xl transition-colors duration-300" title="Visa"></i>
              <i className="fab fa-cc-mastercard text-gray-400 hover:text-white text-xl transition-colors duration-300" title="MasterCard"></i>
              <i className="fab fa-cc-paypal text-gray-400 hover:text-white text-xl transition-colors duration-300" title="PayPal"></i>
              <i className="fab fa-google-pay text-gray-400 hover:text-white text-xl transition-colors duration-300" title="Google Pay"></i>
              <i className="fab fa-cc-apple-pay text-gray-400 hover:text-white text-xl transition-colors duration-300" title="Apple Pay"></i>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer