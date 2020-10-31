let $terminalText = $('#terminalText');
let cryptoChoice = '';
let cryptoOptions = [ 'crypto1', 'crypto2', 'crypto3' ];
let randomPassword = '';
let attempts = 0;
const tl = gsap.timeline({ defaults: { ease: 'power1.out' } });
let listArr = [];

let passAttempts = [];
let hashAttempts = [];

$(document).on('keypress', '#cryptoChoice', function(e) {
	cryptoChoice = $('#cryptoChoice').val().toLowerCase();

	if (e.which == 13) {
		if (cryptoOptions.includes(cryptoChoice)) {
			$(`.cursor`).remove();
			$('#error').remove();

			let cryptoAppend = `
			<span  id='cryptoChoice'>${cryptoChoice}</span>
			<br>
			<span>----------------------------</span><br>`;
			$terminalText.append(cryptoAppend);

			bruteForce();
		} else {
			$('#error').remove();
			$terminalText.append(`<span id='error'>Wrong Crypto</span>`);
		}
	}
});

$(document).on('keypress', '#passTry', async function(e) {
	let passTry = $('#passTry').val();
	let hash = '';
	if (passAttempts.includes(passTry)) {
		let index = passAttempts.indexOf(passTry);
		hash = hashAttempts[index];
	} else {
		passAttempts.push(passTry);
		hash = hashing(cryptoChoice);

		hashAttempts.push(hash);
	}

	if (e.which == 13) {
		if (passTry != '') {
			attempts++;
			let attemptClass = `atp-${attempts}`;

			$(`.cursor`).remove();

			let crackMarkup = `
			<span  id='passAttempt'>${passTry}</span><br>
			<span class='term_content ${attemptClass}'>HASHING PASSWORD...</span>
			`;
			$terminalText.append(crackMarkup);

			let hashMarkup = `
			<span class='term_content ${attemptClass}' id='hash'>${hash}</span>`;

			$terminalText.append(hashMarkup);

			if (hash != randomPassword) {
				let mismatch = `
				<span class='term_content ${attemptClass}'>HASH DOES NOT MATCH - CHECK PASSWORD</span>
				<span class='term_content ${attemptClass}'>Input 'restart', 'help' or 'try':</span>
				<div class="cursor">
      				<input type="text" id='options' autofocus maxlength='10' class="rq-form-element" />
      				<i></i>
    			</div>

				
				`;

				$terminalText.append(mismatch);
				$('#options').focus();

				$(document).on('keypress', '#options', function(e) {
					if (e.which == 13) {
						let $option = $('#options').val().toLowerCase();

						if ($option === 'help') {
							bruteExplain();
						} else if ($option === 'restart') {
							passAttempts = [];
							hashAttempts = [];
							startPage();
						} else if ($option === 'try') {
							$('.cursor').remove();
							let answerMarkup = `
							<span id='answer'>${$option}</span><br>
							<span>----------------------------</span><br>
							
							`;
							$terminalText.append(answerMarkup);

							bruteForce();
						}
					}
				});

				tl.to(`.${attemptClass}`, 0.5, { width: '100%', stagger: 0.5 });
				await sleep(2000);
			} else {
				let match = `
				<span  class='term_content ${attemptClass}'>YOU JUST BREAKED THE PASSWORD!</span>
				`;
				$terminalText.append(match);
				tl.to(`.${attemptClass}`, 0.5, { width: '100%', stagger: 0.5 });
			}
		} else {
		}
	}
});

setInterval(function() {
	var objDiv = document.getElementById('terminalText');
	objDiv.scrollTop = objDiv.scrollHeight;
}, 4000);

function bruteExplain() {
	let bruteMarkup = `
	
	<span class='term_content'>ON BRUTE FORCE ATTACKS, THE HACKER TRIES EACH POSSIBLE PASSWORD AGAINST EACH POSSIBLE CRYPTOGRAPHY, </span>
	<span class='term_content'>UNTIL IT FINDS A MATCH.</span>
	<SPAN class='term_content'>BEAR IN MIND THAT A 10 DIGIT PASSWORD, CONTAINING UPPER AND LOWER LETTERS, NUMBERS AND SYMBOLS HAVE </span>
	<SPAN class='term_content'><strong>BILLIONS</strong> OF UNIQUE COMBINATIONS.</SPAN>
	
	<br>
	<SPAN class='term_content'>AS YOU PROBABLY NOTICED, DOING THAT MANNUALLY IS EXAUSTIVE AND HAS A MINIMAL CHANCE OF SUCCESS.</SPAN>
	<SPAN class='term_content'>TO WORKOUT THIS PROBLEM, <strong>AUTOMATION</strong> IS NECESSARY.</SPAN>
	<SPAN class='term_content'>ONE OF THE MOST USED METHODS IS THE <STRONG>DICTIONARY ATTACK.</STRONG></SPAN><br>
	<SPAN class='term_content'>Try DICTIONARY ATTACK?(y/n)</SPAN>
	<div class="cursor">
      <input type="text" id='dicChoice' maxlength='10' autofocus class="rq-form-element" />
      <i></i>
    </div>
	`;
	$terminalText.empty();
	$terminalText.append(bruteMarkup);

	$('#dicChoice').focus();
	tl.to(`.term_content`, 0.5, { width: '100%', stagger: 0.5 });

	$(document).on('keypress', '#dicChoice', async function(e) {
		if (e.which == 13) {
			let dicChoice = $('#dicChoice').val();
			if (dicChoice == 'y') {
				dicList();
			}
		}
	});
}

function dicExplain() {
	$terminalText.empty();

	let dicMarkup = `
	<span class='term_content'>A DICTIONARY ATTACK IS A BRUTE FORCE ATTACK IN WHICH A LIST OF MOST KNOWN USED PASSWORDS</span>
	<span class='term_content'>IS USED INSTEAD OF RANDOMLY TRYING TO FIND THE RIGHT MATCH.</span>
	<span class='term_content'>THERE ARE LISTS ONLINE WITH THOUSANDS OF USED PASSWORDS AVAILABLE FOR ANYONE TO USE.</span><br>
	<span class='term_content'>IF YOU THINK ABOUT IT, HAVING A LIST WITH SOME HUNDRED THOUSAND POSSIBLE PASSWORDS</span>
	<span class='term_content'>CAN SAVE A LOT OF TIME IF THERE ARE MILLIONS OF POSSIBILITIES.</span>
	`;
	$terminalText.append(dicMarkup);
	tl.to(`.term_content`, 0.5, { width: '100%', stagger: 0.5 });
}

function startPage() {
	$terminalText.empty();
	let terminalMarkup = `
	<span >THE PASSWORD ABOVE IS <sTRONG>HASHED</STRONG>.</span><BR>
	<span >A HASHED PASSWORD IS A SCRAMBLED REPRESENTATION OF ITSELF.</span><BR>
	<span >THE PASSWORD INPUTED BY AN USER GOES THROUGH AN ENCRYPTION THAT IS IMPOSSIBLE TO BE REVERSED,</span><BR>
	<span >LEAVING THE HACKER TRYING TO DISCOVER THE USER'S INPUT BY TRIAL & ERROR</span>
	 <BR><BR><bR>
	


	<div id='crypto'><div class='container text-center'><span class='p-3'id='crypto1'>CRYPTO1</span><span class='p-3' id='crypto2'>CRYPTO2</span><span class='p-3' id='crypto3'>CRYPTO3</span></div></div><br>
	
	<span>SELECT CRYTOGRAPHY:</span>
	<div class="cursor">
      <input type="text" id='cryptoChoice' maxlength='10' autofocus class="rq-form-element" />
      <i></i>
    </div>
	
	
	`;

	$terminalText.append(terminalMarkup);
}

function bruteForce() {
	let terminalMarkup = `
	
	<span>PASSWORD:</span>
	<div class="cursor">
      <input type="text" id='passTry' autofocus maxlength='10' class="rq-form-element" />
      <i></i>
	</div>
	
	`;

	$terminalText.append(terminalMarkup);
	$('#passTry').focus();
}

function randomPass() {
	random = Math.floor(Math.random() * 3);
	let cryptoType = cryptoOptions[random];
	randomPassword = hashing(cryptoType);

	$('#passHash').text(randomPassword);
}

function dicList() {
	$terminalText.empty();
	let listMarkup = `
	<div id='notepad'>
    	<div class='terminal_top text-center'><i class="far fa-sticky-note"></i>DICTIONARY LIST</div>
    	<div class='list_top '><span id='save' class='p-3'>Save</span></div>
		<div id='listText'>
		<span class='listInput'>password123</span><br>
		<span class='listInput'>letmein</span><br>
		<span class='listInput'>abc123</span><br>
		<span class='listInput'>superPassword</span><br>

		<input id='nextInput''>
		
		</div>
  </div>
	`;

	$('#main_wrap').prepend(listMarkup);
	$('#nextInput').focus();

	$(document).on('keypress', '#nextInput', function(e) {
		let input = $('#nextInput').val();

		if (e.which == 13) {
			if (input != '') {
				$('#nextInput').remove();
				let lastInputMark = `
				<span class='listInput'>${input}</span>`;
				$('#listText').append(lastInputMark);

				let inputMarkup = `
				<br>
				<input id='nextInput'>
				`;
				$('#listText').append(inputMarkup);
				$('#nextInput').focus();
			}
		}
	});
}

$(document).on('click', '#save', function() {
	let dicList = $('.listInput');

	for (item of dicList) {
		listArr.push(item.innerText);
	}

	tl.to(`#notepad`, 2, { width: '0%', stagger: 0.5 });

	let dicListMarkup = `
	<SPAN class='term_content'>Uploading List...</span>
	<SPAN class='term_content'>Starting DICTIONARY ATTACK</span>
	<br>
	`;
	$terminalText.append(dicListMarkup);

	for (item of listArr) {
		let listMarkup = `

		<span class='term_content'>PASSWORD: ${item}</span>
		<span class='term_content'>HASHING PASSWORD...</span>
		<span class='term_content'>HASH DOES NOT MATCH - CHECK PASSWORD</span>
		<span class='term_content'>-------------------</span>
		`;

		$terminalText.append(listMarkup);
	}

	let endMarkup = `
	<span class='term_content'>DICTIONARY ATTACK IS OVER - NO MATCHES</span>
	<span class='term_content'>LEARN MORE? (y/n):</span>
	<div class="cursor">
      <input type="text" id='dicExplain' maxlength='10' autofocus class="rq-form-element" />
      <i></i>
    </div>
	`;

	$terminalText.append(endMarkup);

	tl.to(`.term_content`, 0.5, { width: '100%', stagger: 0.5 });
});

$(document).on('keypress', '#dicExplain', function(e) {
	if (e.which == 13) {
		if ($('#dicExplain').val() === 'y') {
			dicExplain();
		}
	}
});

function hashing(cryptoType) {
	let charset1 = '!"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[]^_`abcdefghijklmnopqrstuvwxyz{|}~';
	let charset2 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
	let charset3 = '!"#$%&\'()*+,-./0123456789:;<=>?@[]^_`{|}~';

	let hash = '';
	if (cryptoType === 'crypto1') {
		for (i = 0; i < 30; i++) {
			let random = Math.floor(Math.random() * 93);

			if (hash === '') {
				hash = charset1[random];
			} else {
				hash = hash.concat(charset1[random]);
			}
		}
	} else if (cryptoType === 'crypto2') {
		for (i = 0; i < 30; i++) {
			let random = Math.floor(Math.random() * 52);

			if (hash === '') {
				hash = charset2[random];
			} else {
				hash = hash.concat(charset2[random]);
			}
		}
	} else if (cryptoType === 'crypto3') {
		for (i = 0; i < 30; i++) {
			let random = Math.floor(Math.random() * 41);

			if (hash === '') {
				hash = charset3[random];
			} else {
				hash = hash.concat(charset3[random]);
			}
		}
	}

	return hash;
}

function sleep(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

startPage();
randomPass();
