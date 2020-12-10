// assign data from 'data.js' to variable
let sightings = data;

// variable to reference parts of the table
let tbody = d3.select('tbody');
let cityDropdown = d3.select('#City');
let stateDropdown = d3.select('#State');
let countryDropdown = d3.select('#Country');
let shapeDropdown = d3.select('#Shape');

// empty lists for the drop down lists
let citiesList = [];
let stateList = [];
let countryList = [];
let shapeList = [];

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
		// list of Cities for the drop down list
		if (key === 'city') {citiesList.push(value)};
		// list of States for the drop down list
		if (key === 'state') {stateList.push(value)};
		// list of Countries for the drop down list
		if (key === 'country') {countryList.push(value)};
		// list of Shapes for the drop down list
		if (key === 'shape') {shapeList.push(value)};
	});
});

// sort lists in alphabetical order
citiesList.sort();
stateList.sort();
countryList.sort();
shapeList.sort();

// remove duplicates function
function removeDuplicates(arr){
	let unique = [];
    for(let i = 0;i < arr.length; i++){
        if(unique.indexOf(arr[i]) == -1){
            unique.push(arr[i])
        }
    }
    return unique
}

// make unique lists
citiesListU = removeDuplicates(citiesList);
stateListU = removeDuplicates(stateList);
countryListU = removeDuplicates(countryList);
shapeListU = removeDuplicates(shapeList);

// add cites list to dropdown menu
citiesListU.forEach((City) => {
	// ad one line for each city
	let line = cityDropdown.append('option');
	// log each city in the array
	line.text(City);
});

// add states list to dropdown menu
stateListU.forEach((State) => {
	// ad one line for each city
	let line = stateDropdown.append('option');
	// log each city in the array
	line.text(State);
});

// add countries list to dropdown menu
countryListU.forEach((Country) => {
	// ad one line for each city
	let line = countryDropdown.append('option');
	// log each city in the array
	line.text(Country);
});

// add shapes list to dropdown menu
shapeListU.forEach((Shape) => {
	// ad one line for each city
	let line = shapeDropdown.append('option');
	// log each city in the array
	line.text(Shape);
});


//// filter from input fields
//create function for searching the dataset with inputs from fields
function Action() {
	// prevent enter from refreshing the page
	d3.event.preventDefault();
	// clear values in the current table
	tbody.html('');	
	// define date field name and input text and filter search
	let dateField = d3.select('#datetime');
	let dateInput = dateField.property("value");
	let dateSummery = sightings.filter(sighting => sighting.datetime === dateInput);
	// define city dropdown field name and input and filter date search
	let cityField = d3.select('#City');
	let cityInput = cityField.property('value');
	let citySummery = dateSummery.filter(sighting => sighting.city === cityInput);
	// define state dropdown field name and input and filter date and city search
	let stateField = d3.select('#State');
	let stateInput = stateField.property('value');
	let stateSummery = citySummery.filter(sighting => sighting.state === stateInput);
	// define country dropdown field name and input and filter date, city and state search
	let countryField = d3.select('#Country');
	let countryInput = countryField.property('value');
	let countrySummery = stateSummery.filter(sighting => sighting.country === countryInput);
	// define shape dropdown field name and input and filter date, city, state and shape search
	let shapeField = d3.select('#Shape');
	let shapeInput = shapeField.property('value');
	let shapeSummery = countrySummery.filter(sighting => sighting.shape === shapeInput);
	// making a new table with filtered values 
	shapeSummery.forEach((summery) => {
		// add one row for each sighting
		let row = tbody.append('tr');
		// log each entry in the data
		Object.entries(summery).forEach(([key, value]) => {
			// append one cell for each value
			let cell = row.append('td');
			// add values to the cells
			cell.text(value);
		})
	});
};

// when pressing submit button or press enter, use function
let submitButton = d3.select('#button');
let form = d3.select('#searchForm');
form.on('submit', Action);
