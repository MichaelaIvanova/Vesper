var addItemButton = $('#addItem');
var storedItem;
var currentProduct;

addItemButton.on("click", function  () {
	var currentDescription,
	currentName,
	currentUrl,
	currentPrice;

	currentDescription = document.getElementById('productDescription').value;
	currentName = document.getElementById('productName').value;
	currentUrl = document.getElementById('productURL').value;
	currentPrice = document.getElementById('productPrice').value;

	currentProduct = Object.create(product).init(currentDescription,currentName,currentUrl,currentPrice);

	var Item = Parse.Object.extend('Item');

	var storedItem = new Item({
		name: currentProduct.name,
		description: currentProduct.description,
		image: currentProduct.imgURL,
		price: currentProduct.price
	});

	storedItem.save(null, {
		success: function (storedNote) {
			var $Ad = $('<div class="published-ad">NEW AD</div>');
			$Ad.appendTo($navbar);
			console.log("successfully saved");
		},
		error: function (storedNote, error) {
			alert("Error: " + error.code + " " + error.message);
		}
	});
	alert('Product Added');

	var currentProductDiv = createProductDiv(currentProduct);
	$('#productGalary').append(currentProductDiv);

	$('#productDescription').val('');
	$('#productName').val('');
	$('#productURL').val('');
	$('#productPrice').val(0);


});

function createProductDiv (product) {
	var sigDivItem = $("<div/>"),
    productPicture = $("<img/>"),
    productName = $('<label/>'),
    productDescription = $('<p/>');


    productPicture.attr("src",product.imgURL);
    productPicture.attr("style","width:50%; height:50%");
    productName.text(product.name);
    productDescription.text(product.description);
    sigDivItem.append(productName).append(productPicture).append(productDescription);

    sigDivItem.attr("style","border:1px solid black; width:20%;");

    return sigDivItem;

}