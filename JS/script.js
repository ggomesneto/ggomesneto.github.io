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

$journalBttn.on({
	mouseenter: function() {
		if ($(window).width() > 1800) {
			$journal.css('transform', 'translateX(-180%) rotate(15deg');
		}
	},
	mouseleave: function() {
		if ($(window).width() > 1800) {
			$journal.css('transform', 'translateX(180%) rotate(15deg');
		}
	}
});
