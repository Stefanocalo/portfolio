import React, {useState, useEffect} from "react";
import { useSpring, animated } from "@react-spring/web";
import './ScrollTop.css';

export function ScrollTop({scrollY, aboutPos, setMouseHovering}) {

    const [show, setShow] = useState(false);
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        if(!animate) {
            return
        }
        const timeoutId = setTimeout(() => {
            setAnimate(false)
        },150);

        return() => {
            clearTimeout(timeoutId);
        }
    },[animate])

    useEffect(() => {
        if(scrollY > aboutPos) {
           if(show) {
            return
           }
           setShow(true)
           setAnimate(true)
        } else {
            if(!show) {
                return
            }
            setShow(false)
        }
    },[scrollY])

    const scrollTop = useSpring({
        bottom: show ? '2rem' : '-7rem',
        scale: animate ? '1.2' : '1',
        config: {
            tension: 300,
            friction: 12
        }
    })

    function triggerEnter() {
        setMouseHovering(true);
        setAnimate(true);
    }

    function triggerLeave() {
        setMouseHovering(false);
    }

    return(
        <animated.div
        onClick={() => window.scrollTo({top: 0})}
        onMouseEnter={() => triggerEnter()}
        onMouseLeave={() => triggerLeave()}
        style={scrollTop}
        className='scrollTopContainer'
        >
            <span>Top</span>
        </animated.div>
    )
}