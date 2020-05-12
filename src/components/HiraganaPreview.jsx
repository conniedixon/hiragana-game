/** @format */

import React from "react";

const HiraganaPreview = (props) => {
  let answer = props.card;
  return (
    <>
      <p>
        {answer.hiragana} - {answer.answer}
      </p>
      <p>You answered: {answer.guess}</p>
    </>
  );
};

export default HiraganaPreview;
