import React from 'react'

export default function Answer(props) {
    const [isClicked, setIsClicked] = React.useState(false)

    console.log(props)

    function handleClick() {
        setIsClicked((prevIsClicked) => !prevIsClicked)
       
    }

    const styles = {backgroundColor: isClicked? "#94D7A2": "white"}

    
    return (
        <div style={styles} className="answer-btn" onClick={handleClick}>
            <small className='btn-text'>{props.answerText}</small>
        </div>
    )
}