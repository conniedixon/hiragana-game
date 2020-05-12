/** @format */

import React, { Component } from "react";
import HiraganaPreview from "./HiraganaPreview";

class AnswerFeedback extends Component {
  state = {
    showAnswers: false,
  };

  toggleShow = () => {
    this.setState((currentState) => {
      return {
        showAnswers: currentState.showAnswers === false ? true : false,
      };
    });
  };

  render() {
    return (
      <>
        <button onClick={this.toggleShow}>
          {this.state.showAnswers
            ? `Hide ${this.props.buttonType}`
            : `Show ${this.props.buttonType}`}
        </button>
        {!this.state.showAnswers ? (
          ""
        ) : this.props.answers.length === 0 ? (
          <p>Nothing to see here, good job!</p>
        ) : (
          this.props.answers.map((answer) => {
            return (
              <HiraganaPreview
                card={answer}
                key={answer}
                skipped={this.props.skippedBool}
              />
            );
          })
        )}
      </>
    );
  }
}

export default AnswerFeedback;
