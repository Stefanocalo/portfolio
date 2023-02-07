import React, {useState, useEffect} from "react";
import { useSpring, animated } from "@react-spring/web";
import { NavButton } from "../NavButton/NavButton";
import { Hamburger } from "../Hamburger/Hamburger";
import './Navbar.css';

export function Navbar({setMouseHovering}) {

    const [logoHover, setLogoHover] = useState(false);  
    const [isOpen, setIsOpen] = useState(false);

    function triggerEnter() {
        setLogoHover(true);
    }

    function triggerLeave() {
        setLogoHover(false);
    }

    const logo = useSpring({
        scale: logoHover ? 1.5 : 1,

    })

    const menu = useSpring({
        height: isOpen ? '100vh' : '6vh',
        config: {
            friction: 15,
            tension: 200
        }
    })

    //Hamburger menu 


    useEffect(() => {
        if(!isOpen) {
            document.body.style.overflow = 'auto';
        } else {
            document.body.style.overflow = 'hidden';
        }

    },[isOpen])
   

    return(
        <animated.div 
        className="navbarContainer"
        style={menu}
        >
            <div className="left">
                <animated.span
                style={logo}
                onMouseEnter={() => triggerEnter()}
                onMouseLeave={() => triggerLeave()}
                className="logo">SC.</animated.span>
            </div>
           <div className="right">
                <Hamburger setMouseHovering={setMouseHovering} isOpen={isOpen} setIsOpen={setIsOpen} />
                <ul className="navbarLinks">
                    <li><NavButton setMouseHovering={setMouseHovering} setIsOpen={setIsOpen} isOpen={isOpen} url={'about'}>About</NavButton></li>
                    <li><NavButton setMouseHovering={setMouseHovering} setIsOpen={setIsOpen} isOpen={isOpen} url={'projects'}>Projects</NavButton></li>
                    <li><NavButton setMouseHovering={setMouseHovering} setIsOpen={setIsOpen} isOpen={isOpen} url={'about'}>Contact</NavButton></li>
                </ul>
           </div>
        </animated.div>
    )
}