import React from "react";
import { connect } from "react-redux";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
import { addMovies, setShowFavourites } from "../actions";
import { data as moviesList } from "../data";

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(addMovies(moviesList));
  }

  isMovieInFavourites = (movie) => {
    const { movies } = this.props;

    const index = movies.favourites.indexOf(movie);
    if (index !== -1) {
      return true;
    }

    return false;
  };

  changeTab = (val) => {
    this.props.dispatch(setShowFavourites(val));
  };
  render() {
    const { movies, search } = this.props; // will return { movies: {}, search: []}

    const { list, showFavourites = [], favourites = [] } = movies;
    const displayMovies = showFavourites ? favourites : list; // means if showfav is true then show fav  if false then dont show

    return (
      <div>
        <Navbar search={search} />
        <div onClick={() => this.changeTab(false)}> Movies </div>
        <div onClick={() => this.changeTab(true)}> Favourites </div>

        <div>
          {displayMovies.map((movie) => (
            <MovieCard
              movie={movie}
              key={movie.imdbID}
              dispatch={this.props.dispatch}
              isFavourite={this.isMovieInFavourites(movie)}
            />
          ))}
          {displayMovies.length === 0 ? (
            <div>No movies to display! </div>
          ) : null}
        </div>
      </div>
    );
  }
}

// class AppWrapper extends React.Component {
//   render() {
//     return (
//       <StoreContext.Consumer>
//         {(store) => <App store={store} />}
//       </StoreContext.Consumer>
//     );
//   }
// }

function callback(state) {
  return {
    movies: state.movies,
    search: state.movies
  };
}
const connectedComponent = connect(callback)(App);
export default connectedComponent;
