import React from 'react';
import lineChartImage from '../../images/LineChartImage.png';
import styled from 'styled-components';


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
  line-height:1;
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
  box-shadow: 0px 0px 10px 0px #EBFF2533;
  border: 1.5px solid;
  border-image-source: linear-gradient(180deg, rgba(50, 216, 117, 0.24) 0%, rgba(226, 255, 111, 0.25) 121.93%);
  display:flex;
  justify-content:space-evenly;
  align-items:center;
  gap:2.5rem;
  margin:5rem auto;
`;

const DataDiv = styled.div`
  padding:10px 2rem;
`;

function LineChartImage() {
  return (
    <div style={{ marginTop: '5rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div>
          <H2><SPANcomponent>Unlock</SPANcomponent> New Frontiers.</H2>
          <p style={{ textAlign: 'center', color: '#E7E7EA' }}>Are you a stock trader looking for new opportunities to make money? We got you covered!</p>
        </div>
        <DataDivWrapper>
          <DataDiv><H3>Same<br /> Strategies</H3></DataDiv>
          <DataDiv><H3>Same<br />  Indicators</H3></DataDiv>
          <DataDiv><H3>Better<br />  Leverage</H3></DataDiv>
          <DataDiv><H3>24x7<br />  Trading</H3></DataDiv>
        </DataDivWrapper>
        <img src={lineChartImage} alt="Line Chart" style={{ width: '90%', height: '22rem' }} />
    </div>
  )
}

export default LineChartImage