import './App.css';
import Description from '../Description/Description';
import Options from '../Options/Options';
import Feedback from '../Feedback/Feedback';
import { useState } from 'react';
import Notification from '../Notification/Notification';

const App = () => {

  const [feedbacks, setFeedbacks] = useState({
    good: 0,
	  neutral: 0,
    bad: 0
  })
  
const updateFeedback = feedbackType => {
   setFeedbacks({ ...feedbacks, [feedbackType]: feedbacks[feedbackType] + 1 });
}
  
  const resetFeedback = () => {
    setFeedbacks({
      good: 0,
      neutral: 0,
      bad: 0,
    });
}  

  const totalFeedback = feedbacks.good + feedbacks.neutral + feedbacks.bad;
  const positiveFeedback = Math.round((feedbacks.good / totalFeedback) * 100)



  return (
    <>
      <Description />
      <Options updateFeedback={updateFeedback} totalFeedback={totalFeedback} resetFeedback={resetFeedback} />
      {totalFeedback === 0 ?<Notification/>:<Feedback feedbacks={feedbacks} totalFeedback={totalFeedback} positiveFeedback={positiveFeedback} />}
      
    </>
  );
};

export default App
