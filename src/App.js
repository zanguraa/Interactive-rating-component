import styled from "styled-components";
import Rating from "./components/Rating";

function App() {
  return (
    <Main>
      <Rating />
    </Main>
  );
}

export default App;

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #131518;
  height: 100vh;
  width: 100%;
`;
