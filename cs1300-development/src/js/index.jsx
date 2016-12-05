// Declare the required files
var React                   = require('react');
var ReactDOM                = require('react-dom');
var MovieComponent			= require("./components/MovieComponent.jsx");
var MovieListComponent		= require("./components/MovieListComponent.jsx");

// Declare the movie data
var doctorStrangeData = {
	key: 1,
	title: "Doctor Strange",
	release: new Date(2016, 10, 4, 0, 0, 0, 0),
	poster: "src/js/doctorStrangePoster.jpg",
	critScore: 9.1,
	critLink: "https://www.rottentomatoes.com/m/doctor_strange_2016",
	audienceScore: 7.9,
	audienceLink: "http://www.imdb.com/title/tt1211837/",
	userScore: 9.5,
	canWatch: "theater",
	toWatch: "rewatch"
};

var moanaData = {
	key: 2,
	title: "Moana",
	release: new Date(2016, 10, 23, 0, 0, 0, 0),
	poster: "src/js/moanaPoster.jpg",
	critScore: 9.7,
	critLink: "https://www.rottentomatoes.com/m/moana_2016",
	audienceScore: 8.3,
	audienceLink: "http://www.imdb.com/title/tt3521164/",
	userScore: -1,
	canWatch: "theater",
	toWatch: "watch"
};

var httydData = {
	key: 3,
	title: "How To Train Your Dragon",
	release: new Date(2010, 2, 26, 0, 0, 0, 0),
	poster: "src/js/httydPoster.jpg",
	critScore: 9.8,
	critLink: "https://www.rottentomatoes.com/m/1194522-how_to_train_your_dragon",
	audienceScore: 8.2,
	audienceLink: "http://www.imdb.com/title/tt0892769/",
	userScore: 10,
	canWatch: "dvd",
	toWatch: "none"
};

var avatarData = {
	key: 4,
	title: "Avatar",
	release: new Date(2009, 11, 18, 0, 0, 0, 0),
	poster: "src/js/avatarPoster.jpg",
	critScore: 8.3,
	critLink: "https://www.rottentomatoes.com/m/avatar",
	audienceScore: 7.9,
	audienceLink: "http://www.imdb.com/title/tt0499549/",
	userScore: 8,
	canWatch: "dvd",
	toWatch: "none"
};

var passengersData = {
	key: 5,
	title: "Passengers",
	release: new Date(2016, 11, 21, 0, 0, 0, 0),
	poster: "src/js/passengersPoster.jpg",
	critScore: -1,
	critLink: "https://www.rottentomatoes.com/m/passengers_2016",
	audienceScore: -1,
	audienceLink: "http://www.imdb.com/title/tt1355644/",
	userScore: -1,
	canWatch: "none",
	toWatch: "watch"
};

var ironman3Data = {
	key: 6,
	title: "Iron Man 3",
	release: new Date(2013, 4, 3, 0, 0, 0, 0),
	poster: "src/js/ironman3Poster.jpg",
	critScore: 7.9,
	critLink: "https://www.rottentomatoes.com/m/iron_man_3",
	audienceScore: 7.2,
	audienceLink: "http://www.imdb.com/title/tt1300854/",
	userScore: 8.2,
	canWatch: "dvd",
	toWatch: "none"
};

var irongiantData = {
	key: 7,
	title: "The Iron Giant",
	release: new Date(1999, 8, 6, 0, 0, 0, 0),
	poster: "src/js/irongiantPoster.jpg",
	critScore: 9.6,
	critLink: "https://www.rottentomatoes.com/m/iron_giant",
	audienceScore: 8.0,
	audienceLink: "http://www.imdb.com/title/tt0129167/",
	userScore: 7,
	canWatch: "dvd",
	toWatch: "rewatch"
};

var monstercallsData = {
	key: 8,
	title: "A Monster Calls",
	release: new Date(2016, 11, 23, 0, 0, 0, 0),
	poster: "src/js/monstercallPoster.jpg",
	critScore: 8.4,
	critLink: "https://www.rottentomatoes.com/m/a_monster_calls",
	audienceScore: 7.7,
	audienceLink: "http://www.imdb.com/title/tt3416532/",
	userScore: -1,
	canWatch: "none",
	toWatch: "watch"
};

var chappieData = {
	key: 9,
	title: "Chappie",
	release: new Date(2015, 5, 16, 0, 0, 0, 0),
	poster: "src/js/chappiePoster.jpg",
	critScore: 3.2,
	critLink: "https://www.rottentomatoes.com/m/chappie",
	audienceScore: 6.9,
	audienceLink: "http://www.imdb.com/title/tt1823672/",
	userScore: 7.5,
	canWatch: "dvd",
	toWatch: "none"
};

var kuboData = {
	key: 10,
	title: "Kubo and the Two Strings",
	release: new Date(2016, 8, 19, 0, 0, 0, 0),
	poster: "src/js/kuboPoster.jpg",
	critScore: 9.7,
	critLink: "https://www.rottentomatoes.com/m/kubo_and_the_two_strings_2016",
	audienceScore: 8.0,
	audienceLink: "http://www.imdb.com/title/tt4302938/",
	userScore: -1,
	canWatch: "dvd",
	toWatch: "watch"
};

var shawshankData = {
	key: 11,
	title: "The Shawshank Redemption",
	release: new Date(1994, 9, 14, 0, 0, 0, 0),
	poster: "src/js/shawshankPoster.jpg",
	critScore: 9.1,
	critLink: "https://www.rottentomatoes.com/m/shawshank_redemption",
	audienceScore: 9.3,
	audienceLink: "http://www.imdb.com/title/tt0111161/",
	userScore: 9.5,
	canWatch: "dvd",
	toWatch: "none"
};

var beastsData = {
	key: 12,
	title: "Fantastic Beasts and Where to Find Them",
	release: new Date(2016, 10, 18, 0, 0, 0, 0),
	poster: "src/js/beastsPoster.jpg",
	critScore: 7.5,
	critLink: "https://www.rottentomatoes.com/m/fantastic_beasts_and_where_to_find_them",
	audienceScore: 7.8,
	audienceLink: "http://www.imdb.com/title/tt3183660/",
	userScore: -1,
	canWatch: "theater",
	toWatch: "none"
};

// Add all the movie data to an array
var movieDataArray = [doctorStrangeData,
                      moanaData,
                      httydData,
                      avatarData,
                      passengersData,
                      ironman3Data,
                      irongiantData,
                      monstercallsData,
                      chappieData,
                      kuboData,
                      shawshankData,
                      beastsData];

// Render the page
ReactDOM.render(
	<MovieListComponent movies={movieDataArray} />,
	document.getElementById('container')
);
