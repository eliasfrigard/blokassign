import React from 'react'

export default function Button({ text, backgroundColor, opacity, onClick }) {
  return (
    <button
      value={text}
      style={{ backgroundColor: backgroundColor, opacity: opacity }}
      onClick={onClick}
    >
      {text}
    </button>
  )
}
