import { useState } from 'react'
import dynamic from "next/dynamic"

import ContactForm from '../components/form/Form'
import styles from './styles.module.scss'

const MapRender = dynamic(() => import("../components/map/Map"), { ssr:false })

const Contacts = () => {
    const [formState, setFormState] = useState({})

    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.id]: e.target.value
        })
    }

    const handleSubmit = () => {
        console.log(formState)
    }

    return (
        <div className={styles.container}>
            <MapRender />
            <ContactForm handleChange={handleChange} handleSubmit={handleSubmit}/>
        </div>
    )
}

export default Contacts