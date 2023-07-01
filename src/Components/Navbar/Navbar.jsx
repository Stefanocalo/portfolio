import React, {useState, useEffect} from "react";
import { useSpring, animated } from "@react-spring/web";
import { NavButton } from "../NavButton/NavButton";
import { Hamburger } from "../Hamburger/Hamburger";
import './Navbar.css';

export function Navbar({setMouseHovering, active}) {

    const [isOpen, setIsOpen] = useState(false);

    const menu = useSpring({
        height: isOpen ? '100vh' : '6vh',
        top: active ? '-100%' : '0%',
        config: {
            tension: 180,
            friction: 20
        }
    })

    //Hamburger menu 


    useEffect(() => {
        if(!isOpen) {
            document.body.style.overflow = 'auto';
        } else {
            document.body.style.overflow = 'hidden';
        }

    },[isOpen]);

    const list = useSpring({
        height: isOpen ? '90vh' : '0vh',
        scale: isOpen ? 1 : 0,
        config: {
            tension: 180,
            friction: 15
        }
    });
   

    return(
        <animated.div 
        className="navbarContainer"
        style={menu}
        >
            <div className="left">
                <span
                className="logo">SC.</span>
            </div>
            <div className="right">
                <Hamburger setMouseHovering={setMouseHovering} isOpen={isOpen} setIsOpen={setIsOpen} />
                <ul
                className="navbarLinks">
                    <li><NavButton setMouseHovering={setMouseHovering} setIsOpen={setIsOpen} isOpen={isOpen} url={'about'}>About</NavButton></li>
                    <li><NavButton setMouseHovering={setMouseHovering} setIsOpen={setIsOpen} isOpen={isOpen} url={'projects'}>Projects</NavButton></li>
                    <li><NavButton setMouseHovering={setMouseHovering} setIsOpen={setIsOpen} isOpen={isOpen} url={'contact'}>Contact</NavButton></li>
                </ul>
            </div>
            <animated.ul
                style={list}
                className="mobileLinks">
                <li><NavButton setMouseHovering={setMouseHovering} setIsOpen={setIsOpen} isOpen={isOpen} url={'about'}>About</NavButton></li>
                <li><NavButton setMouseHovering={setMouseHovering} setIsOpen={setIsOpen} isOpen={isOpen} url={'projects'}>Projects</NavButton></li>
                <li><NavButton setMouseHovering={setMouseHovering} setIsOpen={setIsOpen} isOpen={isOpen} url={'contact'}>Contact</NavButton></li>
            </animated.ul>
        </animated.div>
    )
}