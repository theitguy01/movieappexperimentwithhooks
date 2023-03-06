// action types
export const ADD_MOVIES = "ADD_MOVIES";
export const ADD_TO_FAVOURITES = "ADD_TO_FAVOURITES";
export const REMOVE_FROM_FAVOURITES = "REMOVE_FROM_FAVOURITES";
export const SET_SHOW_FAVOURITES = "SET_SHOW_FAVOURITES";
export const ADD_MOVIE_TO_LIST = "ADD_MOVIE_TO_LIST";
export const ADD_SEARCH_RESULT = "ADD_SEARCH_RESULT";

// action creators
export function addMovies(movies) {
  return {
    type: ADD_MOVIES,
    movies
  };
}

export function addToFavourites(movie) {
  return {
    type: ADD_TO_FAVOURITES,
    movie
  };
}

export function setShowFavourites(val) {
  return {
    type: SET_SHOW_FAVOURITES,
    val
  };
}

export function removeFromFavourites(movie) {
  return {
    type: REMOVE_FROM_FAVOURITES,
    movie
  };
}

export function addMovieToList(movie) {
  return {
    type: ADD_MOVIE_TO_LIST,
    movie
  };
}

export function handleMovieSearch(searchText) {
  // This is a function called handleMovieSearch that takes in one parameter called searchText.
  return function (dispatch) {
    //check 2
    const url = `https://www.omdbapi.com/?apikey=3ca5df7&t=${searchText}`;
    //check 1
    fetch(url)
      .then((response) => response.json())
      .then((movie) => {
        console.log("movie", movie);
        // dispatch action to save search results in store
        dispatch(addMovieSearchResult(movie));
      });
  };
}
//3

export function addMovieSearchResult(movie) {
  return {
    type: ADD_SEARCH_RESULT,
    movie
  };
}

//1
// In string concatenation, instead of using template literals with ${name},
// you can concatenate strings and variables using the + operator or string interpolation with the backtick(`) character.
//     const name = "John";
// const message = "Hello " + name + "! Welcome to our website!";
// or
// const name = "John";
// const message = `Hello ${name}! Welcome to our website!`;

//2
// dispatch is a function provided by the Redux store that is used to dispatch an action to the store
// By using dispatch, actions can be sent from anywhere in the application to update the state in the store.

// 3
// we can include the above code in a component instead of an action. However, it is generally considered
// a better practice to keep API calls and other asynchronous operations
//  in separate action creators instead of directly calling them from a component.
