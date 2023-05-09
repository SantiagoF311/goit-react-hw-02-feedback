import React, { Component } from "react";
import PropTypes from 'prop-types';

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

  FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};