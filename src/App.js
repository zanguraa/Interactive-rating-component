import React, { useState } from "react";
import styled from "styled-components";
import Rating from "./components/Rating";
import Thanks from "./components/Thanks";

function App() {
  const [thanks, setThanks] = useState(true);

  return <Main>{thanks ? <Rating /> : <Thanks />}</Main>;
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
