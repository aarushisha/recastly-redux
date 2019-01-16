import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import searchYouTube from './lib/searchYouTube.js';
import YOUTUBE_API_KEY from './config/youtube.js';
import store from './store/store.js';
import AppContainer from './containers/AppContainer.js';

//TODO: Import the Provider component from 'react-redux' here!

//TODO: Use the Provider component to make your store available to
//  the rest of your app.

// var storeStart = store();

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('app')
);
