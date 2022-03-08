import React from 'react'

export default function IconButton({ icon, text }) {
  return (
    <div className='IconButton'>
      <img src={icon} alt={text} />
      <p>{text}</p>
    </div>
  )
}
