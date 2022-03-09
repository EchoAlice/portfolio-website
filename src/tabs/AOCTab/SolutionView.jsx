// import React, { useState, useEffect } from 'react';
import { CodeBlock, ocean } from "react-code-blocks";
const fs = require('fs');

// Creates a string of imports
// I need to figure out how to convert the .js file to a string!
// Should I create all of the strings for the scripts at the same time? 
// Or only create the string when the day is called?

const solutions = [];
const scripts = [];
let numberOfDays = 4;
for (let i = 1; i <= numberOfDays; i++) {
  solutions[i] = require("./AnswerScripts/day"+i+"/Day"+i+"Script.js");
  // Converts .js file to a string
  scripts[i] = fs.readFile(solutions[i]).toString()
  console.log(solutions[i]);
  console.log(scripts[i]);
}


/**
 * Converts .js file to a string
 */
// const convert = (script) => {
  
// };

/**
 * When button clicked, key of file gets inserted in as a prop
 * This component takes in prop.day, indexing which file to open and display.
 * Inserts file reference into function that reads in script to a tag
 *
 *
 * When specific button is clicked, pull up specific solution
 * Link array to components that display each solution
 */
const SolutionView = ({ day }) => {

/** Declare hooks */ 
// const [script_file, setScriptFile] = useState("");  

/** Declare state variables that will be the files imported */ 
const index = [day - 1]
// const txt_script = scripts[index];

/** 
 * Fetches the script display that user wants to see
 * Should I fetch the input.txt file in the same useEffect?
 * Then pass that in as a parameter to Day_Script.js
 */ 
// useEffect(() => {
//   fetch( txt_script )
//     .then(r => r.text())
//     .then(script_file => setScriptFile(script_file))
//   })


/**
 * Turns a js file into a string so i don't have
 * to create twice as many files to display and execute code 
 */

// How do I put file into this funciton when specific hook is used
// Do I need to pass the text file into a string? or js file?

// var fs = require("fs");
// fs.readFile(solutions[index], function(text){
//     var text_string = text.split("\n")
// });


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
      // text={script_file}
      text={scripts[index]}
      language="javascript"
      theme={ocean}
    />

    {/* Passes in the input file into the javascript file  */}
    <CodeBlock
      text= {"Answer: " + solutions[index]()}  
      language="javascript"
      theme={ocean}
    />
  </>
  );
};

export default SolutionView;
