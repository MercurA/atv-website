import styles from './styles.module.scss'
import Image from 'next/image'

const Button = ({ name, type, handleClick, id, size = 'small', variant = "outlined", primary, secondary, fSize, fFamily, icon = null }) => {
    const buttonSize = {
        small: 'btn_sm',
        medium: 'btn_md',
        large: 'btn_lg'
    }

    const style = {
        backgroundColor: primary || 'white',
        borderColor: secondary || 'black',
        color: secondary || 'black',
        fontSize: `${fSize}rem` || '16px',
        fontFamily: fFamily || "Prata"
    }

    const imageContainer = () => {
        return (
            <div className={`${styles.imageContainer} ${style.imageItem}`}>
                <Image src={icon} width={50} height={50} color={style.secondary} alt="image" />
            </div>
        )
    }

    return (
        <button
            style={style}
            className={`${styles[variant]} ${styles[buttonSize[size]]} ${styles.container}`}
            type={type}
            id={id}
            onClick={handleClick}
        >
            {icon ? imageContainer() : name}
        </button>
    )
}


export default Button