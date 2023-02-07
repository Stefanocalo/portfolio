import React, {useState, useRef, useEffect} from "react";
import './Projects.css';

export function Project({setProjectPos}) {

    const projectRef = useRef();

    const getPosition = () => {
        const y = projectRef.current.offsetTop
        setProjectPos(y)
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
        ref={projectRef}
        id="projects" className="aboutContainer">
            <h2 className="sectionTitle">.Projects</h2>
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