const tl = gsap.timeline({ defaults: { ease: 'power1.out' } });

tl.to('.text', { y: '0%', duration: 1, stagger: 0.25 });
tl.to('.slider', { y: '-100%', duration: 1.5, delay: 1 });
tl.to('.intro', { y: '-100%', duration: 1 }, '-=1');
tl.fromTo('#area1', { opacity: 0 }, { opacity: 1, duration: 1 });

tl.fromTo('#intro-img4', { opacity: 1 }, { opacity: 0, duration: 1, delay: 0.5 });
tl.to('#intro-img2', { x: '-50%', duration: 1 });
tl.to('#intro-img3', { x: '50%', duration: 1 });
tl.fromTo('.intro-bar', { height: '1vw' }, { height: '3vw', duration: 1 });
tl.fromTo('.intro-bar span', { opacity: 0 }, { opacity: 1, duration: 2 });

// POPOVERS FOR PORTFOLIO
$(function() {
	$('[data-toggle="popover"]').popover();
});
