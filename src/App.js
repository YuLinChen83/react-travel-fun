import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// 引入 redux
import { Provider } from 'redux-redux';
import store from './store'

import ContentForm from './components/ContentForm';
import Contents from './components/Contents';
import Search from './components/Search';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          {/* <div class="loading" v-if="isLoading">
            <div class="looping-rhombuses-spinner">
              <div class="rhombus"></div>
              <div class="rhombus"></div>
              <div class="rhombus"></div>
            </div>
          </div> */}
          <header class="header">
            <div class="container">
              <div class="logo"><a href="./">Travel Fun</a></div>
              <Search />
            </div>
          </header>
          <div class="container">
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
            <article class="content" v-if="!innerPage">
              <ContentForm />
              <Contents />
              <div class="content-paging" v-if="!innerPage">
                <div class="page-text">
                  <p class="p">共pageTotal頁 | 目前第pageIndex+1頁( pageCount筆1頁)</p>
                </div>
                {/* <div class="page-btns">
                  <div class="page-item page-prev" v-if="pageBtn.prev"><i class="ion ion-md-arrow-dropleft"></i></div>
                  <div class="page-item" v-for="page in pageBtn.btn"">page.value </div>
                  <div class="page-item page-next" v-if="pageBtn.next" @click="pageChange(pageBtn.next)"><i class="ion ion-md-arrow-dropright"></i></div>
                </div> */}
              </div>
            </article>
            {/* <transition name="changePage">
              <article class="content content-inner-page" v-show="innerPage">
                <div class="breadcrumb"><a class="breadcrumb-item breadcrumb-item-primary" href="./">首頁</a>
                  <div class="breadcrumb-item">innerData.Name</div>
                  <div class="breadcrumb-back" @click="toggleInnerPage">回上一頁</div>
                </div>
                <ul class="content-only">
                  <li class="content-item">
                    <div class="content-img imgbox">
                      <div class="imgbox-inner"><img class="img" :src="innerData.Picture1" alt="img"/></div>
                    </div>
                    <div class="content-info">
                      <h2 class="title">innerData.Name</h2>
                      <div class="content-ticket">
                        <h3>門票說明</h3>
                        <div class="content-tag" v-if="innerData.Ticketinfo">innerData.Ticketinfo</div>
                      </div>
                      <div class="content-addr"><i class="ion ion-md-locate"></i>
                        <p>innerData.Add</p>
                      </div>
                      <div class="content-open"><i class="ion ion-md-calendar"></i>
                        <p>innerData.Opentime</p>
                      </div>
                      <div class="content-webside"><a v-if="innerData.Website" :href="innerData.Website" target="_blank"><i class="ion ion-ios-link"></i></a></div>
                      <p class="content-des">innerData.Description</p>
                    </div>
                  </li>
                </ul>
              </article>
            </transition> */}
          </div>
          <footer class="footer">
            <p class="footer-text">React Practice by Tiffany </p><a class="footer-link" href="" target="_blank"><i class="icon ion-logo-github"></i></a><a class="footer-link" href="" target="_blank"><i class="icon ion-logo-codepen"></i></a>
          </footer>
        </div>
      </Provider>
    )}
}

export default App;
