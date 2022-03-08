import React from 'react'

export default function RangeSlider({ answer, onChange, min, max }) {
  const labelStyle = {
    position: 'absolute',
    margin: '0 25px',
    transform: 'translateY(-40px)',
    left: `${answer}%`,
    textAlign: 'center',
  }

  return (
    <div className='RangeInput'>
      {/* <label for='range' style={labelStyle}>
        {answer}
      </label> */}

      <div
        className='RangeOverlay'
        style={{ width: `${(answer * 100) / max}%` }}
      ></div>
      <input
        type='range'
        min={min}
        max={max}
        value={answer}
        className='RangeSlider'
        onChange={onChange}
      />
      <div className='EdgeValues'>
        <p>{min}</p>
        <p>{max}</p>
      </div>
    </div>
  )
}
