import React from 'react'
import Button from './Button'

export default function FormNav({ onClick }) {
  return (
    <div className='FormNav'>
      <Button text='prev' backgroundColor='white' onClick={onClick} />
      <Button text='next' backgroundColor='#8dd3d9' onClick={onClick} />
    </div>
  )
}
