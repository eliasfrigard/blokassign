import React from 'react'

export default function Button({ text, backgroundColor, onClick }) {
  return (
    <button
      value={text}
      style={{ backgroundColor: backgroundColor }}
      onClick={onClick}
    >
      {text}
    </button>
  )
}
