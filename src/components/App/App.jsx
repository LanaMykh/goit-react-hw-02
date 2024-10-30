import './App.css';
import Description from '../Description/Description';
import Options from '../Options/Options';
import Feedback from '../Feedback/Feedback';
import { useState } from 'react';

const App = () => {

  const [feedbacks, setFeedbacks] = useState({
    good: 0,
	  neutral: 0,
    bad: 0
  })
  
const updateFeedback = feedbackType => {
  if (feedbackType === "good") {
    setFeedbacks({ ...feedbacks, good: feedbacks.good + 1 });
  }
  if (feedbackType === "neutral") {
    setFeedbacks({ ...feedbacks, neutral: feedbacks.neutral + 1 });
  }
  if (feedbackType === "bad") {
   setFeedbacks({ ...feedbacks, bad: feedbacks.bad + 1 });
  }
}


  return (
    <>
      <Description />
      <Options updateFeedback={updateFeedback} />
      <Feedback feedbacks={feedbacks} />
    </>
  );
};

export default App
