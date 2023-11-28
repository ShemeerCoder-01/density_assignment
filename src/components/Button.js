import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
    height: 3rem;
    padding: 1rem 2rem;
    color: #000;
    font-weight: 700;
    background: linear-gradient(85.85deg, #D4F938 23.09%, #32D875 108.69%);
    border: none;
    border-radius: 7px;
`;

const Button = ({text,width,height}) => {
    return <StyledButton style={{width:width,height:height}}>{text}</StyledButton>
}

export default Button;