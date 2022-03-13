import React from 'react'

export default function RangeSlider({ answer, onChange, min, max }) {
  const rangePercentage = Number(((answer - min) * 100) / (max - min))

  return (
    <div className='RangeInput'>
      {/* Input label. */}
      <output
        for='range'
        className='RangeLabel'
        style={{
          left: `calc(${rangePercentage}% + (${13 - rangePercentage * 0.5}px))`,
        }}
      >
        {answer}
      </output>

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
