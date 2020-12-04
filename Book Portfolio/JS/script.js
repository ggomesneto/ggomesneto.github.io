let $close = $('#close');
let $desktop = $('#desktop');

$(document).on('click', '#close', function() {
	let $file = $(this).parent().parent();

	$file.remove();
});

$(function() {
	$('[data-toggle="tooltip"]').tooltip();
});

let $journal = $('#journal');
let $journalBttn = $('#journalBttn');

$journalBttn.on('click', function() {
	let markup = `
			<div id='journalDiv'>
				<div id='topBar'>
					<span id='header'>Journal</span><span id='close'>x</span>	
				</div>
				<img id='journal' src='img/Journal.jpeg'>
			</div>
			
			`;

	$('#portfolio').append(markup);
});
