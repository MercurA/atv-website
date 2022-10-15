import { useState } from 'react'
import dynamic from "next/dynamic"

import ContactForm from '../components/form/ContactForm'
import styles from './styles.module.scss'

const MapRender = dynamic(() => import("../components/map/Map"), { ssr:false })

const Contacts = () => {
    return (
        <div className={styles.container}>
            <MapRender />
            <ContactForm />
        </div>
    )
}

export default Contacts