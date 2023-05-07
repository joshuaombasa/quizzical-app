import React from 'react'
import uuid from 'react-uuid';

import Homepage from './Homepage'
import Quiz from './Quiz'
import '../styles/App.css'


function App() {
  const [isQuizStarted, setIsQuizStarted] = React.useState(false)

  const [quizData, setQuizData] = React.useState()



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
            answers: updatedAnswersData
          }
        })



        setQuizData(updatedQuizData)

        console.log(data.results[0])

      })
  }, [])

 

  function toggleChosenAnswer(answerId, questionId) {
    setQuizData(prevQuizData => {

      return prevQuizData.map(item => {
        return item.id === questionId ? {...item, 
          answers: 
          item.answers.map(ans => {
            return ans.id === answerId ? {...ans, isChosen: !ans.isChosen} : {...ans, isChosen: false}
          })} 
        : item
      })
    })

  }

  function questionIsAnsweredToggle() {
    setQuizData(prevQuizData => {
      return prevQuizData.map(item => {
        return {...item, isAnwered: !item.isAnwered}
      })
    })
  }

  function displayAnswer() {

  }

  function startQuiz() {
    setIsQuizStarted(prevIsQuizStarted => !prevIsQuizStarted)
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
        />}
    </>
  )
}

export default App
