import React, { Suspense } from "react";
import {ErrorBoundary} from 'react-error-boundary';
// import { CodeBlock, ocean } from "react-code-blocks";

/*
 *Dynamcally imports modules based on state
 */

 function loadComponent(day) {
  const Component = React.lazy(() =>
    import("./days/day"+day+"/Day"+day+"Script.js")
  );
  return Component;
}

const SolutionView = (props) => {
  const day = props.parameter;
  const Component = loadComponent(day); 
  
  return(
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <ErrorBoundary>
          <Component />
        </ErrorBoundary>
      </Suspense>
    </div>
  );
}

export default SolutionView;







// Use a loop that gets all .js files
// let numberOfDays = 4;
// const solutions = [];
// const scripts = [];

// for (let i = 1; i <= numberOfDays; i++) {
//   solutions[i] = require("./days/day"+i+"/Day"+i+"Script.js");
//   import(solutions[i])
//   console.log(solutions[i]);
  
//   Converts .js file to a string
//   scripts[i] = fs.readFile(solutions[i]).toString()
//   console.log(scripts[i]); 
// }


