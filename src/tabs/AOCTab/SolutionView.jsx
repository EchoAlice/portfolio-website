import React, { Suspense, useEffect, useState } from "react";
import {ErrorBoundary} from 'react-error-boundary';
import day1input from "./days/day1/input.txt";
import day2input from "./days/day2/input.txt";
import day3input from "./days/day3/input.txt";
import day4input from "./days/day4/input.txt";
// import { CodeBlock, ocean } from "react-code-blocks";

// Is there any way to dynamically load input?
const inputs = [
  day1input,
  day2input,
  day3input,
  day4input
]

/*
 *Dynamcally imports Component based on state
 */

 function loadComponent(day) {
  const Component = React.lazy(() =>
    import("./days/day"+day+"/Day"+day+"Script.js")
  );
  return Component;
}

const SolutionView = (props) => {
  const [input, setInput] = useState("");
  const day = props.parameter;
  const index = day - 1;
  const Component = loadComponent(day); 

  useEffect(() => { 
    fetch(inputs[index])
      .then(r => r.text())
      .then(input => setInput(input))
  })

  // How do I use CodeBlock now that we have these new tags?
  return(
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <ErrorBoundary>
          
          <Component input={input}/>
        
        </ErrorBoundary>
      </Suspense>
    </>
  );
}

export default SolutionView;







