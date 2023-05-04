import React from "react";
import uuid from 'react-uuid';

import Answer from "./Answer";
export default function Question(props) {
   
    
    const [allAnswers, setAllAnswers] = React.useState(props.answers)

    

    const answersJsx = allAnswers.map((item) => {
        return  <Answer 
                    answerText={item} 
                    key={uuid()}
                    correctAnswerId={props.id}
                    id={item === props.correctAnswer?  props.id : uuid()}
                    correctAnswer={props.correctAnswer}
                    evaluteQuiz={props.evaluteQuiz}
                    checkAnswer={checkAnswer}
                    />
                   
    })

    function checkAnswer(id) {
        console.log(id ===  props.id)
    }

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