import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt } from "@fortawesome/free-solid-svg-icons";
import NotificationHeader from "../utils/NotificationHeader";
import "../styles/component-styling.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Hero = () => {
  const functionalities = ["Chatbot", "Assistant", "Genrator"];
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
      if (currentIndex > 1) {
        setCurrentIndex(0);
      }
    }, 2500);
    // console.log(currentIndex);
    return () => clearInterval(intervalId);
  });
  return (
    <div className='Hero text-white text-center py-44 opacity-90'>
      <NotificationHeader
        name='JiByteAI'
        content='Unleash the power of AI'
        textColor='white'
        bgColor='var(--lighter-blue-notification-btn-color)'
      />
      <div className='md:w-3/5 m-auto px-12'>
        <header className='md:w-1/2 m-auto'>
          <h1 className='text-white text-7.5xl transition-all duration-700'>
            Ultimate AI {functionalities[currentIndex]}
            <FontAwesomeIcon
              icon={faBolt}
              style={{ fontSize: "4rem", marginLeft: "12px" }}
            />
          </h1>
        </header>
        <article>
          <p className='w-3/4 text-xl m-auto p-6'>
            All-in-one platform to generate AI content and start making money in
            minutes.
          </p>
        </article>
        <div className='hero-button'>
          <button className='font-sans font-bold my-6 py-4 px-8 rounded-xl transition-all duration-500 bg-slate-800 hover:bg-black hover:scale-105'>
            <span>
              <FontAwesomeIcon icon={faBolt} style={{ marginRight: "10px" }} />
            </span>
            Start Making Money.
          </button>
        </div>
        <div className='text-blue-200 features my-4 hover:text-white'>
          <Link to='#features'>Discover Jibyte AI</Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
