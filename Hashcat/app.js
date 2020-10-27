const $contentText = $('.content-text');
let password = '';
let count = 1;

// --------------MARKUPS------------------

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

function formMarkup() {
	let markup = `
    
    <h1 class='hide'>
        
        <span class='text'>
        Write a Password:
        
        <input id='password' name='pass-input' maxlength='10' size='10' class='pass-input'>
        </span>
	</h1>
	
	<h1 class='hide'>
        <i id='submit' class="fas fa-arrow-right"></i>
    </h1>

    
`;
	$contentText.append(markup);
}

function hashMarkup() {
	let markup = ` 
        
        <div class="container">
            <div class="row row-cols-3">
                <div class="col">
                    <span class='text' id='entry'>${password}</span>
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
        <span class='text'>Your Password is HASHED.</span>
        </h1>
        <h1 class='hide text-center'>
        <span class='text'>WHICH MEANS: </span>
        </h1>
        <h1 class='hide text-center'>
        <span class='text'>It has been turned into a</span>
        </h1>
        <h1 class='hide text-center'>
        <span class='text'>scrambled representation of itself.</span>
        </h1>

        <h1 class='hide text-center'>
            <i id='submit' class="fas fa-arrow-right"></i>
        </h1>
        
        `;

	$contentText.append(markup);
	$('.text').css('font-size', '3vw');
}

function markupAnim() {
	let markup = ` 
        
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

	$contentText.append(markup);
}

function markupDic() {
	let markup = `
    <div class='form-wrap'>
    <div class='form'>
    <input type='text' id='formName' name='name' autocomplete='off' required>
    <label for ='name' class='label-name'>
        <span class='content-name'>Full Name</span>
        
    </label>
    </div>
    <div class='form'>
    <input type='text' id='formEmail' name='email' autocomplete='off' required>
    <label for ='nemail' class='label-name'>
        <span class='content-name'>Email</span>
        
    </label>
    </div>
    <div class='form'>
    <input type='text' id='formDob' name='dob' autocomplete='off' required >
    <label for ='dob' class='label-name'>
        <span class='content-name'>Date of Birth</span>
        
    </label>
    </div>
    <div class='form'>
    <input type='text' id='formPob' name='pob' autocomplete='off' required>
    <label for ='pob' class='label-name'>
        <span class='content-name'>Place of Birth</span>
        
    </label>
    </div>
    
   
    
</div>  
    `;
	$contentText.append(markup);
}

function markupList(userInfo) {
	let markup = `
    
    <div class="container">
            <div class="row row-cols-3">
                <div class="col">
                <ul id='passList'>
                    <li class='text entry userinfo'>password123</li>
                    <li class='text entry userinfo'>admin</li>
                    <li class='text entry userinfo'>letmein</li>
                </ul>
                </div>

                <div class="col">
                    <i class="fas fa-server fa-5x"></i>
                </div>

                <div class="col">
                    <span class='text userinfo false' id='exit'>hfgrty45rfgG</span>
                    <span class='text userinfo false' id='exit'>nvFGt5678dkc</span>
                    <span class='text userinfo false' id='exit'>12DE3rfg543d</span>
                    <span class='text userinfo true'  id='exit'>hgyuIO98hbgF</span>
                    <span class='text userinfo true'  id='exit'>hfgRtfGt5654</span>
                    <span class='text userinfo true'  id='exit'>dFEcxght5$67</span>
                    <span class='text userinfo true'  id='exit'>Fgtyh$3dsw12</span>
                    
                </div>
            </div>
        </div>

`;
	$contentText.append(markup);

	for (info of userInfo) {
		let markup = `<li class='userinfo entry text'>${info}</li>`;
		$('#passList').append(markup);
	}
	$('.userinfo').css('font-size', '1vw');

	tl_third();
}

// ------------------------------------------
function timeline(textArr, markupType) {
	$contentText.empty();
	let textElements = textArr;

	markupType(textElements);

	tl_main();

	if ($('#entry').length != 0) {
		tl_secondary();
	}
}

function bruteForce(textElements) {
	$contentText.empty();

	markup(textElements);

	markupAnim();

	tl_main();
	tl_secondary();
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
			count--;
			return;
		} else {
			fillPass = true;
		}
	}
	$contentText.empty();

	hashMarkup();

	tl_main();
	tl_secondary();
}

function formDic() {
	timeline([ 'Dictionary Attack', 'Fill form to be used as example' ], markup);
	markupDic();
}

// ---------------ANIMATIONS-------------------

function tl_main() {
	const tl = gsap.timeline({ defaults: { ease: 'power1.out' } });

	tl.to('.text', { y: '0%', duration: 1, stagger: 0.25 });

	tl.to('#submit', { y: '0%', duration: 1, stagger: 0.25 });
}

function tl_secondary() {
	const tl2 = gsap.timeline({ defaults: { ease: 'power1.out' } });
	tl2.to('#entry', { x: '320%', duration: 2, delay: 1 }, '-=1');
	tl2.to('#exit', { x: '0%', duration: 2, delay: 1 }, '-=1');
	tl2.to('.false', { color: 'red' });
	tl2.to('.true', { color: 'green' });

	tl2.repeatDelay(2);
	tl2.repeat(100);
}

function tl_third() {
	const tl = gsap.timeline({ defaults: { ease: 'power1.out' } });

	tl.fromTo('.entry', { opacity: 0 }, { opacity: 1, duration: 1, delay: 3.5, stagger: 0.5 });
	tl.to('.entry', { x: '320%', duration: 1, stagger: 0.25 });
	tl.to('#exit', { x: '0%', duration: 2, delay: 1, stagger: 0.5 });

	tl.repeatDelay(2);
	tl.repeat(100);
}

timeline([ 'PASSWORD CRACKING', 'ELI5 EDITION' ], markup);

$(document).on('click', '#submit', function() {
	count++;
	if (count === 2) {
		timeline([ 'First Things First:', 'How is your password stored?' ], markup);
	} else if (count === 3) {
		timeline([], formMarkup);
	} else if (count === 4) {
		hashPass();
	} else if (count === 5) {
		timeline(
			[
				`The Hacker can't revert`,
				'your password to the original value,',
				'but there are several methods to discover it.',
				'The most used ones are:',
				'-Brute Force',
				'-Dictionary Attack'
			],
			markup
		);
		$('.text').css('font-size', '2vw');
	} else if (count === 6) {
		bruteForce([
			'A brute-force attack consists of an attacker',
			'submitting many passwords or passphrases',
			'with the HOPE of eventually guessing correctly.',
			'The attacker systematically checks ALL possible',
			'passwords and passphrases until the correct one is found. '
		]);
		$('.text').css('font-size', '2vw');
	} else if (count === 7) {
		timeline(
			[
				`That's NOT a good approach because:`,
				'- It could take DECADES to solve a 10-digit password',
				`with numbers, letters and symbols`,
				'- There are several algorithms used to HASH a password.',
				`Without knowing the right one, you'd have to check each one. `
			],
			markup
		);
		$('.text').css('font-size', '2vw');
	} else if (count === 8) {
		formDic();
	} else if (count === 9) {
		let $formInfo = false;
		let $formName = $('#formName');
		let $formEmail = $('#formEmail');
		let $formDob = $('#formDob');
		let $formPob = $('#formPob');

		while ($formInfo === false) {
			if ($formName.val() != '' && $formEmail.val() != '' && $formDob.val() != '' && $formPob.val() != '') {
				$formInfo = true;
			} else {
				$(`#msg`).remove();
				let markup = `<span id='msg' class='text'>Missing Info</span>`;
				$contentText.append(markup);
				count--;
				return;
			}
			console.log('works');
		}

		let userInfo = [ $formName.val(), $formEmail.val(), $formDob.val(), $formPob.val() ];
		timeline(
			[
				'A dictionary attack is based on trying all the strings',
				'in a pre-arranged listing.',
				'Such attacks originally used words one would find in',
				'a dictionary (hence the phrase dictionary attack).',
				'The Hacker uses a list of most used passwords combined',
				`with the user's info gathered from the internet.`
			],
			markup
		);
		$('.text').css('font-size', '2vw');

		markupList(userInfo);
	}
});
