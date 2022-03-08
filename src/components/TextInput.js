import React from 'react'

export default function TextInput({ answer, onChange }) {
  return (
    <input
      type='text'
      name=''
      className='TextInput'
      value={answer}
      step='1'
      onChange={onChange}
    />
  )
}
