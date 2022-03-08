import React, { useState } from 'react'

import ProgressBar from '../components/ProgressBar'
import FormNav from '../components/FormNav'
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

  // Progress variable used by the progress bar.
  // Equals the fraction of completed questions.
  const progress = ((currentQuestion + 1) * 100) / questions.length

  // Changing the current question when using the navigation.
  const onClick = (event) => {
    if (event.target.value === 'prev') {
      // Return if there is no previous question.
      if (!questions[currentQuestion - 1]) return

      setCurrentQuestion(currentQuestion - 1)
    } else {
      // Return if there are no further questions.
      if (!questions[currentQuestion + 1]) return

      setCurrentQuestion(currentQuestion + 1)
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
      <FormNav onClick={onClick} />
    </div>
  )
}
