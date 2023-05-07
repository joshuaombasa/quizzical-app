import React from 'react'
import uuid from 'react-uuid';

import Homepage from './Homepage'
import Quiz from './Quiz'
import '../styles/App.css'


function App() {
  const [isQuizStarted, setIsQuizStarted] = React.useState(false)

  const [isQuizOver, setIsQuizOver] = React.useState(false)

  const [scoreCount, setScoreCount] = React.useState()

  const [quizData, setQuizData] = React.useState([])

  const [isplayAgain, setPlayAgain] = React.useState(false)

  React.useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple")
      .then(res => res.json())
      .then(data => {
        const quizDataWithIds = data.results.map(item => {
          return {

            question: item.question,
            isAnwered: false,
            id: uuid(),
            correctAnswer: item.correct_answer,
            answers: [...item.incorrect_answers, item.correct_answer]
          }
        })

        const updatedQuizData = quizDataWithIds.map(item => {
          const updatedAnswersData = item.answers.map(ans => {
            return {
              value: ans,
              id: item.correctAnswer === ans ? item.id : uuid(),
              isChosen: false
            }
          })

          return {
            ...item,
            answers: updatedAnswersData.slice().sort(() => Math.random() - 0.5)
          }
        })



        setQuizData(updatedQuizData)

        console.log(data.results[0])

      })
  }, [])

  


 

  React.useEffect(() => {
    const trackedData = quizData.map((question) => {
      return question.answers.map((answer) => {
        return answer.isChosen && answer.id === question.id
      })
    })

    const flatTrackedData = trackedData.flat()

    let count = 0
    for (let i = 0; i < flatTrackedData.length; i++) {
      if (flatTrackedData[i] === true) {
        count++
      }
    }

    setScoreCount(count)
  }, [quizData])

  console.log(scoreCount)

  function toggleChosenAnswer(answerId, questionId) {
    setQuizData(prevQuizData => {

      return prevQuizData.map(item => {
        return item.id === questionId ? {
          ...item,
          answers:
            item.answers.map(ans => {
              return ans.id === answerId ? { ...ans, isChosen: !ans.isChosen } : { ...ans, isChosen: false }
            })
        }
          : item
      })
    })

  }

  function questionIsAnsweredToggle() {
    setQuizData(prevQuizData => {
      return prevQuizData.map(item => {
        return { ...item, isAnwered: !item.isAnwered }
      })
    })

    endQuiz()
    restartGame()
  }

  function endQuiz() {
    setIsQuizOver((prevIsQuizOver) => {
      return !prevIsQuizOver
    })
  }

  function restartGame() {
    setPlayAgain(prevIsPlayAgain => !prevIsPlayAgain)
  }


  function startQuiz() {
    setIsQuizStarted(prevIsQuizStarted => !prevIsQuizStarted)
    
  }

  function reload() {
    window.location.reload()
  }

  return (
    <>
      {isQuizStarted === false
        ?
        <Homepage startQuiz={startQuiz}
        />
        :
        <Quiz
          quizData={quizData}
          toggleChosenAnswer={toggleChosenAnswer}
          questionIsAnsweredToggle={questionIsAnsweredToggle}
          scoreCount={scoreCount}
          isQuizOver={isQuizOver}
          isplayAgain={isplayAgain}
          startQuiz={startQuiz}
          reload={reload}
        />}
    </>
  )
}

export default App
