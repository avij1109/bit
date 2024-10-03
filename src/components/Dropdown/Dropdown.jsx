
import React, { useState } from 'react';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Select an option');

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const options = ['Option 1', 'Option 2', 'Option 3'];

  return (
    <div>
      <div onClick={toggleDropdown} style={{ cursor: 'pointer', border: '1px solid #ccc', padding: '10px' }}>
        {selectedOption}
      </div>
      {isOpen && (
        <ul style={{ border: '1px solid #ccc', listStyleType: 'none', padding: '0' }}>
          {options.map((option, index) => (
            <li key={index} onClick={() => handleOptionClick(option)} style={{ padding: '10px', cursor: 'pointer' }}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
