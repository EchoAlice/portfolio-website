import React from 'react';

// Can you have an array of strings of files? 
// When tab clicked, file gets inserted in as a prop
// This component should take in a string for file name.
// Inserts string into function that reads in script to a tag
const SolutionView = (props) => {
  return(    
    <div>
      <p>Day: { props.parameters.day }</p>
      <p>Answer: { props.parameters.answer }</p>
    </div>
  );
}

export default SolutionView;