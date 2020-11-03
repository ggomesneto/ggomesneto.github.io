let $close = $('#close');
let $desktop = $('#desktop');

$(document).on('click', '#close', function() {
	let $file = $(this).parent().parent();

	$file.remove();
	presentHTML = '';
	pastHTML = '';
});

$(document).on('dblclick', '#mySkills', function() {
	let markup = `
    <div id='skills'>

                    <div id='topBar'>

                        <i class="far fa-image "></i><span id='vmName'>SKILLS</span><span id='close'>x</span>
                        

                    </div>

     </div>

    `;
	$desktop.append(markup);

	$('#skills').draggable({
		containment: 'parent',
		handle: '#topBar'
	});
});

$(document).on('dblclick', '#portFile', function() {
	if ($('body')[0].innerHTML.includes('portFolder')) {
		return;
	}

	let markup = `
    
    <div id='portFolder'>
                    
    <div id='topBar'>

        <i class="fas fa-folder min"></i><span id='header'>PORTFOLIO V35.A</span><span id='close'>x</span>
        <div id='functionalBar'>
            <div id='buttons'>
                <i id='left' class="fas fa-arrow-left"></i>
            </div>
        </div>

    </div>
    <div id='folderContent'>

        <div class='folderItem text-center firstLine' id='projects'>
        <i class="far fa-folder fa-5x"></i></i><br>
            <span>Projects</span>
        </div>

        <div class='folderItem text-center firstLine' id='aboutMe'>
        <i class="far fa-file-powerpoint fa-5x"></i><br>
            <span>Photos</span>
        </div>

        <div class='folderItem text-center firstLine' id='mySkills'>
            <i class="far fa-image fa-5x "></i><br>
            <span>Skills</span>
        </div>

        <div class='folderItem text-center firstLine' id='curriculum'>
            <i class="far fa-file-alt fa-5x"></i><Br>
            <span>Curriculum Vitae</span>
        </div>

        <div class='folderItem text-center secLine' id='info'>
        <i class="far fa-address-card fa-5x"></i><Br>
            <span>Contact Info</span>
        </div>

        

    </div>
    
   
</div>

    `;
	$desktop.append(markup);

	presentHTML = $('body')[0].innerHTML;

	$('#portFolder').draggable({
		containment: 'parent',
		handle: '#topBar'
	});
});

$(document).on('dblclick', '#projects', function() {
	$('#folderContent').empty();

	let markup = `
    



<div class='folderItem text-center firstLine' id='hackerNews'>
<img src='Hacker-News.jpg'><br>
    <span>Hack or Snooze</span>
</div>



<div id='latDetail'></div>

    `;

	$('#folderContent').append(markup);
	$('#header').text('Projects');

	pastHTML = presentHTML;
	presentHTML = $('body')[0].innerHTML;
});

$(document).on('click', '#left', function() {
	$('#folderContent').empty();

	let markup = `

    <div class='folderItem text-center firstLine' id='projects'>
    <i class="far fa-folder fa-5x"></i><br>
            <span>Projects</span>
        </div>

        <div class='folderItem text-center firstLine' id='aboutMe'>
        <i class="far fa-file-powerpoint fa-5x"></i><br>
            <span>Photos</span>
        </div>

        <div class='folderItem text-center firstLine' id='mySkills'>
            <i class="far fa-image fa-5x "></i><br>
            <span>Skills</span>
        </div>

        <div class='folderItem text-center firstLine' id='curriculum'>
            <i class="far fa-file-alt fa-5x"></i><Br>
            <span>Curriculum Vitae</span>
        </div>

        <div class='folderItem text-center secLine' id='info'>
        <i class="far fa-address-card fa-5x"></i><Br>
            <span>Contact Info</span>
        </div>
    
    `;
	$('#folderContent').append(markup);
	$('#header').text('PORTFOLIO V35.A');
});

$(document).on('dblclick', '#aboutMe', function() {
	if ($('body')[0].innerHTML.includes('aboutMeFile')) {
		return;
	}

	let markup = `
    <div id='aboutMeFile'>

                    <div id='topBar'>

                        <i class="far fa-image "></i><span id='vmName'>Photos</span><span id='close'>x</span>

                        

                    </div>

                    <div class='slidePhoto' id='slideLeft'><i id='leftArrow' class="fas fa-arrow-left fa-3x"></i></div>
                    <div class='slidePhoto' id='slideRight'><i id='rightArrow' class="fas fa-arrow-right fa-3x"></i></div>

                    
                    

     </div>`;
	$desktop.append(markup);

	let backgroundDiv = $('#aboutMeFile');
	backgroundDiv.css('background-image', 'url(about-1.jpg)');

	$('#aboutMeFile').draggable({
		containment: 'parent',
		handle: '#topBar'
	});

	$(document).on('click', '#rightArrow', function() {
		let url = backgroundDiv.css('background-image');

		if (url.includes('about-1')) {
			backgroundDiv.css('background-image', 'url(about-2.jpg)');
		} else if (url.includes('about-2')) {
			backgroundDiv.css('background-image', 'url(about-3.jpg)');
		} else if (url.includes('about-3')) {
			backgroundDiv.css('background-image', 'url(about-1.jpg)');
		}
	});

	$(document).on('click', '#leftArrow', function() {
		let url = backgroundDiv.css('background-image');

		if (url.includes('about-1')) {
			backgroundDiv.css('background-image', 'url(about-3.jpg)');
		} else if (url.includes('about-2')) {
			backgroundDiv.css('background-image', 'url(about-1.jpg)');
		} else if (url.includes('about-3')) {
			backgroundDiv.css('background-image', 'url(about-2.jpg)');
		}
	});
});

$(document).on('dblclick', '#info', function() {
	$('#contactCard').remove();
	let markup = `
    <div class='text-center' id='contactCard'>
    
    <div id='cardBar'>

         <span id='close'>x</span>

    </div>

    

    <div  id='Info'>

    <div id='logo'>G|</DIV>
    
    
    <span id='cName' >GERALDO GOMES</SPAN><Br>
    <SPAN>GGOMESNETO@GMAIL.COM</SPAN><br>
    <A HREF='HTTPS://GGOMESNETO.GITHUB.IO'>PORTFOLIO</A><SPAN>|</SPAN><A HREF='HTTPS://LINKEDIN.COM/IN/GGOMESNETO'>LINKEDIN</A><SPAN>|</SPAN>
    <A HREF='https://github.com/ggomesneto/'>MY GITHUB</A><BR><br>
    <SPAN>AUSTIN, TEXAS</SPAN>
    
    
    
    </div>
    
    


    
    </div>
    
    `;

	$('#folderContent').append(markup);

	$('#contactCard').draggable({
		containment: 'parent'
	});

	$('#info').draggable({
		containment: 'parent'
	});
});

$('#virtualMachine').draggable({
	containment: 'parent',
	handle: '#topBar'
});
