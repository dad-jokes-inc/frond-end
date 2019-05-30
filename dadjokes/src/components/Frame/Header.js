import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 3px dashed black;
    margin-bottom: 25px;
`;
const CenterDiv = styled.div`
    margin: 0;
    padding: 0;
`
const DivChild = styled.div`
    display: flex;
    h3 {
        padding: 0px 5px 0px 5px;
    }
`

const Header = () => {
    return(
    <StyledHeader>
        <h1>Dad Jokes!</h1>
        <CenterDiv>
            <DivChild>
                <h3><Link to="/">List of Jokes</Link></h3>
                <h3><Link to="/userprofile">User Profile</Link></h3>
            </DivChild>
        </CenterDiv>
        <DivChild>
            <h3><Link to="/login">Log In</Link></h3>
            <h3>|</h3>
            <h3><Link to="/register">Sign Up</Link></h3>
        </DivChild>
    </StyledHeader>
    );
}

export default Header;
