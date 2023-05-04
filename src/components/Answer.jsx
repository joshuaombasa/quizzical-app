import React from 'react'

export default function Answer(props) {
    

    const correctAnswerId = props.correctAnswerId

    function handleClick() {
       
       
    }

    // const styles = {backgroundColor: correctAnswerId === props.id ? "#94D7A2": "white"}

    
    return (
        <div style={styles} className="answer-btn" onClick={() => {}}>
            <small className='btn-text'>{props.answerText}</small>
        </div>
    )
}