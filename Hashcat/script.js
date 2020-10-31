let $terminalText = $('#terminalText');
let cryptoChoice = '';
let cryptoOptions = [ 'crypto1', 'crypto2', 'crypto3' ];
let randomPassword = '';
let attempts = 0;
const tl = gsap.timeline({ defaults: { ease: 'power1.out' } });
let listArr = [];
var isAnimationRunning = false;

let passAttempts = [];
let hashAttempts = [];

setInterval(function() {
	var objDiv = document.getElementById('terminalText');
	objDiv.scrollTop = objDiv.scrollHeight;
}, 4000);

async function bruteExplain() {
	$terminalText.empty();

	let bruteMarkup = `
	<pre class='typeList' id='typewriter'>
<span>ON BRUTE FORCE ATTACKS, THE HACKER TRIES EACH POSSIBLE PASSWORD AGAINST EACH POSSIBLE CRYPTOGRAPHY, </span>
<span>UNTIL IT FINDS A MATCH.</span>

<SPAN>BEAR IN MIND THAT A 10 DIGIT PASSWORD, CONTAINING UPPER AND LOWER LETTERS, NUMBERS AND SYMBOLS HAVE </span>
<SPAN>BILLIONS OF UNIQUE COMBINATIONS.</SPAN>

<SPAN>AS YOU PROBABLY NOTICED, DOING THAT MANNUALLY IS EXAUSTIVE AND HAS A MINIMAL CHANCE OF SUCCESS.</SPAN>
<SPAN>TO WORKOUT THIS PROBLEM, AUTOMATION IS NECESSARY.</SPAN>

<SPAN>ONE OF THE MOST USED METHODS IS THE DICTIONARY ATTACK.</SPAN>

<SPAN>Try DICTIONARY ATTACK?(y/n)</SPAN>
	</pre>
	`;

	$terminalText.append(bruteMarkup);

	var typer = document.getElementById('typewriter');
	typewriter = setupTypewriter(typer);
	typewriter.type();

	let markup = `
	<div class="cursor">
      <input type="text" id='dicChoice' maxlength='10' autofocus class="rq-form-element" />
      <i></i>
    </div>
	
	`;

	await sleep(3000);
	$terminalText.append(markup);

	$('#dicChoice').focus();

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
	<pre id='typewriter'>
<span>A DICTIONARY ATTACK IS A BRUTE FORCE ATTACK IN WHICH A LIST OF MOST KNOWN USED PASSWORDS</span>
<span>IS USED INSTEAD OF RANDOMLY TRYING TO FIND THE RIGHT MATCH.</span>

<span>THERE ARE LISTS ONLINE WITH THOUSANDS OF USED PASSWORDS AVAILABLE FOR ANYONE TO USE.</span>

<span>IF YOU THINK ABOUT IT, HAVING A LIST WITH SOME HUNDRED THOUSAND POSSIBLE PASSWORDS</span>
<span>CAN SAVE A LOT OF TIME IF THERE ARE MILLIONS OF POSSIBILITIES.</span>
</pre>
	`;
	$terminalText.append(dicMarkup);

	var typer = document.getElementById('typewriter');
	typewriter = setupTypewriter(typer);
	typewriter.type();
}

async function startPage() {
	$terminalText.empty();
	let terminalMarkup = `
	<pre class='m-0' id='typewriter_intro'>
<span>THE PASSWORD ABOVE IS HASHED.</span>
<span>A HASHED PASSWORD IS A SCRAMBLED REPRESENTATION OF ITSELF.</span>
<span>THE PASSWORD INPUTED BY AN USER GOES THROUGH AN ENCRYPTION THAT IS IMPOSSIBLE TO BE REVERSED,</span>
<span>LEAVING THE HACKER TRYING TO DISCOVER THE USER'S INPUT BY TRIAL AND ERROR.</span>
	
	</pre>
	
	`;

	$terminalText.append(terminalMarkup);
	var typer = document.getElementById('typewriter_intro');
	typewriter = setupTypewriter(typer);
	typewriter.type();

	let markup = `
	<div id='crypto'><div class='container text-center'><span class='p-3'id='crypto1'>CRYPTO1</span><span class='p-3' id='crypto2'>CRYPTO2</span><span class='p-3' id='crypto3'>CRYPTO3</span></div></div><br>
	
<span>SELECT CRYTOGRAPHY:</span>
<div class="cursor">
  <input type="text" id='cryptoChoice' maxlength='10' autofocus class="rq-form-element" />
  <i></i>
</div>
	`;
	await sleep(4500);
	$terminalText.append(markup);
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

$(document).on('click', '#save', async function() {
	let dicList = $('.listInput');

	for (item of dicList) {
		listArr.push(item.innerText);
	}

	tl.to(`#notepad`, 2, { width: '0%', stagger: 0.5 });

	let dicListMarkup = `
	<pre id='typewriter'>
<SPAN>Uploading List...</span>
<SPAN>Starting DICTIONARY ATTACK</span>
	</pre>
	`;
	$terminalText.append(dicListMarkup);

	for (item of listArr) {
		let listMarkup = `

<span>PASSWORD: ${item}</span>
<span>HASHING PASSWORD...</span>
<span>HASH DOES NOT MATCH - CHECK PASSWORD</span>
<span>-------------------</span>
		`;

		$('#typewriter').append(listMarkup);
	}

	var typer = document.getElementById('typewriter');
	typewriter = setupTypewriter(typer);
	typewriter.type();

	let endMarkup = `
	<span>DICTIONARY ATTACK IS OVER - NO MATCHES</span><br>
	<span>LEARN MORE? (y/n):</span>
	<div class="cursor">
      <input type="text" id='dicExplain' maxlength='10' autofocus class="rq-form-element" />
      <i></i>
    </div>
	`;

	await sleep(10000);
	$terminalText.append(endMarkup);
	$('#dicExplain').focus();
});

$(document).on('keypress', '#dicExplain', function(e) {
	if (e.which == 13) {
		if ($('#dicExplain').val() === 'y') {
			dicExplain();
		}
	}
});

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
			
			<span  id='passAttempt'> ${passTry}</span><br>
			
			`;
			$terminalText.append(crackMarkup);

			let hashMarkup = `
			<pre class='m-0' id='typewriter'>
<span>HASHING PASSWORD...</span>
<span id='hash'>${hash}</span>
<span>HASH DOES NOT MATCH - CHECK PASSWORD</span>
<span>Input 'restart', 'help' or 'try':</span>
			</pre>`;

			$terminalText.append(hashMarkup);

			var typer = document.getElementById('typewriter');
			typewriter = setupTypewriter(typer);
			typewriter.type();

			if (hash != randomPassword) {
				let markup = `
				<div class="cursor">
					<input type="text" id='options' autofocus maxlength='10' class="rq-form-element" />
					<i></i>
				</div>
				`;
				await sleep(3000);
				$terminalText.append(markup);

				$('#options').focus();

				$(document).on('keypress', '#options', function(e) {
					if (e.which == 13) {
						$('#typewriter').addClass('typeList');
						$('#typewriter').removeAttr('id');
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

				// tl.to(`.${attemptClass}`, 0.5, { width: '100%', stagger: 0.5 });
				// await sleep(2000);
			} else {
				let match = `
				<span  class='term_content ${attemptClass}'>YOU JUST BREAKED THE PASSWORD!</span>
				`;
				$('#typewriter').append(match);
			}
		} else {
		}
	}
});

function sleep(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

startPage();
randomPass();

// --------------------------------

function setupTypewriter(t) {
	var HTML = t.innerHTML;

	t.innerHTML = '';

	var cursorPosition = 0,
		tag = '',
		writingTag = false,
		tagOpen = false,
		typeSpeed = 0.1,
		tempTypeSpeed = 0;

	var type = function() {
		isAnimationRunning = true;
		if (writingTag === true) {
			tag += HTML[cursorPosition];
		}

		if (HTML[cursorPosition] === '<') {
			tempTypeSpeed = 0;
			if (tagOpen) {
				tagOpen = false;
				writingTag = true;
			} else {
				tag = '';
				tagOpen = true;
				writingTag = true;
				tag += HTML[cursorPosition];
			}
		}
		if (!writingTag && tagOpen) {
			tag.innerHTML += HTML[cursorPosition];
		}
		if (!writingTag && !tagOpen) {
			if (HTML[cursorPosition] === ' ') {
				tempTypeSpeed = 0;
			} else {
				tempTypeSpeed = Math.random() * typeSpeed + 10;
			}
			t.innerHTML += HTML[cursorPosition];
		}
		if (writingTag === true && HTML[cursorPosition] === '>') {
			tempTypeSpeed = Math.random() * typeSpeed + 10;
			writingTag = false;
			if (tagOpen) {
				var newSpan = document.createElement('span');
				t.appendChild(newSpan);
				newSpan.innerHTML = tag;
				tag = newSpan.firstChild;
			}
		}

		cursorPosition += 1;
		if (cursorPosition < HTML.length - 1) {
			setTimeout(type, tempTypeSpeed);
		}
		isAnimationRunning = false;
	};

	return {
		type: type
	};
}
