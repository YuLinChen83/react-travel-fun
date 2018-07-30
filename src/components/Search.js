import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchKeyWord } from '../actions/contentAction'

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: '',
    };
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({keyword: e.target.value});
    //console.log("handleChange:" + e.target.value);
  }
  handleSubmit(e) {
    e.preventDefault();
    //console.log('Submit!'+this.state.keyword);
    this.props.searchKeyWord(this.state.keyword);
  }
  render () {
      return (
        <form onSubmit={this.handleSubmit}>
          <div class="search"><i class="i ion ion-md-search"></i>
            <input type="text" name="keyword" placeholder="請輸入景點名稱"  onChange={this.handleChange} value={this.state.keyword} />
            {/* <div class="btn btn-close">filterText</div> */}
            {/* <div class="search-btn"></div> */}
          </div>
        </form>
      );
  }
}

export default connect(null, {searchKeyWord})(Search);