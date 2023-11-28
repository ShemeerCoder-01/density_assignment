import React from 'react'
import styled from 'styled-components';
import CoinDcx from '../../images/CoinDCX.png';
import Density from '../../images/density.png';
import DeltaExchange from '../../images/DeltaExchange.png';

const H2 = styled.h2`
  font-size:2.5rem;
  font-weight:700;
  text-align:center;
  line-height:0.5;
`;

const SPANcomponent = styled.span`
  background-image: linear-gradient(
    96.58deg,
    #D5F938 47.68%,
    #D5F938 70.85%
  );
  -webkit-background-clip: text;
  // background-clip: text;
  color: transparent;
`;

function AppComparison() {
  return (
    <div style={{ marginTop: '5rem' }}>
        <div>
          <H2>Trade More.<SPANcomponent>Pay Less.</SPANcomponent></H2>
          <p style={{ textAlign: 'center', color: '#E7E7EA' }}>Our low Fees Supercharge Your Profits</p>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img src={CoinDcx} alt="CoinDCX" style={{ width: '15rem', height: '15rem' }} />
          <img src={Density} alt="Density" style={{ width: '18rem', height: '18rem' }} />
          <img src={DeltaExchange} alt="DeltaExchange" style={{ width: '15rem', height: '15rem' }} />
        </div>
      </div>
  )
}

export default AppComparison