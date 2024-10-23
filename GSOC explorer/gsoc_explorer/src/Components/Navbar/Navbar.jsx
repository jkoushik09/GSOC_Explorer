import React from 'react'
import Logo from './Logo'
import NavbarRight from './NavbarRight'

function Navbar() {
  return (
    <div className='w-full h-[120px] bg-black flex justify-between items-center'>
        <Logo/>
        <NavbarRight/>
    </div>
  )
}

export default Navbar