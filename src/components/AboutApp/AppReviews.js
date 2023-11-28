import React from 'react';
import Gradient from '../../images/Gradient.png';
import styled from 'styled-components';
import Arjun from '../../images/Arjun.png';
import Praksh from '../../images/Prakash.png';
import Shambhavi from '../../images/Shambhavi.png'


const H2 = styled.h2`
  font-size:2.5rem;
  font-weight:700;
  text-align:center;
  line-height:0.5;
`;

const P = styled.p`
  color:#666673;
  margin:0.5rem 0;
  font-size:0.85rem;
`;

const H4 = styled.h4`
  font-weight:700;
  font-size:1rem;
  margin:0;
  line-height:1.1;
  color: #0E0E0F;
`;

function AppReviews() {
    return (
        <div style={{ width: '100%', padding: '1rem 0', marginTop: '5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', background: 'white' }}>
            <div>
                <H2 style={{ color: '#0E0E0F' }}>Don’t take our word for it.</H2>
                <p style={{ textAlign: 'center', color: '#32333A' }}>Hear it from our expert community of traders who have made<br/> insane amounts in a short amount of time</p>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem', margin: '2rem 0' }}>
                <div style={{ width: '220px', height: '300px', background: '#F3F3F3',position:'relative' }}>
                    <div style={{ padding: '1rem',position:'relative'}}>
                        <img src={Gradient} alt='frame' style={{width:'160px',height:'130px',position:'absolute',right:'1rem',top:'1rem',opacity:'0.1'}}/>
                        <P>As someone who's always looking for the next big thing, I was really excited to try out Density’s crypto futures trading platform. And I have to say, it definitely lived up to my expectations.</P>
                    </div>
                    <div style={{margin:'0 0.9rem'}}>
                        <H4>Prakash<br/>Jamatia</H4>
                        <P style={{fontSize:'0.65rem'}}>Founder, TradeShala</P>
                    </div>
                    <img src={Praksh} alt='Prakash' style={{position:'absolute',bottom:'0',right:'0',width:'100px',height:'70px'}}/>
                </div>
                <div style={{ width: '220px', height: '300px', background: '#F3F3F3',position:'relative' }}>
                    <div style={{ padding: '1rem',position:'relative' }}>
                        <img src={Gradient} alt='frame' style={{width:'160px',height:'130px',position:'absolute',right:'1rem',top:'1rem',opacity:'0.1'}}/>
                        <P>I'm not a seasoned trader, but this website has made it easy for me to get started with crypto futures trading. Their KYC was very fast and the educational resources were really helpful.</P>
                    </div>
                    <div style={{margin:'0 0.9rem'}}>
                        <H4>Shambhavi<br/>Nayak</H4>
                        <P style={{fontSize:'0.65rem'}}>Commodity Trader</P>
                    </div>
                    <img src={Shambhavi} alt='Shambhavi' style={{position:'absolute',bottom:'0',right:'0',width:'100px',height:'70px'}}/>
                </div>
                <div style={{ width: '220px', height: '300px', background: '#F3F3F3',position:'relative' }}>
                    <div style={{ padding: '1rem',position:'relative' }}>
                        <img src={Gradient} alt='frame' style={{width:'160px',height:'130px',position:'absolute',right:'1rem',top:'1rem',opacity:'0.1'}}/>
                        <P>I've been using this platform for a few months now and it's been a great experience. I was delighted to see all the major crypto coins listed on Density Exchange.</P>
                    </div>
                    <div style={{margin:'0 0.9rem'}}>
                        <H4>Arjun<br/>Naik</H4>
                        <P style={{fontSize:'0.65rem'}}>Equity Trader</P>
                    </div>
                    <img src={Arjun} alt='Arjun' style={{position:'absolute',bottom:'0',right:'0',width:'100px',height:'70px'}}/>
                </div>
            </div>
        </div>
    )
}

export default AppReviews