import React from 'react'

import IconButton from '../components/IconButton'
import apartmentLogo from '../assets/icons/apartment_house.svg'
import terracedLogo from '../assets/icons/terraced_house.svg'
import semiLogo from '../assets/icons/semidetached_house.svg'
import detachedLoto from '../assets/icons/detached_house.svg'

/**
 * This components displayes a container with large icon buttons.
 */
export default function IconButtons() {
  return (
    <div className='IconButtons'>
      <IconButton icon={apartmentLogo} to='/evaluation' text='Apartment' />
      <IconButton icon={terracedLogo} to='/evaluation' text='Terraced' />
      <IconButton icon={semiLogo} to='/evaluation' text='Semi-Detached' />
      <IconButton icon={detachedLoto} to='/evaluation' text='Detached' />
    </div>
  )
}
