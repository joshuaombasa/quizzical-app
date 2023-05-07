import React from "react";
import uuid from 'react-uuid';

import Answer from "./Answer";
export default function Question(props) {
   

    const answersJsx = props.answers.map((item) => {
        return  <Answer 
                    questionId={props.questionId}
                    answerText={item.value} 
                    key={item.id}
                    id={item.id}
                    isChosen={item.isChosen}
                    toggleChosenAnswer={props.toggleChosenAnswer}
                    />
                   
    })


    return (
        <div className="question--container">
            <h3 className="question">{props.questionText}</h3>
            <div className="answer-box">
                {answersJsx}
            </div>
            <br />
        </div>
    )
}