import LargeCard from "../components/cards/LargeCard"
import TextComponent from "../components/textComponents/TextComponent"
import strings_RO from "../constants/strings"

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
    <div style={mainStyle}>
      <LargeCard images={['/images/atv.png', '/images/troti.png']} component={<TextComponent text={strings_RO.largeCardText_1} title='Trotineta este dotata cu urmatoarele' list={['a','b','c']}/>}/>  
    </div>
  )
}

export default MainPage
