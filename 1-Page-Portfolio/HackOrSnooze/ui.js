$(async function() {
	// cache some selectors we'll be using quite a bit
	const $allStoriesList = $('#all-articles-list');
	const $submitForm = $('#submit-form');
	const $filteredArticles = $('#filtered-articles');
	const $favoritedArticles = $('#favorited-articles');
	const $loginForm = $('#login-form');
	const $createAccountForm = $('#create-account-form');
	const $ownStories = $('#my-articles');
	const $navLogin = $('#nav-login');
	const $navLogOut = $('#nav-logout');
	const $navFavorites = $('#nav-favorites');
	const $navAddStory = $('#nav-addStory');
	const $navOwnStories = $('#nav-ownStories');
	const $profileName = $('#profile-name');
	const $profileUser = $('#profile-username');
	const $profileCreated = $('#profile-account-date');

	// global storyList variable
	let storyList = null;

	// global currentUser variable
	let currentUser = null;

	await checkIfLoggedIn();

	//Event listener for deleting ownStories

	$(document).on('click' , '.trash-can', async function(evt) {
		target = evt.target
		

		const ownId = $(this).parent().attr('id');
		const token = localStorage.token
		const username = localStorage.username
		
		const updatedOwn = await User.deleteOwn(ownId, token, username)
		currentUser.ownStories = updatedOwn
		await generateOwn()
		

	});
	
	

	//Event Listener for Selecting favorites

	$(document).on('click', '.fa-star', async function(evt) {
		target = evt.target;

		$favoritedArticles.empty();

		$(target).toggleClass('far fas');

		const favId = $(this).parent().attr('id');

		const token = localStorage.token;

		const favorites = await User.updateFavorites(currentUser.username, favId, token);

		currentUser.favorites = favorites;

		for (let fav of favorites) {
			const favHTML = await generateStoryHTML(fav);
			$favoritedArticles.append(favHTML);
		}
	});

	//Event listener for own Stories

	$navOwnStories.on('click', async function() {
		hideElements();
		await generateOwn();
		$ownStories.show();
	});

	//Event listener for favorited stories

	$navFavorites.on('click', async function() {
		hideElements();
		await generateFavorites();
		$favoritedArticles.show();
	});

	//Event listener for addStory form

	$navAddStory.on('click', function() {
		hideElements();
		$allStoriesList.show();
		$submitForm.show();
	});

	//Event listener to submit story form

	$submitForm.on('submit', async function(evt) {
		evt.preventDefault();

		await submitArticle();

		await generateStories();
	});


	//function to send story to server
	async function submitArticle() {
		const token = localStorage.getItem('token');

		let author = $('#author').val();
		let title = $('#title').val();
		let url = $('#url').val();

		let newStory = {
			author,
			title,
			url
		};

		await StoryList.addStory(token, newStory);
	}

	/**
   * Event listener for logging in.
   *  If successfully we will setup the user instance
   */

	$loginForm.on('submit', async function(evt) {
		evt.preventDefault(); // no page-refresh on submit

		// grab the username and password
		const username = $('#login-username').val();
		const password = $('#login-password').val();

		// call the login static method to build a user instance
		const userInstance = await User.login(username, password);
		// set the global user to the user instance
		currentUser = userInstance;
		syncCurrentUserToLocalStorage();
		loginAndSubmitForm();
	});

	/**
   * Event listener for signing up.
   *  If successfully we will setup a new user instance
   */

	$createAccountForm.on('submit', async function(evt) {
		evt.preventDefault(); // no page refresh

		// grab the required fields
		let name = $('#create-account-name').val();
		let username = $('#create-account-username').val();
		let password = $('#create-account-password').val();

		// call the create method, which calls the API and then builds a new user instance
		const newUser = await User.create(username, password, name);
		currentUser = newUser;
		syncCurrentUserToLocalStorage();
		loginAndSubmitForm();
	});

	/**
   * Log Out Functionality
   */

	$navLogOut.on('click', function() {
		// empty out local storage
		localStorage.clear();
		// refresh the page, clearing memory
		location.reload();
	});

	/**
   * Event Handler for Clicking Login
   */

	$navLogin.on('click', function() {
		// Show the Login and Create Account Forms
		$loginForm.slideToggle();
		$createAccountForm.slideToggle();
		$allStoriesList.toggle();
	});

	/**
   * Event handler for Navigation to Homepage
   */

	$('body').on('click', '#nav-all', async function() {
		hideElements();
		await generateStories();
		$allStoriesList.show();
	});

	/**
   * On page load, checks local storage to see if the user is already logged in.
   * Renders page information accordingly.
   */

	async function checkIfLoggedIn() {
		// let's see if we're logged in
		const token = localStorage.getItem('token');
		const username = localStorage.getItem('username');

		// if there is a token in localStorage, call User.getLoggedInUser
		//  to get an instance of User with the right details
		//  this is designed to run once, on page load
		currentUser = await User.getLoggedInUser(token, username);
		await generateStories();

		if (currentUser) {
			showNavForLoggedInUser();
		}
	}

	/**
   * A rendering function to run to reset the forms and hide the login info
   */

	function loginAndSubmitForm() {
		// hide the forms for logging in and signing up
		$loginForm.hide();
		$createAccountForm.hide();

		// reset those forms
		$loginForm.trigger('reset');
		$createAccountForm.trigger('reset');

		// show the stories
		$allStoriesList.show();

		// update the navigation bar
		showNavForLoggedInUser();

		generateStories();
	}

	/**
   * A rendering function to call the StoryList.getStories static method,
   *  which will generate a storyListInstance. Then render it.
   */

	async function generateStories() {
		// get an instance of StoryList
		const storyListInstance = await StoryList.getStories();
		// update our global variable
		storyList = storyListInstance;

		// empty out that part of the page
		$allStoriesList.empty();
		// loop through all of our stories and generate HTML for them
		for (let story of storyList.stories) {
			const result = generateStoryHTML(story);
			$allStoriesList.append(result);

			if (localStorage.token !== undefined) {
				$('.far').show();
			} else {
				$('.far').hide();
			}
		}
	}

	// function to get ownStories and append to stories pages
	async function generateOwn() {
		const token = localStorage.getItem('token');
		const username = localStorage.getItem('username');
		if (localStorage.username !== undefined) {
			const res =  await User.updateArticles(token, username);

			currentUser.ownStories = res[0];
			let stories = currentUser.ownStories;
			$ownStories.empty();

			for (let story of stories) {
				const result = generateStoryHTML(story, true);
				$ownStories.append(result);
			}
		}
	}

	//function to get Fav stories and append to fav page
	async function generateFavorites() {
		const token = localStorage.token;
		const username = localStorage.username;
		if (localStorage.username !== undefined) {
			const res = await await User.updateArticles(token, username);

			currentUser.favorites = res[1];
			$favoritedArticles.empty();
			let favorites = currentUser.favorites;
			for (let fav of favorites) {
				const result = generateStoryHTML(fav);
				$favoritedArticles.append(result);
			}
		}
	}

	/**
   * A function to render HTML for an individual Story instance
   */

	function generateStoryHTML(story, isOwn) {
		let hostName = getHostName(story.url);
		let starType = isFavorite(story) ? 'fas' : 'far';

		//boolean to add trash bin on own Stories.
		const trash = isOwn
			? `<span class="trash-can">
        <i class="fas fa-trash-alt"></i>
      </span>`
			: '';

		// render story markup
		const storyMarkup = $(`
      <li id="${story.storyId}">
      ${trash}
      <i class="${starType} fa-star"></i>
        <a class="article-link" href="${story.url}" target="a_blank">
          <strong>${story.title}</strong>
        </a>
        <small class="article-author">by ${story.author}</small>
        <small class="article-hostname ${hostName}">(${hostName})</small>
        <small class="article-username">posted by ${story.username}</small>
      </li>
    `);

		return storyMarkup;
	}

	/* hide all elements in elementsArr */

	function hideElements() {
		const elementsArr = [
			$submitForm,
			$allStoriesList,
			$filteredArticles,
			$ownStories,
			$loginForm,
			$createAccountForm,
			$favoritedArticles
		];
		elementsArr.forEach(($elem) => $elem.hide());
	}

	function showNavForLoggedInUser() {
		$navLogin.hide();
		$navLogOut.show();
		$navFavorites.show();
		$navAddStory.show();
		$navOwnStories.show();

		showProfile();
	}

	/* see if a specific story is in the user's list of favorites */

	function isFavorite(story) {
		let favStoryIds = new Set();
		if (currentUser) {

			//A set work as an array of unique items. Map populates an array with the results of a function. In this case, we have a set made of the storyID results of a map through the currentUser Favorites
			
			favStoryIds = new Set(currentUser.favorites.map((obj) => obj.storyId));
		}
		return favStoryIds.has(story.storyId);
	}

	function showProfile() {
		$profileName.text(`Name: ${currentUser.name}`);
		$profileUser.text(`Username: ${currentUser.username}`);
		$profileCreated.text(`Created at: ${currentUser.createdAt}`);
	}

	/* simple function to pull the hostname from a URL */

	function getHostName(url) {
		let hostName;
		if (url.indexOf('://') > -1) {
			hostName = url.split('/')[2];
		} else {
			hostName = url.split('/')[0];
		}
		if (hostName.slice(0, 4) === 'www.') {
			hostName = hostName.slice(4);
		}
		return hostName;
	}

	/* sync current user information to localStorage */

	function syncCurrentUserToLocalStorage() {
		if (currentUser) {
			localStorage.setItem('token', currentUser.loginToken);
			localStorage.setItem('username', currentUser.username);
		}
	}
});
