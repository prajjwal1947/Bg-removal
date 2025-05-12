import React from 'react'

const BuyCredit = () => {
  return (
    <div className='mx-4 lg:mx-44 py-20 xl:py-40'>
      {/* Title */}
      <h1 className='text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent'>
        Buy Credits to Remove Backgrounds
      </h1>

      {/* Credit Plans */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16'>
        {[
          { credits: 5, price: 49 },
          { credits: 20, price: 149 },
          { credits: 50, price: 299 },
        ].map((plan, idx) => (
          <div
            key={idx}
            className='bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 text-center'
          >
            <h2 className='text-3xl font-bold text-gray-800 mb-2'>
              {plan.credits} Credits
            </h2>
            <p className='text-xl text-gray-600 mb-4'>₹{plan.price}</p>
            <button className='bg-gray-900 hover:bg-gray-800 text-white py-2 px-6 rounded-lg transition-colors'>
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BuyCredit
