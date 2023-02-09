import React, {useState} from "react";
import { useSpring, animated } from "@react-spring/web";

export function Language({icon, children, setMouseHovering}) {

    const [animate, setAnimate] = useState(false);

    const popUp = useSpring({
        opacity: animate ? 1 : 0,
        scale: animate ? 1 : 0,
        config: {
            friction: 12,
            tension: 300
        }
    });

    function trigger(instruction) {
        setAnimate(instruction);
        setMouseHovering(instruction);
    }

    return(
        <div
        onMouseEnter={() => trigger(true)}
        onMouseLeave={() => trigger(false)}
        className="languageCard">
            {icon}               
            <animated.span
            style={popUp}
            className='contactType'>{children}</animated.span>
        </div>
    )
}