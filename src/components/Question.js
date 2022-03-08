import React, { useState } from 'react'

import RangeInput from './RangeInput'
import TextInput from './TextInput'

export default function Question({ question, icon, minValue, maxValue }) {
  // State variables.
  const [answer, setAnswer] = useState(Math.round(maxValue / 2))

  // Handle change of answer input.
  const handleChange = (event) => {
    const newValue = parseInt(event.target.value)

    // Check if new value is within boundaries.
    if (newValue < minValue || newValue > maxValue) return

    // Set new value.
    setAnswer(event.target.value)
  }

  return (
    <div className='Question'>
      <h2>{question}</h2>
      <img src={icon} alt='' />

      <RangeInput
        answer={answer}
        min={minValue}
        max={maxValue}
        onChange={handleChange}
      />
      <TextInput answer={answer} onChange={handleChange} />
    </div>
  )
}
