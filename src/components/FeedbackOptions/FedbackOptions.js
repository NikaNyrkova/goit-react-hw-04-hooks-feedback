import React from "react";
import PropTypes from "prop-types";

import st from "./FeedbackOptions.module.css";

const FeedbackOptions = ({ onLiveFeedback, options }) => (
  <div className={st.feedback_options}>
    {options.map((option, index) => (
      <button
        type="button"
        className={st.feedback_button}
        id={index}
        key={index}
        name={option}
        onClick={(e) => onLiveFeedback(e.target.name)}
      >
        {option}
      </button>
    ))}
  </div>
);

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  onLiveFeedback: PropTypes.func,
  options: PropTypes.array,
};
