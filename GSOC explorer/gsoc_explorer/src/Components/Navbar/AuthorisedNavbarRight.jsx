import React from 'react'
import { useNavigate} from 'react-router-dom'
import logo from './logout.png'
function AuthorisedNavbarRight() {
  const navigate = useNavigate();
  const bookmarksHandler=()=>{
    navigate('/bookmarks');
  }
  return (
    <div className='text-white flex items-center h-full w-[400px] justify-around'>
        <div className='font-outfit text-[20px] cursor-pointer'>Open issues</div>
        <div className='w-[5px] h-4/6 bg-white'></div>
        <div className='font-outfit text-[20px] mr-10 ml-2 cursor-pointer' onClick={()=> bookmarksHandler()}>Bookmarks</div>
        <div className='mr-4 cursor-pointer'><img className='w-[50px] h-[50px]' src={logo}/></div>
    </div>
  )
}

export default AuthorisedNavbarRight