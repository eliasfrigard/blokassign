import React from 'react'
import { Link } from 'react-router-dom'

/**
 * This component represents a large button with an icon and text.
 * The button can currently be used to navigate the application.
 */
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
