$(function() {
	$('[data-toggle="tooltip"]').tooltip();
});

function myFunction(x) {
	if (x.matches) {
		// If media query matches
		$('.carousel-item').remove();
		$carousel.append(markupBoth);
	} else {
		$('.carousel-item').remove();
		$carousel.append(markupFull);
	}
}

let $carousel = $('.carousel-inner');

let markupFull = `
<div class="carousel-item active">
                      
<img class="p-3" id='jeopardyGame' src="jeopardy.jpg" alt>
<img class="p-3" id='connect' src="connect-card.png">
<img class="p-3" id='memoryGame' src="memory-card.jpg">
<a href='/HackOrSnooze/index.html' target='_blank'><img class="p-3" src="Hacker-News.jpg"></a>
</div>
`;

let markupBoth = `
<div class="carousel-item active">
                      
<img class="p-3" id='jeopardyGame' src="jeopardy.jpg" >
<img class="p-3" src="connect-card.png" >
</div>
<div class="carousel-item ">
<img class="p-3" src="meme-card.png" >
<img class="p-3" src="Hacker-News.jpg" >
</div>

`;

var x = window.matchMedia('(max-width: 700px)');
myFunction(x); // Call listener function at run time
x.addListener(myFunction); // Attach listener function on state changes

$(document).on('click', '#close', function() {
	let $file = $(this).parent().parent();

	$file.remove();
});
