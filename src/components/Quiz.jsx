import React from 'react' 
import uuid from 'react-uuid';

import Question from './Question'



export default function Quiz(props) {



    const questionsJsx = props.quizData.map((item) => {
        return  <Question 
                    questionText={item.question} 
                    isAnwered={item.isAnswered} 
                    id={item.id} 
                    key={item.id}
                    answers={item.answers}
                    correctAnswer={item.correctAnswer}
                />
    })

   

    return (
        <div className="quiz--container">
            {questionsJsx}
            <button className="quiz-btn">Check answers</button>
        </div>
    )
}