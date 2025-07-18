import React from 'react'
import styles from './FormSubmissionAlert.module.css'

// type Props = object

const FormSubmissionAlert = () => {
  const [inputValue , setInputValue] = React.useState('')

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    alert(`You submitted with value: ${inputValue}`)
    setInputValue('') // Clear the input after submission
  }


  return (
    <div className= {styles['button-click-counter']}>
      <input value={inputValue}
              type='text'
              onChange={(e) => setInputValue(e.target.value)}
        />
      <button type='submit' onClick={handleSubmit} >Submit</button> 
       
    
     </div>
  )
}

export default FormSubmissionAlert