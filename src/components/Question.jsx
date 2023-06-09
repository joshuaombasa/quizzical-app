import React from "react";

import he from 'he';
import Answer from "./Answer";

export default function Question(props) {

    const answersJsx = props.answers.map((item) => {
        return  <Answer 
                    questionId={props.questionId}
                    isAnwered={props.isAnwered}
                    answerText={item.value} 
                    key={item.id}
                    id={item.id}
                    isChosen={item.isChosen}
                    toggleChosenAnswer={props.toggleChosenAnswer}
                />
    })

    return (
        <div className="question--container">
            <h3 className="question">{he.decode(props.questionText)}</h3>
            <div className="answer-box">
                {answersJsx}
            </div>
            <br />
        </div>
    )
}