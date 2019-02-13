import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
import githubMd from "./../markdown/github.md";

export default class Github extends Component {
  state = {
    md: ""
  };

  componentDidMount = () => {
    fetch(githubMd)
      .then(res => res.text())
      .then(d => this.setState({ md: d }));
  };

  render() {
    return (
      <div>
        <ReactMarkdown source={this.state.md} />
      </div>
    );
  }
}
