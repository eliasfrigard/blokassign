import React from 'react'

export default function RangeSlider({ answer, onChange, min, max }) {
  const rangePercentage = (answer * 100) / max

  return (
    <div className='RangeInput'>
      <label
        for='range'
        style={{ left: `${rangePercentage}%` }}
        className='RangeLabel'
      >
        {answer}
      </label>

      <div
        className='RangeOverlay'
        style={{ width: `${rangePercentage}%` }}
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
