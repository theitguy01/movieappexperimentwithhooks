import React, { Component } from "react";
import { connect } from "react-redux";
import { addMovieToList, handleMovieSearch } from "../actions";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: ""
    };
  }
  handleAddToMovies = (movie) => {
    this.props.dispatch(addMovieToList(movie));
  };

  handleSearchClick = () => {
    const { searchText } = this.state;
    this.props.dispatch(handleMovieSearch(searchText));
  };

  handleSearchChange = (e) => {
    this.setState({
      searchText: e.target.value
    });
  };

  render() {
    const { showSearchResults, results: movie } = this.props.search;
    return (
      <div>
        <input onChange={this.handleSearchChange} />
        <button onClick={this.handleSearchClick}>Search</button>

        {showSearchResults && (
          <div>
            <img src={movie.Poster} alt="search-pic" />
            <span>{movie.Title}</span>
            <button onClick={() => this.handleAddToMovies(movie)}>
              {" "}
              Add to Movies{" "}
            </button>
          </div>
        )}
      </div>
    );
  }
}

// class NavbarWrapper extends React.Component {
//   render() {
//     return (
//       <StoreContext.Consumer>
//         {(store) => (
//           <Navbar dispatch={store.dispatch} search={this.props.search} />
//         )}
//       </StoreContext.Consumer>
//     );
//   }
// }

function mapStateToProps({ search }) {
  return {
    search
  };
}

export default connect(mapStateToProps)(Navbar);
