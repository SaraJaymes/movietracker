/*
  A MovieComponet contains the displayed information for a movies,
  as well as setting up how that information is displayed for
  a single movie.
*/

var React = require('react');

var MovieComponent = React.createClass({
  getInitialState: function() {    
    return {
      title: this.props.title,
      release: (this.props.release.getUTCMonth() + 1) + "/" + this.props.release.getUTCDate() + "/" + this.props.release.getUTCFullYear(),
      poster: this.props.poster,
      critScore: (this.props.critScore == -1) ? "No Rating" : (this.props.critScore),
      critLink: this.props.critLink,
      audienceScore: (this.props.audienceScore == -1) ? "No Rating" : (this.props.audienceScore),
      audienceLink: this.props.audienceLink,
      userScore: (this.props.userScore == -1) ? "Not Rated" : (this.props.userScore),
      viewing: (this.props.canWatch == "theater") ? "(In Theaters)" : (this.props.canWatch == "dvd") ? "(On DVD)" : (this.props.release.getTime() > Date.now()) ? "(Upcoming)" : "",
      watching: (this.props.toWatch == "watch") ? "Want to Watch" : (this.props.toWatch == "rewatch") ? "Want to Re-Watch" : "Watched"
    };
  },

  render: function() {
    return (
      <div className="movie">
        <img src={this.state.poster}/>
        <div>
          <h1>{this.state.title}</h1>
          <h2>{this.state.watching}</h2>
          <h3>My Rating: {this.state.userScore}</h3>
          <h4>Released: {this.state.release} {this.state.viewing}</h4>
          <p>Critics Rating: <a href={this.state.critLink} traget="_blank">{this.state.critScore}</a></p>
          <p>Audience Rating: <a href={this.state.audienceLink} traget="_blank">{this.state.audienceScore}</a></p>
        </div>
      </div>
    );
  }
});

module.exports = MovieComponent
