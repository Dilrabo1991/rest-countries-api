import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './CountryPage.css';
import Header from '../main/header';
import axios from 'axios';



const CountryPage = () => {

  const [countries, setCountries] = useState([]);

  const { name } = useParams();



  useEffect(() => {
 const fetchDataContries = async () => {
  axios.get(
    `https://restcountries.com/v3.1/name/${name}`
    ).then(({ data }) => {
      setCountries(data);
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    })

 }
 fetchDataContries();

  },[name]);


  

  return (
    <>
      <Header />
      <div className="countryPage">
        <Link to="/">
          <button className="back">Back</button>
        </Link>

        <div className="cardWrapper">
          {
          countries.map((contries) => {
            return (
              <div className="countryPage" key={contries?.id}>
                <div className="imgCountry">
                  <img className="flagCountry" src={contries?.flags.png} alt={contries?.flags.alt} />
                </div>
                <div className="textCountries">
                  <h5 className='nameCountry'>Country Name :  { contries?.name?.common}</h5>
                  <div className='flex'>
                    <span className='flexspan'>
                  <p className="populationCountry">Population : <span className='spanCountry'>{contries?.population}</span></p>
                  <p className="populationCountry">Region : <span className='spanCountry'>{contries?.region}</span></p>
                  <p className="populationCountry">Sub Region : <span className='spanCountry'>{contries?.subregion}</span></p>
                  <p className="populationCountry">Capital : <span className='spanCountry'>{contries?.capital}</span></p>
                  </span>
                  </div>
                  <div className="borederContries">
                  <p className="populationCountry">Border Countries :
                 {
                    contries?.borders?.map((borders) => {
                      return (
                        <button key={borders.id} onClick={() => { window.location.href = `/country/${borders.name.common}`}} className='borders'>{borders}</button>
                      );
                    })
                 } 
                  
                   </p>
                  </div>
                
                  </div>
                
                </div>
             
            );
          }) 
          }
        </div>
      </div>
    </>
  );
};

export default CountryPage;
