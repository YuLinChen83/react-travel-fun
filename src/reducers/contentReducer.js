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
    default:
      return state;
  }
};
