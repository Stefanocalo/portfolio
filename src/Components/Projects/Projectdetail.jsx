import React, {useEffect, useState} from "react";
import { useSpring, animated } from "@react-spring/web";
import './Projectdetail.css';
import {IoMdArrowRoundBack} from 'react-icons/io';
import {GiWorld} from 'react-icons/gi';
import {AiFillGithub} from 'react-icons/ai';


export function ProjectDetail({active, setActive, data}) {

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

    const appear = useSpring({
        scale: active ? 1 : 0,
        right: active ? '0%' : '-110%',
    })

    const focusOut = document.getElementById('id01');
    function closeDetail(event) {
        event.target == focusOut && setActive(false);
    }

    
    return(
        <animated.div
        style={modal}
        onClick={(e) => closeDetail(e)}
        id='id01'
        className='projectExpandContainer'>
            <div className="projectWrapper">
                <animated.div
                style={appear}
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
                    </animated.div>
                    <div className="brief">
                        <div className='subSection'>
                            <h3 className="projectTitle">{data[0]}</h3>
                            <span className="description">{data[1]}</span> 
                            <div
                            onClick={() => data[5]?.length > 0 && window.open(`${data[5]}`)}
                            className="imgContainer">
                                <img className="detailPic" src={data[3]} alt='Stefano Calo picture'/>
                            </div>
                        </div>
                        <div className="subSecton">
                            <span className="sub">About</span>
                            <p>{data[6]}</p>
                        </div>
                        <div className="subSection">
                            <span className="sub">Technologies</span>
                            <div className="tags">
                              {data[2]?.map((tag, index) => (
                                    <span key={index} className='language'>{tag}</span>
                              ))}
                            </div>
                            {
                                data[5]?.length > 0 &&
                                <div className="subSecton website">
                                <div className="siteLink">
                                    <span className="sub">Website </span>
                                    <GiWorld />
                                </div>
                                <a href={data[5]} target='_blank'>{data[5]}</a>
                                </div>
                            }
                            <animated.div 
                            style={appear}
                            className="detailFooter">
                                <div 
                                onClick={() => data[4]?.length > 0 && window.open(`${data[4]}`)}
                                className="footerDetails">
                                    <AiFillGithub className="linkIcon"/>
                                    <span>{data[4]?.length > 0 ? 'Check the code on GitHub' : 'Code not available'}</span>
                                </div>
                            </animated.div>
                        </div>
                    </div>
            </div>
        </animated.div>
    )
}