import { useEffect, useState } from "react";
import css from "../App/App.module.css";
import Description from "../Description/Description";
import Feedback from "../Feedback/Feedback";
import Options from "../Options/Options";
import Notification from "../Notification/Notification";

export default function App() {
  const [feedbackCount, setFeedbackCount] = useState(() => {
    const feedbackCount = localStorage.getItem("feedback-count");
    if (feedbackCount !== null) {
      return JSON.parse(feedbackCount);
    }

    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  const totalFeedback =
    feedbackCount.good + feedbackCount.neutral + feedbackCount.bad;
  const positiveFeedback = totalFeedback === 0 ? 0 : Math.round(
    (feedbackCount.good / totalFeedback) * 100
  );

  const updateFeedback = (feedbackType) => {
    const lowerCaseFeedbackType = feedbackType.toLowerCase();
    setFeedbackCount((prevFeedbackCount) => ({
      ...prevFeedbackCount,
      [lowerCaseFeedbackType]: prevFeedbackCount[lowerCaseFeedbackType] + 1,
    }));
  };

  const resetFeedback = () => {
    setFeedbackCount({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  useEffect(() => {
    localStorage.setItem("feedback-count", JSON.stringify(feedbackCount));
  }, [feedbackCount]);

  return (
    <div className={css.container}>
      <Description />
      <Options
        onUpdate={updateFeedback}
        onReset={resetFeedback}
        hasResetButton={totalFeedback !== 0}
      />
      {totalFeedback !== 0 ? (
        <Feedback
          feedbackCount={feedbackCount}
          total={totalFeedback}
          positive={positiveFeedback}
        />
      ) : (
        <Notification text="No feedback yet" />
      )}
    </div>
  );
}
