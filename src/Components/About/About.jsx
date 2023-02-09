import React, {useState, useRef, useEffect} from "react";
import { useSpring, animated } from "@react-spring/web";
import './About.css';
import { Language } from "./Language";

import {SiHtml5, SiCss3, SiJavascript, SiReact, SiTypescript} from 'react-icons/si';

export function About({setAboutPos, scrollY, aboutPos, setMouseHovering}) {

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
                    <h3 className="subTitle">Language I speak</h3>
                    <div className="languageContainer">
                        <Language setMouseHovering={setMouseHovering} icon={<SiHtml5 className="contactIcon"/>}>HTML5</Language>
                        <Language setMouseHovering={setMouseHovering} icon={<SiCss3 className="contactIcon"/>}>CSS3</Language>
                        <Language setMouseHovering={setMouseHovering} icon={<SiJavascript className="contactIcon"/>}>JAVASCRIPT</Language>
                        <Language setMouseHovering={setMouseHovering} icon={<SiTypescript className="contactIcon"/>}>TYPESCRIPT</Language>
                        <Language setMouseHovering={setMouseHovering} icon={<SiReact className="contactIcon"/>}>REACT</Language>
                    </div>
                    <h3 className="subTitle">Some of my skills</h3>
                    <div className="skillsContainer">
                    </div>
                </div>
            </article>
        </animated.section>
    )
}