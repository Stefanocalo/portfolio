import React, {useState, useEffect} from "react";
import { useSpring, animated } from "@react-spring/web";
import './NavButton.css';

export function NavButton({children, setMouseHovering}) {

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
        //border: isHover ? ' 1px solid rgba(88, 88, 88, 0.3)' :  ' 1px solid rgba(88, 88, 88, 0.0)',
        scale: isHover? 1.3 : 1,
        fontWeight: animate ? 500 : 400,
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
            onMouseEnter={() => triggerEnter()}
            onMouseLeave={() => triggerLeave()}
            >
                <a
                className="link" href="#">{children}</a>
            </animated.div>
        </div>
    )
}