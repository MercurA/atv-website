import styles from './styles.module.scss'

const TextComponent = ({text, list=[], title}) => {
    return (
        <div className={styles.container}>
            {text}
            {list.length > 0 &&
                <>
                    <div className={styles.title}>{title}</div>
                    <ul>
                        {list.map((el, index) => (
                            <li key={index}>{el}</li>
                        ))}
                    </ul>
                </>
            }
        </div>
    )
}

export default TextComponent