import React, { useState, useEffect } from 'react';
// import Day1Solution from './AnswerScripts/Day1Script';
// import Day2Solution from './AnswerScripts/Day2Script';
// import Day3Solution from './AnswerScripts/Day3Script';

// When tab clicked, key of file gets inserted in as a prop
// This component should take in a string for file name.
// Inserts string into function that reads in script to a tag

// Can you explain this             v
// const answer_query = { day: i - 1, file: file_name[i]}


  const scripts = [
    './day1script', 
    './AnswerScripts/Day1Script', 
    './AnswerScripts/Day3Script', 
  ];

  // const scripts = [
  //   <Day1Solution />,
  //   <Day2Solution />,
  //   <Day3Solution />,
  // ];
 

// When specific button is clicked, pull up specific solution
// Link array to components that display each solution
const SolutionView = (props) => {
  
  // Declare state variable that will be the file
  const [file, setFile] = useState("");  
  
  const script = scripts[props.day -1]
  console.log(script)
  
  useEffect(() => {
    fetch( script )
      .then(r => r.text())
      .then(file => setFile(file))
      console.log({file})
  })

// Insert string into function that reads in script to a tag
  return(    
    <div>
      <p> {file} </p>
      {/* <p solution="file"> { file } </p> */}
    </div>
  );
};

export default SolutionView;



  // Went inside return


    // <>
    //  {file.map ( d => <div>{d}</div>)} 
    // </>