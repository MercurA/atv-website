import { useState } from 'react'
import styles from './styles.module.scss'
import Input from '../inputs/Input'
import Textarea from '../inputs/Textarea'
import Button from '../button/Button'
import { useContext } from 'react'
import { LanguageContext } from '../../pages/_app'
import postEmail from '../../services/email'

const ContactForm = () => {
    const {currentLang, setLang} = useContext(LanguageContext)
    const [formData, setFormData] = useState({})
    const [emailResponse, setEmailResponse] = useState('')
    
    const onSubmit = async (e) => {
        e.preventDefault();
        console.log(formData)
        const res = await postEmail({
            to_name: formData.name,
            message: formData.message,
            from_name: formData.email
        })
        console.log(res)
        setEmailResponse(res)
        setFormData({});
    }

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <form onSubmit={onSubmit}>
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
                        <Textarea name={currentLang.input.message} id={'message'} placeholder={currentLang.input.placeholderMessage} handleOnChange={handleChange} />
                        <Button name={currentLang.send} type={"submit"} size={'btn_md'}/>
                    </div>
            </div>
            </form>
    )
}

export default ContactForm