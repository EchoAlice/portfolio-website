const cleanLine = (inputLine) => {
  // Seperate line into the 4 numbers they consist of.
  const numbers = inputLine.split(/(?:,| )+/);
  for (let i = 0; i < numbers.length; i++){
    if (numbers[i] === "->") {
      numbers.splice(i,1);
    }
  console.log("numbers in a line: " + numbers[i])
  }
  return numbers
}

/* Only horizontal and vertical lines are recorded */
const checkLineDirection = (numbers) => {
  
  const x1 = numbers[0];
  const y1 = numbers[1];
  const x2 = numbers[2];
  const y2 = numbers[3];

  if (x1 === x2 || y1 === y2) {
    return true
  }
  else {
    return false 
  }
}

const Day5Solution = (props) => {
  // Turn input into lines
  const input = props.input;
  const lines = input.split("\r\n");

  var horv = 0;
  
  const numberOfLines = lines.length;
  for (let i = 0; i < numberOfLines; i++) {
    const lineToCheck = cleanLine(lines[i]);
    const direction = checkLineDirection(lineToCheck);
    // What calculation do i need to make when direction is h or v?
    // And why is horv 6 and not 7?? buggy buggy
    if (direction === true) {
      console.log("Thats da truuf!");
      horv++;
    } 
  }
  
  const answer = horv;
  return(
    "Answer: " + answer
  )
}

export default Day5Solution;