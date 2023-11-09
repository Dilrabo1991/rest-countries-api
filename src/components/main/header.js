import React from 'react'
import { Moon } from '../../svg'
const Header = () => {
  return (
    <header className='header'>
             <div className='title'> Where in the world? </div>
               <div className='darkMode'><Moon/>Dark Mode</div>
               </header>
  )
}

export default Header
