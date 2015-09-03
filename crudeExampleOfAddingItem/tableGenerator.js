function generateTable (argument) {
	var table,
	tableWrapper,
	nameRow,
	priceRow,
	descriptionRow,
	imageURLRow,
	categoryRow,
	categorySelector,
	nameInput,
	descriptionInput,
	priceInput,
	imageURLInput,
	submitButton;
    

    //rows for the table
    tableWrapper = $('<div/>');
	table = $("<table/>");
	nameRow = $("<tr/>");
	priceRow = $("<tr/>");
	descriptionRow = $("<tr/>");
	imageURLRow = $("<tr/>");
	categoryRow = $("<tr/>");
	submitRow = $('<tr/>');

    //inputs for the second tds in the rows
	nameInput = $('<input/>'),
	descriptionInput = $('<input/>'),
	priceInput = $('<input/>'),
	imageURLInput = $('<input/>'),
	submitButton = $('<button/>');
	categorySelector = $('<select/>');
    
    //adding ids
    tableWrapper.attr('id','productInputForm');
    tableWrapper.attr('class','afterLogIn');
	nameInput.attr('id','productName');
	descriptionInput.attr('id','productDescription');
	priceInput.attr('id','productPrice');
	imageURLInput.attr('id','productURL');
	categorySelector.attr('id','productCategory')
	submitButton.attr('id','addItem');
	submitButton.attr('style','width:90%');
	submitButton.text("Add product");
    
    //adding options for a category
    $('<option>').text('General purpose item').appendTo(categorySelector);
	$('<option/>').text('Electronics').appendTo(categorySelector);
	$('<option/>').text('Food').appendTo(categorySelector);
	$('<option/>').text('Vehicles').appendTo(categorySelector);
	$('<option/>').text('Clothes').appendTo(categorySelector);

    

    $('<td/>').attr('colspan','2').append(categorySelector).appendTo(categoryRow);
     

	$('<td/>').text("Name").appendTo(nameRow);
	$('<td/>').append(nameInput).appendTo(nameRow);

	$('<td/>').text("Description").appendTo(descriptionRow);
	$('<td/>').append(descriptionInput).appendTo(descriptionRow);

	$('<td/>').text("Price").appendTo(priceRow);
	$('<td/>').append(priceInput).appendTo(priceRow);

	$('<td/>').text('Image URL').appendTo(imageURLRow);
	$('<td/>').append(imageURLInput).appendTo(imageURLRow);
    
    $('<td/>').append(submitButton).attr('colspan','2').appendTo(submitRow); 

    
    

	table.append(nameRow).append(descriptionRow)
	                     .append(priceRow)
	                     .append(imageURLRow)
	                     .append(categoryRow)
	                     .append(submitRow);


	tableWrapper.append(table);


	return {
		getTable: function  () {
			return tableWrapper;
		}
	}
}

var tableModule = generateTable();

var table = tableModule.getTable();
var $body = $('body');
$body.append(table);
$('<div>').attr('id','productGalary').attr('class','afterLogIn').appendTo($navbar);