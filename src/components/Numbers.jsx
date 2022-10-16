import React from "react";
import styled from "styled-components";

function Numbers() {
  let arrayOfNumbers = [1, 2, 3, 4, 5];

  return (
    <NumberContainer>
      {arrayOfNumbers.map((numb, index) => {
        return <Numb key={index}>{numb}</Numb>;
      })}
    </NumberContainer>
  );
}

export default Numbers;

const NumberContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

const Numb = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #7c8798;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background-color: #262e38;
  border: none;
  cursor: pointer;
  :hover {
    background-color: #fc7614;
    color: white;
  }
  :focus {
    background-color: #7C8798;
    color: white;
  }
`;
