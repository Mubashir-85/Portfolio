import React from 'react'

function Navbar() {
  return (
    <>
    <nav className='bg-black w-full h-16 items-center'>
        <div className='flex justify-between items-center w-full h-full px-4'>
            <div className='text-center flex justify-center items-center'>
                <h1 className='text-white sm:text-xl lg:text-2xl font-bold flex justify-center  mx-auto items-center text-center'>Portfolio</h1>
            </div>
            <div className='hidden md:flex justify-center items-center'>
                <ul className='flex justify-center items-center'>
                    <li className='text-white text-sm sm:text-base lg:text-lg font-medium mx-4 cursor-pointer'>Home</li>
                    <li className='text-white text-sm sm:text-base lg:text-lg font-medium mx-4 cursor-pointer'>About</li>
                    <li className='text-white text-sm sm:text-base lg:text-lg font-medium mx-4 cursor-pointer'>Projects</li>
                    <li className='text-white text-sm sm:text-base lg:text-lg font-medium mx-4 cursor-pointer'>Contact</li>
                </ul>
            </div>
        </div>
    </nav>
    </>
  )
}

export default Navbar