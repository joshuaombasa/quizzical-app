import React from "react";

import Answer from "./Answer";
export default function Question() {
    return (
        <div className="question--container">
            <h3 className="question">How would one say goodbye in Spanish?</h3>
            <div className="answer-box">
                <Answer />
            </div>
        </div>
    )
}