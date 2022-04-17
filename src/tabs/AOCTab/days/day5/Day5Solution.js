// Input for day 1 gets passed in as input here before day 5's
// This is a problem

const cleanLine = (inputLine) => {
  // Seperate line into the 4 numbers they consist of.
  const numbers = inputLine.split(/(?:,| )+/);
  for (let i = 0; i < numbers.length; i++){
    if (numbers[i] === "->") {
      numbers.splice(i,1);
    }
  // console.log(i + "th number: " + numbers[i])
  }
  return numbers
}

/* 
 * Only horizontal and vertical lines are recorded
 */
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

/*
 * We want to fill in points between the ends of coordinates
 */
const createLine = (endPoints) => {
  // endPoints is already an array!!!
  console.log("End Points: " + endPoints[0]);
   
  const x1 = endPoints[0];
  const y1 = endPoints[1];
  const x2 = endPoints[2];
  const y2 = endPoints[3];
  const line = []; 

  const vertical_distance = Math.abs(y1 - y2); 
  const horizontal_distance = Math.abs(x1 - x2); 
  // const line_length = vertical_distance + horizontal_distance;
  
  // This feels extremely repetetive... 
  // Copy x coordinate and add/subtract from 
  // y depending on which y is first
  if (horizontal_distance === 0) {
    if (y1 > y2) {
      for (let i = y2; y2 < y1; i++) {
        line.push(x1, i);
      }
    }
    if (y1 < y2) {
      for (let i = y1; y1 < y2; i++) {
        line.push(x1, i);
      }
    }
  }
  // Copy y coordinate and add/subtract from 
  // x depending on which x is first
  if (vertical_distance === 0) {
    if (x1 > x2) {
      for (let i = x2; x2 < x1; i++) {
        line.push(i, y1);
      }
    }
    if (x1 < x2){
      for (let i = x1; x1 < x2; i++) {
        line.push(i, y1);
      }
    }
  }
  console.log("Full Line: " + line);
}


const Day5Solution = (props) => {
  // Turn input into lines
  const input = props.input;
  const lines = input.split("\r\n");

  var horiz_or_vert = 0;
  const number_of_lines = lines.length;
  // const vents = [];

  for (let i = 0; i < number_of_lines; i++) {
    console.log("\n")
    console.log("Line Number: " + i);
    console.log("Line to clean: " + lines[i]);
    const end_points = cleanLine(lines[i]);
    const direction = checkLineDirection(end_points);
    // What calculation do i need to make when direction is h or v?
    // console.log(`Line ${i} counts: ` + direction); 
    
    if (direction === true) {
      const points_of_line = createLine(end_points);
      console.log(points_of_line); 
      // How do we append points of a line to vents array?
      
      horiz_or_vert++;
    } 
  }
 
  // const pointsOverlap = addUpVentOverlap(pointsOfLine);
  // const answer = pointsOverlap 
  const answer = horiz_or_vert;
  return(
    "Answer: " + answer
  )
}

export default Day5Solution;