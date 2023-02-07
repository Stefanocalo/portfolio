
import React, {useEffect, useState} from "react";
import { Mouse } from "./Components/Mouse/Mouse";
import { Navbar } from "./Components/Navbar/Navbar";
import { Banner } from "./Components/Banner/Banner";
import { About } from "./Components/About/About";

function App() {

  const [mousePos, setMousePos] = useState([]);
  const [mouseHovering, setMouseHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePos({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener(
        'mousemove',
        handleMouseMove
      );
    };
  }, []);

 

  return (
    <div className="app">
      <Mouse mousePos={mousePos} mouseHovering={mouseHovering}/>
      <Navbar setMouseHovering={setMouseHovering} />
      <Banner setMouseHovering={setMouseHovering}/>
      <About />
    </div>
  );
}

export default App;
