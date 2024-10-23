// import React, {useEffect} from 'react'
// import MidLeftSection from './Left/MidLeftSection'
// import MidRightSection from './Right/MidRightSection'
// function MidSection() {
//   useEffect(() => {
//     document.body.style.overflow = 'hidden';
//     return () => {
//       document.body.style.overflow = 'auto';
//     };
//   }, []);
//   return (
//     <div className='flex h-full w-full'>
//         <div className='flex w-2/6 h-full max-h-screen overflow-y-auto'><MidLeftSection/></div>
//         <div className='flex w-4/6 h-full max-h-screen overflow-y-auto'><MidRightSection/></div>
//     </div>
//   )
// }

// export default MidSection

import React, {useEffect,useState} from 'react'
import MidLeftSection from './Left/MidLeftSection'
import MidRightSection from './Right/MidRightSection'
import axios from 'axios';
function MidSection() {
  const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedTechnologies, setSelectedTechnologies] = useState([]);
    const [selectedYears, setSelectedYears] = useState([]);
    const [selectedTopics, setSelectedTopics] = useState([]);
    const [organizations, setOrganizations] = useState([]);

    useEffect(() => {
      axios.get('http://localhost:3690/api/items')
          .then(response => {
              setOrganizations(response.data.data);
          })
          .catch(error => console.error('Error fetching data:', error));
  }, []);
  
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);
  return (
    <div className='flex h-full w-full'>
        <div className='flex w-2/6 h-full max-h-screen overflow-y-auto'><MidLeftSection
                organizations={organizations}
                selectedCategories={selectedCategories}
                setSelectedCategories={setSelectedCategories}
                selectedTechnologies={selectedTechnologies}
                setSelectedTechnologies={setSelectedTechnologies}
                selectedYears={selectedYears}
                setSelectedYears={setSelectedYears}
                selectedTopics={selectedTopics}
                setSelectedTopics={setSelectedTopics}
            /></div>
        <div className='flex w-4/6 h-full max-h-screen overflow-y-auto'><MidRightSection
                selectedCategories={selectedCategories}
                selectedTechnologies={selectedTechnologies}
                selectedYears={selectedYears}
                selectedTopics={selectedTopics}
                organizations={organizations}
            /></div>
    </div>
  )
}

export default MidSection
