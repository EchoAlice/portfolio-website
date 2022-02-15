import React from 'react';

// Can arrow functions have props?
const SolutionView = (props) => {
  return(    
    <div>
      <p>Day: { props.parameters.day }</p>
      <p>Answer: { props.parameters.answer }</p>
    </div>
  );
}

export default SolutionView;