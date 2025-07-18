import React from 'react'
import styles from './InputFieldTracker.module.css'

// type Props = object

const InputFieldTracker = () => {
  const [inputValue, setInputValue] = React.useState('')

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }
  return (
    <div className= {styles['button-click-counter']}>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Type something..."
      />
      <p>
  {inputValue
    ? `Current Input: ${inputValue}`
    : 'You typed: nothing'}
</p>

      {/* You can add more functionality here if needed */} 
      {/* For example, you can add a button to clear the input */}
      <button onClick={() => setInputValue('')}>Clear</button>
     

     
     
     
     </div>
  )
}

export default InputFieldTracker