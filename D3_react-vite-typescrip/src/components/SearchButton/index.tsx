
import styles from './SearchButton.module.css'


type TButtonProps = {
    label?:  string;
    labelText?:  string;
    leftIcon?: React.ReactNode
    rightIcon?:React.ReactNode
    
    
}
const SearchButton = ({label, leftIcon, rightIcon ,labelText} : TButtonProps) =>{
    return (
        <button className={styles.button}> {leftIcon} <span> {label}</span> 
        <div className={styles.labelText}> {labelText}</div>
        <div className={styles.righticon}>{rightIcon}</div></button>
        
    )
}

export default SearchButton