import React from 'react';
import TwentyFivepercent from '../../images/NumberImage.png';
import gradient from '../../images/Gradient.png';
import UserLogo from '../../images/UserLogo.png';
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

const P = styled.p`
  color:#A9A9A9;
  margin:0.5rem 0;
`;


function AppBenefits() {
    return (
        <div style={{ width: '100%', padding: '1rem 0', marginTop: '5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', background: 'white' }}>
            <div>
                <H2 style={{ color: '#0E0E0F' }}>Start Small. Earn Big.</H2>
                <p style={{ textAlign: 'center', color: '#32333A' }}>Deposity a minimum of 1000 and get a Deposit bonus +<br /> dedicated relationship manager</p>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem', margin: '2rem 0' }}>
                <div style={{ width: '350px', height: '330px', background: '#F3F3F3', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <img src={TwentyFivepercent} alt="25%" style={{ width: '100px', height: '3rem', paddingTop: '2.5rem', paddingLeft: '1.5rem' }} />
                        <img src={gradient} alt="Frame" style={{ width: '200px', height: '150px', opacity: '0.1' }} />
                    </div>
                    <div style={{ padding: '1rem' }}>
                        <H3 style={{ color: '#0E0E0F', textAlign: 'left' }}>Deposit<br />Bonus.</H3>
                        <P>Our assets' liquidity is unmatched in the market, with a small bid-ask spread and a well-balanced order book.</P>
                    </div>
                </div>
                <div style={{ width: '350px', height: '330px', background: '#F3F3F3' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <img src={UserLogo} alt="UserLogo" style={{ width: '100px', height: '3rem', paddingTop: '2.5rem', paddingLeft: '1.5rem' }} />
                        <img src={gradient} alt="Frame" style={{ width: '200px', height: '150px', opacity: '0.1' }} />
                    </div>
                    <div style={{ padding: '1rem' }}>
                        <H3 style={{ color: '#0E0E0F', textAlign: 'left' }}>Dedicated<br />Relationship Manager.</H3>
                        <P>Our assets' liquidity is unmatched in the market, with a small bid-ask spread and a well-balanced order book.</P>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AppBenefits