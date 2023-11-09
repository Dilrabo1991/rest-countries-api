import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'



const url = "https://restcountries.com/v3.1/all"
const Card = () => {

    const[contries, setContries]= useState([])
    const fetchDataContries = async () => {
        const response = await fetch(url)
        const data = await response.json()
        setContries(data)
    }
    useEffect(()=>{
        fetchDataContries()
    },[])
   


  return (
    <>
      {
        contries.map((country)=>{
          console.log(country.name.common);
          return(
            <Link className='link' to={`/country/${country.name.common}`}>
            <div className='card' key={country.numericCode}>
              <div className='flag'>
              <img className='flag' src={country.flags.png} alt={country.flags.alt} />
              </div>
              <div className='text'>
                <h3>{country.name.common}</h3>
                <p>Population: <span>{country.population}</span></p>
                <p>Region: <span>{country.region}</span></p>
                <p>Capital: <span>{country.capital}</span></p>
                <div className='flex'>
              
             
                </div>
              </div>
            </div>
            </Link>
          )
        })
      }
    </>
  )
}

export default Card
