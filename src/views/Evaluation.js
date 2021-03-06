import React, { useState } from 'react'

// Components
import ProgressBar from '../components/ProgressBar'
import Button from '../components/Button'
import Question from '../components/Question'
import backArrow from '../assets/icons/back_arrow.svg'

export default function Evaluation() {
  /*
   * Hardcoded Mock Questions
   * Could for example be fetched from server.
   */
  const [questions] = useState([
    {
      id: 0,
      icon: './images/size.svg',
      question: 'How big is the apartment?',
      minValue: 1,
      maxValue: 200,
    },
    {
      id: 1,
      icon: './images/rooms.svg',
      question: 'How many rooms does it have?',
      minValue: 1,
      maxValue: 10,
    },
  ])

  // State variable for the current question.
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  // Answer variable for shared state across components.
  const [answer, setAnswer] = useState(1)
  // HashMap containing all answers.
  const [answers, setAnswers] = useState(
    new Map(questions.map((q) => [q.id, q.minValue]))
  )

  // Variables for checking if there are next or previous questions.
  const isFirst = currentQuestionIndex === 0
  const isLast = currentQuestionIndex === questions.length - 1

  // Progress variable used by the progress bar.
  // Equals the fraction of completed questions.
  const progress = ((currentQuestionIndex + 1) * 100) / questions.length

  // Changes the current question when using navigation.
  const onClick = (event) => {
    // Save the current question answer before changing view.
    saveAnswers(currentQuestionIndex, answer)

    if (event.target.value === 'prev') {
      changeQuestion(currentQuestionIndex - 1)
    } else {
      changeQuestion(currentQuestionIndex + 1)
    }
  }

  /*
   * Handle change of answer input.
   */
  const onChange = (event) => {
    const newValue = parseInt(event.target.value)

    // Check if new value is within boundaries.
    if (
      newValue < questions[currentQuestionIndex].minValue ||
      newValue > questions[currentQuestionIndex].maxValue
    )
      return

    // Set new value.
    setAnswer(event.target.value)
  }

  /*
   * Saves a new answer to the collection by its ID.
   */
  const saveAnswers = (id, newAnswer) => {
    // Copy answers map.
    const answersCopy = new Map(answers)

    // Update with the new answer.
    answersCopy.set(id, newAnswer)

    // Save the mutated hashmap.
    setAnswers(answersCopy)
  }

  /*
   * Changes the question that is displayed.
   */
  const changeQuestion = (nextIndex) => {
    // Return if out of bounds.
    if (nextIndex < 0 || nextIndex > questions.length) return

    // Set answer state to the state of the next question.
    setAnswer(answers.get(questions[nextIndex].id))

    // Change current question index.
    setCurrentQuestionIndex(nextIndex)
  }

  return (
    <div className='Evaluation'>
      <ProgressBar progress={progress} />

      {/* Filter and map the questions array to render a single question at a time. */}
      {questions
        .filter((question) => question.id === currentQuestionIndex)
        .map((question) => (
          <Question
            key={question.id}
            question={question.question}
            icon={question.icon}
            minValue={question.minValue}
            maxValue={question.maxValue}
            inputValue={answer}
            onChange={onChange}
          />
        ))}

      {/* Navigation for the evaluation form. */}
      <div className='EvaluationNav'>
        <Button
          icon={backArrow}
          text='prev'
          disabled={isFirst}
          backgroundColor='white'
          onClick={onClick}
        />
        <Button
          text='next'
          backgroundColor='#8dd3d9'
          disabled={isLast}
          onClick={onClick}
        />
      </div>
    </div>
  )
}
