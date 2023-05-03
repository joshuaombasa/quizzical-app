import React from "react";

import Answer from "./Answer";
export default function Question(props) {
   
    
    const [allAnswers, setAllAnswers] = React.useState(props.answers)

    // console.log(allAnswers)

    const answersJsx = props.answers.map((item) => {
        return  <Answer 
                    answerText={item} 
                    id={props.id}
                    evaluteQuiz={props.evaluteQuiz}
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