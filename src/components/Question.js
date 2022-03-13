import React from 'react'

// Using framer motion for animation.
import { motion } from 'framer-motion'

// Components
import RangeInput from './RangeInput'
import TextInput from './TextInput'

/**
 * This component represents a single question.
 * It includes input fields for answering this question.
 * @param {} param0
 * @returns
 */
export default function Question({
  icon,
  question,
  inputValue,
  minValue,
  maxValue,
  onChange,
}) {
  return (
    <motion.div initial={{ x: -350 }} animate={{ x: 0 }} className='Question'>
      <h2>{question}</h2>
      <img src={icon} alt='' />

      <RangeInput
        value={inputValue}
        min={minValue}
        max={maxValue}
        onChange={onChange}
      />

      <TextInput value={inputValue} onChange={onChange} />
    </motion.div>
  )
}
