import React, { useState } from 'react'

export default function RangeSlider({ answer, onChange, min, max }) {
  const [rangePercentage, setRangePercentage] = useState((answer * 100) / max)

  // const rangePercentage = (answer * 100) / max

  return (
    <div className='RangeInput'>
      {/* Input label. */}
      <label
        for='range'
        style={{ left: `${rangePercentage}%` }}
        className='RangeLabel'
      >
        {answer}
      </label>

      {/* Range input. */}
      <input
        type='range'
        min={min}
        max={max}
        value={answer}
        className='RangeSlider'
        onChange={onChange}
      />

      {/* Overlay for coloring progress bar. */}
      <div
        className='RangeOverlay'
        style={{ width: `${rangePercentage}%` }}
      ></div>

      {/* Shows the min and max values. */}
      <div className='EdgeValues'>
        <p>{min}</p>
        <p>{max}</p>
      </div>
    </div>
  )
}
