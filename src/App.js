
import React, {useEffect, useState} from "react";
import { Mouse } from "./Components/Mouse/Mouse";
import { Navbar } from "./Components/Navbar/Navbar";

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
    <>
      <Mouse mousePos={mousePos} mouseHovering={mouseHovering}/>
      <Navbar setMouseHovering={setMouseHovering} />
    </>
  );
}

export default App;
