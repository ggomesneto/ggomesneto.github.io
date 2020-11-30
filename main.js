$('#me').on('click', function() {
	$('#footer').empty();
	let markup = `

	<P id='about' class='button'>ABOUT</P>
	<P id='toolkit' class='button'>TOOLKIT</P>
	<p id='contact' class='button'>CONTACT</p>
	`;

	$('#footer').append(markup);
	$('#footer').toggleClass('show hide');
});

$(document).on('click', '#about', function() {
	$('#footer').empty();
	let markup = `
	
	<p>Hey, I'm Geraldo.</p>
                        <p>
                            <i class="fas fa-laptop-code"></i> Software Engineer<br>
                            <i class="fas fa-cloud"></i> AWS Certified<br>
                            <i class="fas fa-code"></i> Boot Camp Graduate</p>
	
	
	
	`;

	$('#footer').append(markup);
});

$(document).on('click', '#toolkit', function() {
	$('#footer').empty();
	let markup = `
	
	<p>TOOLKIT</p>
                        <img data-toggle="tooltip" data-placement="top" title="BootStrap" src='img/bootstrap.png'>
                        <img data-toggle="tooltip" data-placement="top" title="CSS" src='img/css.png'>
                        <img data-toggle="tooltip" data-placement="top" title="Git" src='img/git.png'><br>
                        <img data-toggle="tooltip" data-placement="top" title="HTML5" src='img/html5.png'>
                        <img data-toggle="tooltip" data-placement="top" title="JavaScript" src='img/javascript.png'>
                        <img data-toggle="tooltip" data-placement="top" title="MongoDB" src='img/mongodb.png'><br>
                        <img data-toggle="tooltip" data-placement="top" title="NodeJS" src='img/nodejs.png'>
                        <img data-toggle="tooltip" data-placement="top" title="PostgreSQL" src='img/postgres.png'>
                        <img data-toggle="tooltip" data-placement="top" title="Python" src='img/python.png'><br>
                        <img data-toggle="tooltip" data-placement="top" title="React" src='img/react.png'>
                        <img data-toggle="tooltip" data-placement="top" title="VSCode" src='img/vscode1.png'></img>
	`;

	$('#footer').append(markup);
	$(function() {
		$('[data-toggle="tooltip"]').tooltip();
	});
});

$(document).on('click', '#contact', function() {
	$('#footer').empty();
	let markup = `
	
	<p><a href='https://linkedin.com/in/ggomesneto'>LINKEDIN</a> | <a href='https://github.com/ggomesneto'>GITHBUB</a> | <A href='https://drive.google.com/file/d/18Ba4_hL8BmGvszqbBasiC02MONelZA2w/view?usp=sharing'>CURRICULUM</A> | GGOMESNETO@GMAIL.COM</P>
	
	
	
	`;

	$('#footer').append(markup);
});
