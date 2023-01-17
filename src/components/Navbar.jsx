import React from 'react'
import logo from '../assets/react-logo.png'

export default function Navbar() {
    return (
        <nav>
            <img src={logo} className='logo'></img>
            <h3 className='react-facts'>React Facts</h3>
            <h4>React Course - Project 1</h4>
        </nav>
    )
}