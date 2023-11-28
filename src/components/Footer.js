import React from 'react';
import Logo from '../images/Logo.png';
import styled from 'styled-components';
import * as styles from './index.module.css';
import facebook from '../images/FacebookLogo.png';
import instagram from '../images/Instagram.png';
import linkedin from '../images/linkedinWhite.png';
import Twitter from '../images/TwitterLogo.png';


const H4 = styled.h4`
  color: #fff;
  font-weight:700;
  font-size:1.1rem;
  margin:0;
  text-align:center;
`;

const P = styled.p`
  color:#BBBBC3;
  margin:0.5rem 0;
  font-size:0.85rem;
`;


function Footer() {
  return (
    <div className={styles.footer}>
        <div className={styles.footer_logo}>
            <img src={Logo} alt='logo' width={'12px'} height={'12px'}/>
            <H4>density</H4>
        </div>
        <div className={styles.footer_links}>
            <P>Blog</P>
            <P>Fees</P>
            <P>LeaderBoard</P>
            <P>Careers</P>
            <P>Contact Us</P>
            <P>Privacy Policy</P>
        </div>
        <P style={{textAlign:'center'}}>Lörem ipsum od ohet dilogi. Bell trabel, samuligt, ohöbel utom diska. Jinesade bel när feras redorade i belogi. FAR paratyp i<br/> muvåning, och pesask vyfisat. Viktiga poddradio har un mad och inde. </P>
        <div className={styles.social_links}>
            <img src={facebook} alt='facebook' width={'25px'} height={'25px'}/>
            <img src={Twitter} alt='twitter' width={'25px'} height={'25px'}/>
            <img src={linkedin} alt='linkedin' width={'25px'} height={'25px'}/>
            <img src={instagram} alt='instagram' width={'25px'} height={'25px'}/>
        </div>
    </div>
    
  )
}

export default Footer