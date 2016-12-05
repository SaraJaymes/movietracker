/*
  A MoviListComponent contains all the raw data for a list of movies,
  and allows them to be displayed and sorted in different ways. When
  the list needs to be displayed, a Movie Component will be created
  for each movie that needs to be displayed.
*/

var React = require('react');
var MovieComponent = require("./MovieComponent.jsx");

var MovieListComponent = React.createClass({
  getInitialState: function() {
    return {
      allMovies: this.props.movies,
      lastSort: "title",
      sortMode: "release",
      displayMode: "all" 
    };
  },
  
  render: function() {
    // Decide which movies to display
    if (this.state.displayMode == "toWatch") {
      this.displayMovies = this.state.allMovies.slice(0).filter(function(movie) {
        return (movie.toWatch == "watch") || (movie.toWatch == "rewatch");
      });
    } else if (this.state.displayMode == "toReview") {
      this.displayMovies = this.state.allMovies.slice(0).filter(function(movie) {
        return movie.userScore < 0;
      });
    } else {
      this.displayMovies = this.state.allMovies.slice(0);
    }

    // Decide how to sort the display movies
    switch (this.state.sortMode) {
      case "title":
        this.displayMovies.sort(function(a, b) {
          var x = a.title.toLowerCase();
          var y = b.title.toLowerCase();
          return x < y ? -1 : x > y ? 1 : 0;
        });
        break;
      case "release":
        this.displayMovies.sort(function(a, b) {
          return b.release.getTime() - a.release.getTime();
        });
        break;
      case "critScore":
        this.displayMovies.sort(function(a, b) {
          return b.critScore - a.critScore;
        });
        break;
      case "audienceScore":
        this.displayMovies.sort(function(a, b) {
          return b.audienceScore - a.audienceScore;
        });
        break;
      case "userScore":
        this.displayMovies.sort(function(a, b) {
          return b.userScore - a.userScore;
        });
        break;
    }

    // Generate all the movie components
    var movieComponents = 
      this.displayMovies.map(function(movie) {
        return <MovieComponent {...movie} />;
      });

    // Render the list
    return (
      <div>
        <div className="display">
          <input type="radio" id="all" name="dOption" onClick={()=>this.setState({displayMode: "all"})}/>
          <label htmlFor="all">all movies</label>
          <input type="radio" id="toWatch" name="dOption" onClick={()=>this.setState({displayMode: "toWatch"})}/>
          <label htmlFor="toWatch">want to watch</label>
          <input type="radio" id="toReview" name="dOption" onClick={()=>this.setState({displayMode: "toReview"})}/>
          <label htmlFor="toReview">unreviewed</label>
        </div>
        <div className="movieList">
          <div className="sort">
            <input type="radio" id="title" name="sOption" onClick={()=>this.setState({sortMode: "title"})}/>
            <label htmlFor="title">title</label>
            <input type="radio" id="release" name="sOption" onClick={()=>this.setState({sortMode: "release"})}/>
            <label htmlFor="release">release date</label>
            <input type="radio" id="userScore" name="sOption" onClick={()=>this.setState({sortMode: "userScore"})}/>
            <label htmlFor="userScore">my rating</label>
            <input type="radio" id="critScore" name="sOption" onClick={()=>this.setState({sortMode: "critScore"})}/>
            <label htmlFor="critScore">critics rating</label>
            <input type="radio" id="audienceScore" name="sOption" onClick={()=>this.setState({sortMode: "audienceScore"})}/>
            <label htmlFor="audienceScore">audience rating</label>
          </div>
          {movieComponents}
        </div>
      </div>
    );
  }
});

module.exports = MovieListComponent
