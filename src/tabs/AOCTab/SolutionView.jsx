import React, { Suspense, useEffect, useState } from "react";
import day1input from "./days/day1/input.txt";
import day2input from "./days/day2/input.txt";
import day3input from "./days/day3/input.txt";
import day4input from "./days/day4/input.txt";
import day1script from "./days/day1/day1script.txt";
import day2script from "./days/day2/day2script.txt";
import day3script from "./days/day3/day3script.txt";
import day4script from "./days/day4/day4script.txt";
import { CodeBlock, ocean } from "react-code-blocks";

const inputs = [
  day1input,
  day2input,
  day3input,
  day4input
]

const scripts = [
  day1script,
  day2script,
  day3script,
  day4script
]

function loadAnswer(day) {
  const Answer = React.lazy(() =>
    import(`./days/day${day}/Day${day}Solution.js`)
  );
  return Answer;
}

const SolutionView = (props) => {
  const [input, setInput] = useState("");
  const [inputIsLoading, setInputIsLoading] = useState(true); 
  const [script, setScript] = useState("");
  const day = props.parameter;
  const index = day - 1;
  const Answer = loadAnswer(day);

  useEffect(() => { 
    setInputIsLoading(true); 
    fetch(inputs[index])
      .then(r => r.text())
      .then(input => {
        setInput(input);
        setInputIsLoading(false);
      });
    
    fetch(scripts[index])
      .then(r => r.text())
      .then(script => setScript(script))
  }, [index]);

  return(
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <CodeBlock
          text={script}
          language="javascript"
          theme={ocean}
        />
        {!inputIsLoading ? (
          <Answer input={input}/>
        ) : (
          <div> Loading... </div>
        )}
      </Suspense>
    </>
  );
}

export default SolutionView;
