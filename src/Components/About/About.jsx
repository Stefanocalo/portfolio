import React, {useState, useRef, useEffect} from "react";
import { useSpring, animated } from "@react-spring/web";
import './About.css';
import { Language } from "./Language";

import {SiHtml5, SiCss3, SiJavascript, SiReact, SiTypescript} from 'react-icons/si';

export function About({setAboutPos, scrollY, aboutPos}) {

    const aboutRef = useRef();

    const [animateIn, setAnimateIn] = useState(false);

    useEffect(() => {
        if((aboutPos - 300) + scrollY > aboutPos) {
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

    const getPosition = () => {
        const y = aboutRef.current.offsetTop
        setAboutPos(y)
    };

    useEffect(() => {
        getPosition();
    }, []);

    useEffect(() => {
        document.addEventListener("scroll", () => {
            getPosition();
        })
    }, []);

    return( 
        <animated.section
        style={animateEnter}
        ref={aboutRef}
        id="about" className="sectionContainer">
            <h2 className="sectionTitle">.About Me</h2>
            <article>
                <div className='aboutSub'>
                    <h3 className="sub">Language I speak</h3>
                    <Language icon={<SiHtml5/>}>HTML5</Language>
                </div>
            </article>
        </animated.section>
    )
}