import React, {useState, useRef, useEffect} from "react";
import { useSpring, animated } from "@react-spring/web";
import './Projects.css';
import { Card } from "./Card";
import reddit from '../media/reddit.png'
import weather from '../media/weather.png';
import todo from '../media/todo.png';
import memory from '../media/memory.png';
import cea from '../media/cea.png';
import { AiFillGithub } from "react-icons/ai";

export function Project({setProjectPos, projectPos, scrollY, setData, setActive, setMouseHovering}) {

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

        if(width <= 1119) {
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

    //Animate

    const [animate, setAnimate] = useState(false)

    function triggerMouseHover(instruction) {
        setMouseHovering(instruction);
        setAnimate(instruction)
    };

    useEffect(() => {
        if(animate) {
            const timeoutId = setTimeout(() => {
                setAnimate(false);
            },150)

            return () => {
                clearTimeout(timeoutId);
            }
        }
    },[animate])

    const git = useSpring({
        scale: animate ? 1.1 : 1,
        config: {
            tension: 300,
            friction: 10
        }
    })

    return( 
        <animated.section
        style={animateEnter}
        ref={projectRef}
        id="projects" className="sectionContainer">
            <h2 className="sectionTitle">.Projects</h2>
            <article>
              <div className="projectsContainer">
                <Card
                    setData={setData}
                    setActive={setActive}
                    scrollY={scrollY}
                    width={width} 
                    offset={false}
                    title={'CEA'}
                    src={cea}
                    code={''}
                    link={''}
                    description={'An effective worksite and acceptances manager.'}
                    tags={['React Native', 'Redux', 'TypeScript']}
                    about={'Manage with ease materials, worksites and acceptances.'}
                />
                <Card
                    setData={setData}
                    setActive={setActive}
                    scrollY={scrollY}
                    width={width} 
                    offset={offset}
                    title={'Reddit Client'}
                    src={reddit}
                    code={'https://github.com/Stefanocalo/Reddit-Client'}
                    link={'https://redditcli.netlify.app'}
                    description={'A Reddit Client.'}
                    tags={['React', 'Redux', 'JavaScript', 'CSS']}
                    about={'A platform made to let the user explore Reddit without the need to log in!'}
                />
                <Card 
                    setData={setData}
                    setActive={setActive}
                    width={width} 
                    offset={false}
                    title={'To-do App'}
                    src={todo}
                    link={'https://to-do-task-app.netlify.app'}
                    code={'https://github.com/Stefanocalo/to-do-app'}
                    description={'A to-do app to help you avoid procrastination.'}
                    tags={['React', 'Redux', 'JavaScript', 'CSS']}
                    about={'A To Do App to make your life easier.Feel free to organise your tasks with different tags and choose to filter a particular task if you want to focus on particular tasks.From today also supporting theming!Choose between a variety of different light and dark themes.'}
                />
                <Card
                    setData={setData}
                    setActive={setActive}
                    width={width}
                    offset={offset}
                    title={'Weather App'}
                    src={weather}
                    code={'https://github.com/Stefanocalo/weather-app'}
                    link={'https://city-forecast-app.netlify.app'}
                    description={`A complete weather app. Let's check if we need a jumper or a t-shirt.`}
                    tags={['React', 'Redux', 'JavaScript', 'CSS']}
                    about={'A simple but effective weather app using third party api. Feel free to change units between Celsius and fahrenheit, add, remove bookmark and check the weather for the upcoming 2 days.'}
                />
                <Card
                    setData={setData}
                    setActive={setActive} 
                    width={width}
                    offset={false}
                    title={'Memory Game'}
                    src={memory}
                    code={'https://github.com/Stefanocalo/memory-game'}
                    link={'https://rick-memory.netlify.app'}
                    description={'A simple game to keep your mind sharp.'}
                    tags={['React', 'JavaScript', 'CSS']}
                    about={'A beautiful Rick & Morty themed memory game build using React!'}
                />
                </div>
                <animated.div
                onClick={() => window.open(`https://github.com/Stefanocalo`)}
                style={git}
                onMouseEnter={() => triggerMouseHover(true)}
                onMouseLeave={() => triggerMouseHover(false)}
                className="githubWrapper">
                    <AiFillGithub className="linkIcon"/>
                    <span>Check my GitHub profile</span>
                </animated.div>

            </article>
        </animated.section>
    )
}