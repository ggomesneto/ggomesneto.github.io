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
            <i class="fas fa-folder fa-5x min"></i><br>
            <span>Projects</span>
        </div>

        <div class='folderItem text-center firstLine' id='aboutMe'>
            <i class="fas fa-folder fa-5x min"></i><br>
            <span>About Me</span>
        </div>

        <div class='folderItem text-center firstLine' id='mySkills'>
            <i class="far fa-image fa-5x "></i><br>
            <span>Skills</span>
        </div>

        <div class='folderItem text-center firstLine' id='curriculum'>
            <i class="far fa-file-alt fa-5x"></i><Br>
            <span>Curriculum Vitae</span>
        </div>

        <div class='folderItem text-center secLine' id='email'>
            <i class="far fa-envelope-open fa-3x"></i><Br>
            <span>Email</span>
        </div>

        

    </div>
    
   
</div>

    `;
	$desktop.append(markup);

	presentHTML = $('body')[0].innerHTML;
});

$(document).on('dblclick', '#projects', function() {
	$('#folderContent').empty();

	let markup = `
    <div class='folderItem text-center firstLine' id='memoryGame'>
    <img src='memory-card.jpg'><br>
    <span>Memory Game</span>
</div>

<div class='folderItem text-center firstLine' id='aboutMe'>
<img src='jeopardy.jpg'><br>
    <span>Jeopardy</span>
</div>

<div class='folderItem text-center firstLine' id='mySkills'>
<img src='Hacker-News.jpg'><br>
    <span>Hack or Snooze</span>
</div>

<div class='folderItem text-center firstLine' id='curriculum'>
<img src='connect-card.png'><br>
    <span>Connect Four</span>
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
            <i class="fas fa-folder fa-5x min"></i><br>
            <span>Projects</span>
        </div>

        <div class='folderItem text-center firstLine' id='aboutMe'>
            <i class="fas fa-folder fa-5x min"></i><br>
            <span>About Me</span>
        </div>

        <div class='folderItem text-center firstLine' id='mySkills'>
            <i class="far fa-image fa-5x "></i><br>
            <span>Skills</span>
        </div>

        <div class='folderItem text-center firstLine' id='curriculum'>
            <i class="far fa-file-alt fa-5x"></i><Br>
            <span>Curriculum Vitae</span>
        </div>

        <div class='folderItem text-center secLine' id='email'>
            <i class="far fa-envelope-open fa-3x"></i><Br>
            <span>Email</span>
        </div>
    
    `;
	$('#folderContent').append(markup);
	$('#header').text('PORTFOLIO V35.A');
});
