import React from 'react'
import Navbar from './Navbar/Navbar';
import MidSection from './Mid/MidSection';

function HomePageUnauthorised() {
  return (
    <div className='flex flex-col'>
        <Navbar/>
        <MidSection/>
    </div>
  )
}

export default HomePageUnauthorised