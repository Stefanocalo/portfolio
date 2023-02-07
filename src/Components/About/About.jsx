import React, {useState, useRef, useEffect} from "react";
import './About.css';

export function About({setAboutPos}) {

    const aboutRef = useRef();

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
        <section
        ref={aboutRef}
        id="about" className="aboutContainer">
            <h2 className="sectionTitle">.About Me</h2>
            <article>
                <p >ckanca ikaenfnao nfianfanneoa noafnoafmn oam</p>
                <p >ckanca ikaenfnao nfianfanneoa noafnoafmn oam</p>

                <p >ckanca ikaenfnao nfianfanneoa noafnoafmn oam</p>

                <p >ckanca ikaenfnao nfianfanneoa noafnoafmn oam</p>

                <p >ckanca ikaenfnao nfianfanneoa noafnoafmn oam</p>

                <p >ckanca ikaenfnao nfianfanneoa noafnoafmn oam</p>

                <p >ckanca ikaenfnao nfianfanneoa noafnoafmn oam</p>

                <p >ckanca ikaenfnao nfianfanneoa noafnoafmn oam</p>
                <p >ckanca ikaenfnao nfianfanneoa noafnoafmn oam</p>


            </article>
        </section>
    )
}