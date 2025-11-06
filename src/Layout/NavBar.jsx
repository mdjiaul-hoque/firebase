import React from 'react'
import { Link, Outlet } from 'react-router'

const NavBar = () => {
  return (
    <nav>
        
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/signIn">Sign In</Link></li>
            {/* <li><a href="/product">Product</a></li> */}
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/about">About</Link></li>
        </ul>
        <Outlet></Outlet>
    </nav>
  )
}

export default NavBar   