import React from 'react'

const Footer = () => {
  return (
    <div className="flex flex-col  bg-gradient-to-b from-gray-400 to-black pt-8  md:pt-16"> {/* Footer */}
      <div className="flex flex-col md:flex-row w-full h-auto md:h-64 justify-between items-center  space-y-4 px-4 md:px-36 text-sm sm:text-sm md:text-2xl font-lato font-light text-white tracking-wide space-y-0md:space-y-0">
       
        <ul className='flex md:flex-col space-x-6 md:space-x-0 md:space-y-4'>
          <li className='hover:text-black cursor-pointer transition-all duration-300'>TRENDS</li>
          <li className='hover:text-black cursor-pointer transition-all duration-300'>NEWS</li>
          <li className='hover:text-black cursor-pointer transition-all duration-300'>AUSBILDUNG</li>
          <li className='hover:text-black cursor-pointer transition-all duration-300'>JOBS</li>
          <li className='hover:text-black cursor-pointer transition-all duration-300'>GUTSCHEINE</li>
        </ul>
        <ul className='flex md:flex-col space-x-6 md:space-x-0 md:space-y-4'>
          <li className='hover:text-black cursor-pointer transition-all duration-300'>FACEBOOK</li>
          <li className='hover:text-black cursor-pointer transition-all duration-300'>INSTAGRAM</li>
          <li className='hover:text-black cursor-pointer transition-all duration-300'>TWITTER</li>
          <li className='hover:text-black cursor-pointer transition-all duration-300'>YOUTUBE</li>
          
        </ul>
        <ul className='flex flex-col space-y-4 md:space-y-6 items-center '>
          <li className='text-center pt-12'>NEWSLETTER</li>
          <button className='h-10 md:h-12 w-full px-4 md:px-6 text-sm md:text-lg font-roboto font-thin bg-black rounded-full hover:bg-gray-600 transition-all duration-300'>
            NEWSLETTER ABONNIEREN
          </button>
        </ul>
      </div>
      <div className="flex flex-col mt-6 justify-center items-center w-full text-white h-24 md:h-32 pb-4 md:pb-12">
        <div className="flex justify-center items-center text-white space-x-2">
          <h3 className='text-gray-400 hover:text-white cursor-pointer px-2'>Privacy Policy</h3>
          <h3>|</h3>
          <h3 className='text-gray-400 hover:text-white cursor-pointer px-2'>Terms & Conditions</h3>
        </div>
        <h3 className='text-xs md:text-sm text-center'>Copyright 2024 © MyBrightByte All Rights Reserved.</h3>
        <h3 className='text-xs md:text-sm text-center'>Webdesign and Code - Made by MyBrightByte</h3>
      </div>
    </div>
  )
}

export default Footer
