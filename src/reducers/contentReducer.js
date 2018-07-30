import { FETCH_CONTENTS, NEW_CONTENT, FILIT_CONTENT_KEYWORD } from '../actions/types';

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
    case FILIT_CONTENT_KEYWORD:

    //console.log(state.contents.map(i => i.name.indexOf(action.payload.keyword) > -1));
    console.log(state.contents.map(i => i['Name']));
          return {
            ...state,
            contents: (state.contents.map(i => i['Name'])
            .filter(name => {
              console.log(name, action.payload.keyword);
              name.indexOf(action.payload.keyword) > -1;
            })),
          }
    default:
      return state;
  }
};
