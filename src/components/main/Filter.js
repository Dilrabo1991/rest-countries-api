import { useState } from "react"
import { useParams } from "react-router-dom"



const Filter = ({setCountries}) => {
 
 
 const [filterCountries, setFilterCountries] = useState([])
  const region = [
    {
      name:"Africa",
    },
    {
      name:"Americas",
    },
    {
      name:"Asia",
    },
    {
      name:"Europe",
    },
    {
      name:"Oceania",
    }

  ]
  
  return (
    <form >
    <select className='select'>
{
  region.map((region , index)=>{
    return(
      <option className="option" key={index} value={region.name}>{region.name}</option>
    )
  })
}
   
    </select>
    </form>
  )
}

export default Filter 
