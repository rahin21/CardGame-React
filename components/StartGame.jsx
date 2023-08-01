import styled from "styled-components"
import { Button } from "../styled/Button"

const StartGame = ({ toggle }) => {
  return (
    <Container>
        <div className="cover">
          <img src="/images/cover.jpg" alt="cover-image" />
        </div>
        <div className="contents">
          <h1>CARD GAME</h1>
          <Button onClick={toggle}>
            Play Now
          </Button>
        </div>
    </Container>
  )
}

export default StartGame

const Container = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 120px;
    .cover img{
      width: 849px;
    }
    
    .contents{
      
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: end;
    }

    .contents h1{
      white-space: nowrap;
      text-align: center;
      font-size: 96px;
      line-height: 144px;
      font-weight: 700;
    }

`