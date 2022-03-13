import React from 'react'

/**
 * This component is a text field that returns its value on change.
 * @param {*} value
 * @returns input value
 */
export default function TextInput({ value, onChange }) {
  // Removes focus from the input field when pressing enter.
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') document.activeElement.blur()
  }

  return (
    <input
      type='text'
      name=''
      className='TextInput'
      value={value}
      step='1'
      onChange={onChange}
      onKeyPress={handleKeyPress}
    />
  )
}
