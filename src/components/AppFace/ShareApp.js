import React from 'react';
import LoudSpeakerImage from '../../images/LoudSpeakerImage.png';
import styled from 'styled-components';
import ShareSymbol from '../../images/ShareSymbol.png';
import MultiUserSymbol from '../../images/MultiUserSymbol.png';
import GemSymbol from '../../images/SymbolThree.png';
import Gradient from '../../images/Gradient.png';
import Button from '../Button';

const H2 = styled.h2`
  font-size:2.5rem;
  font-weight:700;
  text-align:center;
  line-height:0.25;
`;

const H4 = styled.h4`
  font-weight:700;
  font-size:1rem;
  margin:0;
  line-height:1.1;
  color: #fff;
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

const P = styled.p`
  color:#E7E7EA;
  margin:0.25rem 0;
  font-size:0.85rem;
`;

function ShareApp() {
    return (
        <div style={{ marginTop: '5rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <img src={LoudSpeakerImage} alt="Loud Speaker" style={{ width: '6rem', height: '6rem' }} />
                <H2>Earn Money.<SPANcomponent>The Easy Way.</SPANcomponent></H2>
                <P>No Complexity of Trading fee,generate volume and win</P>
            </div>
            <div style={{display:'flex',gap:'1rem',margin: '3rem 0'}}>
                <div style={{width:'170px',height:'150px',position:'relative',background: '#19191D',padding: '1rem',display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
                    <>
                        <img src={Gradient} style={{width:'150px',height:'140px',position:'absolute',left:'0',top:'0',opacity:'0.3'}} alt='gradient'/>
                        <img src={ShareSymbol} alt='ShareSymbol' style={{width:'50px',height:'50px'}}/>
                    </>
                    <H4>Share your<br/>referral link</H4>

                </div>
                <div style={{width:'170px',height:'150px',position:'relative',background: '#19191D',padding: '1rem',display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
                    <>
                        <img src={Gradient} style={{width:'150px',height:'140px',position:'absolute',left:'0',top:'0',opacity:'0.3'}} alt='gradient'/>
                        <img src={MultiUserSymbol} alt='MultiUserSymbol' style={{width:'50px',height:'50px'}}/>
                    </>
                    <H4>Invite Friends to<br/> Trade on Density</H4>
                </div>
                <div style={{width:'170px',height:'150px',position:'relative',background: '#19191D',padding: '1rem',display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
                    <>
                        <img src={Gradient} style={{width:'150px',height:'140px',position:'absolute',left:'0',top:'0',opacity:'0.3'}} alt='gradient'/>
                        <img src={GemSymbol} alt='GemSymbol' style={{width:'50px',height:'50px'}}/>
                    </>
                    <H4>Trade<br/>and Earn</H4>
                </div>
            </div>
            <Button text={'START EARNING NOW'} width={'14rem'}/>
        </div>
    )
}

export default ShareApp