$('#me').on('click', function() {
	$('#footer').empty();
	let markup = `

	<P id='about' class='button'>ABOUT</P>
	<P id='toolkit' class='button'>TOOLKIT</P>
	<p id='contact' class='button'>CONTACT</p>
	`;

	$('#footer').append(markup);
	$('#footer').toggleClass('show hide');
});

$(document).on('click', '#about', function() {
	$('#footer').empty();
	let markup = `
	
	<p>Hey, I'm Geraldo.</p>
                        <p>
                            <i class="fas fa-laptop-code"></i> Software Engineer |
                            <i class="fas fa-cloud"></i> AWS Certified |
							<i class="fas fa-code"></i> Boot Camp Graduate |
							<i class="fas fa-tachometer-alt"></i> Fast Learner |
							<i class="fas fa-globe-americas"></i> International Experience</p>

                    <p class='about-me'>I AM A BRAZILIAN LIVING IN THE USA SINCE 2018. MY CAREER IN THE OILFIELD STARTED WHEN I WAS 21 AND ON THE YEARS AFTER I WORKED IN PLACES LIKE SIBERIA, ABU DHABI, BRAZIL AND CENTRAL AMERICA. EVEN THOUGH IT WAS A VERY EXCITING CAREER, IN 2016 I DECIDED TO PURSUE A DREAM AND BECAME A FULL-TIME POKER PLAYER IN LAS VEGAS. FOR THREE YEARS I SUCCEED BUT, AFTER GETTING MARRIED, I DECIDED TO GO BACK TO WORK IN A 'NORMAL' JOB THAT COULD GIVE ME MORE FINANCIAL STABILITY.</p>
					<p class='about-me'>AFTER WORKING WITH DIFFERENT TYPES OF TECHNOLOGY, I FOUND LOVE IN CODING AND DECIDED TO TAKE A STEP OUT OF MY COMFORT ZONE AND LEARN MORE ABOUT SOFTWARE ENGINEERING. WITH THE KNOWLEDGE FROM THE SOFTWARE ENGINEERING BOOTCAMP AT SPRINGBOARD I FEEL VERY COMFORTABLE TO PURSUE A CAREER CHANGE AND TRAIL A NEW PATH, NOW AS A DEVELOPER INSTEAD OF SOMEONE THAT JUST USES THE FINAL PRODUCT.</p>
					<p class='about-me'> I AM PURSUING A SOFTWARE ENGINEER POSITION IN WHICH I CAN CONTINUE PROGRESSING AS A DEVELOPER, BE PART OF A GREAT TEAM AND SHARE MY KNOWLEDGE WITH OTHERS.</P>
	
	
					
	
	`;

	$('#footer').append(markup);
});

$(document).on('click', '#toolkit', function() {
	$('#footer').empty();
	let markup = `
	
	<p>TOOLKIT</p>
                        <img data-toggle="tooltip" data-placement="top" title="BootStrap" src='img/bootstrap.png'>
                        <img data-toggle="tooltip" data-placement="top" title="CSS" src='img/css.png'>
                        <img data-toggle="tooltip" data-placement="top" title="Git" src='img/git.png'><br>
                        <img data-toggle="tooltip" data-placement="top" title="HTML5" src='img/html5.png'>
                        <img data-toggle="tooltip" data-placement="top" title="JavaScript" src='img/javascript.png'>
                        <img data-toggle="tooltip" data-placement="top" title="MongoDB" src='img/mongodb.png'><br>
                        <img data-toggle="tooltip" data-placement="top" title="NodeJS" src='img/nodejs.png'>
                        <img data-toggle="tooltip" data-placement="top" title="PostgreSQL" src='img/postgres.png'>
                        <img data-toggle="tooltip" data-placement="top" title="Python" src='img/python.png'><br>
                        <img data-toggle="tooltip" data-placement="top" title="React" src='img/react.png'>
                        <img data-toggle="tooltip" data-placement="top" title="VSCode" src='img/vscode1.png'></img>
	`;

	$('#footer').append(markup);
	$(function() {
		$('[data-toggle="tooltip"]').tooltip();
	});
});

$(document).on('click', '#contact', function() {
	$('#footer').empty();
	let markup = `
	
	<p><a href='https://linkedin.com/in/ggomesneto' target='_blank'>LINKEDIN</a> | <a href='https://github.com/ggomesneto' target='_blank'>GITHUB</a> | <A href='https://drive.google.com/file/d/18Ba4_hL8BmGvszqbBasiC02MONelZA2w/view?usp=sharing' target='_blank'>CURRICULUM</A> | GGOMESNETO@GMAIL.COM</P>
	
	
	
	`;

	$('#footer').append(markup);
});

$(document).on('click', '#close', function() {
	$(this).parent().remove();
});

$(document).on('click', '#fancy', function() {
	fancyIntro();
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
	tl.to('.text', { y: '102%', duration: 1.5, stagger: 0.25 });
}
