import styles from './styles.module.scss'
import Input from '../components/inputs/Input'
import {useState} from 'react'
import strings_RO from '../constants/strings'

const Contacts = ({lang='RO'}) => {
    const [formState, setFormState] = useState({})

    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.id]: e.target.value
        })
    }
    return (
        <div className={styles.container}>
            <Input name={strings_RO.input.name} id={'name'} placeholder={'Ex. Andrei Popescu'} handleOnChange={handleChange}/>
            <Input name={strings_RO.input.email} id={'email'} placeholder={'Ex. exemplu@gmail.com'} handleOnChange={handleChange}/>
            <Input name={strings_RO.input.noTelephone} id={'telephone'} placeholder={'Ex. 004074123123'} handleOnChange={handleChange}/>
            <Input name={strings_RO.input.resDate} id={'reservation'} placeholder={'Ex. zi/luna/an'} handleOnChange={handleChange} type={'date'}/>
        </div>
    )
}

export default Contacts