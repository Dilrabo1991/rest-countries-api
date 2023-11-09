import Header from './header'
import SearchBox from './mainSearch'
import Filter from './Filter'
import Card from '../../countryCard/card'



const MainPage = () => {

  return (
    <div className='mainPage' >
  
           <Header/>
            <main className='main'>
              <div className="container">
             <div className='flex'>
            <SearchBox/>
             <div className='selected'>
               <Filter/> 
             </div>
             </div>
             <div className='cardWrp'>

            <Card/>
             </div>
             </div>
            </main>
            
        </div>
      

  )
}

export default MainPage
