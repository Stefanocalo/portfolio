import React, {useState, useEffect} from "react";
import { useSpring, animated } from "@react-spring/web";

export function NavButton({children, setMouseHovering}) {


    return(
        <div
        onMouseEnter={() => setMouseHovering(true)}
        onMouseLeave={() => setMouseHovering(false)}
        >
            <a href="#">{children}</a>
        </div>
    )
}