import styles from './styles.module.scss'
import Input from '../components/inputs/Input'
import { useEffect, useState } from 'react'
import strings_RO from '../constants/strings'
import Textarea from '../components/inputs/Textarea'
import { MapContainer } from 'react-leaflet'

const Contacts = () => {
    const [formState, setFormState] = useState({})
    const [W, setW] = useState({})

    useEffect(() => {
        if(typeof window !== 'undefined') {
            window && setW(window)
        }
    },[])

    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.id]: e.target.value
        })
    }

    const renderMap = () => {
        if(W) {
            return (
                 <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[51.505, -0.09]}>
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>
                </MapContainer>
            )
        }
    }

    return (
        <div className={styles.container}>
            
            {renderMap()}
            <Input name={strings_RO.input.name} id={'name'} placeholder={'Ex. Andrei Popescu'} handleOnChange={handleChange} />
            <Input name={strings_RO.input.email} id={'email'} placeholder={'Ex. exemplu@gmail.com'} handleOnChange={handleChange} />
            <Input name={strings_RO.input.noTelephone} id={'telephone'} placeholder={'Ex. 004074123123'} handleOnChange={handleChange} />
            <Input name={strings_RO.input.resDate} id={'reservation'} placeholder={'Ex. zi/luna/an'} handleOnChange={handleChange} type={'date'} />
            <Textarea name={strings_RO.input.message} id={'message'} placeholder={'Buna, As vrea sa fac o rezervare...'} handleChange={handleChange} />
        </div>
    )
}

export default Contacts