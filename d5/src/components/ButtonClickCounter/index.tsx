import React from 'react'
import styles from './ButtonClickCounter.module.css'

// type Props = object

const ButtonClickCounter = () => {
    const [count, setCount] = React.useState(0)
    // const { count, setCount } = props
    // const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount(count + 1)
  }
  return (
    <div className= {styles['button-click-counter']}>
    <button  onClick={() => handleClick()}>
          Click Me
    </button>
        <p>
          Clicked: {count} times 
        </p>  
     </div>
  )
}

export default ButtonClickCounter