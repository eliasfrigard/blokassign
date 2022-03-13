import React from 'react'

export default function ProgressBar({ progress }) {
  const overlayStyle = {
    width: `${progress}%`,
  }

  return (
    <div className='ProgressBar'>
      <div className='ProgressBarOverlay' style={overlayStyle}></div>
    </div>
  )
}
