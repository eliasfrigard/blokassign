import React from 'react'

export default function Button({
  text,
  icon,
  backgroundColor,
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
      {/* Render icon or text depending on what is available. */}
      {icon ? (
        <img src={icon} alt='Button Icon' className='ButtonImage' />
      ) : (
        text
      )}
    </button>
  )
}
