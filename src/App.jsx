import { useState } from "react"
import GamePlay from "../components/GamePlay"
import StartGame from "../components/StartGame"

import "./App.css"
function App() {

  const [gameStart, setGameStart] = useState(false)

  const toggleStartGame = () => {
    setGameStart((prev) => !prev)
  }
  return (
    <> 
      {gameStart ? <GamePlay/> : <StartGame toggle = {toggleStartGame}/> }
    </>
  )
}

export default App

