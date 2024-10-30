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
  return (
    <>
      <Description />
      <Options />
      <Feedback feedbacks={feedbacks} />
    </>
  );
};

export default App
