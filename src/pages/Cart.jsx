import React from 'react'

const Cart = ({ cart, removeFromCart, updateQuantity, getTotalPrice, clearCart, setCurrentPage }) => {
  // If cart is empty, show empty cart state
  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-green-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Your <span className="text-emerald-600">Cart</span>
            </h1>
            <div className="w-20 h-1 bg-emerald-600 mx-auto rounded-full"></div>
          </div>
          
          {/* Empty Cart */}
          <div className="bg-white rounded-3xl shadow-2xl p-12 text-center transform hover:scale-105 transition-all duration-500 border border-emerald-100">
            {/* Cart Icon */}
            <div className="relative mb-8">
              <div className="w-32 h-32 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-shopping-cart text-5xl text-emerald-600"></i>
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
              <div className="w-4 h-4 bg-emerald-300 rounded-full animate-bounce"></div>
              <div className="w-4 h-4 bg-emerald-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
              <div className="w-4 h-4 bg-emerald-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
            </div>
            
            {/* Action Button - Updated to use setCurrentPage */}
            <button 
              onClick={() => setCurrentPage('menu')}
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl flex items-center justify-center mx-auto space-x-3"
            >
              <i className="fas fa-utensils"></i>
              <span>Explore Menu</span>
              <i className="fas fa-arrow-right"></i>
            </button>
            
            {/* Quick Stats */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="p-4 bg-emerald-50 rounded-2xl">
                <div className="text-2xl text-emerald-600 mb-2">🚚</div>
                <h3 className="font-semibold text-gray-800">Free Delivery</h3>
                <p className="text-sm text-gray-600">On orders above ₹299</p>
              </div>
              <div className="p-4 bg-emerald-50 rounded-2xl">
                <div className="text-2xl text-emerald-600 mb-2">⏰</div>
                <h3 className="font-semibold text-gray-800">Fast Delivery</h3>
                <p className="text-sm text-gray-600">Within 30 minutes</p>
              </div>
              <div className="p-4 bg-emerald-50 rounded-2xl">
                <div className="text-2xl text-emerald-600 mb-2">💳</div>
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
              <div 
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 transform hover:scale-105 transition-all duration-300 cursor-pointer"
                onClick={() => setCurrentPage('menu')}
              >
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🍛</span>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Chicken Biryani</h4>
                <p className="text-emerald-600 font-bold">₹250</p>
              </div>
              
              {/* Suggested Item 2 */}
              <div 
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 transform hover:scale-105 transition-all duration-300 cursor-pointer"
                onClick={() => setCurrentPage('menu')}
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🥘</span>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Masala Dosa</h4>
                <p className="text-emerald-600 font-bold">₹120</p>
              </div>
              
              {/* Suggested Item 3 */}
              <div 
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 transform hover:scale-105 transition-all duration-300 cursor-pointer"
                onClick={() => setCurrentPage('menu')}
              >
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🥮</span>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Kerala Parotta</h4>
                <p className="text-emerald-600 font-bold">₹80</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Cart with items
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-green-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Your <span className="text-emerald-600">Cart</span>
          </h1>
          <p className="text-xl text-gray-600">
            Review your items and proceed to checkout
          </p>
          <div className="w-20 h-1 bg-emerald-600 mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-xl p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">
                  Cart Items ({cart.length})
                </h2>
                <div className="flex space-x-4">
                  {/* Added Go to Menu button */}
                  <button 
                    onClick={() => setCurrentPage('menu')}
                    className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-2 px-6 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-2"
                  >
                    <i className="fas fa-utensils"></i>
                    <span>Go to Menu</span>
                  </button>
                  <button 
                    onClick={clearCart}
                    className="text-red-500 hover:text-red-700 font-medium text-sm flex items-center space-x-2"
                  >
                    <i className="fas fa-trash"></i>
                    <span>Clear All</span>
                  </button>
                </div>
              </div>
              
              <div className="space-y-4">
                {cart.map(item => (
                  <div key={item.id} className="flex items-center justify-between p-4 bg-emerald-50 rounded-2xl border border-emerald-100">
                    <div className="flex items-center space-x-4">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-16 h-16 object-cover rounded-xl"
                      />
                      <div>
                        <h3 className="font-semibold text-gray-800">{item.name}</h3>
                        <p className="text-emerald-600 font-bold">₹{item.price}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-8 h-8 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center transition-colors duration-300"
                      >
                        <span className="text-gray-700 font-bold">−</span>
                      </button>
                      
                      <span className="font-semibold text-gray-800 w-8 text-center">
                        {item.quantity}
                      </span>
                      
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-8 h-8 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full flex items-center justify-center transition-colors duration-300"
                      >
                        <span className="text-white font-bold">+</span>
                      </button>
                      
                      {/* Remove Button with X label */}
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="w-8 h-8 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center transition-colors duration-300 ml-2"
                      >
                        <span className="text-white font-bold text-sm">×</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-3xl shadow-xl p-6 sticky top-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                {cart.map(item => (
                  <div key={item.id} className="flex justify-between text-gray-600">
                    <span>{item.name} x {item.quantity}</span>
                    <span>₹{item.price * item.quantity}</span>
                  </div>
                ))}
              </div>
              
              <div className="border-t border-gray-200 pt-4 mb-6">
                <div className="flex justify-between text-lg font-bold text-gray-800">
                  <span>Total</span>
                  <span>₹{getTotalPrice()}</span>
                </div>
              </div>
              
              <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 px-6 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-lg">
                Proceed to Checkout
              </button>
              
              <p className="text-center text-gray-500 text-sm mt-4">
                Free delivery on orders above ₹300
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart