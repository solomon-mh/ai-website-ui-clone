import { NavLink } from "react-router-dom";
import jibyteLogo from "../assets/logos/jibyte-logo.svg";
import { useEffect, useState } from "react";
const Navigation = () => {
  const [scrollPostion, setScrollPosition] = useState(0);
  useEffect(() => {
    const handleSCroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleSCroll);
    return () => window.removeEventListener("scroll", handleSCroll);
  }, []);
  const handleBackgroundChange = () => {
    // console.log(scrollPostion);
    const scrollTheshold = 50;
    if (scrollPostion >= scrollTheshold) {
      return "white";
    } else {
      return "transparent";
    }
  };
  return (
    <div
      style={{ backgroundColor: handleBackgroundChange() }}
      className='navigation transition-all duration-700 fixed w-full z-50 flex justify-between border-1 border-gray-400 shadow-xl py-4 px-6'
    >
      <div className='logo'>
        <img src={jibyteLogo} alt='jibyteAI-logo' />
      </div>
      <div className='navs hidden md:block ml-16'>
        <nav className=''>
          <NavLink className='navlinks'>Home</NavLink>
          <NavLink className='navlinks'>Features</NavLink>
          <NavLink className='navlinks'>How it Works</NavLink>
          <NavLink className='navlinks'>Testimonial</NavLink>
          <NavLink className='navlinks'>Pricing</NavLink>
          <NavLink className='navlinks'>FAQ</NavLink>
        </nav>
      </div>
      <div className='contact-us'>
        <NavLink className='contact-links border-1 border-black'>㊗</NavLink>
        <NavLink className='contact-links border-1 border-gray-400'>
          Sign In
        </NavLink>
        <NavLink className='contact-links bg-gray-200 '>Join Hub</NavLink>
      </div>
    </div>
  );
};

export default Navigation;
