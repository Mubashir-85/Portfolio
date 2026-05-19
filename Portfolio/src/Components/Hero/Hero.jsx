import React from 'react'

function Hero() {
  return (
    <div className='h-screen bg-[#0c0a09] flex items-center justify-center'>
      <div>
        <div className='flex flex-col items-center justify-center h-full px-6 lg:px-20 max-w-7xl mx-auto text-center'>
          <h2 className='text-3xl lg:text-5xl font-bold tracking-wide text-[#fbbf24] mb-4' style={{ fontFamily: "'Playfair Display', 'Georgia', serif" }}>
            Hi, Mubashir here! <span className='wave'>👋</span>
          </h2>
          <p className='text-lg lg:text-xl text-[#a8a29e] mb-6 max-w-2xl' style={{ fontFamily: "'Inter', 'system-ui', sans-serif" }}>
            Java Full Stack Developer who loves turning ideas into real-world projects using Java, Spring Boot, React, and AI tools.
          </p>
          <button 
            className='px-7 py-3 rounded-full bg-[#1c1917] border border-[#44403c] text-[#fbbf24] text-sm font-semibold hover:bg-[#d97706] hover:text-white hover:border-[#f59e0b] hover:shadow-[0_0_25px_rgba(245,158,11,0.2)] active:scale-95 transition-all duration-300'
            style={{ fontFamily: "'Inter', 'system-ui', sans-serif" }}
          >
            View My Work
          </button>
        </div>  
      </div>

    </div>
  )
}

export default Hero