import styled from "styled-components"

const TotalScore = ({Score, SetScore}) => {
  return (
    <Container>
        <h1>{Score}</h1>
        <p>Total Score</p>
    </Container>
  )
}

export default TotalScore

const Container = styled.div`
    @media screen and (min-width: 800px) {
        
      max-width: 200px;
      text-align: center;
      h1{ 
          font-weight:500;
          font-size: 100px;
          line-height: 100px;
      }
    }
    text-align: center;

    h1{ 
        font-weight:500;
        font-size: 100px;
        line-height: 100px;
    }
   
    p{
        font-weight:500;
        font-size: 24px;
    }
`