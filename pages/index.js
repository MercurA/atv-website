import Card from "../components/cards/Card"

const DATA = {
  path: "/images/atv_1.jpeg" ,
  descriptions: {
    year: '2010',
    model: 'XC0123'
  },
  list: ['a', 'b', 'c']
}

const MainPage = () => {
  return (
    <div>
      <Card path={DATA.path} descriptions={DATA.descriptions} list={DATA.list}/>
    </div>
  )
}

export default MainPage
