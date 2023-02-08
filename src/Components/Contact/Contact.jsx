import React, {useState, useRef, useEffect} from "react";
import { useSpring, animated } from "@react-spring/web";
import './Contact.css';
import {AiFillLinkedin} from 'react-icons/ai';
import {SiGmail} from 'react-icons/si';

export function Contact({setContactPos, scrollY, contactPos, setMouseHovering}) {

    const contactRef = useRef();

    const [animateIn, setAnimateIn] = useState(false);
    const [popLinkedin, setPopLinkedin] = useState(false);
    const [popGmail, setPopGmail] = useState(false);

    useEffect(() => {
        if((contactPos *0.2) + scrollY > contactPos) {
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
        const y = contactRef.current.offsetTop
        setContactPos(y)
    };

    useEffect(() => {
        getPosition();
    }, []);

    useEffect(() => {
        document.addEventListener("scroll", () => {
            getPosition();
        })
    }, []);

    //Gmail and Linkedin description animations

    const linkedin = useSpring({
        opacity: popLinkedin ? 1 : 0,
        scale: popLinkedin ? 1 : 0,
        config: {
            friction: 12,
            tension: 300
        }
    })

    const gmail = useSpring({
        opacity: popGmail ? 1 : 0,
        scale: popGmail ? 1 : 0,
        config: {
            friction: 12,
            tension: 300
        }

    })

    function triggerLinkedin(instruction) {
        setMouseHovering(instruction);
        setPopLinkedin(instruction);
    }

    function triggerGmail(instruction) {
        setMouseHovering(instruction);
        setPopGmail(instruction);
    }





    return( 
        <animated.section
        style={animateEnter}
        ref={contactRef}
        id="contact" className="sectionContainer">
            <h2 className="sectionTitle">.Contact</h2>
            <article>
                <span className="contactMe">Get in touch with me via social media or email.</span>
                <div className="contactContainer">
                    <div className="iconContainer">
                        <a href="https://www.linkedin.com/in/stefano-calo0705" target='_blank'><AiFillLinkedin
                        className="contactIcon"
                        onMouseEnter={() => triggerLinkedin(true)}
                        onMouseLeave={() => triggerLinkedin(false)}
                        /></a>
                        <animated.span
                        
                        style={linkedin}
                        className='contactType'>Linkedin</animated.span>
                    </div>
                    <div className="iconContainer">
                        <SiGmail 
                        className="contactIcon"
                        onClick={() => window.open('https://mail.google.com/mail/?view=cm&fs=1&to=stefano.cal92@gmail.com')}
                        onMouseEnter={() => triggerGmail(true)}
                        onMouseLeave={() => triggerGmail(false)}
                        />
                        <animated.span
                        style={gmail}
                        className='contactType'>Gmail</animated.span>
                    </div>
                </div>
            </article>
        </animated.section>
    )
}