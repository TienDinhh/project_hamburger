import React from 'react'
 


export const Hero = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4'>
        <div className='max-h-[500px] relative'>
            {/* Overlay */}
            <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex-col justify-center'>
                 <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>The <span className='text-orange-500'>Best</span></h1>
                 <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>Foods <span className='text-orange-500'>Delivered</span></h1>
            </div>
            <img className = 'max-h-[500px] w-full object-cover' src="https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=300" alt="" />
        </div>
    </div>
  )
}
