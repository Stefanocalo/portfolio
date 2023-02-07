import React, {useState} from "react";
import { useSpring, animated } from "@react-spring/web";
import './Background.css'

export function Background({backgroundIndex}) {


    const background = useSpring({
        transform: `translateX(-${22 * backgroundIndex}%)`,
        config: {
            tension: 200,
            friction: 13,
        }
    })

    return(
        <animated.div
        style={background}
        className='backgroundContainer'
        >
            <span className='background'>.about</span>
            <span className='background'>.projects</span>
            <span className='background'>.contact</span>
            <span className='background'>.home</span>
        </animated.div>
    )
}