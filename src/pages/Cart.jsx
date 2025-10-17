import React from 'react'

const Cart = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-orange-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Your <span className="text-orange-500">Cart</span>
          </h1>
          <div className="w-20 h-1 bg-orange-500 mx-auto rounded-full"></div>
        </div>
        
        {/* Empty Cart */}
        <div className="bg-white rounded-3xl shadow-2xl p-12 text-center transform hover:scale-105 transition-all duration-500 border border-orange-100">
          {/* Cart Icon */}
          <div className="relative mb-8">
            <div className="w-32 h-32 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-shopping-cart text-5xl text-orange-500"></i>
            </div>
            {/* Empty Indicator */}
            <div className="absolute top-0 right-1/2 transform translate-x-12 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-bold">0</span>
            </div>
          </div>
          
          {/* Message */}
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Your cart feels lonely 😔
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-md mx-auto leading-relaxed">
            It's empty now, but it could be filled with delicious food! 
            Explore our menu and treat yourself to something amazing.
          </p>
          
          {/* Decorative Elements */}
          <div className="flex justify-center space-x-4 mb-8">
            <div className="w-4 h-4 bg-orange-300 rounded-full animate-bounce"></div>
            <div className="w-4 h-4 bg-orange-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
            <div className="w-4 h-4 bg-orange-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
          </div>
          
          {/* Action Button */}
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl flex items-center justify-center mx-auto space-x-3">
            <i className="fas fa-utensils"></i>
            <span>Explore Menu</span>
            <i className="fas fa-arrow-right"></i>
          </button>
          
          {/* Quick Stats */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-4 bg-orange-50 rounded-2xl">
              <div className="text-2xl text-orange-500 mb-2">🚚</div>
              <h3 className="font-semibold text-gray-800">Free Delivery</h3>
              <p className="text-sm text-gray-600">On orders above ₹299</p>
            </div>
            <div className="p-4 bg-orange-50 rounded-2xl">
              <div className="text-2xl text-orange-500 mb-2">⏰</div>
              <h3 className="font-semibold text-gray-800">Fast Delivery</h3>
              <p className="text-sm text-gray-600">Within 30 minutes</p>
            </div>
            <div className="p-4 bg-orange-50 rounded-2xl">
              <div className="text-2xl text-orange-500 mb-2">💳</div>
              <h3 className="font-semibold text-gray-800">Easy Payment</h3>
              <p className="text-sm text-gray-600">Multiple options</p>
            </div>
          </div>
        </div>

        {/* Suggested Items */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-8">
            Popular Items You Might Like
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Suggested Item 1 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 transform hover:scale-105 transition-all duration-300 cursor-pointer">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🍛</span>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Chicken Biryani</h4>
              <p className="text-orange-500 font-bold">₹250</p>
            </div>
            
            {/* Suggested Item 2 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 transform hover:scale-105 transition-all duration-300 cursor-pointer">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🥘</span>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Masala Dosa</h4>
              <p className="text-orange-500 font-bold">₹120</p>
            </div>
            
            {/* Suggested Item 3 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 transform hover:scale-105 transition-all duration-300 cursor-pointer">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🥮</span>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Kerala Parotta</h4>
              <p className="text-orange-500 font-bold">₹80</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart