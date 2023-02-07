import React, {useState, useEffect} from "react";
import { useSpring, animated } from "@react-spring/web";
import { NavButton } from "../NavButton/NavButton";
import { Hamburger } from "../Hamburger/Hamburger";
import './Navbar.css';

export function Navbar({setMouseHovering}) {

    const [logoHover, setLogoHover] = useState(false);  

    function triggerEnter() {
        setLogoHover(true);
    }

    function triggerLeave() {
        setLogoHover(false);
    }

    const logo = useSpring({
        scale: logoHover ? 1.5 : 1,

    })

   

    return(
        <div className="navbarContainer">
            <div className="left">
                <animated.span
                style={logo}
                onMouseEnter={() => triggerEnter()}
                onMouseLeave={() => triggerLeave()}
                className="logo">SC.</animated.span>
            </div>
           
           <div className="left">
                 <Hamburger setMouseHovering={setMouseHovering} />
                <ul className="navbarLinks">
                    <li><NavButton setMouseHovering={setMouseHovering} url={'about'}>About</NavButton></li>
                    <li><NavButton setMouseHovering={setMouseHovering} url={'projects'}>Projects</NavButton></li>
                    <li><NavButton setMouseHovering={setMouseHovering} url={'about'}>Contact</NavButton></li>
                </ul>
           </div>
        </div>
    )
}