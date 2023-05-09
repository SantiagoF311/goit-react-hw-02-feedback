import React, { Component } from "react";

export class FeedbackOptions extends Component {
    render() {
      const { options, onLeaveFeedback } = this.props;
      return options.map((option) => (
        <button key={option} onClick={() => onLeaveFeedback(option)}>
          {option}
        </button>
      ));
    }
  }