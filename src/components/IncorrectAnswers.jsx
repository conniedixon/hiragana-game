/** @format */

import React, { Component } from "react";
import HiraganaPreview from "./HiraganaPreview";

class IncorrectAnswers extends Component {
  state = {
    showIncorrect: false,
  };

  toggleShow = () => {
    this.setState((currentState) => {
      return {
        showIncorrect: currentState.showIncorrect === false ? true : false,
      };
    });
  };

  render() {
    return (
      <>
        <button onClick={this.toggleShow}>
          {this.state.showIncorrect
            ? "Hide Incorrect Answers"
            : "Show Incorrect Answers"}
        </button>
        {!this.state.showIncorrect ? (
          ""
        ) : this.props.incorrect.length === 0 ? (
          <p>No incorrect answers!</p>
        ) : (
          this.props.incorrect.map((answer) => {
            return <p>{answer.answer}</p>;
          })
          // <p>You answered wrong</p>
          // console.log(this.props.incorrect)
          // this.props.incorrect.forEach((answer) => {
          //   console.log(answer);
          //   return <HiraganaPreview card={answer} key={answer} />;
          // })
        )}
      </>
    );
  }
}

export default IncorrectAnswers;
