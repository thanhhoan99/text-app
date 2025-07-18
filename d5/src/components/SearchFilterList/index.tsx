import React from 'react'
import styles from './ToggleSwitch.module.css'

// type Props = object

const ToggleSwitch = () => {
  const [isOn, setIsOn] = React.useState(false)

  const handleToggle = () => {
    setIsOn(!isOn)
  }
  return (
    <div className= {styles['button-click-counter']}>
      <button className={styles.toggleButton} onClick={handleToggle}>
        {isOn ? 'ON' : 'OFF'}
      </button>
      <p>
        Toggle is {isOn ? 'ON' : 'OFF'}
      </p>
    
     </div>
  )
}

export default ToggleSwitch