import React from 'react'
import styles from './HoverHighlight.module.css'

// type Props = object

const HoverHighlight = () => {
  const [isHovered, setIsHovered] = React.useState(false)

  const handleMouseEnter = () => {
    setIsHovered(true)
  }
  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  return (
    <div className= {styles['button-click-counter']} 
         onMouseEnter={handleMouseEnter}
         onMouseLeave={handleMouseLeave}
         style={{ backgroundColor: isHovered ? 'yellow' : 'transparent' }}>
     <span>Hover me!</span>
    
     </div>
  )
}

export default HoverHighlight