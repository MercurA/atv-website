import styles from './styles.module.scss'
import Input from '../inputs/Input'
import Textarea from '../inputs/Textarea'
import strings_RO from '../../constants/strings'
import Dropdown from '../inputs/Dropdown'
import Button from '../button/Button'

const ContactForm = ({handleChange, handleSubmit}) => {
    return (
        <div className={styles.formContainer}>
            <div className={styles.description}>
                <h3 className={styles.descItems}>{strings_RO.input.helpDescriptionTitle}</h3>
                <div >{strings_RO.input.helpDescriptionText}</div>
            </div>
            <div className={styles.form}>
                <Input name={strings_RO.input.name} id={'name'} placeholder={'Ex. Andrei Popescu'} handleOnChange={handleChange} />
                <Input name={strings_RO.input.email} id={'email'} placeholder={'Ex. exemplu@gmail.com'} handleOnChange={handleChange} />
                <Input name={strings_RO.input.noTelephone} id={'telephone'} placeholder={'Ex. 004074123123'} handleOnChange={handleChange} />
                <Input name={strings_RO.input.resDate} id={'reservation'} placeholder={'Ex. zi/luna/an'} handleOnChange={handleChange} type={'date'} />
                <Textarea name={strings_RO.input.message} id={'message'} placeholder={'Buna, As vrea sa fac o rezervare...'} handleChange={handleChange} />
                <Button name={strings_RO.send} handleClick={handleSubmit}/>
            </div>
        </div>
    )
}

export default ContactForm