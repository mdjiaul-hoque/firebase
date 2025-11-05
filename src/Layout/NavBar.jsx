import React from 'react'
import { Outlet } from 'react-router'

const NavBar = () => {
  return (
    <nav>
        <ul>
            <li><a href="/">Home</a></li>
            {/* <li><a href="/product">Product</a></li> */}
            <li><a href="/contact">Contact</a></li>
            <li><a href="/about">About</a></li>
        </ul>
        <Outlet></Outlet>
    </nav>
  )
}

export default NavBar   