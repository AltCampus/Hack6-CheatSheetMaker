import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
import md from "./mark.md";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Github from "./components/Github";
import Markdown from "./components/Markdown";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header>
            <h2>cheatSheetMakers</h2>
          </header>
          <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route path="/github" exact component={Github} />
            <Route path="/md" exact component={Markdown} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
