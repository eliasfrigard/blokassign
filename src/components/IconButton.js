import React from 'react'

import logo from '../assets/icons/apartment_house.svg'

export default function IconButton() {
  return (
    <div className='IconButton'>
      <img src={logo} alt='Blok Logo' />
      <p>Apartment</p>
    </div>
  )
}
