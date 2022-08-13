import styles from './styles.module.scss'
import Image from 'next/image'
import strings from '../../constants/strings'

const Card = ({descriptions={}, path, list=[]}) => {

    const renderDescList = () => {
        return list.map((item, index) => (
            <li key={index}>
                {item}
            </li>
        ))
    }

    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <Image 
                    src={path} 
                    height={200}
                    width={200}
                />
            </div>
            <div className={styles.description}>
                <div>{strings.yearOfFabrication}{descriptions.year}</div>
                <div>{strings.atvModel}{descriptions.model}</div>
            </div>
            <div className={styles.listContainer}>{strings.cardListTitle}</div>
            <ul>
                {renderDescList()}
            </ul>
        </div>
    )
}

export default Card