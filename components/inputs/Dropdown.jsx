import styles from './styles.module.scss'
import {useEffect, useState} from 'react'
import Image from 'next/image'
const ITEMS = [
    {
        id: 'atv',
        name: 'ATV'
    },
    {
        id: 'scooter',
        name: 'Trotineta'
    }
]

const Dropdown = () => {
    const [selected, setSelected] = useState('Select')
    const [open, setOpen] = useState(false)


    const handleClick = () => {
        setOpen(!open)
    }

    const handleOnSelect = (e) => {
        setSelected(e.target.id)
        setOpen(false)
    }

    const handleSelection = (name) => {
        if(selected !== 'Select' && selected === name) {
            return styles.yellow
        }
    }

    return (
        <div className={styles.dropContainer}>
            <div className={styles.select} onClick={handleClick}>
                <div>{selected}</div>
                <Image src={'/arrow-down.svg'} height={'20px'} width={'20px'}/>
            </div>
            {open &&  (<div className={styles.menu}>
                {ITEMS.map((el,index) => (<div onClick={handleOnSelect} className={handleSelection(el.name)} id={el.name} key={index}>{el.name}</div>))}
            </div>)}            
        </div>
    )
}

export default Dropdown