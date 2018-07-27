import { FETCH_CONTENTS, NEW_CONTENT } from '../actions/types';

const initialState = {
  contents: [],
  content: {},
  count: 0,
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
      return {
          ...state,
          contents: [...state.contents, ...action.payload.content],
          //contents: state.contents.push(action.payload.content),
          //content: action.payload.content,
          count:  state.count + 1,
      }
    default:
      return state;
  }
};
