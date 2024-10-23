import React, { useState, useEffect } from 'react';

function Popup({ items, selectedItems, setSelectedItems, storageKey, onClose }) {
    const [popupItems, setPopupItems] = useState(selectedItems);

    useEffect(() => {
        setPopupItems(selectedItems);
    }, [selectedItems]);

    const handleCheckboxChange = (item) => {
        const updatedSelectedItems = popupItems.includes(item)
            ? popupItems.filter((i) => i !== item)
            : [...popupItems, item];
        setPopupItems(updatedSelectedItems);
        setSelectedItems(updatedSelectedItems);
        localStorage.setItem(storageKey, JSON.stringify(updatedSelectedItems));
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-80 top-0 left-0 w-full h-full flex justify-center items-center z-50">
            <div className="bg-gray_bg w-5/6 h-5/6 rounded-lg p-6">
                <h2 className="text-white font-outfit text-[20px] mb-4">Select {storageKey.replace('selected', '')}</h2>
                <div className="overflow-y-auto h-[80%] grid grid-cols-5 px-14 gap-x-2">
                    {items.map((item) => (
                        <div key={item} className="flex w-full h-auto mt-4">
                            <div className='w-1/6 h-auto flex items-center justify-center'>
                            <input
                                type="checkbox"
                                className="mr-2 w-[15px] h-[15px] accent-yellow_bg rounded-sm cursor-pointer"
                                checked={popupItems.includes(item)}
                                onChange={() => handleCheckboxChange(item)}
                            />
                            </div>
                            <div className='w-5/6 h-auto flex items-center justify-start text-white font-outfit text-normal text-[16px]'>{item}</div>
                        </div>
                    ))}
                </div>
                <button className="mt-4 bg-yellow_bg text-black px-4 py-2 rounded" onClick={onClose}>Close</button>
            </div>
        </div>
    );
}

export default Popup;
