import React from 'react'
import { useGlobalContext } from './context'

const SetupForm = () => {
  const { quiz, handleChange, handleSubmit, error } = useGlobalContext()
  
  return (
    <main>
      <section className='quiz quiz-small'>
        <form className='setup-form'>
          <h2>🎯 Quiz Challenge</h2>
          <p style={{ textAlign: 'center', color: '#cbd5e1', marginBottom: '2rem' }}>
            Customize your quiz experience and test your knowledge
          </p>
          
          {/* amount */}
          <div className='form-control'>
            <label htmlFor='amount'>
              📊 Number of Questions
            </label>
            <input
              type='number'
              name='amount'
              id='amount'
              value={quiz.amount}
              onChange={handleChange}
              className='form-input'
              min={1}
              max={50}
            />
          </div>
          
          {/* category */}
          <div className='form-control'>
            <label htmlFor='category'>
              📚 Category
            </label>
            <select
              name='category'
              id='category'
              className='form-input'
              value={quiz.category}
              onChange={handleChange}
            >
              <option value='sports'>🏆 Sports</option>
              <option value='history'>📜 History</option>
              <option value='politics'>🏛️ Politics</option>
            </select>
          </div>
          
          {/* difficulty */}
          <div className='form-control'>
            <label htmlFor='difficulty'>
              ⚡ Difficulty Level
            </label>
            <select
              name='difficulty'
              id='difficulty'
              className='form-input'
              value={quiz.difficulty}
              onChange={handleChange}
            >
              <option value='easy'>😊 Easy</option>
              <option value='medium'>🤔 Medium</option>
              <option value='hard'>😤 Hard</option>
            </select>
          </div>
          
          {error && (
            <p className='error'>
              ⚠️ Can't generate questions. Please try different options.
            </p>
          )}
          
          <button type='submit' onClick={handleSubmit} className='submit-btn'>
            🚀 Start Quiz
          </button>
        </form>
      </section>
    </main>
  )
}

export default SetupForm
