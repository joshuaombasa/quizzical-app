import React from 'react'
import uuid from 'react-uuid';
import he from 'he'

import Homepage from './Homepage'
import Quiz from './Quiz'
import '../styles/App.css'


function App() {

// state to start quiz
  const [isQuizStarted, setIsQuizStarted] = React.useState(false)

  const [isQuizOver, setIsQuizOver] = React.useState(false)

  // state to hold score count
  const [scoreCount, setScoreCount] = React.useState()

  // state to hold data from API
  const [quizData, setQuizData] = React.useState([])

  const [isplayAgain, setPlayAgain] = React.useState(false)

  React.useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple")
      .then(res => res.json())
      .then(data => {

        // this is data from the API
        const quizDataWithIds = data.results.map(item => {
          return {

            question: item.question,
            // this is not from the API
            isAnwered: false,
            // this is not from the API
            id: uuid(),
            correctAnswer: item.correct_answer,
            // this array is made by spreading the incorect_answers arry and adding the correct answer
            answers: [...item.incorrect_answers, item.correct_answer]
          }
        })
        
        // i am updating the data to add ids and other info to the answers array
        const updatedQuizData = quizDataWithIds.map(item => {
          // this is a variable i made inside the map method to store updated answers array, each answer is now an object 
          const updatedAnswersData = item.answers.map(ans => {
            return {
              value: ans,
              // we want the correct answer to have an id similar to the question id, this helps when comparing the id of the clicked answer vs the correct answer
              id: item.correctAnswer === ans ? item.id : uuid(),
              isChosen: false
            }
          })

          // this is what i return to the bigger map method
          return {
            ...item,
            // this here re-arranges array items randomly
            answers: updatedAnswersData.slice().sort(() => Math.random() - 0.5)
          }
        })


        // finally we update  state with the new data from API
        setQuizData(updatedQuizData)

        console.log(data.results[0])

      })
  }, [])



  React.useEffect(() => {
    // we are mapping over the quizData state, the result is an array with other 10 arrays of length 4 inside
    const trackedData = quizData.map((question) => {
      // this goes dipper to map the answers
      return question.answers.map((answer) => {
        // if the answers isChosen and its the right answer, return true, else false
        return answer.isChosen && answer.id === question.id
      })
    })

    // this combines all the inner arrays into 1 array
    const flatTrackedData = trackedData.flat()

    // we determine the length of the array
    let count = 0
    for (let i = 0; i < flatTrackedData.length; i++) {
      if (flatTrackedData[i] === true) {
        count++
      }
    }
    
    // we set the state to store the count
    setScoreCount(count)
  }, [quizData])

  console.log(scoreCount)

  // this function upadtes state as the user clicks various answers, flipping the isChosen 
  function toggleChosenAnswer(answerId, questionId) {
    setQuizData(prevQuizData => {

      return prevQuizData.map(item => {
        // getting the question that has the answers we are sorting, we return everything, but modify the answers
        return item.id === questionId ? {
          ...item,
          answers:
          // logic to modify the answer property. If ids march, set isChosen to true else false
            item.answers.map(ans => {
              return ans.id === answerId ? { ...ans, isChosen: !ans.isChosen } : { ...ans, isChosen: false }
            })
        }
          : item
      })
    })

  }


  // updating state of each question to isAnswered, this is happeing right befored end , then determine score
  function questionIsAnsweredToggle() {
    setQuizData(prevQuizData => {
      return prevQuizData.map(item => {
        return { ...item, isAnwered: !item.isAnwered }
      })
    })

    endQuiz()
    restartGame()
  }

  // condition has to be false so that the score is displayed
  function endQuiz() {
    setIsQuizOver((prevIsQuizOver) => {
      return !prevIsQuizOver
    })
  }

  // has to be true to display play again buttton
  function restartGame() {
    setPlayAgain(prevIsPlayAgain => !prevIsPlayAgain)
  }

// logic to start game
  function startQuiz() {
    setIsQuizStarted(prevIsQuizStarted => !prevIsQuizStarted)
    
  }

  // reload after clicking play again
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
