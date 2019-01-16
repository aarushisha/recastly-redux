import React from 'react';
import { connect } from 'react-redux';
import handleInitialSearch from '../actions/search.js';
import App from '../components/App.js';

var mapDispatchToProps = (dispatch) => {
  return {
    getYouTubeVideos: (query) => dispatch(handleInitialSearch(query))
  }
}

var AppContainer = connect(null, mapDispatchToProps)(App);

export default AppContainer;