/** @format */

import React, { Component } from "react";
import { Link } from "@reach/router";

class Welcome extends Component {
  render() {
    return (
      <>
        <h1>Welcome to Hiragana-Test</h1>
        <h3>Select an option to begin playing!</h3>
        <Link to='/infinite'>
          <p>Infinite Mode</p>
        </Link>
        <p>
          for practicing as many hirigana as you want want with no time limits.
        </p>
        <Link to='untimed-test'>
          <p>Untimed Test</p>
        </Link>
        <p>
          <p>
            No time pressure, just answer where you can and recieve your
            feedback at the end of the test.
          </p>
        </p>
      </>
    );
  }
}

export default Welcome;
