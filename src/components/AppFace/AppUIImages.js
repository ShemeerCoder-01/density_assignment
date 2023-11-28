import React from 'react';
import PhoneLeft from "../../images/PhoneLeft.png";
import PhoneMid from "../../images/PhoneMid.png";
import PhoneRight from "../../images/PhoneRight.png";
import styled from 'styled-components';

const ImageWrapper = styled.div`
  display:flex;
  align-items:center;
  justify-content:space-around;
  margin:6rem auto;
`;

function AppUIImages() {
  return (
    <ImageWrapper>
    <img src={PhoneLeft} alt="phone" style={{ width: '13rem', height: '22rem' }} />
    <img style={{ position: 'absolute', zIndex: '10', width: '17rem', height: '27rem' }} src={PhoneMid} alt="phone" />
    <img src={PhoneRight} alt="phone" style={{ width: '13rem', height: '22rem' }} />
  </ImageWrapper>
  )
}

export default AppUIImages