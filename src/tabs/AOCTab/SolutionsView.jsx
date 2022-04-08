import React, { useState } from 'react';
import SolutionView from './SolutionView';
import { Dropdown, DropdownButton } from 'react-bootstrap';

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
 */

const SolutionsView = () => {
  // When useState starts as useState("") error is thrown
  // because there is no file named "days/day/DayScript.js"
  // Is this a problem?
  const [day, setDay] = useState(1);
  var numberOfDays = 4;
  
  return( 
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