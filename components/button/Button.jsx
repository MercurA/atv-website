import strings_RO from '../../constants/strings'
import styles from './styles.module.scss'

const Button = ({handleClick}) => {
    return (
        <div className={styles.btnContainer} onClick={handleClick}>{strings_RO.send}</div>
    )
}

export default Button