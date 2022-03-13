import React from 'react'

import IconButton from '../components/IconButton'
import apartmentLogo from '../assets/icons/apartment_house.svg'
import terracedLogo from '../assets/icons/terraced_house.svg'
import semiLogo from '../assets/icons/semidetached_house.svg'
import detachedLoto from '../assets/icons/detached_house.svg'

export default function IconButtons() {
  return (
    <div className='IconButtons'>
      <IconButton icon={apartmentLogo} to='/form' text='Apartment' />
      <IconButton icon={terracedLogo} to='/form' text='Terraced' />
      <IconButton icon={semiLogo} to='/form' text='Semi-Detached' />
      <IconButton icon={detachedLoto} to='/form' text='Detached' />
    </div>
  )
}
