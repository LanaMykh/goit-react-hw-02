import styles from "./Feedback.module.css"
const Feedback = ({ feedbacks, totalFeedback, positiveFeedback }) => {
  return (
      <div>
          <ul className={styles.list}>
              <li>Good: {feedbacks.good}</li>
              <li>Neutral: {feedbacks.neutral}</li>
              <li>Bad: {feedbacks.bad}</li>
              <li>Total: {totalFeedback}</li>
              <li>Positive: {positiveFeedback}%</li>
          </ul>
    </div>
  )
}

export default Feedback