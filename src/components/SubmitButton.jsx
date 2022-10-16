import React from "react";
import styled from "styled-components";

function SubmitButton({ ThanksPageHandler }) {
  return <Submit onClick={ThanksPageHandler}>Submit</Submit>;
}

export default SubmitButton;

const Submit = styled.button`
  width: 279px;
  height: 45px;
  background: #fc7614;
  border-radius: 22.5px;
  outline: none;
  border: none;
  cursor: pointer;
  :hover {
    background-color: white;
   
  }
  @media (min-width: 768px) {
      width: 341px;
    }
`;
