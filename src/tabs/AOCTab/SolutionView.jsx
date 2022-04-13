import React, { Suspense, useEffect, useState } from "react";
import {ErrorBoundary} from 'react-error-boundary';
import day1input from "./days/day1/input.txt";
import day2input from "./days/day2/input.txt";
import day3input from "./days/day3/input.txt";
import day4input from "./days/day4/input.txt";
import day5input from "./days/day5/input.txt";
import day1script from "./days/day1/day1script.txt";
import day2script from "./days/day2/day2script.txt";
import day3script from "./days/day3/day3script.txt";
import day4script from "./days/day4/day4script.txt";
import day5script from "./days/day5/day5script.txt";
import { CodeBlock, ocean } from "react-code-blocks";

const inputs = [
  day1input,
  day2input,
  day3input,
  day4input,
  day5input
]

const scripts = [
  day1script,
  day2script,
  day3script,
  day4script,
  day5script
]

 function loadAnswer(day) {
  const Answer = React.lazy(() =>
    import("./days/day"+day+"/Day"+day+"Solution.js")
  );
  return Answer;
}

const SolutionView = (props) => {
  const [input, setInput] = useState("");
  const [script, setScript] = useState("");
  const day = props.parameter;
  const index = day - 1;
  const Answer = loadAnswer(day);

  useEffect(() => { 
    fetch(inputs[index])
      .then(r => r.text())
      .then(input => setInput(input))
    
    fetch(scripts[index])
      .then(r => r.text())
      .then(script => setScript(script))
  })

  // How do I use CodeBlock now that we have these new tags?
  return(
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <ErrorBoundary>
          {/* Displays script */}
          <CodeBlock
            text={script}
            language="javascript"
            theme={ocean}
          />

          {/* Displays answer */}
          <Answer input={input}/>
        </ErrorBoundary>
      </Suspense>
    </>
  );
}

export default SolutionView;