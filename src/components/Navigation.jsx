import { NavLink } from "react-router-dom";
import jibyteLogo from "../assets/logos/jibyte-logo.svg";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLanguage,
  faNavicon,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import {
  FeaturesPosition as FP,
  homePosition as HP,
  HowItWorksPosition as HWP,
} from "../data/scrollPosition";
const Navigation = () => {
  const [scrollPostion, setScrollPosition] = useState(0);
  useEffect(() => {
    const handleSCroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleSCroll);
    return () => window.removeEventListener("scroll", handleSCroll);
  }, []);

  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleBackgroundChange = () => {
    const scrollTheshold = 50;
    // console.log(scrollPostion);
    if (scrollPostion >= scrollTheshold) {
      return "white";
    } else {
      return "transparent";
    }
  };
  // console.log(Boolean(HP.min < scrollPostion < HP.max));
  // console.log(Boolean(FP.min < scrollPostion < FP.max));
  console.log(`SCROLL POSITION: ${scrollPostion}`);

  const handleColorChange = () => {
    const scrollTheshold = 50;
    if (scrollPostion <= scrollTheshold) {
      return "white";
    } else {
      return "black";
    }
  };
  return (
    <header>
      <div
        style={{
          backgroundColor: handleBackgroundChange(),
          color: handleColorChange(),
        }}
        className='navigation transition-all duration-700 fixed w-full z-50 flex justify-between items-center border-1 border-gray-400 shadow-xl py-4 px-6'
      >
        <div className='logo'>
          <img src={jibyteLogo} alt='jibyteAI-logo' />
        </div>
        <div className='navs hidden md:block ml-16'>
          <nav className=''>
            <NavLink
              className={`${
                HP.min <= scrollPostion && scrollPostion <= HP.max
                  ? "bg-simpleLightGray"
                  : ""
              }
              navlinks`}
            >
              Home
            </NavLink>
            <NavLink
              className={`${
                FP.min <= scrollPostion && scrollPostion <= FP.max
                  ? "bg-simpleLightGray"
                  : ""
              }
              navlinks`}
            >
              Features
            </NavLink>
            <NavLink
              className={`
            ${
              HWP.min <= scrollPostion && scrollPostion <= HWP.max
                ? "bg-simpleLightGray"
                : ""
            }
            navlinks`}
            >
              How it Works
            </NavLink>
            <NavLink className='navlinks'>Testimonial</NavLink>
            <NavLink className='navlinks'>Pricing</NavLink>
            <NavLink className='navlinks'>FAQ</NavLink>
          </nav>
        </div>
        <div className='contact-us flex items-center mx-12 md:mx-4'>
          <NavLink className='hidden md:inline-block contact-links border-1 border-black'>
            <FontAwesomeIcon
              icon={faLanguage}
              style={{ padding: "5px", marginTop: "2px" }}
            />
          </NavLink>
          <NavLink className='contact-links border-1 py-2 px-3 border-gray-400 hover:border-transparent'>
            Sign In
          </NavLink>
          <NavLink className='contact-links py-2 px-3 border-1 border-gray-400 hover:border-transparent'>
            Join Hub
          </NavLink>
        </div>
        <div
          onClick={toggleMenu}
          className='md:hidden bg-purple-300 bg-opacity-20 text-black text-xl absolute right-8 border-1 border-transparent py-1 px-2.5  rounded-full'
        >
          {menuOpen ? (
            <FontAwesomeIcon icon={faTimes} />
          ) : (
            <FontAwesomeIcon icon={faNavicon} />
          )}
        </div>
      </div>
      {menuOpen && (
        <div className='md:hidden'>
          <nav className='overlay bg-slate-700 py-4 text-white flex flex-col'>
            <NavLink className='mx-4 py-1 my-1 px-5 w-fit hover:bg-gray-600 rounded-xl duration-300'>
              Home
            </NavLink>
            <NavLink className='mx-4 py-1 my-1 px-5 w-fit hover:bg-gray-600 rounded-xl duration-300'>
              Features
            </NavLink>
            <NavLink className='mx-4 py-1 my-1 px-5 w-fit hover:bg-gray-600 rounded-xl duration-300'>
              How it Works
            </NavLink>
            <NavLink className='mx-4 py-1 my-1 px-5 w-fit hover:bg-gray-600 rounded-xl duration-300'>
              Testimonial
            </NavLink>
            <NavLink className='mx-4 py-1 my-1 px-5 w-fit hover:bg-gray-600 rounded-xl duration-300'>
              Pricing
            </NavLink>
            <NavLink className='mx-4 py-1 my-1 px-5 w-fit hover:bg-gray-600 rounded-xl duration-300'>
              FAQ
            </NavLink>
            <hr className='bg-slate-400 my-2' />
            <div>
              <NavLink className='mx-4 py-1 my-1 px-5'>
                <FontAwesomeIcon icon={faLanguage} />
                <span className='mx-2'>Languages</span>
              </NavLink>
              <p className='mx-4 py-1 my-1 px-5 hover:bg-slate-800'>
                <span className='text-xs mx-1'>GB</span>English
              </p>
              <p className='mx-4 py-1 my-1 px-5 hover:bg-slate-800'>
                <span className='text-xs mx-1'>uz</span>o&rsquo;zbekcha
              </p>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navigation;
