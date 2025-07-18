import React from 'react'
import styles from './Calculator.module.css'

// type Props = object
const buttons= ["7", "8", "9", "/", "4", "5", 
  "6", "×", "1", "2", "3", "-", "0", ".", "C", "+","="]
const Calculator = () => {
  const [input, setInput] = React.useState("");

  function handleClick(value: string) {
    console.log(value);
    if (value === "C") {
      setInput("");
    } 
    else if (value === "=") {
      try {
     
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      
        setInput(eval(input.replace("×", "*").replace("/", "/")).toString());
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (error) {
        setInput("Error");
      }   
    } else {
      setInput(input + value);
    }
  }
     
      

    
    
  return (
    <div className= {styles['calculator']}>
        <input type="text" className={styles["calculator-display"]} value={input||0} />

  <div className={styles["calculator-keys"]}>
    {buttons.map((value, index) => {
      return <button 
      key={index}
       className={
        value === "C" ? styles["key-clear-red"] :
        value === "=" ? styles["key-equal-green"] :
         ["/" ,"×","-","+"].includes(value) ? 
         styles["key-operator-orange"] : 
         styles["key-number"]
        } 
        onClick={() => handleClick(value)}
       >{value}</button>
    }
    )}
  </div>

  
     </div>
  )
}

export default Calculator

