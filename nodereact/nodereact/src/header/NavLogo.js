import React from 'react';
import netflix from "../img/nexflix.png";
import "../style/Header.css";

function NavLogo(props) {
    return (
        <>
            <img src={netflix} alt='netflix' className='netflixlogo'/>
        </>
    );
}

export default NavLogo;