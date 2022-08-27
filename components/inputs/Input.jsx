import styles from './styles.module.scss'

const Input = ({name, id, placeholder, handleOnChange, value, type="text"}) => {
    return (
        <div className={styles.inputContainer}>
            <label htmlFor={id} className={styles.label}>{name}</label>
            <input name={id} id={id} onChange={handleOnChange} placeholder={placeholder} className={styles.input} value={value} type={type}/>
        </div>
    )
}

export default Input