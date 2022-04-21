const cleanInput = (inputLine) => {
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

  // Puts all points into one array
const compressPoints = (vents) => {
  const points = []; 
  for (let i = 0; i < vents.length; i++) {
    for (let j = 0; j < vents[i].length; j++) {
      points.push(vents[i][j]);
    } 
  }
  return points;
}

const findLargestXandY = (points) => { 
  var largest_x = 0;
  var largest_y = 0;
  
  for (let i = 0; i < points.length; i++) {
    if (points[i][0] > largest_x) {
      largest_x = points[i][0];
    }
    if (points[i][1] > largest_y) {
      largest_y = points[i][1];
    }
  }
  // This should at top of function
  var x_and_y = [largest_x, largest_y];
  return x_and_y;
} 

/**
 * Creates graph that looks like the one in problem!
 * 
 * Idk why but when i console log the empty graph 
 * (before i plot points onto it), the empty graph 
 * holds the values for plotted points. 
 */
const createEmptyGraph = (_largest_x_and_y) => {
  var empty_graph = [];
  var empty_row = []; 
  const largest_x = _largest_x_and_y[0]; 
  const largest_y = _largest_x_and_y[1];
  for (let c = 0; c < largest_x; c++) {
    for (let r = 0; r < largest_y; r++) {
      empty_row.push(0); 
    }
    const row_of_zeros = empty_row;
    empty_graph.push(row_of_zeros);
    // Resets array 
    empty_row = [];
  } 
  console.log("create_empty_graph"); 
  console.log(empty_graph); 
  return empty_graph;
}

const plotPoints = (empty_graph, vents, largest_x_and_y) => {
  var graph = empty_graph; 
  // console.log(point_to_map); 
  const largest_x = largest_x_and_y[0];
  const largest_y = largest_x_and_y[1];
  for (let i = 0; i < largest_x; i++) {
    for (let j = 0; j < largest_y; j++) {
      if (i === 3 && j === 3) {
        console.log("3,3");
        console.log(`i: ${i}`);
        console.log(`j: ${j}`);
        graph[i][j] += 1; 
        console.log(graph[i][j]); 
      } 
    }
  } 
  // // cycles through the points of each vent
  // for (let i = 0; i < vents.length; i++) {
  //   for (let j = 0; j < vents[i].length; j++) {
  //     // Map point being checked
  //     // Do i need a return value for this function?
  //     mapPointToGraph(largest_x_and_y, graph, vents[i][j]); 
  //   }
  // }

  return graph; 
}

// const mapPointToGraph = (largest_x_and_y, graph, point_to_map) => {
//   console.log(point_to_map); 
//   const largest_x = largest_x_and_y[0];
//   const largest_y = largest_x_and_y[1];
//   for (let i = 0; i < largest_x; i++) {
//     for (let j = 0; j < largest_y; j++) {
//       console.log(graph[i][j]);
//       if (i === 3 && j === 3) {
//         console.log("3,3");
//         // graph[i][j]
//       } 
//     }
//   } 
  // }      
      // Logic for updating the graph
      // if (point_to_map[0] === j && point_to_map[1] === i) {
      //   graph[i][j] += 1;
      //   // if (graph[i][j] > 1) {
      //   //   // Do something
      //   // }
      

  // return updatedGraph;


const Day5Solution = (props) => {
  // Turn input into lines
  const input = props.input;
  const lines = input.split("\r\n");
  const number_of_lines = lines.length;
  const vents = [];
  var points = [];

  // Goes through input and creates an array of
  // lines with the points they're made of
  for (let i = 0; i < number_of_lines; i++) {
    const end_points = cleanInput(lines[i]);
    const direction = checkLineDirection(end_points);
    
    if (direction === true) {
      const points_of_line = createLine(end_points);
      vents.push(points_of_line);
    } 
  }

  // Turns array of lines with points, 
  // into an array of all points that 
  points = compressPoints(vents);
  const largest_x_and_y = findLargestXandY(points);
  const empty_graph = createEmptyGraph(largest_x_and_y);
  // Maybe i shouldn't compress vents.. oops
  const final_graph = plotPoints(empty_graph, vents, largest_x_and_y);
  console.log("final_graph: "); 
  console.log(final_graph); 
  // const points_overlap = addUpVentOverlap(vents);
  // const answer = points_overlap; 
  const answer = "Dummy answer"; 
  return(
    "Answer: " + answer
  )
}

export default Day5Solution;