import React from 'react'

export default function Answer(props) {
    
    const [isAnswered, setIsAnswered] = React.useState(false)
    const correctAnswerId = props.correctAnswerId

    function handleClick() {
        setIsAnswered(prevIsAnswered => !prevIsAnswered)
    }

    // const styles = {backgroundColor: correctAnswerId === props.id ? "#94D7A2": "white"}
    const styles = {backgroundColor: isAnswered ? "#F8BCBC": "white"}

    
    return (
        <div style={styles} className="answer-btn" onClick={handleClick}>
            <small className='btn-text'>{props.answerText}</small>
        </div>
    )
}