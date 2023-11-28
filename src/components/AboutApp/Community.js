import React from 'react';
import styled from 'styled-components';
import * as styles from '../index.module.css';
import Button from '../Button';

const H2 = styled.h2`
  font-size:2.5rem;
  font-weight:700;
  text-align:center;
  line-height:0.5;
`;

const H3 = styled.h3`
  font-size:1.1rem;
  font-weight:700;
  text-align:center;
  line-height:0;
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

const DataDivWrapper = styled.div`

  // background: linear-gradient(0deg, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05)),
  // linear-gradient(180deg, rgba(50, 216, 117, 0.24) 0%, rgba(226, 255, 111, 0.25) 121.93%);
  width:700px;
  box-shadow: 0px 0px 10px 0px #EBFF2533;
  border: 1.5px solid;
  border-image-source: linear-gradient(180deg, rgba(50, 216, 117, 0.24) 0%, rgba(226, 255, 111, 0.25) 121.93%);
  display:flex;
  justify-content:space-evenly;
  align-items:center;
  margin:3.5rem auto;
`;

const DataDiv = styled.div`
  width:233px;
  border-right: 1px solid;
  border-color:#fff;
  padding:1rem 0.5rem;
  &:last-child{
    border-right: 0;
  }
`;

const P = styled.p`
  color:#E7E7EA;
  margin:0.25rem 0;
  text-align:center;
  font-size:0.85rem;
`;

function Community() {
  return (
    <div className={styles.background}>
        <div>
          <H2>Trade Together.<SPANcomponent>Thrive Together.</SPANcomponent></H2>
          <P>Join the fun-filled community on our platform.</P>
        </div>
        <DataDivWrapper>
          <DataDiv>
            <H3>10,000+</H3>
            <P style={{color:'#A9A9A9',fontSize:'0.75rem'}}>Traders</P>
          </DataDiv>
          <DataDiv>
            <H3>100Mn</H3>
            <P style={{color:'#A9A9A9',fontSize:'0.75rem'}}>Daily Volume Traded</P>
          </DataDiv>
          <DataDiv>
            <H3>Daily</H3>
            <P style={{color:'#A9A9A9',fontSize:'0.75rem'}}>Trade Analysis</P>
          </DataDiv>
          <DataDiv>
            <H3>Live</H3>
            <P style={{color:'#A9A9A9',fontSize:'0.75rem'}}>Signals</P>
          </DataDiv>
        </DataDivWrapper>
        <Button text={'JOIN COMMUNITY'} width={'12rem'}/>
      </div>
  )
}

export default Community