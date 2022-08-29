import styles from './styles.module.scss'

const Textarea = ({name, min=20, max=250, id, placeholder}) => {
    return (
        <div className={styles.container}>
            <label htmlFor="message">{name}</label>
            <textarea name="message" id={id} placeholder={placeholder} spellCheck minLength={min} maxLength={max}></textarea>
        </div>
    )
}

export default Textarea