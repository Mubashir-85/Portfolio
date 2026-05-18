import React from 'react'

function Navbar() {
  return (
    <>
      <nav className='fixed top-0 left-0 w-full h-20 z-50 bg-zinc-950/90 backdrop-blur-2xl border-b border-zinc-800/50'>
        <div className='flex justify-between items-center w-full h-full px-6 lg:px-20 max-w-7xl mx-auto'>
          
          {/* Logo - Shimmer Animation */}
          <div className='group cursor-pointer relative overflow-hidden'>
            <h1 
              className='text-2xl lg:text-4xl font-black tracking-tight bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent'
              style={{
                backgroundImage: 'linear-gradient(90deg, #34d399 0%, #2dd4bf 25%, #22d3ee 50%, #2dd4bf 75%, #34d399 100%)',
                backgroundSize: '200% auto',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                animation: 'shimmer 3s linear infinite'
              }}
            >
              Portfolio
            </h1>
            <div 
              className='absolute inset-0 pointer-events-none'
              style={{
                background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)',
                backgroundSize: '200% 100%',
                animation: 'shimmer 3s linear infinite',
                mixBlendMode: 'overlay'
              }}
            />
          </div>

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center gap-1'>
            {['Home', 'About', 'Projects', 'Contact'].map((item) => (
              <a
                key={item}
                className='relative px-5 py-2.5 text-sm lg:text-base font-medium text-zinc-500 hover:text-emerald-400 transition-colors duration-300 group overflow-hidden'
              >
                <span className='relative z-10'>{item}</span>
                <div className='absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-emerald-400 to-cyan-400 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out' />
              </a>
            ))}
            <button className='ml-6 px-7 py-2.5 rounded-full border border-emerald-500/30 text-emerald-400 text-sm font-semibold hover:bg-emerald-500/10 hover:border-emerald-500/60 hover:shadow-[0_0_20px_rgba(16,185,129,0.15)] active:scale-95 transition-all duration-300'>
              Let's Talk
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className='md:hidden'>
            <button className='text-zinc-400 hover:text-emerald-400 font-medium text-sm tracking-wide transition-colors duration-300'>
              MENU
            </button>
          </div>

        </div>
      </nav>

      <div className='h-20' />

      <style>{`
        @keyframes shimmer {
          0% { background-position: 200% center; }
          100% { background-position: -200% center; }
        }
      `}</style>
    </>
  )
}

export default Navbar