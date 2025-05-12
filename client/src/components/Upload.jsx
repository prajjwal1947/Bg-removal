import React, { useRef } from 'react'
import { assets } from '../assets/assets'

const Upload = () => {
  const fileInputRef = useRef(null)

  // Function to trigger the file input when the upload box is clicked
  const handleUploadClick = () => {
    fileInputRef.current.click()
  }

  return (
    <div className='mx-4 lg:mx-44 py-20 xl:py-40'>
      {/* Title */}
      <h1 className='text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent'>
        Upload your image to remove the background
      </h1>

      {/* Upload Box */}
      <div className='mt-16 flex justify-center'>
        <div 
          className='flex flex-col items-center gap-4 border-2 border-dashed border-gray-300 bg-white p-10 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer'
          onClick={handleUploadClick} // Trigger file input click
        >
          <img
            src={assets.upload_icon}
            alt="Upload Icon"
            className='w-14 h-14'
          />
          <p className='text-lg font-medium text-gray-700'>
            Drag and drop or click to upload
          </p>
          <input
            type='file'
            accept='image/*'
            ref={fileInputRef}
            className='hidden'
          />
        </div>
      </div>
    </div>
  )
}

export default Upload
