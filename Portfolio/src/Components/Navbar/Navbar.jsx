// import { Link } from "lucide-react";
import { Link } from "react-router-dom";
import React from "react";

function Navbar() {
  const navLinks = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Projects",
      path: "/projects",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 w-full h-20 z-50 bg-[#0c0a09] backdrop-blur-2xl border-b border-[#292524]/50 shadow-[0_4px_30px_rgba(0,0,0,0.4)]">
        <div className="flex justify-between items-center w-full h-full px-6 lg:px-20 max-w-7xl mx-auto">
          {/* Logo - Typewriter Reveal */}
          <div className="group cursor-pointer">
            <h1
              className="text-2xl lg:text-4xl font-bold tracking-wide text-[#fafaf9]"
              style={{ fontFamily: "'Playfair Display', 'Georgia', serif" }}
            >
              {"Portfolio".split("").map((char, index) => (
                <span
                  key={index}
                  className="inline-block opacity-0"
                  style={{
                    animation: `typeReveal 0.6s ease-out forwards`,
                    animationDelay: `${index * 0.12}s`,
                  }}
                >
                  {char}
                </span>
              ))}
              <span
                className="inline-block w-[3px] h-[1em] bg-[#f59e0b] ml-1 align-middle"
                style={{
                  animation: "cursorBlink 1s step-end infinite",
                  animationDelay: "1.2s",
                }}
              />
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((item,index) => (
              <li
                key={index}
                className="relative px-5 py-2.5 text-sm lg:text-base font-medium text-[#a8a29e] hover:text-[#fafaf9] transition-all duration-300 group overflow-hidden"
                style={{ fontFamily: "'Inter', 'system-ui', sans-serif" }}
              >
                <Link to={item.path} className="relative z-10 tracking-wide">{item.name}</Link>
                <div className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-[#f59e0b] group-hover:w-full group-hover:left-0 transition-all duration-400 ease-out" />
              </li>
            ))}
            <button
              className="ml-6 px-7 py-2.5 rounded-full bg-[#1c1917] border border-[#44403c] text-[#fbbf24] text-sm font-semibold hover:bg-[#d97706] hover:text-white hover:border-[#f59e0b] hover:shadow-[0_0_25px_rgba(245,158,11,0.2)] active:scale-95 transition-all duration-300"
              style={{ fontFamily: "'Inter', 'system-ui', sans-serif" }}
            >
              Let's Talk
            </button>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <button className="text-[#a8a29e] hover:text-[#fafaf9] font-medium text-sm tracking-wide transition-colors duration-300">
              MENU
            </button>
          </div>
        </div>
      </nav>

      <div className="h-20" />

      <style>{`
        @keyframes typeReveal {
          0% {
            opacity: 0;
            transform: translateY(10px);
            filter: blur(4px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
        }
        @keyframes cursorBlink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </>
  );
}

export default Navbar;
