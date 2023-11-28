import React from 'react'
import styled from 'styled-components';
import Button from '../Button';
import ChartImage from '../../images/ChartImage.png';


const H2 = styled.h2`
  font-size:2.5rem;
  font-weight:700;
  text-align:center;
  line-height:0.5;
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

function BarChartImage() {
  return (
    <div style={{ marginTop: '5rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div>
          <H2>Explore the Markets</H2>
          <H2>like it is your<SPAN> Playground.</SPAN></H2>
          <p style={{ textAlign: 'center', color: '#E7E7EA' }}>Search for your favorite coins and stay ahead of market</p>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img src={ChartImage} alt="Bar Chart" style={{ width: '90%', height: '35rem' }} />
        </div>
        <Button text={'EXPLORE MARKETS'} width={'13rem'} />
    </div>
  )
}

export default BarChartImage