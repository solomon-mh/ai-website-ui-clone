import Features from "./Features";
import { NavLink, Outlet } from "react-router-dom";
import "../styles/component-styling.css";
import JibyteAiUsers from "./JibyteAiUsers";
import CustomTemplates from "./CustomTemplates";
import JiByteTools from "./JiByteTools";
// import ShowMoreCards from "../utils/ShowMoreCards";
const FeaturesContainer = () => {
  const activeStyle = {
    background: "white",
    color: "black",
    opacity: "1",
    border: "white",
    filter: "drop-shadow(0 0 12px #ddd)",
  };
  return (
    <div>
      <Features />
      <section className='w-90perc m-auto py-20 px-12 border-2 rounded-4xl '>
        <div className='feature-navs grid md:grid-cols-5 gap-8 my-8'>
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
