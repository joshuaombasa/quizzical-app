import React from 'react'


import Homepage from './Homepage'
import Quiz from './Quiz'
import '../styles/App.css'



function App() {
  const [isQuizStarted, setIsQuizStarted] = React.useState(false)

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
 