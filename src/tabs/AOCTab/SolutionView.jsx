import React from 'react';
import Day1Solution from './AnswerScripts/Day1Script';
import Day2Solution from './AnswerScripts/Day2Script';
import Day3Solution from './AnswerScripts/Day3Script';

// When tab clicked, key of file gets inserted in as a prop
// This component should take in a string for file name.
// Inserts string into function that reads in script to a tag


// const answer_query = { day: i - 1, file: file_name[i]}
// Does it matter which way I do this? 

// const leos_scripts = [
//   Day1Solution,
//   Day2Solution,
//   Day3Solution,
// ];

// I want to keep solutions as python files for now.  I can learn 
// how to convert them to JS after they've been set up and displayed properly
const scripts = [
  Day1Solution,
  Day2Solution,
  Day3Solution,
];

// When specific button is clicked, pull up specific solution
// Link array to components that display each solution
const SolutionView = (props) => {
  // Should I open the file here?
// Insert string into function that reads in script to a tag
  return(    
    <div>
      {/* <p>Day: { props.day }</p> */}
      <p>{ scripts[props.day - 1]} </p>
      {/* Figure out how to display script from the file */}
      <script>open({ scripts[props.day - 1] })</script>
    </div>
  );
}

export default SolutionView;