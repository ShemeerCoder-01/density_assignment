import React from 'react';
import styled from 'styled-components';
import DensityLogo from '../../images/DensityLogo.png';

const StyledButton = styled.button`
    width:23rem;
    height: 3.5rem;
    padding: 1rem 2rem;
    color: #000;
    font-size:1.1rem;
    font-weight: 700;
    background: linear-gradient(85.85deg,#32D875 3.09%,#D4F938 54.69%);
    border: none;
    margin:-5rem 0;
`;

const H1 = styled.h1`
  font-size:4rem;
  font-weight:700;
  text-align:center;
  margin:-1rem 0;
  line-height:1;
  background: linear-gradient(176.64deg, #FFFFFF 2.77%, rgba(255, 255, 255, 0) 139.85%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

function GetStarted() {
  return (
  
    <div style={{marginTop:'5rem',display:'flex',flexDirection:'column',alignItems:'center'}}>
        <H1>Get Started now.</H1>
        <img src={DensityLogo} alt='DensityLogo' width={'250px'} height={'450px'}/>
        <StyledButton>Start Trading!</StyledButton>
    </div>
  )
}

export default GetStarted

// style={{position:'absolute',top:'5.5rem'}}
// style={{position:'absolute',top:'28rem'}}