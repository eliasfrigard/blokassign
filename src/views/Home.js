import React from 'react'
import IconButtons from '../components/IconButtons'
import InfoSnippets from '../components/InfoSnippets'

export default function Home() {
  return (
    <div className='Home'>
      <div className='HomeText'>
        <p>INSTANT DIGITAL VALUATION</p>
        <h2>What type of building are you valuating?</h2>
      </div>

      <IconButtons />
      <InfoSnippets />
    </div>
  )
}
