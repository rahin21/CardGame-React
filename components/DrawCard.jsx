import styled from "styled-components"
import { Button, ButtonOutlined } from "../styled/Button"
import { useState } from "react"
import Rules from "./Rules";

const DrawCard = ({drawCard, cardDrawn, draw, resetGame}) => {

    let [rules, showRules] = useState(false);
    

  return (
    <Container>
        <div className="card-section">
            <img onClick={draw} src={`/images/card-${drawCard}.png`} alt="card" />
            <p>Click on Card to Draw</p>
        </div>
        <div className="lower-btns">
            <ButtonOutlined 
            onClick={resetGame}>Reset</ButtonOutlined>
            <Button
            onClick={()=>showRules(true)}
            >Show Rules</Button>
        </div>
        {rules && <Rules showRules={showRules}/>}
        
    </Container>
  )
}

export default DrawCard

const Container = styled.div`
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding-top: 30px;

    .card-section img{
        width: 250px;
    }

    .card-section p{
        font-size: 24px;
        font-weight: 500;
    }

    .lower-btns{
        padding-top: 15px;
        display: flex;
        flex-direction:column;
        gap: 24px;
    }

    
`
