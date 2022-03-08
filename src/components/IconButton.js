import React from 'react'

export default function IconButton({ icon, text }) {
  return (
    <div className='IconButton'>
      <div className='IconButtonImgWrapper'>
        <img src={icon} alt={text} />
      </div>
      <p>{text}</p>
    </div>
  )
}
