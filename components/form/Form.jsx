import styles from './styles.module.scss'
import Input from '../inputs/Input'
import Textarea from '../inputs/Textarea'
import Button from '../button/Button'
import language from '../../constants/strings'
import { useContext } from 'react'
import { LanguageContext } from '../../pages/_app'

const ContactForm = ({handleChange, handleSubmit}) => {
    const {currentLang, setLang} = useContext(LanguageContext)
    return (
        <div className={styles.formContainer}>
            <div className={styles.description}>
                <h3 className={styles.descItems}>{currentLang.input.helpDescriptionTitle}</h3>
                <div >{currentLang.input.helpDescriptionText}</div>
            </div>
            <div className={styles.form}>
                <Input name={currentLang.input.name} id={'name'} placeholder={'Ex. Andrei Popescu'} handleOnChange={handleChange} />
                <Input name={currentLang.input.email} id={'email'} placeholder={'Ex. exemplu@gmail.com'} handleOnChange={handleChange} />
                <Input name={currentLang.input.noTelephone} id={'telephone'} placeholder={'Ex. 004074123123'} handleOnChange={handleChange} />
                <Input name={currentLang.input.resDate} id={'reservation'} placeholder={'Ex. zi/luna/an'} handleOnChange={handleChange} type={'date'} />
                <Textarea name={currentLang.input.message} id={'message'} placeholder={'Buna, As vrea sa fac o rezervare...'} handleChange={handleChange} />
                <Button name={currentLang.send} handleClick={handleSubmit}/>
            </div>
        </div>
    )
}

export default ContactForm