import React from 'react'

const Home = ({ setCurrentPage }) => {
  return (
    <div className="min-h-screen bg-emerald-50">
      {/* Hero Section */}
      <section className="relative bg-[#f5f5f5] text-gray-900 py-20 lg:py-32">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Welcome to <span className="text-[#25D366]">Kokappi Foods</span>
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl mb-8 text-gray-600 font-light">
              Experience the authentic taste of traditional South Indian cuisine
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                className="bg-[#25D366] hover:bg-[#20ba5a] text-black font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-3 min-w-[200px]"
                onClick={() => setCurrentPage('menu')}
              >
                <span className="text-xl">🍽️</span>
                Order Now
              </button>
              <button 
                className="border-2 border-[#25D366] hover:bg-[#25D366] hover:text-black text-gray-900 font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-3 min-w-[200px]"
                onClick={() => setCurrentPage('about')}
              >
                <span className="text-xl">👨‍🍳</span>
                Our Story
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Today's Special Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              Today's <span className="text-[#25D366]">Special</span>
            </h2>
            <div className="w-24 h-1 bg-[#25D366] mx-auto rounded-full"></div>
          </div>

          {/* Featured Item - Large Card */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden max-w-4xl mx-auto border border-gray-200">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Image Side */}
              <div className="relative h-64 lg:h-auto">
                <img 
                  src="/images/biryani.jpg" 
                  alt="Hyderabadi Chicken Biryani" 
                  className="w-full h-full object-cover"
                />
                {/* Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-[#25D366] text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                    Most Popular
                  </span>
                </div>
              </div>
              
              {/* Content Side */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">
                  Hyderabadi Chicken Biryani
                </h3>
                <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                  Authentic Hyderabadi dum biryani with tender chicken pieces, 
                  aromatic basmati rice, and a blend of traditional spices. 
                  Cooked to perfection in the dum style for maximum flavor.
                </p>
                
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <span className="text-3xl font-bold text-[#25D366]">₹250</span>
                    <span className="text-lg text-gray-500 line-through">₹300</span>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-bold">-17%</span>
                  </div>
                  <div className="flex items-center gap-1 text-yellow-400">
                    <span>⭐⭐⭐⭐⭐</span>
                    <span className="text-gray-600 text-sm">(4.8/5)</span>
                  </div>
                </div>

                <div className="flex gap-4">
                  <button className="flex-1 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-3">
                    <span>🛒</span>
                    Add to Cart
                  </button>
                  <button className="w-14 h-14 bg-gray-100 hover:bg-[#d8f9e3] text-gray-600 hover:text-[#25D366] rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-105 border border-gray-200">
                    <span className="text-xl">❤️</span>
                  </button>
                </div>

                <div className="mt-6 flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <span>⏱️</span>
                    <span>30 mins</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span>🔥</span>
                    <span>Spicy</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span>👨‍👩‍👧‍👦</span>
                    <span>Serves 2</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Featured Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {/* Item 1 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 border border-gray-200">
              <div className="relative h-48">
                <img 
                  src="/images/dosa.jpg" 
                  alt="Masala Dosa" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 bg-[#25D366] text-white px-3 py-1 rounded-full text-xs font-bold">
                  Trending
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-lg font-bold text-gray-800 mb-2">Masala Dosa</h4>
                <p className="text-gray-600 text-sm mb-4">Crispy crepe with spiced potato filling</p>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-[#25D366]">₹120</span>
                  <button className="bg-[#25D366] hover:bg-[#20ba5a] text-white w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                    <span className="text-sm">+</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Item 2 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 border border-gray-200">
              <div className="relative h-48">
                <img 
                  src="/images/parotta.jpg" 
                  alt="Kerala Parotta" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 bg-[#25D366] text-white px-3 py-1 rounded-full text-xs font-bold">
                  New
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-lg font-bold text-gray-800 mb-2">Kerala Parotta</h4>
                <p className="text-gray-600 text-sm mb-4">Layered flatbread from God's own country</p>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-[#25D366]">₹80</span>
                  <button className="bg-[#25D366] hover:bg-[#20ba5a] text-white w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                    <span className="text-sm">+</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Item 3 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 border border-gray-200">
              <div className="relative h-48">
                <img 
                  src="/images/chicken65.jpg" 
                  alt="Chicken 65" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                  Spicy
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-lg font-bold text-gray-800 mb-2">Chicken 65</h4>
                <p className="text-gray-600 text-sm mb-4">Spicy deep-fried chicken appetizer</p>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-[#25D366]">₹180</span>
                  <button className="bg-[#25D366] hover:bg-[#20ba5a] text-white w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                    <span className="text-sm">+</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
