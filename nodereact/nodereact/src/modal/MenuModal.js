import React from 'react';
import { styled } from 'styled-components';

function MenuModal(props) {
    return (
        <ModalContainer>
            <MenuText>메뉴</MenuText>
            <MenuContent>
                홈
            </MenuContent>
            <MenuContent>
            시리즈
            </MenuContent>
            <MenuContent>
            영화
            </MenuContent>
            <MenuContent>
            New!요즘 대세 콘텐츠
            </MenuContent>

            <MenuContent>
            내가 찜한 리스트
            </MenuContent>

            <MenuContent>
            언어별로 찾아보기
            </MenuContent>
        </ModalContainer>
    );
}

const ModalContainer = styled.div`
    position: absolute;
    top: 50px;
    background-color: black;
    width: 140px;
    height: 150px;
    text-align: center;
    border-top: 1px solid white;
    left: 23%;
`;

const MenuText = styled.div`
    color: white;
    font-weight: bold;
    font-size: 16px;
    margin-top: 10px;
`;

const MenuContent = styled.div`
    color: white;
`;

export default MenuModal;
