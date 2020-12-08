// assign data from 'data.js' to variable
var sightings = data;
console.log(sightings);

// variables to reference parts of the table
let table = d3.select('table');
let thead = d3.select('thead');
let tbody = d3.select('tbody');

sightings.forEach((sighting) => {
	// add one row for each sighting
	let row = tbody.append('tr');
	// 
	Object.defineProperties(sighting).forEach(([key, value]) => {
		// append one cell for each value
		let cell = row.append('td');
		// add values to the cells
		cell.text(value)
		console.log(key, value);
	});
});

// function tabulate(data, columns) {
//     let table = d3.select('body').append('table'); //create table
//     let thead = table.append('thead'); // create header
//     let tbody = table.append('tbody');

//     // append the header row
//     thead.append('tr')
// 	  .selectAll('th')
// 	  .data(columns).enter()
//       .append('th')
//       .attr('class', f('cl'))
// 	    .text(function (column) { return column; });

// 	// create a row for each object in the data
// 	var rows = tbody.selectAll('tr')
// 	  .data(data)
// 	  .enter()
// 	  .append('tr');

// 	// create a cell in each row for each column
// 	var cells = rows.selectAll('td')
// 	  .data(function (row) {
// 	    return columns.map(function (column) {
// 	      return {column: column, value: row[column]};
// 	    });
// 	  })
// 	  .enter()
// 	  .append('td')
// 	    .text(function (d) { return d.value; });

//   return table;
// }

// // render the tables
// tabulate(data, ['datetime', 'city', 'state', 'country', 'shape', 'durationMinutes', 'comments']); // all column table


// // date search


// //column definitions
// let columns = [
// 	{head: 'Date', cl: 'date', html: ƒ('datetime', d3.format())},
// 	{head: 'City', cl: 'left', html: ƒ('city', d3.format())},
// 	{head: 'State', cl: 'left', html: ƒ('state')},
// 	{head: 'Country', cl: 'left', html: ƒ('country')},
// 	{head: 'Shape', cl: 'left', html: ƒ('shape')},
// 	{head: 'Duration', cl: 'num', html: ƒ('durationMinutes')},
// 	{head: 'Comments', cl: 'left', html: ƒ('comments')},
//   ]