import Link from 'next/link'

import styles from './styles.module.scss'
import Device from "../../utils/index";

const Footer = () => {

    const renderDesktopFooter = () => {
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

    const renderMobileFooter = () => {
        return (
            <div className={styles.mobileFooter}>
                <div className={styles.terms}>
                    <Link href={'/conditios'}><a target={"_blank"}>{'Termeni si Conditii'}</a></Link>
                    <Link href={'/GDPR'}><a target={"_blank"}>{'Politica de confidentialitate'}</a></Link>
                </div>
                <div className={styles.signature}>{'Made with'}&#129505;{'by Cypher'}</div>
            </div>
        )
    }

    const renderMenuType = (isMobile, isBrowser) => {
        console.log(isMobile && !isBrowser)
        if(isMobile && !isBrowser) {
            return renderMobileFooter()
        } else {
            return renderDesktopFooter()
        }
    }

    return (
        <Device>
            {({isMobile, isBrowser}) => renderMenuType(isMobile, isBrowser)}
        </Device>

    )
}

export default Footer