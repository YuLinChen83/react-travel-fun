import React, { Component } from 'react';


class ContentItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.content.Name,
      description: this.props.content.Description,
      ticketinfo: this.props.content.Ticketinfo,
      picture1: this.props.content.Picture1,
      add: this.props.content.Add,
      opentime: this.props.content.Opentime,
      website: this.props.content.Website,
    };
  }
  render () {
      // const props = this.props;
      // const { store } = props;
      // const state = store.getState();
      
      return (
        <li class="content-item" v-for="item in slicePageData">
          <a href="#">
            <div class="content-img imgbox">
              <div class="imgbox-inner"><img class="img" src={this.state.picture1} alt="img"/></div>
            </div>
          </a>
          <div class="content-info">
            <h2 class="subtitle">{this.state.name}</h2>
            <p class="content-des">{this.state.description}</p>
            <div class="content-ticket">
              <h3>門票說明</h3>
              <div class="content-tag">{this.state.ticketinfo}</div>
              <div class="content-tag">無</div>
            </div>
            <div class="content-addr"><i class="ion ion-md-locate"></i>
              <p>{this.state.add}</p>
            </div>
            <div class="content-open"><i class="ion ion-md-calendar"></i>
              <p>{this.state.opentime}</p>
            </div>
            <div class="content-webside"><a href={this.state.website} target="_blank"><i class="ion ion-ios-link"></i></a></div>
          </div>
        </li>
      );
  }
}

export default ContentItem;