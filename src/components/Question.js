import React, { useState } from 'react'
import { motion } from 'framer-motion'

import RangeInput from './RangeInput'
import TextInput from './TextInput'

export default function Question({
  question,
  answer,
  icon,
  minValue,
  maxValue,
  onChange,
}) {
  return (
    <motion.div initial={{ x: -350 }} animate={{ x: 0 }} className='Question'>
      <h2>{question}</h2>
      <img src={icon} alt='' />

      <RangeInput
        answer={answer}
        min={minValue}
        max={maxValue}
        onChange={onChange}
      />
      <TextInput answer={answer} onChange={onChange} />
    </motion.div>
  )
}
