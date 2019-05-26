import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(){
    super()
    this.state = {
      texto: '',
      count: 0,
    }
  }

  render() {
    const { texto, count } = this.state
    return (
      <div className="container">
        <textarea rows="3" onChange={this.textCount.bind(this)}></textarea>
        <div className="counter">{count}</div>
      </div>
    );
  }

  textCount(event){
    this.setState({
      count: event.target.value.length
    })
  }

}

export default App;
