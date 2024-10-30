const Options = ({updateFeedback}) => {
  return (
      <div>
          <button onClick={() => updateFeedback("good")} type="button">Good</button>
          <button onClick={() => updateFeedback("neutral")} type="button">Neutral</button> 
          <button onClick={() => updateFeedback("bad")} type="button">Bad</button> 
         
      </div>
  )
}

export default Options