import React from 'react';
import IphoneTrade from '../../images/iPhoneTradeFuture.png';
import tiltedUser from '../../images/TiltedUser.png';
import iphoneDeposit from '../../images/iphoneDeposit.png';
import NumberOne from '../../images/NumberOne.png';
import iphoneChart from '../../images/iPhoneChart.png';
import trendingUp from '../../images/TrendingUp.png';
import styled from 'styled-components';
import Button from '../Button';


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


const P = styled.p`
  color:#A9A9A9;
  margin:0.5rem 0;
`;

function StepsToTrade() {
  return (
    <div style={{ marginTop: '5rem', display: 'flex', flexDirection: 'column' }}>
        <div>
          <H2>Derivatives made simple</H2>
          <H2>in <SPAN>3 Easy</SPAN> Steps</H2>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', marginTop: '2.5rem' }}>
            <img src={IphoneTrade} alt="iphone" style={{ width: '170px', height: '330px' }} />
            <div style={{ width: '200px', display: 'flex', flexDirection: 'column' }}>
              <img src={tiltedUser} alt="user" style={{ width: '5rem', height: '5rem' }} />
              <h3>Create an  Account</h3>
              <P>Register & Complete your Verification in less than 2 minutes</P>
              <Button text={'TRADE NOW'} width={'10rem'} height={'2.5rem'} />
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', marginTop: '7rem' }}>
            <img src={iphoneDeposit} alt="iphone" style={{ width: '170px', height: '330px' }} />
            <div style={{ width: '200px', display: 'flex', flexDirection: 'column' }}>
              <img src={NumberOne} alt="user" style={{ width: '5rem', height: '5rem' }} />
              <h3>Deposit Funds</h3>
              <P>Add funds quickly using a variety of payment methods</P>
              <Button text={'TRADE NOW'} width={'10rem'} height={'2.5rem'} />
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', marginTop: '7rem' }}>
            <img src={iphoneChart} alt="iphone" style={{ width: '170px', height: '330px' }} />
            <div style={{ width: '200px', display: 'flex', flexDirection: 'column' }}>
              <img src={trendingUp} alt="user" style={{ width: '5rem', height: '5rem' }} />
              <h3>Become a Trader</h3>
              <P>Choose Your Trading Pair & Trade Seamlessly</P>
              <Button text={'TRADE NOW'} width={'10rem'} height={'2.5rem'} />
            </div>
          </div>
        </div>
      </div>
  )
}

export default StepsToTrade