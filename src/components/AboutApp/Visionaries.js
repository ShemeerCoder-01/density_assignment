import React from 'react';
import Gradient from '../../images/Gradient.png';
import styled from 'styled-components';
import Aakash from '../../images/AkashNeeraj.png';
import Bhupendra from '../../images/BhupendraBule.png';
import Deepak from '../../images/DeepakVasman.png';
import LinkedIn from '../../images/LinkedinIcon.png';

const H2 = styled.h2`
  font-size:2.5rem;
  font-weight:700;
  text-align:center;
  line-height:1.05;
`;

const H4 = styled.h4`
  font-weight:700;
  font-size:1.1rem;
  margin:0;
  line-height:1.3;
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
  color:#BBBBC3;
  margin:0.25rem 0;
  font-size:0.85rem;
`;

function Visionaries() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' ,background:'#19191D'}}>
           
            <H2>Meet the <SPANcomponent>Visionaries</SPANcomponent><br/>behind density.</H2>
            <div style={{ display: 'flex', gap: '1rem', margin: '3rem 0' }}>
                <div style={{ width: '200px', height: '200px', position: 'relative', background: '#2B2C33', padding: '1rem', display: 'flex', flexDirection: 'column',justifyContent:'space-between'}}>
                    <div>
                        <img src={Gradient} style={{ width: '180px', height: '140px', position: 'absolute', left: '0', top: '0', opacity: '0.5' }} alt='gradient' />
                        <H4>Aakash Neeraj<br/>Mittal</H4>
                        <P>CEO,Density</P>   
                    </div>
                    <img src={LinkedIn} alt='linkedin' width={'25px'} height={'25px'}/>
                    <img src={Aakash} alt='Aakash' style={{position:'absolute',bottom:'0',right:'0',width:'190px',height:'160px'}}/>
                </div>
                <div style={{ width: '200px', height: '200px', position: 'relative', background: '#2B2C33', padding: '1rem', display: 'flex', flexDirection: 'column',justifyContent:'space-between'}}>
                    <div>
                        <img src={Gradient} style={{ width: '180px', height: '140px', position: 'absolute', left: '0', top: '0', opacity: '0.5' }} alt='gradient' />
                        <H4>Bhupendra<br/>Bule</H4>
                        <P>CTO,Density</P>
                    </div>
                    <img src={LinkedIn} alt='linkedin' width={'25px'} height={'25px'}/>
                    <img src={Bhupendra} alt='Bhupendra' style={{position:'absolute',bottom:'0',right:'0',width:'160px',height:'160px'}}/>
                </div>
                <div style={{ width: '200px', height: '200px', position: 'relative', background: '#2B2C33', padding: '1rem', display: 'flex', flexDirection: 'column',justifyContent:'space-between'}}>
                    <div>
                        <img src={Gradient} style={{ width: '180px', height: '140px', position: 'absolute', left: '0', top: '0', opacity: '0.5' }} alt='gradient' />
                        <H4>Deepak<br/>Vasman</H4>
                        <P>CBO,Density</P>
                    </div>
                    <img src={LinkedIn} alt='linkedin' width={'25px'} height={'25px'}/>
                    <img src={Deepak} alt='Deepak' style={{position:'absolute',bottom:'0',right:'0',width:'160px',height:'160px'}}/>
                </div>
            </div>
        </div>
    )
}

export default Visionaries