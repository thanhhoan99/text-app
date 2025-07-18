import React from 'react'
import styles from './CheckboxStatus.module.css'

// type Props = object

const CheckboxStatus = () => {
 const [isChecked, setIsChecked] = React.useState(false)

 const handleCheckboxChange = () => {
   setIsChecked(!isChecked)
 }
  
  return (
    <div className= {styles['button-click-counter']}>
       <label>
         <input 
           type="checkbox" 
           checked={isChecked} 
           onChange={handleCheckboxChange} 
         />
         {isChecked ? 'Checked' : 'Unchecked'}
       </label>
       <p>
         Checkbox is {isChecked ? 'Checked' : 'Unchecked'}
       </p>
     </div>
  )
}

export default CheckboxStatus
