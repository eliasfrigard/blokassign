import React from 'react'

import ProgressBar from '../components/ProgressBar'

export default function Form() {
  const progress = 30

  return (
    <div className='Form'>
      <ProgressBar progress={progress} />
    </div>
  )
}
