import React from 'react'

import IconButton from '../components/IconButton'
import apartmentLogo from '../assets/icons/apartment_house.svg'
import terracedLogo from '../assets/icons/terraced_house.svg'
import semiLogo from '../assets/icons/semidetached_house.svg'
import detachedLoto from '../assets/icons/detached_house.svg'

export default function IconButtons() {
  return (
    <div className='IconButtons'>
      <IconButton icon={apartmentLogo} text='Apartment' />
      <IconButton icon={terracedLogo} text='Terraced' />
      <IconButton icon={semiLogo} text='Semi-Detached' />
      <IconButton icon={detachedLoto} text='Detached' />
    </div>
  )
}
