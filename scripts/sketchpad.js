var rows = 30;
var columns = 30;
var boxSize;
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
	$('.column').style.opacity = "0.0";
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
		boxSize = Math.floor(900 / size);
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
			$(this).css('opacity', increaseOpacity());
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

function increaseOpacity() {
	var newOpacity = $(this).style.opacity + .1;
	return newOpacity;
}