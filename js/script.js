$(document).ready(function($) {
	
	var data = [
		{
			"area":"Aguadilla",
			"estados":6,
			"number":241
		},
		{
			"area":"Aibonito",
			"estados":4,
			"number":32

		},
		{
			"area":"Arecibo",
			"estados":6,
			"number":115
		},
		{
			"area":"Bayamón",
			"estados":7,
			"number":95
		},
		{
			"area":"Caguas",
			"estados":2,
			"number":9
		},
		{
			"area":"Guayama",
			"estados":8,
			"number":45
		},
		{
			"area":"Humacao",
			"estados":3,
			"number":34
		},
		{
			"area":"Mayagüez",
			"estados":2,
			"number":30
		},
		{
			"area":"Ponce",
			"estados":2,
			"number":7
		},
		{
			"area":"San Juan",
			"estados":3,
			"number":16
		},
		{
			"area":"Utuado",
			"estados":4,
			"number":135
		}
		
	]

	

var barchartHTML = '';
	
	for (var i = 0; i < data.length; i++) {
		var labelHtml = '<span class="label">'+data[i].area+'</span>';

		var dataEstados = 'data-est="'+data[i].estados+'"';
		var dataTransportados = 'data-tra="'+(data[i].number/3)+'"';
		var barHtml = '<div class="bar" ' + dataTransportados + dataEstados + '></div>';

		barchartHTML += '<div class="barchart-row">'+labelHtml+barHtml+'</div>';
	};

	$(".chart-wrapper").html(barchartHTML);

	setTimeout(function(){
		// Start a new jQuery loop through every element on the page with a class of bar. The function we'll pass as an arugment, thanks to jQuery, comes with two arguement. The first (I've called in 'index' here) tells us what number the element is on the page. The second lets us select the element itself, so I'm calling it 'element'
		$(".bar").each(function(index, element) {
			// Select the element and get it's data-width attribute, that we created and set in the for loop. Assign that to a variable called 'width'
			let width = $(element).attr('data-tra');
			let indexReal = index + 1;
			// For each element, animate it's width propery to be equal to the width we just grabbed (plus a percent sign). Take one second to do so
			$(element).animate({
				'width':width+"%"
			}, 200 * indexReal)
		});
	},250)
	

	$(".button").click(function(event) {
		var btnId = $(this).attr('id');
		$(".bar").each(function(index, element) {
				// Select the element and get it's data-width attribute, that we created and set in the for loop. Assign that to a variable called 'width'
				let width = $(element).attr('data-'+btnId);
				let indexReal = index + 1;
				// For each element, animate it's width propery to be equal to the width we just grabbed (plus a percent sign). Take one second to do so
				$(element).animate({
					'width':width+"%"
				}, 100  * indexReal)
			});
	});

});