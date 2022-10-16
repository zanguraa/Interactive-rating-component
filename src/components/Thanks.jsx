import React from "react";
import PicOfThank from "../assets/images/illustration-thank-you.svg";
import styled from "styled-components";

function Thanks() {
  return (
    <ThanksContainer>
      <img src={PicOfThank} alt="thank-you" />
      <SelectedDiv>You Selected 5 out of 5</SelectedDiv>
      <ThankYou>Thank You!</ThankYou>
      <Description>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </Description>
    </ThanksContainer>
  );
}

export default Thanks;

const ThanksContainer = styled.div`
  display: flex;
  gap: 24px;
  flex-direction: column;
  align-items: center;
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

const SelectedDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fc7614;
  width: 193px;
  height: 32px;
  background: #262e38;
  border-radius: 22.5px;
  @media (min-width: 768px) {
  }
`;

const ThankYou = styled.h2`
  font-weight: 700;
  font-size: 28px;
  line-height: 35px;
  margin: 0;
  color: #ffffff;
  @media (min-width: 768px) {
  }
`;

const Description = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  text-align: center;
  color: #969fad;
  @media (min-width: 768px) {
    font-size: 15px;
  }
`;
