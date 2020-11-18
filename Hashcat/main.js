//  MD5 HASHING FUNCTION ----

// --------------------------
// --------------------------
// --------------------------

function md5cycle(x, k) {
	var a = x[0],
		b = x[1],
		c = x[2],
		d = x[3];

	a = ff(a, b, c, d, k[0], 7, -680876936);
	d = ff(d, a, b, c, k[1], 12, -389564586);
	c = ff(c, d, a, b, k[2], 17, 606105819);
	b = ff(b, c, d, a, k[3], 22, -1044525330);
	a = ff(a, b, c, d, k[4], 7, -176418897);
	d = ff(d, a, b, c, k[5], 12, 1200080426);
	c = ff(c, d, a, b, k[6], 17, -1473231341);
	b = ff(b, c, d, a, k[7], 22, -45705983);
	a = ff(a, b, c, d, k[8], 7, 1770035416);
	d = ff(d, a, b, c, k[9], 12, -1958414417);
	c = ff(c, d, a, b, k[10], 17, -42063);
	b = ff(b, c, d, a, k[11], 22, -1990404162);
	a = ff(a, b, c, d, k[12], 7, 1804603682);
	d = ff(d, a, b, c, k[13], 12, -40341101);
	c = ff(c, d, a, b, k[14], 17, -1502002290);
	b = ff(b, c, d, a, k[15], 22, 1236535329);

	a = gg(a, b, c, d, k[1], 5, -165796510);
	d = gg(d, a, b, c, k[6], 9, -1069501632);
	c = gg(c, d, a, b, k[11], 14, 643717713);
	b = gg(b, c, d, a, k[0], 20, -373897302);
	a = gg(a, b, c, d, k[5], 5, -701558691);
	d = gg(d, a, b, c, k[10], 9, 38016083);
	c = gg(c, d, a, b, k[15], 14, -660478335);
	b = gg(b, c, d, a, k[4], 20, -405537848);
	a = gg(a, b, c, d, k[9], 5, 568446438);
	d = gg(d, a, b, c, k[14], 9, -1019803690);
	c = gg(c, d, a, b, k[3], 14, -187363961);
	b = gg(b, c, d, a, k[8], 20, 1163531501);
	a = gg(a, b, c, d, k[13], 5, -1444681467);
	d = gg(d, a, b, c, k[2], 9, -51403784);
	c = gg(c, d, a, b, k[7], 14, 1735328473);
	b = gg(b, c, d, a, k[12], 20, -1926607734);

	a = hh(a, b, c, d, k[5], 4, -378558);
	d = hh(d, a, b, c, k[8], 11, -2022574463);
	c = hh(c, d, a, b, k[11], 16, 1839030562);
	b = hh(b, c, d, a, k[14], 23, -35309556);
	a = hh(a, b, c, d, k[1], 4, -1530992060);
	d = hh(d, a, b, c, k[4], 11, 1272893353);
	c = hh(c, d, a, b, k[7], 16, -155497632);
	b = hh(b, c, d, a, k[10], 23, -1094730640);
	a = hh(a, b, c, d, k[13], 4, 681279174);
	d = hh(d, a, b, c, k[0], 11, -358537222);
	c = hh(c, d, a, b, k[3], 16, -722521979);
	b = hh(b, c, d, a, k[6], 23, 76029189);
	a = hh(a, b, c, d, k[9], 4, -640364487);
	d = hh(d, a, b, c, k[12], 11, -421815835);
	c = hh(c, d, a, b, k[15], 16, 530742520);
	b = hh(b, c, d, a, k[2], 23, -995338651);

	a = ii(a, b, c, d, k[0], 6, -198630844);
	d = ii(d, a, b, c, k[7], 10, 1126891415);
	c = ii(c, d, a, b, k[14], 15, -1416354905);
	b = ii(b, c, d, a, k[5], 21, -57434055);
	a = ii(a, b, c, d, k[12], 6, 1700485571);
	d = ii(d, a, b, c, k[3], 10, -1894986606);
	c = ii(c, d, a, b, k[10], 15, -1051523);
	b = ii(b, c, d, a, k[1], 21, -2054922799);
	a = ii(a, b, c, d, k[8], 6, 1873313359);
	d = ii(d, a, b, c, k[15], 10, -30611744);
	c = ii(c, d, a, b, k[6], 15, -1560198380);
	b = ii(b, c, d, a, k[13], 21, 1309151649);
	a = ii(a, b, c, d, k[4], 6, -145523070);
	d = ii(d, a, b, c, k[11], 10, -1120210379);
	c = ii(c, d, a, b, k[2], 15, 718787259);
	b = ii(b, c, d, a, k[9], 21, -343485551);

	x[0] = add32(a, x[0]);
	x[1] = add32(b, x[1]);
	x[2] = add32(c, x[2]);
	x[3] = add32(d, x[3]);
}

function cmn(q, a, b, x, s, t) {
	a = add32(add32(a, q), add32(x, t));
	return add32((a << s) | (a >>> (32 - s)), b);
}

function ff(a, b, c, d, x, s, t) {
	return cmn((b & c) | (~b & d), a, b, x, s, t);
}

function gg(a, b, c, d, x, s, t) {
	return cmn((b & d) | (c & ~d), a, b, x, s, t);
}

function hh(a, b, c, d, x, s, t) {
	return cmn(b ^ c ^ d, a, b, x, s, t);
}

function ii(a, b, c, d, x, s, t) {
	return cmn(c ^ (b | ~d), a, b, x, s, t);
}

function md51(s) {
	txt = '';
	var n = s.length,
		state = [ 1732584193, -271733879, -1732584194, 271733878 ],
		i;
	for (i = 64; i <= s.length; i += 64) {
		md5cycle(state, md5blk(s.substring(i - 64, i)));
	}
	s = s.substring(i - 64);
	var tail = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
	for (i = 0; i < s.length; i++) tail[i >> 2] |= s.charCodeAt(i) << ((i % 4) << 3);
	tail[i >> 2] |= 0x80 << ((i % 4) << 3);
	if (i > 55) {
		md5cycle(state, tail);
		for (i = 0; i < 16; i++) tail[i] = 0;
	}
	tail[14] = n * 8;
	md5cycle(state, tail);
	return state;
}

/* there needs to be support for Unicode here,
     * unless we pretend that we can redefine the MD-5
     * algorithm for multi-byte characters (perhaps
     * by adding every four 16-bit characters and
     * shortening the sum to 32 bits). Otherwise
     * I suggest performing MD-5 as if every character
     * was two bytes--e.g., 0040 0025 = @%--but then
     * how will an ordinary MD-5 sum be matched?
     * There is no way to standardize text to something
     * like UTF-8 before transformation; speed cost is
     * utterly prohibitive. The JavaScript standard
     * itself needs to look at this: it should start
     * providing access to strings as preformed UTF-8
     * 8-bit unsigned value arrays.
     */
function md5blk(s) {
	/* I figured global was faster.   */
	var md5blks = [],
		i; /* Andy King said do it this way. */
	for (i = 0; i < 64; i += 4) {
		md5blks[i >> 2] =
			s.charCodeAt(i) + (s.charCodeAt(i + 1) << 8) + (s.charCodeAt(i + 2) << 16) + (s.charCodeAt(i + 3) << 24);
	}
	return md5blks;
}

var hex_chr = '0123456789abcdef'.split('');

function rhex(n) {
	var s = '',
		j = 0;
	for (; j < 4; j++) s += hex_chr[(n >> (j * 8 + 4)) & 0x0f] + hex_chr[(n >> (j * 8)) & 0x0f];
	return s;
}

function hex(x) {
	for (var i = 0; i < x.length; i++) x[i] = rhex(x[i]);
	return x.join('');
}

function md5(s) {
	return hex(md51(s));
}

/* this function is much faster,
    so if possible we use it. Some IEs
    are the only ones I know of that
    need the idiotic second function,
    generated by an if clause.  */

function add32(a, b) {
	return (a + b) & 0xffffffff;
}

if (md5('hello') != '5d41402abc4b2a76b9719d911017c592') {
	function add32(x, y) {
		var lsw = (x & 0xffff) + (y & 0xffff),
			msw = (x >> 16) + (y >> 16) + (lsw >> 16);
		return (msw << 16) | (lsw & 0xffff);
	}
}
// --------------------------
// --------------------------
// --------------------------

// MOST USED VARIABLES

let $body = $('body');

let $emailButton = $('#email-button');

let $terminalBody = $('#terminal-body');
let $terminalContent = $('#terminal-content');

// --------------------------
// SETTING 'HIGHEST VARIABLE TO CHANGE Z-INDEX OF CLICKED ITEM

let highest = 1;

// --------------------------
// HASHING PASSWORD TO BE DISCOVERED

let password = md5('SuperPassword123');

// ATTEMPTS COUNT TO TRIGGER NOTIFICATION

let attempts = 0;

// NOTIFICATION COUNT TO SHOW EMAILS

let notification = 0;

// VERSION OF TERMINAL (TRIAL = 0, DICTIONARY = 1, SALT = 2)
let version = 0;

// INPUT HASH VARIABLE TO BE USED GLOBALLY
let input_hash = '';
let salt = '';

// --------------------------
// --------------------------
// --------------------------

// MARKUPS

let email_body_markup = `

<div id='email-body'>
    <div id='top-menu-bar'>
        
        <div id='top-circles'>
            <div class='top-circle'></div>
            <div class='top-circle'></div>
            <div class='top-circle'></div>
        </div>

        <div class='top-text'><strong>MailtoMe</strong></div>
    
    </div>
    
    <div id='top-menu'>
        
    </div>
        
    <div id='top-attach'>
        
    </div>
    
    <div id='email-list'>
        
    </div>
    <div id='email-content'>
        <div class='top-menu-text'>Body:</div>
    </div>

</div>
`;

let terminal_body_markup = `
<div id='terminal-body'>
    <div id='terminal-top'>
        <div id='top-circles'>
            <div class='top-circle'></div>
            <div class='top-circle'></div>
            <div class='top-circle'></div>
        </div>
        <div class='top-text'><strong>TERMINAL</strong></div>
    </div>
    <div id='terminal-content'>
        <div class='terminal-text'>
            --------------------- CATHASH - THE BEST PASSWORD CRACKER OF THE INTERNET ---------------------
            <br><br>
            INPUT KEY FOR DICTIONARY VERSION, SALT VERSION OR WRITE TRIAL TO CONTINUE: <input type='text' id='trial'>
            <br>
        </div>
    </div>
</div>
`;

let cathash_button_markup = `
    <div id='cathash-button'>
        <img id='hashlogo' src='hashcat.png'>
        <br>
        <span>CATHASH</span>
    </div>
`;

let password_list_button = `
    <div id='pass-list-button' class='draggable'>
        <i class="far fa-sticky-note fa-3x"></i>
        <br>
        <span>PASSWORD LIST.TXT</span>
    </div>
`;

let brute_force_try_markup = `
    <div id='pass-try'>
        -------------------------------------
        <br>
        ENTER A PASSWORD:<input type='text' id='try'>
    </div>
`;

let dic_attack_load_list = `
    <div id='dic-try'>
        -------------------------------------
        <br>
        DRAG LIST OF POSSIBLE PASSWORDS TO CATHASH
    </div>
`;

let dic_attack_start = `
    <div id='dic_attempt'>
        UPLOADING LIST...
        <br>
        STARTING DICTIONARY ATTACK
    </div>
`;

let notification_email_1 = `
    <div id='email-notification'>
        <div id='notification-text'>NEW EMAIL
            <br>
            <span>Geraldo Gomes<span>
            <br>
            <small>CatHash DIctionary Version</small>
        </div>
    </div>

`;

let notification_email_2 = `
    <div id='email-notification'>
        <div id='notification-text'>NEW EMAIL
            <br>
            <span>Geraldo Gomes<span>
            <br>
            <small>No Luck? Salt it!</small>
        </div>
    </div>

`;

let notification_email_3 = `
    <div id='email-notification'>
        <div id='notification-text'>NEW EMAIL
            <br>
            <span>Geraldo Gomes<span>
            <br>
            <small>YOU DID IT!</small>
        </div>
    </div>

`;

let salt_markup = `
    <div id='salt-input'>
        INPUT SALT: <input type='text' id='salt'>
    </div>

`;
// --------------------------
// --------------------------
// --------------------------

// FUNCTIONS TO ADD MARKUPS

function email_1_markup() {
	let top_menu_text = `
    <div class='top-menu-text'>From: <Span>Geraldo Gomes</Span></div>
    <div class='top-menu-text'>Subject: <span>Password Cracking<span></div> 
    
    `;

	let button_markup = `
        <div id='email-1-button' class='email-button'>
            <img id='profile-pic' src='/profile.png'>
            <div id='short-content'>
                <span>Geraldo Gomes<span>
                <br>
                <span><small>Password Cracking</small></span>
            </div>
        </div>
    `;

	let email_content_markup = `
        <div id='email-text' class='top-text content'>
            Hey, I heard you want to learn a bit about Password Cracking!<br><br> I'll give you a task:<br> Here's a hash: ${password}
            <br>
            I want you to break it.
            <br><br>
            A hash is a scrambled representation of a password.
            <br>
            The user's password goes through a determined hash function that adds a layer of security to it. It's not possible to revert the hash back to the password, so the only thing we can do is compare each possible         password to the hash I gave you.
            <br><br>
            Attached you'll see a software that will help you out. Just double click it and you'll have it on your desktop.
            <br><br>
            Talk to you soon!
            <br>
        </div>

    `;

	let attachment_markup = `
    <div id='cathash' class='attach-text'>CatHash.exe</div>
    `;

	if ($body.html().includes('email-body')) {
		// do nothing
	} else {
		$body.append(email_body_markup);

		let $emailContent = $('#email-content');
		let $emailList = $('#email-list');
		let $attachList = $('#top-attach');
		let $topMenu = $('#top-menu');

		$topMenu.append(top_menu_text);
		$emailContent.append(email_content_markup);
		$emailList.append(button_markup);
		$attachList.append(attachment_markup);
		$('#email-body').css('z-index', ++highest);

		$(document).on('click', '#email-1-button', function() {
			$('#email-text').remove();

			$('#email-content').append(email_content_markup);
			$('#top-attach').empty();
			$('#top-attach').append(attachment_markup);
		});

		$('#email-body').draggable({ handle: '#top-menu-bar', containment: 'parent' });
	}
}

function email_2_markup() {
	let top_menu_text = `
    <div class='top-menu-text'>From: <Span>Geraldo Gomes</Span></div>
    <div class='top-menu-text'>Subject: <span>Dictionary Version CatHash<span></div> 
    
    `;

	let button_markup = `
        <div id='email-1-button' class='email-button'>
            <img id='profile-pic' src='/profile.png'>
            <div id='short-content'>
                <span>Geraldo Gomes<span>
                <br>
                <span><small>Password Cracking</small></span>
            </div>
        </div>

        <div id='email-2-button' class='email-button'>
            <img id='profile-pic' src='/profile.png'>
            <div id='short-content'>
                <span>Geraldo Gomes<span>
                <br>
                <span><small>Dictionary Version CatHash</small></span>
            </div>
        </div>
    `;

	let email_content_markup = `
    <div id='email-text' class='top-text content'>
        Hey, my bad, I forgot to give you the key for the Dictionary Version of CatHash.
        <br>
        The key is : password123 (I know, right?!)
        <br><br>
        With the Trial version you were doing a method called BRUTE FORCE. You were basically trying random passwords and comparing hashes.<br> Chances are, you would never find the right one.
        <br><br>
        A 10 digit password, with upper and lower case letters, numbers and special characters would have 94<sup>10</sup> possible combinations!
        <br><br>
        With the dictionary version you'll be able to use another method, the DICTIONARY ATTACK. It is still a BRUTE FORCE method, but this time it uses the passwords from a list to give us a head start. Normally the list is made from most used passwords.
        <br><br> 
        Who knows, maybe the password's owner is not very creative, right?
        <br><br>
        There is a list attached to the email. Double click it to save to the desktop and them use it on CatHash.
        <br><br>
        Regards, Geraldo
    </div>
    `;

	let attachment_markup = `
    <div id='pass_list' class='attach-text'>Password_list.txt</div>
    `;

	if ($body.html().includes('email-body')) {
		// do nothing
	} else {
		$body.append(email_body_markup);

		let $emailContent = $('#email-content');
		let $emailList = $('#email-list');
		let $attachList = $('#top-attach');
		let $topMenu = $('#top-menu');

		$topMenu.append(top_menu_text);
		$emailContent.append(email_content_markup);
		$emailList.append(button_markup);
		$attachList.append(attachment_markup);
		$('#email-body').css('z-index', ++highest);

		$(document).on('click', '#email-2-button', function() {
			$('#email-text').remove();
			$('#email-content').append(email_content_markup);
			$('#top-attach').empty();
			$('#top-attach').append(attachment_markup);
		});

		$('#email-body').draggable({ handle: '#top-menu-bar', containment: 'parent' });
	}
}

function email_3_markup() {
	let top_menu_text = `
    <div class='top-menu-text'>From: <Span>Geraldo Gomes</Span></div>
    <div class='top-menu-text'>Subject: <span>No Luck? Salt it!<span></div> 
    
    `;

	let button_markup = `
        <div id='email-1-button' class='email-button'>
            <img id='profile-pic' src='/profile.png'>
            <div id='short-content'>
                <span>Geraldo Gomes<span>
                <br>
                <span><small>Password Cracking</small></span>
            </div>
        </div>

        <div id='email-2-button' class='email-button'>
            <img id='profile-pic' src='/profile.png'>
            <div id='short-content'>
                <span>Geraldo Gomes<span>
                <br>
                <span><small>Dictionary Version CatHash</small></span>
            </div>
        </div>

        <div id='email-3-button' class='email-button'>
            <img id='profile-pic' src='/profile.png'>
            <div id='short-content'>
                <span>Geraldo Gomes<span>
                <br>
                <span><small>No Luck? Salt it!</small></span>
            </div>
        </div>
    `;

	let email_content_markup = `
    <div id='email-text' class='top-text content'>
        No luck with the DICTIONARY ATTACK?
        <br><br>
        That's ok! Don't lose hope yet. As I said on the previous email, PURE DICTIONARY ATTACKS are only good for simple passwords.
        <br><br>
        There are ways to protect the password from a DICTIONARY ATTACK. One of them is called SALT.
        <br><br>
        SALT is a string addition to the user's password before it is HASHED. That way, DICTIONARY ATTACKS don't find matches when using most used password lists.
        <br><br>
        For the sake of learning, let's say that our HASH was SALTED with the string '123'. Use the code 'Seasoning' to use the SALT VERSION of CatHash, add the SALT and try the dictionary attack again.
        <br><br>
        Let's see how it goes.
        <br><br>
        Geraldo
    </div>
    `;

	if ($body.html().includes('email-body')) {
		// do nothing
	} else {
		$body.append(email_body_markup);

		let $emailContent = $('#email-content');
		let $emailList = $('#email-list');
		let $attachList = $('#top-attach');
		let $topMenu = $('#top-menu');

		$topMenu.append(top_menu_text);
		$emailContent.append(email_content_markup);
		$emailList.append(button_markup);

		$('#email-body').css('z-index', ++highest);

		$(document).on('click', '#email-3-button', function() {
			$('#email-text').remove();
			$('#email-content').append(email_content_markup);
			$('#top-attach').empty();
		});

		$('#email-body').draggable({ handle: '#top-menu-bar', containment: 'parent' });
	}
}

function email_4_markup() {
	let top_menu_text = `
    <div class='top-menu-text'>From: <Span>Geraldo Gomes</Span></div>
    <div class='top-menu-text'>Subject: <span>YOU DID IT!<span></div> 
    
    `;

	let button_markup = `
        <div id='email-1-button' class='email-button'>
            <img id='profile-pic' src='/profile.png'>
            <div id='short-content'>
                <span>Geraldo Gomes<span>
                <br>
                <span><small>Password Cracking</small></span>
            </div>
        </div>

        <div id='email-2-button' class='email-button'>
            <img id='profile-pic' src='/profile.png'>
            <div id='short-content'>
                <span>Geraldo Gomes<span>
                <br>
                <span><small>Dictionary Version CatHash</small></span>
            </div>
        </div>

        <div id='email-3-button' class='email-button'>
            <img id='profile-pic' src='/profile.png'>
            <div id='short-content'>
                <span>Geraldo Gomes<span>
                <br>
                <span><small>No Luck? Salt it!</small></span>
            </div>
        </div>

        <div id='email-4-button' class='email-button'>
            <img id='profile-pic' src='/profile.png'>
            <div id='short-content'>
                <span>Geraldo Gomes<span>
                <br>
                <span><small>YOU DID IT</small></span>
            </div>
        </div>
    `;

	let email_content_markup = `
    <div id='email-text' class='top-text content'>
        YOU DID IT! I knew you could do it! 
        <br><br>
        Now you know a bit more about how the process of cracking a password works. Of course there are more variables, like the HASH function that was used, or how many layers of encryption were used, but now you are not completely lost in your search!
        <br><br>
        Here are some useful links to help you understand some more:
        <br>
        <a href='https://spycloud.com/how-long-would-it-take-to-crack-your-password/'>How long would it take to crack your password?</a><br>
        <a href='https://spycloud.com/would-you-like-pepper-on-that-hash/'>Would You Like Pepper on That Hash?</a><br><br>
        I hope you find them useful. 
        <br>
        Good luck!<br>        
        Geraldo
    </div>
    `;

	if ($body.html().includes('email-body')) {
		// do nothing
	} else {
		$body.append(email_body_markup);

		let $emailContent = $('#email-content');
		let $emailList = $('#email-list');
		let $attachList = $('#top-attach');
		let $topMenu = $('#top-menu');

		$topMenu.append(top_menu_text);
		$emailContent.append(email_content_markup);
		$emailList.append(button_markup);

		$('#email-body').css('z-index', ++highest);

		$(document).on('click', '#email-4-button', function() {
			$('#email-text').remove();
			$('#email-content').append(email_content_markup);
			$('#top-attach').empty();
		});

		$('#email-body').draggable({ handle: '#top-menu-bar', containment: 'parent' });
	}
}

// DICTIONARY ATTACK FUNCTION

async function dictionary_attack() {
	if (version === 1) {
		for (i = 0; i <= 1000; i++) {
			let atp = `<span id='atp'> ATTEMPT ${i} of 1000</span>`;
			await sleep(10);
			$('#atp').remove();
			$('#terminal-content').append(atp);
		}
		$('#terminal-content').append(`<br><span id='atp'>NO MATCH</span>`);

		$('body').append(notification_email_2);
		$('#email-notification').css('z-index', ++highest);
		notification = 2;
	} else if (version === 2) {
		if (salt === '123') {
			for (i = 0; i <= 1000; i++) {
				let atp = `<span id='atp'> ATTEMPT ${i} of 1000</span>`;
				await sleep(10);
				$('#atp').remove();
				$('#terminal-content').append(atp);
				if (i === 875) {
					let success_markup = `
                <div id='success'>
                    YOU HAVE A MATCH!
                    <br>

                    ${input_hash} MATCHES WITH 'SuperPassword123'
                </div>

            `;
					$('#terminal-content').append(success_markup);
					$('body').append(notification_email_3);
					$('#email-notification').css('z-index', ++highest);
					notification = 3;
					return;
				}
			}
		} else {
			for (i = 0; i <= 1000; i++) {
				let atp = `<span id='atp'> ATTEMPT ${i} of 1000</span>`;
				await sleep(10);
				$('#atp').remove();
				$('#terminal-content').append(atp);
			}
			$('#terminal-content').append(`<br><span id='atp'>NO MATCH</span><br>`);
			$('#terminal-content').append(salt_markup);
		}
	}
}

// SLEEP FUNCTION

function sleep(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

// --------------------------
// --------------------------
// --------------------------

// EVENT LISTENERS

// CLOSE BUTTONS

$(document).on('click', '.top-circle', function() {
	$(this).parent().parent().parent().remove();
	version = 0;
});

// ATTACHMENTS

$(document).on('dblclick', '#cathash', function() {
	if ($('body').html().includes('cathash-button')) {
	} else {
		$('body').append(cathash_button_markup);
	}
});

$(document).on('dblclick', '#pass_list', function() {
	if ($('body').html().includes('pass-list-button')) {
	} else {
		$('body').append(password_list_button);
		$('#pass-list-button').draggable({ revert: 'invalid' });
	}

	$('#terminal-content').droppable({
		accept: '.draggable',
		drop: function(event, ui) {
			$('.draggable').remove();

			$('body').append(password_list_button);
			$('#pass-list-button').draggable({ revert: 'invalid' });

			if (version === 1 || version === 2) {
				if ($('#terminal-content').html().includes('dic-try')) {
					$('#dic_attempt').remove();
					$('#atp').remove();
					$('#terminal-content').append(dic_attack_start);
					dictionary_attack();
				}
			}
		}
	});
});

// OPENING CATHASH TERMINAL

$(document).on('click', '#cathash-button', function() {
	if ($('body').html().includes('terminal-body')) {
	} else {
		$('body').append(terminal_body_markup);
		$('#terminal-body').css('z-index', ++highest);
		$('#terminal-body').draggable({ handle: '#terminal-top', containment: 'parent' });

		$('#terminal-content').droppable({
			accept: '.draggable',
			drop: function(event, ui) {
				$('.draggable').remove();

				$('body').append(password_list_button);
				$('#pass-list-button').draggable({ revert: 'invalid' });

				if (version === 1 || version === 2) {
					if ($('#terminal-content').html().includes('dic-try')) {
						$('#dic_attempt').remove();
						$('#atp').remove();
						$('#terminal-content').append(dic_attack_start);
						dictionary_attack();
					}
				}
			}
		});

		$('#trial').focus();
	}
});

// CHANGING Z-INDEX ON CLICK

$(document).on('click', '#email-body', function() {
	$(this).css('z-index', ++highest);
});

$(document).on('click', '#terminal-body', function() {
	$(this).css('z-index', ++highest);
});

$(document).on('click', '#pass-list-button', function() {
	$(this).css('z-index', ++highest);
});

// INPUTS ON TERMINAL

// TRIAL

$(document).on('keypress', '#trial', function(e) {
	if (e.which == 13) {
		if ($('#trial').val() === '') {
			// do nothing
		} else {
			if ($('#trial').val() === 'TRIAL' || $('#trial').val() === 'trial') {
				let value = $('#trial').val();
				$('#trial').remove();

				let trial_markup = `
            <div id='trial-version'>
                <span>${value}</span><Br>
                ---- TRIAL VERSION ----<BR><br>
                HASH FUNCTION: MD5<br>
                INPUT HASH TO BE CRACKED: <input type='text' id='hash'>             
            </div>
            `;

				$('#terminal-content').append(trial_markup);

				$('#hash').focus();
			} else if ($('#trial').val() === 'password123') {
				version = 1;
				let value = $('#trial').val();
				$('#trial').remove();

				let dic_markup = `

        <div id='dic-version'>
            <span>${value}</span><Br>
            ---- DICTIONARY ATTACK ----<BR><br>
            HASH FUNCTION: MD5<br>
            INPUT HASH TO BE CRACKED: <input type='text' id='hash'>             
        </div>
            `;

				$('#terminal-content').append(dic_markup);
				$('#hash').focus();
			} else if ($('#trial').val() === 'Seasoning') {
				version = 2;
				let value = $('#trial').val();
				$('#trial').remove();

				let salt_markup = `
                <div id='salt-version'>
                    <span>${value}</span><Br>
                    ---- DICTIONARY ATTACK + SALT ----<BR><br>
                    HASH FUNCTION: MD5<br>
                    INPUT HASH TO BE CRACKED: <input type='text' id='hash'>             
                </div>
                `;
				$('#terminal-content').append(salt_markup);

				$('#hash').focus();
			} else {
				let value = $('#trial').val();
				$('#trial').remove();

				$('#terminal-content').append(
					$(`<div id='wrong-key'><span>${value}</span><br>
            INVALID KEY<br>
            INPUT KEY FOR DICTIONARY VERSION, SALT VERSION OR WRITE TRIAL TO CONTINUE:<input type='text' id='trial'>
            </div>
            `)
				);

				$('#trial').focus();
			}
		}
	}
});

//HASH TO BE CRACKED INPUT

$(document).on('keypress', '#hash', function(e) {
	if (e.which == 13) {
		if ($('#hash').val() === '') {
			// do nothing
		} else if (version === 0) {
			let value = $('#hash').val();
			input_hash = value;
			$('#hash').remove();
			$('#trial-version').append($(`<span>${value}</span>`));
			$('#terminal-content').append(brute_force_try_markup);

			$('#try').focus();
		} else if (version === 1) {
			let value = $('#hash').val();
			input_hash = value;
			$('#hash').remove();
			$('#dic-version').append($(`<span>${value}</span>`));
			$('#terminal-content').append(dic_attack_load_list);

			$('#try').focus();
		} else if (version === 2) {
			let value = $('#hash').val();
			input_hash = value;
			$('#hash').remove();
			$('#salt-version').append($(`<span>${value}</span>`));
			$('#terminal-content').append(salt_markup);

			$('#salt').focus();
		}
	}
});

// ATTEMPT TO CRACK HASH

$(document).on('keypress', '#try', function(e) {
	if (e.which == 13) {
		if ($('#try').val() === '') {
			// do nothing
		} else {
			let value_hash = md5($('#try').val());

			if (value_hash != password) {
				let value = $('#try').val();

				$('#try').remove();

				$('#terminal-content').append(
					$(`
            <div id='not_match'>
            <span>${value}</span><br>
            -------------------------------------<br>
                INPUT HASH - ${input_hash}<br>
                TRY HASH - ${value_hash}<br>
                NO MATCH
            </div>            
            `)
				);

				$('#terminal-content').append(brute_force_try_markup);

				$('#try').focus();

				attempts++;

				if (attempts == 3) {
					$body.append(notification_email_1);

					$('#email-notification').css('z-index', ++highest);
					notification = 1;
				}
			} else {
				let success_markup = `
                <div id='success'>
                    YOU HAVE A MATCH!
                    <br>

                    ${input_hash} MATCHES WITH 'SuperPassword123'
                </div>

            `;

				$('#terminal-content').append(success_markup);
			}
		}
	}
});

// SALT TRY WITH DICTIONARY

$(document).on('keypress', '#salt', function(e) {
	if (e.which === 13) {
		if ($('#salt').val() === '') {
			// do nothing
		} else {
			salt = $('#salt').val();

			$('#salt').remove();
			$('#terminal-content').append($(`<span> ${salt}</span><br>`));
			$('#terminal-content').append(dic_attack_load_list);
		}
	}
});
// EMAIL NOTIFICATIONS

$(document).on('click', '#email-notification', function() {
	if (notification === 1) {
		$('#email-notification').remove();
		$('#email-body').remove();

		email_2_markup();

		$('#email-body').css('z-index', ++highest);

		$('#email-body').draggable({ handle: '#top-menu-bar', containment: 'parent' });
	} else if (notification === 2) {
		$('#email-notification').remove();
		$('#email-body').remove();

		email_3_markup();

		$('#email-body').css('z-index', ++highest);

		$('#email-body').draggable({ handle: '#top-menu-bar', containment: 'parent' });
	} else if (notification === 3) {
		$('#email-notification').remove();
		$('#email-body').remove();

		email_4_markup();

		$('#email-body').css('z-index', ++highest);

		$('#email-body').draggable({ handle: '#top-menu-bar', containment: 'parent' });
	}
});

// EMAIL EVENT LISTENER
$emailButton.on('click', function() {
	if (notification === 0) {
		email_1_markup();
	} else if (notification === 1) {
		email_2_markup();
	} else if (notification === 2) {
		email_3_markup();
	} else if (notification === 3) {
		email_4_markup();
	}
});
