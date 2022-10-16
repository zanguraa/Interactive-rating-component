import React from "react";
import styled from "styled-components";
import Star from "../assets/images/icon-star.svg";
import Numbers from "./Numbers";
import SubmitButton from "./SubmitButton";


function Rating() {





  return (
    <RatingContainer>
      <StarContainer>
        <img src={Star} alt="star" />
      </StarContainer>
      <Description>
        <h2>How did we do?</h2>
        <span>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </span>
      </Description>
      <Numbers />
      <SubmitButton />
    </RatingContainer>
  );
}

export default Rating;

const RatingContainer = styled.div`
  display: flex;
  gap: 24px;
  flex-direction: column;
  width: 276px;
  padding: 24px;
  background: radial-gradient(
    98.96% 98.96% at 50% 0%,
    #232a34 0%,
    #181e27 100%
  );
  border-radius: 15px;
  @media (min-width: 768px) {
    padding: 45px 40px 45px 32px;

width: 340px;
  }
`;

const StarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: #262e38;
  width: 40px;
  height: 40px;
`;

const Description = styled.div`
  h2 {
    color: white;
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 30px;
    margin: 0;
  }

  span {
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: #969fad;
  }
`;
