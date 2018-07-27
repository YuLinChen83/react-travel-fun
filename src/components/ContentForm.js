import React, { Component } from 'react';

class ContentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      ticketinfo: '',
      picture1: '',
      add: '',
      opentime: '',
      website: '',
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }
  onSubmit(e) {
    e.preventDefault();
    console.log('Submit!');
  }
  
  render() {
    return (
      <div>
        <h1>新增</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>name</label><br />
            <input type="text" name="name" onChange={this.onChange} value={this.state.name} />
          </div>
          <br />
          <div>
            <label>description</label><br />
            <textarea name="description" onChange={this.onChange} value={this.state.description}/>
          </div>
          <br />
          <div>
            <label>ticketinfo</label><br />
            <textarea name="ticketinfo" onChange={this.onChange} value={this.state.ticketinfo}/>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default ContentForm;