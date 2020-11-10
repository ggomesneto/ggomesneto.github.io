let $close = $('#close');
let $desktop = $('#desktop');

$(document).on('click', '#close', function() {
	let $file = $(this).parent().parent();

	$file.remove();
});

$(function() {
	$('[data-toggle="tooltip"]').tooltip();
});
