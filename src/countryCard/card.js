import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Search } from '../svg'
import Filter from '../components/main/Filter'

const url = "https://restcountries.com/v3.1/all"

const Card = () => {
    const [contries, setContries] = useState([])
    const [searchText, setSearchText] = useState('')

    async function handleSearchCountries(e) {
        e.preventDefault(); // Prevent the default form submission behavior

        if (searchText) {
            const res = await fetch(`https://restcountries.com/v3.1/name/${searchText}`)
            const data = await res.json()
            setContries(data)
        }
    }

    const fetchDataContries = async () => {
        const response = await fetch(url)
        const data = await response.json()
        setContries(data)
    }

    useEffect(() => {
        fetchDataContries()
    }, [])

    return (
        <>
        <div className='topBar'>
          <div className='flex'>
            <div className='searcher'>
                <label className='label'>
                    <Search />
                    <form className='form' onSubmit={handleSearchCountries}>
                        <input
                            className='input'
                            type="text"
                            value={searchText}
                            placeholder="Search for a country"
                            onChange={(e) => setSearchText(e.target.value)}
                        />
                    </form>
                </label>
            </div>
            
          
        <div className='selected'>
          <Filter/> 
        </div>
        </div>
        </div>



            {
                contries.map((country) => {
                    return (
                        <Link className='link' to={`/country/${country.name.common}`} key={country.numericCode}>
                            <div className='card'>
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
