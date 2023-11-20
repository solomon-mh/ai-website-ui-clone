import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faPlay,
//   faTimes,
//   faBoltLightning,
// } from "@fortawesome/free-solid-svg-icons";
import Home from "./pages/Home";
import AiTextGenerator from "./components/features-section/AiTextGenerator";
import AiImageGenerator from "./components/features-section/AiImageGenerator";
import AiChatbot from "./components/features-section/AiChatbot";
import AiSpeechToText from "./components/features-section/AiSpeechToText";
import AiCodeGenerator from "./components/features-section/AiCodeGenerator";
// import FeaturesContainer from "./components/FeaturesContainer";
function App() {
  return (
    <div className='App overflow-hidden'>
      <Router>
        <Routes>
          <Route path='/' element={<Home />}>
            <Route index element={<AiTextGenerator />} />
            <Route path='/aiimagegenerator' element={<AiImageGenerator />} />
            <Route path='/aichatbot' element={<AiChatbot />} />
            <Route path='/aispeechtotext' element={<AiSpeechToText />} />
            <Route path='/aicodegenerator' element={<AiCodeGenerator />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
