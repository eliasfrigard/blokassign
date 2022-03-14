import React from 'react'
import { Link } from 'react-router-dom'

import BlokLogo from '../assets/logo.svg'

/**
 * A header that could be expanded with more information.
 */
export default function Header() {
  return (
    <div className='Header'>
      <Link to='/blokassign'>
        <img src={BlokLogo} alt='Blok Logo' />
      </Link>
    </div>
  )
}
