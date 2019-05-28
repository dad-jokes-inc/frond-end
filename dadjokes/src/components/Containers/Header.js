import React from 'react';
import styled from 'styled-components';

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
            <form>
                <input placeholder="This is a Search Bar"></input>
            </form>
            <DivChild>
            <h3>List of Jokes</h3>
            <h3>User Profile</h3>
            </DivChild>
        </CenterDiv>
        <DivChild>
            <h3>Log In</h3>
            <h3>|</h3>
            <h3>Sign Up</h3>
        </DivChild>
    </StyledHeader>
    );
}

export default Header;
