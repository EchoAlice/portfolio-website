import React, { useState } from 'react';
import SolutionView from './SolutionView';
import { Dropdown, DropdownButton } from 'react-bootstrap';

// Create a dropdown menu for the days completed.  
// This menu will give user choice of which solution to view

// let numberOfDays = 4;

const SolutionsView = () => {
  const [day, setDay] = useState("");
  // Do I need to return <SolutionView /> that passes in the day that is clicked?
  
  return( 
    // Idk if setDay should be here. I have it in each dropdown item
    <>
      <DropdownButton id="dropdown-basic-button" title="Dropdown button">
        <Dropdown.Item onClick={() => setDay(1)} href="#/action-1">Day 1</Dropdown.Item>
        <Dropdown.Item onClick={() => setDay(2)} href="#/action-2">Day 2</Dropdown.Item>
        <Dropdown.Item onClick={() => setDay(3)} href="#/action-2">Day 3</Dropdown.Item>
        <Dropdown.Item onClick={() => setDay(4)} href="#/action-2">Day 4</Dropdown.Item>
      </DropdownButton>      
      
      {/* Pass in the day to the solutionView tag */}
      <SolutionView parameter={ day } />
    </>
  );
}

export default SolutionsView;




  // Creates items within a loop instead of hard coding all

  // const dropdownItems = (numberOfDays) => {
  //   for (let i = 1; i <= numberOfDays; i++) {
  //     <Dropdown.Item onClick={() => setDay(i)} href="#/day"i>Day {i}</Dropdown.Item>
  //   }
  //   return( 
  //     "How do I return all buttons?"
  //   )
  // }
 
  
  // return (
  //   <DropdownButton id="dropdown-basic-button" title="Dropdown button">
  //     {/* { dropdownItems(4, setDay) }  */}
  //   </DropdownButton>
  // )