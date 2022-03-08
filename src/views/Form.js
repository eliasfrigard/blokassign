import React, { useState } from 'react'

import ProgressBar from '../components/ProgressBar'
// import FormNav from '../components/FormNav'
import Button from '../components/Button'
import Question from '../components/Question'

import size from '../assets/icons/size.svg'
import rooms from '../assets/icons/rooms.svg'

export default function Form() {
  /* Mock Questions */
  const questions = [
    {
      id: 1,
      icon: size,
      question: 'How big is the apartment?',
      minValue: 1,
      maxValue: 200,
    },
    {
      id: 2,
      icon: rooms,
      question: 'How many rooms does it have?',
      minValue: 1,
      maxValue: 10,
    },
  ]

  // State variable for the current question.
  const [currentQuestion, setCurrentQuestion] = useState(0)

  // Variables for checking if there are next or previous questions.
  const isFirst = questions[currentQuestion - 1] === undefined
  const isLast = questions[currentQuestion + 1] === undefined

  // Progress variable used by the progress bar.
  // Equals the fraction of completed questions.
  const progress = ((currentQuestion + 1) * 100) / questions.length

  // Changing the current question when using the navigation.
  const onClick = (event) => {
    if (event.target.value === 'prev') {
      // Ignore if it is the first question.
      if (!isFirst) setCurrentQuestion(currentQuestion - 1)
    } else {
      // Ignore if it is the last question.
      if (!isLast) setCurrentQuestion(currentQuestion + 1)
    }
  }

  return (
    <div className='Form'>
      <ProgressBar progress={progress} />
      <Question
        question={questions[currentQuestion].question}
        icon={questions[currentQuestion].icon}
        minValue={questions[currentQuestion].minValue}
        maxValue={questions[currentQuestion].maxValue}
      />

      <div className='FormNav'>
        <Button
          text='prev'
          opacity={isFirst ? 0.5 : 1}
          backgroundColor='white'
          onClick={onClick}
        />
        <Button
          text='next'
          backgroundColor='#8dd3d9'
          opacity={isLast ? 0.5 : 1}
          onClick={onClick}
        />
      </div>
      {/* <FormNav isLast={isLast} isFirst={isFirst} onClick={onClick} /> */}
    </div>
  )
}
