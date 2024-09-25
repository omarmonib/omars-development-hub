import React, { useEffect, useState } from 'react';
import './StyleCountdownTimer.css';

function CountdownTimer() {
    const [time, setTime] = useState(30);
    const [isActive, setIsActive] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const [initialTime, setInitialTime] = useState(30);

    useEffect(() => {
        let interval = null;

        if (isActive && !isPaused && time > 0) {
            interval = setInterval(() => {
                setTime(prevTime => prevTime - 1);
            }, 1000);
        } else if (!isActive) {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [time, isActive, isPaused]);

    const startTime = () => {
        setIsActive(true);
        setIsPaused(false);
    }

    const pausedTime = () => {
        setIsPaused(!isPaused);
    }

    const resetTime = () => {
        setTime(initialTime);
        setIsActive(false);
        setIsPaused(false);
    }

    const handleTimeChange = (e) => {
        setInitialTime(Number(e.target.value));
        setTime(Number(e.target.value));
    };

    return (
        <div className='Wrapper-CountDwnTime'>
            <div className='CountDwnTime'>
                <h1>Countdown Timer</h1>
                <label>Set Initial Time: </label>
                <input type='number' value={initialTime} onChange={handleTimeChange} disabled={isActive} />
                <h2>{time > 0 ? time : 'Time is up!'}</h2>
                <button onClick={startTime} disabled={isActive && !isPaused}>Start Time</button>
                <button onClick={pausedTime} disabled={!isActive}>{isPaused ? 'Resume' : 'Pause'}</button>
                <button onClick={resetTime} disabled={!isActive && time === initialTime}>Reset Time</button>
            </div>
        </div>
    );
}

export default CountdownTimer;
