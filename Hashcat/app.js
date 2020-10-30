const $contentText = $('.content-text');
let password = '';

function timeline_1(textArr) {
	$contentText.empty();
	let textElements = textArr;

	markup(textElements);

	const tl = gsap.timeline({ defaults: { ease: 'power1.out' } });

	tl.to('.text', { y: '0%', duration: 1, stagger: 0.25 });
	tl.to('#submit', { y: '0%', duration: 1, stagger: 0.25 });
}

function markup(textArr) {
	for (element of textArr) {
		let elemMarkup = `
        <h1 class='hide'>
        <span class='text'>${element}</span>
        </h1>
        `;
		$contentText.append(elemMarkup);
	}
	let submitButton = `
    
    <h1 class='hide'>
        <i id='submit' class="fas fa-arrow-right"></i>
    </h1>
    `;

	$contentText.append(submitButton);
}

function formTimeline() {
	$contentText.empty();

	let markup = `
    
    <h1 class='hide'>
        
        <span class='text'>
        Write a Password:
        
        <input id='password' name='pass-input' maxlength='10' size='10' class='pass-input'>
        </span>
    </h1>
`;

	$contentText.append(markup);

	let submitButton = `
    
    <h1 class='hide'>
        <i id='submit' class="fas fa-arrow-right"></i>
    </h1>
    `;

	$contentText.append(submitButton);

	const tl = gsap.timeline({ defaults: { ease: 'power1.out' } });

	tl.to('.text', { y: '0%', duration: 1, stagger: 0.25 });
	tl.to('#submit', { y: '0%', duration: 1, stagger: 0.25 });

	$('#submit').on('click', function() {
		hashPass();
	});
}

function hashPass() {
	let pass = $('#password');
	password = pass.val();
	let fillPass = false;
	while (fillPass === false) {
		if (pass.val() === '') {
			$(`#msg`).remove();
			let markup = `<span id='msg' class='text'>Enter Password</span>`;
			$contentText.append(markup);
			return;
		} else {
			fillPass = true;
		}
	}
	$contentText.empty();

	let markup = ` 
        
        <div class="container">
            <div class="row row-cols-3">
                <div class="col">
                    <span class='text' id='entry'>${pass.val()}</span>
                </div>

                <div class="col">
                    <i class="fas fa-server fa-5x"></i>
                </div>

                <div class="col">
                    <span class='text' id='exit'>84d961</span>
                    <span class='text' id='exit'>568a65</span>
                    
                </div>
            </div>
        </div>
        
        
        <h1 class='hide text-center'>
        <span class='text-2'>Your Password is HASHED.</span>
        </h1>
        <h1 class='hide text-center'>
        <span class='text-2'>WHICH MEANS: </span>
        </h1>
        <h1 class='hide text-center'>
        <span class='text-2'>It has been turned into a</span>
        </h1>
        <h1 class='hide text-center'>
        <span class='text-2'>scrambled representation of itself.</span>
        </h1>

        
        
        `;

	$contentText.append(markup);

	let submitButton = `
    
        <h1 class='hide text-center'>
            <i id='submit' class="fas fa-arrow-right"></i>
        </h1>
        `;

	$contentText.append(submitButton);

	const tl = gsap.timeline({ defaults: { ease: 'power1.out' } });
	tl.to('.text-2', { y: '0%', duration: 1, stagger: 0.25 });
	tl.to('#submit', { y: '0%', duration: 1, stagger: 0.25 });

	const tl2 = gsap.timeline({ defaults: { ease: 'power1.out' } });
	tl2.to('#entry', { x: '150%', duration: 2, delay: 1 }, '-=1');
	tl2.to('#exit', { x: '0%', duration: 2, delay: 1 }, '-=1');

	tl2.repeatDelay(2);
	tl2.repeat(100);

	$('#submit').on('click', function() {
		timeline_1([
			`The Hacker can't revert`,
			'your password to the original value',
			'They use several methods to discover your password.',
			'The most used ones are:',
			'-Brute Force',
			'-Dictionary'
		]);
		$('.text').css('font-size', '2vw');

		$('#submit').on('click', function() {
			bruteForce([
				'A brute-force attack consists of an attacker',
				'submitting many passwords or passphrases',
				'with the HOPE of eventually guessing correctly.',
				'The attacker systematically checks ALL possible',
				'passwords and passphrases until the correct one is found. '
			]);
			$('.text').css('font-size', '2vw');
		});
	});
}

function bruteForce(textElements) {
	$contentText.empty();

	markup(textElements);

	let markupAnim = ` 
        
        <div class="container">
            <div class="row row-cols-3">
                <div class="col">
                    <span class='text' id='entry'>abcdefgh</span>
                    <span class='text' id='entry'>aeiouuoiea</span>
                    <span class='text' id='entry'>AbCdEfGh</span>
                    <span class='text' id='entry'>${password}</span>
                </div>

                <div class="col">
                    <i class="fas fa-server fa-5x"></i>
                </div>

                <div class="col">
                    <span class='text false' id='exit'>123hd345ifmc</span>
                    <span class='text false' id='exit'>dsfrg5f3dwwx</span>
                    <span class='text false' id='exit'>0ofgrt43dssx</span>
                    <span class='text true' id='exit'>84d961568a65</span>
                    
                </div>
            </div>
        </div>`;

	$contentText.append(markupAnim);

	const tl = gsap.timeline({ defaults: { ease: 'power1.out' } });

	tl.to('.text', { y: '0%', duration: 1, stagger: 0.25 });
	tl.to('#submit', { y: '0%', duration: 1, stagger: 0.25 });

	const tl2 = gsap.timeline({ defaults: { ease: 'power1.out' } });
	tl2.to('#entry', { x: '320%', duration: 2, delay: 1 }, '-=1');
	tl2.to('#exit', { x: '0%', duration: 2, delay: 1 }, '-=1');
	tl2.to('.false', { color: 'red' });
	tl2.to('.true', { color: 'green' });

	tl2.repeatDelay(2);
	tl2.repeat(100);

	$('#submit').on('click', function() {
		timeline_1([
			`That's not a good approach because`,
			'It would take DECADES',
			`to solve a 10-digit password`,
			'With numbers, letters and symbols'
		]);
	});
}

timeline_1([ 'PASSWORD CRACKING', 'ELI5 EDITION' ]);

$('#submit').on('click', function() {
	timeline_1([ 'First Things First:', 'How is your password stored?' ]);
	$('#submit').on('click', function() {
		formTimeline();
	});
});
