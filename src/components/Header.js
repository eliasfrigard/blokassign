import React from 'react'
import { Link } from 'react-router-dom'

import BlokLogo from '../assets/logo.svg'

export default function Header() {
  return (
    <div className='Header'>
      <Link to='/'>
        <img src={BlokLogo} alt='Blok Logo' />
      </Link>
    </div>
  )
}
