// assign data from 'data.js' to variable
let sightings = data;

// variables to reference parts of the table
let tbody = d3.select('tbody');

//// filling the initial table with all values
sightings.forEach((sighting) => {
	// add one row for each sighting
	let row = tbody.append('tr');
	// log each entry in the data
	Object.entries(sighting).forEach(([key, value]) => {
		// append one cell for each value
		let cell = row.append('td');
		// add values to the cells
		cell.text(value);
	});
});

//// filter with date input
//assign variable to inputfield
function Action() {
	// prevent enter from refreshing the page
	d3.event.preventDefault();
	// clear values in the current table
	tbody.html('');
	// define the input text
	let dateField = d3.select('#datetime');
	let dateInput = dateField.property("value");
	let dateSummery = sightings.filter(sighting => sighting.datetime === dateInput);
	// making a new table with filtered values
	dateSummery.forEach((summery) => {
		// add one row for each sighting
		let row = tbody.append('tr');
		// log each entry in the data
		Object.entries(summery).forEach(([key, value]) => {
			// append one cell for each value
			let cell = row.append('td');
			// add values to the cells
			cell.text(value);
		});
	});
};

// when pressing submit button or enter, use function
let submitButton = d3.select('#button');
let form = d3.select('#searchForm');
form.on('submit', Action);

