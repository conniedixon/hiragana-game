/** @format */

import React from "react";

const HiraganaPreview = ({ card, skipped }) => {
  if (skipped)
    return (
      <>
        <p>
          {card.hiragana} - {card.answer}
        </p>
      </>
    );
  else
    return (
      <>
        <p>
          {card.hiragana} ({card.answer}), you answered {card.guess}
        </p>
      </>
    );
};

export default HiraganaPreview;
