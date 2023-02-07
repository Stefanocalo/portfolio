import React, {useState, useEffect} from "react";
import { useSpring, animated } from "@react-spring/web";
import {CiLocationArrow1} from 'react-icons/ci';
import './Banner.css';

export function Banner({setMouseHovering}) {

    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        if(!animate) {
            return
        }
        const timeoutId = setTimeout(() => {
            setAnimate(false);
        },350);

        return () => {
            clearTimeout(timeoutId)
        }
    },[animate]);

    useEffect(() => {
        if(animate) {
            return
        }
        const timeoutId = setTimeout(() => {
            setAnimate(true);
        },2000);

        return () => {
            clearTimeout(timeoutId)
        }
    },[animate]);

    const seeMore = useSpring({
        transform: animate ? 'translateY(1rem)' : 'translateY(0rem)',
        config: {
            tension: 180,
            friction: 15
        }
    })

    function handleClick() {
        const element = document.getElementById('about');
        element.scrollIntoView();
    }

    return(
        <animated.div
        className='bannerContainer'
        >
            <img className="heroPic" src={require('../media/Subject.png')} alt='Stefano Calo picture'/>
            <div className="heroText">
                <h1 className="bannerTitle">hey, i'm stefano!</h1>
                <h4 className="bannerSub">A front-end focused developer building the frontend of websites and web applications</h4>
            </div>
            <div 
            onMouseEnter={() => setMouseHovering(true)}
            onMouseLeave={() => setMouseHovering(false)}
            onClick={() => handleClick()}
            className='seeMore'>
                <span>See more</span>
                <animated.div
                style={seeMore}
                >
                    <CiLocationArrow1 className="icon"/>
                </animated.div>
            </div>

        </animated.div>
    )
}