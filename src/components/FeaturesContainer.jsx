import Features from "./Features";
import { NavLink, Outlet } from "react-router-dom";
import "../styles/component-styling.css";
import JibyteAiUsers from "./JibyteAiUsers";
import CustomTemplates from "./CustomTemplates";
import JiByteTools from "./JiByteTools";
const FeaturesContainer = () => {
  const activeStyle = {
    background: "white",
    color: "black",
    opacity: "1",
    border: "white",
    filter: "drop-shadow(0 0 12px #ddd)",
  };
  return (
    <div id='Features'>
      <Features />
      <section className='mx-6 sm:w-3/4 sm:m-auto md:w-fit md:mx-8 py-20 px-12 md:px-4 border-2 rounded-4xl lg:w-90perc'>
        <div className='feature-navs grid sm:grid-cols-2 lg:grid-cols-5 gap-8 my-8'>
          <NavLink
            to='/'
            style={({ isActive }) => (isActive ? activeStyle : null)}
            className='features-section-nav'
          >
            AI Text Generator
          </NavLink>
          <NavLink
            to='aiimagegenerator'
            style={({ isActive }) => (isActive ? activeStyle : null)}
            className='features-section-nav'
          >
            AI Image Generator
          </NavLink>
          <NavLink
            to='aicodegenerator'
            style={({ isActive }) => (isActive ? activeStyle : null)}
            className='features-section-nav'
          >
            AI Code Generator
          </NavLink>
          <NavLink
            to='aichatbot'
            style={({ isActive }) => (isActive ? activeStyle : null)}
            className='features-section-nav'
          >
            AI Chat bot
          </NavLink>
          <NavLink
            to='aispeechtotext'
            style={({ isActive }) => (isActive ? activeStyle : null)}
            className='features-section-nav'
          >
            AI Speech To Text
          </NavLink>
        </div>
        <Outlet />
        <JibyteAiUsers />
        <CustomTemplates />
        <JiByteTools />
      </section>
    </div>
  );
};

export default FeaturesContainer;
