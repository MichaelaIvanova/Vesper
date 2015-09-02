function generateTable (argument) {
	var table,
	tableWrapper,
	nameRow,
	priceRow,
	descriptionRow,
	imageURLRow;
    
    tableWrapper = $('<div/>');
	table = $("<table/>");
	nameRow = $("<tr/>");
	priceRow = $("<tr/>");
	descriptionRow = $("<tr/>");
	imageURLRow = $("<tr/>");
	categoryRow = $("<tr/>");
	submitRow = $('<tr/>');


	var nameInput = $('<input/>'),
	    descriptionInput = $('<input/>'),
	    priceInput = $('<input/>'),
	    imageURLInput = $('<input/>'),
	    submitButton = $('<button/>');
    
    tableWrapper.attr('id','productInputForm');
	nameInput.attr('id','productName');
	descriptionInput.attr('id','productDescription');
	priceInput.attr('id','productPrice');
	imageURLInput.attr('id','productURL');
	submitButton.attr('id','addItem');
	submitButton.attr('style','width:90%');
	submitButton.text("Add product");


	$('<td/>').text("Name").appendTo(nameRow);
	$('<td/>').append(nameInput).appendTo(nameRow);

	$('<td/>').text("Description").appendTo(descriptionRow);
	$('<td/>').append(descriptionInput).appendTo(descriptionRow);

	$('<td/>').text("Price").appendTo(priceRow);
	$('<td/>').append(priceInput).appendTo(priceRow);

	$('<td/>').text('Image URL').appendTo(imageURLRow);
	$('<td/>').append(imageURLInput).appendTo(imageURLRow);
    
    $('<td/>').append(submitButton).attr('colspan','2').appendTo(submitRow); 
    

	table.append(nameRow).append(descriptionRow).append(priceRow).append(imageURLRow).append(submitRow); 
	tableWrapper.append(table);


	return {
		getTable: function  () {
			return tableWrapper;
		}
	}
}

var tableModule = generateTable();

var table = tableModule.getTable();
$('body').append(table);