/** @format */

import React from "react";

const Form = (props) => {
  return (
    <>
      <form onSubmit={props.checkAnswer}>
        <input
          type='text'
          minLength='1'
          onChange={props.handleChange}
          value={props.guess}
          placeholder='Type your answer here...'></input>
        <button>Submit!</button>
        <p>{props.status}</p>
        <br />
      </form>
      <button onClick={props.handleSkip}>Skip</button>
      <p>Correct: {props.score}</p>
      <p>Incorrect: {props.incorrectCount}</p>
      <p>Skipped: {props.skippedCount}</p>
    </>
  );
};

export default Form;
