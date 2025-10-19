import React from 'react'

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            About <span className="text-green-500">kokaapi Foods</span>
          </h1>
          <div className="w-24 h-1 bg-green-500 mx-auto rounded-full"></div>
        </div>
        
        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            {/* Our Story */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-green-100 transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="text-3xl text-green-500 mr-3">📖</div>
                <h2 className="text-2xl font-bold text-gray-800">Our Story</h2>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg">
                Welcome to Ennakku Foods, where tradition meets taste! Established in 2010, 
                we have been serving authentic South Indian cuisine with a modern twist. 
                Our recipes have been passed down through generations, ensuring that every 
                dish tells a story of rich cultural heritage.
              </p>
            </div>

            {/* Our Mission */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-green-100 transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="text-3xl text-green-500 mr-3">🎯</div>
                <h2 className="text-2xl font-bold text-gray-800">Our Mission</h2>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg">
                To provide delicious, hygienic, and affordable food that brings people together. 
                We believe in using only the freshest ingredients and traditional cooking methods 
                to deliver an unforgettable dining experience.
              </p>
            </div>

            {/* Why Choose Us */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-green-100 transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="text-3xl text-green-500 mr-3">⭐</div>
                <h2 className="text-2xl font-bold text-gray-800">Why Choose Us?</h2>
              </div>
              <ul className="space-y-4">
                <li className="flex items-center text-gray-700">
                  <div className="bg-emerald-100 p-2 rounded-full mr-4">
                    <span className="text-emerald-600 text-lg">✅</span>
                  </div>
                  <span className="text-lg">100% Fresh Ingredients</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="bg-emerald-100 p-2 rounded-full mr-4">
                    <span className="text-emerald-600 text-lg">✅</span>
                  </div>
                  <span className="text-lg">Traditional Recipes</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="bg-emerald-100 p-2 rounded-full mr-4">
                    <span className="text-emerald-600 text-lg">✅</span>
                  </div>
                  <span className="text-lg">Hygienic Kitchen</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="bg-emerald-100 p-2 rounded-full mr-4">
                    <span className="text-emerald-600 text-lg">✅</span>
                  </div>
                  <span className="text-lg">Fast Delivery</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="bg-emerald-100 p-2 rounded-full mr-4">
                    <span className="text-emerald-600 text-lg">✅</span>
                  </div>
                  <span className="text-lg">Affordable Prices</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Image Section */}
          <div className="relative">
            <div className="bg-white rounded-2xl p-6 shadow-2xl transform hover:scale-105 transition-all duration-500">
              <img 
                src="/images/shop.jpg" 
                alt="Our Restaurant" 
                className="w-full h-96 object-cover rounded-xl shadow-md"
              />
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 bg-green-500 text-white p-6 rounded-2xl shadow-xl">
              <div className="text-center">
                <div className="text-3xl font-bold">14+</div>
                <div className="text-sm">Years Experience</div>
              </div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-emerald-500 text-white p-6 rounded-2xl shadow-xl">
              <div className="text-center">
                <div className="text-3xl font-bold">5000+</div>
                <div className="text-sm">Happy Customers</div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Features Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-green-100">
            <div className="text-4xl mb-4">👨‍🍳</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Expert Chefs</h3>
            <p className="text-gray-600">15+ years experienced traditional chefs</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-green-100">
            <div className="text-4xl mb-4">🚚</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Fast Delivery</h3>
            <p className="text-gray-600">30 minutes delivery guarantee</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-green-100">
            <div className="text-4xl mb-4">💰</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Best Price</h3>
            <p className="text-gray-600">Quality food at affordable prices</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About