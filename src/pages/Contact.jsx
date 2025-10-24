import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const phoneNumber = '918015285690';
    const textMessage = `📩 *New Message from Kokaapi Snacks Website*%0A%0A
👤 *Name:* ${formData.name}%0A
📞 *Phone:* ${formData.phone}%0A
📧 *Email:* ${formData.email}%0A
💬 *Message:* ${formData.message}%0A%0A
_This message was sent via your website contact form_`;

    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    const whatsappURL = isMobile
      ? `whatsapp://send?phone=${phoneNumber}&text=${textMessage}`
      : `https://wa.me/${phoneNumber}?text=${textMessage}`;

    window.open(whatsappURL, '_blank');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  // Google Maps location URLs
  const openGoogleMaps = () => {
    const address = "HCXP+HVP, MDR530, Mathur, Tamil Nadu 636202";
    const mapsURL = `https://www.google.com/maps/search/?api=1&query=${address}`;
    window.open(mapsURL, '_blank');
  };

  const openDirections = () => {
    const address = "HCXP+HVP, MDR530, Mathur, Tamil Nadu 636202";
    const mapsURL = `https://www.google.com/maps/dir/?api=1&destination=${address}`;
    window.open(mapsURL, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-green-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Contact <span className="text-green-500">Kokaapi Snacks</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get in touch with us for orders, catering, or any inquiries about our authentic South Indian snacks!
          </p>
          <div className="w-20 h-1 bg-green-500 mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Left Side - Enhanced Form */}
          <div className="bg-white shadow-xl rounded-2xl p-8 border border-green-100">
            <h2 className="text-3xl font-bold text-gray-800 mb-2 flex items-center">
              <i className="fas fa-paper-plane text-green-500 mr-3"></i>
              Send us a Message
            </h2>
            <p className="text-gray-600 mb-6">
              Fill out the form below and we'll get back to you via WhatsApp within 30 minutes!
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Your Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                    className="w-full px-4 py-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-400 focus:border-green-400 focus:outline-none transition-all duration-300 bg-gray-50 hover:bg-white"
                  />
                  <i className="fas fa-user absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                </div>
              </div>

              {/* Phone Field */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="Enter your number"
                    className="w-full px-4 py-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-400 focus:border-green-400 focus:outline-none transition-all duration-300 bg-gray-50 hover:bg-white"
                  />
                  <i className="fas fa-phone absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                </div>
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                    className="w-full px-4 py-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-400 focus:border-green-400 focus:outline-none transition-all duration-300 bg-gray-50 hover:bg-white"
                  />
                  <i className="fas fa-envelope absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                </div>
              </div>

              {/* Message Field */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Your Message <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    required
                    placeholder="Tell us about your order, catering requirements, or any questions..."
                    className="w-full px-4 py-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-400 focus:border-green-400 focus:outline-none transition-all duration-300 bg-gray-50 hover:bg-white resize-none"
                  ></textarea>
                  <i className="fas fa-comment absolute right-4 top-4 text-gray-400"></i>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-3 text-lg"
              >
                <i className="fab fa-whatsapp text-xl"></i>
                <span>Send Message via WhatsApp</span>
              </button>

              {/* Form Features */}
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="bg-green-50 border border-green-200 rounded-xl p-3 text-center">
                  <i className="fas fa-clock text-green-500 text-lg mb-1"></i>
                  <p className="text-sm font-medium text-green-800">Quick Response</p>
                  <p className="text-xs text-green-600">Within 30 mins</p>
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-3 text-center">
                  <i className="fas fa-shield-alt text-blue-500 text-lg mb-1"></i>
                  <p className="text-sm font-medium text-blue-800">Secure</p>
                  <p className="text-xs text-blue-600">Direct to WhatsApp</p>
                </div>
              </div>
            </form>
          </div>

          {/* Right Side - Contact Info */}
          <div className="flex flex-col justify-center bg-gradient-to-br from-green-500 to-emerald-600 text-white rounded-2xl p-8 shadow-xl">
            <h2 className="text-3xl font-bold mb-6 flex items-center">
              <i className="fas fa-store mr-3"></i>
              Visit Us Today
            </h2>
            
            <p className="mb-6 text-lg leading-relaxed">
              Come experience the authentic taste of South Indian snacks at our location in Valapadi. We're here to serve you with fresh, delicious treats!
            </p>
            
            <div className="space-y-4 mb-6">
              {/* Location with Google Maps */}
              <div 
                className="flex items-start space-x-3 p-3 bg-white/10 rounded-xl hover:bg-white/20 transition-all duration-300 cursor-pointer group"
                onClick={openGoogleMaps}
              >
                <div className="bg-green-600 p-2 rounded-lg group-hover:scale-110 transition-transform">
                  <i className="fas fa-map-marker-alt text-lg"></i>
                </div>
                <div>
                  <strong className="block text-green-100">Location</strong>
                  <span className="group-hover:text-white transition-colors">
                    299, Varnathikuttai, West Rajapalayam,<br />
                    Pethanatckanpalayam (K), Valapadi,<br />
                    Tamil Nadu, India
                  </span>
                  <p className="text-sm text-green-200 mt-1 flex items-center">
                    <i className="fas fa-external-link-alt mr-1 text-xs"></i>
                    Click to view on Google Maps
                  </p>
                </div>
              </div>
              
              {/* Phone & WhatsApp */}
              <div className="flex items-start space-x-3 p-3 bg-white/10 rounded-xl hover:bg-white/15 transition-colors duration-300">
                <div className="bg-green-600 p-2 rounded-lg">
                  <i className="fas fa-phone text-lg"></i>
                </div>
                <div>
                  <strong className="block text-green-100">Phone & WhatsApp</strong>
                  <a 
                    href="https://wa.me/918015285690" 
                    className="hover:text-green-200 transition-colors block text-lg font-medium"
                  >
                    +91 80152 85690
                  </a>
                  <p className="text-sm text-green-200 mt-1">Click to chat directly on WhatsApp</p>
                </div>
              </div>
              
              {/* Email */}
              <div className="flex items-start space-x-3 p-3 bg-white/10 rounded-xl hover:bg-white/15 transition-colors duration-300">
                <div className="bg-green-600 p-2 rounded-lg">
                  <i className="fas fa-envelope text-lg"></i>
                </div>
                <div>
                  <strong className="block text-green-100">Email</strong>
                  <a 
                    href="mailto:Kokaapikokappi@gmail.com" 
                    className="hover:text-green-200 transition-colors block"
                  >
                   Kokaapikokappi@gmail.com
                  </a>
                  <p className="text-sm text-green-200 mt-1">We respond within 2 hours</p>
                </div>
              </div>
            </div>

            {/* Map Actions */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              <button
                onClick={openGoogleMaps}
                className="bg-white/20 hover:bg-white/30 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <i className="fas fa-map"></i>
                <span>View Map</span>
              </button>
              <button
                onClick={openDirections}
                className="bg-white text-green-600 hover:bg-green-50 font-semibold py-3 px-4 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <i className="fas fa-directions"></i>
                <span>Get Directions</span>
              </button>
            </div>

            {/* Business Hours */}
            <div className="mb-6 p-4 bg-white/10 rounded-xl">
              <h3 className="font-semibold mb-3 flex items-center">
                <i className="fas fa-clock mr-2"></i>
                Business Hours
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Monday - Saturday</span>
                  <span className="font-medium">7:00 AM - 10:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-medium">8:00 AM - 9:00 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;