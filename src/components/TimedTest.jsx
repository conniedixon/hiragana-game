/** @format */

import React, { Component } from "react";

class TimedTest extends Component {
  state = {
    score: 0,
    cards: [
      { hiragana: "あ", answer: ["a"] },
      { hiragana: "か", answer: ["ka"] },
      { hiragana: "さ", answer: ["sa"] },
      { hiragana: "た", answer: ["ta"] },
      { hiragana: "な", answer: ["na"] },
      { hiragana: "は", answer: ["ha"] },
      { hiragana: "ま", answer: ["ma"] },
      { hiragana: "や", answer: ["ya"] },
      { hiragana: "ら", answer: ["ra"] },
      { hiragana: "わ", answer: ["wa"] },
      { hiragana: "い", answer: ["i"] },
      { hiragana: "き", answer: ["ki"] },
      { hiragana: "し", answer: ["shi"] },
      { hiragana: "ち", answer: ["chi"] },
      { hiragana: "に", answer: ["ni"] },
      { hiragana: "ひ", answer: ["hi"] },
      { hiragana: "み", answer: ["mi"] },
      { hiragana: "り", answer: ["ri"] },
      { hiragana: "う", answer: ["u"] },
      { hiragana: "く", answer: ["ku"] },
      { hiragana: "す", answer: ["su"] },
      { hiragana: "つ", answer: ["tsu"] },
      { hiragana: "ぬ", answer: ["nu"] },
      { hiragana: "ふ", answer: ["fu"] },
      { hiragana: "む", answer: ["mu"] },
      { hiragana: "ゆ", answer: ["yu"] },
      { hiragana: "る", answer: ["ru"] },
      { hiragana: "え", answer: ["e"] },
      { hiragana: "け", answer: ["ke"] },
      { hiragana: "せ", answer: ["se"] },
      { hiragana: "て", answer: ["te"] },
      { hiragana: "ね", answer: ["ne"] },
      { hiragana: "へ", answer: ["he"] },
      { hiragana: "め", answer: ["me"] },
      { hiragana: "れ", answer: ["re"] },
      { hiragana: "お", answer: ["o"] },
      { hiragana: "こ", answer: ["ko"] },
      { hiragana: "そ", answer: ["so"] },
      { hiragana: "と", answer: ["to"] },
      { hiragana: "の", answer: ["no"] },
      { hiragana: "ほ", answer: ["ho"] },
      { hiragana: "も", answer: ["mo"] },
      { hiragana: "よ", answer: ["yo"] },
      { hiragana: "ろ", answer: ["ro"] },
      { hiragana: "を", answer: ["o"] },
      { hiragana: "ん", answer: ["n"] },
    ],
    guess: "",
    incorrect: [],
    currentCard: 0,
  };

  getHiragana = (bool) => {
    this.setState((currentState) => {
      return { currentCard: currentState.currentCard++ };
    });
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
    this.setState((currentState) => {
      return {
        score: currentState.score++,
        correct: [],
        guess: "",
      };
    });
    this.getHiragana();
  };

  handleIncorrect = () => {
    this.setState((currentState) => {
      return {
        score: currentState.score--,
        incorrect: [],
        guess: "",
      };
    });
  };

  render() {
    return (
      <div>
        <h1>Hiragana Test</h1>
        <h2>Untimed Test Mode</h2>
        <p>{this.state.currentCard + 1}/52</p>
        <p>{this.state.cards[this.state.currentCard]["hiragana"]}</p>
        <form onSubmit={this.checkAnswer}>
          <input
            type='text'
            minLength='1'
            onChange={this.handleChange}
            value={this.guess}
            placeholder='Type your answer here...'></input>
          <button>Submit!</button>
        </form>
      </div>
    );
  }
}

export default TimedTest;
