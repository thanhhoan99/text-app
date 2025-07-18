import React from 'react'
import styles from './DoubleClickMessage.module.css'

const DoubleClickMessage = () => {
 const  [message, setMessage] = React.useState(false)
 
  const handleDoubleClick = () => {
    setMessage(true)
    setTimeout(() => {
      setMessage(false)
    }, 2000) // Reset message after 2 seconds
    console.log('Double clicked!')
  }

  return (
    <div className={styles['button-click-counter']}>
      <button onDoubleClick={handleDoubleClick}>
        Double Click Me
      </button>
      {message && <p>Button was double clicked!</p>}
    </div>
  )
}

export default DoubleClickMessage  