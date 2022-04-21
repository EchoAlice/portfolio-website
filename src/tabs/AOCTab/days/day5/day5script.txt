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

const calculateGraphDimensions = (points) => { 
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
  // Add 1 to largest x and y so graph can record all lines
  var graph_dimensions = [largest_x + 1, largest_y + 1];
  return graph_dimensions;
} 

/**
 * Creates graph that looks like the one in problem!
 * 
 * Idk why but when i console log the empty graph 
 * (before i plot points onto it), the empty graph 
 * holds the values for plotted points. 
 */
const createEmptyGraph = (graph_dimensions) => {
  var empty_graph = [];
  var empty_row = []; 
  const x_axis = graph_dimensions[0]; 
  const y_axis = graph_dimensions[1];
  for (let c = 0; c < x_axis; c++) {
    for (let r = 0; r < y_axis; r++) {
      empty_row.push(0); 
    }
    const row_of_zeros = empty_row;
    empty_graph.push(row_of_zeros);
    // Resets array 
    empty_row = [];
  } 
  return empty_graph;
}

const plotPoints = (empty_graph, vents, graph_dimensions) => {
  var graph = empty_graph;
  var points_overlapping = 0;
  // cycles through the points of each vent
  for (let i = 0; i < vents.length; i++) {
    for (let j = 0; j < vents[i].length; j++) { 
      // Map point being checked
      // Do i need a return value for this function?
      if (checksPointOverlap(graph_dimensions, graph, vents[i][j]) === true) {
        points_overlapping += 1;
      } 
    }
  }
  return points_overlapping; 
}

/**
 * Maps point to graph.
 * Calculates if point overlaps with another
 */
const checksPointOverlap = (graph_dimensions, graph, point_to_map) => {
  const x_axis = graph_dimensions[0];
  const y_axis = graph_dimensions[1];
  // Logic for updating the graph  
  for (let i = 0; i < x_axis; i++) {
    for (let j = 0; j < y_axis; j++) {
      if (point_to_map[0] === j && point_to_map[1] === i) {
        graph[i][j] += 1;
        if (graph[i][j] > 1) {
          return true;
        }
        else {
          return false;
        }
      }
    }
  }
} 

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

  // Turns array of lines with points, into an array of all points 
  points = compressPoints(vents);
  const graph_dimensions = calculateGraphDimensions(points);
  const empty_graph = createEmptyGraph(graph_dimensions);
  // Maybe i shouldn't compress vents.. oops
  const answer = plotPoints(empty_graph, vents, graph_dimensions);
  return(
    "Answer: " + answer
  )
}

export default Day5Solution;