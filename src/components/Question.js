import React, { useState } from 'react'

import RangeInput from './RangeInput'
import TextInput from './TextInput'

export default function Question({ question, icon, minValue, maxValue }) {
  const style = {
    height: '100%',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    gap: '15px',
    padding: '25px 0',
  }

  const imgStyle = {
    width: '130px',
  }

  const [answer, setAnswer] = useState(Math.round(maxValue / 2))

  return (
    <div className='Question' style={style}>
      <h2>{question}</h2>
      <img src={icon} alt='' style={imgStyle} />

      <RangeInput
        answer={answer}
        min={minValue}
        max={maxValue}
        onChange={(e) => setAnswer(e.target.value)}
      />
      <TextInput answer={answer} onChange={(e) => setAnswer(e.target.value)} />
    </div>
  )
}
