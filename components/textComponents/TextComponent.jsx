import styles from './styles.module.scss'

const TextComponent = ({text='' || [], list=[], title=''}) => {

    const renderText = () => {
        if(text instanceof Array) {
            return text.map((el, index) => (
                <div key={index}>{el}</div>
            ))
        } else {
            return text
        }

        console.log(text.length )
    }
    return (
        <div className={styles.container}>
            {renderText()}
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