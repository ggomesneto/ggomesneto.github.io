//categories get the organized content of each category
let categories = [];
	
//catIdArr get the Ids of each chosen categories
let catIdArr = [];

class NewGame {
	constructor() {
		categories = []
		catIdArr = []
		this.setupAndStart()
	}

		//Getting Category ID from API
	async  getCategoryIds() {
	const catQty = 6;

	let res = await axios.get('http://jservice.io/api/categories', { params: { count: 100 } });
	let catList = res.data;

	//while to repeat getting the random category until we have 6 different ones
	while (this.catIdArr.length < catQty) {
		let random = Math.floor(Math.random() * 100);

		let category = catList[random].id;
		if (this.catIdArr.includes(category)) {
		} else {
			this.catIdArr.push(category);
		}
	}
	}

	//Using ID to get clues from each category, organizing it in an object and pushing to the categories array
	async  getCategory(catId) {
		
	//for loop to go through each category
		for (let cat of catId) {

			let idCat = cat;
			let res = await axios.get(`http://jservice.io//api/category/`, { params: { id: idCat } });
		
			let clues = res.data.clues;
			//organizing array of clues with 'showing' status
			let clueArray = [];
			for (let i = 0; i < clues.length; i++) {
				let { question, answer } = clues[i];

				let clueObj = {
					question,
					answer,
					showing: null
				};

				clueArray.push(clueObj);
			}
			//organizing object to be pushed to 'categories'
			let catInfo = {
				title: res.data.title,
				clues: clueArray
			};

			categories.push(catInfo);
		}

	}

	// Creating HTML file. Putting data attributes on each td so we can change their content when needed.
	async  fillTable() {
		//hide the spinner
		this.hideLoadingView()
		
		let numCat = 6;

		let questions = 5;
		//creating table
		$('<table>')
			.attr({
			id: 'htmlBoard',
			class: 'mx-auto'
		})
			.appendTo('.container-fluid');

		//creating top column with the category names
		let top = $('<thead>')
			.attr({
				id: 'column-top'
			})
			.appendTo('table');

		let topCat = $('<tr>').appendTo(top);

		//adding each category name to the 'td' created
		for (let i = 0; i < numCat; i++) {
			$(`<td>${categories[i].title.toUpperCase()}</td>`)
				.attr({
					id: i
				})
				.appendTo(topCat);
	}
	//creating body

	let tbody = $('<tbody>').appendTo('table');

	//creating 5 'td' inside each 'tr'. Adding '?' as content and putting data attributes x and y
	for (let i = 0; i < questions; i++) {
		let row = $('<tr>').appendTo(tbody);

		for (let j = 0; j < numCat; j++) {
			$(`<td><span class='display-3'>?</span></td>`)
				.attr({
					id: `${i}-${j}`,
					x: i,
					y: j
				}).on('click', this.handleClick).appendTo(row);
		}
	}
	}

	//Handle click to check status from null to showing and from showing to answer
	 handleClick(evt) {
		//associating attributes to variables

		let x = $(this).attr(`x`);
		let y = $(this).attr(`y`);
		
		let showing = categories[y].clues[x].showing;
		console.log(showing)
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

	//Adding the loading spinner
		 showLoadingView() {
		//making sure there is no table on the DOM and clearing the arrays
		$('table').remove();
		categories = [];
		this.catIdArr = [];
		//adding spinner to the DOM

		let spinner = $(`<div class="spinner-border m-5" role="status">
    	<span class="sr-only">Loading...</span></div>`);

		spinner.appendTo($('.container-fluid'));
	}

	//Removing the loading spinner when the table is filled with content
	hideLoadingView() {

		$('.spinner-border').remove();
	}

	//Combination of functions to start a new game
	async  setupAndStart() {
		//hide loading to avoid having more than 1 spinner on the DOM
		this.hideLoadingView()
		//adding the spinner
		this.showLoadingView();
		//getting the ID
		await this.getCategoryIds();
		//getting data
		
		await this.getCategory(this.catIdArr);
		//creating TABLE
		await this.fillTable(categories);
	}

}


// Creating name of the game + Restart Button
$('<div>JEOPARDY</div>')
	.attr({
		class: 'container text-center display-4'
	})
	.appendTo(`.container-fluid`);

$(`<button class='btn btn-success mb-3'>Restart</button><br>`)
	.on('click', function() {
		new NewGame()
	})
	.appendTo(`.container-fluid`);


	