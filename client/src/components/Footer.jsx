import React from 'react'

const Footer = () => {
  return (
    <div className='bg-gray-800 text-white py-10'>
      <div className='container mx-auto px-4'>
        {/* Footer Content */}
        <div className='flex flex-col md:flex-row justify-between items-center text-center md:text-left'>
          {/* Logo or App Name */}
          <div className='mb-4 md:mb-0'>
            <h2 className='text-3xl font-semibold text-gray-100'>
              YourAppName
            </h2>
            <p className='text-sm text-gray-400 mt-2'>
              Removing backgrounds made simple and fast.
            </p>
          </div>

          {/* Links */}
          <div className='flex flex-col md:flex-row gap-4'>
            <a href="#about" className='text-sm text-gray-400 hover:text-white transition-colors'>
              About Us
            </a>
            <a href="#contact" className='text-sm text-gray-400 hover:text-white transition-colors'>
              Contact
            </a>
            <a href="#privacy" className='text-sm text-gray-400 hover:text-white transition-colors'>
              Privacy Policy
            </a>
            <a href="#terms" className='text-sm text-gray-400 hover:text-white transition-colors'>
              Terms & Conditions
            </a>
          </div>
        </div>

        {/* Social Media Links */}
        <div className='mt-6 flex justify-center gap-6'>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img
              src="https://img.icons8.com/ios-filled/50/ffffff/facebook.png"
              alt="Facebook"
              className='w-6 h-6 hover:opacity-80 transition-opacity'
            />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img
              src="https://img.icons8.com/ios-filled/50/ffffff/twitter.png"
              alt="Twitter"
              className='w-6 h-6 hover:opacity-80 transition-opacity'
            />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img
              src="https://img.icons8.com/ios-filled/50/ffffff/instagram.png"
              alt="Instagram"
              className='w-6 h-6 hover:opacity-80 transition-opacity'
            />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className='mt-8 text-center text-sm text-gray-400'>
        <p>&copy; {new Date().getFullYear()} YourAppName. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
