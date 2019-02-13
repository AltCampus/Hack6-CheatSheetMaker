import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
import githubMd from "./../markdown/Github/configure.md";
import createRepo from "./../markdown/Github/createRepo.md";
import group from "./../markdown/Github/groupChange.md";
import makeChange from "./../markdown/Github/makeChange.md";
import redo from "./../markdown/Github/redo.md";
import refactor from "./../markdown/Github/refactor.md";
import reviewHistory from "./../markdown/Github/reviewHistory.md";
import saveFragment from "./../markdown/Github/saveFragments.md";
import supress from "./../markdown/Github/supress.md";
import synchronize from "./../markdown/Github/synchronize.md";

export default class Github extends Component {
  state = {
    mdFile: [
      githubMd,
      createRepo,
      group,
      makeChange,
      redo,
      refactor,
      reviewHistory,
      saveFragment,
      supress,
      synchronize
    ],
    githubMd: null,
    createRepo: null,
    group: null,
    makeChange: null,
    redo: null,
    refactor: null,
    reviewHistory: null,
    saveFragment: null,
    supress: null,
    synchronize: null
  };

  componentDidMount = () => {
    fetch(githubMd)
      .then(res => res.text())
      .then(d => this.setState({ githubMd: d }));

    fetch(createRepo)
      .then(res => res.text())
      .then(d => this.setState({ createRepo: d }));

    fetch(group)
      .then(res => res.text())
      .then(d => this.setState({ group: d }));

    fetch(makeChange)
      .then(res => res.text())
      .then(d => this.setState({ makeChange: d }));

    fetch(redo)
      .then(res => res.text())
      .then(d => this.setState({ redo: d }));

    fetch(refactor)
      .then(res => res.text())
      .then(d => this.setState({ refactor: d }));

    fetch(reviewHistory)
      .then(res => res.text())
      .then(d => this.setState({ reviewHistory: d }));

    fetch(saveFragment)
      .then(res => res.text())
      .then(d => this.setState({ saveFragment: d }));

    fetch(supress)
      .then(res => res.text())
      .then(d => this.setState({ supress: d }));

    fetch(synchronize)
      .then(res => res.text())
      .then(d => this.setState({ synchronize: d }));
  };

  render() {
    return (
      <div className="github-wrapper">
        <ReactMarkdown className="markdown-body" source={this.state.githubMd} />
        <ReactMarkdown
          className="markdown-body"
          source={this.state.createRepo}
        />
        <ReactMarkdown className="markdown-body" source={this.state.group} />
        <ReactMarkdown
          className="markdown-body"
          source={this.state.makeChange}
        />
        <ReactMarkdown className="markdown-body" source={this.state.redo} />
        <ReactMarkdown className="markdown-body" source={this.state.refactor} />
        <ReactMarkdown
          className="markdown-body"
          source={this.state.reviewHistory}
        />
        <ReactMarkdown
          className="markdown-body"
          source={this.state.saveFragment}
        />
        <ReactMarkdown className="markdown-body" source={this.state.supress} />
        <ReactMarkdown
          className="markdown-body"
          source={this.state.synchronize}
        />
      </div>
    );
  }
}
