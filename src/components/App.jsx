import React from 'react'


import Homepage from './Homepage'
import Quiz from './Quiz'
import '../styles/App.css'


function App() {
  const [isQuizStarted, setIsQuizStarted] = React.useState(false)

  const [quizData, setQuizData] = React.useState()

  React.useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple")
        .then(res => res.json())
        .then(data => console.log(data.results[0]))
  })

  function startQuiz() {
    setIsQuizStarted(prevIsQuizStarted => !prevIsQuizStarted)
  }

  return (
    <>
      {isQuizStarted === false ? <Homepage startQuiz={startQuiz} /> :  <Quiz />}
    </>
  )
}

export default App
 