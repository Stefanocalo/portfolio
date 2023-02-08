
import React, {useEffect, useState} from "react";
import { Mouse } from "./Components/Mouse/Mouse";
import { Navbar } from "./Components/Navbar/Navbar";
import { Banner } from "./Components/Banner/Banner";
import { About } from "./Components/About/About";
import { Project } from "./Components/Projects/Project";
import { Contact } from "./Components/Contact/Contact";
import { Footer } from "./Components/Footer/Footer";
import { Background } from "./Components/Background/Background";
import { ScrollTop } from "./Components/ScrollTop/ScrollTop";
import { ProjectDetail } from "./Components/Projects/Projectdetail";

function App() {

  const [mousePos, setMousePos] = useState([]);
  const [mouseHovering, setMouseHovering] = useState(false);
  const [isBottom, setIsBottom] = useState(false);

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
  const [projectPos, setProjectPos] = useState(0);
  const [contactPos, setContactPos] = useState(0);

  useEffect(() => {
    if(scrollY + 300 > aboutPos && scrollY < projectPos - 300) {
      setBackgroundIndex(1)
    } else if(scrollY + 300 > projectPos - 200 && scrollY < contactPos - 300) {
      setBackgroundIndex(2)
    } else if(scrollY + 300 > contactPos - 200) {
      setBackgroundIndex(3)
    } else {
      setBackgroundIndex(0)
    }
  },[scrollY]);

  //Project Modal

  const [active, setActive] = useState(false);
  const [data, setData] = useState([]);
 

  return (
    <div className="app">
      <Mouse mousePos={mousePos} mouseHovering={mouseHovering}/>
      <Navbar active={active} setMouseHovering={setMouseHovering} />
      <Banner setMouseHovering={setMouseHovering}/>
      <About scrollY={scrollY} aboutPos={aboutPos} setAboutPos={setAboutPos} />
      <Project setData={setData} setActive={setActive} scrollY={scrollY} setProjectPos={setProjectPos} projectPos={projectPos}/>
      <Contact setMouseHovering={setMouseHovering} scrollY={scrollY} contactPos={contactPos} setContactPos={setContactPos} />
      <Footer scrollY={scrollY} setIsBottom={setIsBottom}/>
      <Background backgroundIndex={backgroundIndex}/>
      <ScrollTop isBottom={isBottom} scrollY={scrollY} aboutPos={aboutPos} setMouseHovering={setMouseHovering}/>
      <ProjectDetail active={active} setActive={setActive} data={data} />
    </div>
  );
}

export default App;
