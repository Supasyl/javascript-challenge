// assign data from 'data.js' to variable
let sightings = data;
console.log(sightings);

// variables to reference parts of the table
let table = d3.select('table');
let tbody = d3.select('tbody');

// filling the initial table with all values
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

// filter with date input
//assign variable to inputfield
function Action() {
	//prevent the page from refreshing if enter is pressed
	d3.event.preventDefault(); 
	let dateField = d3.select('#Date');
	let dateInput = dateField.property("value");
	// change the date column from string to date value (to yyyy/mm/dd, or field input to d/m/yyyy)
	let newDateInput = new Date(d/M/yyyy).equals(Date.parseString(dateInput, 'yyyy,MM,dd'));
	let dateSummery = sightings.filter(sighting => sighting.datetime === newDateInput);
	console.log(dateInput, newDateInput, dateSummery);
};
// // date field action function
// let dateAction = dateInput.on('change', () => {
	
// 	// define the value that is input
// 	let dateInput = d3.event.target.value;
	
// new Date(2000,0,2).equals(Date.parseString('1/2/2000','M/d/yyyy'))



// when pressing submit button, use function
let submitButton = d3.select('#button');
submitButton.on('click', Action);



