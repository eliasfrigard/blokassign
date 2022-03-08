import React from 'react'

import Button from './Button'

export default function FormNav() {
  const formNavStyle = {
    position: 'absolute',
    left: '0',
    bottom: '0',
    height: '90px',
    backgroundColor: 'white',
    width: '100vw',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    gap: '90px',
  }

  return (
    <div style={formNavStyle}>
      <Button text='next' backgroundColor='white' />
      <Button text='next' backgroundColor='#8dd3d9' />
    </div>
  )
}
