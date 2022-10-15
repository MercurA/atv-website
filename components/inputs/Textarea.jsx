import styles from './styles.module.scss'

const Textarea = ({name, min=20, max=250, id, placeholder, handleOnChange}) => {
    return (
        <div className={styles.container}>
            <label htmlFor="message" className={styles.label}>{name}*</label>
            <textarea name="message" id={id} placeholder={placeholder} spellCheck minLength={min} maxLength={max} onChange={handleOnChange}></textarea>
        </div>
    )
}

export default Textarea