import React, { useState } from 'react';
import SolutionView from './SolutionView';
import { Dropdown, DropdownButton } from 'react-bootstrap';

const NUMBER_OF_DAYS = 4;

/*
 * This function dynamically creates dropdown items based
 * on the number of days completed
 */
const dropdownItems = (numberOfItems, setDay) => {
  const items = [];
  for (let day = 1; day <= numberOfItems; day++) {
    items.push(
      <Dropdown.Item onClick={() => {setDay(day)}}>
        Day {day}
      </Dropdown.Item>
    );
  }
  return items;
};

/*
 * Creates a dropdown menu for the days completed
 * Pass in the 'day' parameter to the solutionView tag
 */
const SolutionsView = () => {
  const [day, setDay] = useState(1);
  
  return( 
    <>
      <DropdownButton id="dropdown-basic-button" title="Dropdown button">
        { dropdownItems(NUMBER_OF_DAYS, setDay) }
      </DropdownButton>      
      
      <SolutionView parameter={ day } />
    </>
  );
}

export default SolutionsView;