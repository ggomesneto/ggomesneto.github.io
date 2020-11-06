//categories get the organized content of each category
let categories = [];

//catIdArr get the Ids of each chosen categories
let catIdArr = [];

//Event listener for all 'td' on the page (Even the ones that don't exist when the page first load)
$(document).on('click', 'tbody td', handleClick);

// ------------------------------- FUNCTIONS ----------------------------

//Getting Category ID from API
async function getCategoryIds() {
	const catQty = 6;

	let res = await axios.get('https://jservice.io/api/categories', { params: { count: 100 } });
	let catList = res.data;

	//while to repeat getting the random category until we have 6 different ones
	while (catIdArr.length < catQty) {
		let random = Math.floor(Math.random() * 100);

		let category = catList[random].id;
		if (catIdArr.includes(category)) {
		} else {
			catIdArr.push(category);
		}
	}
}

//Using ID to get clues from each category, organizing it in an object and pushing to the categories array
async function getCategory(catId) {
	//for loop to go through each category
	for (cat of catId) {
		let idCat = cat;
		let res = await axios.get(`https://jservice.io//api/category/`, { params: { id: idCat } });

		let clues = res.data.clues;
		//organizing array of clues with 'showing' status
		let clueArray = [];
		for (i = 0; i < clues.length; i++) {
			let { question, answer } = clues[i];

			let clueObj = {
				question,
				answer,
				showing: null
			};

			clueArray.push(clueObj);
		}
		//organizing object to be pushed to 'categories'
		catInfo = {
			title: res.data.title,
			clues: clueArray
		};

		categories.push(catInfo);
	}
}

// Creating HTML file. Putting data attributes on each td so we can change their content when needed.
async function fillTable() {
	//hide the spinner
	hideLoadingView();

	let numCat = 6;

	let questions = 5;
	//creating table
	$('<table>')
		.attr({
			id: 'htmlBoard',
			class: 'mx-auto'
		})
		.appendTo('.jeopardy');

	//creating top column with the category names
	let top = $('<thead>')
		.attr({
			id: 'column-top-jeopardy'
		})
		.appendTo('#htmlBoard');

	let topCat = $('<tr>').appendTo(top);

	//adding each category name to the 'td' created
	for (i = 0; i < numCat; i++) {
		$(`<td class='tdHead'>${categories[i].title.toUpperCase()}</td>`)
			.attr({
				id: i
			})
			.appendTo(topCat);
	}
	//creating body

	let tbody = $('<tbody>').appendTo('#htmlBoard');

	//creating 5 'td' inside each 'tr'. Adding '?' as content and putting data attributes x and y
	for (i = 0; i < questions; i++) {
		let row = $('<tr>').appendTo(tbody);

		for (j = 0; j < numCat; j++) {
			$(`<td class='tdJeopardy' ><span class='display-3'>?</span></td>`)
				.attr({
					x: i,
					y: j
				})
				.appendTo(row);
		}
	}
}

//Handle click to check status from null to showing and from showing to answer
function handleClick(evt) {
	//associating attributes to variables

	let x = $(this).attr(`x`);
	let y = $(this).attr(`y`);
	let showing = categories[y].clues[x].showing;

	//Ifs to determine what to show on each 'td'
	if (showing === null) {
		let ques = categories[y].clues[x].question;
		$(this).html(ques);
		categories[y].clues[x].showing = `question`;
	} else if (showing === `question`) {
		let ans = categories[y].clues[x].answer;
		$(this).html(ans);
		categories[y].clues[x].showing = 'answer';
	}
}

// Adding the loading spinner
function showLoadingView() {
	//making sure there is no table on the DOM and clearing the arrays
	$('table').remove();
	categories = [];
	catIdArr = [];
	//adding spinner to the DOM

	let spinner = $(`<div class="spinner-border m-5" role="status">
    <span class="sr-only">Loading...</span></div>`);

	spinner.appendTo($('.jeopardy'));
}

// Removing the loading spinner when the table is filled with content
function hideLoadingView() {
	$('.spinner-border').remove();
}

//Combination of functions to start a new game
async function setupAndStart() {
	//hide loading to avoid having more than 1 spinner on the DOM
	hideLoadingView();
	//adding the spinner
	showLoadingView();
	//getting the ID
	await getCategoryIds();
	//getting data
	await getCategory(catIdArr);
	//creating TABLE
	await fillTable(categories);
}

//Calling the function so we have a game when the page is first loaded

$('.openJeopardy').on('click', openJeopardy);

$('#jeopardy').toggle();

function openJeopardy() {
	$('#jeopardy').toggle();
}

$(document).on('click', '#jeopardyGame', function() {
	if ($('body')[0].innerHTML.includes(`container-fluid text-center jeopardy`)) {
		return;
	}
	let markup = `
	
	<div class='text-center' id='Jeopardy'>
                    
    	<div id='topBar'>

        	<span id='header'>JEOPARDY</span><span id='close'>x</span>
        

		</div>
		<Br>
		

	<div class='container-fluid text-center jeopardy'>
      
	  </div>
	  
	</div>
	
	`;

	$('.area').prepend(markup);

	$('#Jeopardy').draggable({
		containment: $('#Jeopardy').parent().parent().parent(),
		handle: '#topBar'
	});

	$('#Jeopardy').resizable();

	// Creating name of the game + Restart Button
	$('<div>JEOPARDY</div>')
		.attr({
			class: 'display-4'
		})
		.appendTo(`.jeopardy`);

	$(`<button class='btn btn-success mb-3'>Restart</button><br>`)
		.on('click', function() {
			setupAndStart();
		})
		.appendTo(`.jeopardy`);

	setupAndStart();
});
