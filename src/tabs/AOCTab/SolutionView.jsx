import React, { useState, useEffect } from 'react';
import day1text from './AnswerScripts/Day1Script.jsx.txt';
import day2text from './AnswerScripts/Day2Script.jsx.txt';
import day3text from './AnswerScripts/Day3Script.jsx.txt';
import { CodeBlock, ocean } from "react-code-blocks";
/**
 * When button clicked, key of file gets inserted in as a prop
 * This component takes in prop.day, indexing which file to open and display.
 * Inserts file reference into function that reads in script to a tag
 */

const scripts = [
  day1text, 
  day2text, 
  day3text, 
];

/**
 * When specific button is clicked, pull up specific solution
 * Link array to components that display each solution
 */
const SolutionView = ({ day }) => {

// Declare state variable that will be the file
const [file, setFile] = useState("");  
const script = scripts[day - 1]

useEffect(() => {
  fetch( script )
    .then(r => r.text())
    .then(file => setFile(file))
})

return(    
  <CodeBlock
    text={file}
    language="javascript"
    theme={ocean}
  />
);
};

export default SolutionView;
