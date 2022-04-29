import React from 'react'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackStats() {

  const { feedback } = useContext(FeedbackContext)

  //Calculate ratings average
  //we use reduce since we want to loop through all the ratings and
  //add all the ratings together and divide by the length of feedback
  //items. The 0 is the defined default value of accumulator
  let average = feedback.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.rating
  }, 0) / feedback.length

  //let's make average only show one decimal point and remove (with
  //replace) the .0 if there is no decimal 
  average = average.toFixed(1).replace(/[.,]0$/, '')

  return (
    <div className='feedback-stats'>
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  )
}

export default FeedbackStats

//Note: if there is no review the average will show a NaN since
//there is no value, so we use the isNaN for that situation