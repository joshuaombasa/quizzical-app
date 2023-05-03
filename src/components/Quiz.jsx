import React from 'react' 
import uuid from 'react-uuid';

import Question from './Question'

export default function Quiz(props) {

    const questionsJsx = props.quizData.map((item) => {
        return  <Question 
                    questionText={item.question} 
                    id={uuid()} 
                    key={uuid()}
                    answers={item.incorrect_answers}
                    correctAnswer={item.correct_answer}
                />
    })

    return (
        <div className="quiz--container">
            {questionsJsx}
        </div>
    )
}