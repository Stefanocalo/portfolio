import React, {useState, useRef, useEffect} from "react";
import { useSpring, animated } from "@react-spring/web";
import './Projects.css';

export function Project({setProjectPos, projectPos, scrollY}) {

    const projectRef = useRef();

    const [animateIn, setAnimateIn] = useState(false);

    useEffect(() => {
        if((projectPos*0.25 + scrollY) > projectPos) {
            setAnimateIn(true);
        }
    },[scrollY])


    const animateEnter = useSpring({
        opacity: animateIn ? 1 : 0,
        transform: animateIn ? 'translateY(0px)' : 'translateY(100px)',
        config: {
            tension: 300,
            friction: 11
        }
    })

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
        <animated.section
        style={animateEnter}
        ref={projectRef}
        id="projects" className="sectionContainer">
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
        </animated.section>
    )
}