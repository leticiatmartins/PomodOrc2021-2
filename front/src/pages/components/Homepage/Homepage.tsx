import React from 'react';
import { useState } from 'react';
import './Homepage.css';
import play from '../../../assets/play.svg';
import replay from '../../../assets/replay.svg';

function Homepage () {
    const[min, setMin] = useState (10);
    const[seg, setSeg] = useState (0);
    return(
        <>
            <div className='homepageMenu'>
                <h1 className='homepageTitle'>POMOD'ORC</h1>
                <img className='play' src={play}></img>
                <img className='replay' src={replay}></img>
                <div className="homeMainText">
                    {`${min < 10 ? `0${min}` : min} : ${seg < 10 ? `0${seg}` :  seg}`}
                </div>
            </div>
            <div className='progressBarBack'>
                <div className='progressBar'></div>
            </div>

        </>
    )
}

export default Homepage
