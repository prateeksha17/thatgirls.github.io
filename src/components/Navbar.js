import React from 'react'
import {Link} from 'react-router-dom'
import { useTheme} from '../hooks/useTheme'

//styles
import './Navbar.css'
import Searchbar from './Searchbar'


export default function Navbar() {
  const {color, changeColor} = useTheme()

  return (
    < div className='navbar' style={{background: color}}>
        <nav >
        <Link to='/' className='brand'><h2>That Girl</h2></Link>
        <Searchbar/>
        
        <Link to='/create'><p>Write Confession</p></Link>
        </nav>
    </div>
  )
}
