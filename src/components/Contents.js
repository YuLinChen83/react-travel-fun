import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchContents } from  '../actions/contentAction'
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
  componentWillMount() {
    this.props.fetchContents();   // 載入元件時 call 綁定的 dispatch
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.content) {
      this.props.contents.unshift(nextProps.content);
      console.log('componentWillReceiveProps:');
      console.log(nextProps.content);
    }
  }

  render () {
      // const props = this.props;
      // const { store } = props;
      // const state = store.getState();
      console.log(this.props.content);
      const contents = this.props.contents.map(content => (
        <ContentItem key={this.index} content={content} />
      ));
      
      return (
        <div>
          <div class="content-top">
            {/* <p class="p error" v-if="error">errorText</p>
            <p class="p error" v-if="isNothing">查無資料</p> */}
            <p class="p">共 <span>{this.props.count}</span> 筆搜尋結果 ...</p>
            <div class="btn-group">
              <div class="btn btn-close">zoneText</div>
              <div class="btn btn-close">免費參觀</div>
              <div class="btn btn-close">全天候開放</div>
            </div>
          </div>
          <ul class="contents">
            {contents}
          </ul>
        </div>
      );
  }
}

Contents.PropTypes = {
  fetchContents: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired,
  //content: PropTypes.array.isRequired,
  contents: PropTypes.array.isRequired
}


//connect([mapStateToProps], [mapDispatchToProps], [mergeProps],[options])
const mapStateToProps = state => ({
  count: state.contents.count,
  contents: state.contents.contents,  // store中combineReducers子state名稱
  content: state.contents.content
});

export default connect(mapStateToProps, {fetchContents})(Contents);