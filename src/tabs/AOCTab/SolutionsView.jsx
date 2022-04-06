import React, { useState } from 'react';
import SolutionView from './SolutionView';
import { Dropdown, DropdownButton } from 'react-bootstrap';

/*
 * This function is pretty dang complex...
 * Does the variable day in the for loop need to
 * be called something else?
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
 */

const SolutionsView = () => {
  const [day, setDay] = useState("");
  var numberOfDays = 4;
  // Do I need to return <SolutionView /> that passes in the day that is clicked?
  
  return( 
    // Idk if setDay should be here. I have it in each dropdown item
    <>
      <DropdownButton id="dropdown-basic-button" title="Dropdown button">
        { dropdownItems(numberOfDays, setDay) }
      </DropdownButton>      
      
      {/* Pass in the day to the solutionView tag */}
      <SolutionView parameter={ day } />
    </>
  );
}

export default SolutionsView;