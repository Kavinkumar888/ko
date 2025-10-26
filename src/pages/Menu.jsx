import React, { useState } from 'react'

const Menu = ({ addToCart }) => {
  const [activeCategory, setActiveCategory] = useState('all')

  const menuItems = [
    {
      id: 1,
      name: 'Tea',
      price: 10,
      category: 'main-course',
      image:'./tea.jpg',
      description: 'Fresh milk has a mild, slightly sweet taste and a smooth, creamy texture.',
      popular: true
    },
    {
      id: 2,
      name: 'Masala tea',
      price: 20,
      category: 'main-course',
      image: './masal.jpg',
      description: 'A rich, spiced blend of tea and aromatic herbs that offers warmth, energy, and authentic Indian flavor in every sip.',
      popular: true
    },
    {
      id: 3,
      name: 'Milk',
      price: 10,
      category: 'main-course',
      image: './milk.jpg',
      description: 'Layered flatbread from Kerala',
      trending: true
    },
    {
      id: 4,
      name: 'Nattuchakarai tea',
      price: 12,
      category: 'main-course',
      image: './tea.jpg',
      description: 'Spicy deep-fried chicken'
    },
    {
      id: 5,
      name: 'Filter Coffee',
      price: 12,
      category: 'main-course',
      image: './coffee.jpg',
      description: 'Traditional South Indian filter coffee',
      popular: true
    },
    {
      id: 6,
      name: 'Black Coffee',
      price: 12,
      category: 'main-course',
      image: './black.jpg',
      description: 'Sweet milk balls in sugar syrup'
    },
    {
      id: 7,
      name: 'leamon Tea',
      price: 20,
      category: 'main-course',
      image: './lemon.jpg',
      description: 'Fresh prawns in coconut gravy',
      new: true
    },
    {
      id: 8,
      name: 'Sukku Coffee',
      price: 15,
      category: 'main-course',
      image: './lemon.jpg',
      description: 'Soft rice cakes with lentil soup'
    },
     {
      id: 9,
      name: 'Boost',
      price: 15,
      category: 'main-course',
      image: './rose.png',
      description: 'Soft rice cakes with lentil soup'
    },
     {
      id: 10,
      name: 'Cold Coffee',
      price: 15,
      category: 'main-course',
      image: './coldcoffee.jpg',
      description: 'Soft rice cakes with lentil soup'
    },
    {
      id: 11,
      name: 'green Tea',
      price: 15,
      category: 'main-course',
      image: './green.jpg',
      description: 'Soft rice cakes with lentil soup'
    },
    {
      id: 12,
      name: 'Rose Milk',
      price: 15,
      category: 'Cold-beverages',
      image: './rose.png',
      description: 'Soft rice cakes with lentil soup'
    },
     {
      id: 13,
      name: 'badam Milk',
      price: 25,
      category: 'Cold-beverages',
      image: './padam.jpg',
      description: 'Soft rice cakes with lentil soup'
    },
     {
      id: 15,
      name: 'lemon soda',
      price: 15,
      category: 'Cold-beverages',
      image: './lemonsoda.jpg',
      description: 'Soft rice cakes with lentil soup'
    },
     {
      id: 16,
      name: 'lemon juice',
      price: 15,
      category: 'Cold-beverages',
      image: './lemonjuice.jpg',
      description: 'Soft rice cakes with lentil soup'
    },
     {
      id: 17,
      name: 'thatuvada set',
      price: 20,
      category: 'Snakes',
      image: './rose.png',
      description: 'Soft rice cakes with lentil soup'
    },
     {
      id: 18,
      name: 'Norukkal',
      price: 25,
      category: 'Snakes',
      image: './rose.png',
      description: 'Soft rice cakes with lentil soup'
    },
      {
      id: 19,
      name: 'Tomato set',
      price: 25,
      category: 'Snakes',
      image: './rose.png',
      description: 'Soft rice cakes with lentil soup'
    },
     {
      id: 20,
      name: 'onion set',
      price: 30,
      category: 'Snakes',
      image: './rose.png',
      description: 'Soft rice cakes with lentil soup'
    },
       {
      id: 21,
      name: 'Garlic set',
      price: 30,
      category: 'Snakes',
      image: './rose.png',
      description: 'Soft rice cakes with lentil soup'
    },
     {
      id: 22,
      name: 'Egg set',
      price: 30,
      category: 'Snakes',
      image: './rose.png',
      description: 'Soft rice cakes with lentil soup'
    },
     {
      id: 23,
      name: 'Muruku set',
      price: 20,
      category: 'Snakes',
      image: './rose.png',
      description: 'Soft rice cakes with lentil soup'
    },
      {
      id: 24,
      name: 'Bule Curacao',
      price: 50,
      category: 'berverages',
      image: './rose.png',
      description: 'Soft rice cakes with lentil soup'
    },
      {
      id: 25,
      name: 'Strawberry',
      price: 50,
      category: 'berverages',
      image: './rose.png',
      description: 'Soft rice cakes with lentil soup'
    },
      {
      id: 26,
      name: 'Lime & Mint',
      price: 50,
      category: 'berverages',
      image: './rose.png',
      description: 'Soft rice cakes with lentil soup'
    },
      {
      id: 27,
      name: 'Ginger & Lime',
      price: 50,
      category: 'berverages',
      image: './rose.png',
      description: 'Soft rice cakes with lentil soup'
    },
      {
      id: 28,
      name: 'Green Apple',
      price: 50,
      category: 'berverages',
      image: './rose.png',
      description: 'Soft rice cakes with lentil soup'
    },
      {
      id: 29,
      name: 'Chocolate',
      price: 50,
      category: 'berverages',
      image: './rose.png',
      description: 'Soft rice cakes with lentil soup'
    },
      {
      id: 30,
      name: 'Pineapple',
      price: 50,
      category: 'berverages',
      image: './rose.png',
      description: 'Soft rice cakes with lentil soup'
    },
      {
      id: 31,
      name: 'Mango',
      price: 50,
      category: 'berverages',
      image: './rose.png',
      description: 'Soft rice cakes with lentil soup'
    },
      {
      id: 32,
      name: 'Orange',
      price: 50,
      category: 'berverages',
      image: './rose.png',
      description: 'Soft rice cakes with lentil soup'
    },
      {
      id: 33,
      name: 'Kiwi',
      price: 50,
      category: 'berverages',
      image: './rose.png',
      description: 'Soft rice cakes with lentil soup'
    },
     {
      id: 34,
      name: 'Bread Bajji',
      price: 25,
      category: 'Snakes',
      image: './rose.png',
      description: 'Soft rice cakes with lentil soup'
    },
     {
      id: 35,
      name: 'Panipuri',
      price: 30,
      category: 'Snakes',
      image: './panipuri.jpg',
      description: 'Soft rice cakes with lentil soup'
    },
     {
      id: 36,
      name: 'Onion Bajji',
      price: 20,
      category: 'Snakes',
      image: './rose.png',
      description: 'Soft rice cakes with lentil soup'
    },
     {
      id: 37,
      name: 'Tomato Bajji',
      price: 20,
      category: 'Snakes',
      image: './rose.png',
      description: 'Soft rice cakes with lentil soup'
    },
     {
      id: 38,
      name: 'Egg Bajji',
      price: 20,
      category: 'Snakes',
      image: './rose.png',
      description: 'Soft rice cakes with lentil soup'
    },
     {
      id: 39,
      name: 'Bread Omblet',
      price: 40,
      category: 'Snakes',
      image: './rose.png',
      description: 'Soft rice cakes with lentil soup'
    },
     {
      id: 40,
      name: 'French Fries',
      price: 50,
      category: 'Snakes',
      image: './rose.png',
      description: 'Soft rice cakes with lentil soup'
    },
     {
      id: 41,
      name: 'peri Peri French Fires',
      price: 50,
      category: 'Snakes',
      image: './rose.png',
      description: 'Soft rice cakes with lentil soup'
    },
     {
      id: 42,
      name: 'Sweet Corn',
      price: 10,
      category: 'Snakes',
      image: './rose.png',
      description: 'Soft rice cakes with lentil soup'
    },
     {
      id: 43,
      name: 'Channa Sundal',
      price: 10,
      category: 'Snakes',
      image: './rose.png',
      description: 'Soft rice cakes with lentil soup'
    },
     {
      id: 44,
      name: 'Pasta',
      price: 20,
      category: 'Snakes',
      image: './rose.png',
      description: 'Soft rice cakes with lentil soup'
    },
     {
      id: 45,
      name: 'Classic Maggie',
      price: 30,
      category: 'Snakes',
      image: './rose.png',
      description: 'Soft rice cakes with lentil soup'
    },
     {
      id: 46,
      name: 'Egg Maggie',
      price: 40,
      category: 'Snakes',
      image: './rose.png',
      description: 'Soft rice cakes with lentil soup'
    },
     {
      id: 47,
      name: 'Cheese Maggie',
      price: 45,
      category: 'Snakes',
      image: './rose.png',
      description: 'Soft rice cakes with lentil soup'
    },
     {
      id: 48,
      name: 'Veg Sandwich',
      price: 50,
      category: 'sandwichs',
      image: './san.jpg',
      description: 'Soft rice cakes with lentil soup'
    },
     {
      id: 49,
      name: 'Egg Sandwich',
      price: 50,
      category: 'sandwichs',
      image: './rose.png',
      description: 'Soft rice cakes with lentil soup'
    },
     {
      id: 50,
      name: 'Veg Cheese Sandwich',
      price: 60,
      category: 'sandwichs',
      image: './rose.png',
      description: 'Soft rice cakes with lentil soup'
    },
     {
      id: 51,
      name: 'Egg Cheese Sandwich',
      price: 80,
      category: 'sandwichs',
      image: './rose.png',
      description: 'Soft rice cakes with lentil soup'
    },
     {
      id: 52,
      name: 'Corn Sandwich',
      price: 70,
      category: 'sandwichs',
      image: './rose.png',
      description: 'Soft rice cakes with lentil soup'
    },
     {
      id: 53,
      name: 'Norkkul Sandwich',
      price: 50,
      category: 'sandwichs',
      image: './rose.png',
      description: 'Soft rice cakes with lentil soup'
    },
     {
      id: 54,
      name: 'Norkkul Cheese',
      price: 60,
      category: 'sandwichs',
      image: './norukkal.jpg',
      description: 'Soft rice cakes with lentil soup'
    },
     {
      id: 55,
      name: 'Omlette Sandwich',
      price: 70,
      category: 'sandwichs',
      image: './rose.png',
      description: 'Soft rice cakes with lentil soup'
    },
     {
      id: 56,
      name: 'Peri Peri Sandwich',
      price: 60,
      category: 'sandwichs',
      image: './rose.png',
      description: 'Soft rice cakes with lentil soup'
    },
      {
      id: 57,
      name: 'Peri Peri Sandwich',
      price: 60,
      category: 'dessert',
      image: './icecream.jpg',
      description: 'Soft rice cakes with lentil soup'
    },
      {
      id: 58,
      name: 'icecream',
      price: 60,
      category: 'sandwichs',
      image: './icecreams.jpg',
      description: 'Soft rice cakes with lentil soup'
    },
  ]

  const categories = [
    { id: 'all', name: 'All Items', icon: '🍽️' },
    { id: 'main-course', name: 'Main Course', icon: '🍛' },
    { id: 'Snakes', name: 'Breakfast', icon: '🥞' },
    { id: 'sandwichs', name: 'Starters', icon: '🍤' },
    { id: 'Cold-beverages', name: 'Cold-Beverages', icon: '☕' },
    { id: 'berverages', name: 'Beverages', icon: '☕' },
    { id: 'dessert', name: 'Desserts', icon: '🍮' }
  ]

  const filteredItems = activeCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory)

  // Add to cart handler with success feedback
  const handleAddToCart = (item) => {
    addToCart(item);
    
    // Optional: Show a success message (you can replace this with a toast notification)
    const button = document.getElementById(`add-btn-${item.id}`);
    if (button) {
      const originalText = button.innerHTML;
      button.innerHTML = '<i class="fas fa-check"></i><span>Added</span>';
      button.classList.remove('bg-green-500', 'hover:bg-green-600');
      button.classList.add('bg-emerald-600');
      
      setTimeout(() => {
        button.innerHTML = originalText;
        button.classList.remove('bg-emerald-600');
        button.classList.add('bg-green-500', 'hover:bg-green-600');
      }, 1500);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-green-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our <span className="text-green-500">Delicious Menu</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our wide range of authentic South Indian dishes made with love and traditional recipes
          </p>
          <div className="w-20 h-1 bg-green-500 mx-auto rounded-full mt-6"></div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              className={`flex items-center space-x-2 px-6 py-3 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                activeCategory === category.id 
                  ? 'bg-green-500 text-white shadow-lg' 
                  : 'bg-white text-gray-700 hover:bg-green-100 hover:text-green-500 shadow-md'
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              <span className="text-lg">{category.icon}</span>
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredItems.map(item => (
            <div key={item.id} className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-green-100 overflow-hidden group">
              {/* Image Container */}
              <div className="relative overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col space-y-2">
                  {item.popular && (
                    <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                      🔥 Popular
                    </span>
                  )}
                  {item.trending && (
                    <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                      📈 Trending
                    </span>
                  )}
                  {item.new && (
                    <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                      🆕 New
                    </span>
                  )}
                </div>

                {/* REMOVED: Quick Add Button (White circle with heart) */}
              </div>

              {/* Item Info */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-800 group-hover:text-green-500 transition-colors duration-300">
                    {item.name}
                  </h3>
                  <div className="flex items-center space-x-1 text-amber-400">
                    <i className="fas fa-star"></i>
                    <span className="text-sm font-semibold text-gray-600">4.8</span>
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {item.description}
                </p>

                <div className="flex justify-between items-center">
                  <div className="text-2xl font-bold text-green-500">
                    ₹{item.price}
                  </div>
                  <button 
                    id={`add-btn-${item.id}`}
                    onClick={() => handleAddToCart(item)}
                    className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-2 group/btn"
                  >
                    <i className="fas fa-plus group-hover/btn:rotate-90 transition-transform duration-300"></i>
                    <span>Add</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-16">
            <div className="w-32 h-32 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="fas fa-utensils text-5xl text-green-500"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">No items found</h3>
            <p className="text-gray-600 mb-6">We're working on adding more items to this category.</p>
            <button 
              onClick={() => setActiveCategory('all')}
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105"
            >
              View All Items
            </button>
          </div>
        )}

        {/* Special Offer Banner */}
        <div className="mt-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-3xl p-8 text-white text-center shadow-2xl">
          <h3 className="text-2xl font-bold mb-2">🎉 Special Offer!</h3>
          <p className="text-lg mb-4">Get 20% off on your first order above ₹500</p>
          <p className="text-green-100">Use code: WELCOME20</p>
        </div>
      </div>
    </div>
  )
}

export default Menu