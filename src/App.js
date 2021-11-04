import React, { useState } from "react";

import Section from "./components/Section/Section";
import FeedbackOptions from "./components/FeedbackOptions";
import FeedbackStatistics from "./components/FeedbackStatistics";
import Notification from "./components/Notification";

const App = () => {
  const initialState = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  const [state, setState] = useState(initialState);

  const onLiveFeedback = (name) => {
    setState((prev) => ({ ...prev, [name]: prev[name] + 1 }));
  };

  const { good, neutral, bad } = state;

  const getTotal = () => {
    return good + neutral + bad;
  };

  const getPositivePercentage = () => {
    return good ? Math.ceil((good / getTotal()) * 100) : 0;
  };

  const total = getTotal();
  const options = Object.keys(state);

  return (
    <div className="App">
      <Section title="Please leave feedback">
        <FeedbackOptions onLiveFeedback={onLiveFeedback} options={options} />
      </Section>
      {total ? (
        <Section title="Statistics">
          <FeedbackStatistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={getPositivePercentage()}
          />
        </Section>
      ) : (
        <Section title="">
          <Notification message="No feedback given" />
        </Section>
      )}
    </div>
  );
};

export default App;
