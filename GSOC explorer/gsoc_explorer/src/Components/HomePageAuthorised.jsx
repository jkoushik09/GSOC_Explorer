import React from 'react'
import MidSection from './Mid/MidSection';
import AuthorisedNavbar from './Navbar/AuthorisedNavbar';

function HomePageAuthorised() {
  return (
    <div className='flex flex-col'>
    <AuthorisedNavbar/>
    <MidSection/>
</div>
  )
}

export default HomePageAuthorised