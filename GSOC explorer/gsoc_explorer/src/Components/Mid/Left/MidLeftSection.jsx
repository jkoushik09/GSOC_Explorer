import React, { useState, useEffect } from 'react';
import dd from './dd.png';
import check from './check.png';
import Popup from './Popup';
// function Popup({ items, selectedItems, setSelectedItems, onClose,storageKey }) {
//     const handleCheckboxChange = (value) => {
//         setSelectedItems((prev) => {
//             const newValue = prev.includes(value)
//                 ? prev.filter((item) => item !== value)
//                 : [...prev, value];
//             localStorage.setItem(storageKey, JSON.stringify(newValue));
//             return newValue;
//         });
//     };

//     return (
//         <div className="fixed inset-0 bg-black bg-opacity-80 z-50 top-0 left-0 w-full h-full flex items-center justify-center">
//             <div className="bg-gray_bg w-5/6 h-5/6 rounded-lg p-6">
//                 <div className="text-white font-outfit text-[20px] mb-4">Select Items</div>
//                 <div className="overflow-y-auto h-[80%] grid grid-cols-5 px-14 gap-x-2">
//                     {items.map((item) => (
//                         <div key={item} className='flex w-full h-auto mt-4'>
//                             <div className='w-1/6 h-auto flex items-center justify-center'>
//                                  <input
//                                     className='w-[15px] h-[15px] accent-yellow_bg rounded-sm cursor-pointer'
//                                     type='checkbox'
//                                     checked={selectedItems.includes(item)}
//                                     onChange={() => handleCheckboxChange(item)}
//                                 />
//                             </div>
//                             <div className='w-5/6 h-auto flex items-center justify-start text-white font-outfit text-normal text-[16px]'>{item}</div>
//                         </div>
//                     ))}
//                 </div>
//                 <div className="mt-4 text-yellow_bg underline cursor-pointer" onClick={onClose}>Close</div>
//             </div>
//         </div>
//     );
// }


function MidLeftSection({
    organizations,
    selectedCategories,
    setSelectedCategories,
    selectedTechnologies,
    setSelectedTechnologies,
    selectedYears,
    setSelectedYears,
    selectedTopics,
    setSelectedTopics
}) {
    //const [isFirstChecked, setIsFirstChecked] = useState(false);
    const [dropdowns, setDropdowns] = useState({
        category: false,
        technologies: false,
        years: false,
        topics: false,
    });
    const [popupData, setPopupData] = useState(null);
    useEffect(() => {
        const savedCategories = JSON.parse(localStorage.getItem('selectedCategories')) || [];
        const savedTechnologies = JSON.parse(localStorage.getItem('selectedTechnologies')) || [];
        const savedYears = JSON.parse(localStorage.getItem('selectedYears')) || [];
        const savedTopics = JSON.parse(localStorage.getItem('selectedTopics')) || [];

        setSelectedCategories(savedCategories);
        setSelectedTechnologies(savedTechnologies);
        setSelectedYears(savedYears);
        setSelectedTopics(savedTopics);
    }, []);

    const saveToLocalStorage = (key, value) => {
        localStorage.setItem(key, JSON.stringify(value));
    };


    const toggleDropdown = (key) => {
        setDropdowns((prev) => ({ ...prev, [key]: !prev[key] }));
    };

    const [categories, setCategories] = useState([]);
    const [technologies, setTechnologies] = useState([]);
    const [topics, setTopics] = useState([]);
    const [years, setYears ]= useState(["2024","2023","2022","2021","2020","2019","2018","2017","2016"]);

    useEffect(() => {
        if (organizations.length > 0) {
            const allCategories = organizations.map((organization) => organization.category);
            const allTechnologies = organizations.flatMap((organization) => organization.technologies);
            const allTopics = organizations.flatMap((organization) => organization.topics);
            setCategories([...new Set(allCategories)]);
            setTechnologies([...new Set(allTechnologies)]);
            setTopics([...new Set(allTopics)]);
        }
    }, [organizations]);

    // const toggleFirstTimeCheckbox = () => {
    //     setIsFirstChecked(!isFirstChecked);
    // };
    const handleCheckboxChange = (setter, value, key) => {
        setter((prev) => {
            const newValue = prev.includes(value)
                ? prev.filter((item) => item !== value)
                : [...prev, value];
            saveToLocalStorage(key, newValue);
            return newValue;
        });
    };

    const clearAllFilters = () => {
        setSelectedCategories([]);
        setSelectedTechnologies([]);
        setSelectedYears([]);
        setSelectedTopics([]);
        localStorage.removeItem('selectedCategories'); // Remove from localStorage
        localStorage.removeItem('selectedTechnologies');
        localStorage.removeItem('selectedYears');
        localStorage.removeItem('selectedTopics');
    };

    const handleViewAllClick = (type) => {
        let items = [];
        let selectedItems = [];
        let setSelectedItems = () => {};
        let storageKey = '';

        switch (type) {
            case 'category':
                items = categories;
                selectedItems = selectedCategories;
                setSelectedItems = setSelectedCategories;
                storageKey = 'selectedCategories';
                break;
            case 'technologies':
                items = technologies;
                selectedItems = selectedTechnologies;
                setSelectedItems = setSelectedTechnologies;
                storageKey = 'selectedTechnologies';
                break;
            case 'years':
                items = years;
                selectedItems = selectedYears;
                setSelectedItems = setSelectedYears;
                storageKey = 'selectedYears';
                break;
            case 'topics':
                items = topics;
                selectedItems = selectedTopics;
                setSelectedItems = setSelectedTopics;
                storageKey = 'selectedTopics';
                break;
            default:
                break;
        }

        setPopupData({
            items,
            selectedItems,
            setSelectedItems,
            storageKey
        });
    };

    return (
        <div className='flex flex-col w-full h-full bg-gray_bg items-center z-10 mb-16'>
            {popupData && (
                <Popup
                    items={popupData.items}
                    selectedItems={popupData.selectedItems}
                    setSelectedItems={popupData.setSelectedItems}
                    storageKey={popupData.storageKey}
                    onClose={() => setPopupData(null)}
                />
            )}
            <div className='font-outfit mt-8 mb-4 text-white font-light text-[20px] z-0'>FILTERS</div>
            <div className=' flex flex-col w-5/6 h-4/6 bg-lblack_bg rounded-xl items-center mb-10'>
                <div className='text-yellow_bg mt-14 mb-6 flex justify-end ml-[200px] font-outfit text-[16px] font-light cursor-pointer hover:underline' onClick={clearAllFilters}>clear all filters</div>
                <div className='flex flex-col  w-5/6 h-full cursor-pointer'>
                {/* <div className='w-full h-[80px] flex items-center justify-around bg-gray_bg rounded-xl mb-8'>
                    <div className='bg-yellow_bg w-5 h-5 rounded-full cursor-pointer flex items-center justify-center' onClick={toggleFirstTimeCheckbox}>
                        {isFirstChecked && <img className='w-3 h-3' src={check} alt="Checked" />}
                    </div>
                    <div className='font-outfit font-normal text-white text-[20px]'>First Time Organisations</div>
                </div> */}
                    <div className={`w-full flex flex-col items-center justify-around bg-gray_bg rounded-xl mb-8 cursor-pointer ${dropdowns.category ? 'h-[400px]' : 'h-[80px]'}`}>
                        <div className='w-full h-full flex flex-col items-center justify-around'>
                            <div className='w-full h-[80px] flex items-center justify-around' onClick={() => toggleDropdown('category')}>
                                <div className='font-outfit font-normal text-white text-[20px]'>Category</div>
                                <div className='bg-yellow_bg w-5 h-5 ml-[33px] rounded-full cursor-pointer'>
                                    <img className='w-full h-full' src={dd} />
                                </div>
                            </div>
                            {dropdowns.category && (
                                <div className='w-5/6 bg-black h-full mb-4 pt-4 pl-6 rounded-lg flex flex-col'>
                                    {categories.slice(0, 6).map((category) => (
                                        <div key={category} className='flex w-full h-auto mt-4'>
                                            <div className='w-1/6 h-auto flex items-center justify-center'>
                                                <input
                                                    className='w-[15px] h-[15px] accent-yellow_bg rounded-sm cursor-pointer'
                                                    type='checkbox'
                                                    checked={selectedCategories.includes(category)}
                                                    onChange={() => handleCheckboxChange(setSelectedCategories, category, 'selectedCategories')}
                                                />
                                                
                                            </div>
                                            <div className='w-5/6 h-auto flex items-center justify-start text-white font-outfit text-normal text-[16px]'>{category}</div>
                                        </div>
                                    ))}
                                    <div className="text-yellow_bg text-[14px] w-full h-full flex mt-4 relative left-44 underline z-0" onClick={() => handleViewAllClick('category')}>view all</div>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className={`w-full flex flex-col items-center justify-around bg-gray_bg rounded-xl mb-8 cursor-pointer ${dropdowns.technologies ? 'h-[400px]' : 'h-[80px]'}`}>
                        <div className='w-full h-full flex flex-col items-center justify-around'>
                            <div className='w-full h-[80px] flex items-center justify-around' onClick={() => toggleDropdown('technologies')}>
                                <div className='font-outfit font-normal text-white text-[20px]'>Technologies</div>
                                <div className='bg-yellow_bg w-5 h-5 rounded-full cursor-pointer'>
                                    <img className='w-full h-full' src={dd} />
                                </div>
                            </div>
                            {dropdowns.technologies && (
                                <div className='w-5/6 bg-black h-full mb-4 pt-4 pl-6 rounded-lg flex flex-col'>
                                    {technologies.slice(0, 6).map((technology) => (
                                        <div key={technology} className='flex w-full h-auto mt-4'>
                                            <div className='w-1/6 h-auto flex items-center justify-center'>
                                                <input
                                                    className='w-[15px] h-[15px] accent-yellow_bg rounded-sm cursor-pointer' 
                                                    type='checkbox'
                                                    checked={selectedTechnologies.includes(technology)}
                                                    onChange={() => handleCheckboxChange(setSelectedTechnologies, technology,'selectedTechnologies')}
                                                />
                                                
                                            </div>
                                            <div className='w-5/6 h-auto flex items-center justify-start text-white font-outfit text-normal text-[16px]'>{technology}</div>
                                        </div>
                                    ))}
                                    <div className="text-yellow_bg text-[14px] w-full h-full flex mt-4 relative left-44 underline z-0" onClick={() => handleViewAllClick('technologies')}>view all</div>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className={`w-full flex flex-col items-center justify-around bg-gray_bg rounded-xl mb-8 cursor-pointer ${dropdowns.years ? 'h-[400px]' : 'h-[80px]'}`}>
                        <div className='w-full h-full flex flex-col items-center justify-around'>
                            <div className='w-full h-[80px] flex items-center justify-around' onClick={() => toggleDropdown('years')}>
                                <div className='font-outfit font-normal text-white text-[20px]'>Years</div>
                                <div className='bg-yellow_bg w-5 h-5 ml-[65px] rounded-full cursor-pointer'>
                                    <img className='w-full h-full' src={dd} />
                                </div>
                            </div>
                            {dropdowns.years && (
                                <div className='w-5/6 bg-black h-full mb-4 pt-4 pl-6 rounded-lg flex flex-col'>
                                    {years.slice(0, 6).map((year) => (
                                        <div key={year} className='flex w-full h-auto mt-4'>
                                            <div className='w-1/6 h-auto flex items-center justify-center'>
                                                <input
                                                    className='w-[15px] h-[15px] accent-yellow_bg rounded-sm cursor-pointer'
                                                    type='checkbox'
                                                    checked={selectedYears.includes(year)}
                                                    onChange={() => handleCheckboxChange(setSelectedYears, year,'selectedYears')}
                                                />
                                                
                                            </div>
                                            <div className='w-5/6 h-auto flex items-center justify-start text-white font-outfit text-normal text-[16px]'>{year}</div>
                                        </div>
                                    ))}
                                    <div className="text-yellow_bg text-[14px] w-full h-full flex mt-4 relative left-44 underline z-0" onClick={() => handleViewAllClick('years')}>view all</div>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className={`w-full flex flex-col items-center justify-around bg-gray_bg rounded-xl mb-8 cursor-pointer ${dropdowns.topics ? 'h-[400px]' : 'h-[80px]'}`}>
                        <div className='w-full h-full flex flex-col items-center justify-around'>
                            <div className='w-full h-[80px] flex items-center justify-around' onClick={() => toggleDropdown('topics')}>
                                <div className='font-outfit font-normal text-white text-[20px]'>Topics</div>
                                <div className='bg-yellow_bg w-5 h-5 ml-[63px] rounded-full cursor-pointer'>
                                    <img className='w-full h-full' src={dd} />
                                </div>
                            </div>
                            {dropdowns.topics && (
                                <div className='w-5/6 bg-black h-full mb-4 pt-4 pl-6 rounded-lg flex flex-col'>
                                    {topics.slice(0, 6).map((topic) => (
                                        <div key={topic} className='flex w-full h-auto mt-4'>
                                            <div className='w-1/6 h-auto flex items-center justify-center'>
                                                <input
                                                    className='w-[15px] h-[15px] accent-yellow_bg rounded-sm cursor-pointer'
                                                    type='checkbox'
                                                    checked={selectedTopics.includes(topic)}
                                                    onChange={() => handleCheckboxChange(setSelectedTopics, topic,'selectedTopics')}
                                                />
                                        
                                            </div>
                                            <div className='w-5/6 h-auto flex items-center justify-start text-white font-outfit text-normal text-[16px]'>{topic}</div>
                                        </div>
                                    ))}
                                    <div className="text-yellow_bg text-[14px] w-full h-full flex mt-4 relative left-44 underline z-0" onClick={() => handleViewAllClick('topics')}>view all</div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MidLeftSection;
