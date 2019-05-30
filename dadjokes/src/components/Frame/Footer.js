import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 3px dashed black;
    margin-top: 25px;
`

const Footer = () => {
    return (
        <StyledFooter>
            <h5>Copyright Dad Jokes Incorporated 2019</h5>
        </StyledFooter>
    );
}

export default Footer;
