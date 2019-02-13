import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
import markdown from "./../markdown/markdownCheetSheet.md";

export default class Markdown extends Component {
  state = {
    md: ""
  };

  componentDidMount = () => {
    fetch(markdown)
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
