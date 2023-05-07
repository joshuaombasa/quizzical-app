import React from 'react'

export default function Answer(props) {
    
     
    let styles 
    
    if (props.isAnwered) {
         if (props.isChosen && props.id === props.questionId) {
            styles = {backgroundColor: "green", color: "white"}
         } else if(props.isChosen && props.id !== props.questionId) {
            styles =  {backgroundColor: "red", color: "white"}
         } else if(!props.isChosen && props.id === props.questionId) {
            styles =  {backgroundColor: "green", color: "white"}
         }
    } else {
        if (props.isChosen) {
           styles = {backgroundColor: "#D6DBF5"}
        } else {
           styles =  {backgroundColor: "white"}
        }
    }

    // const styles = props.isAnwered 
    // ? 
    // {backgroundColor: 
    //     props.isChosen ? "red":
    //     props.id === props.questionId ? "green" : ''  }
    // :{backgroundColor: props.isChosen ? "#D6DBF5": "white"}
   
    
   
    
    return (
        <div  
        style={styles}
        className="answer-btn" 
        onClick={() => props.toggleChosenAnswer(props.id, props.questionId)}>
            <small className='btn-text'>{props.answerText}</small>
        </div>
    )
}