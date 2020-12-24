$(document).on('click', '#fancy', function() {
	fancyIntro();
});

$(document).on('click', '#me', function() {
	$('#footer').toggleClass('show hide');
	$(this).css('width', '150px');
	if ($('#footer').hasClass('hide')) {
		$(this).css('width', '50px');
	}
});

$(function() {
	$('[data-toggle="tooltip"]').tooltip();
});

function fancyIntro() {
	const tl = gsap.timeline({ defaults: { ease: 'power1.out' } });
	tl.to('.slider', { y: '0', duration: 1, delay: 2 }, '-=1');
	tl.to('.black-slider', { y: '0', duration: 2, stagger: 0.5 }, '-=1');
	tl.to('.intro', { y: '0', duration: 1, delay: 0.5 }, '-=1');
	tl.to('.text', { y: '0%', duration: 1.5, stagger: 0.25 });
	tl.to('.intro', { y: '-100%', duration: 1, delay: 2 }, '-=1');
	tl.to('.black-slider', { y: '-100%', duration: 2, stagger: 0.5 }, '-=1');
	tl.to('.slider', { y: '-100%', duration: 1.5 }, '-=1.5');
	tl.to('.text', { y: '120%', duration: 1.5, stagger: 0.25 });
}

function loopMe() {
	let $me = $('#me');

	$me.css('transform', 'rotate(15deg)');

	setTimeout(function() {
		$me.css('transform', 'rotate(-15deg)');
	}, 1000);

	setTimeout(function() {
		$me.css('transform', 'rotate(0deg)');
	}, 2000);
}

setInterval(function() {
	loopMe();
}, 5000);

setTimeout(function() {
	$('#modal').toggleClass('show hide');
	$('#menu').toggleClass('show hide');
}, 800);
