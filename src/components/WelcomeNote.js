import React from 'react'
import styled from "styled-components"


const H1 = styled.h1`
  font-size:4rem;
  font-weight:700;
  text-align:center;
  line-height:1;
`;

const SPAN = styled.span`
  background-image: linear-gradient(
    96.58deg,
    #D5F938 47.68%,
    #D5F938 70.85%
  );
  -webkit-background-clip: text;
  // background-clip: text;
  color: transparent;
`;

function WelcomeNote() {
  return (
    <div>
        <H1>It's time to trade,<br />the <SPAN>future.</SPAN></H1>
        <p style={{ textAlign: 'center' }}>Trade BTC, ETH Futures with 125x leverage and earn rewards.</p>
    </div>
  )
}

export default WelcomeNote