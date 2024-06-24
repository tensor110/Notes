import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className='w-full px-8 py-2  bg-blue-300'>
      <NavLink to='/' className='font-semibold font-serif'>Notes</NavLink>
    </div>
  )
}

export default Navbar
