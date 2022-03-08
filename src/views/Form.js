import React from 'react'

import ProgressBar from '../components/ProgressBar'
import FormNav from '../components/FormNav'

export default function Form() {
  const progress = 30

  return (
    <div className='Form'>
      <ProgressBar progress={progress} />
      <FormNav />
    </div>
  )
}
