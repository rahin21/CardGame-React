import styled from "styled-components"
import TotalScore from "./TotalScore"
import Selector from "./Selector"
import DrawCard from "./DrawCard"
import { useState } from "react"


const GamePlay = () => {

  const [Error, ShowError] = useState("")
  const [Select, Selected ] = useState();
  const [Score, SetScore] = useState(0);
  // Draw a random card
  let [drawCard, cardDrawn] = useState(1);
  const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  }

  const draw = () => {
    if(!Select){
      ShowError("Please Select a number, then draw a card.")
      return;
    }
    ShowError("");
    


    const randNum = getRandomInt(1,7)
    cardDrawn(randNum);

    if(randNum === Select){
      SetScore((prev) => prev + randNum)
    }
    else{
      SetScore((prev) => prev - 1)
    }
  }
  const resetGame = () =>{
      Selected(false)
      cardDrawn(1)
      SetScore(0)
      ShowError('')
  }

  return (
    <Container>
        <div className="top-section">
            <TotalScore
              Score={Score} 
              SetScore={SetScore}
            />
            <Selector 
              Select={Select} 
              Selected={Selected} 
              Error={Error} 
              />
        </div>
      <DrawCard 
      drawCard={drawCard} 
      cardDrawn={cardDrawn} 
      draw={draw}
      resetGame={resetGame}
      />  
    </Container>
  )
}

export default GamePlay

const Container = styled.div`
      @media screen and (min-width: 800px) {
        .top-section{
          margin-top: 60px;
          display: flex;
          justify-content: space-around;
          align-items: center;
        }
      }
  
  
`