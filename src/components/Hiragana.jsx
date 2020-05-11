/** @format */

import React, { Component } from "react";
import IncorrectAnswers from "./IncorrectAnswers";

class Hiragana extends Component {
  state = {
    score: 0,
    cards: [
      { hiragana: "あ", answer: ["a", "ah", "aa"] },
      { hiragana: "か", answer: ["ka", "kah", "ca", "cah"] },
      { hiragana: "さ", answer: ["sah", "sa", "sar"] },
      { hiragana: "た", answer: ["ta"] },
      { hiragana: "な", answer: ["na", "nah"] },
      { hiragana: "は", answer: ["ha", "hah", "haa"] },
      { hiragana: "ま", answer: ["ma", "mah", "maa"] },
      { hiragana: "や", answer: ["ya", "yah", "yaa"] },
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
    currentCard: 1,
    guess: "",
    skippedCount: 0,
    incorrectCount: 0,
    incorrect: [],
    showIncorrectBool: false,
  };

  componentDidMount() {
    this.getHiragana();
  }

  getHiragana = () => {
    let randomHiragana = Math.floor(Math.random() * 45);
    if (randomHiragana === this.state.currentCard) randomHiragana++;
    if (randomHiragana > 45) randomHiragana -= 2;
    if (randomHiragana < 0) randomHiragana += 2;
    this.setState({ currentCard: randomHiragana });
  };

  handleChange = ({ target: { value } }) => {
    this.setState(() => {
      return {
        guess: value,
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
      };
    });
  };

  handleIncorrect = () => {
    console.log("handleIncorrect");
    this.setState((currentState) => {
      return {
        incorrectCount: currentState.incorrectCount++,
        guess: "",
        skipped: [
          currentState.skipped,
          currentState.cards[currentState.currentCard],
        ],
      };
    });
  };

  handleSkip = () => {
    this.setState((currentState) => {
      return {
        skippedCount: currentState.skippedCount++,
        skipped: [
          ...currentState.skipped,
          currentState.cards[currentState.currentCard],
        ],
      };
    });
    this.getHiragana();
  };

  showIncorrect = () => {
    let bool;
    this.state.showIncorrectBool ? (bool = false) : (bool = true);
    this.setState({ showIncorrectBool: bool });
  };
  render() {
    return (
      <div>
        <h1>Hiragana Test</h1>
        <h2>Infinate Mode</h2>
        <p>{this.state.cards[this.state.currentCard]["hiragana"]}</p>
        <form onSubmit={this.checkAnswer}>
          <input
            type='text'
            minLength='1'
            onChange={this.handleChange}
            value={this.state.guess}
            placeholder='Type your answer here...'></input>
          <button>Submit!</button>
          <br />
          <button onClick={this.handleSkip}>Skip</button>
          <p>Correct: {this.state.score}</p>
          <p>Incorrect: {this.state.incorrectCount}</p>
        </form>
        <IncorrectAnswers
          bool={this.state.showIncorrectBool}
          incorrectAnswers={this.state.incorrect}
        />
      </div>
    );
  }
}

export default Hiragana;
