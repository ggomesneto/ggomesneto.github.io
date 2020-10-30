const tl = gsap.timeline({ defaults: { ease: 'power1.out' } });
const $password = $('#password');
let passVal = '';
const $bruteForce = $('#line7');
const $dic_link = $('#dic_link');
const $content = $('#content');
const $terminal = $('#terminal');

tl.fromTo('#line1', { opacity: 0 }, { opacity: 1, duration: 0.5 });

$password.on('keypress', function(e) {
	if (e.which == 13) {
		console.log('submit');
		if ($password.val() === '') {
		} else {
			passVal = $password.val();
			$('.cursor').empty();
			$('.cursor').append(`<span id='password'>${passVal}`);
			tl.to('#term_1', { width: '500px', duration: 1 });
			tl.to('#term_2', { width: '500px', duration: 1 });

			let hash = hashing();

			let markup = `
            
            <span  class='text_content group-1' id='line2'>FOR PROTECTION, YOUR PASSWORD IS HASHED.</span><BR class='group-1'>
            <span  class='text_content group-1' id='line3'>BUT, WHAT DOES THAT MEAN?</span><BR class='group-1'>
            <span  class='text_content group-1' id='line4'>USING <u>CRYPTOGRAPHY</u>  , YOUR PASSWORD BECOMES A SCRAMBLED REPRESENTATION OF ITSELF.</span><br class='group-1  '>
            <span  class='text_content group-1' id='line5'>IT IS <Strong>IMPOSSIBLE</Strong> TO REVERSE THE ENCRYPTION, BUT THERE ARE SEVERAL METHODS TO OVERCOME THAT.</span><br class='group-1'>
            <span  class='text_content group-1' id='line6'>THE MOST USED ARE:</span>
            <span  class='text_content group-1' id='brute_link'>- BRUTE FORCE</span>
            <span  class='text_content group-1' id='dic_link'>- DICTIONARY ATTACK</span>
            <small class='text_content group-1' id='line9'>Click to learn more</small><BR class='group-1'>

            `;

			$content.append(markup);

			let terminalMarkup = `
            <span id='term_1' class='term_content'>HASHING PASSWORD...</span>
            <span id='term_2' class='term_content'>PASSWORD HASHED: # ${hash}</span>
            `;

			$terminal.append(terminalMarkup);

			tl
				.fromTo('.group-1', 0.5, { opacity: 0 }, { opacity: 1, stagger: 0.5 })
				.to('#term_1', 1, { width: '500px' }, 1)
				.to('#term_2', 1, { width: '500px' }, 2);
		}
	}
});

$(document).on('click', '#brute_link', async function() {
	$terminal.append(`<span id='clear'>clear()</span>`);

	tl.to('#clear', { width: '500px', duration: 1 });

	let attempts = [ 'attempt1', 'attempt2', 'attempt3', `attempt4` ];

	setTimeout(function() {
		$content.empty();
		$terminal.empty();
		let passLen = passVal.length;

		let markup = `
        <span class='text_content group-2'>ON BRUTE FORCE ATTACKS, THE HACKER TRIES EACH POSSIBLE PASSWORD AGAINST EACH POSSIBLE CRYPTOGRAPHY, UNTIL IT FINDS A MATCH.</span><br class='group-2'>
        <span class='text_content group-2'>THE PASSWORD YOU ADDED IS ${passLen} CHARACTERS LONG, AND USING BRUTE FORCE, IT WOULD HAVE 95<sup>${passLen}</sup> POSSIBLE COMBINATIONS.</span><BR class='group-2'>
        <SPAN class='text_content group-2'>BEAR IN MIND THAT A 10 DIGIT PASSWORD, CONTAINING UPPER AND LOWER LETTERS, NUMBERS AND SYMBOLS HAVE <strong>BILLIONS</strong> OF UNIQUE COMBINATIONS.</SPAN><BR class='group-2'>
        <SPAN id='dic_link' class='text_content group-2'><U>DICTIONARY ATTACK</U></SPAN><BR class='group-2'>
        `;

		$content.append(markup);

		let terminaltop = `<div class='terminal_top text-center'>TERMINAL</div>`;

		$terminal.append(terminaltop);

		for (attempt of attempts) {
			let hash = hashing();

			let terminalMarkup = `
            <span id='term_4' class='term_content group-3'>PASSWORD: ${attempt} </span>
            <span id='term_5' class='term_content group-3'>HASHING PASSWORD...</span>
            <span id='term_6' class='term_content group-3'>PASSWORD HASHED: # ${hash}</span>
            <span id='term_7' class='term_content group-3'>HASH DOES NOT MATCH - CHECK PASSWORD</span>
            <br class='group-3'>
            `;

			$terminal.append(terminalMarkup);
		}

		tl
			.fromTo('.group-2', 0.5, { opacity: 0 }, { opacity: 1, stagger: 0.5 })
			.to('.group-3', 1, { width: '500px', stagger: 0.5 }, '-=3');
	}, 1000);
});

$(document).on('click', '#dic_link', function() {
	$terminal.append(`<span id='clear'>clear()</span>`);

	let attempts = [ 'admin1', 'letmein', '12345679', 'JohnSmith1', 'baseball' ];

	$('#terminal').append(`<span class='group-3' id='term_3'>clear()</span>`);

	setTimeout(function() {
		$content.empty();
		$terminal.empty();

		let markup = `
        <span class='text_content group-4'>A DICTIONARY ATTACK USES A LIST OF MOST USED PASSWORDS TO FIND A MATCH BEFORE GOING TO FULL BRUTE FORCE MODE.</span><br class='group-4'>
        <span class='text_content group-4'>THE LIST ALSO CONTAINS ALL GATHERED INFORMATION ABOUT THE VICTIM.</span>
        <Span class='text_content group-4'>SOCIAL MEDIA IS ONE OF THE MOST USED SOURCES FOR THIS TYPE OF INFO.</Span><br class='group-4'>
        <span class='text_content group-4'>NOWADAYS YOU CAN FIND ONLINE LISTS WITH THOUSANDS OF MOST USED PASSWORDS, SUCH AS <Strong>'ADMIN1','123456', OR 'LETMEIN'</Strong></span><br class='group-4'>
        <SPAN id='brute_link' class='text_content group-4'><U>BRUTE FORCE</U></SPAN><BR class='group-2'>
        `;

		$content.append(markup);

		let terminaltop = `<div class='terminal_top text-center'>TERMINAL</div>`;

		$terminal.append(terminaltop);

		let listMarkup = `
        <Span id='term_9'  class='term_content list-content'>UPLOADING LIST...</SPAn>
        <span id='term_10' class='term_content list-content'>admin1</span>
        <span id='term_11' class='term_content list-content'>letmein</span>
        <span id='term_12' class='term_content list-content'>12345679</span>
        <span id='term_13' class='term_content list-content'>JohnSmith1</span>
        <span id='term_14' class='term_content list-content'>baseball</span>
        <br>
        
        `;

		$('#terminal').append(listMarkup);

		for (attempt of attempts) {
			let hash = hashing();

			let terminalMarkup = `

            <span id='term_15' class='term_content group-5'>PASSWORD: ${attempt} </span>
            <span id='term_16' class='term_content group-5'>HASHING PASSWORD...</span>
            <span id='term_17' class='term_content group-5'>PASSWORD HASHED: # ${hash}</span>
            <span id='term_18' class='term_content group-5'>HASH DOES NOT MATCH - CHECK PASSWORD</span>
            <br>
            
            `;
			$('#terminal').append(terminalMarkup);
		}

		tl
			.fromTo('.group-4', 0.5, { opacity: 0 }, { opacity: 1, stagger: 0.5 })
			.to('.list-content', 1, { width: '500px', stagger: 0.5 }, '-=3')
			.to('.group-5', 1, { width: '500px', stagger: 0.5 });
	}, 1000);
});

function hashing() {
	let charset = ' !"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[]^_`abcdefghijklmnopqrstuvwxyz{|}~ ';
	let hash = '';
	for (i = 0; i < 30; i++) {
		let random = Math.floor(Math.random() * 95);

		if (hash === '') {
			hash = charset[random];
		} else {
			hash = hash.concat(charset[random]);
		}
	}
	return hash;
}
