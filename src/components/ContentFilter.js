import React, { Component } from 'react';
import { connect } from 'react-redux';

import ContentForm from './ContentForm';
import Contents from './Contents';

import { filtFree } from '../actions/contentAction'

class ContentFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onlyfree: false,
    }
    this.onChange = this.onChange.bind(this);
  }
  onChange(e) {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({[name]: value});
    console.log('onChange!');

    this.props.filtFree(value);
  }
  render() {
    return (
      <div>
        <aside class="side" v-if="!innerPage">
          <div class="side-location">
            <h2 class="subtitle">地區</h2>
            <div class="select-style">
              <select name="">
                <option value="">選擇地區</option>
                <option>item</option>
              </select>
            </div>
          </div>
          <div class="side-categories">
            <h2 class="subtitle">進階篩選</h2>
            <div class="input-group">
              <div className={"checkbox-style " + (this.state.onlyfree?null:'selected')}>
                <input name="onlyfree" type="checkbox" onChange={this.onChange} value={this.state.onlyfree}/>
                <label for="free">免費參觀</label>
              </div>
            </div>
            <div class="input-group">
              <div class="checkbox-style">
                <input v-model="open" type="checkbox" value="food" id="open"/>
                <label for="open">全天候開放</label>
              </div>
            </div>
          </div>
        </aside>
        <article class="content">
          <ContentForm />
          <Contents />
          <div class="content-paging">
            <div class="page-text">
              <p class="p">共pageTotal頁 | 目前第pageIndex+1頁( pageCount筆1頁)</p>
            </div>
          </div>
        </article>
      </div>
    );
  }
}

export default connect(null, {filtFree})(ContentFilter);

