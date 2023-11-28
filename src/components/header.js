import * as React from "react"
import styled from "styled-components"
import Button from "./Button"

const Navbar = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #2A5D3233;
    height: 6rem;
    padding: 1.5rem auto;
    background: linear-gradient(0deg, rgba(42, 93, 50, 0.2), rgba(42, 93, 50, 0.2)),linear-gradient(270deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.25) 49.07%, rgba(255, 255, 255, 0) 100%);
    border-bottom: 1px solid;
    border-image-source: linear-gradient(270deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.25) 49.07%, rgba(255, 255, 255, 0) 100%);
`;

const NavLinkWrapper = styled.div`
  display: flex;
  gap: 2rem;
`;
const NavLinks = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 1rem;`
;
const P = styled.p`
  color: #FCFCFC;
  font-weight: 400;
  font-size: 14px;`
;


const NavBar = () => {
  return(
    <Navbar>
      <h2 style={{color: '#E2FF6F'}}>density</h2>
      <NavLinkWrapper>
        <NavLinks>
          <P>Career</P>
          <P>Blogs</P>
          <P>Leaderboard</P>
          <P>Fees</P>
        </NavLinks>
        <Button text={'TRADE NOW'} width={'10rem'}/>
      </NavLinkWrapper>
    </Navbar>
  )
}

export default NavBar
