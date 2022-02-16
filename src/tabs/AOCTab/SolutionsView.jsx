import React from 'react';
import SolutionView from './SolutionView';
import { Dropdown, DropdownButton } from 'react-bootstrap';
// Create a dropdown menu for the days completed


// Can arrow functions have props?
const SolutionsView = () => {
  const i = 2
  const days_completed = [100, 200, 300]  
  const answer_query = { day: i + 1, answer: days_completed[i]}

  //  const [key, setKey] = useState('home');
  
  return(    
    // <SolutionView day={days_completed[i]}/>   
    // Put the SoluitonView component within dropdown buttons 
   <>
      <DropdownButton id="dropdown-basic-button" title="Dropdown button">
        <Dropdown.Item href="#/action-1">Day 1</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Day 2</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Day 3</Dropdown.Item>
      </DropdownButton>
    </>
  );
}

/*
      <div>
        <SolutionView parameters={answer_query} />
      </div>
*/



export default SolutionsView;