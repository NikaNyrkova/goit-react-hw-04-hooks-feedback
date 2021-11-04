import React from "react";
import PropTypes from "prop-types";
import st from "./FeedbackStatistics.module.css";

const FeedbackStatistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  console.log(positivePercentage);
  return (
    <div>
      <p className={st.statistics_item}>Good: {good}</p>
      <p className={st.statistics_item}>Neutral: {neutral}</p>
      <p className={st.statistics_item}>Bad: {bad}</p>
      <p className={st.statistics_item}>Total: {total}</p>
      <p className={st.statistics_item}>
        Positive feedback: {positivePercentage}%
      </p>
    </div>
  );
};

export default FeedbackStatistics;

FeedbackStatistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
