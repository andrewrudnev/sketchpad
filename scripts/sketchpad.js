var rows = 16;
var columns = 16;
var $row = $('<div></div>', {
	class: 'row'
});

var $column = $('<div></div>', {
	class: 'column'
});

$(document).ready(function() {

	//columns move to the side 
	for(var i = 0; i < columns; i++) {
		$row.append($column.clone());
	}
	//rows move up and down 
	for(var i = 0; i < rows; i++) {
		$("#container").append($row.clone());
	}

	$('.column').click(function() {
		$(this).addClass("painted")
	});
});