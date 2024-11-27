import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./NavBar.css"
function NavBar() {
  const navigate = useNavigate();
  const  searchquerry = ()=>{

  }
  return (
    <div className='navbar'>

      <img className='logo' onClick={()=>navigate('/')} src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="netFlix img" />

      <div className='div-search'>
        <input type="text" name="search" placeholder='Search your favourate movie' className='search' />
        <button className='search-btn' onClick={searchquerry}>Search</button>
      </div>
      <img className='avathar' src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117" alt="profile" />
    </div>
  )
}

export default NavBar
