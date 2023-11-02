import React from 'react';
import { styled } from 'styled-components';

function NavRight(props) {
    return (
        <RightSection>
            <Search>검색</Search>
            <Alarm>알람</Alarm>
            <User>유저</User>
        </RightSection>
    );
}

const RightSection = styled.div`
    display: flex;
    align-items: center;
    padding-right: 60px;
`;

const Alarm = styled.div`
    display: flex;
    margin: 10px 10px;
    cursor: pointer;
`;

const Search = styled.div`
    margin: 10px 10px;
    cursor: pointer;
`;

const User = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    
`;

export default NavRight;