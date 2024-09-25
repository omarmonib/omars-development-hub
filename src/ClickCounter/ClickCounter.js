import React, { useState } from 'react';
import './ClickCounter.css';

function ClickCounter() {
    const [count, setCount] = useState(0);

    const handleIncrement = () => setCount(count + 1);
    const handleDecrement = () => setCount(count > 0 ? count - 1 : 0);
    const handleReset = () => setCount(0);

    return (
        <div className='Counter-Container'>
            <div className='click-counter-container'>
                <p className='click-counter-text'>You clicked {count} times</p>
                <div className='button-group'>
                    <Button className='btn-increase' onClick={handleIncrement}>Increase</Button>
                    <Button className='btn-decrease' onClick={handleDecrement}>Decrease</Button>
                    <Button className='btn-reset' onClick={handleReset}>Reset</Button>
                </div>
            </div>
        </div>
    );
}

const Button = ({ className, onClick, children }) => (
    <button className={`click-counter-btn ${className}`} onClick={onClick}>
        {children}
    </button>
);

export default ClickCounter;
