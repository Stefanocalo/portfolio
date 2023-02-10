import React, {useState, useEffect} from "react";
import { useSpring, animated } from "@react-spring/web";

export function Skills({aboutPos, scrollY}) {

    const [animateIn, setAnimateIn] = useState(false);

    useEffect(() => {
        if((aboutPos - 750) + scrollY > aboutPos) {
            setAnimateIn(true);
        }
    },[scrollY])

    const animateEnter = useSpring({
        opacity: animateIn ? 1 : 0,
        transform: animateIn ? 'translateY(0px)' : 'translateY(100px)',
        config: {
            tension: 300,
            friction: 15
        }
    })




    return(
        <animated.div
        style={animateEnter}
        className="skillsContainer">
            <p className="skill">Team Work</p>
            <p className="skill">Leadership</p>
            <p className="skill">Critical Thinking</p>
            <p className="skill">Communication</p>
            <p className="skill">Listener</p>
            <p className="skill">Adaptability</p>
        </animated.div>
    )
}