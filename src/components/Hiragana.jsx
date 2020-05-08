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
  };
  render() {
    return (
      <div>
        <h1>Hiragana Test</h1>
        <h2>Type the correct phonetic sound and press enter.</h2>
        <form>
          <input type='text'></input>
          <button type='submit' onClick='checkAnswer'>
            Submit!
          </button>
          <p>Score: {this.state.points}</p>
        </form>
      </div>
    );
  }
}

export default Hiragana;
