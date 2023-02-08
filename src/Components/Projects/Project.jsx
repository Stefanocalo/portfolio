import React, {useState, useRef, useEffect} from "react";
import { useSpring, animated } from "@react-spring/web";
import './Projects.css';
import { Card } from "./Card";
import reddit from '../media/reddit.png'
import weather from '../media/weather.png';
import todo from '../media/todo.png';
import memory from '../media/memory.png';
import portfolio from '../media/portfolio.png';

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

    //setOffset false on smaller screens

    const [offset, setOffset] = useState(true);
    const [width, setWidth] = useState(0);

    useEffect(() => {
        let width = window.innerWidth;
        setWidth(width);
    },[window.innerWidth])

    useEffect(() => {

        if(width <= 1110) {
            if(!offset) {
                return
            }
            setOffset(false);
        } else {
            if(offset) {
                return
            }
            setOffset(true)
        }
    },[width])


    console.log(offset)


    return( 
        <animated.section
        style={animateEnter}
        ref={projectRef}
        id="projects" className="sectionContainer">
            <h2 className="sectionTitle">.Projects</h2>
            <article>
              <div className="projectsContainer">
                    <Card
                    width={width} 
                    offset={false}
                    title={'Reddit Client'}
                    src={reddit}
                    description={'A Reddit Client that let you explre the social without the need to log in.'}
                    tags={['React', 'JavaScript', 'CSS']}
                    />
                    <Card 
                    width={width} 
                    offset={offset}
                    title={'To-do App'}
                    src={todo}
                    description={'A to-do app to help you avoid procrastination.'}
                    tags={['React', 'JavaScript', 'CSS']}
                    />
                     <Card 
                    width={width}
                    offset={false}
                    title={'Weather App'}
                    src={weather}
                    description={`A complete weather app. Let's check if we need a jumper or a t-shirt.`}
                    tags={['React', 'JavaScript', 'CSS']}
                    />
                    <Card 
                    width={width}
                    offset={offset}
                    title={'Memory Game'}
                    src={memory}
                    description={'A simple game to keep your mind sharp.'}
                    tags={['React', 'JavaScript', 'CSS']}
                    />
                    <Card
                    width={width} 
                    offset={false}
                    title={'Personal Portfolio'}
                    src={portfolio}
                    description={'A glimpse of me.'}
                    tags={['React', 'JavaScript', 'CSS']}
                    />
              </div>

            </article>
        </animated.section>
    )
}