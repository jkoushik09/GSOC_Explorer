import React from 'react'
import Logo from './Logo'
import AuthorisedNavbarRight from './AuthorisedNavbarRight'

function AuthorisedNavbar() {
  return (
    <div className='w-full h-[120px] bg-black flex justify-between items-center'>
        <Logo/>
        <AuthorisedNavbarRight/>
    </div>
  )
}

export default AuthorisedNavbar