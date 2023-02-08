import React, {useRef, useEffect} from "react";
import './Footer.css'
import {TbCopyright} from 'react-icons/tb';
import {AiFillLinkedin} from 'react-icons/ai';
import {SiGmail} from 'react-icons/si';

export function Footer({scrollY, setIsBottom}) {

    const footer = useRef();

    useEffect(() => {
        if(scrollY - 100 + window.innerHeight > footer.current.offsetTop) {
            setIsBottom(true);
        } else {
            setIsBottom(false);
        }
    },[scrollY])

    return(
        <div
        ref={footer}
        className="footerContainer">
           <div className="copyright">
                <span className="copy"><TbCopyright />Stefano Calò</span>
           </div>
           <div className="footerSection">
                <a href="https://www.linkedin.com/in/stefano-calo0705" target='_blank'><AiFillLinkedin
                        className="footerIcon"/></a>
                <SiGmail 
                onClick={() => window.open('https://mail.google.com/mail/?view=cm&fs=1&to=stefano.cal92@gmail.com')}
                className="footerIcon"/>
           </div>
           <div className="footerSection">
                <a className="footerLink" href="#about">About</a>
                <a className="footerLink" href="#projects">Project</a>
                <a className="footerLink" href="#contact">Contact</a>
           </div>
        </div>
    )
}