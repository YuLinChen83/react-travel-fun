import React, { Component } from 'react';

import ContentItem from './ContentItem'

// const Contents = ({ contents, onContentClick }) => (
//     <ul  class="contents">
//       {
//         contents.map(content => (
//           <ContentItem
//             // key={todo.id}
//             // {...todo}
//             // onClick={() => onContentClick(todo.id)}
//           />))
//       }
//     </ul>
// );

class Contents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contents: [],
      count: 0,
    };
  }
  componentWillMount() {
    fetch('https://data.kcg.gov.tw/api/action/datastore_search?resource_id=92290ee5-6e61-456f-80c0-249eae2fcc97')
    .then(res => res.json())
    .then(data => this.setState({contents: data.result.records, count: data.result.total}));
  }
  render () {
      // const props = this.props;
      // const { store } = props;
      // const state = store.getState();
      const contents = this.state.contents.map(content => (
        <ContentItem content={content} />
      ));
      
      return (
        <div>
          <div class="content-top">
            {/* <p class="p error" v-if="error">errorText</p>
            <p class="p error" v-if="isNothing">查無資料</p> */}
            <p class="p">共 <span>{this.state.count}</span> 筆搜尋結果 ...</p>
            <div class="btn-group">
              <div class="btn btn-close" v-if="zoneText">zoneText</div>
              <div class="btn btn-close" v-if="free">免費參觀</div>
              <div class="btn btn-close" v-if="open">全天候開放</div>
            </div>
          </div>
          <ul class="contents">
            {contents}
          </ul>
        </div>
      );
  }
}

export default Contents;