import styled from "styled-components"

const Selector = ({Select, Selected, Error}) => {
    const selections = [1, 2, 3, 4, 5, 6];
    
  return (
    <Container>
        <div className="error">
            <p>
                {Error}
            </p>
        </div>
        <div className="boxes">
        {selections.map((value, i) => {
            return <Box 
                isSelected = {value === Select }
                key = {i} 
                onClick={() => Selected(value)}>{value}</Box>
        })} 
        </div>
        {!Select ? <h2>Select A Number</h2> : <h2>Number Selected</h2>}
              
      
    </Container>
  )
}

export default Selector

const Container = styled.div`
    @media screen and (min-width: 800px) {
        h2{
        padding-top: 10px;
        font-size: 24px;
        font-weight: 700;
        text-align: end; 
        }
    .boxes{
        display: flex;
        gap: 14px;
        }
    }
    .boxes{
        display: flex;
        justify-content: center;
        gap: 24px;
    }
    h2{
        padding-top: 10px;
        font-size: 24px;
        font-weight: 700;
        text-align: center; 
    }
    
    .error{
        text-align: center; 
        color: red;
    }

`
const Box = styled.div`

@media screen and (min-width: 800px) {
    border: 1px solid black;
    width: 72px;
    height: 72px;
    text-align: center;
    display: grid;
    place-items: center;
    font-size: 24px;
    font-weight: 700;
    background-color: ${(props) =>(props.isSelected ? "black" : "white")};
    color: ${(props) =>(!props.isSelected ? "black" : "white")};
    }
    border: 1px solid black;
    width: 42px;
    height: 42px;
    text-align: center;
    display: grid;
    place-items: center;
    font-size: 14px;
    font-weight: 500;
    background-color: ${(props) =>(props.isSelected ? "black" : "white")};
    color: ${(props) =>(!props.isSelected ? "black" : "white")};
`