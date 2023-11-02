import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import NavMenu from './NavMenu';
import NavRight from './NavRight';
import NavLogo from './NavLogo';

function Header(props) {

    const [isScroll, setIsScroll] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScroll(true);
            } else if (window.scrollY === 0) {
                setIsScroll(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);



    return (
            <NavNormalLayout isScroll={isScroll}>
                <NavLayout>
                    <NavLeftSection>
                        <NavLogo />
                        <NavMenu />
                    </NavLeftSection>
                    <NavRight />
                </NavLayout>
            </NavNormalLayout>
    );
};

const NavNormalLayout = styled.div`
  top: 0;
  position: ${props => (props.isScroll ? "sticky" : "relative")};
  width: 100vw;
  background: ${props => (props.isScroll ? "rgb(15, 15, 15)" : "transparent")};
  z-index: 999;
  height: 60px;
  color: white;
`;

const NavLayout = styled.div`
  display: flex;
  justify-content: space-between;
  
`;

const NavLeftSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 60px;
`;

export default Header;