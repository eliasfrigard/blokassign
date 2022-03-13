import React from 'react'

export default function Button({
  text,
  backgroundColor,
  opacity,
  onClick,
  disabled,
}) {
  return (
    <button
      value={text}
      style={{ backgroundColor: backgroundColor, opacity: disabled ? 0.5 : 1 }}
      onClick={onClick}
      className='HooverElement'
      disabled={disabled}
    >
      {text}
    </button>
  )
}
