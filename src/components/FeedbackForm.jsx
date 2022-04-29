import { useState, useContext, useEffect } from 'react'
import FeedbackContext from '../context/FeedbackContext'
import Card from './shared/Card'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'

function FeedbackForm() {
  //input text values
  const [text, setText] = useState('')
  //character restriction for submitting data
  const [btnDisabled, setBtnDisabled] = useState(true)
  //messaged displayed if restriction is true or false
  const [message, setMessage] = useState('')
  //rating functionality
  const [rating, setRating] = useState(10)

  //import the feedback context functions and states needed
  const { addFeedback, feedbackEdit, updateFeedback } = useContext(FeedbackContext)
  //then call the use effect function
  useEffect(() => {
    if(feedbackEdit.edit === true) {
      setBtnDisabled(false)
      setText(feedbackEdit.item.text)
      setRating(feedbackEdit.item.rating)
    };
  }, [feedbackEdit])
  
  //submit the form
  const handleSubmit = (e) => {
    e.preventDefault()
    if(text.trim().length > 10) {
      const newFeedback = {
        text: text,
        rating: rating
      }
      //same as the rating select, we need to call the addFeedback  
      //from the FeedbackContext for the App
      //to execute the addFeedback function
      if(feedbackEdit.edit === true) {
        updateFeedback(feedbackEdit.item.id, newFeedback)
      } else {
        addFeedback(newFeedback)
      }

      //same as angela's, we want the previous text to go away when 
      //submitting the new feedback or review
      setText('')
      setBtnDisabled(true)
    }
  } //now we need to add the addFeedback on App.js

  const handleTextChange= ((e) => {

    //Button restriction
    if(text === '') {
      setBtnDisabled(true)
      setMessage(null)
    } else if(text !== '' && text.trim().length <= 10) {
      setBtnDisabled(true)
      setMessage('Message must be at least 10 characters')
    } else {
      setBtnDisabled(false)
      setMessage(null)
    }

    setText(e.target.value)
  })

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would your rate the service?</h2>
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className="input-group">
          <input 
            onChange={handleTextChange} 
            type="text" 
            placeholder='Write a review'
            value={text}>
          </input>
          <Button 
            type='submit'
            isDisabled={btnDisabled}
          >Submit
          </Button>
        </div>
        {message && <div className='message'>{message}</div>}
      </form>
    </Card>
  )
}

export default FeedbackForm
