import Header from './header'
import Card from '../../countryCard/card'



const MainPage = () => {

 

  return (
    <div className='mainPage' >
  
           <Header/>
            <main className='main'>
              <div className="container">
           
             <div className='cardWrp'>
            <Card/>
             </div>
             </div>
            </main>
            
        </div>
      

  )
}

export default MainPage
