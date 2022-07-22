import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import "./Navbar.css"
import Navlist from './Navlist';


function Navbar() {
  const [Menu, setMenu] = useState(false)
  return (
    <>
    <nav className="navbar">
        <div className="logo">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8sKlT7Ulr6L2YlfczkUFqgWvQXZSC2xpGFg&usqp=CAU" alt="" />
          
        </div>
        <div className="heading">
        <h1 style={{fontFamily:"fangsong"}}>Experince The Power Of Prime</h1>
        </div>
        <span>Hello Guest</span>
        <div className="menuButton">
          <button onClick={()=>setMenu(!Menu)}><MenuIcon/></button>
        </div>
    </nav> 
    <div className='menu' style={{position : "sticky", top:"0", zIndex:"10"}}>
    {Menu && <Navlist/>}
    </div>
</>
)
}

export default Navbar;