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

// when pressing submit button, use function
let submitButton = d3.select('#button');
submitButton.on('click', Action);
// runEnter.on('keypress', Action);

//prevent the page from refreshing if enter or spacebvar is pressed

// input.addEventListener('keyup', (event) => {
// 	if (event.keyCode === 13) {
// 		event.preventDefault();
// 		ubmitButton.on('click', Action);
// 	}
// };

// let body = d3.select("body");
// let p = body.selectAll(null)
//   .on("keypress", () => {
//     if(d3.event.keyCode === 13){
//     console.log("Congrats, you pressed enter or space!")
//     }
// });

// let runEnter = (d3.event.keyCode === 13);
// runEnter.on('click', Action);