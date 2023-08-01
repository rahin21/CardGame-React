import styled from "styled-components"
import {RxCross2} from "react-icons/rx"


const Rules = ({showRules}) => {
  
  return (
    <Container className="rules">
            <div className="closeButton"> 
              <h3>How to play:</h3>
              <div onClick={() => showRules(false)}>
                <RxCross2 fontSize={`14px`}/>
              </div>
            </div>
            <p><b>1</b>. Select a number from the select box, at the top right corner.</p>
            <p><b>2</b>. Click on the card.</p>
            <p><b>3</b>.  If the card number and selected number matches. Score will increase.</p>
            <p><b>4</b>.  Orelse <b>-1</b> will be deducted from the Total Score. </p>
    </Container>
  )
}

export default Rules

const Container = styled.div`

        text-align: start;
        max-width: 880px;
        margin-top: 30px;
        background-color: #04c4ff39;
        padding: 15px 30px;
        color: #010176;
        .closeButton{
          display: flex;
          justify-content: space-between;
        }
        .closeButton div{
          
          padding: 3px 6px 0px 6px;
          border: 1px solid transparent;
          border-radius: 10px;
          background-color: #010176;
          color: #04c4ff;
          transition: 0.2s ease-in;
        }
        .closeButton div:hover{
          background-color: transparent;
          border: 1px solid #010176;
          color: #010176;
          transition: 0.2s ease-in;
        }

`