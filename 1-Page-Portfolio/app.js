const tl = gsap.timeline({ defaults: { ease: 'power1.out' } });

(function() {
	var SELECTOR_SCREEN_ELEMENT = '.screen';
	var SELECTOR_SWITCHER_TV = '#switcher-tv';

	var isTurnedOn = true;

	var timeline;

	function buildTimeline() {
		timeline = new TimelineMax({
			paused: true
		});

		timeline
			.to(SELECTOR_SCREEN_ELEMENT, 0.2, {
				width: '100vw',
				height: '2px',
				background: '#ffffff',
				ease: Power2.easeOut
			})
			.to(SELECTOR_SCREEN_ELEMENT, 0.2, {
				width: '0',
				height: '0',
				background: '#ffffff'
			});
	}

	function toggleSwitcherTV() {
		if (isTurnedOn) {
			timeline.restart();
		}

		if (!isTurnedOn) {
			timeline.reverse();
		}

		isTurnedOn = !isTurnedOn;
	}

	// Initialize
	$(document).ready(buildTimeline);

	// Bindings
	$(document).on('click', SELECTOR_SWITCHER_TV, function() {
		let Text = $(`${SELECTOR_SWITCHER_TV}`)[0];

		if (Text.innerText === 'portfolio') {
			$('.multi-button').remove();
			tl.restart();
			showText();
		} else {
			$('#virtualMachine').remove();
			Text.innerText = 'portfolio';
		}

		toggleSwitcherTV();
	});
})();

function showText() {
	tl.to('.terminalText', { width: '100%', duration: 3, stagger: 2 }).add(function() {
		addVM();
	});
}

function addVM() {
	let markup = `
<div id='virtualMachine'>
            <div id='topBar'>
               <span id='vmName'>Geraldo's Virtual Machine</span>
            </div>
            <div id='desktop'>

                

                <div class=' text-center' id='connect'>
                    <img src='img/connect-card.png'><br>
                        
                </div>

                <div class='text-center' id='jeopardyGame'>
                    <img src='img/jeopardy.jpg'><br>
                        
                </div>

                <div class='text-center' id='memoryGame'>
                    <img src='img/memory-card.jpg'><br>
                   
                </div>

                <div class='folderItem text-center firstLine' id='hackerNews'>
                    <a href='/HackOrSnooze/index.html' target='_blank'><img src='img/Hacker-News.jpg'></a><br>
                      
                </div>

            
            </div>


        </div>
`;

	$('#terminal').append(markup);

	let button = `
	<div class='multi-button'>
        <button id="switcher-tv">GO BACK</button>
        <button id="about">ABOUT</button>
        </div>
	`;

	$('#footer').prepend(button);

	$('#virtualMachine').draggable({
		containment: 'parent',
		handle: '#topBar'
	});

	$('#virtualMachine').resizable({
		containment: 'parent'
	});
}

// -------------------------------

let $close = $('#close');
let $desktop = $('#desktop');

$(document).on('click', '#close', function() {
	let $file = $(this).parent().parent();

	$file.remove();
});

$(function() {
	$('[data-toggle="tooltip"]').tooltip();
});
