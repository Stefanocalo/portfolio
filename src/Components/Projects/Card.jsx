import React, {useState, useEffect} from "react";
import { useSpring, animated } from "@react-spring/web";

export function Card({title, description, tags, src, offset, width, setData, setActive}) {

    const [expand,setExpand] = useState(false);

    useEffect(() => {
        if(width < 1080) {
            if(expand) {
                return
            }
            setExpand(true)
        }
        if(width > 1100) {
            setExpand(false)
        }
    },[width])
   
    const info = useSpring({
        height: expand ? '90%' : '0%',
        padding: expand ? '10% 4%' : '0% 4%',
        borderRadius: expand ? '15px' : '0px',
        config: {
            tension: 200,
            friction: 10
        }
    });

    const transform = offset && 'translateY(50%)';

    function handleClick() {
        setActive(true);
        setData([title, description, tags, src]);
    }


    return(
        <>
        <div
        style={{transform: transform}}
        onMouseEnter={() => setExpand(true)}
        onMouseLeave={() => setExpand(false)}
        className="project">
        <img className="projectPic" src={src} alt='Stefano Calo picture'/>
        <animated.div
        style={info}
        onClick={() => handleClick()}
        className='info'
        >
            <h3 className="projectTitle">{title}</h3>
            <span className="description">{description}</span>
            <div className="tagsContainer">
                {tags.map(tag => (
                    <span className='language'>{tag}</span>
                ))}
            </div>
        </animated.div>
        </div>
        </>
    )
}