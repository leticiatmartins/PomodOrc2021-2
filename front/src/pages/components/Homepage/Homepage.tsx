import React from 'react';
import { useState, useEffect } from 'react';
import './Homepage.css';
import play from '../../../assets/play.svg';
import replay from '../../../assets/replay.svg';




const Homepage = () => {


    const [min, setMin] = useState(25);
    const [seg, setSeg] = useState(0);
    const [fullTime, setFullTime] = useState(min * 60 + seg);
    const [barProgress, setbarProgress] = useState(100);
    const [stoping, setStoping] = useState(false);
    const [start, setStart] = useState(false);
    const [toPause, setToPause] = useState(false);

    const handleTime = () => {

        if (toPause) {
            setToPause(false);
            return
        }
        setStart(true)
        if (seg === 0) {
            if (min === 0) {
                return
            } else {
                setMin(min - 1)
                setSeg(59)
            }
        } else {
            setTimeout(() => {
                setSeg(seg - 1);
            }, 1000)
        }
    }


    useEffect(() => {
        if (start === true)
            handleTime()
            handleBarProggress()
    }, [seg])

    const reset = () => {
        pauseTime()
        setStoping(true)
        setTimeout(() => {
            setMin(25)
            setSeg(0)
            setFullTime(60)
            setbarProgress(100)
            setStoping(false)
        }, 1000)
    }
    const handleBarProggress = () => {
        const time = min * 60 + seg
        const progress = (time * 100) / fullTime
        setbarProgress(progress)
    }

    const pauseTime = () => {
        setToPause(false)
        setStart(false)
    }

    return (
        <>
            <div className='homepageMenu'>
                <h1 className='homepageTitle'>POMOD'ORC</h1>
                <img className='play' onClick={start ? pauseTime : handleTime} src={play}></img>
                <img className='replay' onClick={reset} src={replay}></img>
                <div className="homeMainText">
                    {`${stoping ? "25" : min < 10 ? `0${min}` : min} : ${stoping ? "00" : seg < 10 ? `0${seg}` :  seg}`}
                </div>
            </div>
            <div className='progressBarBack'>
                <div className='progressBar' style={{width: `${stoping ? 100: barProgress}%`}} ></div>
            </div>

        </>
    )
}

export default Homepage
