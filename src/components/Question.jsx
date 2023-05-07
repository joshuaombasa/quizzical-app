import React from "react";
import uuid from 'react-uuid';

import Answer from "./Answer";
export default function Question(props) {
   
    console.log(props)
    
    const [allAnswers, setAllAnswers] = React.useState(props.answers)


    

    const answersJsx = allAnswers.map((item) => {
        return  <Answer 
                    answerText={item.value} 
                    key={item.id}
                    id={item.id}
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