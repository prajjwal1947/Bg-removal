import React from 'react'
import { assets } from '../assets/assets'

const Steps = () => {
  return (
    <div className='mx-4 lg:mx-44 py-20 xl:py-40'>
      <h1 className='text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent'>
        Steps to remove the background <br /> image in seconds
      </h1>

      {/* Wrap all cards in a single flex container */}
      <div className='flex flex-wrap gap-4 mt-16 xl:mt-24 justify-center items-start'>

        {/* Card 1 */}
        <div className='flex gap-4 bg-white border drop-shadow-md p-7 pb-10 rounded hover:scale-105 transition-all duration-500'>
          <img className='max-w-9' src={assets.upload_icon} />
          <div>
            <p className='text-xl font-medium'>Upload image</p>
            <p className='text-sm text-neutral-500 mt-1'>
              This is a demo text we will replace later.<br />This is demo
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className='flex gap-4 bg-white border drop-shadow-md p-7 pb-10 rounded hover:scale-105 transition-all duration-500'>
          <img className='max-w-9' src={assets.remove_bg_icon} />
          <div>
            <p className='text-xl font-medium'>Remove Background</p>
            <p className='text-sm text-neutral-500 mt-1'>
              Background removal happens instantly.<br />No hassle!
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className='flex gap-4 bg-white border drop-shadow-md p-7 pb-10 rounded hover:scale-105 transition-all duration-500'>
          <img className='max-w-9' src={assets.download_icon} />
          <div>
            <p className='text-xl font-medium'>Download Result</p>
            <p className='text-sm text-neutral-500 mt-1'>
              Get your image with transparent background.<br />Just like that!
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Steps
