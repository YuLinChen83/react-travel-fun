import { FETCH_CONTENTS, NEW_CONTENT, FILIT_CONTENT_KEYWORD, FILIT_FREE } from './types';


// 寫法一
export const fetchContents = () => dispatch => {
  fetch('https://data.kcg.gov.tw/api/action/datastore_search?resource_id=92290ee5-6e61-456f-80c0-249eae2fcc97')
  .then(res => res.json())
  .then(data => dispatch({
    type: FETCH_CONTENTS,
    payload: {contents: data.result.records, count: data.result.total},
  }));
};

// 寫法二
// export function fetchContents() {
//   return function(dispatch) {
//     fetch('https://data.kcg.gov.tw/api/action/datastore_search?resource_id=92290ee5-6e61-456f-80c0-249eae2fcc97')
//     .then(res => res.json())
//     .then(data => dispatch({
//       type: FETCH_CONTENTS,
//       payload: contests,
//     }));
//     //.then(data => this.setState({contents: data.result.records, count: data.result.total}));
//   }
// }

export const createContent = (contentData) => dispatch => {
  dispatch({
    type: NEW_CONTENT,
    payload: {content: contentData},
  });
};

export const searchKeyWord = (keyWord) => dispatch => {
  console.log("keyWord:"+keyWord);
  dispatch({
    type: FILIT_CONTENT_KEYWORD,
    payload: {keyword: keyWord},
  });
};

export const filtFree = (onlyfree) => dispatch => {
  dispatch({
    type: FILIT_FREE,
    payload: {onlyfree: onlyfree},
  });
}