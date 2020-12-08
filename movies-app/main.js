const API_KEY = '2afb754820db7bbf3a225c394207e494';
const API_URL = 'https://api.themoviedb.org/3';

let nextPage;

async function getTrendingMovies() {
	$('#movie-wrapper').empty();
	const res = await axios.get(`${API_URL}/trending/movie/week?api_key=${API_KEY}&page=1`);
	dataArr = res.data.results;

	let result = dataArr.map((movie) => new Movie(movie));

	for (movie of result) {
		generateHTML(movie);
	}

	nextPage = `${API_URL}/trending/movie/week?api_key=${API_KEY}&page=`;
}

async function getMovie(id) {
	$('#movie-wrapper').empty();
	const res = await axios.get(`${API_URL}/movie/${id}?api_key=${API_KEY}`);
	const dataArr = res.data.results;

	let result = dataArr.map((movie) => new Movie(movie));

	for (movie of result) {
		generateHTML(movie);
	}
}

class Movie {
	constructor(Obj) {
		this.title = Obj.title;
		this.overview = Obj.overview;
		this.popularity = Obj.vote_average;
		this.poster = `https://image.tmdb.org/t/p/original/${Obj.poster_path}`;
	}
}

function generateHTML(movie) {
	let { title, overview, popularity, poster } = movie;
	let color;
	if (popularity < 4.5) {
		color = 'red';
	} else if (popularity < 7) {
		color = 'yellow';
	} else {
		color = 'green';
	}

	let markup = `
    <div class='movie-card'>
        <img src='${poster}'>
        <div class='movie-info'>
            <div class='movie-title'>${title}</div>
            <div class='movie-popularity ${color}'>${popularity}</div>
        </div>
        <div class='movie-overview'>${overview}</div>
    </div>
    `;
	$('#movie-wrapper').append(markup);
}

async function getGenre(genre_id) {
	$('#movie-wrapper').empty();

	const res = await axios.get(`${API_URL}/discover/movie?api_key=${API_KEY}&with_genres=${genre_id}&page=1`);
	dataArr = res.data.results;

	let result = dataArr.map((movie) => new Movie(movie));

	for (movie of result) {
		generateHTML(movie);
	}

	nextPage = `${API_URL}/discover/movie?api_key=${API_KEY}&with_genres=${genre_id}&page=`;
}

let pagenum = 2;
$('#movie-wrapper').scroll(async function() {
	if ($('.movie-card').length < 21) {
		pagenum = 2;
	}

	if ($(this).scrollTop() + $(this).innerHeight() >= $(this)[0].scrollHeight) {
		let res = await axios.get(`${nextPage}${pagenum}`);
		let dataArr = res.data.results;

		let result = dataArr.map((movie) => new Movie(movie));
		pagenum++;
		for (let movie of result) {
			generateHTML(movie);
		}
	}
});

$(document).on('click', '.genre', function(e) {
	e.preventDefault();

	genre = $(this).attr('data-id');
	getGenre(genre);
});

$(document).on('click', '.trending', function() {
	getTrendingMovies();
});

$(document).on('submit', '#search', function() {});

$(document).on('keypress', '#search', async function(e) {
	if (e.which == 13) {
		movie = $('#search').val();
		try {
			$('#movie-wrapper').empty();
			const res = await axios.get(`${API_URL}/movie/${id}?api_key=${API_KEY}`);
			const dataArr = res.data.results;

			let result = dataArr.map((movie) => new Movie(movie));

			for (movie of result) {
				generateHTML(movie);
			}
		} catch (e) {
			let markup = `<div class='error'>NO MOVIE FOUND</div>`;
			$('#movie-wrapper').append(markup);
		}
		$('#search').val('');
	}
});

getTrendingMovies();
