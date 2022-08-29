import styles from './styles.module.scss'
import Link from 'next/link'

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.terms}>
                <Link href={'/conditios'}><a target={"_blank"}>{'Termeni si Conditii'}</a></Link>
                <Link href={'/GDPR'}><a target={"_blank"}>{'Politica de confidentialitate'}</a></Link>
            </div>
            <div className={styles.signature}>{'Made with'}&#129505;{'by Cypher'}</div>
        </div>
    )
}

export default Footer