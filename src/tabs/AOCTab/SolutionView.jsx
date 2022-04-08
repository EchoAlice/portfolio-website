import React, { Suspense, useEffect, useState } from "react";
import {ErrorBoundary} from 'react-error-boundary';
import day1input from "./days/day1/input.txt";
// import { CodeBlock, ocean } from "react-code-blocks";

/*
 *Dynamcally imports Component based on state
 */

 function loadComponent(day) {
  const Component = React.lazy(() =>
    import("./days/day"+day+"/Day"+day+"Script.js")
  );
  return Component;
}

// How do i dynamically import input to pass into component?
const SolutionView = (props) => {
  const [input, setInput] = useState("");
  const day = props.parameter;
  const Component = loadComponent(day); 
 
  useEffect(() => { 
    fetch(day1input)
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







