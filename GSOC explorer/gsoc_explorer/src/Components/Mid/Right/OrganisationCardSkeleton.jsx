// import React from 'react'
// import logo from './org-1.png'
// import bookmark from './black bookmark.png'
// function Organisation_card() {
//   return (
//     <div className='w-[280px] h-[230px] bg-gray_bg rounded-3xl flex flex-col cursor-pointer hover:shadow-card'>
//         <span className='relative w-[40px] h-[40px] left-[230px] top-2'><img src={bookmark}/></span>
//         <div className='w-full h-1/2 flex items-center justify-center'>
//             <div className='w-full h-[100px] flex justify-center relative bottom-6'>
//                 <img className='w-[80px] h-[100px] items-center justify-center' src={logo}/>
//             </div>
//         </div>
//         <div className='flex flex-col items-center justify-center w-full h-full'>
//             <h1 className='text-white text-outfit text-[14px] font-bold'>GNU Compiler Collection (GCC) </h1>
//             <p className='text-white mt-2 text-outfit text-[12px] font-light'>GNU compilers</p>
//         </div>
//     </div>
//   )
// }
// export default Organisation_card

import React,{useEffect,useState} from 'react';
import bookmark from './black bookmark.png';
import ybookmark from './bookmark.png';
import { useNavigate } from 'react-router-dom';

function Organisation_card({ name, imageUrl, description,logobg,id }) {
  const navigate = useNavigate();
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [lname, setLname] = useState(false);

  useEffect(() => {
    const bookmarkedOrgs = JSON.parse(localStorage.getItem('bookmarkedOrgs')) || [];
    setIsBookmarked(bookmarkedOrgs.includes(id));
  }, [id]);
  const toggleBookmark = (e) => {
   // e.stopPropagation(); // Prevents the click from triggering the card's click handler
    const bookmarkedOrgs = JSON.parse(localStorage.getItem('bookmarkedOrgs')) || [];
    if (bookmarkedOrgs.includes(id)) {
      const updatedBookmarks = bookmarkedOrgs.filter(orgId => orgId !== id);
      localStorage.setItem('bookmarkedOrgs', JSON.stringify(updatedBookmarks));
      setIsBookmarked(false);
    } else {
      bookmarkedOrgs.push(id);
      localStorage.setItem('bookmarkedOrgs', JSON.stringify(bookmarkedOrgs));
      setIsBookmarked(true);
    }
  };

  const clickHandler = () =>{
    navigate(`/organisation/${id}`);
  }
  useEffect(() => {
    setLname(name.length > 30); 
  }, [name]);

  return (
    <div className='w-[280px] h-[340px] bg-white rounded-3xl flex flex-col hover:shadow-4xl cursor-pointer z-0'>
      <span className='relative w-[40px] h-[40px] left-[230px] top-2 z-10' onClick={toggleBookmark}>
      <img className='cursor-pointer' src={isBookmarked ? ybookmark : bookmark} alt="Bookmark icon"/>
      </span>
      <div >
      <div className='w-full h-1/2 flex items-center justify-center z-0' onClick={clickHandler}>
        <div className={`w-full h-[100px] flex justify-center relative bottom-6`}>
          <img className='w-[180px] h-[120px] p-2  items-center justify-center' src={imageUrl} alt={`${name} logo`}  style={{ backgroundColor: logobg }} />
        </div>
      </div>
      <div className='flex flex-col items-center justify-center w-full h-full cursor-pointer' onClick={clickHandler}>
        <h1 className={`text-yellow_bg text-outfit font-bold px-6 ${lname ? 'text-[14px]' : 'text-[18px]'}`}>{name}</h1>
        <p className={`text-black mt-2 text-outfit font-light px-8 ${lname ? 'text-[11px]' : 'text-[13px]'}`}>{description}</p>
      </div>
      </div>
    </div>
  );
}

export default Organisation_card;
