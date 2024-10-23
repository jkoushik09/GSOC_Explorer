import React from 'react'
import { useNavigate} from 'react-router-dom'

function NavbarRight() {
  const navigate = useNavigate();
  const loginHandler=()=>{
    navigate('/login');
  }
  const bookmarksHandler=()=>{
    navigate('/bookmarks');
  }
  return (
    <div className='text-white flex items-center h-full w-[400px] justify-around'>
        <div className='font-outfit text-[20px] cursor-pointer'>Open issues</div>
        <div className='w-[5px] h-4/6 bg-white'></div>
        <div className='font-outfit text-[20px] mr-10 ml-2 cursor-pointer' onClick={()=> bookmarksHandler()}>Bookmarks</div>
        {/* <div className='bg-login_bg w-[150px] h-[48px] text-white flex items-center justify-center font-outfit text-[24px] font-light cursor-pointer'
        onClick={()=> loginHandler()}>
          LOGIN</div> */}
    </div>
  )
}

export default NavbarRight