import React, { useState } from 'react';
import SolutionView from './SolutionView';
import { Dropdown, DropdownButton } from 'react-bootstrap';

/**
 * Generates the dropdown items for the AOC dropdown menu.
 * 
 * @param {number} numberOfItems The number of items we want to display
 * @param {Function} setDay Hooks set function.
 */
const dropdownItems = (numberOfItems, setDay) => {
  const items = [];
  for (let i = 0; i < numberOfItems; i++) {
    const day = i + 1;
    items.push(
      <Dropdown.Item onClick={() => {
        setDay(day);
      }}>
        Day {day}
      </Dropdown.Item>
    );
  }
  return items;
};

/**
 * View every single solution.
 */
const SolutionsView = () => {
  const [day, setDay] = useState(1);
  
  return(    
   <>
      <DropdownButton id="dropdown-basic-button" title="Dropdown button">
        { dropdownItems(4, setDay) }
      </DropdownButton>

      <div>
        <SolutionView day={day} />
      </div>
    </> 
  );
};

export default SolutionsView;
