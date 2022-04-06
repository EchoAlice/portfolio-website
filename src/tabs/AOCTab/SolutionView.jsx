import Day1Solution from "./days/day1/Day1Script.js";
import Day2Solution from "./days/day2/Day2Script.js";
import Day3Solution from "./days/day3/Day3Script.js";
import Day4Solution from "./days/day4/Day4Script.js";

const solutions = [];
solutions[1] = <Day1Solution />
solutions[2] = <Day2Solution />
solutions[3] = <Day3Solution />
solutions[4] = <Day4Solution />

// How do i get the day 1 component to show up on site?

const SolutionView =(props) => {
  const day = props.parameter;
  const answer = solutions[day]
  
  return(
    <>
      { answer }
    </> 
  );
}

export default SolutionView;





// import { CodeBlock, ocean } from "react-code-blocks";
// const fs = require('fs');

// // Use a loop that gets all .js files
// let numberOfDays = 4;
// const solutions = [];
// const scripts = [];

// for (let i = 1; i <= numberOfDays; i++) {
//  solutions[i] = require("./AnswerScripts/day"+i+"/Day"+i+"Script.js");
//   // Converts .js file to a string
//   scripts[i] = fs.readFile(solutions[i]).toString()
//   console.log(solutions[i]);
//   console.log(scripts[i]); 
// }