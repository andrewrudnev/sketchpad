var rows = 40;
var columns = 40;
var boxSize;
var borders = true;
var $row = $('<div></div>', {
	class: 'row'
});

var $column = $('<div></div>', {
	class: 'column'
});

$(document).ready(function() {

	createGrid(rows, columns);
	paint();

});

function color() {
	newGrid();
	paint();
}

function shade() {
	newGrid();
	darken();
}

function randomColor() {
	newGrid();
	colorize();
}

function destroyGrid() {
	$('#container').empty();
	$row.empty();
	$column.empty();
}

function createGrid(row, col) {
	//columns move to the side 
	for(var i = 0; i < col; i++) {
		$row.append($column.clone());
	}
	//rows move up and down 
	for(var i = 0; i < row; i++) {
		$("#container").append($row.clone());
	}
}


function newGrid() {
	var size = prompt("How many squares would you like?");
		rows = size;
		columns = size;
		boxSize = Math.floor(800 / size);
		destroyGrid();
		createGrid(rows, columns);
		$('.row').height(boxSize);
		$('.column').width(boxSize);
		$('.column').height(boxSize);
}

function paint() {
	$('.column').hover(
		function() {
			$(this).addClass("painted");
		}, 
		function() {
	});
}

function darken() {
	$('.column').hover(
		function() {
			var opacity = $(this).css('opacity');
			$(this).css('opacity', (opacity > 0.1) ? (opacity - 0.1) : opacity);
		}, 
		function() {
	});
}

function colorize() {
	$('.column').hover(
		function() {
			$(this).css('background', getRandomColor());
		}, 
		function() {
	});
}

function getRandomColor() {
	function c() {
		var hex = Math.floor(Math.random()*256).toString(16);
		return ("0"+String(hex)).substr(-2); //pads with zero
	}
	return "#" + c() + c() + c();
}

function toggleBorders() {
	if(borders === true) {
		$('.column').css('outline', 0);
		borders = false;
	}

	else {
		$('.column').css('outline', '1px solid');
		borders = true;
	}
}