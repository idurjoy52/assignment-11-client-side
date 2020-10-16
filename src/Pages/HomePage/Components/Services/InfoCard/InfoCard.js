import React from 'react';
import { Link } from 'react-router-dom';

import { useSpring, animated } from 'react-spring'


const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

  
const InfoCard = (props) => {
    const {name,description,icon,image} = props.service;
    const [springProps, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))
    return (
        <div className="col-md-4 col-sm-6 d-flex justify-content-center">
            <Link to={`/order/${name}`}> 
                <animated.div 
                    className="card text-center mb-5" 
                    style={{width: "15rem",transform: springProps.xys.interpolate(trans)}} 
                    onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
                    onMouseLeave={() => set({ xys: [0, 0, 1] })}
                >
                    {image ? <img style={{width:"100px",height:"100px",display:"block"}} src={`data:image/png;base64,${image.img}`} className="card-img-top rounded-circle m-auto" alt="..."/> 
                            :
                            <img style={{width:"100px",height:"100px",display:"block"}} src={icon} className="card-img-top rounded-circle m-auto" alt="..."/>
                    }
                   
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{description}</p>
                    </div>
                </animated.div>
            </Link> 
        </div>
    );
};

export default InfoCard;