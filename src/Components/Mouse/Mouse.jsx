import React from "react";
import { useSpring, animated } from "@react-spring/web";

import './Mouse.css';

export function Mouse({mousePos, mouseHovering}) {

    const outerMouse = useSpring({
        top: mousePos.y - 30,
        left: mousePos.x - 30,
        border: mouseHovering ? '1px solid rgba(88, 88, 88, 0.7)' : '1px solid rgba(88, 88, 88, 0.3)',
        width: mouseHovering ? '6rem' : '4rem',
        height: mouseHovering ? '6rem' : '4rem',
        config: {
            friction: 12,
            tension: 180
        }
    })

    return(
        <>
        <animated.div
        style={outerMouse}
        className='outerMouse'
        >
        </animated.div>
        </>
    )
}