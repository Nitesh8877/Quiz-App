import React from 'react'
import { useGlobalContext } from './context'

const Modal = () => {
  const { isModalOpen, closeModal, correct, questions } = useGlobalContext()
  
  const percentage = ((correct / questions.length) * 100).toFixed(0)
  
  // Determine performance message and emoji
  let message = ''
  let emoji = ''
  
  if (percentage >= 90) {
    message = 'Outstanding Performance! 🎉'
    emoji = '🏆'
  } else if (percentage >= 70) {
    message = 'Great Job! 👏'
    emoji = '⭐'
  } else if (percentage >= 50) {
    message = 'Good Effort! 👍'
    emoji = '💪'
  } else {
    message = 'Keep Practicing! 📚'
    emoji = '🎯'
  }
  
  return (
    <div
      className={`${
        isModalOpen ? 'modal-container isOpen' : 'modal-container'
      }`}
    >
      <div className='modal-content'>
        <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>
          {emoji}
        </div>
        <h2>{message}</h2>
        <p>
          You answered <span style={{ 
            color: '#10b981', 
            fontSize: '2rem',
            fontWeight: '700'
          }}>{percentage}%</span> of questions correctly
        </p>
        <div style={{ 
          background: 'rgba(99, 102, 241, 0.1)', 
          padding: '1rem', 
          borderRadius: '0.75rem',
          marginBottom: '2rem',
          border: '1px solid rgba(99, 102, 241, 0.2)'
        }}>
          <p style={{ fontSize: '1.1rem', marginBottom: '0' }}>
            {correct} out of {questions.length} correct answers
          </p>
        </div>
        <button className='close-btn' onClick={closeModal}>
          🔄 Play Again
        </button>
      </div>
    </div>
  )
}

export default Modal
