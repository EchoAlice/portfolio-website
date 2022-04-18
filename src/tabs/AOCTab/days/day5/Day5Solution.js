// Input for day 1 gets passed in as input here before day 5's
// This is a problem

const cleanLine = (inputLine) => {
  // Seperate line into the 4 numbers they consist of.
  var numbers = inputLine.split(/(?:,| )+/);
  for (let i = 0; i < numbers.length; i++){ 
    if (numbers[i] === "->") {
      numbers.splice(i,1);
    }
  }
  numbers = numbers.map(Number);
  
  return numbers;
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
    return true;
  }
  else {
    return false; 
  }
}

/*
 * We want to fill in points between the ends of coordinates
 */
const createLine = (endpoints) => {
  const x1 = endpoints[0];
  const y1 = endpoints[1];
  const xEnd = endpoints[2];
  const yEnd = endpoints[3];
  
  // Start line: 
  const line = [[x1, y1]]; 
  const vertical_distance = Math.abs(y1 - yEnd); 
  const horizontal_distance = Math.abs(x1 - xEnd);
  const line_length = vertical_distance + horizontal_distance;
  const points_to_create = line_length - 1;

  // // Copy x coordinate and add/subtract from 
  // // y depending on which y is first
  if (horizontal_distance === 0 && points_to_create > 0) {
    if (y1 > yEnd) {
      for (let i = 1; i <= points_to_create; i++) {
        const next_number = y1 - i;
        const point = [x1, next_number];
        line.push(point);
      }
    }
    if (y1 < yEnd) {
      for (let i = 1; i <= points_to_create; i++) {
        const next_number = y1 + i;
        const point = [x1, next_number];
        line.push(point);
      }
    }
  }
  // Copy y coordinate and add/subtract from 
  // x depending on which x is first
  if (vertical_distance === 0 && points_to_create > 0) {
    if (x1 > xEnd) {
      for (let i = 1; i <= points_to_create; i++) {
        const next_number = x1 - i;
        const point = [next_number, y1];
        line.push(point);
      }
    }
    if (x1 < xEnd){
      for (let i = 1; i <= points_to_create; i++) {
        const next_number = x1 + i;
        const point = [next_number, y1];
        line.push(point);
      }
    }
  }
  line.push([xEnd,yEnd]);
  return line;
}

/*
 * How do I record when a point is used more than once?
 * Why does my 3D array lose its structure when passed into a function?
 */
const addUpVentOverlap = (vents) => {
  console.log("In function: " + vents);
  
  // This problem will be easier to solve if i get the vents object to keep its shape.
  // AKA allow for points to hold shape
  for (let i = 0; i < vents.length/2; i++) {

  }
}

const Day5Solution = (props) => {
  // Turn input into lines
  const input = props.input;
  const lines = input.split("\r\n");

  const number_of_lines = lines.length;
  const vents = [];

  for (let i = 0; i < number_of_lines; i++) {
    const end_points = cleanLine(lines[i]);
    const direction = checkLineDirection(end_points);
    
    if (direction === true) {
      const points_of_line = createLine(end_points);
      vents.push(points_of_line);
    } 
  }
  
  // How do I record how often coordinates are used?
  console.log(vents);
  const points_overlap = addUpVentOverlap(vents);
  const answer = points_overlap 
  return(
    "Answer: " + answer
  )
}

export default Day5Solution;