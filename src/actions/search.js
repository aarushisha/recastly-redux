import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';

var handleVideoSearch = (q) => {
  return (dispatch) => {
    return searchYouTube({key: YOUTUBE_API_KEY, query: q}, function(items) {
      dispatch(changeVideo(items[0]));
      dispatch(changeVideoList(items));
    })
  }
}

export default handleVideoSearch;
