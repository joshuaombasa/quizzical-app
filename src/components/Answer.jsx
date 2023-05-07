import React from 'react'

export default function Answer(props) {
    
//    console.log(props.isChosen)
    
    const styles = {backgroundColor: props.isChosen ? "#D6DBF5": "white"}
   

    
    return (
        <div  
        style={styles}
        className="answer-btn" 
        onClick={() => props.toggleChosenAnswer(props.id, props.questionId)}>
            <small className='btn-text'>{props.answerText}</small>
        </div>
    )
}