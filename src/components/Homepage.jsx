import React from "react";

export default function Homepage(props) {
    return (
        <main className="homepage">
            <div className="home--container">
                <h1 className="title">Quizzical</h1>
                <button className="start-quiz-btn" onClick={props.startQuiz} >Start quiz</button>
            </div>
        </main>
    )
}