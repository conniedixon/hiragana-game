/** @format */

import React, { Component } from "react";

class Hiragana extends Component {
  state = {
    points: 0,
    cards: [
      { hiragana: "あ", answer: ["a", "ah", "aa"] },
      { hiragana: "か", answer: ["ka", "kah", "ca", "cah"] },
      { hiragana: "さ", answer: ["sah", "sa", "sar"] },
      { hiragana: "た", answer: ["ta"] },
      { hiragana: "な", answer: ["na", "nah"] },
    ],
    currentCard: 1,
    guess: "",
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
    if (answers.includes(this.state.guess)) console.log("correct");
    // this.state.cards.currentCard.answer.map((answer) => {
    //   if (answer === this.state.guess) {
    //     console.log("correct");
    //   }
    // });
  };

  render() {
    return (
      <div>
        <h1>Hiragana Test</h1>
        <h2>Type the correct phonetic sound and press enter.</h2>
        <form onSubmit={this.checkAnswer}>
          <input
            type='text'
            minLength='1'
            onChange={this.handleChange}
            value={this.state.comment}
            placeholder='Type your answer here...'></input>
          <button>Submit!</button>
          <p>Score: {this.state.points}</p>
        </form>
      </div>
    );
  }
}

export default Hiragana;
