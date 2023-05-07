import React from 'react'

export default function Answer(props) {
    

    
    // const styles = {backgroundColor: isAnswered ? "#D6DBF5": "white"}
   

    
    return (
        <div  className="answer-btn" >
            <small className='btn-text'>{props.answerText}</small>
        </div>
    )
}