import React, {useEffect, useState} from "react";
import { useSpring, animated } from "@react-spring/web";
import './Hamburger.css';

export function Hamburger({setMouseHovering}) {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        if(!animate) {
            return
        }
        console.log('ok')
        const timeoutId = setTimeout(() => {
            setAnimate(false);
        },150);           

        return () => {
            clearTimeout(timeoutId);
        }
    }, [animate])

    const topBar = useSpring({
        transform: animate ? 'rotate(18deg)' : 'rotate(0deg)',
        config: {
            friction: 12,
            tension: 300
        }
    })

    const lowBar = useSpring({
        transform: animate ? 'rotate(-18deg)' : 'rotate(0deg)',
        config: {
            friction: 12,
            tension: 300
        }
    })

    const middleBar = useSpring({
        scale: animate ? 0.7 : 1,
        config: {
            friction: 12,
            tension: 300
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