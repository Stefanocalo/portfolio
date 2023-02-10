import React, {useEffect, useState} from "react";
import { useSpring, animated } from "@react-spring/web";
import './Background.css'

export function Background({backgroundIndex}) {

    const [multiplyer, setMultiplyer] = useState(22)
    const [padding, setPadding] = useState(90)

    useEffect(() => {
        if(window.innerWidth <= 900) {
            setMultiplyer(23)
            setPadding(42)
        } else {
            if(multiplyer !== 22) {
                setMultiplyer(22);
                setPadding(90)
            }
        }

    },[window.innerWidth]);

    const background = useSpring({
        transform: `translateX(-${multiplyer * backgroundIndex}%)`,
        paddingLeft: `${padding}rem`,
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