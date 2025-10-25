import React from 'react'
import { useGlobalContext } from './context'

import SetupForm from './SetupForm'
import Loading from './Loading'
import Modal from './Modal'

function App() {
  const {
    waiting,
    loading,
    questions,
    index,
    correct,
    nextQuestion,
    checkAnswer,
  } = useGlobalContext()
  
  if (waiting) {
    return <SetupForm />
  }
  
  if (loading) {
    return <Loading />
  }
 
  const { question, incorrect_answers, correct_answer } = questions[index]
  
  // Shuffle answers
  let answers = [...incorrect_answers]
  const tempIndex = Math.floor(Math.random() * 4)
  if (tempIndex === 3) {
    answers.push(correct_answer)
  } else {
    answers.push(answers[tempIndex])
    answers[tempIndex] = correct_answer
  }
  
  return (
    <main>
      <Modal />
      <section className='quiz'>
        <div style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <div style={{ 
            background: 'rgba(99, 102, 241, 0.1)', 
            padding: '0.75rem 1.5rem', 
            borderRadius: '0.75rem',
            border: '1px solid rgba(99, 102, 241, 0.2)',
            color: '#818cf8',
            fontWeight: '600'
          }}>
            Question {index + 1} of {questions.length}
          </div>
          <p className='correct-answers'>
            Score: {correct}/{index}
          </p>
        </div>
        
        <article className='container'>
          <h2 dangerouslySetInnerHTML={{ __html: question }} />
          <div className='btn-container'>
            {answers.map((answer, answerIndex) => {
              return (
                <button
                  key={answerIndex}
                  className='answer-btn'
                  onClick={() => checkAnswer(correct_answer === answer)}
                  dangerouslySetInnerHTML={{ __html: answer }}
                />
              )
            })}
          </div>
        </article>
        
        <button className='next-question' onClick={nextQuestion}>
          Next Question
        </button>
      </section>
    </main>
  )
}

export default App
