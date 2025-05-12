import React from 'react'
import { assets } from '../assets/assets'

const Results = () => {
  return (
    <div className="bg-gray-50 py-16 px-4 lg:px-16">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-8">
          Your Results are Ready!
        </h1>

        {/* Results Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Original Image */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src={assets.image_w_bg}
              alt="Original"
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg text-gray-700">Original Image</h3>
            </div>
          </div>

          {/* Processed Image (No Background) */}
          <div className={assets.image_wo_bg}>
            <img
              src={assets.image_wo_bg}
              alt="Processed"
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg text-gray-700">Processed Image</h3>
            </div>
          </div>
        </div>

        {/* Download Button */}
        <div className="mt-8">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Download Processed Image
          </button>
        </div>

        {/* Additional Info */}
        <div className="mt-6 text-gray-500">
          <p>Feel free to download or share the results. If you need further assistance, let us know!</p>
        </div>
      </div>
    </div>
  )
}

export default Results
