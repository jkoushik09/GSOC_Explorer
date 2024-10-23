import React, { useState, useEffect } from 'react';
import Organisation_card from '../Mid/Right/OrganisationCardSkeleton';
import logo from './download .png'
import * as XLSX from 'xlsx';

function Bookmarks() {
  const [bookmarkedOrgs, setBookmarkedOrgs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookmarkedOrgs = async () => {
      const bookmarkedIds = JSON.parse(localStorage.getItem('bookmarkedOrgs')) || [];
      const response = await fetch('http://localhost:3690/api/items'); 
      const allOrgs = await response.json();
      const bookmarkedOrganizations = allOrgs.data.filter(org => bookmarkedIds.includes(org._id));
      setBookmarkedOrgs(bookmarkedOrganizations);
      setLoading(false);
    };

    fetchBookmarkedOrgs();
  }, []);

  const downloadExcel = () => {
    const worksheetData = bookmarkedOrgs.map(org => ({
      Name: org.name,
      Description: org.description,
      Website: org.url,
      Category: org.category,
      Topics: org.topics.join(', '),
      Technologies: org.technologies.join(', '),
    }));

    const worksheet = XLSX.utils.json_to_sheet(worksheetData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Bookmarks');

    XLSX.writeFile(workbook, 'bookmarks.xlsx');
  };

  return (
    <div className='w-full h-full flex items-center justify-center bg-black'>
      <div className='w-5/6 h-full flex flex-col items-center justify-center'>
        <div className='w-5/6 h-[100px] mt-10 flex items-center justify-center'>
          <h1 className='text-white justify-center font-outfit text-[32px]'>Bookmarks</h1>
          <span className='relative left-[400px] cursor-pointer' onClick={downloadExcel}>
            <img className='w-[40px] h-[40px]' src={logo} alt="download excel" />
          </span>
        </div>
        <div className='w-full h-full mb-14'>
          <div className='flex w-full h-full grid grid-cols-4 auto-rows-auto gap-x-6 gap-y-8'>
            {loading ? (
              <p className='text-white'>Loading...</p>
            ) : bookmarkedOrgs.length > 0 ? (
              bookmarkedOrgs.map(org => (
                <Organisation_card
                  key={org.id}
                  id={org._id}
                  name={org.name}
                  imageUrl={org.image_url}
                  description={org.description}
                  logobg={org.image_background_color}
                />
              ))
            ) : (
              <p className='text-white'>No bookmarks yet.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bookmarks;
