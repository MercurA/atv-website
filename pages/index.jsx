import Link from "next/link"
import { useRef } from "react"
import LargeCard from "../components/cards/LargeCard"
import TextComponent from "../components/textComponents/TextComponent"
import strings_RO from "../constants/strings"
import styles from './styles.module.scss'

const DATA = {
  path: "/images/atv_1.jpeg" ,
  descriptions: {
    year: '2010',
    model: 'XC0123'
  },
  list: ['a', 'b', 'c']
}

const mainStyle = {
  height: '100vh', 
  padding: '120px 20px 0px 20px'
}

const MainPage = () => {

  return (
    <div className={styles.mainContainer}>
      <div id={'section_1'} >Section 1</div>
      <LargeCard 
        images={['/images/atv.png', '/images/troti.png']} 
        component={<TextComponent text={strings_RO.largeCardText_1} title={strings_RO.largeCardText_title_list_1[0]} list={['a','b','c']}/>}
        />  
      <div  id={'section_2'} >Section 1</div>
      <LargeCard 
        images={['/images/troti1.png']}
        hasBg={true}
        component={<TextComponent text={strings_RO.largeCardText_1} title='An de fabricatie trotineta: 2010 Model ATV: XC0123' list={['a','b','c']}/>}
      />
    </div>
  )
}

export default MainPage
