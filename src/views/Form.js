import React from 'react'

import ProgressBar from '../components/ProgressBar'
import FormNav from '../components/FormNav'
import Question from '../components/Question'

import size from '../assets/icons/size.svg'

export default function Form() {
  const progress = 30

  return (
    <div className='Form'>
      <ProgressBar progress={progress} />
      <Question
        question='How big is the apartment?'
        icon={size}
        minValue='0'
        maxValue='50'
      />
      <FormNav />
    </div>
  )
}
