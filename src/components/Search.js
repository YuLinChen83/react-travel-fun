import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render () {
      return (
        <div class="search"><i class="i ion ion-md-search"></i>
          <input type="text" placeholder="請輸入景點名稱" />
          {/* <div class="btn btn-close">filterText</div> */}
          {/* <div class="search-btn"></div> */}
        </div>
      );
  }
}

export default Search;