import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
import md from "./mark.md";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";

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
      <BrowserRouter>
        <div className="App">
          <h1>MarkDown</h1>
          <ReactMarkdown source={this.state.md} />
          <Switch>
            <Route path="/" exact component={Dashboard} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
