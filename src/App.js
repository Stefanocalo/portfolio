
import React, {useEffect, useState} from "react";
import { Mouse } from "./Components/Mouse/Mouse";
import { Navbar } from "./Components/Navbar/Navbar";
import { Banner } from "./Components/Banner/Banner";
import { About } from "./Components/About/About";
import { Project } from "./Components/Projects/Project";
import { Background } from "./Components/Background/Background";
import { ScrollTop } from "./Components/ScrollTop/ScrollTop";

function App() {

  const [mousePos, setMousePos] = useState([]);
  const [mouseHovering, setMouseHovering] = useState(false);

  //Mapping mouse position
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

  //Mapping window vertical scroll

  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    document.addEventListener("scroll", () => {
        getScroll();
    })
  }, []); 

  function getScroll() {
    const scroll = window.scrollY;
    setScrollY(scroll)
  };

  const [backgroundIndex, setBackgroundIndex] = useState(0);
  const [aboutPos, setAboutPos] = useState(0);
  const [projectPos, setProjectPos] = useState(0)

  useEffect(() => {
    if(scrollY + 300 > aboutPos && scrollY < projectPos - 300) {
      setBackgroundIndex(1)
    } else if(scrollY + 300 > projectPos - 200) {
      setBackgroundIndex(2)
    } else {
      setBackgroundIndex(0)
    }
  },[scrollY])
 

  return (
    <div className="app">
      <Mouse mousePos={mousePos} mouseHovering={mouseHovering}/>
      <Navbar setMouseHovering={setMouseHovering} />
      <Banner setMouseHovering={setMouseHovering}/>
      <About setAboutPos={setAboutPos} />
      <Project setProjectPos={setProjectPos}/>
      <Background backgroundIndex={backgroundIndex}/>
      <ScrollTop scrollY={scrollY} aboutPos={aboutPos} setMouseHovering={setMouseHovering}/>
    </div>
  );
}

export default App;
