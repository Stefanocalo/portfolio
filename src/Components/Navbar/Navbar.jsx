import React, {useState, useEffect} from "react";
import { useSpring, animated } from "@react-spring/web";
import { NavButton } from "../NavButton/NavButton";
import { Hamburger } from "../Hamburger/Hamburger";
import './Navbar.css';

export function Navbar({setMouseHovering}) {

  
   

    return(
        <div className="navbarContainer">
            <Hamburger setMouseHovering={setMouseHovering} />
            <ul className="navbarLinks">
               <li><NavButton setMouseHovering={setMouseHovering}>Test</NavButton></li>
               <li><NavButton setMouseHovering={setMouseHovering}>Test</NavButton></li>
               <li><NavButton setMouseHovering={setMouseHovering}>Test</NavButton></li>
               <li><NavButton setMouseHovering={setMouseHovering}>Test</NavButton></li>
            </ul>
        </div>
    )
}