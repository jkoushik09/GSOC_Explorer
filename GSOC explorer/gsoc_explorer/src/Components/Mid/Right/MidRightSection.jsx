// import React,{useState, useEffect} from 'react'
// import search from './search.png'
// import axios from 'axios';
// import Organisation_card from './OrganisationCardSkeleton'
// function MidRightSection() {
//   const [organizations, setOrganizations] = useState([]);
//   useEffect(() => {
//     axios.get('http://localhost:3690/api/items')
//       // .then(response => setOrganizations(response.data))
//       // .catch(error => console.error('Error fetching data:', error));
//       .then(response => response.json())
//       .then(data => {
//         const parsedData = JSON.parse(data.contents);
//         console.log(parsedData); // Log the data to check its structure
//         setOrganizations(parsedData);
//       })
//       .catch(error => console.error('Error fetching data:', error));
//   }, []);


//   return (
//     <div className='bg-lblack_bg w-full h-full flex flex-col'>
//         <div className='flex w-full h-[100px] items-center justify-center'>
//           <input className='w-5/6 h-14 rounded-2xl pl-10 text-[22px] text-black focus:outline-none placeholder:text-black placeholder:font-outfit' placeholder='Search' type="text" name="search"></input>
//           <span className='absolute w-[25px] h-[25px] right-40'><img src={search}/></span>
//         </div>
//         <div className='flex py-4 px-10 items-center justify-center'>
//           <div className='flex w-full h-full grid grid-cols-3 auto-rows-auto gap-x-6 gap-y-8'>
//             {/* <Organisation_card/>
//             <Organisation_card/>
//             <Organisation_card/>
//             <Organisation_card/>
//             <Organisation_card/>
//             <Organisation_card/>
//             <Organisation_card/>
//             <Organisation_card/>
//             <Organisation_card/>
//             <Organisation_card/>
//             <Organisation_card/>
//             <Organisation_card/> */}
//              {organizations.map((org, index) => (
//             <Organisation_card
//               key={index}
//               name={org.name}
//               imageUrl={org.image_url}
//               description={org.description}
//             />
//           ))}
//           </div>
//         </div>
//     </div>
//   )
// }

// export default MidRightSection

// import React, { useState, useEffect } from 'react';
// import search from './search.png';
// import axios from 'axios';
// import Organisation_card from './OrganisationCardSkeleton';

// function MidRightSection() {
//   const [organizations, setOrganizations] = useState([]);
//   const [searchQuery, setSearchQuery] = useState('');

//   const handleSearchChange = (e) => {
//     setSearchQuery(e.target.value);
//   };

//   useEffect(() => {
//     axios.get('http://localhost:3690/api/items')
//       .then(response => {
//         console.log(response.data.data[489]._id); 
//         setOrganizations(response.data.data);
//       })
//       .catch(error => console.error('Error fetching data:', error));
//   }, []);

//   const filteredOrganisations = organizations.filter(org =>
//     org.name.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <div className='bg-lblack_bg w-full h-full min-h-[670px] flex flex-col'>
//       <div className='flex w-full h-[100px] items-center justify-center relative'>
//         <input
//           className='w-5/6 h-14 bg-gray_bg rounded-2xl pl-10 text-[22px] text-white focus:outline-none placeholder:text-white placeholder:font-outfit'
//           placeholder='Search'
//           type="text"
//           name="search"
//           value={searchQuery}
//           onChange={handleSearchChange}
//         />
//         <span className='absolute w-[25px] h-[25px] right-40'>
//           <img src={search} alt="Search icon" />
//         </span>
//       </div>
//       <div className='flex py-4 px-10 items-center justify-center'>
//         <div className='flex w-full h-full grid grid-cols-3 auto-rows-auto gap-x-10 gap-y-8 mb-32'>
//         {filteredOrganisations.map((org, index) => (
//             <Organisation_card
//               key={index}
//               name={org.name}
//               imageUrl={org.image_url}
//               description={org.description}
//               logobg={org.image_background_color}
//               id={org._id}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default MidRightSection;


// import React, { useState, useEffect } from 'react';
// import search from './search.png';
// import axios from 'axios';
// import Organisation_card from './OrganisationCardSkeleton';

// function MidRightSection({ selectedCategories, selectedTechnologies, selectedYears, selectedTopics }) {
//   const [organizations, setOrganizations] = useState([]);
//   const [searchQuery, setSearchQuery] = useState('');

//   const handleSearchChange = (e) => {
//     setSearchQuery(e.target.value);
//   };

//   useEffect(() => {
//     axios.get('http://localhost:3690/api/items')
//       .then(response => {
//         console.log(response.data.data[489]._id); 
//         setOrganizations(response.data.data);
//       })
//       .catch(error => console.error('Error fetching data:', error));
//   }, []);

//   const filteredOrganizations = organizations.filter(org => {
//     const matchesSearchQuery = org.name.toLowerCase().includes(searchQuery.toLowerCase());
//     const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(org.category);
//     const matchesTechnologies = selectedTechnologies.length === 0 || org.technologies.some(tech => selectedTechnologies.includes(tech));
//     const matchesYears = selectedYears.length === 0 || selectedYears.includes(org.year);
//     const matchesTopics = selectedTopics.length === 0 || org.topics.some(topic => selectedTopics.includes(topic));

//     return matchesSearchQuery && matchesCategory && matchesTechnologies && matchesYears && matchesTopics;
//   });

//   return (
//     <div className='bg-lblack_bg w-full h-full min-h-[670px] flex flex-col'>
//        <div className='relative w-full h-full overflow-y-auto'>
//       <div className='sticky top-0 z-0 flex w-full h-[100px] items-center justify-center'>
//         <input
//           className='w-5/6 h-14 bg-gray_bg rounded-2xl pl-10 text-[22px] text-white focus:outline-none placeholder:text-white placeholder:font-outfit'
//           placeholder='Search'
//           type="text"
//           name="search"
//           value={searchQuery}
//           onChange={handleSearchChange}
//         />
//         <span className='absolute w-[25px] h-[25px] right-40'>
//           <img src={search} alt="Search icon" />
//         </span>
//       </div>
//       </div>
//       <div className='flex py-4 px-10 items-center justify-center'>
//         <div className='flex w-full h-full grid grid-cols-3 auto-rows-auto gap-x-10 gap-y-8 mb-32'>
//           {filteredOrganizations.map((org, index) => (
//             <Organisation_card
//               key={index}
//               name={org.name}
//               imageUrl={org.image_url}
//               description={org.description}
//               logobg={org.image_background_color}
//               id={org._id}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default MidRightSection;

import React, { useState, useEffect } from 'react';
import search from './search.png';
import axios from 'axios';
import OrganisationCard from './OrganisationCardSkeleton';

function MidRightSection({ selectedCategories, selectedTechnologies, selectedYears, selectedTopics }) {
  const [organizations, setOrganizations] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    axios.get('http://localhost:3690/api/items')
      .then(response => {
        console.log(response.data); 
        setOrganizations(response.data.data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const filteredOrganizations = organizations.filter(org => {
    const matchesSearchQuery = org.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(org.category);
    const matchesTechnologies = selectedTechnologies.length === 0 || org.technologies.some(tech => selectedTechnologies.includes(tech));
    const matchesYears = selectedYears.length === 0 || selectedYears.includes(org.year);
    const matchesTopics = selectedTopics.length === 0 || org.topics.some(topic => selectedTopics.includes(topic));

    return matchesSearchQuery && matchesCategory && matchesTechnologies && matchesYears && matchesTopics;
  });

  return (
    <div className='bg-lblack_bg w-full h-full min-h-[670px] flex flex-col'>
      <div className='sticky top-0 z-10 bg-gray_bg flex w-full h-[100px] items-center justify-center border-l-[4px] border-lblack_bg'>
        <input
          className='w-5/6 h-14 bg-lblack_bg rounded-2xl pl-10 text-[22px] text-white focus:outline-none placeholder:text-white placeholder:font-outfit'
          placeholder='Search'
          type="text"
          name="search"
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <span className='absolute w-[25px] h-[25px] right-40'>
          <img src={search} alt="Search icon" />
        </span>
      </div>
      <div className='flex py-4 px-10 items-center justify-center overflow-y-auto mt-4'>
        <div className='flex w-full grid grid-cols-3 auto-rows-auto gap-x-10 gap-y-8 mb-32'>
          {filteredOrganizations.map((org, index) => (
            <OrganisationCard
              key={index}
              name={org.name}
              imageUrl={org.image_url}
              description={org.description}
              logobg={org.image_background_color}
              id={org._id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MidRightSection;
