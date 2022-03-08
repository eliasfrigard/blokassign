import React from 'react'

import lightning from '../assets/icons/lightning.svg'
import heart from '../assets/icons/heart.svg'
import star from '../assets/icons/star.svg'

export default function InfoSnippets() {
  return (
    <div className='HomeInfo'>
      <div className='HomeInfoRow'>
        <img src={lightning} alt='' />
        <p>
          <b>2min</b> instant digital valuation
        </p>
      </div>
      <div className='HomeInfoRow'>
        <img src={heart} alt='' />
        <p>
          <b>364 168</b> valuations made since 2018
        </p>
      </div>
      <div className='HomeInfoRow'>
        <img src={star} alt='' />
        <p>
          <b>4,8</b> rating on Google (brokers agerave 3,2)
        </p>
      </div>
    </div>
  )
}
