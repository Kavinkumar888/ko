import React, { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-orange-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Contact <span className="text-orange-500">Us</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have questions or feedback? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
          <div className="w-20 h-1 bg-orange-500 mx-auto rounded-full mt-6"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-3xl shadow-2xl p-8 border border-orange-100">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center">
                <i className="fas fa-comments text-orange-500 mr-3"></i>
                Get in Touch
              </h2>
              
              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start space-x-4 p-4 bg-orange-50 rounded-2xl hover:bg-orange-100 transition-colors duration-300">
                  <div className="bg-orange-500 text-white p-3 rounded-full">
                    <i className="fas fa-map-marker-alt text-lg"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 text-lg mb-1">Address</h3>
                    <p className="text-gray-600">123 Food Street, Chennai, Tamil Nadu - 600001</p>
                  </div>
                </div>
                
                {/* Phone */}
                <div className="flex items-start space-x-4 p-4 bg-orange-50 rounded-2xl hover:bg-orange-100 transition-colors duration-300">
                  <div className="bg-green-500 text-white p-3 rounded-full">
                    <i className="fas fa-phone text-lg"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 text-lg mb-1">Phone</h3>
                    <p className="text-gray-600">+91 98765 43210</p>
                    <p className="text-gray-600">+91 87654 32109</p>
                  </div>
                </div>
                
                {/* Email */}
                <div className="flex items-start space-x-4 p-4 bg-orange-50 rounded-2xl hover:bg-orange-100 transition-colors duration-300">
                  <div className="bg-blue-500 text-white p-3 rounded-full">
                    <i className="fas fa-envelope text-lg"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 text-lg mb-1">Email</h3>
                    <p className="text-gray-600">info@ennakkufoods.com</p>
                    <p className="text-gray-600">order@ennakkufoods.com</p>
                  </div>
                </div>
                
                {/* Opening Hours */}
                <div className="flex items-start space-x-4 p-4 bg-orange-50 rounded-2xl hover:bg-orange-100 transition-colors duration-300">
                  <div className="bg-purple-500 text-white p-3 rounded-full">
                    <i className="fas fa-clock text-lg"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 text-lg mb-1">Opening Hours</h3>
                    <p className="text-gray-600">Monday - Sunday: 7:00 AM - 11:00 PM</p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="font-semibold text-gray-800 mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="bg-gray-800 hover:bg-orange-500 text-white w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300 transform hover:scale-110">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" className="bg-gray-800 hover:bg-orange-500 text-white w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300 transform hover:scale-110">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#" className="bg-gray-800 hover:bg-orange-500 text-white w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300 transform hover:scale-110">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="bg-gray-800 hover:bg-orange-500 text-white w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300 transform hover:scale-110">
                    <i className="fab fa-whatsapp"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 border border-orange-100">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center">
              <i className="fas fa-paper-plane text-orange-500 mr-3"></i>
              Send us a Message
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div className="form-group">
                <label className="block text-gray-700 font-medium mb-2">
                  Your Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 bg-gray-50 hover:bg-white"
                  />
                  <i className="fas fa-user absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                </div>
              </div>
              
              {/* Email Field */}
              <div className="form-group">
                <label className="block text-gray-700 font-medium mb-2">
                  Your Email <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 bg-gray-50 hover:bg-white"
                  />
                  <i className="fas fa-envelope absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                </div>
              </div>
              
              {/* Message Field */}
              <div className="form-group">
                <label className="block text-gray-700 font-medium mb-2">
                  Your Message <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <textarea
                    name="message"
                    placeholder="Tell us how we can help you..."
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 bg-gray-50 hover:bg-white resize-none"
                  ></textarea>
                  <i className="fas fa-comment absolute right-4 top-4 text-gray-400"></i>
                </div>
              </div>
              
              {/* Submit Button */}
              <button 
                type="submit" 
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-6 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-3 text-lg"
              >
                <i className="fas fa-paper-plane"></i>
                <span>Send Message</span>
              </button>

              {/* Quick Response Info */}
              <div className="bg-green-50 border border-green-200 rounded-2xl p-4 mt-6">
                <div className="flex items-center space-x-3">
                  <i className="fas fa-bolt text-green-500 text-xl"></i>
                  <div>
                    <p className="text-green-800 font-medium">Quick Response Guaranteed</p>
                    <p className="text-green-600 text-sm">We typically reply within 2 hours</p>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* Map Section (Optional) */}
        <div className="mt-16 bg-white rounded-3xl shadow-2xl p-8 border border-orange-100">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Find Us</h2>
          <div className="bg-gray-200 rounded-2xl h-64 flex items-center justify-center">
            <div className="text-center text-gray-500">
              <i className="fas fa-map-marked-alt text-4xl mb-4"></i>
              <p>Interactive Map Coming Soon</p>
              <p className="text-sm">123 Food Street, Chennai</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact