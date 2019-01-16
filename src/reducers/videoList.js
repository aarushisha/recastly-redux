import Redux from 'redux';

var videoListReducer = (state = [], action) => {
  //TODO: define a reducer for the videoList field of our state.
  if (action.type === 'CHANGE_VIDEO_LIST') {
    return action.videos;
    // return Object.assign({}, state, {
    //   videos: action.videos
    // });
  } else {
    return state;
  }
};

export default videoListReducer;

/*
var changeVideoList = (videos) => ({
  //TODO:  Return some action object to change the list of videos in VideoList.
    type: 'CHANGE_VIDEO_LIST',
    videos: videos
});
*/

/*
function todoApp(state = initialState, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return Object.assign({}, state, {
        visibilityFilter: action.filter
      })
    default:
      return state
  }
}
*/