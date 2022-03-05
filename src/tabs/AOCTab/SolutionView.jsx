import React, { useState, useEffect } from 'react';

/** Import dynamically to reduce the nonsense that is occuring */
import day1text from './AnswerScripts/day1/Day1Script.txt';
import day2text from './AnswerScripts/day2/Day2Script.txt';
import day3text from './AnswerScripts/day3/Day3Script.txt';
import day4text from './AnswerScripts/day4/Day4Script.txt';
import day1input from './AnswerScripts/day1/input_test.txt';
import day2input from './AnswerScripts/day2/input_test.txt';
import day3input from './AnswerScripts/day3/input_test.txt';
import day4input from './AnswerScripts/day4/input.txt';
import day1solution from './AnswerScripts/day1/Day1Script.js';
import day2solution from './AnswerScripts/day2/Day2Script.js';
import day3solution from './AnswerScripts/day3/Day3Script.js';
import day4solution from './AnswerScripts/day4/Day4Script.js';
import { CodeBlock, ocean } from "react-code-blocks";

/**
 * When button clicked, key of file gets inserted in as a prop
 * This component takes in prop.day, indexing which file to open and display.
 * Inserts file reference into function that reads in script to a tag
 */

const txt_scripts = [
  day1text, 
  day2text, 
  day3text,
  day4text 
];

const inputs = [
  day1input,
  day2input,
  day3input,
  day4input
]

/** Declares array of functions */
let solutions = [day1solution, day2solution, day3solution, day4solution]

/**
 * When specific button is clicked, pull up specific solution
 * Link array to components that display each solution
 */
const SolutionView = ({ day }) => {

/** Declare hooks */ 
const [script_file, setScriptFile] = useState("");  
const [input_file, setInputFile] = useState("");  

/** Declare state variables that will be the files imported */ 
const index = [day - 1]
const txt_script = txt_scripts[index]
const input = inputs[index]

/** 
 * Fetches the script display that user wants to see
 * Should I fetch the input.txt file in the same useEffect?
 * Then pass that in as a parameter to Day_Script.js
 */ 
useEffect(() => {
  fetch( txt_script )
    .then(r => r.text())
    .then(script_file => setScriptFile(script_file))

  fetch( input )
    .then(s => s.text())
    .then(input_file => setInputFile(input_file))
  })

/**
 * Bug here. I think the page doesn't render at all if I have this conditional
 * statement wrapped around the entire return statement. 
 * Figure out how to protect code from getting passed in an empty string! 
 * if (input_file !== "" && solutions[index](input_file) !== ""){}
 */

return(    
  <>
    {/* Displays the script  */}
    <CodeBlock
      text={script_file}
      language="javascript"
      theme={ocean}
    />

    {/* Passes in the input file into the javascript file  */}
    <CodeBlock
      text= {"Answer: " + solutions[index](input_file)}  
      language="javascript"
      theme={ocean}
    />
  </>
  );
};

export default SolutionView;
