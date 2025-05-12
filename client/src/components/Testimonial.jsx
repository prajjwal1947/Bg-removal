import React from 'react'

const testimonials = [
  {
    name: "Jane Doe",
    position: "Product Designer",
    quote: "This tool saved me hours of editing. Background removal was super accurate and lightning fast!",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    name: "John Smith",
    position: "Photographer",
    quote: "I love how intuitive the interface is. Great results every single time!",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "Alice Johnson",
    position: "Content Creator",
    quote: "Absolutely impressed! This is my go-to background remover now.",
    image: "https://randomuser.me/api/portraits/women/68.jpg"
  }
];

const Testimonial = () => {
  return (
    <div className='bg-gray-100 py-20 px-6 lg:px-32'>
      <h2 className='text-center text-2xl md:text-3xl lg:text-4xl font-semibold mb-12 bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent'>
        What Our Users Say
      </h2>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {testimonials.map((item, index) => (
          <div key={index} className='bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300'>
            <div className='flex items-center gap-4 mb-4'>
              <img src={item.image} alt={item.name} className='w-12 h-12 rounded-full object-cover' />
              <div>
                <p className='font-semibold'>{item.name}</p>
                <p className='text-sm text-gray-500'>{item.position}</p>
              </div>
            </div>
            <p className='text-gray-600 italic'>“{item.quote}”</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Testimonial
