import React, { useState } from 'react';
import './ShowText.css';

function ToggleText() {

    const [displayText, setDisplayText] = useState(false);
    const [customText, setCustomText] = useState('');
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const toggleText = () => {
        if (customText.trim() === '') {
            setError("Text can't be empty!");
            setSuccessMessage('');
        } else {
            setError('');
            setDisplayText(true);
            setSuccessMessage('Text displayed successfully!');
        }
    };

    const handleInputChange = (e) => {
        setCustomText(e.target.value);
        setError('');
        setSuccessMessage('');
    };

    const hideText = () => {
        setDisplayText(false);
        setCustomText('');
        setSuccessMessage('');
    };

    return (
        <div className="toggle-text-container">
            <p className='Def-text'>This is the default text to show or hide text.</p>
            <input
                type='text'
                placeholder='Enter Text'
                value={customText}
                onChange={handleInputChange}
                className="input-text"
            />
            <button className="toggle-btn" onClick={displayText ? hideText : toggleText}>
                {displayText ? 'Hide Text' : 'Show Text'}
            </button>
            {error && <p className="error-text">{error}</p>}
            {successMessage && <p className="success-text">{successMessage}</p>}
            <p className="displayed-text">{displayText && !error ? customText : ""}</p>
        </div>
    );
}

export default ToggleText;
