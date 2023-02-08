import React, {useEffect, useState} from "react";
import { useSpring, animated } from "@react-spring/web";
import './Projectdetail.css';
import {IoMdArrowRoundBack} from 'react-icons/io';
import {GiWorld} from 'react-icons/gi';
import {AiFillGithub} from 'react-icons/ai';
import reddit from '../media/reddit.png'
import weather from '../media/weather.png';
import todo from '../media/todo.png';
import memory from '../media/memory.png';
import portfolio from '../media/portfolio.png';

export function ProjectDetail({active, setActive, data, src}) {

    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        if(!active) {
            document.body.style.overflow = 'auto';
        } 
        if(active) {
            document.body.style.overflow = 'hidden';
        }
    },[active]);
    
    const modal = useSpring({
        right: active ? '0%' : '-110%',
        opacity: active ? 1 : 0,
        config: {
            tension: 150,
            friction: 20
        }
    })

    //Animation

    useEffect(() => {
        if(!animate) {
            return
        }

        const timeoutId = setTimeout(() => {
            setAnimate(false);
        },50)

        return() => {
            clearTimeout(timeoutId);
        }
    })

    const back = useSpring({
        transform: animate ? 'translateX(-10px)' : 'translateX(0px)',
        config: {
            tension: 300,
            friction: 10
        }
    });
    
    return(
        <animated.div
        style={modal}
        className='projectExpandContainer'>
            <div className="projectWrapper">
                <div
                onClick={() => setActive(false)} 
                onMouseEnter={() => setAnimate(true)}
                className="nav">
                    <animated.div
                    className='backIcon'
                    style={back}
                    >
                        <IoMdArrowRoundBack style={{fontSize: '1.5rem', color: 'rgb(58,58,58'}}/>
                    </animated.div>
                    <animated.span 
                    style={back}
                    className="back">back to projects</animated.span>
                </div>
                    <div className="brief">
                        <div className='subSection'>
                            <h3 className="projectTitle">{data[0]}</h3>
                            <span className="description">{data[1]}</span> 
                            <div className="imgContainer">
                                <img className="projectPic" src={data[3]} alt='Stefano Calo picture'/>
                            </div>
                        </div>
                        <div className="subSecton">
                            <span className="sub">About</span>
                        </div>
                        <div className="subSection">
                            <span className="sub">Technologies</span>
                            <div className="tags">
                              {data[2]?.map(tag => (
                                    <span className='language'>{tag}</span>
                              ))}
                            </div>
                            <div className="subSecton website">
                                <span className="sub">Website </span>
                                <GiWorld />
                            </div>
                            <div className="detailFooter">
                                <div className="footerDetails">
                                    <AiFillGithub className="linkIcon"/>
                                    <span>Check the code on GitHub</span>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </animated.div>
    )
}