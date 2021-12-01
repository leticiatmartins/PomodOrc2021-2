import { useState } from 'react';
import React from 'react'
import './Homepage.css'
import play from '../../../assets/play.svg';
import replay from '../../../assets/replay.svg';


const[min, setMin] = useState (10)
const[seg, setSeg] = useState (0)


function Homepage () {
    return(
        <div className='homepageMenu'>
            <h1 className='homepageTitle'>POMOD'ORC</h1>
            <img className='play' src={play}></img>
            <img className='replay' src={replay}></img>
            <div className="homeMainText"/>
            {`${min < 10 ? `0${min}` : min} : ${seg < 10 ? `0${seg}` :  seg}`}
        </div>
    )
}

export default Homepage
