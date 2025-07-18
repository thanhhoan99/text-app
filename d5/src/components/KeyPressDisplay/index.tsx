import React from 'react'
import styles from './KeyPressDisplay.module.css'

const KeyPressDisplay = () => {
  const [keyPressed, setKeyPressed] = React.useState<string | null>(null)

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    setKeyPressed(event.key)

    console.log(`Key pressed: ${event.key}`)
  }
  

  return (
    <div className={styles['button-click-counter']}>
      <input
        type="text"
        onKeyDown={handleKeyDown}
        placeholder="Press any key"
      />
      <p>
        Last key: <strong>{keyPressed ?? 'None'}</strong>
      </p>
    </div>
  )
}

export default KeyPressDisplay  