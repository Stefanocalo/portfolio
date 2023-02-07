import React, {useState, useEffect} from "react";
import { useSpring, animated } from "@react-spring/web";
import './NavButton.css';

export function NavButton({children, setMouseHovering, url}) {

    const [animate, setAnimate] = useState(false);
    const [isHover, setIsHover] = useState(false);

    useEffect(() => {
        if(!animate) {
            return
        }
        const timeoutId = setTimeout(() => {
            setAnimate(false);
        },150);

        return () => {
            clearTimeout(timeoutId)
        }
    },[animate]);

    function triggerEnter() {
        setMouseHovering(true);
        setAnimate(true);
        setIsHover(true);
    }

    function triggerLeave() {
        setMouseHovering(false);
        setIsHover(false);
    };

    const link = useSpring({
        scale:  animate ? 1.3 : 1,
        config: {
            friction: 10,
            tension: 300
        }

    })



    return(
        <div className="buttonContainer">
            <animated.div
            className="navLink"
            style={link}
            onClick={() => setAnimate(true)}
            onMouseEnter={() => triggerEnter()}
            onMouseLeave={() => triggerLeave()}
            >
                <a
                className="link" href={`#${url}`}>{children}</a>
            </animated.div>
        </div>
    )
}