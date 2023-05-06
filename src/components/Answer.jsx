import React from 'react'

export default function Answer(props) {
    
    const [isAnswered, setIsAnswered] = React.useState(false)
    const correctAnswerId = props.correctAnswerId

    function handleClick(id) {
        setIsAnswered(prevIsAnswered => !prevIsAnswered)
        props.checkAnswer(props.id)
    }

    if (isAnswered) {
        const styles = {backgroundColor: correctAnswerId === props.id ? "#94D7A2": "white"}
    }

    // const styles = {backgroundColor: isAnswered ? "#D6DBF5": "white"}
    const styles = {backgroundColor: correctAnswerId === props.id ? "#94D7A2": "white"}

    
    return (
        <div style={styles} className="answer-btn" onClick={() => {handleClick(props.id)}}>
            <small className='btn-text'>{props.answerText}</small>
        </div>
    )
}