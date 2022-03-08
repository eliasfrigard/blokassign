import React from 'react'

export default function ProgressBar({ progress }) {
  const overlayStyle = {
    backgroundColor: '#bedcaa',
    width: `${progress}%`,
    height: '100%',
  }

  const progressBarStyle = {
    height: '5px',
    width: '100vw',
    backgroundColor: '#486174',
    position: 'absolute',
    left: '0',
  }

  return (
    <div className='ProgressBar' style={progressBarStyle}>
      <div className='ProgressBarOverlay' style={overlayStyle}></div>
    </div>
  )
}
