/** @format */

import React, { Component } from "react";
import Form from "./Form";
import AnswerFeedback from "./AnswerFeedback";

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
    skipped: [],
    incorrectCount: 0,
    incorrect: [],
    status: "",
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
        <p>{this.state.cards[this.state.currentCard]["hiragana"]}</p>
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

export default Hiragana;
