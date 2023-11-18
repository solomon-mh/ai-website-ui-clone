import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faTimes } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <>
      <h1 className='text-3xl text-brightRed'>Hello World</h1>
      <h1>
        <FontAwesomeIcon icon={faPlay} />
        <br />
        <FontAwesomeIcon icon={faTimes} />
      </h1>
    </>
  );
}

export default App;
