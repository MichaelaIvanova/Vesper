var addItemButton = $('#addItem');

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

	var currentProductDiv = createProductDiv(currentProduct);
	$('#productGalary').append(currentProductDiv);
})

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