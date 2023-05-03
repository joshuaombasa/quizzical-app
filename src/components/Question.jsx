import React from "react";

import Answer from "./Answer";
export default function Question(props) {
    console.log(props)
    const answersJsx = props.answers.map((item) => {
        return  <Answer answerText={item} />
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