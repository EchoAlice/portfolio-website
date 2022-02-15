import React from 'react';
import SolutionView from './SolutionView';

//const days_completed = [100, 200, 300]

// Create a for loop that cycles through array every 5 seconds OR when person clicks a button
//for i in Range(days_completed):
  // do something


// Can arrow functions have props?
const SolutionsView = () => {
  const answer_query = { day: '1', answer: '100'}
  // Solution View should change when a number from 1-3 is entered
//  const [key, setKey] = useState('home');
  
  return(    
    // For loop logic inside of here
    // <SolutionView day={days_completed[i]}/>   
    <div>
      <SolutionView parameters={ answer_query } />
    </div>
  );
}

export default SolutionsView;