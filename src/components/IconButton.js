import React from 'react'
import { Link } from 'react-router-dom'

export default function IconButton({ icon, text, to }) {
  return (
    <Link className='ReactLink' to={to}>
      <div className='IconButton HooverElement'>
        <div className='IconButtonImgWrapper'>
          <img src={icon} alt={text} />
        </div>
        <p>{text}</p>
      </div>
    </Link>
  )
}
