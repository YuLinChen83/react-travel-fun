import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// 引入 redux
import { Provider } from 'react-redux';
import store from './store'
import { BrowserRouter } from 'react-router-dom'

import Search from './components/Search';
import Nav from './components/Nav';
import Main from './components/Main';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
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
                <Nav />
              </div>
            </header>
            <Main />
            <footer class="footer">
              <p class="footer-text">React Practice by Tiffany </p><a class="footer-link" href="" target="_blank"><i class="icon ion-logo-github"></i></a><a class="footer-link" href="" target="_blank"><i class="icon ion-logo-codepen"></i></a>
            </footer>
          </div>
        </BrowserRouter>
      </Provider>
    )}
}

export default App;
