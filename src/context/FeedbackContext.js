import { createContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

const FeedbackContext = createContext()

//We create the provider
export const FeedbackProvider = ({children}) => {

    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: 'This is feedback item 1',
            rating: 10,
        },
        {
            id: 2,
            text: 'This is feedback item 2',
            rating: 9,
        },
        {
            id: 3,
            text: 'This is feedback item 3',
            rating: 7,
        },
    ])

    //Our use state object for editing a
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false,
    })

    //function to set item to be edited or updated
    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true,
        })
    }

    // Update feedback item
    const updateFeedback = (id, updItem) => {
        //choose the right item is and update it
        setFeedback(feedback.map((item) => (item.id === id ? {...item, ...updItem } : item)
        ))
        //fix bug of not returning to edit=false, for new items submissions
        setFeedbackEdit({
            item: {},
            edit: false
        })
    }

    //function to add new feedback, we use npm uuid for the key id
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        //set the new feedback in the arrays of feedbacks
        setFeedback([newFeedback, ...feedback])
    }

    //function to delete a feedback
    const deleteFeedback = (id) => {
        //confirm the deletion of feedback
        if (window.confirm('Are you sure you want to delete?')) {
            //filter the items that you don't want to delete before deleting 
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    return (<FeedbackContext.Provider value={{
        feedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
        //we need to add feedbackEdit state, so the system knows what was
        //the info that needs to be edited
        feedbackEdit,
    }}>    
        {children}
    </FeedbackContext.Provider>
    )
}

export default FeedbackContext