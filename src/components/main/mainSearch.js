import React, { useState } from 'react'
import { Search } from '../../svg'

const SearchBox = ({onSearch}) => {

  const [input,setInput]= useState('')
  const handlerSubmit = (e)=>{
    e.preventDefault()
    onSearch(input)
    setInput('')
  }
  return (
    <div className='searcher'>
             <label className='label'>
                <Search/>
                <form className='form' type='submit'
                 onSubmit={handlerSubmit}>
              <input className='input' type="text"
               value={input}
               placeholder="Search for a country" 
               onChange={(e)=>setInput(e.target.value)}/>
              </form>
              </label>
             </div>
  )
}

export default SearchBox
