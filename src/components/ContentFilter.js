import React from 'react'

import ContentForm from './ContentForm';
import Contents from './Contents';

// The Header creates links that can be used to navigate
// between routes.
const ContentFilter = () => (
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
          <div class="checkbox-style">
            <input type="checkbox" value="entertainment" id="free"/>
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
)

export default ContentFilter


