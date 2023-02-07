import React, {useEffect, useState} from "react";
import { useSpring, animated } from "@react-spring/web";
import './Hamburger.css';

export function Hamburger({setMouseHovering, isOpen, setIsOpen}) {

    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        if(!animate) {
            return
        }
        const timeoutId = setTimeout(() => {
            setAnimate(false);
        },50);           

        return () => {
            clearTimeout(timeoutId);
        }
    }, [animate])

    const topBar = useSpring({
        transform: isOpen || animate ? 'translateY(0.5rem) rotate(225deg)' : 'translateY(0rem) rotate(0deg)',
        config: {
            tension: 300,
            mass: 1,
            friction: 10,
        }
    })

    const lowBar = useSpring({
        transform: isOpen || animate ? 'translateY(-0.55rem) rotate(-225deg)' : 'translateY(0rem) rotate(0deg)',
        config: {
            tension: 300,
            mass: 1,
            friction: 10,
        }
    })

    const middleBar = useSpring({
        scale: isOpen || animate ? 0 : 1,
        config: {
            tension: 200,
            mass: 1,
            friction: 14,
        }
    })

    function trigger() {
        setMouseHovering(true);
        setAnimate(true);
    }

    return(
        <div
        onMouseEnter={() => trigger()}
        onMouseLeave={() => setMouseHovering(false)}
        onClick={() => setIsOpen(!isOpen)}
        className="hamburger">
           <animated.div
           style={topBar}
           className="bar">

           </animated.div>

           <animated.div 
           className="bar"
           style={middleBar}
           >

           </animated.div>

           <animated.div 
           className="bar"
           style={lowBar}
           >

           </animated.div>
        </div>
    )
}