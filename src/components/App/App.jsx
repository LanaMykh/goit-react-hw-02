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

const totalFeedback = feedbacks.good + feedbacks.neutral + feedbacks.bad;


  return (
    <>
      <Description />
      <Options updateFeedback={updateFeedback} />
      {totalFeedback === 0 ?<Notification/>:<Feedback feedbacks={feedbacks} />}
      
    </>
  );
};

export default App
