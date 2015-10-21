$(document).ready(function(){
// console.log("hi");

	$('#container').on('click',  function(){
		appendDom();

	});

	$('.deleteButton').on('click', '.deleteButton, .changeButton',  function(){
		$(this).parent().remove('#container');

		console.log("hey i am working");
			});


});

	
function appendDom(){
			
	var $el = $("#container").children().last();
	$el.append("<button class='deleteButton'>DELETE</button>");
	$el.append("<button class='changeButton'>CHANGE</button>");
			
}

			// var $el = $("#container").children().last();
			// $el.append("<div>Property ID: " + randomNumber(0, 1000) + "</div>");
			// $el.append("<div>" + randomNumber(1000, 9999) +  " Sq. Ft.</div>");
			// $el.append("<div>$" + randomNumber(1, 50) +  " /Sq. Ft.</div>");
			// $el.append("<button class='deleteButton'>Remove</button>")

			// $el.hide().slideDown(500);
			
