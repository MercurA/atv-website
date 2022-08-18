import styles from './styles.module.scss'
import {useState} from 'react'
import Image from 'next/image'

const MENU_ITEMS = ['Despre Noi', 'ATV-uri', 'Trotinete electrice', 'Servicii', 'Reguli de bun simt', 'Contacteaza-ne']

const Menu = ({children}) => {
    const [hovered, setIfHovered] = useState(false)
    const [menuState, setMenuState] = useState([
        {
            name: 'Despre Noi',
            hasLine: false
        },
        {
            name: 'ATV-uri',
            hasLine: false
        },
        {
            name: 'Trotinete electrice',
            hasLine: false
        },
        {
            name: 'Servicii',
            hasLine: false
        },
        {
            name: 'Reguli de bun simt',
            hasLine: false
        },
        {
            name: 'Contacteaza-ne',
            hasLine: false
        }
    ])

    const formatMenuStateArray = (menuItems, target, bool) => {
        const menuArray = [...menuItems]

        return menuArray.map((item, index) => {
            if(index === target) {
                return {...item, hasLine: bool}
            }
            return item;
        })
    }

    const handleHoverItem = (e) => {
        const menuIndex = e.target.id && Number(e.target.id.split('_')[1])
        
        setMenuState(formatMenuStateArray(menuState, menuIndex, true))
    }

    const handleHoverLeave = (e) => {
        const menuIndex = e.target.id && Number(e.target.id.split('_')[1])
     
        setMenuState(formatMenuStateArray(menuState, menuIndex, false))
    }

    const renderMenuItems = () => {
        return menuState.map((item, index) => (
            <div id={`item_${index}`} key={index} className={styles.menuItem} onMouseOver={handleHoverItem} onMouseLeave={handleHoverLeave}>
                {item.name}
                {item.hasLine && <div className={styles.line}></div>}
            </div>
        ))
    }

    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                <Image src={"/images/logo.png"} height={80} width={80}/>
            </div>
            {renderMenuItems()}
        </div>
    )
}

export default Menu