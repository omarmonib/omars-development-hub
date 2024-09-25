import React, { useState } from 'react'
import './StyleColorBox.css'

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
}

function ColorBox() {

    const [color, setColor] = useState(getRandomColor);

    const handleClick = () => {
        setColor(getRandomColor());
    }

  return (
      <div className='Contaner-ColorBox'>
          <div className='BoxClick' onClick={handleClick} style={{ backgroundColor: color }}>
          <p>Click me to change color Box!</p>
    </div>
      </div>
  )
}

export default ColorBox
