import React, { Component } from "react";
import './App.css';

class App extends Component {
  state = {
    input: "",
    items: []
  };

  // input change handler
  onInput = event => this.setState({
    input: event.target.value
  });

  onSubmit = event => {
    event.preventDefault();
    if (this.state.input === "" || this.state.input === null || this.state.input === "undefined") {
      return;
    }

    this.setState(prevState => ({
      items: [...prevState.items, this.state.input],
      input: ""
    }));

    console.log("Submit happenin!", this.state.items);
  }

  handleKeyPress = event => {
    if (event.key === "Enter") {
      console.log("Enter was hit!");
      this.onSubmit(event);
    }
  }

  render() {
    return (
      <div>
        <section className="hero is-info">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">
                <img className="the-cost" src="https://i.imgur.com/Ba3vsKr.gif" />
              </h1>
              <div className="field has-addons">
                <div className="control big-control">
                  <input value={this.state.input} onChange={this.onInput} onKeyPress={this.handleKeyPress}  
                  className="input bc-input" type="text" placeholder="Add something." />
                </div>
                <div className="control">
                  <a onClick={this.onSubmit} 
                  className="button is-danger">Add It</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="hero">
          <section className="hero-body">
            <div className="container">
              <h2 className="title is-size-4 lillun">Things end up here.</h2>
              <ul className="got-items">
                {this.state.items.map((item) => {
                  return (<li key={Math.floor(Math.random() * 10000) + 1}>{item}</li>);
                })} 
              </ul>
            </div>
          </section>
        </section>
      </div>
    );
  }
}

export default App;
