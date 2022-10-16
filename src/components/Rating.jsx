import React from "react";
import styled from "styled-components";
import Star from "../assets/images/icon-star.svg";

function Rating() {
  return (
    <RatingContainer>
      <StarContainer>
        <img src={Star} alt="star" />
      </StarContainer>
    </RatingContainer>
  );
}

export default Rating;

const RatingContainer = styled.div`
  display: flex;
  width: 276px;

  padding: 24px;
  background: radial-gradient(
    98.96% 98.96% at 50% 0%,
    #232a34 0%,
    #181e27 100%
  );
  border-radius: 15px;
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
