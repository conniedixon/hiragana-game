/** @format */

import React, { Component } from "react";

class InfiniteMode extends Component {
  state = {
    score: 0,
    guess: "",
    skippedCount: 0,
    skipped: [],
    incorrectCount: 0,
    incorrect: [],
    status: "",
  };

  handleChange = ({ target: { value } }) => {
    this.setState(() => {
      return {
        guess: value,
        status: "",
      };
    });
  };

  checkAnswer = (event) => {
    event.preventDefault();
    let answers = this.state.cards[this.state.currentCard]["answer"];
    answers.includes(this.state.guess)
      ? this.handleCorrect()
      : this.handleIncorrect();
  };

  handleCorrect = () => {
    this.getHiragana();
    this.setState((currentState) => {
      return {
        score: currentState.score++,
        guess: "",
        status: "Correct!",
      };
    });
  };

  handleIncorrect = () => {
    console.log("handleIncorrect");
    let newIncorrect = {
      ...this.state.cards[this.state.currentCard],
      guess: this.state.guess,
    };
    console.log(newIncorrect, "<-- new Incorrect");
    this.setState((currentState) => {
      return {
        incorrectCount: currentState.incorrectCount++,
        guess: "",
        incorrect: [...currentState.incorrect, newIncorrect],
        status: "Incorrect",
      };
    });
  };

  handleSkip = () => {
    console.log("handleSkip");
    this.setState((currentState) => {
      return {
        skippedCount: currentState.skippedCount++,
        skipped: [
          ...currentState.skipped,
          currentState.cards[currentState.currentCard],
        ],
        status: "",
      };
    });
    this.getHiragana();
  };

  render() {
    return (
      <div>
        <h1>Hiragana Test</h1>
        <h2>Infinate Mode</h2>
        <Form
          handleChange={this.handleChange}
          checkAnswer={this.checkAnswer}
          guess={this.state.guess}
          handleSkip={this.handleSkip}
          score={this.state.score}
          incorrectCount={this.state.incorrectCount}
          skippedCount={this.state.skippedCount}
          status={this.state.status}
        />
        <AnswerFeedback
          answers={this.state.incorrect}
          buttonType={"Incorrect Questions"}
          skippedBool={false}
        />
        <AnswerFeedback
          answers={this.state.skipped}
          buttonType={"Skipped Questions"}
          skippedBool={true}
        />
      </div>
    );
  }
}

export default InfiniteMode;
