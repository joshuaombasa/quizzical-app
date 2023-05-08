import React from 'react'
import uuid from 'react-uuid';
import he from 'he'
import Question from './Question'



export default function Quiz(props) {



    const questionsJsx = props.quizData.map((item) => {
        return <Question
            questionText={item.question}
            isAnwered={item.isAnwered}
            questionId={item.id}
            key={item.id}
            answers={item.answers}
            correctAnswer={item.correctAnswer}
            toggleChosenAnswer={props.toggleChosenAnswer}
        />
    })



    return (
        <div className="quiz--container">
            {questionsJsx}
            <div className="bottom-container">
                {/* if quiz is over display score  */}
                {props.isQuizOver && <h3 className='score-message'>You scored {props.scoreCount}/10 corrrect answers</h3>}
                
                {/* some logic to choose wich button to display */}

                {
                    props.isplayAgain ?
                        <button className="quiz-btn" onClick={props.reload}>
                            Play again
                        </button>
                        : <button className="quiz-btn" onClick={props.questionIsAnsweredToggle}>
                            Check answers
                        </button>

                }


            </div>
        </div>
    )
}