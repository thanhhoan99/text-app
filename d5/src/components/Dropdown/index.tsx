import React from 'react'
import styles from './Dropdown.module.css'

// type Props = object

const Dropdown = () => {
  const [selectedFruit, setSelectedFruit] = React.useState<string>('')

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedFruit(event.target.value)
  }
  
  return (
    <div className= {styles['button-click-counter']}>
        <select value={selectedFruit} onChange={handleSelectChange}>
          <option value="">Select a fruit</option>
          <option value="apple">Apple</option>
          <option value="banana">Banana</option>
          <option value="orange">Orange</option>
          <option value="grape">Grape</option>
        </select>
        <p>
          Selected Fruit: {selectedFruit ? selectedFruit : 'None'}
        </p>
     </div>
  )
}

export default Dropdown
