import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
import md from "./mark.md";
import "./App.css";

class App extends Component {
  state = {
    md: null
  };
  componentDidMount = () => {
    fetch(md)
      .then(res => res.text())
      .then(d => this.setState({ md: d }));
  };

  render() {
    return (
      <div className="App">
        <h1>MarkDown</h1>
        <ReactMarkdown source={this.state.md} />
      </div>
    );
  }
}

export default App;
