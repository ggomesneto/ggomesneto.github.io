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
        <i class="far fa-folder fa-5x"></i></i><br>
            <span>Projects</span>
        </div>

        <div class='folderItem text-center firstLine' id='aboutMe'>
        <i class="far fa-file-powerpoint fa-5x"></i><br>
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

        <div class='folderItem text-center secLine' id='info'>
        <i class="far fa-address-card fa-5x"></i><Br>
            <span>Contact Info</span>
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

<div class='folderItem text-center firstLine' id='jeopardy'>
<img src='jeopardy.jpg'><br>
    <span>Jeopardy</span>
</div>

<div class='folderItem text-center firstLine' id='hackerNews'>
<img src='Hacker-News.jpg'><br>
    <span>Hack or Snooze</span>
</div>

<div class='folderItem text-center secLine' id='connect'>
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
    <i class="far fa-folder fa-5x"></i><br>
            <span>Projects</span>
        </div>

        <div class='folderItem text-center firstLine' id='aboutMe'>
        <i class="far fa-file-powerpoint fa-5x"></i><br>
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

        <div class='folderItem text-center secLine' id='info'>
        <i class="far fa-address-card fa-5x"></i><Br>
            <span>Contact Info</span>
        </div>
    
    `;
	$('#folderContent').append(markup);
	$('#header').text('PORTFOLIO V35.A');
});

$(document).on('dblclick', '#aboutMe', function() {
	let markup = `
    <div id='aboutMeFile'>

                    <div id='topBar'>

                        <i class="far fa-image "></i><span id='vmName'>About Me</span><span id='close'>x</span>

                        

                    </div>
                    
                    <div class='text-center' id='latDetail'>
                    
                    <br>
       
        <br>
        <br>
        <br>
        <br>
        <span  class='title'>THAT'S ME WORKING OFFSHORE WHEN I WAS 23.</SPAN><br><br>
        <span>I WAS RESPONSIBLE FOR ALL THE LOGGING-WHILE-DRILLING (LWD) DATA AND EQUIPMENT ON OFFSHORE WELLS.</SPAN><br><br>
        <span>DURING MY TIME WORKING IN THE OILFIELD I WENT FROM AN <Strong>INTERN</Strong> IN BRAZIL TO A <Strong>SENIOR</Strong> LWD SPECIALIST, WORKING IN THE <Strong>US, RUSSIA, UAE AND A COUPLE OF OTHER COUNTRIES.</Strong> </SPAN><br><br>
        <SPAN> THIS PHOTO WAS AFTER 43 DAYS STRAIGHT WORKING 12H/DAY. I WAS FEELING MORE PIRATE THAN EVER</SPAN>
        <br>
        <br>
        <i id='right' class="fas fa-arrow-right fa-3x"></i>

                    </div>

     </div>`;
	$desktop.append(markup);

	let backgroundDiv = $('#aboutMeFile');
	backgroundDiv.css('background-image', 'url(about-1.jpg)');

	$(document).on('click', '#right', function() {
		let url = backgroundDiv.css('background-image');

		if (url.includes('about-1')) {
			backgroundDiv.css('background-image', 'url(about-2.jpg)');

			$('#latDetail').empty();

			let markup = `
       
        <br>
        <br>
        <br>
        <br>
        <br>
        <span  class='title'>THAT'S ME PLAYING POKER</SPAN><br><br>
        <span>AFTER WORKING FOR ALMOST A DECADE OFFSHORE, I DECIDED TO TURN A HOBBY INTO A CAREER</SPAN><br><br>
        <span>DURING <STRONG>3 YEARS</STRONG>, I TRAVELLED THROUGH BRAZIL AND THE USA PLAYING POKER. LIFE WAS GOOD, BUT THERE WAS NO FINANCIAL STABILITY. </SPAN><br><span>THE BEST THING ABOUT THAT MOMENT WAS THAT IF I HAVE NEVER TRIED IT, I WOULDN'T MEET THE <STRONG>LOVE OF MY LIFE</STRONG></SPAN><br>
        <br>
        <br>
        <br>
        
        <i id='right' class="fas fa-arrow-right fa-3x"></i>
        
        
        `;
			$('#latDetail').append(markup);
		} else if (url.includes('about-2')) {
			backgroundDiv.css('background-image', 'url(about-3.jpg)');

			$('#latDetail').empty();

			let markup = `
        <br>
        
        
        <span class='title' >THAT'S MY FAMILY</SPAN><br><br>
        <span>NOW YOU PROBABLY UNDERSTAND WHY I'M TRYNG TO TRANSIT FROM THE OILFIELD TO THE TECH FIELD<br></SPAN>
        <span>(AND IS NOT BECAUSE I PROBABLY FIT ON THE STEREOTYPE OF THE <br>'TECH GUY').</SPAN><br><br>   
        <span>I WORKED WITH THE BEST PEOPLE AND TECHNOLOGY POSSIBLE IN THE OILFIELD, AND I WAS EXPECTED TO EXCEL IN EVERYTHING, NOT ONLY BY MY MANAGERS BUT ALSO BY MYSELF, SO I'M SURE I CAN KEEP UP WITH THE GOOD WORK AS A SOFTWARE ENGINEER. </SPAN><br><BR>
        <span>AND I CAN BE DOING SOMETHING USEFUL AND PLEASENT AT THE SAME TIME: WORKING ON TOP NOTCH TECHNOLOGY AND NOT BEING AWAY FROM HOME ANYMORE.</SPAN>
        <br>
        <br>
        <i id='right' class="fas fa-arrow-right fa-3x"></i>
        
        
        `;
			$('#latDetail').append(markup);
		} else if (url.includes('about-3')) {
			backgroundDiv.css('background-image', 'url(about-1.jpg)');
			$('#latDetail').empty();

			let markup = `
    
        <br>
        <br>
        <br>
        <br>
        <br>
        <span  class='title'> THAT'S ME WORKING OFFSHORE WHEN I WAS 23.</SPAN><br><br>
        <span>I WAS RESPONSIBLE FOR ALL THE LOGGING-WHILE-DRILLING (LWD) DATA AND EQUIPMENT ON OFFSHORE WELLS.</SPAN><br><br>
        <span>DURING MY TIME WORKING IN THE OILFIELD I WENT FROM AN <Strong>INTERN</Strong> IN BRAZIL TO A <Strong>SENIOR</Strong> LWD SPECIALIST, WORKING IN THE <Strong>US, RUSSIA, UAE AND A COUPLE OF OTHER COUNTRIES.</Strong> </SPAN><br><br>
        <SPAN> THIS PHOTO WAS AFTER 43 DAYS STRAIGHT WORKING 12H/DAY. I WAS FEELING MORE PIRATE THAN EVER</SPAN>
        <br>
        <br>
        <i id='right' class="fas fa-arrow-right fa-3x"></i>
        
        
        `;
			$('#latDetail').append(markup);
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
});
