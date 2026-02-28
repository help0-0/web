import React from 'react'
import { Waves, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Waves className="h-8 w-8 text-primary-400" />
              <span className="text-2xl font-bold">Avontide</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Elevating sports performance through expert consultancy, innovative strategies, and unwavering commitment to excellence.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors duration-300">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors duration-300">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors duration-300">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-primary-400 transition-colors">Home</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-primary-400 transition-colors">Services</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-primary-400 transition-colors">About</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-primary-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><span className="text-gray-400">Performance Analytics</span></li>
              <li><span className="text-gray-400">Team Building</span></li>
              <li><span className="text-gray-400">Mental Coaching</span></li>
              <li><span className="text-gray-400">Strategic Planning</span></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-400">
            © {currentYear} Avontide Sports Consultancy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
