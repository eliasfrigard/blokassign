import React from 'react'

/**
 * This is a progress bar with a fractional overlay.
 */
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
