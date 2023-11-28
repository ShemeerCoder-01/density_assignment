import React from 'react';
import SymbolOne from '../../images/SymbolOne.png';
import SymbolTwo from '../../images/SymbolTwo.png';
import SymbolThree from '../../images/SymbolThree.png';
import styled from 'styled-components';

const DataDivWrapper = styled.div`
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

const FeaturesDiv = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  gap:5rem;
`;

const FeatureDiv = styled.div`
  width: 180px;
  height:340px;
  padding:1rem;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  gap:0.75rem;
  margin-top:6rem;
  background:#111;
  position:relative;
  top:-6rem;
  border-radius:7px;
`;

const FeatureDesc = styled.h4`
  font-weight:300;
  font-size:1.3rem;
  margin:0;
  text-align:center;
`;

const H4 = styled.h4`
  color: #EBFF25;
  font-weight:700;
  font-size:1.1rem;
  margin:0;
  text-align:center;
`;

const P = styled.p`
  color:#A9A9A9;
  margin:0.5rem 0;
`;

const Wrapp = styled.div` 
  width: 188px;
  height:372px;
  padding:2px;
  display:flex;
  position:relative;
  background: linear-gradient(
    161.79deg,
    #28b6a2 16.43%,
    rgba(226, 255, 111, 0) 103.77%
  );
  border-radius:7px;
`;

function AppFeatures() {
    return (
        <>
            <DataDivWrapper>
             
                <DataDiv>
                    <H4>00%</H4>
                    <P>Conversion Fee</P>
                </DataDiv>
                <DataDiv>
                    <H4>500 Mn+</H4>
                    <P>Lifetime Volume Traded</P>
                </DataDiv>
                <DataDiv>
                    <H4>250+</H4>
                    <P>Total Tradable Pairs</P>
                </DataDiv>
                <DataDiv>
                    <H4>15,000+</H4>
                    <P>Traders</P>
                </DataDiv>
            </DataDivWrapper>
            <FeaturesDiv>
              <Wrapp>
                <FeatureDiv>
                    <img src={SymbolOne} alt="Symbol" style={{ width: '4.5rem', height: '4.5rem' }} />
                    <FeatureDesc>One App.Endless Possibilities</FeatureDesc>
                </FeatureDiv>
              </Wrapp>
              <Wrapp>
                <FeatureDiv>
                    <img src={SymbolTwo} alt="Symbol" style={{ width: '4.5rem', height: '4.5rem' }} />
                    <FeatureDesc>Future of Derivative trading</FeatureDesc>
                </FeatureDiv>
              </Wrapp>
              <Wrapp>
                <FeatureDiv>
                    <img src={SymbolThree} alt="Symbol" style={{ width: '4.5rem', height: '4.5rem' }} />
                    <FeatureDesc>Is now here, for you.</FeatureDesc>
                </FeatureDiv>
              </Wrapp>
            </FeaturesDiv>
        </>
    )
}

export default AppFeatures