import React from 'react';
import styled from 'styled-components';
import Orios from '../../images/Orios.png'
import Inflection from '../../images/Inflection.png'
import iSeed from '../../images/iSeed.png'
import PerpetualValue from '../../images/PerpetualValue.png'
import polygonlabs from '../../images/polygonlabs.png'
import Rise from '../../images/Rise.png'
import TribeCapital from '../../images/TribeCapital.png'
import Utsav from '../../images/UtsavSomani.png'
import AdityaNagarsheth from '../../images/AdityaNagarsheth.png'
import ArjunSethi from '../../images/ArjunSethi.png'
import GokulRajaram from '../../images/GokulRajaram.png'
import KaranVivekNagpal from '../../images/KaranVivekNagpal.png'
import KunalShah from '../../images/KunalShah.png'
import SajidRehman from '../../images/SajidRehman.png'
import SandeepNailawal from '../../images/SandeepNailawal.png'

import * as styles from "../../components/index.module.css"

const H2 = styled.h2`
  font-size:2.5rem;
  font-weight:700;
  text-align:center;
  line-height:0.5;
`;

const P = styled.p`
  color:#A9A9A9;
  font-size:0.5rem;
  margin:0.5rem 0;
`;

const H4 = styled.h4`
  font-weight:500;
  margin:0;
  text-align:center;
  margin-top:0.5rem;
  line-height:0.5;
`;


function Investors() {
  return (
    <div style={{marginTop:'7rem',display:'flex',flexDirection:'column',alignItems:'center',gap:'2.5rem'}}>
        <H2>Backed by the Best.</H2>
        <div style={{width:'600px',display:'flex',gap:'3.5rem',justifyContent:'space-evenly',alignItems:'center',flexFlow:'row wrap'}}>
            <img className={styles.invest_cmp} src={Orios} alt='Orios'/>
            <img className={styles.invest_cmp} src={Inflection} alt='Inflection' style={{width:'85px',height:'60px'}}/>
            <img className={styles.invest_cmp} src={iSeed} alt='iSeed' style={{width:'60px',height:'40px'}}/>
            <img className={styles.invest_cmp} src={PerpetualValue} alt='PerpetualValue' style={{width:'90px',height:'35px'}}/>
            <img className={styles.invest_cmp} src={Rise} alt='Rise' style={{width:'85px',height:'60px'}}/>
            <img className={styles.invest_cmp} src={TribeCapital} alt='TribeCapital' style={{width:'150px',height:'15px'}}/>
            <img className={styles.invest_cmp} src={polygonlabs} alt='polygonlabs'/>
        </div>
        <div style={{width:'700px',display:'flex',gap:'0.75rem',justifyContent:'space-evenly',alignItems:'flex-start',flexFlow:'row wrap',marginTop:'3rem'}}>
          <div className={styles.invest_wrapper}>
            <img className={styles.invest_per} src={Utsav} alt='Utsav'/>
            <H4>Utsav Somani</H4>
          </div>
          <div className={styles.invest_wrapper}>
            <img className={styles.invest_per} src={AdityaNagarsheth} alt='AdityaNagarsheth'/>
            <H4>Aditya Nagarsheth</H4>
            <P>Perpetual Value Partners</P>
          </div>
          <div className={styles.invest_wrapper}>
            <img className={styles.invest_per} src={GokulRajaram} alt='GokulRajaram'/>
            <H4>Gokul Rajaram</H4>
          </div>
          <div className={styles.invest_wrapper}>
            <img className={styles.invest_per} src={SajidRehman} alt='SajidRehman'/>
            <H4>Sajid Rehman</H4>
            <P>My Asia VC</P>
          </div>
          <div className={styles.invest_wrapper}>
            <img className={styles.invest_per} src={ArjunSethi} alt='ArjunSethi'/>
            <H4>Arjun Sethi</H4>
            <P>Tribe Capital</P>
          </div>
          <div className={styles.invest_wrapper}>
            <img className={styles.invest_per} src={KunalShah} alt='KunalShah'/>
            <H4>Kunal Shah</H4>
          </div>
          <div className={styles.invest_wrapper}>
            <img className={styles.invest_per} src={SandeepNailawal} alt='SandeepNailawal'/>
            <H4>SandeepNailawal</H4>
            <P>Polygon Labs</P>
          </div>
          <div className={styles.invest_wrapper}>
            <img className={styles.invest_per} src={KaranVivekNagpal} alt='KaranVivekNagpal'/>
            <H4>Karan Vivek Nagpal</H4>
          </div>
        </div>
    </div>
  )
}

export default Investors