import { FETCH_CONTENTS, NEW_CONTENT, FILIT_CONTENT_KEYWORD, FILIT_FREE } from '../actions/types';

const initialState = {
  contents: [],
  content: {},
  count: 0,
  onlyfree: false,
}

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_CONTENTS:
      return {
          ...state,
          contents: action.payload.contents,
          count:  action.payload.count,
      }
    case NEW_CONTENT:
      console.log(state.contents.unshift(action.payload.content));
      return {
          ...state,
          contents: [...state.contents, ...action.payload.content],
          //contents: state.contents.push(action.payload.content),
          //content: action.payload.content,
          count:  state.count + 1,
      }
    case FILIT_CONTENT_KEYWORD:
      const filtContents = state.contents.filter(content => content.Name.includes(action.payload.keyword) === true);
      console.log(filtContents, filtContents.length);
      return {
        ...state,
        contents: filtContents,
        count: filtContents.length
      }
    case FILIT_FREE:
      const filtFreeContents = state.contents.filter(content => content.Ticketinfo.includes('免費') === action.payload.onlyfree);
      return {
        ...state,
        contents: filtFreeContents,
      }
    default:
      return state;
  }
};
