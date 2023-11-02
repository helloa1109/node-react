import React from 'react';
import { useRecoilState } from 'recoil';
import { styled } from 'styled-components';
import { MenuModalAtom, ToggledAtom } from '../recoil/NavAtom.ts';
import MenuModal from '../modal/MenuModal.js';

function NavMenu(props) {

    const [isToggled,setIsToggled] = useRecoilState(ToggledAtom);
    const [isVisible, setIsVisible] = useRecoilState(MenuModalAtom);


    const handleMouseEnter = () => {
        setIsVisible(true);
    };

    const handleMouseLeave = () => {
        setIsVisible(false);
    };

    return (

        <Menu isToggled={isToggled}>
            <Toggle onClick={() => {setIsToggled(!isToggled)}}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            >
                메뉴
            </Toggle>

            {isVisible && <MenuModal/>}

            <MenuLi>
                홈
            </MenuLi>

            <MenuLi>
                시리즈
            </MenuLi>

            <MenuLi>
                영화
            </MenuLi>

            <MenuLi>
                New!요즘 대세 콘텐츠
            </MenuLi>

            <MenuLi>
                내가 찜한 리스트
            </MenuLi>

            <MenuLi>
                언어별로 찾아보기
            </MenuLi>
        </Menu>
    );
}


const Menu = styled.ul`
    width: 100%;
    display: flex;
    align-items: center;
    list-style: none;
    font-size: 14px;

    /* @media screen and (max-width: 768px){
        display: ${(props) => (props.isToggled ? "flex" : "none")};
    } */
`;

const MenuLi = styled.li`
    display: flex;
    align-items: center;
    margin-right: 20px;
    white-space: nowrap;
    cursor: pointer;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

const Toggle = styled.div`
    display: none;
    cursor: pointer;

    @media screen and (max-width: 768px){
        display: flex;
    }
   
`;
export default NavMenu;